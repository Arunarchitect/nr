import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    document.title = 'About Page';
  });

  const viteLogo = "/static/model.svg";

  // Apply CSS styles to the image for size adjustment
  const imageStyles = {
    width: '450px', // Set the desired width
    height: 'auto', // Maintain the aspect ratio
  };

  return (
    <div className='container'>
      <div className="person-item">
        <div className="left-column">
          <img src={viteLogo} alt="" className="justify-center" style={imageStyles} />
        </div>
        <div className="right-column">
          <div className="justify-center">
            <h1>About Us</h1>
            <h3>
              As an architectural service in India, our deliverables encompass architectural design concepts, detailed plans, 3D visualizations, cost estimates, site analysis, and regulatory approvals. We provide comprehensive interior design and construction drawings, specify materials and schedules, and assist with obtaining permits and approvals. Our goal is to ensure your project adheres to local regulations and is executed efficiently while fulfilling your vision.
            </h3>

            <br /> {/* Add a line break */}
            <p>Reg.no: UDYAM-KL-06-0031801</p>
            
            <p>Address: Modelflick, Kallelibhagom.p.o, Kollam, 690519</p>
            <p>Email: modelflick@gmail.com</p>
            <br /> {/* Add a line break */}
            <p>Our charges and services are liable to The Architects Acts, 1972, Govt. of India.</p>
          </div>
        </div>
        {/* Add a horizontal line after each item */}
        <hr className="horizontal-line" />
      </div>
    </div>
  );
}

export default About;
