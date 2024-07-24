import mongoose from "mongoose";
import "dotenv/config";
export async function conncetDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.mensage);
  }
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
