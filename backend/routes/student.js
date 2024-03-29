import express from 'express';
import StudentCourse from '../models/studentCourse.js';

let router = express.Router();

//Adding new student course

router.route("/add").post(async (req, res) => {
    const courseId = req.body.courseId;
    const rollnumber = req.body.rollnumber;

    const newStdCourse = await StudentCourse.create({
        courseId,
        rollnumber
    });

    console.log("Student Course set. Saving..");

    newStdCourse.save()
    .then(() => res.json("Student's Course Added"))
    .catch(err => res.status(400).json('error: ' + err));
});

//Viewing Student course


router.route("/viewCourses").get((req, res) => {
    StudentCourse.find({}, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

export default router;