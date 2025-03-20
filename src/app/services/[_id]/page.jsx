import Banner from '@/app/Components/ComononBanner/Banner'
import dbcollection, { collectionGroup } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import React from 'react'

export default  async function Servicepage({params}) {
    const id = await params
    console.log(id)
    // services collection thke data fetch kora 
    const serviceCollection = dbcollection(collectionGroup.servicesCollection)
    const data = await serviceCollection.findOne({_id: new ObjectId(id._id)})



  return (
    <div>
      <Banner></Banner>
      <p>{id._id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
