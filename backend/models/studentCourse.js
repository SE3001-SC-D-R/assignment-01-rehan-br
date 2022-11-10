import e from 'express';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const studentCourseSchema = new Schema(
    {
        courseId: {
            type : String,
            required : true,
            unique: true
        },
        rollnumber: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps : true,
    },
);

const studentCourse = mongoose.model('StudentCourse', studentCourseSchema);

export default studentCourse;