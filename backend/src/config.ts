import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET as string
const MONGO_URI = process.env.MONGO_URI as string
const HASH_SECRET = process.env.HASH_SECRET as string
const PORT = process.env.PORT

export {
    JWT_SECRET,
    MONGO_URI,
    PORT,
    HASH_SECRET
}

