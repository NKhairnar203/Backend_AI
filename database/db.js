import mongoose from "mongoose";

function connect() {
  console.log(process.env.MONGODB_URI);
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Helps prevent server selection errors
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connect;
