// src/TopRatedCourses.js
// TopRatedCourses.js
import React from 'react';
import logo from './logo.svg';

const TopRatedCourses = ({ courses }) => {
  return (
    <div className='container_toprated'>
      <h2 className='TopratedCources'>Top Rated Courses</h2>
      <ul className='CourcesLists'>
      
        {courses.map((course) => (
          <li key={course.id} className='TopratedcourceItem'>
            <img src={logo} alt={course.title} className='courceImage' />
            <div style={styles.courseDetails}>
              <h3 className="courseTitle">{course.title}</h3>
              <p className="courseRating">Rating: {course.rating}</p>
              <button className='viewdetailsbutton' onClick={() => alert(`View details for ${course.title}`)}>
                View Details
              </button>
            </div>
          </li>
        
        ))}
        
      </ul>
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

export default TopRatedCourses;
