import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect('//TODO: Add connection to mongoDBAtlas');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
