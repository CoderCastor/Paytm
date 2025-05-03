import express from "express";
import userRouter from "./routes/UserRoutes";
import { connectDB } from "./db";
import mainRouter from './routes/index'
import cors from 'cors'
import { PORT } from "./config";

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api/v1',mainRouter)

app.use(userRouter);

async function main() {
    try {
        await connectDB();
        app.listen(PORT, () =>
            console.log(`Server is running on port : ${PORT}`)
        );
    } catch (err) {
        console.log(err);
    }
}

main();
