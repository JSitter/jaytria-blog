import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Footer.js';
import Header from './Header.js';
import NotFound from './NotFound.js';
import Posts from './Posts.js';
import StickyMenu from './StickyMenu.js';

import './css/App.css';
import Vaccine from './Vaccine.js';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="posts-wrapper">
        <StickyMenu />
        <Vaccine />
        <Router >
          <Routes>
            <Route path='/:year/:month/:day/:title' element={<Posts />} />
            <Route path='/' element={<Posts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div >
  );
}

export default App;
