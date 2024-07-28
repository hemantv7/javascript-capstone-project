const { MongoClient } = require('mongodb');

let dbInstance = null;

async function connectToDatabase() {
    const uri = 'your-mongodb-connection-string'; // Replace with your MongoDB connection string
    const dbName = 'giftDB';

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Task 1: Connect to MongoDB
        await client.connect();

        // Task 2: Connect to database giftDB and store in variable dbInstance
        dbInstance = client.db(dbName);

        // Task 3: Return the database instance
        return dbInstance;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to connect to the database');
    }
}

module.exports = { connectToDatabase };
