import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Main = () => {
  const handleFaceClick = () => {
    // Redirect to Facebook when the icon is clicked
    window.location.href = 'https://www.facebook.com/profile.php?id=100092985097432&mibextid=ZbWKwL';
  };

  const handleInstaClick = () => {
    // Redirect to Facebook when the icon is clicked
    window.location.href = 'https://instagram.com/modelflick?igshid=OGQ5ZDc2ODk2ZA==';
  };



  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://media.istockphoto.com/id/1495587512/photo/hexagons-technology-background-cityscape-circuit-board-computer-mother-board.jpg?s=612x612&w=0&k=20&c=uNRcMC736w4pIy9Ks4E57KxVl0a9Dl67LwXbMuK6As0="
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/25">
        <div className="max-w-[650px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-8xl text-6xl font-bold text-gray-800">
            Modelflick
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Let\'s Dream',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Let\'s  Plan',
                1000,
                'Let\'s  Construct',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-12 max-w-[200px] w-full">
            <FaFacebookF className="cursor-pointer  bg-gray-100 bg-opacity-50 shadow-gray-400 " size={60} onClick={handleFaceClick} />
            <FaInstagram className="cursor-pointer  bg-gray-100 bg-opacity-50  shadow-gray-400" size={60} onClick={handleInstaClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
