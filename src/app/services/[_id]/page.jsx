import Banner from '@/app/Components/ComononBanner/Banner'
import dbcollection, { collectionGroup } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import React from 'react'
import Image from "next/image";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

export default  async function Servicepage({params}) {
    const id = await params
    console.log(id)
    // services collection thke data fetch kora 
    const serviceCollection = dbcollection(collectionGroup.servicesCollection)
    const data = await serviceCollection.findOne({_id: new ObjectId(id._id)})

    // services
    const services = [
      "Full Car Repair",
      "Engine Diagnostics",
      "Battery Replacement",
      "Oil Change",
      "Brake Repair"
    ];
    

  return (
    <div>
      <Banner></Banner>
      {/* services details */}
      <section className='mt-[70px]  ' >
      <div className='grid grid-cols-12  w-[1137px]  mx-auto gap-4 '>
      {/* left site cols-8 */}
      <div className='   col-span-8  '>
   
       <div>
          <Image src={data?.img} alt='image loading........' width={750} height={200}></Image>
       </div>
       <div >
        <h1 className='py-4 text-4xl font-bold'>{data?.title}</h1>
        <div className='text-gray-500'>
          <p>{data?.description}</p>
        </div>
       </div>







      </div>

        {/* right site cols-4 */}
        <div  className=' col-span-4 w-[364px] h-[400px] bg-[#F3F3F3] rounded-2xl'>
       
      <h1 className="text-2xl font-bold ps-4 py-1.5">Services</h1>
      <div className="py-4 space-y-4">
        {services.map((service, index) => (
          <div key={index} className="p-3 bg-white max-w-xs mx-auto flex items-center justify-between">
            <h1>{service}</h1>
            <Link href="/">
              <AiOutlineArrowRight />
            </Link>
          </div>
        ))}

    </div>
         
        </div>

      </div>

      </section>














      <p>{id._id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
