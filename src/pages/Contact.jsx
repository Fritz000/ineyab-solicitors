import React from 'react'
import contactcover from "../assets/contactcover.png";
import { MapPin, Phone, Mail } from "lucide-react";
import "../pages/Contact.css";
import { Link } from "react-router-dom";
import Cover1 from "../assets/cover1.png";
import IMG_7701 from "../assets/IMG_7701.png";

const Contact = () => {
  return (
    <div className='first11'>
      <div
            className="contact20-container"
          
          >
            <div className="contact-container">
              <h1>WE WILL BE RIGHT HERE WHEN YOU REACH OUT</h1>
              <p>
                If you have legal concerns or issues, we're here to assist. Our experts are ready to help with your case.
              </p>
            </div>
          </div>

      <section className="contact-container100">
      <div className="contact-card">
        <div className="icon-title">
        <MapPin size={40} color="#4d52c6" />
        <h3>Address</h3>
        </div>
        <p>Capital House, 1st Floor </p><p className='fourty'>47 Rushey Green, Catford, London, SE6 4AS</p>
      </div>

      <div className="contact-card">
        <div className="icon-title">
        <Phone size={40} color="#4d52c6" />
        <h3>Phone number</h3>
        </div>
        <p className='numbers'>
          02086946419, 07908523354{" "}
          (<span className="out-of-office">Out of office</span>)
        </p>
      </div>

      <div className="contact-card">
        <div className="icon-title">
        <Mail size={40} color="#4d52c6" />
        <h3>Email</h3>
        </div>
        <p className='email'>info@ineyabsolicitors.com</p>
        <p className='email1'>ineyabsolicitors@yahoo.com</p>
      </div>
    </section>
    
          <div className="hero-section101" style={{
                backgroundImage: `url(${Cover1})`,
              }}>
              <div className="overlay101"></div>
              <div className="hero-content101">
                <h1>
                  Be you ever so high, the law <br /> is above you
                </h1>
                <p>
                  At Ineyab Solicitors, we understand the complexities of the legal landscape.
                  Our mission is <br /> to provide you with expert legal guidance and support tailored to your unique needs.
                  <br />
                  Whether you're facing a personal legal matter or seeking business advice, we're here to <br />
                  help you navigate through every step of the legal process.
                </p>
              </div>
          
              <div className="form-container">
                <h2>Request A Free Consultation</h2>
                <form>
                  <label className='label1' htmlFor="name">
                    First and Last Name <span>*</span>
                  </label>
                  <input type="text" id="name" placeholder="Enter first and last name" required />
          
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>
                  <input type="email" id="email" placeholder="Enter email address" required />
          
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="Enter phone number" />
          
                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>
                  <textarea id="message" placeholder="Enter your messages" required></textarea>
          
                  <button className="submit1" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          
          <div className="banner" style={{ backgroundImage: `url(${IMG_7701})` }}>
              <div className="banner-content">
                <h2>Do you have any legal problems?</h2>
                <p>Ineyab Solicitors - We are here to help.</p>
                <button className="blot105"><Link to ="/Contact">Talk to us</Link></button>
              </div>
            </div>
          
            <footer className="footer">
      <div className="container120">
        <div className="row">
          <div className="footer-col">
            <h4>Quick links</h4>
            <ul>
              <li><Link to ="/">Home</Link></li>
              <li><a><Link to="/OurCharges">Our Charges</Link></a></li>
              <li><a href="#"><Link to ="/Contact">Contact us</Link></a></li>
            </ul>
          </div>
          <div className="footer-col1">
            <h4>Services & Practices</h4>
            <ul>
              <li><a><Link to ="/Services">Civil litigation</Link></a></li>
              <li><a><Link to ="/Services">Criminal law</Link></a></li>
              <li><a><Link to ="/Services">Housing, Landlord  & Tenant Matters</Link></a></li>
              <li><a><Link to ="/Services">Family Law & Divorce</Link></a></li>
            </ul>
          </div>
          <div className="footer-col2">
          <h4>&nbsp;</h4>
            <ul>
              <li><a><Link to ="/Services">Employment Law</Link></a></li>
              <li><a><Link to ="/Services">Immigration, Nationality & Asylum Law</Link></a></li>
              <li><a><Link to ="/Services">Housing, Landlord & Tenant Matters</Link></a></li>
            </ul>
          </div>
          <div className="footer-col3">
            <h4>Contact</h4>
              <ul>
              <li><a href="tel:02086946419">02086946419, 07908523354 (Out of Office)</a></li>
                <li><a href="info@INEYABsolicitors.com">info@INEYABsolicitors.com</a></li>
                <li><a href="ineyabsolicitors@yahoo.com">ineyabsolicitors@yahoo.com</a></li>
              </ul>
            </div>
          </div>
          <hr className='hr'/>

          
        </div>
        <p className='copy'>&copy; 2025 Ineyab Solicitors. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Contact
