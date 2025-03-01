import Meta from "../components/Meta";
import AboutContent from "../components/pages/about/AboutContent";

const About = () => {
  return (
    <>
      <Meta
        title="About Potter DB"
        description="The Harry Potter DB is an API with data from the Harry Potter Universe: Characters, Movies, Books, Spells and Potions."
      />
      <AboutContent />
    </>
  );
};

export default About;
