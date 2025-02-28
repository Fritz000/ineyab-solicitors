import React from 'react'
import charges from "../assets/charges.png";
import "../pages/Charges.css";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import Cover1 from "../assets/cover1.png";
import Frame10000039999 from "../assets/Frame10000039999.png";
import IMG_7701 from "../assets/IMG_7701.png";

const Charges = () => {
  return (
    <div className='first10'>
    <div
      className="charges"
      style={{
        backgroundImage: `url(${charges})`,
      }}
    >
      <div className="charges-content">
        <h1>AFFORDABLE LEGAL SOLUTIONS, TAILORED FOR YOU.</h1>
        <p>
          Legal matters can be complex, but understanding the costs shouldn't be. We offer clean explanations of our charges, so you can make informed decisions without surprises.
        </p>
      </div>
    </div>

    <section className="legal-fees-section">
      <div className="legal-fees-container">
        {/* Left - Image */}
        <div className="legal-fees-image">
          <img src={Frame10000039999} alt="Law consultation" />
        </div>

        {/* Right - Content */}
        <div className="legal-fees-content">
          <h2>Legal Fees that work for You</h2>
          <div className="legal-fees-buttons">
            <button className="primary-btn100">Talk to us</button>
            <button className="secondary-btn100">View Services</button>
          </div>
        </div>
        </div>
          <p className='full-width-text'>
          We have published our price and service information in accordance with the Solicitors Regulation Authority guidance on transparency in respect of charges. Some of our services are offered on an hourly rate basis due to the fact that some of our client’s matters are complex. Our charges do not attract VAT and will be caluclated mainly by reference to the time actually spent by the solicitors and other staff in respect of any work which they do on our clients' behalf. We are able to provide our clients with an estimate of costs after our initial meeting or after a discussion of the circumstances of the case. Whenever possible we will give you a detailed breakdown of the estimated total costs, whether these are our own fees or for disbursements (associated expenses payable to third parties). Examples of these are: Court fees, Experts reports, NHS fees (HIS surcharge), Visa pplication fees, Interpreting (all languages), Translation of documents, Competency in English language examination, UK NARIC, postage and photocopying (where necessary). We are unable to confirm these costs until we are formally instructed to act for you in your case. In litigation matters, you may be able to recover your costs from the opposing party if you win your case. 
          </p>
    </section>

      <section className="pricing-section">
      <div className="pricing-container">
        {/* Civil Litigation */}
        <div className="pricing-box">
      <h2>Civil Litigation</h2>
      <p>Contact us for an estimate. Our current hourly rates are:</p>
      <ul>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
            Trainee Solicitors, Paralegal & equivalent{' '}
            <span className="highlight">£130</span>
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">Solicitors – Less than 4 years experience <span className="highlight">£130</span></span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">Solicitors / legal executives, 4+ years experience <span className="highlight">£130</span></span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">Solicitors over 8 years qualified experience <span className="highlight">£130</span></span>
        </li>
      </ul>
      <button className="pricing-btn">Talk to us</button>
    </div>

        {/* Civil Litigation */}
        <div className="pricing-box">
          <h2>Criminal Law</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
            Trainee Solicitors, Paralegal & equivalent{' '}
            <span className="highlight">£130</span>
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">Solicitors – Less than 4 years experience <span className="highlight">£130</span></span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">Solicitors / legal executives, 4+ years experience <span className="highlight">£130</span></span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">Solicitors over 8 years qualified experience <span className="highlight">£130</span></span>
        </li>
      </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>
        {/* Civil Litigation */}
        <div className="pricing-box">
          <h2>Family Law & Divorce</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
            Divorce - straightforward{' '}
            <span className="highlight">£1,000</span>
          </span>
        </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        <div className="pricing-box">
          <h2>Housing, Landlord & Tenant</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
            Possession Action undefended{' '}
            <span className="highlight">£1,500</span>
          </span>
        </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        <div className="pricing-box">
          <h2>Business & Commercial</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
            Lease assignment, surrender, extension from{' '}
            <span className="highlight"> £1,500</span>
          </span>
        </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>
        {/* Civil Litigation */}
        <div className="pricing-box">
          <h2>Miscellaneous</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
            Consultation fee{' '}
            <span className="highlight"> £100</span>
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
            Solicitor Letters from{' '}
            <span className="highlight"> £100</span>
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
            Drafting Power of Attorney{' '}
            <span className="highlight"> £150</span>
          </span>
        </li>
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>

        <div className="pricing-box1">
          <h2>Immigration, Nationality & Asylum</h2>
          <p>Contact us for an estimate. Our current hourly rates are:</p>
          <ul>
          <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
          Naturalisation or Registration as a British Citizen{' '}
            <span className="highlight"> £1,000</span>
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
          Applications under the Immigration rules{' '}
            <span className="highlight"> £1,000</span>
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
          Applications on behalf of European Economic Area Nationals and their family members <span className="highlight"> £800 - £1,500</span> depending on complexity of the case{' '}
            
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
          Appeal matters (Immigration) <span className="highlight"> £1,500 - £2,500</span> plus disbursements. {' '}
            <span className="highlight"> £400</span>
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
          Additional Hearing (due to adjournment) at the First Tier Tribunal{' '}
            <span className="highlight"> £500</span>
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
          Judicial Review work <span className="highlight"> £2,500</span> plus disbursements. Additional fees apply on renewal.{' '}
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
          Attendance at detention centres to obtain instructions &amp; representation <span className="highlight"> £500</span> plus disbursements. {' '}
          </span>
        </li>
        <li>
          <CircleCheckBig className="iconos" />
          <span className="list-text">
          Bail Application <span className="highlight"> £1,000</span> plus disbursements.{' '}
            
          </span>
        </li>
            
          </ul>
          <button className="pricing-btn">Talk to us</button>
        </div>
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

export default Charges;
