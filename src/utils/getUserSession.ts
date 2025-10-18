// utils/getUserSession.ts
export async function getUserSession() {
  const res = await fetch("/api/session", {
    method: "GET",
    credentials: "include", // 👈 ensures cookies are sent with the request
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.user;
}
