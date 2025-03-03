//CommonJS
//dhruvin d12345678
const {MongoClient}=require("mongodb") //grabs mongoclient object from mongodb library 
require("dotenv").config({path:"./config.env"})
async function main()
{
    //const db = "mongodb+srv://dhruvindmehta:dhruvin1234@cluster0.fzzsy.mongodb.net/moviemate?retryWrites=true&w=majority";
    const db="mongodb+srv://dhruvindmehta:abcd1234@cluster0.fzzsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    const client =new MongoClient(db)
    try
    {
        await client.connect()
        const collections =await client.db("moviemate").collections()
        collections.forEach((collection)=>console.log(collection.s.namespace.collection))
    }
    catch(e)
    {
        console.log(e)
    }
    finally{
        await client.close()
    }
}
main()
