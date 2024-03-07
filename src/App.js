// App.js



import React, { useEffect, useState } from 'react';
import './App.css';
import TopRatedCourses from './TopRatedCourses';
import NewAddedCourses from './NewAddedCourses';
import HighRatedCourses from './HighRatedCourses';
import useFetch from './Components/function/useFetch';


const App = () => {
  const {data} = useFetch({url : 'http://localhost:3000/course'})
  const [courseData, setcourseData] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  useEffect(()=>{
      data?.data&&setcourseData([...data.data]);
  },[data])


  const getTopRatedCourses = (courseData) => {
    const allCourses = courseData?.sort((a, b) => b.rating - a.rating);
    return allCourses;
  };

  const getNewAddedCourses = (courseData) => {
    return courseData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  };

  const getHighRatedCourses = (courseData) => {
    return courseData.sort((a, b) => b.rating - a.rating);
  };


  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setSelectedCourse(null); // Reset selected course when changing category
    
  };
  const [searchQuery, setSearchQuery] = useState('');

  // Handler function for the search button click
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchQuery);
    // You can perform additional actions like making an API call or updating state based on the searchQuery
  };

  

  return (
    <div className="container">
      <div className="sidebar">
        
        <h1 style={{textAlign:'center',fontFamily:'initial',fontSize:'50px',backgroundColor:'GrayText'}}>Course </h1>
        <div style={{textAlign:'center'}}>
      {/* Input field for search query */}
      <input
        type="text"
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Search button */}
      <button  onClick={handleSearch}>Search</button>

      {/* Additional content can be added here */}
    </div>

        <h2 style={{textAlign:'center', fontSize:'50px'}}>Choose a category to find your course</h2>
       
        <p style={{textAlign:'center', fontSize:'30px'}}>100+ Live online courses chosen by 50000+ working professionals</p>
        <button style={styles.viewDetailsButton} onClick={() => alert(`View details for ${App.title}`)}>
                All courses
              </button>

        <button style={styles.viewDetailsButton} onClick={() => alert(`View details for ${App.title}`)}>
                cloud computing
              </button>

        <button style={styles.viewDetailsButton} onClick={() => alert(`View details for ${App.title}`)}>
                Devops
              </button>
              <button style={styles.viewDetailsButton} onClick={() => alert(`View details for ${App.title}`)}>
                Data science
              </button>
              <button style={styles.viewDetailsButton} onClick={() => alert(`View details for ${App.title}`)}>
                Cyber Security
              </button>
              <button style={styles.viewDetailsButton} onClick={() => alert(`View details for ${App.title}`)}>
                Others
              </button>




        {/* <form>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All</option>
            {courseData.map((category) => (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </form> */}

      </div>

      {selectedCourse && (
        <div className="content" style={styles.content}>
          <h2>Selected Course</h2>
          <p>Title: {selectedCourse.title}</p>
          <p>Rating: {selectedCourse.rating}</p>
          <p>Date Added: {selectedCourse.dateAdded}</p>
        </div>
      )}
      {courseData&&(<TopRatedCourses courses={getTopRatedCourses(courseData)} />)}
      {courseData&&(<NewAddedCourses courses={getNewAddedCourses(courseData)} />)}
      {courseData&&(<HighRatedCourses courses={getHighRatedCourses(courseData)} />)}
    </div>
    
    
  );
};

const styles = {
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
    margin: '10px',
    padding: '10px'
  },
  viewDetailsButtonHover: {
    backgroundColor: '#0056b3',
  },
};




export default App;
