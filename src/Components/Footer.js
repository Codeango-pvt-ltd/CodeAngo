import React from "react";
import mail from "../mail.png";
import call from "../call.png";
import location from "../location.png";
import facebook from "../facebook.png";
import youtube from "../youtube).png";
import instagram from "../instagram.jpeg";
import linkedin from "../linkdin.png";
import twitter from "../twitter.png";
import payment from "../payments.png";
import securedby from "../securedby.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <hr className="footerhr"></hr>
        <div className="contactsection">Contact</div>
        <div className="mail">
          <img src={mail} alt="mail" />
          <span>
            <a href="mailto:support@codeango.com"> support@codeango.com</a>
          </span>
        </div>
        <div className="call">
          <img src={call} alt="call" />
          <span>
            <a href="tel:+9172764 06725"> +9172764 06725</a>
          </span>
        </div>
        <div className="location">
          <img src={location} alt="location" />
          <span>
            <a href="/">R - 77 Bad ke Ali Aurangabad - 431101</a>
          </span>
        </div>
        <div className="facebook">
          <a href="https://www.facebook.com/profile.php?id=100090437048427">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div className="youtube">
          <a href="https://www.youtube.com/channel/UCiRFkFC6mARVsX9bn4KfaTA">
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <div className="instagram">
          <a href="https://instagram.com/codeango_learning?igshid=ZDdkNTZiNTM=">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/feed/7">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="twitter">
          <a href="https://twitter.com/CodeangoC">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <hr className="hr1"></hr>
        <div className="paymentsection">
          <div className="safepayment">
            WE ARE USING SAFE PAYMENTS
            <img src={payment} alt="payment" />
          </div>
          <div className="securedby">
            SECURED BY:
            <img src={securedby} alt="securedby" />
          </div>
        </div>
        <hr className="hr2"></hr>
        <div className="knowus">KNOW US
            <div style={{"marginTop" : "50px"}}>
                <a className='leftknows'href="/">Reviews</a><br/>
                <a className='leftknows' href="/">Privacy</a><br/>
                <a className='leftknows' href="/">Refund Policy</a><br/>
                <a className='leftknows'href="/">Term & Conditions</a><br/>
                <a className='leftknows' href="/">Contact Us</a><br/>
                <a className='leftknows' href="/">About Us</a>
            </div>
        </div>
        <div className="quicklinks">
        QUICK LINK
        <div style={{"marginTop" : "50px"}}><a className="rightlinks" href="/">Courses</a><br/>
        <a className="rightlinks" href="/">Corporate</a><br/>
        <a className="rightlinks" href="/"> Sitemap</a><br/>
        <a className="rightlinks" href="/">Sign up</a><br/>
        <a className="rightlinks" href="/">Login</a><br/>
        </div>
        </div>
      
      <hr className="footerbottom"></hr>
      <div className="copyright">© 2023 Codeango Pvt. Ltd.. All rights reserved.</div>
      </div>
    </footer>
  );
}
