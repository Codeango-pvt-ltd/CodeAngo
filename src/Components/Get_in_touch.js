import React from "react";
import robo from "../shutterstock_1987145684.webp";
import vector from "../Vector.png";
export default function GetInTouch() {
  const handleFormSubmit = (e) => {
    console.log(e); // ???
  };
  return (
    <>
      <hr className="getintouchhr"></hr>
      <div className="getintouchsection">
        <div className="leftSide  flex flex-col py-10 justify-between items-center w-2/3">
          <div className="texts ">
            <div className="about">About Codeango</div>
            <div className="text ">
              Creating Interactive
              <br /> Courses to Deliver
              <br /> Quality Training
            </div>
          </div>
          <image className="vector" src={vector}></image>
          <img
            src={robo}
            alt="Robot showing victory sign with computer"
            className="robo"
          />
        </div>
        <div className="rightform">
          <div className="GetInTouch">Get In Touch</div>
          <div className="description">
            Kindly fill the form so that our executive can call you and take you
            into the world of new technology
          </div>
          <form action={handleFormSubmit} className="form ">
            <div className="row1 grid grid-cols-3 mb-5">
              <div className="FirstName">First name *</div>
              <div className="LastName">Last name *</div>
              <div className="Email">Email *</div>
              <input className="FirstnameInput" />
              <input className="LastnameInput" />
              <input className="EmailInput" />
            </div>
            <div className="row2 mb-5">
              <div className="subject  ">
                Subject
                <input type="text" className="textborder  " />
              </div>
            </div>
            <div>
              <div className="message  ">
                Leave us a message...
                <textarea type="text" className="messagetext " />
              </div>
            </div>

            <div className="submit"><button>Submit</button></div>
            <div className="LearnMore"><button>Learn More</button></div>
          </form>
        </div>
            <span className="orangebig"></span>
            <span className="orangesmall"></span>
            <span className="bluebig"></span>
      </div>
    </>
  );
}
