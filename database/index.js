const MongoClient = require('mongodb').MongoClient;

let database = null;

const initDatabase = async () => {
    try {
        database = await MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true }).then(client => client.db('mihishop'));
        console.log('database initialized');
    } catch (e) {
        console.log(e);
    }
};

const getCollection = (collectionName) => {
    return database.collection(collectionName);
};

module.exports = {
    initDatabase,
    getCollection
};
