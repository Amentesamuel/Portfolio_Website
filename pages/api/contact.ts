import { connectToDatabase } from '@/libs/Mongodb';
import { connect } from 'http2'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
    }

 
export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>) {
 try {
    let {db}=await connectToDatabase();
    let data=JSON.parse(req.body);
    let newPost=await db.collection("contacts").insertOne(data);
    console.log(newPost);
    res.status(200).json({message:"success"});

 }catch(err){
    res.status(400).json({message:"something went wrong"});

 }
}