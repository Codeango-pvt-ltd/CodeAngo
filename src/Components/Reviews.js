import React from "react";
import profile from "../profile picture1.png";
import profile1 from "../profile picture2.png";
export default function Reviews() {
  return (
    <>
      <hr className="review_top_hr"></hr>
      <div className="container_review">
        <div className="Review_Title">
          What Our Learners Have To Say About Us
        </div>
        <div className="Review_container">
          <div className="Review_box">
            <div>
              <div className="text_review">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatu
              </div>
              <div>
                <img className="profile_picture" src={profile} alt="profile" />
              </div>
              <div className="name">Esther Howard</div>
              <div className="contact_no">205.555.0100</div>
              <div className="date_of_review">10/28/12</div>
              <div className="star">
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
              </div>
              <div className="readmore_button">
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="Review_box1">
            <div className="text_review1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id es
            </div>
            <div>
              <img className="profile_picture1" src={profile1} alt="profile" />
            </div>
            <div className="name1">Jane Cooper</div>
            <div className="contact_no1">(209) 555-0104</div>
            <div className="date_of_review1">9/4/12</div>
            <div className="star1">
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
            </div>
            <div className="readmore_button1">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/* Rectangle 34 */

/*  */
/*  */
