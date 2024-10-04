import { motion } from "framer-motion";
import "./LandingPage.css";
import hero_Video from "../../public/student_with_phone.mp4";

const LandingPage = () => {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        src={hero_Video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Unlock Your True English Potential
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Find out where you stand on your path to English mastery.
        </motion.p>
        <motion.button
          className="get-started-button"
          initial={{ opacity: 0, y:-50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          Get Started <i className="fa-solid fa-arrow-right"></i>
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
