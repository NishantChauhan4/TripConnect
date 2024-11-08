const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nishantchauhan44442:TlKq9kjHXtdESZVg@cluster0.3ozru.mongodb.net/trip-connect"
    );
    console.log("Mongo DB connected");
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
