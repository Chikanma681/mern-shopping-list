const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const items = require('./routes/api/items')
const app = express();

//Bodyparser Middleware 
app.use(bodyParser.json());
app.use(cors())
//DB Config
const db =  require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('MongoDB connected...'))
    .catch(err=>console.log(err));

// Use Routes
app.use('/api/items',items)
const port = process.env.port || 5000;


app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));