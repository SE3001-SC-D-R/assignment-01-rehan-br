const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    name: {
        type: String,
        required : true,
        unique : true
    },
    rollnumber: {
        type: String,
        required : true,
        unique : true
    },
    gender: {
        type: String,
        required : true,
     
    },
    birthdate: {
        type: String,
        required : true,
     
    },
    phonenumber: {
        type: String,
        required : true,
        unique : true
    },
   

    email: {
        type: String,
        required : true,
        unique : true
    },
    cnic:{
        type: String,
        required : true,
        unique : true
    },
    department: {
        type: String,
        required : true,
        
    },
});


const StudentModel = mongoose.model("student",StudentSchema);
module.exports = StudentModel;