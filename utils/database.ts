import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: process.env.MONGO_DBNAME,
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
