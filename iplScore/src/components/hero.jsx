import { motion } from "framer-motion";
import { useNavigation } from "react-router-dom";
import Button from "./ui/Button";
export default function hero() {
  return (
    <div className="relative overflow-hidden py-[50px] md:py-[28px] bg-gradient-to-b from-orange-200 to-blue-200 ">
      <div className="container mx-auto px-[4px] relative z-10">
        <div className="text-center max-width-3xl mx-auto">
          <div className="text-center text-[30px] md:text-[25px] font-bold text-gray-900 mb-[6px]">
            IPL 2025 <span className="text-orange-400">Live Score</span>
          </div>
          <p className="text-[18px] text-gray-700 mb-8">
            Stay updated with real-time scores, team standings, and match
            schedules for the Indian Premier League.
          </p>

          <div className="flex flex-wrap justify-center gap-[4px]">
            <Button variant="primary" size="lg">
              Live Score
            </Button>

            <Button variant="outline" size="lg">
              Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* Bat */}
      <div className="absolute top-20 right-[10%] w-16 h-16 rounded-full bg-red-700  hidden md:block" />
      <div className="absolute bottom-10 left-[5%] w-8 h-64 bg-gradient-to-b from-amber-800 to-amber-700 rounded-b-lg hidden md:block" />
    </div>
  );
}











// import React from "react";
// import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <div className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-orange-100 to-blue-100">
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center max-w-3xl mx-auto">
//           <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             IPL <span className="text-orange-500">2025</span> Live Score
//           </h1>
          
//           <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
//             Stay updated with real-time scores, team standings, and match
//             schedules for the Indian Premier League.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Link 
//               to="/live-score" 
//               className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
//             >
//               Live Score
//             </Link>

//             <Link 
//               to="/schedule" 
//               className="px-8 py-3 rounded-full border-2 border-gray-800 text-gray-800 font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors focus:ring-2 focus:ring-gray-300"
//             >
//               Schedule
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-20 right-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-500 shadow-lg hidden md:block animate-pulse" />
      
//       <div className="absolute bottom-10 left-[5%] w-8 h-64 bg-gradient-to-b from-amber-700 to-amber-600 rounded-b-lg hidden md:block shadow-md" />
//     </div>
//   );
// }























// import React from "react";
// import { Link } from "react-router-dom";
// import { TrendingUp, Calendar } from "lucide-react";

// export default function Hero() {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
//       {/* Decorative cricket pattern overlay */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yOSAyOC41YTEgMSAwIDEgMSAyIDAgMSAxIDAgLTIgMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
//       <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Text Content */}
//           <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//             <div className="inline-block px-4 py-1 bg-orange-500 rounded-full text-sm font-semibold mb-4">
//               SEASON 2025
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
//               <span className="text-orange-400">IPL</span> Live Score Tracker
//             </h1>
            
//             <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
//               Stay ahead of the game with real-time scores, comprehensive team statistics, and complete match schedules for the Indian Premier League.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <Link 
//                 to="/live-score" 
//                 className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
//               >
//                 <TrendingUp className="mr-2 h-5 w-5" />
//                 Live Scores
//               </Link>

//               <Link 
//                 to="/schedule" 
//                 className="flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-600 border border-blue-600 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
//               >
//                 <Calendar className="mr-2 h-5 w-5" />
//                 Match Schedule
//               </Link>
//             </div>
//           </div>
          
//           {/* Hero Image */}
//           <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//             <div className="relative w-72 h-72 md:w-96 md:h-96">
//               {/* Stadium-shaped background */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full opacity-40"></div>
              
//               {/* Cricket elements */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 {/* Cricket bat */}
//                 <div className="relative h-64 w-20 md:h-80 md:w-24">
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 md:w-10 h-40 md:h-56 bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-lg"></div>
//                   <div className="absolute bottom-40 md:bottom-56 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-24 md:h-28 bg-gradient-to-b from-amber-600 to-amber-700 rounded-md"></div>
//                 </div>
                
