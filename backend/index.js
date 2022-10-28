import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; //used if we want to use cross domain
import mongoose from 'mongoose';

import env from 'dotenv';
env.config();
const port = process.env.PORT || 3001;

// Importing user route
import router from './routes/admin.js';

const app = express()
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to DB boyyyyyy");
})

app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
// Adding a Router
app.use('/admin.js', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})