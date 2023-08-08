import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async (): Promise<void> => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        const options = {
            dbName: "next-blogs"            
        };
        await mongoose.connect(process.env.MONGODB_URI!, options)
        isConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}