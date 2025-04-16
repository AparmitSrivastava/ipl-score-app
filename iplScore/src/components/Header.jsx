// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// export default function Header() {
//   const [isopen, setIsOpen] = useState(false);
//   const link = [
//     { name: "Live score", path: "/live-score" },
//     { name: "Schedule", path: "/schedule" },
//     { name: "Teams", path: "/teams" },
//     { name: "Stats", path: "/stats" },
//     { name: "News", path: "/news" },
//   ];
//   const toggleMenu = () => {
//     setIsOpen(!isopen);
//   };
//   return (
//     <div className="sticky h-7 top-0 z-50 bg-white shadow-md h-[50px]">
//       <div className="container mx-auto px-4 py-2">
//         {/* Logo */}
//         <div className="flex items-center justify-between">
//           <Link className="flex items-center space-x-2">
//             <div className="h-[38px] w-[38px] bg-orange-400 rounded-full flex items-center justify-center">
//               <span className="text-[24px] text-white font-bold">IPL</span>
//             </div>
//             <span className="text-black font-bold text-lg">Score tracer</span>
//           </Link>

//           {/* Desktop */}
//           <div className="hidden md:flex space-x-6">
//             {link.map((link, index) => (
//               <Link
//                 to={link.path}
//                 key={index}
//                 className={`text-[18px] text-black font-bold font-medium transition-colors hover:text-orange-600`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//           {/* mobile */}
//           <button
//             className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
//             onClick={toggleMenu}
//           >
//             {isopen ? <X size={18} /> : <Menu size={18} />}
//           </button>
//         </div>

//         {/* Mobile navLinks */}
//         {isopen && (
//           <div className="md:hidden py-4 border-t">
//             <div className="flex flex-col space-y-4">
//               {link.map((items, index) => (
//                 <Link
//                   key={index}
//                   to={link.path}
//                   className="text-sm font-medium transition-color hover:text-orange-600"
//                 >
//                   {items.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
  
//   const links = [
//     { name: "Live Score", path: "/live-score" },
//     { name: "Schedule", path: "/schedule" },
//     { name: "Teams", path: "/teams" },
//     { name: "Stats", path: "/stats" },
//     { name: "News", path: "/news" },
//   ];
  
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
  
//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center shadow-sm transition-transform group-hover:scale-105">
//               <span className="text-2xl text-white font-bold">IPL</span>
//             </div>
//             <span className="text-gray-800 font-bold text-lg group-hover:text-orange-500 transition-colors">
//               Score Tracer
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {links.map((link, index) => (
//               <Link
//                 to={link.path}
//                 key={index}
//                 className="text-lg text-gray-700 font-medium transition-all hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
          
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <nav className="md:hidden py-4 mt-2 border-t border-gray-100 animate-fadeIn">
//             <div className="flex flex-col space-y-4">
//               {links.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item.path}
//                   className="text-gray-700 font-medium py-2 px-1 hover:bg-orange-50 hover:text-orange-500 rounded-md transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }

















import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { name: "Live Score", path: "/live-score" },
    { name: "Schedule", path: "/schedule" },
    { name: "Teams", path: "/teams" },
    { name: "Stats", path: "/stats" },
    { name: "News", path: "/news" },
  ];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-blue-700 text-white shadow-lg">
      {/* Decorative top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <span className="text-2xl text-white font-bold">IPL</span>
            </div>
            <span className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">
              Score Tracer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="text-lg text-blue-100 font-medium transition-all hover:text-orange-400 relative py-2 px-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-blue-100 hover:bg-blue-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 mt-2 border-t border-blue-800 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {links.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-blue-100 font-medium py-3 px-2 hover:bg-blue-800 hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}