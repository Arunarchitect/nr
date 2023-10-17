import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Article() {
  useEffect(() => {
    document.title = 'Article';
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
          <img src="" alt="" className="justify-center" style={imageStyles} />
        </div>
        <div className="right-column">
          <div className="justify-center">
            <h1>Article Us</h1>
          </div>
        </div>
        {/* Add a horizontal line after each item */}
        <hr className="horizontal-line" />
      </div>
    </div>
  );
}

export default Article;
