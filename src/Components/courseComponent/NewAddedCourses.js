// src/NewAddedCourses.js
// NewAddedCourses.js
import React from 'react';
import logo from './logo.svg';


const NewAddedCourses = ({ courses }) => {
  return (
    <div className='container_newlyadded'>
        <span className='smallorangenewadded'></span>
        <span className='smallbluenewadded'></span>
      <h2 className='newAddedCourses'>Newly Added Courses</h2>
      <ul className='courseList'>
        {courses.map((course) => (
          <li key={course.id} className='courseItem'>
            <img src={logo} alt={course.title} className='courceImage' />
            <div style={styles.courseDetails}>
              <h3 className="courseTitle">{course.title}</h3>
              <p className='courseRating'>Rating: {course.rating}</p>
              <button className='viewdetailsbutton' onClick={() => alert(`View details for ${course.title}`)}>
                View Details
              </button>
            </div>
          </li>
        ))}
        <span className='bluebignewadded'></span>
        <span className='orangebignewadded'></span>
        <span className='smallblue2newadded'></span>
      </ul>
    </div>
  );
};

const styles = {

  courseList: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },

  courseItemHover: {
    transform: 'scale(1.05)',
  },
  
  courseDetails: {
    padding: '15px',
  },
 
  viewDetailsButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease-in-out',
    marginTop: '10px',
  },
  viewDetailsButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default NewAddedCourses;
