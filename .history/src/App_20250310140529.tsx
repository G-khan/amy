import { useState, useEffect } from 'react'
import './assets/css/style.css'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Home from './components/Home'
import Preloader from './components/layout/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after components are mounted
    setIsLoading(false);
  }, []);

  return (
    <div className="tokyo_tm_all_wrap">
      <Preloader />
      <Header />
      <div className="leftpart">
        <Sidebar />
      </div>
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
