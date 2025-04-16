// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <div className='bg-red-600'>hello</div>
//     </>
//   )
// }

// export default App



// import "./styles.css";
import Header from "./components/Header";
import HomePage from "./page/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/test" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
