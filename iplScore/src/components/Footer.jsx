import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">IPL Score Tracker</h2>
          <p>
            The ultimate destination for IPL cricket fans to stay updated with
            live scores, team standings, and match schedules.
          </p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Live Scores</a></li>
            <li><a href="#" className="hover:text-white">Schedule</a></li>
            <li><a href="#" className="hover:text-white">Teams</a></li>
            <li><a href="#" className="hover:text-white">Stats</a></li>
            <li><a href="#" className="hover:text-white">News</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
          </div>
          <p>Download our mobile app for a better experience</p>
           {/* Social Icons */}
           <div className="flex space-x-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg fill="currentColor" className="w-6 h-6 hover:text-white" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1.1.5 1.6 1 .5.5.8 1 .9 1.6.2.4.3 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1.1-1 1.6s-1 .8-1.6.9c-.4.2-1.1.3-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.6.1-1.1.1-1.7.2-2.1.3-.5.1-.8.3-1.2.7-.4.4-.6.7-.7 1.2-.1.4-.2 1-.3 2.1-.1 1.2-.1 1.5-.1 4.6s0 3.4.1 4.6c.1 1.1.2 1.7.3 2.1.1.5.3.8.7 1.2.4.4.7.6 1.2.7.4.1 1 .2 2.1.3 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c1.1-.1 1.7-.2 2.1-.3.5-.1.8-.3 1.2-.7.4-.4.6-.7.7-1.2.1-.4.2-1 .3-2.1.1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-1.1-.2-1.7-.3-2.1-.1-.5-.3-.8-.7-1.2-.4-.4-.7-.6-1.2-.7-.4-.1-1-.2-2.1-.3-1.2-.1-1.5-.1-4.6-.1zm0 3.4a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8zm0 1.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm5.8-.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg fill="currentColor" className="w-6 h-6 hover:text-white" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.64 8.64 0 0 1-2.73 1.04 4.3 4.3 0 0 0-7.32 3.92A12.2 12.2 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.33 5.73 4.26 4.26 0 0 1-1.95-.54v.05a4.3 4.3 0 0 0 3.45 4.21 4.3 4.3 0 0 1-1.95.07 4.3 4.3 0 0 0 4.01 2.98 8.63 8.63 0 0 1-5.34 1.84A8.77 8.77 0 0 1 2 19.54a12.2 12.2 0 0 0 6.61 1.94c7.92 0 12.25-6.56 12.25-12.25 0-.19-.01-.38-.02-.57a8.77 8.77 0 0 0 2.14-2.23z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg fill="currentColor" className="w-6 h-6 hover:text-white" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.6h2.2l-.4 2.9h-1.8v7A10 10 0 0 0 22 12"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <svg fill="currentColor" className="w-6 h-6 hover:text-white" viewBox="0 0 24 24">
                <path d="M21.8 8s-.2-1.4-.8-2a3 3 0 0 0-2.1-.8C16.5 5 12 5 12 5s-4.5 0-6.9.2a3 3 0 0 0-2.1.8c-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.4c0 1.7.2 3.3.2 3.3s.2 1.4.8 2a3 3 0 0 0 2.1.8c2.5.2 10.9.2 10.9.2s4.5 0 6.9-.2a3 3 0 0 0 2.1-.8c.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8zM10 14.7v-5.4l5.2 2.7-5.2 2.7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-500 mt-12">
        © 2025 IPL Score Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
