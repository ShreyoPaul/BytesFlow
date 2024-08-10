'use client'

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import { MdHome } from "react-icons/md"
import Link from 'next/link';
import { RiRobot3Fill } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';

export default function Generate() {
    const [prompt, setPrompt] = useState('');
    const [user, setUser] = useState('')
    const [alt, setalt] = useState('')
    const [chat, setChat] = useState([])

    const handle = async () => {
        if (prompt === "" || prompt.trim() === "") return
        const res = await handleGenerate()
        if (res) {
            const obj = {
                id: chat.length,
                req: prompt,
                res
            }
            setChat(prev => [...prev, obj])
        }
    }

    const handleGenerate = async () => {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json();
        console.log(data)
        if (response.ok) {
            setUser(data.session.user.image)
            return {
                path: data.image, alt: data.alt
            }
        } else {
            console.error('Error:', data.error);
            toast.error(data.error)
            return null
        }
    };

    useEffect(() => {
        window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' })
        return () => window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' })
    }, [chat])

    console.log(user)

    return (
        <div className="generate-page flex flex-col justify-between items-center w-full min-h-screen px-12 bg-lightdark">
            <Toaster />
            <div className='flex flex-col gap-2 w-full p-4'>
                {
                    chat.map((x, i) => {
                        return (
                            <div className='w-full flex flex-col justify-items-stretch  gap-4' key={i}>
                                <div className='w-full flex flex-row justify-end  gap-4'>
                                    <div className='min-w-60 bg-[#bdd8bb] max-w-[60vw] p-3 rounded-lg'>{x.req}</div>
                                    <Link href={"/profile"} className='rounded-full'>
                                        <Image src={user} alt='user' width={40} height={40} className='rounded-full' />
                                    </Link>
                                </div>
                                <div className='w-full flex flex-row'>
                                    {
                                        x.res &&
                                        (
                                            <div className='w-1/3 flex flex-row gap-4'>
                                                <div className=''>
                                                    <RiRobot3Fill className='rounded-full bg-dark text-slate-50 p-2 w-10 h-10' />
                                                </div>
                                                <img
                                                    src={x.res.path}
                                                    width={600}
                                                    // height={400}
                                                    alt={x.res.path}
                                                    className="object-cover rounded-lg w-full"
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='sticky bottom-0 w-1/2 '>
                <div className="p-8 flex flex-row gap-4">
                    <Link href={"/"}>
                        <Button variant="outline" size="icon" className="px-3">
                            <MdHome className="h-4 w-4" />
                        </Button></Link>
                    <Input
                        placeholder="Enter your prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="shadow-xl"
                    />
                    <Button onClick={handle} className="shadow-xl">Generate</Button>
                </div>
            </div>
        </div>
    );
}
