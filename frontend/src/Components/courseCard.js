import React from 'react';
import './CSS/courseCard.css';
import {Row, Col} from 'react-bootstrap';
import {AiOutlineDelete} from 'react-icons/ai';
import axios from 'axios';

const CourseCard = ({Courses}) => {
    const handleDelete = async () => {
        await axios.delete(`http://localhost:3001/admin/deleteCourse/${Courses._id}`)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
        console.log("Course Deleted");
        window.location.reload();
    };

    return(
        <div>
            <div className="courseCard" style={{left:'54rem'}}>
                <tr>
                    <td>
                        <h3>
                            {Courses.courseId}
                        </h3>
                    </td>
                </tr>
                <Row>
                    <Col md="4">
                        <tr>
                            <td>
                                <strong>
                                    Course Name: 
                                </strong>
                            </td>
                            <td>
                                {Courses.name}
                            </td>
                        </tr>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <tr>
                            <td>
                                Credit Hours: 
                            </td>
                            <td>
                                {Courses.creditHours}
                            </td>
                        </tr>
                    </Col>
                </Row>
                <button className='handleDelete' onClick={handleDelete}>
                    <AiOutlineDelete/>
                </button>
            </div>
        </div>
    )
}

export default CourseCard;