import SectionTitle from '../ui/SectionTitle'; // <-- 
import SectionWrapper from '../layout/SectionWrapper'; 

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <SectionTitle>Contact Me</SectionTitle>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-8">
           I am always open to discussions, collaborations, or new opportunities. Feel free to reach out to me.
        </p>
        <a 
          href="mailto:irfanyusufk13@gmail.com" 
          className="inline-block bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-bold py-4 px-8 rounded-lg text-lg"
        >
          irfanyusufk13@gmail.com 
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Contact;