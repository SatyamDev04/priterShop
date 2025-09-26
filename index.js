require('dotenv').config();
require('./db.config')
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./route/router');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Connect to MongoDB

let submissionsCollection;




app.get('/', (req, res) => {
  res.render('index', {
    title: 'Printer Shop — Checkout',
    samplePrice: '₹15,538'
  });
});


app.use('/api', router)

app.get('/', async (req, res) => {
  try {
    const rows = await submissionsCollection.find().sort({ _id: -1 }).limit(100).toArray();
    res.json({ ok: true, rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.toString() });
  }
});




app.listen(PORT, () => {
  console.log("sarver started", PORT)
})