import mongoose from "mongoose";
// connection in mongo db
const connectDb = async () => {
  await mongoose
    .connect(process.env.MOBGODB_URI!, {
      tls: true,
    })
    .then(() => {
      console.log("Connected successfully"), alert("Connected successfully");
    })
    .catch((err) => console.log(err));
};

export default connectDb;
