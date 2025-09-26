const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now,
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    printerModel: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: String,
    },
    country: {
        type: String,
    },
    card_last4: {
        type: String,
    },
    card_expiry: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model("FormData", submissionSchema);
