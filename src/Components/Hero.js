import React, { useState } from "react";
// import SliderData from "./SliderData";

export default function Hero() {
  const Slider = [
    {
      image :" https://media.istockphoto.com/id/1145315589/photo/e-learning-concept-with-a-man.jpg?s=612x612&w=0&k=20&c=-8a0J9mnfE71CZ50lb8bDrjI2Az1TWVil-6sQnK9v6c="},
    {
      image :"https://media.istockphoto.com/id/1254127323/photo/businesswoman-holding-a-speech.webp?b=1&s=170667a&w=0&k=20&c=LuNzPN-LCdis1CaFTPR7I1h4jS4GuSJD4tOjn7BXTAY="},
    {
      image:"https://media.istockphoto.com/id/1290864946/photo/e-learning-education-concept-learning-online.webp?b=1&s=170667a&w=0&k=20&c=9oioQy4ceAfWWlX5Jy2t4uEK6yDwYaY6mSpdWCxNdy0="},
    {
      image :"https://media.istockphoto.com/id/1262283526/photo/indian-girl-student-wear-headphones-learning-online-watching-webinar-class-looking-at-laptop.webp?b=1&s=170667a&w=0&k=20&c=vWkpiEyBLPEk-aFH-b6CJEWE07zZAaB-O5P0Ojb5hCw="},
  ];
    const [current, setCurrent] = useState(0);
    const length = Slider.length;
    console.log(length)
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(Slider) || Slider.length <= 0) {
      return null;
    }
  const StackELement = ({ text = null, link = null } = {}) => {
    return (
      <>
        <div
          style={{ margin: "15px 0px" }}
          className={`${text} border cursor-pointer my-2.5 py-2 bg-black text-white flex justify-center  rounded-lg w-3/4 `}
        >
          <a href={`${link}`} className="h-full text-center">
            {text}
          </a>
        </div>
      </>
    );
  };
  
  
  return (
    <>
      <span className="bluesmall"></span>
      <span className="smallorange"></span>
      <div className="mainContainer  flex justify-center">
        <div className="leftSide flex flex-col items-center  border-r-2  w-1/6">
          <StackELement text={"Home"} link={"/home"} />
          <StackELement text={"Courses"} link={"/courses"} />
          <StackELement text={"Events"} link={"/events"} />
          <StackELement
            text={"Corporate Trainings"}
            link={"/corporatetrainings"}
          />
          <StackELement text={"Careers"} link={"/careers"} />
          <StackELement text={"Contact Us"} link={"/contactus"} />
          <StackELement text={"About Us"} link={"/aboutus"} />
        </div>
        <hr className="Hero_hr"></hr>
        <div className="hero_left ">
          <div className="slides">
            {Slider.map((Element,index) => {
                return <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
              <img src={Element.image} alt='Slider_Images' className='image' 
              />
            )}
          </div>
            
                }
            )}
          </div>
          <div className="btn_slider_container">
            <button onClick={prevSlide}className="btn_slider ">
              <i>&#x3c;</i>
            </button>
            <button onClick={nextSlide}  className="btn_slider" id="right_btn">
              <i>&#x3e;</i>
            </button>
          </div>
        </div>
        <hr className="Hero_hr2"></hr>
        {/* <span className='bluebig'></span> */}
        <span className="smallorange2"></span>
        <span className="bigblue2"></span>
        <span className="smallblue2"></span>
        <span className="bigorange"></span>
      </div>
    </>
  );
}
