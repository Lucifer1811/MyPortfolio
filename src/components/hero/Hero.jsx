import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-1620%",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 100,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DIVYAM SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            Software developer and UI Designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Download CV</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <p>Machine Learing  Data Science  Web Development  C++  Django  PostgreSQL</p>
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Human" />
      </div>
    </div>
  );
};

export default Hero;
