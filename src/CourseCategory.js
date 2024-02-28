// src/CourseCategory.js
// CourseCategory.js
import React from 'react';
import CourseItem from './CourseItem';

const CourseCategory = ({ category, courses }) => {
  return (
    <div style={styles.courseCategory}>
      <h2 style={styles.categoryTitle}>{category}</h2>
      <ul style={styles.courseList}>
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
};

const styles = {
  courseCategory: {
    marginBottom: '30px',
  },
  categoryTitle: {
    color: '#333',
  },
  courseList: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
};

export default CourseCategory;
