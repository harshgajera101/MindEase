import { useAuth } from "@clerk/clerk-react";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export async function startSession(topic: "depression" | "anxiety", score: number) {
  const { getToken } = useAuth();
  const token = await getToken();
  const res = await fetch(`${BACKEND}/start_session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ topic, score })
  });
  return await res.json();
}

export async function sendMessage(sessionId: string, message: string) {
  const { getToken } = useAuth();
  const token = await getToken();
  const res = await fetch(`${BACKEND}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ session_id: sessionId, message })
  });
  return await res.json();
}

export async function fetchAssessments() {
  const { getToken } = useAuth();
  const token = await getToken();
  const res = await fetch(`${BACKEND}/api/assessments`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return await res.json();
}

export async function fetchSessions() {
  const { getToken } = useAuth();
  const token = await getToken();
  const res = await fetch(`${BACKEND}/api/sessions`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return await res.json();
}

export async function fetchSessionMessages(sessionUuid: string) {
  const { getToken } = useAuth();
  const token = await getToken();
  const res = await fetch(`${BACKEND}/api/sessions/${sessionUuid}/messages`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return await res.json();
}


