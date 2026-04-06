import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const dbconnect = async() =>{
    try{
        await mongoose.connect(db)
        console.log('db connected successfully');

        
    }catch(error){
        console.log('error connecting to database');
        
    }
    
}
