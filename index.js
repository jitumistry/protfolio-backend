const express = require('express');
require('./db');
let users = require('./model/contact');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/contact',async (req, res) => {
    let user = new users(req.body);
    let result = await user.save();
    res.send(result);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});