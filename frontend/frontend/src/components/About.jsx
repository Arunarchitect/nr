import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    document.title = 'About Page';
  });

  const imageStyles = {
    width: '450px',
    height: 'auto',
  };

  return (
    <div className="container">
      <div className="person-item">
        <div className="left-column p-4">
          <div className="justify-center">
            <h1>Services and policies</h1>

            <h3>Terms and Conditions</h3>
            <p>
              By using our services, you agree to comply with these terms.
            </p>
            <p>We provide architectural and interior design services in compliance with The Architects Act, 1972, of the Government of India.</p>
            <br />

            <h3>Privacy Policy</h3>
            <p>
              We value your privacy and protect your personal information.
            </p>
            <p>
              We do not share your data with third parties, except as required by law.
            </p>
            <br />

            <h3>Cancellation and Refund Policy</h3>
            <p>
              Cancellation timeframe varies by project, with a minimum of 24 hours. If canceled within the timeframe, a 75% refund will be issued.
            </p>
            <p>
              In case of failure to deliver the agreed-upon project, a total refund will be made.
            </p>
            <br />

          
          </div>
        </div>
        <div className="right-column p-4">
          <div className="justify-center">
          <h3>Shipping and Delivery</h3>
            <p>
              Our services involve digital files delivered electronically; no physical shipping is required.
            </p>
            <p>
              Delivery times are project-dependent and will be communicated during project initiation.
            </p>
            <br />
            <h3>Contact Information</h3>
            <p>
              Contact us at Modelflick, Kallelibhagom.p.o, Kollam, 690519, or email us at modelflick@gmail.com.
            </p>
          </div>
        </div>
        <hr className="horizontal-line" />
      </div>
    </div>
  );
}

export default About;
