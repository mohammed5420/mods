import React from "react";
import Name from "../../imgs/person.svg";
import Message from "../../imgs/chat.svg";
import Email from "../../imgs/email.svg";
import Chat from "../../imgs/send.svg";
import holder from "../../imgs/contact.svg";
import { PageTransition , ImageAnim} from '../animation';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={ PageTransition }
      animate="show"
      initial="hidden"
      exit="exit"
    >
      <div className="contact__form">
        <h2 className="contact__form__title">let's keep in touch</h2>
        <form className="form" name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />

          <div className="form__name">
            <label htmlFor="name">your name</label>
            <input
              required
              type="text"
              placeholder="mohammed"
              id="name"
              name="name"
            />
            <img src={Name} alt="Name" />
          </div>
          <div className="form__email">
            <label htmlFor="email">your email</label>
            <input
              required
              type="email"
              placeholder="example@ex.com"
              id="email"
              name="email"
            />
            <img src={Email} alt="Email" />
          </div>
          <div className="form__message">
            <label htmlFor="message">your message</label>
            <textarea
              required
              id="message"
              placeholder="hello there"
              cols="30"
              rows="10"
              name="message"
            ></textarea>
            <img src={Message} alt="Message" />
          </div>
          <div className="form__btn">
            <button className="btn" type="submit">
              <span>send</span> <img src={Chat} alt="chat icon" />
            </button>
          </div>
        </form>
      </div>
      <div className="contact__img">
        <motion.img variants={ImageAnim} src={holder} alt="hero" />
      </div>
    </motion.div>
  );
};

export default Contact;
