import {MongoClient} from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.DB_NAME;

if(!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
if(!MONGODB_NAME) {
    throw new Error('Please define the MONGODB_NAME environment variable inside .env.local');
}

let cachedClient:any = null;
let cachedDb:any = null;

export async function connectToDatabase() {
    if(cachedClient && cachedDb) {
        return {client:cachedClient, db:cachedDb};
    }
   const options :any = {
   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}
    const client = await MongoClient.connect(MONGODB_URI!,options);
    const db = await client.db(MONGODB_NAME);
    
    cachedClient = client;
    cachedDb = db;

    return {
        client:cachedClient, 
        db:cachedDb
    };
}
