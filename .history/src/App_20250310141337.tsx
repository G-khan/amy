import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Service from './components/service/Service'
import Preloader from './components/layout/Preloader'
import './assets/css/style.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'mouse-cursor cursor-outer';
    const cursorInner = document.createElement('div');
    cursorInner.className = 'mouse-cursor cursor-inner';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorInner);

    // Function to handle cursor movement
    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    // Add event listener for cursor movement
    document.addEventListener('mousemove', moveCursor);

    // Set loading to false after delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorInner);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Preloader />
      <div className="tokyo_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="">
        <Header />
        <Sidebar />
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section_wrap">
              <div id="home" className="tokyo_tm_section animated">
                <Home />
              </div>
              <div id="about" className="tokyo_tm_section">
                <About />
              </div>
              <div id="service" className="tokyo_tm_section">
                <Service />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
