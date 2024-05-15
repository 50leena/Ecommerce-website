import mongoose from "mongoose";
import colors from "colors";

// 'mongodb://127.0.0.1:27017/ecommerce'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log(
      `Connected to MongoDB database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
