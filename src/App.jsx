import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <div className="container">
          <motion.h1 initial={{x:9000}} animate={{x:0}}>
            <a href="">HACKATHON_DEMO</a>
          </motion.h1>
          <nav>
            <ul className="menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="hero">
          <img src="/koukyo.jpg" alt="" />
        </div>
        <motion.div initial={{y:200}} whileInView={{y:0}} transition={{duration:0.3,delay:0.2}} className="about">
          <div className="container">
            <h2>ABOUT</h2>
            <div className="intro">
              <div className="intro-img-box">
                <img src="/icon.jpg" alt="" />
              </div>
              <div className="intro-text-box">
                <h3>SAKANA</h3>
                <p>オセアニアにお世話にはなってません</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="photos">
          <div className="container">
            <h2>PHOTOS</h2>
            <div className="photos-list">
              <motion.div className="photo-1" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}} >
                <img src="/10.jpg" alt="" />
              </motion.div>
              <motion.div className="photo-2" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>
                <img src="/17.jpg" alt="" />
              </motion.div>
              <motion.div className="photo-3" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>
                <img src="/18.jpg" alt="" />
              </motion.div>
              <motion.div className="photo-4" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>
                <img src="/1.jpg" alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="copyright">
          <p>&copy; 2023 HACKASON_DEMO ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
