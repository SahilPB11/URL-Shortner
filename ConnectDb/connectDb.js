import mongoose from "mongoose";
// conncted with database
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.Mongo_URl, {
        dbName: "ShortUrl",
      })
      .then((c) =>
        console.log(`Databse connected safely with ${c.connection.host}`)
      );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
