import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Projects, Team } from "../Data";
import { PageTransition } from "../animation";
import { motion } from "framer-motion";

const Project = props => {
  const [id, setId] = useState(props.match.params.project_id);
  useEffect(() => {
    scrollToTop();
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const TeamList = Team[id - 1].map(member => (
    <div className="team__card" key={member.id}>
      <div className="card__title">
        <span className="avatar">
          <img src={member.image} alt="member" />
        </span>
        <span className="member">{member.name}</span>
      </div>
      <p className="card__body">{member.discription}</p>
      <Link to="/" className="btn card__btn">
        my portfolio
      </Link>
    </div>
  ));

  return (
    <motion.main
      className="project"
      variants={PageTransition}
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <div className="project__info">
        <h2 className="project__title">{Projects[id - 1].title}</h2>
        <p className="project__logo">
          <span className="avatar"></span>
          <span>{Projects[id - 1].name}</span>
        </p>
        <div className="project__shots">
          {Projects[id - 1].images.map(img => {
            return (
              <div key={Math.random() * 100}>
                <img src={img} alt="snaoshots" />
              </div>
            );
          })}
        </div>
        <div className="project__discription">
          <h3 className="discription-title">{`about ${
            Projects[id - 1].name
          }`}</h3>
          <p className="discription-body">{Projects[id - 1].discription}</p>
        </div>
      </div>
      <Link className="btn" to="/contact">
        contact us
      </Link>
      <div className=" project__team ">
        <h2 className="title">our team</h2>
        <div className="team__container">{TeamList}</div>
      </div>
    </motion.main>
  );
};

export default Project;
