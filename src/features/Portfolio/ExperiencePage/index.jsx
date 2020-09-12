import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { pageScaleVariants } from "../../../transitions";
import "./ExperiencePage.css";

export default function ExperiencePage(props) {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageScaleVariants}>
      <h1 style={{ color: "white" }}>this is a experience page</h1>
    </motion.div>
  );
}
