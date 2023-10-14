import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    document.title = 'Homepage';
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
            <h1>Let's Dream | Plan | Build  together!</h1>
            <p>At Modelflick, we're not just a website; we're your partner in turning architectural dreams into reality. Our passion is to infuse innovation and creativity into every project, from conceptual designs to fully realized structures. We understand that architecture and planning are more than just blueprints; they are about crafting spaces that reflect your vision and lifestyle.</p>
            <h2><Link className="nav-link active" to="/enquiry">Get Quote</Link></h2>
            <p>Currently we are only focusing on projects inside Kerala, We will expand soon!</p>
          </div>
        </div>
        {/* Add a horizontal line after each item */}
        <hr className="horizontal-line" />
      </div>
    </div>
  );
}

export default Home;
