// components/SessionProvider.tsx
"use client";
import { useEffect, useState } from "react";
import { getUserSession } from "@/utils/getUserSession";

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUser() {
      const sessionUser = await getUserSession();
      if (sessionUser) setUser(sessionUser);
    }
    checkUser();
  }, []);

  return <>{children}</>;
}
