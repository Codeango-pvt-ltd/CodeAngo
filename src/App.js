import React from 'react';
import './App.css'; // Import your CSS file

// About component
const About = () => {
  return (
    <div style={{ backgroundColor: 'white', olor: 'black', padding: '20px' }}>

      <h1 style={{textAlign: 'center'}}>About Us</h1>
      <h2>Porta platea eget tincidunt nunc massa sed fermentum felis, vel, egestas nec interdum et scelerisque blandit nunc faucibus et adipiscing diam cursus aenean nulla.</h2>
      <img src={require('./h.jpg')} alt="Team Member 1" />

      <section className="section">
        <h2 style={{ textAlign: 'center' }}>Our Mission</h2>
        <p style={{ textAlign: 'center' }}>We are committed to providing high-quality education...</p>
        <div className="alert alert-secondary" role="alert">
          <h1>Let Numbers Talk</h1>
          <div className="box">
            <h1 textAlign='center'>Courses</h1>
            <h1 textAlign='center'>200+</h1>
          </div>
          <div className="box">
            <h1 textAlign='center'>Instructors</h1>
            <h1 textAlign='center'>30</h1>
          </div>
          <div className="box">
            <h1 textAlign='center'>Students</h1>
            <h1 textAlign='center'>4000+</h1>
          </div>
        </div>

        <h3>Fancy display heading
          <small class="text-muted" style={{ margin: '200px' }}>With faded secondary text</small>
        </h3>
        <h4>Fancy display heading
          <small class="text-muted" style={{ margin: '200px' }}>With faded secondary text</small>
        </h4>
      </section>

      <section className="section">
        <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={require('./k.jpg')} alt="Team Member 1" margin='50px' />
            <h3>John Doe</h3>
            <p>Co-Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={require('./y.jpg')} alt="Team Member 2" margin='50px' />
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          <div>
            <h3 style={{ textAlign: 'center' }}>SUBSCRIBE</h3>
            <h1 style={{textAlign:'center'}}>All Access Membership</h1>
            <h2 textAlign='center'>Dictum enim vel in consectetur arcu nunc habitasse mattis vitae accumsan, etiam ultrices eget non tincidunt.</h2>
            <section className="section">
        {/* Other content */}
        <div className="button-container"> {/* Add this container */}
          <button id="subscribeBtn">SUBSCRIBE & save</button>
        </div>
      </section>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ textAlign: 'center' }}>Contact Info</h2>
        <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <h3 style={{ textAlign: 'center' }}>Popular Courses</h3>
        <ul>
          <li>LMS Interactive Content</li>
          <li>Become a PHP Master</li>
          <li>HTML5/CSS3 Essentials</li>
          <li>JavaScript Development</li>
          <li>WordPress Basic Tutorial</li>
          <li>Introduction to Coding</li>
        </ul>
        <h3 style={{ textAlign: 'center' }}>Contact Info</h3>
        <p style={{ textAlign: 'center' }}>Address: 123 Fifth Avenue, New York, NY 10160</p>
        <p style={{ textAlign: 'center' }}>Phone: 929-242-6868</p>
        <p style={{ textAlign: 'center' }}>Email: contact@info.com</p>
      </section>
    </div>
  );
};
// Main App component
const App = () => {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>

      <header>
        
        
        <nav>
          <ul>
            
          <div className="team fade-in">
  {/* Team members */}
</div>

            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </header>
      <main>
        <About />
      </main>
      <footer style={{ backgroundColor: 'white', color: 'black', padding: '20px', textAlign: 'center' }}>


        <p style={{textAlign:'center'}}>&copy; 2024 Our Education Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
