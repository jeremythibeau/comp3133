import React from 'react';
import Courses from './courses';

const Student = props => {
    return ( <><p> Student <b>{props.name}</b> with student number <b>{props.number}</b> </p> 
    <Courses/></>);
}
 
export default Student;