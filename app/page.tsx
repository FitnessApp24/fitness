"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  const id = sessionStorage?.getItem('sessionId');
  if(id){
    router.push('/home')
  }else{
    router.push('/login')
  }
  return null;
}
