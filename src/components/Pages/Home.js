import React from "react";
import Landing from "../Sections/Landing";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import {PageTransition} from '../animation';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      variants={PageTransition}
      animate="show"
      initial="hidden"
      exit="exit"
      style={{position: 'relative',overflow: 'hidden'}}
    >
      <Landing />
      <div className="about-container">
        {" "}
        <About />
        <Projects />
      </div>
    </motion.div>
  );
};

export default Home;
