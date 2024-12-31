const mongoose = require("mongoose");



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URl).then((data) => {
      console.log(
        `Database connected with ${data.connection.host} listening to port ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
