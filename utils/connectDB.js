import mongoose, { connections } from 'mongoose';

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_LINK);
  console.log('connected to db');
}

export default connectDB;
