import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';



function Home() {
  useEffect(() => {
    document.title = 'Homepage';
  });

  const viteLogo = "/static/Logo.png"



  return (

    <body>
    <div class="container">
        <div class="left-column">
        <img src={viteLogo} alt="Blog Cover" className="rounded mx-auto d-block border border-primary" />
        </div>
        <div class="right-column">
            <h2>Welcome to Modelflick</h2>
                 <p>With a passionate team of professionals, we specialize in the art of architectural planning, design, and execution in the heart of Kerala.</p>

                <p><strong>Our Promise:</strong> Uncompromising design excellence and meticulous attention to detail, every step of the way.

                    Join us on an architectural journey where your vision becomes a living reality.</p>

        </div>
    </div>
    </body>
    


  );
}


export default Home;
