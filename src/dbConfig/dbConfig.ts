import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log("Mongodb connected successfully !!")
        })

        connection.on('error',(err)=>{
            console.log("Mongobd Connection error please make sure mongo running"+err);
            process.exit();
        })
    } catch (error) {
        console.log("Something Went Wrong !!")
        console.log(error)
    }
}