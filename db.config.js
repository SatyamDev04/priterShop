const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://satdad234_db_user:cUxL9H0ghM2Hf3s5@cluster0.wtkbbb6.mongodb.net/?printerShopDBretryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    });

