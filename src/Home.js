
import React from 'react';
const Home = ({ setPage }) => (
  <div className="flex justify-center items-center min-h-screen bg-black">
    <img  alt="svg"src='./Ellipse.png'></img>
    <div className='Home'>
          <h1 className="text-7xl bold text-white mb-5 mt-1 font-weight: 700">AI-Powered </h1>
      <h1 className="text-7xl bold text-white mb-7"> Productivity.</h1>
      <div className="desc text-white mt-3"><p>AI-powered tools in one to supercharge your team productivity.</p>
      <p>With Taskade, all your work is in sync in one unified workspace.</p></div>
      <button
        className=" mt-6 w-56 text-white p-4 rounded-full border-white border-2"
        onClick={() => setPage('signin')}
      >
        Get Started
      </button>

    </div>
  </div>
);

export default Home;
