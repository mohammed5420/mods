import React from "react";
import HeroImage from "../../imgs/hero.svg";
import white from "../../imgs/whiteSpace.svg";
import styled from "styled-components";
  import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageTransition, FadeAnim, TitleAnim , ImageAnim} from "../animation";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__info">
        <motion.h1 variants={TitleAnim} className="info-title">
          <span className="u-upper-case">it</span> guys community
        </motion.h1>

        <motion.p variants={FadeAnim} className="info-subtitle">
          get out from your cage and meet good friends in your college
        </motion.p>

        <motion.a variants={FadeAnim} className="info-cta btn" href="/">
          more info
        </motion.a>
      </div>
      <motion.div variants={FadeAnim} className="landing__img">
        <motion.img variants={ImageAnim} src={HeroImage} alt="illustration" />
      </motion.div>
      <img src={white} alt="white" className="whiteSpace" />
    </section>
  );
};
const Hide = styled.div`
  overflow: hidden;
`;
export default Landing;
