import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Preloader from './components/layout/Preloader'
import './assets/css/style.css'
import './assets/css/mobile-fixes.css'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

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

    // Handle section visibility on hash change
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      console.log('Hash changed to:', hash);
      setActiveSection(hash);
      console.log('Active section set to:', hash);
      
      // Scroll to top when changing sections
      window.scrollTo(0, 0);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    // Initial check for hash
    handleHashChange();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('hashchange', handleHashChange);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorInner);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="tokyo_tm_all_wrap" data-magic-cursor="show">
      {loading ? <Preloader /> : null}
      <Header />
      <Sidebar />
      <div className="rightpart">
        <div className="rightpart_in">
          <div className={`tokyo_tm_section ${activeSection === 'home' ? 'active' : ''}`}>
            <Home />
          </div>
          <div className={`tokyo_tm_section ${activeSection === 'about' ? 'active' : ''}`}>
            <About />
          </div>
          <div className={`tokyo_tm_section ${activeSection === 'service' ? 'active' : ''}`}>
            <Service />
          </div>
          <div className={`tokyo_tm_section ${activeSection === 'portfolio' ? 'active' : ''}`}>
            <Portfolio />
          </div>
          <div className={`tokyo_tm_section ${activeSection === 'contact' ? 'active' : ''}`}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
