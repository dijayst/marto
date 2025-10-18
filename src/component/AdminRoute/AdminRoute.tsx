"use client";
import React, { useEffect } from 'react'
import { useAuthStore } from '../Login/login';
import { useRouter } from 'next/navigation';

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, role } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn || role !== "admin") {
      router.push("/login"); 
    }
  }, [isLoggedIn, role, router]);

  if (!isLoggedIn || role !== "admin") {
    return null; 
  }

  return <>{children}</>;
}
