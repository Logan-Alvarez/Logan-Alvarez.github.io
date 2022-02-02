import Footer from "./Footer";

function About() {
  return (
    <div className="About">
      <div className="image-container">
        <img src="headshot.jpg" alt="Picture of Logan" />
      </div>
      <section className="About-me">
        <h3>Hi, I'm Logan. Nice to meet you.</h3>
        <p>
          My past experience has lead me to embark on a new journey of web
          development. I'm a graduate of Grand Circus tech bootcamp where I
          studied the front-end MERN stack. My career focus is to provide
          exceptional UI/UX design and along the way, learn more advanced tricks
          of the trade.
        </p>
      </section>
      <section className="About-me">
        <h3>More of ME.</h3>
        <p>
          I'd like to share some of my personal interest outside of work. I find
          enjoyment out of kayaking, fishing, biking, snowboarding, and working
          out. If I'm not doing those activities I'm usually playing video games
          or listening to music.
        </p>
      </section>
    </div>
  );
}

export default About;
