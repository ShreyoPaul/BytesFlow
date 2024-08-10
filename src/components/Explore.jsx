'use client'

import { gallary } from '@/data/gallary'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const Explore = () => {
    const [data, setData] = useState({
        w: [],
        x: [],
        y: [],
        z: []
    })

    useEffect(() => {
        const sliceSize = gallary.length / 4
        setData(prev => { return { ...prev, ["w"]: gallary.slice(0, sliceSize) } })
        setData(prev => { return { ...prev, ["x"]: gallary.slice(sliceSize, 2 * sliceSize) } })
        setData(prev => { return { ...prev, ["y"]: gallary.slice(2 * sliceSize, 3 * sliceSize) } })
        setData(prev => { return { ...prev, ["z"]: gallary.slice(3 * sliceSize, 4 * sliceSize) } })
    }, [])
    console.log(data)
    return (
        <div className=" w-full flex flex-col items-center bg-lightdark min-h-screen">
            <Header />
            <h2 className="text-4xl font-bold text-center mt-8 mb-6">Explore Gallery</h2>
            <div className="flex flex-wrap flex-row justify-center gap-2 w-full">
                <div className='w-1/5 flex flex-col gap-2'>
                    {
                        data.w.map((pic, i) => {
                            return (
                                <div className='w-full shadow-lg' key={i}>
                                    <img
                                        src={pic.path}
                                        width={600}
                                        // height={400}
                                        alt={pic.alt}
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-1/5 flex flex-col gap-2'>
                    {
                        data.x.map((pic, i) => {
                            return (
                                <div className='w-full shadow-lg' key={i}>
                                    <img
                                        src={pic.path}
                                        width={600}
                                        // height={400}
                                        alt={pic.alt}
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-1/5 flex flex-col gap-2'>
                    {
                        data.y.map((pic, i) => {
                            return (
                                <div className='w-full shadow-lg' key={i}>
                                    <img
                                        src={pic.path}
                                        width={600}
                                        // height={400}
                                        alt={pic.alt}
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-1/5 flex flex-col gap-2'>
                    {
                        data.z.map((pic, i) => {
                            return (
                                <div className='w-full shadow-lg' key={i}>
                                    <img
                                        src={pic.path}
                                        width={600}
                                        // height={400}
                                        alt={pic.alt}
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Explore