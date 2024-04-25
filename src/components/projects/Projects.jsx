import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "StockWise",
    img: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 2,
    title: "BeenThere",
    img: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 3,
    title: "DjangoChat",
    img: "https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 4,
    title: "Alfred AI",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
];
const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [ -300 , 300]);

  return (
    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imgContainer"  ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer"  style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link}><button>View Project</button></a>
                </motion.div>
            </div>
        </div>        
    </section>);
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="line"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
