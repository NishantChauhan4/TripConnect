const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://nishantchauhan44442:TlKq9kjHXtdESZVg@cluster0.3ozru.mongodb.net/trip-connect"
  );
};

dbConnect();
