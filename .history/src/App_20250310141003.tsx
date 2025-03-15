import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Home from './components/home/Home'
import Preloader from './components/layout/Preloader'
import './assets/css/style.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize cursor elements
    const cursorOuter = document.createElement('div');
    const cursorInner = document.createElement('div');
    cursorOuter.className = 'mouse-cursor cursor-outer';
    cursorInner.className = 'mouse-cursor cursor-inner';
    document.body.appendChild(cursorOuter);
    document.body.appendChild(cursorInner);

    // Handle cursor movement
    const moveCursor = (e: MouseEvent) => {
      cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener('mousemove', moveCursor);

    // Set loading to false after delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursorOuter);
      document.body.removeChild(cursorInner);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="tokyo_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="">
      <Preloader />
      <Header />
      <Sidebar />
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
