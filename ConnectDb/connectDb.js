import mongoose from "mongoose";
// conncted databe
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.Mongo_URl, {
        dbName: "ShortUrl",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((c) =>
        console.log(`Databse connected safely with ${c.connection.host}`)
      );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
