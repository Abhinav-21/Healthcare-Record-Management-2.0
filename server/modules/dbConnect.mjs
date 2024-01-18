import pkg from 'pg';

const { Client } = pkg;
const client = new Client({
  connectionString: DB_URL,
});

//connect database function
async function connectDB() {
    try {
      await client.connect();
      console.log("DB is connected!");
      const select = `USE records;`;
      try {
        const result = await client.query(select);
        console.log("Database records selected !");
      } catch (err) {
        console.error(err);
      } 
    } catch (err) {
      console.error(err);
    }
  }

  export{
    connectDB,
    client
  }