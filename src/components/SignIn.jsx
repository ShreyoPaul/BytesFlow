'use client'

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { RiRobot3Fill } from "react-icons/ri";

export default function SignIn() {
    const { data: session } = useSession();
    const route = useRouter()

    if (session) {
        return route.push("/")
    }
    return (
        <SessionProvider>
            <div className="flex flex-col items-center justify-center min-h-screen bg-lightdark px-4 py-12 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-6">
                    <div className="flex flex-col items-center">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                            <AvatarFallback>SP</AvatarFallback>
                        </Avatar>
                        <h1 className="text-3xl font-bold mt-4">Sign In</h1>
                    </div>
                    <div className="grid gap-4">
                        <Button className="w-full" onClick={() => { signIn() }}>
                            <ChromeIcon className="mr-2 h-4 w-4" />
                            Sign in with Google
                        </Button>
                    </div>
                </div>
            </div>
        </SessionProvider>
    )
}

function ChromeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}