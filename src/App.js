import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.js';
import Posts from './Posts.js';
import Footer from './Footer.js';
import StickyMenu from './StickyMenu.js';
import Intro from './Intro.js';


import './css/App.css';

function App() {
  // const [url, setUrl] = useState(false);

  // useEffect(() => {
  //   setUrl(window.location.href);

  // }, [])
  return (
    <div className="App">
      {/* <h2 style={{ "color": 'red' }} >{url}</h2> */}
      <Header />
      <div className="posts-wrapper">
        <StickyMenu />
        <Posts />
      </div>
      <Footer />
    </div >
  );
}

export default App;
