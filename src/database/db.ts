import { MongoClient } from 'mongodb';

const URI = process.env.DB_URL;
const options = {
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
        process.exit(1); // This line was moved inside the catch block
    });

export default clientPromise;
