import React from "react";

function About() {
  return (
    <section className={styles.about} id="about">
      <p>About</p>
    </section>
  );
}

export default About;

const styles = {
  about: "h-[100vh] bg-red-300",
};
