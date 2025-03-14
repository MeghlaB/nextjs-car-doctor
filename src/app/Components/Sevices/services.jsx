import dbcollection from '@/lib/dbConnect'
import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

export default async function Services() {
    // database thake data.....................
    const serviceCollection = dbcollection('text-services')
    const data = await serviceCollection.find({}).toArray()
    console.log(data)

  return (
    <div className='grid grid-cols-12 gap-4 container mx-auto border '>
    {
        data.map((item)=> {
            return (
                <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border border-gray-300 mx-auto rounded-[10px]"
                key={item._id}>
                {/* iamage */}
                    <Image src={item?.img} width={314} height={208} alt='car-doctor' className='rounded-[9px]'></Image>
                    {/* titile */}
                    <div className='py-8'>
                        <h1 className=' text-2xl lg:text-3xl font-bold'>{item?.title}</h1>
                        <div className='text-2xl font-bold text-red-500 flex items-center justify-between'>
                        <p className='text-2xl font-bold text-red-500'><span>Price :</span>{item?.price}</p>
                        <p><AiOutlineArrowRight /></p>
                        </div>
                    </div>
                </div>
            )
        })
      
    }
  </div>
  )
}
