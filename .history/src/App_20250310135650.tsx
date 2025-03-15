import { useState, useEffect } from 'react'
import './assets/css/style.css'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Home from './components/home/Home'

function App() {
  useEffect(() => {
    // Add cursor elements
    const cursorOuter = document.createElement('div');
    const cursorInner = document.createElement('div');
    cursorOuter.className = 'mouse-cursor cursor-outer';
    cursorInner.className = 'mouse-cursor cursor-inner';
    document.body.appendChild(cursorOuter);
    document.body.appendChild(cursorInner);

    // Add preloader
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    const loaderLine = document.createElement('div');
    loaderLine.className = 'loader_line';
    preloader.appendChild(loaderLine);
    document.body.appendChild(preloader);

    // Cleanup function
    return () => {
      document.body.removeChild(cursorOuter);
      document.body.removeChild(cursorInner);
      document.body.removeChild(preloader);
    };
  }, []);

  return (
    <div className="tokyo_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="">
      <Header />
      <Sidebar />
      
      {/* RIGHTPART */}
      <div className="rightpart">
        <div className="rightpart_in">
          <Home />
          {/* Other sections will be added here */}
        </div>
      </div>

    </div>
  )
}

export default App
