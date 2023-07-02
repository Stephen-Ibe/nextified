import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGODB_URI ??
        "mongodb+srv://admin:admin@cluster0.i3skb.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "admin",
      }
    );

    isConnected = true;

    console.log("MongoDb Connected");
  } catch (err) {
    console.log(err);
  }
};
