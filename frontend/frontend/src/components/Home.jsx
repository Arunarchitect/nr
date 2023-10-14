import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';



function Home() {
  useEffect(() => {
    document.title = 'Homepage';
  });

  const viteLogo = "/static/Logo.png"



  return (

      <div className='container'>
          <div  className="person-item">
            <div className="left-column">
                <img src={viteLogo} alt="" className="justify-center " />
            </div>
            <div className="right-column">
                <div className="justify-center">
                    <h1>gggg</h1>
                </div>
            </div>
            {/* Add a horizontal line after each item */}
            <hr className="horizontal-line" />
        </div>
      </div>
    

  );
}


export default Home;
