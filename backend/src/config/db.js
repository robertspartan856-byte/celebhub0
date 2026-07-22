import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGODB_URI || "mongodb://spartanrobert16_db_user:Npkh9j3EVSMdmJAL@ac-tdxsafk-shard-00-00.lsj3gqm.mongodb.net:27017,ac-tdxsafk-shard-00-01.lsj3gqm.mongodb.net:27017,ac-tdxsafk-shard-00-02.lsj3gqm.mongodb.net:27017/?ssl=true&replicaSet=atlas-n4j5b4-shard-0&authSource=admin&appName=Celebhub";

  if (!process.env.MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI not set. Using provided Atlas connection string.");
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("⚠️ MongoDB connection failed:", error.message);
  }
}
