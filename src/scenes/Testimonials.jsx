import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      screenshot: "assets/pfe.PNG", 
      quote: "Congratulations on this amazing achievement! 👏 Your project is a great example of bridging academic knowledge with real-world impact. Wishing you all the best in your journey as a Full Stack and Cloud Engineer!",
      author: "CEO and Founder",
      company: "Capgemini",
      bgColor: "bg-blue",
      beforeContent: "before:content-person1" 
    },
    {
      id: 2,
      screenshot: "assets/tpl.PNG", 
      quote: "Great job on this amazing training! 👏 Your expertise and knowledge sharing were truly valuable for our participants. Looking forward to collaborating again! 🚀📱",
      author: "Team Leader",
      company: "TPL",
      bgColor: "bg-red",
      beforeContent: "before:content-person2"
    },
    {
      id: 3,
      screenshot: "assets/actia.PNG", 
      quote: "Thank you for providing your latest version of the report.I appreciate the quality of your work.",
      author: "Team Lead",
      company: "Actia",
      bgColor: "bg-yellow",
      beforeContent: "before:content-person3"
    }
  ];

  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's what colleagues and managers have said about my work on LinkedIn. 
          These testimonials highlight my technical expertise and professional contributions.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="mx-auto relative max-w-[400px] h-[420px] flex flex-col justify-end p-8 mt-48
        before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      {/* LinkedIn Screenshot Container */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-48 h-48 
        rounded-lg overflow-hidden shadow-2xl border-4 border-white">
        <img
          src={testimonial.screenshot}
          alt={`LinkedIn testimonial ${testimonial.id}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />       
      </div>

      {/* Testimonial Content */}
      <div className={`${testimonial.bgColor} h-full rounded-lg p-6 pt-16 flex flex-col justify-between`}>
        <div>
          <p className="font-playfair text-6xl text-white opacity-80">"</p>
          <p className="text-center text-l text-white mt-4">
            {testimonial.quote}
          </p>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Testimonials;