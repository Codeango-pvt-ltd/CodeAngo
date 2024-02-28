// src/NewAddedCourses.js
// NewAddedCourses.js
import React from 'react';
import logo from './logo.svg';


const NewAddedCourses = ({ courses }) => {
  return (
    <div style={styles.newAddedCourses}>
      <h1 style={styles.heading}>Devops Courses</h1>
      <ul style={styles.courseList}>
        {courses.map((course) => (
          <li key={course.id} style={styles.courseItem}>
            <img src={logo} alt={course.title} style={styles.courseImage} />
            <div style={styles.courseDetails}>
              <h3 style={styles.courseTitle}>{course.title}</h3>
              <p style={styles.courseRating}>Rating: {course.rating}</p>
              <button style={styles.viewDetailsButton} onClick={() => alert(`View details for ${course.title}`)}>
              View course Details


              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  newAddedCourses: {
    marginBottom: '30px',
  },
  heading: {
    color: '#333',
  },
  courseList: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  courseItem: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    width: 'calc(33.33% - 20px)',
    marginBottom: '20px',
    cursor: 'pointer',
  },
  courseItemHover: {
    transform: 'scale(1.05)',
  },
  courseImage: {
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    top: '1024px',
    left: '374px',
  },
  courseDetails: {
    padding: '15px',
  },
  courseTitle: {
    margin: '0',
    color: '#333',
  },
  courseRating: {
    margin: '0',
    color: '#777',
    color: 'orange',
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
