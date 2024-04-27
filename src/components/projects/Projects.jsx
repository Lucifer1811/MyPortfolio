import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    category: "Machine Learning",
    title: "Stock Wise",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXN6cGcwbmhxZTA3NDRyOTVuajdyZm9xaWJjZXdia2FxdW5rcWxzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aTS0jt1TAQw6nof0p4/giphy.gif",
    desc: "A Python project that combines financial data retrieval, machine learning, and GUI development to predict stock prices. The application fetches stock data using the yfinance library, preprocesses the data, and trains predictive models, including a Random Forest classifier and an LSTM neural network, to forecast future stock prices.",
    link: "https://github.com/Lucifer1811/StockWise",
  },
  {
    id: 2,
    category: "App Development",
    title: "Been There",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFxNDZjMm9ydzZ6bjFmaXVlY2NzbmZrYTVsdmRydWJuaTN3bDBpeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cjbfyJrICOaKIXBWyG/giphy.gif",
    //"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlzc3IxZmpvbG54Y3NtZ21iOXNyanRicmx4NjVkMjdscHVveGRtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rBA9YKPPA4v7DXPdvg/giphy.gif",
    //  https://giphy.com/gifs/nounish-dao-nouns-noggles-rBA9YKPPA4v7DXPdvg
    // https://giphy.com/gifs/pbskids-sesame-street-pbs-kids-iOklTMzdC0xTViILue
    // https://giphy.com/gifs/pudgypenguins-look-looking-search-qDa4qpPsBbC2IJG88B
    desc: "BeenThere is a Flutter application designed to enable users to interact with a map interface, leave location-based notes, and store this data in a backend database. The app utilizes a custom REST API built with Django and Django Rest Framework (DRF) to handle communication with the database.",
    link: "https://github.com/Lucifer1811/BeenThere",
  },
  {
    id: 3,
    category: "Web Development",
    title: "Django Chat",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3lzaGhvZDd2OTZ4NzgxZ3Znb2Q3M3g4aHI3N3JvemF3MmNnNWF0eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/65HR2UL6nn6XMSUoRA/giphy.gif",
    // "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXBmNHJ2M2ZqMW9sejFlZGNtMjVtOXAxYmVyejZodW54MnhjN2x6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8fbeFbshnfyJW/giphy.gif",
    desc: "The project is structured using Django framework, with HTML templates for frontend rendering. Web sockets are implemented for real-time communication between users. The SQLite database is utilized to store user information and chat messages. The UI design is enhanced using the Tailwind CSS framework, ensuring a responsive user interface.",
    link: "https://github.com/Lucifer1811/DjangoChat",
  },
  {
    id: 4,
    category: "Machine Learning",
    title: "Alfred AI",
    img: "Alfred.gif",
    // https://imgur.com/gallery/f3uuE
    desc: "Alfred AI, your personal voice assistant powered by AI technologies. It is supported by LLMs. This is a Python script that enables you to interact with Alfred, a voice-based assistant designed to help you with various tasks using natural language commands.",
    link: "https://github.com/Lucifer1811/alfred-AI",
  },
  {
    id: 5,
    category: "Machine Learning",
    title: "Doc Convo",
    img: "seekingDoc.gif",
    desc: "DocConvo is an innovative tool that facilitates natural language interactions for exploring PDF documents. This application leverages LangChain, a powerful library for text processing and retrieval, to enhance the conversational experience.",
    link: "https://github.com/Lucifer1811/DocConvo",
  },
  {
    id: 6,
    category: "App Development",
    title: "Send Notes",
    img: "https://media.giphy.com/media/56ikf9jD4ZK6s/giphy.gif?cid=ecf05e478syf4l09z0988au4ldwddbg6nnwkqcg34x7c9m0q&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    // "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3ZxMDBub2Q1NXFyejgzcWd4eGtsdTN4emwyaWRuaHZjbGhwaWR0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nGtOFccLzujug/giphy.gif",
    desc: "The project integrates a Flutter frontend for note management and a Django backend with SQLite storage. Django Rest Framework is employed to create API endpoints for seamless communication between the components.",
    link: "https://github.com/Lucifer1811/SendNotes",
  },
  {
    id: 7,
    category: "App Development",
    title: "Check Store",
    img: "https://media.giphy.com/media/XLyr6S5gwj05y/giphy.gif?cid=790b7611m5w56oqwbp5kff3thbqffv4aujv22z1s648izr20&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    // "https://media.giphy.com/media/z2D26GunfUK1W/giphy.gif?cid=790b7611m5w56oqwbp5kff3thbqffv4aujv22z1s648izr20&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    // https://media.giphy.com/media/fAhOtxIzrTxyE/giphy.gif?cid=790b7611m5w56oqwbp5kff3thbqffv4aujv22z1s648izr20&ep=v1_gifs_search&rid=giphy.gif&ct=g
    desc: "CheckStore, a Flutter-based shopping app, includes a bottom navigation bar for multiple pages, showcasing products and a cart with add/delete functionalities. It also features design elements like a top drawer and search box, though non-functional.",
    link: "https://github.com/Lucifer1811/CheckStore",
  },
  {
    id: 8,
    category: "Web Development",
    title: "TinDog",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmY2Y3QwdW9lYmE4cXRqNXJsdWRkd2lpcXo4enptMnI5dnJ3bWRwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XvZ8PJ4DSqzSM/giphy.gif",
    desc: "TinDog - Meet New Dogs Nearby TinDog is a modern and stylish web application that brings dog owners and their furry friends together. This project showcases a responsive website built with HTML, CSS, and Bootstrap, offering a sleek interface to connect dog lovers and their pets with others to find exciting playmates",
    link: "https://github.com/Lucifer1811/TinDog",
  },
  {
    id: 9,
    category: "App Development",
    title: "WhaTo-Do",
    img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmNuMGFuNHd1end5Z25oMDJ3MzJydGhrb3NxOWN6Z2s2M3Nia2Q3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/inRld4Ngt0GYiRU0DE/giphy.gif",
    // https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTdxbXZmOXN3a2ZoMnA1ZmJmajRkZWY3dDY0bjNidW5vbjA5bmhqNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HYYbdk46gUzrgWi1Iz/giphy.gif
    // https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWMxN3V6OWFjM2wzcjcyam04amtyeDk5OHZ2cm40amFtOTNvMTA5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ufnwz3wDUli7GU0/giphy.gif
    desc: "The WhaToDo is a comprehensive to-do list application. Users can easily add, delete, and mark tasks as completed. It offers intuitive features such as crossing off done tasks and sliding to delete tasks. The application utilizes Hive database.",
    link: "https://github.com/Lucifer1811/WhaToDo",
  },
  {
    id: 10,
    category: "Web Development",
    title: "Simon Challenge",
    img: "https://cdn.dribbble.com/users/1711681/screenshots/6127228/day-16-simon.gif",
    desc: "Relive Simon Game's nostalgia with our web app! Follow colored button sequences, advance levels, and enjoy dynamic styling with HTML, CSS, and JS. Responsive design ensures play across devices.",
    link: "https://github.com/Lucifer1811/simonChallenge",
  },
];

const Single = ({ project }) => {
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
                    <img src={project.img} alt={project.title} style={{height: "400px", width: "600px", borderRadius: "5%"}} />
                </div>
                <motion.div className="textContainer"  style={{y}}>
                    <h2 >{project.title}</h2>
                    <p>{project.desc}</p>
                    <a href={project.link} target="_blank"><button>View Project</button></a>
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
      {projects.map((project) => (
        <Single project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
