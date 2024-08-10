import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Header from "./Header"

export default function Home() {
    
    return (
        <div className="flex flex-col min-h-screen bg-lightdark">
            <Header  />
            <main className="flex-1">
                <section className="container min-h-screen flex items-center justify-center gap-8 px-6  mx-auto sm:grid-cols-2 sm:px-6 lg:px-12">
                    <div className="space-y-4 flex-1">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Create Stunning Images</h1>
                        <p className="text-muted-foreground">
                            Our powerful image generator allows you to create unique and beautiful images with just a few clicks.
                        </p>
                        <div className="flex gap-2">
                            <Link href={"/generate"}>
                                <Button>Generate Image</Button>
                            </Link>
                            <Link href={"/explore"}>
                                <Button variant="outline">View Gallery</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full flex-1 h-64 overflow-hidden rounded-lg shadow-lg sm:h-80 lg:h-96">
                        <Image
                            src="/pic1.jpeg"
                            alt="Generated Image"
                            width={1200}
                            height={800}
                            className="object-cover w-full h-full"
                            style={{ aspectRatio: "1200/800", objectFit: "cover" }}
                        />
                    </div>
                </section>
                <section className="container grid grid-cols-1 gap-8 px-4 py-12 mx-auto sm:grid-cols-2 md:grid-cols-3 sm:px-6 lg:px-8">
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg sm:h-80 lg:h-96">
                        <Image
                            src="/p1.jpeg"
                            alt="Generated Image"
                            width={1200}
                            height={800}
                            className="object-cover w-full h-auto"
                        />
                    </div>
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg sm:h-80 lg:h-96">
                        <Image
                            src="/p2.jpg"
                            alt="Generated Image"
                            width={1200}
                            height={800}
                            className="object-cover w-full h-auto"
                        />
                    </div>
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg sm:h-80 lg:h-96">
                        <Image
                            src="/p3.jpeg"
                            alt="Generated Image"
                            width={1200}
                            height={800}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </section>
            </main>
            <footer className="bg-dark">
                <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
                    <p className="text-sm text-muted-foreground">&copy; 2024 Image Generator. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary-foreground" prefetch={false}>
                            <TwitterIcon className="w-5 h-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary-foreground" prefetch={false}>
                            <GitlabIcon className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary-foreground" prefetch={false}>
                            <InstagramIcon className="w-5 h-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function GitlabIcon(props) {
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
            <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
        </svg>
    )
}


function InstagramIcon(props) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function TwitterIcon(props) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}