"use client";
import Trackorder from '@/component/Trackorder/Trackorder'
import { useAuthStoree } from '@/component/Ustestore';
import { useRouter } from 'next/navigation';

import React, { useEffect } from 'react'

export default function page() {
   const { isLoggedIn } = useAuthStoree();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login"); 
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null; 

  return (
    <Trackorder/>
  )
}
