import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{opacity:0, scale: 0.5}}
                    animate={{opacity:1, scale: 1}}
                    transition={{duration: 0.5}}
                >Divyam Singh
                </motion.span>
                <div className="social">
                    <a href="https://twitter.com/SDivyam18" target="_blank"><img src="/x.png" alt="twitter"/></a>
                    <a href="https://github.com/Lucifer1811" target="_blank"><img src="/github.png" alt="GitHub"/></a>
                    <a href="https://www.linkedin.com/in/singhdivyam/" target="_blank"><img src="/In-Blue-34.png" alt="LinkedIn"/></a>
                    <a href="https://www.youtube.com/@DivyamSingh1811" target="_blank"><img src="/youtube.png" alt="Youtube" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;