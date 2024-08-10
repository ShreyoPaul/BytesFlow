'use client'

import { Button } from '@/components/ui/button';
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';
import Profile from '@/components/Profile';
import { useRouter } from 'next/navigation';

export default function page() {
  const { data: session } = useSession();
  const route = useRouter()

  if (!session) {
    return route.push("/signin")
  }

  return (
    <>
      <Profile name={session.user.name} email={session.user.email} signOut={signOut} image={session.user.image} />
    </>
  );
}
