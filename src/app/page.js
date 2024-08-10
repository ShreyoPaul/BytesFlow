'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { SessionProvider } from "next-auth/react";
import Home from "@/components/Home";

export default function page() {
  
  return (
    <SessionProvider>
      <Home />
    </SessionProvider>
  );
}
