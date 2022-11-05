import express from 'express';
import mongoose from 'mongoose';
import Course from '../models/course.js';

//add course

let router = express.Router();
router.route("/add").post(async (req, res) => {

    const courseId = req.body.courseId;
    const name = req.body.name;
    const creditHours = req.body.creditHours;

    console.log(courseId, name, creditHours);
    console.log("Course Attributes set.. Adding course");

    const newCourse = await Course.create({
        courseId,
        name,
        creditHours
    });
    
    console.log("Course Set. Saving..");

    newCourse.save()
    .then(() => res.json('Course Added!'))
    .catch(err => res.status(400).json('error: ' + err));
});

//edit course

router.route("/update/:id").post(async (req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"});
    }

    const course = await Course.findOneAndUpdate(
        {courseId : id},
        {
            ...req.body,
        }
    );

    if(course){
        res.status(200).json(course);
    }
    else{
        res.status(404).json({error: "Course not found"});
    }
});

//Delete Course
router.route("/deleteCourse/:id").delete(async (req, res) => {

    const { id } = req.params;

    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid Course ID'});
    }

    const course = await Course.findOneAndDelete({_id: id});
    if(course){
        res.status(200).json(course);
    }
    else{
        res.status(404).json({error: 'No such Course'});
    }
    
});

//view courses
router.route("/viewCourses").get((req, res) => {
    Course.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

export default router;