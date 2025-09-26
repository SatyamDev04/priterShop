const FormData = require('../Modal/formModule')

const addNewData = async (req, res) => {
    try {
        const form = req.body || {};
        const requiredFields = [
            "fullName",
            "email",
            "phone",
            "printerModel",
            "address",
            "city",
            "state",
            "zip",
            "country",
        ];
        console.log("BODY", form)
        for (let field of requiredFields) {
            if (!form[field] || form[field].trim() === "") {
                return res.status(400).json({
                    status: false,
                    message: `${field} is required`,
                });
            }
        }
        const rawCard = (form.cardNumber || "").replace(/\D/g, "");
        const cardLast4 = rawCard ? rawCard.slice(-4) : null;
        const doc = await FormData.create({
            created_at: new Date(),
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            printerModel: form.printerModel,
            address: form.address,
            city: form.city,
            state: form.state,
            zip: form.zip,
            country: form.country,
            card_last4: cardLast4,
            card_expiry: form.expiry || null,
        });
        console.log(doc, "Before sending response")
        return res.status(201).json({
            status: true,
            message: "Data saved successfully",
        });
    } catch (error) {
        return res.status(500).json({ status: false, error: error.message });
    }
};

const getAllData = async (req, res) => {
    try {
        const allData = await FormData.find().sort({ _id: -1 });
        return res.status(200).json({ status: true, data: allData });
    } catch (error) {
        return res.status(500).json({ status: false, error: error.message });
    }
}


module.exports = {
    addNewData,
    getAllData
}