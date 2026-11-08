import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studyhub';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error: any) {
    console.error(`[MongoDB] Connection error: ${error.message}`);
    console.warn(`[MongoDB] Notice: Make sure MongoDB is running locally at mongodb://127.0.0.1:27017/studyhub or specify MONGODB_URI in .env file (e.g. MongoDB Atlas cluster string).`);
  }
};

