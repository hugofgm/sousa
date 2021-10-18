import "./navbar.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <div className="nav">
      <motion.h1 className="name" whileHover={{ scale: 1.05 }}>
        <Link to="/" className="link">
          Isabel Sousa
        </Link>
      </motion.h1>
      <ul className="navUl">
        <li className="navLi">
          <Link to="/recents" className="link">
            Recent
          </Link>
        </li>
        <li className="navLi">
          <Link to="/collections" className="link">
            Collections
          </Link>
        </li>
        <li className="navLi">
          <Link to="about" className="link">
            About
          </Link>
        </li>
        <li className="navLi">
          <Link to="contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
