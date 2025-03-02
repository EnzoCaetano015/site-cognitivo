import React from "react";
import styles from "./Section.module.css";

const Section = ({ title, content, bgColor, children }) => {
  return (
    <section className={styles.section} style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className={styles.contentWrapper}>{children}</div>
    </section>
  );
};

export default Section;
