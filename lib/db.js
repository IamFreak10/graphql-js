const mongoose = require('mongoose');

const uri = process.env.DATABASE_URI;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('DB connected');
  } catch (err) {
    console.log(err);
  }
}

connectDB();
