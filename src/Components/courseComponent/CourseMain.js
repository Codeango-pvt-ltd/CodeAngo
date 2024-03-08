
import React, { useState } from 'react';
import './CourseMain.css';
import TopRatedCourses from './TopRatedCourses';
import NewAddedCourses from './NewAddedCourses';
import HighRatedCourses from './HighRatedCourses';

const App = () => {
  const courseData = [
    {
      category: 'Programming',
      courses: [
        { id: 1, title: 'Introduction to React', image: 'logo.svg', rating: 4.5, dateAdded: '2023-01-01' },
        { id: 2, title: 'Advanced JavaScript', image: 'advanced_js.jpg', rating: 4.8, dateAdded: '2023-02-15' },
      ],
    },
    {
      category: 'Design',
      courses: [
        { id: 3, title: 'UI/UX Basics', image: 'ui_ux_basics.jpg', rating: 4.2, dateAdded: '2023-03-10' },
        { id: 4, title: 'Responsive Web Design', image: 'responsive_design.jpg', rating: 4.7, dateAdded: '2023-04-05' },
      ],
    },
  ];

  const getTopRatedCourses = (courseData) => {
    const allCourses = courseData.reduce((acc, category) => acc.concat(category.courses), []);
    return allCourses.sort((a, b) => b.rating - a.rating).slice(0, 4);
  };

  const getNewAddedCourses = (courseData) => {
    const allCourses = courseData.reduce((acc, category) => acc.concat(category.courses), []);
    return allCourses.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 4);
  };

  const getHighRatedCourses = (courseData) => {
    const allCourses = courseData.reduce((acc, category) => acc.concat(category.courses), []);
    return allCourses.filter(course => course.rating >= 4.5);
  };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setSelectedCourse(null); // Reset selected course when changing category
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1 className='courseCategories'>Course Categories</h1>
        <form>
          <select value={selectedCategory} onChange={handleCategoryChange}  className='select_option'>
            <option value="All">All</option>
            {courseData.map((category) => (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </form>
      </div>
      
      {selectedCourse && (
        <div className="content" style={styles.content}>
          <h2>Selected Course</h2>
          <p>Title: {selectedCourse.title}</p>
          <p>Rating: {selectedCourse.rating}</p>
          <p>Date Added: {selectedCourse.dateAdded}</p>
        </div>
      )}
      <TopRatedCourses courses={getTopRatedCourses(courseData)} />
      <NewAddedCourses courses={getNewAddedCourses(courseData)} />
      <HighRatedCourses courses={getHighRatedCourses(courseData)} /> 
    </div>
  );
};

const styles = {
    selectColor:{
  /* Rectangle 13 */


},
  container: {
    display: 'flex',
    position: 'relative',
    left: '231px',
  },
  slider: {
    width: '50px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'absolute',
    left: '0',
    top: '10px',
  },
  content: {
    flex: 1,
    marginLeft: '50px',
  },
};

export default App;
