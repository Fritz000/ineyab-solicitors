import React from 'react';
import cover from "../assets/cover.png";
import Intersect from "../assets/Intersect.png";
import "../pages/Home.css";
import { Link } from "react-router-dom";
import { Gavel, User, Zap } from "lucide-react";
import Frame1000003979 from "../assets/Frame1000003979.png";
import Frame206 from "../assets/Frame206.png";
import Frame205 from "../assets/Frame205.png";
import Frame204 from "../assets/Frame204.png";
import Frame203 from "../assets/Frame203.png";
import Frame201 from "../assets/Frame201.png";
import Frame202 from "../assets/Frame202.png";
import Frame200 from "../assets/Frame200.png";
import Cover1 from "../assets/cover1.png";
import Frame1000003982 from "../assets/Frame1000003982.png";
import { FaVideo, FaPhone, FaFileAlt, FaUsers, FaHandshake } from "react-icons/fa";
import { MdGavel } from "react-icons/md";
import IMG_7701 from "../assets/IMG_7701.png";
import Frame1000003966 from "../assets/Frame1000003966.png";
import Judge from "../assets/Judge.png";
import Conflict from "../assets/Conflict.png";
import Law from "../assets/Law.png";

const Home = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section" style={{
            backgroundImage: `url(${cover})`,
          }}>
        <h1>INEYAB SOLICITORS LEGAL SERVICES</h1>
        <p>We are here to help you. Our aim is to serve the best interest of our clients</p>
        <img src={Intersect} alt="Intersect" />
        <div className="services-list">
          <div className="service-item">
            <FaVideo className="icon1" />
            <div className="text">
            <h3>Video call</h3>
            <p>Make video conferencing calls with our professionals</p>
            </div>
          </div>
          <div className="service-item">
            <FaPhone className="icon2" />
            <div className="text">
            <h3>Mobile call</h3>
            <p>Engage our experienc ed lawyers in resolving your legal problems</p>
            </div>
          </div>
          <div className="service-item">
            <FaFileAlt className="icon3" />
            <div className="text">
            <h3>Document</h3>
            <p>Request document perusals with us and recommendable solutions</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
      <div className="cta-buttons">
        <button className="primary-btn12">Talk to us</button>
        <button className="secondary-btn12">View Services</button>
      </div>
      </section>

  
      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="user101">
          <FaUsers className="stat-icon" />
          </div>
          <div className="stat-text">
          <h3>HUGE</h3>
          <p>Trusted Clients</p>
          </div>
        </div>
        <div className="stat-item">
        <div className="user101">
          <FaHandshake className="stat-icon" />
          </div>
          <div className="stat-text">
          <h3>HIGH</h3>
          <p>Compensation Cases</p>
          </div>
        </div>
        <div className="stat-item">
        <div className="user101">
          <MdGavel className="stat-icon" />
          </div>
          <div className="stat-text">
          <h3>HIGH</h3>
          <p>Successful Cases</p>
          </div>
        </div>
      </section>
      <div className="hero-section106" style={{
      backgroundImage: `url(${Frame1000003966})`,
    }}>
      <div className="legal-services">
      <h2>The Legal Service You Truly Deserve</h2>
      
      <div className="services-container">
        {/* Service 1 */}
        <div className="service-card">
          <div className="user2">
          <img src={Conflict} className="service-icon" alt="" />
          </div>
          <h3>Experience our fast and smooth <br/> legal services</h3>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <div className="user2">
          <img src={Law} className="service-icon" alt="" />
          </div>
          <h3>Seek, Reach and get timely justice <br/> with us</h3>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <div className="user2">
          <img src={Judge} className="service-icon" alt="" />
          </div>
          <h3>Talk, Confide and get legal <br/> solutions from Our professionals</h3>
        </div>
      </div>
    </div>
    </div>
    <div className="hero-section105" style={{
      backgroundImage: `url(${Frame1000003982})`,
    }}>
    <div className="who">
      <h1>Who are we?</h1>
      <p>We have developed innovative and creative ways to resolve our client's legal issues.</p>
    </div>
    
    <div className="legal-trust-container">
      <div className="legal-trust-content">
        <div className="trust-image">
          <img src={Frame1000003979} alt="Law Books and Justice" />
        </div>
        <div className="trust-text">
          <h2>Ineyab solicitors is trusted in the legal field</h2>
          <p>
            Ineyab Solicitors is a leading law firm in the UK based,
            South East London. We provide legal advice and representation at affordable rates. We offer a friendly, reliable and professional service which is  tailored to meeting the needs of our clients. We have developed innovative and creative ways to resolve our client's legal issues.
          </p>
          <div className="trust-buttons">
            <button className="primary-btn"><Link to ="/Contact">Talk to Us</Link></button>
            <button className="secondary-btn"><Link to ="/Services">View Services</Link></button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="service00">
    <h3 className='OurServices'>Our services and practices majorly cut across <br/> relevant legal services</h3>
    <p className='aim'>Our aim is to serve the best interest of our clients</p>
      <div className="trust-buttons1">
            <button className="primary-btn1"><Link to ="/Contact">Talk to Us</Link></button>
            <button className="secondary-btn1"><Link to ="/Services">View Services</Link></button>
      </div>
      </div>


      <div className="grid-container">
      <div className="card">
        <img src={Frame206} alt="" />
        <div className="card-content">
          <h3>Civil Litigation</h3>
          <p>
            We provide representation in respect of claims in the courts. We
            also provide advice on how to amicably resolve claims using the
            alternative dispute resolution (ADR).
          </p>
          <button className="blot"><Link to ="Contact">Talk to us</Link></button>
        </div>
      </div>
      <div className="card">
        <img src={Frame205} alt="" />
        <div className="card-content">
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
      <div className="card">
        <img src={Frame204} alt="" />
        <div className="card-content">
          <h3>Housing, Landlord & Tenant Matters</h3>
          <p>
            We assist landlords and tenants in respect of evictions, possession
            proceedings, rent arrears, service charges, breach of tenancy
            agreements, tenancy deposit disputes, and leasehold disputes.
          </p>
          <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
        </div>
      </div>
      <div className="card">
        <img src={Frame203} alt="" />
        <div className="card-content">
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
      <div className="card">
        <img src={Frame201} alt="" />
        <div className="card-content">
          <h3>Employment Law</h3>
          <p>
            At Ineyab Solicitors, we can assist you to pursue or defend complex
            employment claims. We provide advice and assistance to employers and
            employees on all matters relating to employment matters.
          </p>
          <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
        </div>
      </div>
      <div className="card">
        <img src={Frame202} alt="" />
        <div className="card-content">
          <h3>Immigration, Nationality & Asylum Law</h3>
          <p>
            We have an excellent record in solving complex immigration and
            asylum issues for our clients.
          </p>
          <button className="blot"><Link to ="/Contact">Talk to us</Link></button>
        </div>
      </div>
      <div className="card">
        <img src={Frame200} alt="" />
        <div className="card-content">
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

    <div className="hero-section101" style={{
      backgroundImage: `url(${Cover1})`,
    }}>
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

export default Home
