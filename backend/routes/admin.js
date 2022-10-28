import router from 'express';
import Course from '../models/course.js';
import studentCourse from '../models/studentCourse.js';

//add course

router.Router();
router.Router('/add').post((req, res) => {

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

router.Router('/update/:Id').post((req, res) =>{
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

//view courses
router.Router('/viewCourses').get((res, req) => {
    // Course.find({}, (err, result) => {
    //     if(err){
    //         res.json(err);
    //     } else {
    //         res.json(result);
    //         res.send();
    //     }
    // });

    res.send("chal jao bhai");
});

export default router;