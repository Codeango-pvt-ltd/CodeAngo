import './App.css';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Reviews from './Components/Reviews';
import Hero from './Components/Hero';
import GetInTouch from './Components/Get_in_touch';
import CourseMain from './Components/courseComponent/CourseMain'

function App() {

  return (
    <>
        <Navbar/>
    <Hero/>
  
   <Features/>
   <CourseMain/>
   <Reviews/>
   <GetInTouch/>
   <Footer/>
   </>
  );
}


export default App;
