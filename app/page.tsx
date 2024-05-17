"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter()
  
  const [id, setId] = useState("")
  useEffect(() => {
    const id = sessionStorage?.getItem('sessionId');
    setId(id)
  }, [])
  if(id){
    router.push('/home')
  }else{
    router.push('/login')
  }
  return null;
}
