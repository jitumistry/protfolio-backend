 const mongoose = require('mongoose');
 require('dotenv').config();
 const url = process.env.url;
 mongoose.connect(url);