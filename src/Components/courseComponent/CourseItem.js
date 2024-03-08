// src/CourseItem.js
// CourseItem.js
import React from 'react';

const CourseItem = ({ course }) => {
  return (
    <li style={styles.courseItem}>
      <img src={`/images/${course.image}`} alt={course.title} style={styles.courseImage} />
      <div style={styles.courseDetails}>
        <h3 style={styles.courseTitle}>{course.title}</h3>
        <p style={styles.courseRating}>Rating: {course.rating}</p>
      </div>
    </li>
  );
};

const styles = {
  courseItem: {
    marginBottom: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  },
  courseItemHover: {
    transform: 'scale(1.05)',
  },
  courseImage: {
    width: '990px',
    height: '327px',
    top: '1024px',
    left: '374px',
    
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
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
};

export default CourseItem;
