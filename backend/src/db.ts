import mongoose, { mongo, MongooseError } from "mongoose";
require("dotenv").config();

const connectDB = async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_URI}`);
       console.log("Database is connected successfully")
    } catch (error) {
        console.log("Error while connecting to the database", error)
    }
    
};

export { connectDB };


// mongoose
//         .connect(`${process.env.MONGO_URI}`)
//         .then(() => console.log("Database is connected successfully"))
//         .catch((err) =>
//             console.log("Error while connecting to the database", err)
//         );
