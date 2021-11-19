import mongoose from "mongoose";

export default async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/prueba-graphQl", {
            useNewUrlParser: true,
        });
    
        console.log(">>> db is connected");
    }
    catch(e){
        console.log(`>>> error: ${e}`);
    }

}
