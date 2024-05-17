"use client"
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [id, setId] = useState("")
  const user: any = useAuthContext()
  useEffect(() => {
    const id = user?.user
    setId(id)
  }, [])
  if(id){
    router.push('/home')
  }else{
    router.push('/login')
  }
  return null;
}
