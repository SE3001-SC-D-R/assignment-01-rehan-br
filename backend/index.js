/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://rehanbr:nothing123@cluster0.1f7glet.mongodb.net/?retryWrites=true&w=majority");

// Importing user route
import router from './routes/users.js';
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())
// Adding a Router
app.use('/users', router);