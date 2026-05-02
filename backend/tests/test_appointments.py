"""Backend tests for Girish Children Clinic API."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://dr-girish-pediatric.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Root -----
class TestRoot:
    def test_api_root(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert isinstance(data["message"], str)
        assert len(data["message"]) > 0


# ----- Appointments -----
class TestAppointmentsCreate:
    def test_create_valid_minimal(self, api_client):
        payload = {"name": "TEST_Parent A", "phone": "+91 9876543210"}
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "_id" not in data
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == "TEST_Parent A"
        assert data["phone"] == "+91 9876543210"
        assert "created_at" in data
        assert data.get("preferred_time") is None
        assert data.get("message") is None

    def test_create_valid_full(self, api_client):
        payload = {
            "name": "TEST_Parent B",
            "phone": "9110459170",
            "preferred_time": "Morning (9:30 AM – 1:00 PM)",
            "message": "vaccination query",
        }
        r = api_client.post(f"{API}/appointments", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "_id" not in data
        assert data["preferred_time"] == payload["preferred_time"]
        assert data["message"] == "vaccination query"

    def test_reject_empty_name(self, api_client):
        r = api_client.post(f"{API}/appointments", json={"name": "", "phone": "9876543210"})
        assert r.status_code == 422

    def test_reject_whitespace_name(self, api_client):
        # "   " -> min_length=2 passes length, but validator strips -> should fail.
        r = api_client.post(f"{API}/appointments", json={"name": "   ", "phone": "9876543210"})
        assert r.status_code == 422

    def test_reject_short_phone(self, api_client):
        r = api_client.post(f"{API}/appointments", json={"name": "TEST_Parent C", "phone": "12345"})
        assert r.status_code == 422

    def test_reject_non_digit_short_phone(self, api_client):
        # letters don't count as digits
        r = api_client.post(f"{API}/appointments", json={"name": "TEST_Parent D", "phone": "abcdefg"})
        assert r.status_code == 422

    def test_reject_missing_fields(self, api_client):
        r = api_client.post(f"{API}/appointments", json={})
        assert r.status_code == 422


class TestAppointmentsList:
    def test_list_returns_list_no_objectid_sorted(self, api_client):
        # Seed a unique entry then list
        seed = {"name": "TEST_ListSeed", "phone": "9998887776"}
        c = api_client.post(f"{API}/appointments", json=seed)
        assert c.status_code == 201
        created_id = c.json()["id"]

        r = api_client.get(f"{API}/appointments")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1

        # No _id field anywhere
        for it in items:
            assert "_id" not in it, f"MongoDB _id leaked: {it}"
            assert "id" in it
            assert "name" in it
            assert "phone" in it
            assert "created_at" in it

        # Check the seeded appointment is present
        ids = [it["id"] for it in items]
        assert created_id in ids

        # Verify sorted desc by created_at (first item should be >= last item)
        if len(items) >= 2:
            first_ts = items[0]["created_at"]
            last_ts = items[-1]["created_at"]
            assert first_ts >= last_ts
