import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on staying up to date with the
          <br /> latest trends and technologies.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Always</b> Exploring
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>New Ideas</b> and Technology.
          </h1>
          <a href="#Projects">
            <button>WHAT CAN I DO?</button>
          </a>
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Machine Learning</h2>
          <p>
          The field of artificial intelligence, particularly machine learning, has always fascinated me. 
          As I delve deeper, I find myself increasingly captivated by its potential. Machine learning's 
          ability to combine natural language processing with large language models opens up a 
          truly exciting array of possibilities.
          </p>
          <button><a href="#Projects">View Projects</a></button>
          
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          My journey began with web development, fascinated by its capacity to translate ideas into visually 
          appealing sites. Learning webdev laid the foundation for bringing my visions to 
          life. Venturing into back-end development, I expanded my skills for handling complex projects. Web 
          development remains my passion, driving me to constantly seek growth and create impactful web applications.
          </p>
          <button><a href="#Projects">View Projects</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>C/C++</h2>
          <p>
            C/C++ was one of the first programming languages I encountered upon entering the field of 
            computer science.  Intrigued by its capabilities in game development, I began learning C++ 
            with the goal of creating my own game someday. While I haven't had the chance to fully pursue 
            this project yet, it remains an area I'm passionate about and excited to explore further in the future.
          </p>
          <button><a href="https://www.hackerrank.com/profile/lucifersingh2017">View Badge</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>App Development</h2>
          <p>
          My foray into app development began with Flutter for a college project. 
          I quickly discovered a passion for cross-platform development and the 
          ability to leverage my backend skills to create engaging applications. 
          Flutter's capabilities continue to impress me as I expand my knowledge in this exciting domain.
          </p>
          <button><a href="#Projects">View Projects</a></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
