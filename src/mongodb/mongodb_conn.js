import mongoose from 'mongoose';



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    .then(
        console.log("Connection is succesfully created")
    );
    console.log("MongoDB Connected to Cloud");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};


export {connectDB};
