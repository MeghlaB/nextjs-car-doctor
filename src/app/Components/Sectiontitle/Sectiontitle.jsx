import React from 'react'

export default function SectionTitle({title,headings,subHeadings}) {
  return (
    <div className='md:w-4/12 mx-auto text-center'>
    <p className='py-2 text-red-500 text-xl font-semibold'> {title}</p>
      <p className='py-2 text-2xl lg:text-4xl font-bold '> --- {subHeadings} --- </p>
      <h3 className=' text-gray-500 border-y-4 py-4 mb-10'>{headings}</h3>
    </div>
  )
}