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
router.route("/updateCourse/:id").put(async (req, res) => {
    const{id} = req.params;
    
    const newCourse = {
        courseId: req.body.courseId,
        name: req.body.name,
        creditHours: req.body.creditHours
    }

    console.log("Updated Course Attributes Set");
    console.log("Updating Course..");

    Course.findByIdAndUpdate(id, newCourse, function(err, updatedCourse){
        if(err){
            console.log(err);
        }
        else{
            res.json("Course Updated");
        }
    })
    .clone()
    .catch((err) => {
        console.log(err);
    });
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

//find course
router.route("/findCourse/:name").get(async (req, res) => {
    const {name} = req.params;
    Course.findOne({name : name})
    .then((Course) => {
        res.json(Course);
    })
    .catch((err) => {
        res.status(404).json({
            error: err,
        });
    });
});


export default router;