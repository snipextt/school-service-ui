import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
};

const variants1 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants1}>
    <MenuItem i={1} icon="home" link="/" route="Home" toggle={toggle} />
    <MenuItem i={2} icon="users" link="/about" route="About" toggle={toggle} />
    <MenuItem
      i={3}
      icon="graduation-cap"
      link="/services"
      route="Services"
      toggle={toggle}
    />
    <MenuItem i={0} icon="book" link="/blog" route="Blog" toggle={toggle} />
  </motion.ul>
);

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

function MenuItem({ i, icon, link, route, toggle }) {
  const style = { border: `2px solid ${colors[i]}`, color: colors[i] };
  return (
    <div onClick={toggle}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={link} className="icon-placeholder" style={style}>
          <i className={`fa fa-${icon} text-xl`} aria-hidden="true"></i>
        </Link>
        <div className="text-placeholder text-xs" style={style}>
          {route}
        </div>
      </motion.li>
    </div>
  );
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export function Example() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  useEffect(() => {
    let ulSidebar = document.querySelector(".ham ul");
    if (ulSidebar.style.display === "none") {
      ulSidebar.parentNode.children[0].style.opacity = 0.9;
      setTimeout(() => {
        ulSidebar.style.display = "flex";
      }, 400);
    } else {
      setTimeout(() => (ulSidebar.style.display = "none"), 300);
      ulSidebar.parentNode.children[0].style.opacity = 1;
    }
    return () => {};
  }, [isOpen]);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className="ham"
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
