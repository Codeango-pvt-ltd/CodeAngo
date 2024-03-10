import React from 'react'
// import Courses from '../Components/courseComponent/Courses';

export default function Cources() {
    const [searchQuery, setSearchQuery] = useState('');
    
  // Handler function for the search button click
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchQuery);
    // You can perform additional actions like making an API call or updating state based on the searchQuery
  };
  return (
   
    <div>
        <div>
          {/* <Courses/> */}
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
    </div>
    
  )
}
