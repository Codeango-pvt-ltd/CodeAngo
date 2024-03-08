// src/HighRatedCourses.js
// HighRatedCourses.js
import React from 'react';
import logo from './logo.svg';


const HighRatedCourses = ({ courses }) => {
  return (
    <div className='container_highrated'>
      <span className='bigorangehighrated'></span>
      <span className='smallblue2highrated'></span>
      <span className='small2rangehighrated'></span>
      <h2 className='highRatedCourses'>High Rated Courses</h2>
      <ul className='courseList3'>
        {courses.map((course) => (
          <li key={course.id} className='courseItem'>
            <img src={logo} alt={course.title} className='courceImage'/>
            <div style={styles.courseDetails}>

              <h3 className='courseTitle'>{course.title}</h3>
              <p className='courseRating'>Rating: {course.rating}</p>
              <button className='viewdetailsbutton' onClick={() => alert(`View details for ${course.title}`)}>
                View Details
              </button>
            </div>
          </li>
        ))}
        <span className='smallorangehighrated'></span>
        <span className='bigbluehighrated'></span>
      </ul>
      <hr className='highratedhr'></hr>
    </div>
  );
};

const styles = {


  courseItemHover: {
    transform: 'scale(1.05)',
  },
 
  courseDetails: {
    padding: '15px',
  },

  
  viewDetailsButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default HighRatedCourses;
