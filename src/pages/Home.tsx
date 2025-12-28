import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Footer from '../components/layout/Footer';
import CV from '../components/sections/CV';


const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <CV />
      </main>
      <Footer />
    </>

  );
};

export default Home;