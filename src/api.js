const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export async function sendData(payload) {
  const res = await fetch(`${API_BASE_URL}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  return data.message;
}

export async function getReport() {
  const res = await fetch(`${API_BASE_URL}/report`);
  return res.json();
}
