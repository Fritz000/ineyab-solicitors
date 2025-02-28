import React from 'react'
import man from "../assets/man-making.png";
import "../pages/Services.css";
import { Link } from "react-router-dom";
import Cover1 from "../assets/cover1.png";
import Frame206 from "../assets/Frame206.png";
import Frame205 from "../assets/Frame205.png";
import Frame204 from "../assets/Frame204.png";
import Frame203 from "../assets/Frame203.png";
import Frame201 from "../assets/Frame201.png";
import Frame202 from "../assets/Frame202.png";
import Frame200 from "../assets/Frame200.png";
import IMG_7701 from "../assets/IMG_7701.png";

const Services = () => {
  return (
    <div className='first'>
    <div
      className="services120-container"
      style={{
        backgroundImage: `url(${man})`,
      }}
    >
      <div className="services120-content">
        <h1>WE'RE ALWAYS HERE TO HELP YOU.</h1>
        <p>
          Explore our comprehensive range of legal services tailored to meet your needs<br/>
          as you empower yourself with our professional legal services designed to<br/>
          protect your rights and interests.
        </p>
      </div>
      </div>
      <div className="services140-container">
      <h2 className='ourservice1'>Our services and practices majorly cut across <br/> most relevant legal services</h2>
      <p className='aim1'>Our aim is to serve the best interest of our clients</p>
      <div className="trust-buttons2">
        <button className="talk-to-us">Talk to us</button>
        <button className="view-services">View Services</button>
      </div>
    </div>
      
          <div className="grid-container10">
            <div className="card10">
              <img src={Frame206} alt="" />
              <div className="card-content10">
                <h3>Civil Litigation</h3>
                <p>
                  We provide representation in respect of claims in the courts. We
                  also provide advice on how to amicably resolve claims using the
                  alternative dispute resolution (ADR).
                </p>
                <button className="blot"><Link to ="Contact">Talk to us</Link></button>
              </div>
            </div>
            <div className="card10">
              <img src={Frame205} alt="" />
              <div className="card-content10">
                <h3>Criminal Law</h3>
                <p>
                  We provide Police Station advice and representation at the
                  magistrate court and at the Crown Court on a private basis only. Our
                  expert team provides competent advice on prospects of success and
                  acts solely in the clients' best interests in so doing.
                </p>
                <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
              </div>
            </div>
            <div className="card10">
              <img src={Frame204} alt="" />
              <div className="card-content10">
                <h3>Housing, Landlord & Tenant Matters</h3>
                <p>
                  We assist landlords and tenants in respect of evictions, possession
                  proceedings, rent arrears, service charges, breach of tenancy
                  agreements, tenancy deposit disputes, and leasehold disputes.
                </p>
                <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
              </div>
            </div>
            <div className="card10">
              <img src={Frame203} alt="" />
              <div className="card-content10">
                <h3>Family Law & Divorce</h3>
                <p>
                  We specialize in all areas of family legal matters including
                  divorce, children's matters, separation agreements, cohabitation
                  agreements, and grandparent's rights. Our aim is to resolve family
                  and divorce issues in an amicable manner.
                </p>
                <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
              </div>
            </div>
            <div className="card10">
              <img src={Frame201} alt="" />
              <div className="card-content10">
                <h3>Employment Law</h3>
                <p>
                  At Ineyab Solicitors, we can assist you to pursue or defend complex
                  employment claims. We provide advice and assistance to employers and
                  employees on all matters relating to employment matters.
                </p>
                <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
              </div>
            </div>
            <div className="card10">
              <img src={Frame202} alt="" />
              <div className="card-content10">
                <h3>Immigration, Nationality & Asylum Law</h3>
                <p>
                  We have an excellent record in solving complex immigration and
                  asylum issues for our clients.
                </p>
                <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
              </div>
            </div>
            <div className="card10">
              <img src={Frame200} alt="" />
              <div className="card-content10">
                <h3>Business & Commercial Transactions</h3>
                <p>
                  We provide assistance and advice on general business and corporate
                  matters including joint ventures, partnership formation, company and
                  business sales and purchases.
                </p>
                <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
              </div>
            </div>
          </div>

          <div className="hero-section103" style={{
                backgroundImage: `url(${Cover1})`,
              }}>
              <div className="hero-content103">
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
          
              <div className="form-container103">
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
              <li><a><Link to="/Charges">Our Charges</Link></a></li>
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
              <li><a href="tel:02086946419">02086946419, 07908523354</a></li>
                <li><a href="mailto:info@INEYABsolicitors.com">info@INEYABsolicitors.com</a></li>
                <li><a href="mailto:ineyabsolicitors@yahoo.com">ineyabsolicitors@yahoo.com</a></li>
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

export default Services;
