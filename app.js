const { MongoClient } =  require("mongodb")
const uri = require("./atlas_uri")


console.log(uri);

const client = new MongoClient(uri)

const dbname = "bank"

const main = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
    } catch (err){
        console.log(`Error connecting to the database: ${err}`);
    } finally {
        await client.close();
    }
};
// Run the main function

main();

