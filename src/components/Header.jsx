import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
import Image from 'next/image'


const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(null)
    useEffect(() => {
        const authentication = async () => {
            const check = await ((await fetch('/api/check')).json())
            console.log(check.ok)
            if (check) {
                return setLoggedIn(check.session.user)
            }
            return
        }

        authentication()
    }, [])
    const pathname = usePathname()
    console.log(isLoggedIn)
    return (
        <header className="sticky top-0 z-10 bg-[#0000001c] backdrop-blur shadow w-full ">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
                <Link href="/" className="text-2xl font-bold text-primary" prefetch={false}>
                    Image Generator
                </Link>
                <div className="flex flex-row gap-2 items-center">
                    <nav className="hidden space-x-2 md:flex">
                        {
                            pathname !== '/explore'
                                ? <Link
                                    href="/explore"
                                    className="px-3 py-2 text-sm font-medium transition duration-300 rounded-md"
                                    prefetch={false}
                                >
                                    <Button size="sm">Explore</Button>
                                </Link>
                                : <Link
                                    href="/generate"
                                    className="px-3 py-2 text-sm font-medium transition duration-300 rounded-md"
                                    prefetch={false}
                                >
                                    <Button size="sm">Generate</Button>
                                </Link>
                        }
                    </nav>
                    {
                        isLoggedIn
                            ? (
                                <Link href={"/profile"}>
                                    <Image src={isLoggedIn.image} alt='profile' width={35} height={35} className='rounded-full' />
                                </Link>
                            )
                            : (
                                <Link href={"/signin"}>
                                    <Button variant="outline" size="sm">
                                        Sign In
                                    </Button>
                                </Link>
                            )
                    }

                </div>
            </div>
        </header>
    )
}

export default Header