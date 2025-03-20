import Banner from '@/app/Components/ComononBanner/Banner'
import dbcollection, { collectionGroup } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import React from 'react'
import Image from "next/image";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { ClientPageRoot } from 'next/dist/client/components/client-page';

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

       {/* facility */}
       <div className='grid grid-cols-2 gap-4  border-amber-950 py-4 '>
        {
          data.facility.map(item=>{
            return (
              <div key={item._id} className='bg-[#F3F3F3] w-[364px] h-[204px] rounded-2xl  shadow-accent border-t-4 border-t-red-700'>
               <div className=' ps-6 pt-4'>
               <h1 className='text-2xl font-bold space-y-4'>{item.name}</h1>
               <p className='text-gray-500  '>{item?.details}</p>
               </div>
              </div>
            )
          })
        }

       </div>
        <div>
          <div>
            <h4 className='text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</h4>
          </div>

          <div className='pt-8'>
            <h1 className='text-3xl font-bold'>3 Simple Steps to Process</h1>
            <div>
            <h4 className='text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</h4>
          </div>
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














      
    </div>
  )
}
