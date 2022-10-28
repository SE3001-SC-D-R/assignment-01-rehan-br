import e from 'express';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const studentCourseSchema = new Schema(
    {
        course: {
            type : Schema.Types.ObjectId,
            ref : 'Course',
        },
    },
    {
        timestamps : true,
    },
);

const studentCourse = mongoose.Schema('StudentCourse', studentCourseSchema);

export default studentCourse;