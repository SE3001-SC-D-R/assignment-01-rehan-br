import React from 'react';
import './CSS/courseCard.css';
import {Row, Col} from 'react-bootstrap';

const CourseCard = ({Courses}) => {

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
            </div>
        </div>
    )
}

export default CourseCard;