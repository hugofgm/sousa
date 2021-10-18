import img1 from "../../assets/desconfiar.jpeg";
import img2 from "../../assets/houseofcards.jpeg";
import img3 from "../../assets/quiet.jpeg";
import img4 from "../../assets/itwas.jpg";
import img5 from "../../assets/mycharminghost.jpg";
import { motion } from "framer-motion";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      key="exitAnimation"
      transition={{ duration: 1.5 }}
      exit={{ x: "-100vw", opacity: 0 }}
    >
      <div className="home">
        <div className="card">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="nameHome"
          >
            Isabel Sousa
          </motion.h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            whileTap={{ scale: 0.9 }}
            className="enter-btn"
            role="button"
          >
            <Link to="/recents" className="link">
              Entrar
            </Link>
          </motion.button>
        </div>
        <motion.img
          animate={{ opacity: [0, 0, 0, 1] }}
          transition={{ duration: 20, repeat: Infinity, repeatDelay: 2 }}
          className="gallery-img"
          src={img1}
          alt="can´t read"
        />
        <motion.img
          animate={{ opacity: [0, 0, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatDelay: 2 }}
          className="gallery-img"
          src={img2}
          alt="can´t read"
        />
        <motion.img
          animate={{ opacity: [0, 1, 0, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatDelay: 2 }}
          className="gallery-img"
          src={img3}
          alt="can´t read"
        />
        <motion.img
          animate={{ opacity: [1, 0, 0, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatDelay: 2 }}
          className="gallery-img"
          src={img4}
          alt="can´t read"
        />
      </div>
      <div className="background"></div>
    </motion.div>
  );
};
export default Home;
