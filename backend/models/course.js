import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        courseId : {
            type: String,
            required: true,
        },
        name : {
            type: String,
            required : true,
        },
        creditHours : {
            type : Number,
            required : true
        }
    },
    {
        timestamps : true,
    }
);

const Course = mongoose.model('Course', courseSchema);

export default Course;