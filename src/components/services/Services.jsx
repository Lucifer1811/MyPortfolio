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
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT CAN I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            a vulputate nunc. Nulla non arcu ut nulla blandit dapibus ut sed
            eros. Aenean nec tellus a leo venenatis consectetur sit amet sed
            leo. Fusce sed lectus ac lacus malesuada elementum quis ut lorem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            a vulputate nunc. Nulla non arcu ut nulla blandit dapibus ut sed
            eros. Aenean nec tellus a leo venenatis consectetur sit amet sed
            leo. Fusce sed lectus ac lacus malesuada elementum quis ut lorem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            a vulputate nunc. Nulla non arcu ut nulla blandit dapibus ut sed
            eros. Aenean nec tellus a leo venenatis consectetur sit amet sed
            leo. Fusce sed lectus ac lacus malesuada elementum quis ut lorem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            a vulputate nunc. Nulla non arcu ut nulla blandit dapibus ut sed
            eros. Aenean nec tellus a leo venenatis consectetur sit amet sed
            leo. Fusce sed lectus ac lacus malesuada elementum quis ut lorem.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
