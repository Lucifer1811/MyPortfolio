import "./cursor.scss"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    },[]);


  return (
    <motion.div className="cursor" animate={{x: position.x + 10, y: position.y + 10}}></motion.div>
  )
}

export default Cursor;