import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div className="contact" animate="in" initial="out" variants={pageTransition} transition={{duration: 0.5}}>
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <p
                className="hover"
                onClick={() => navigator.clipboard.writeText("06 06 06 06 06")}
              >
                06 06 06 06 06
              </p>
            </div>
          </div>
        </div>
        <Buttons right={"/"} />
      </motion.div>
    </main>
  );
};

export default Contact;