//                 {/* Cricket ball */}
//                 <div className="absolute top-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 shadow-lg shadow-orange-500/50">
//                   <div className="absolute inset-0 rounded-full border-2 border-orange-400 opacity-50"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Bottom accent */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>
//     </div>
//   );
// }

















// // kaam ka yhi hai
// import React from "react";
// import { Link } from "react-router-dom";
// import { TrendingUp, Calendar } from "lucide-react";

// export default function Hero() {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
//       {/* Decorative cricket pattern overlay */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yOSAyOC41YTEgMSAwIDEgMSAyIDAgMSAxIDAgLTIgMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
//       <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Text Content */}
//           <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//             <div className="inline-block px-4 py-1 bg-orange-500 rounded-full text-sm font-semibold mb-4">
//               SEASON 2025
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
//               <span className="text-orange-400">IPL</span> Live Score Tracker
//             </h1>
            
//             <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
//               Stay ahead of the game with real-time scores, comprehensive team statistics, and complete match schedules for the Indian Premier League.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <Link 
//                 to="/live-score" 
//                 className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
//               >
//                 <TrendingUp className="mr-2 h-5 w-5" />
//                 Live Scores
//               </Link>

//               <Link 
//                 to="/schedule" 
//                 className="flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-600 border border-blue-600 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
//               >
//                 <Calendar className="mr-2 h-5 w-5" />
//                 Match Schedule
//               </Link>
//             </div>
//           </div>
          
//           {/* Cricket Pitch Illustration */}
//           <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//             <div className="relative w-72 h-72 md:w-96 md:h-96">
//               {/* Stadium-shaped background */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full opacity-40"></div>
              
//               {/* Cricket Pitch */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 {/* Main pitch rectangle */}
//                 <div className="relative w-64 md:w-80 h-32 md:h-40">
//                   {/* Green pitch area */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 rounded-lg shadow-lg"></div>
                  
//                   {/* Central strip */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-b from-amber-200 to-amber-300"></div>
                  
//                   {/* Crease lines */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 top-6 md:top-8 w-32 md:w-40 h-1 bg-white"></div>
//                   <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-8 w-32 md:w-40 h-1 bg-white"></div>
                  
//                   {/* Bowling ends */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 top-2 md:top-3 w-4 h-8 md:h-10 bg-amber-800 rounded-sm"></div>
//                   <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 md:bottom-3 w-4 h-8 md:h-10 bg-amber-800 rounded-sm"></div>
                  
//                   {/* Stumps */}
//                   <div className="absolute left-1/2 transform -translate-x-[6px] top-1 md:top-2 w-1 h-10 md:h-12 bg-amber-100"></div>
//                   <div className="absolute left-1/2 transform -translate-x-0 top-1 md:top-2 w-1 h-10 md:h-12 bg-amber-100"></div>
//                   <div className="absolute left-1/2 transform translate-x-[6px] top-1 md:top-2 w-1 h-10 md:h-12 bg-amber-100"></div>
                  
//                   <div className="absolute left-1/2 transform -translate-x-[6px] bottom-1 md:bottom-2 w-1 h-10 md:h-12 bg-amber-100"></div>
//                   <div className="absolute left-1/2 transform -translate-x-0 bottom-1 md:bottom-2 w-1 h-10 md:h-12 bg-amber-100"></div>
//                   <div className="absolute left-1/2 transform translate-x-[6px] bottom-1 md:bottom-2 w-1 h-10 md:h-12 bg-amber-100"></div>
                  
//                   {/* Bails */}
//                   <div className="absolute left-1/2 transform -translate-x-[3px] top-1 md:top-2 w-6 h-1 bg-amber-50"></div>
//                   <div className="absolute left-1/2 transform -translate-x-[3px] bottom-1 md:bottom-2 w-6 h-1 bg-amber-50"></div>
//                 </div>
                
//                 {/* Boundary rope effect */}
//                 <div className="absolute inset-2 border-4 border-dashed border-white opacity-20 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Bottom accent */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>
//     </div>
//   );
// }