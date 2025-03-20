import  { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.mongouri 
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

// collection create ...........
export  const collectionGroup ={
  servicesCollection : 'text-services'
}

 export default function dbcollection(collectionName) {
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      return client.db(process.env.DB_Name).collection(collectionName)
    
}

