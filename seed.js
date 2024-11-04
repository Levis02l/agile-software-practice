const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

const url = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017`;

async function seedDatabase() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db("user-account"); 
    const collection = db.collection("movies"); 

    const dataPath = path.join(__dirname, "seeding.json");
    const seedData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    await collection.insertMany(seedData);
    console.log("Database seeded successfully with movie data!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);
