const mongoose = require("mongoose");
require('dotenv').config();
 
// const MONGO_URI = process.env.MONGO_URI;
MONGO_URI = "mongodb+srv://satdad234_db_user:cUxL9H0ghM2Hf3s5@cluster0.wtkbbb6.mongodb.net/printerShopDB?retryWrites=true&w=majority&appName=Cluster0"
 
 
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    });