import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchJSON } from './helpers.js';

import About from './About.js';
import ArticleNav from './ArticleNav.js';
import Footer from './Footer.js';
import Header from './Header.js';
import NotFound from './NotFound.js';
import Posts from './Posts.js';
import StickyMenu from './StickyMenu.js';

import './css/App.css';


function App() {

  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState(false);
  const [curPostIndex, setCurPostIndex] = useState(0);

  useEffect(() => {
    fetchJSON('posts').then(json => {
      setAllPosts(json);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="posts-wrapper">
        <StickyMenu />
        <Router >
          <Routes>
            <Route path='/:year/:month/:day/:title' element={<Posts allPosts={allPosts} loading={loading} />} />
            <Route path='/' element={<Posts allPosts={allPosts} loading={loading} curPostIndex={curPostIndex} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        <About />
        <ArticleNav posts={allPosts} curPostIndex={curPostIndex} setCurPostIndex={setCurPostIndex} />
      </div>
      <Footer />
    </div >
  );
}

export default App;
