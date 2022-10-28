import router from 'express';
import Course from '../models/course.js';
import studentCourse from '../models/studentCourse.js';

//add course

router.Router();
router.Router('/add').post((req, res) => {

    const courseId = req.body.Title;
    const name = req.body.Name;
    const creditHours = req.body.creditHours;
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
})