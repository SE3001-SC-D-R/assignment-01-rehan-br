import { Axios } from 'axios';
import express from 'express';
import mongoose from 'mongoose';
import Course from '../models/course.js';
import studentCourse from '../models/studentCourse.js';

//add course

let router = express.Router();
router.route("/add").post((req, res) => {

    const {courseIdI, nameI, creditHoursI} = req.body;

    const courseId = courseIdI;
    const name = nameI
    const creditHours = creditHoursI
    const newCourse = new Course((
        courseId,
        name,
        creditHours
    ));

    newCourse.save()
    .then(() => res.json('Course Added!'))
    .catch(err => res.status(400).json('error: ' + err));
});

//edit course

router.route("/update/:Id").post((req, res) =>{
    Course.findById(req.params.Id)
    .then(course => {
        course.courseId = Number(req.body.courseId);
        course.name = req.body.Name;
        course.creditHours = req.body.creditHours;

        course.save()
        .then(() => res.json('Course Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Course
router.route("/deleteCourse").delete(async (req, res) => {

    const { id } = req.params;
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
            res.send();
        }
    });
});

export default router;