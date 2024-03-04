import { MongoClient, MongoClientOptions } from 'mongodb';

const URI = process.env.DB_URL;
const options: MongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

if (!URI) {
    throw new Error("[please add your mongodb URI to .env]");
}

let client = new MongoClient(URI, options);
let clientPromise = client.connect()
    .catch((error) => {
        throw new Error(`Error connecting to MongoDB: ${error}`);
    });

export default clientPromise;
