import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  
  // Updated with icons instead of color bars
  const skillCategories = [
    {
      number: "01",
      title: "Programming Languages",
      skills: ["Java", "Python", "Kotlin", "Dart", "JavaScript"],
      icon: "💻", // Computer icon
      iconBg: "bg-blue"
    },
    {
      number: "02",
      title: "Web Development",
      skills: ["JavaScript", "TypeScript", "PHP", "Next.js", "Redux Toolkit", "NodeJS", "Spring Boot"],
      icon: "🌐", // Web/globe icon
      iconBg: "bg-red"
    },
    {
      number: "03",
      title: "Frameworks",
      skills: ["React", "Angular", "Flutter", "Express", "Android"],
      icon: "⚛️", // Atom/React icon
      iconBg: "bg-yellow"
    },
    {
      number: "04",
      title: "DevOps",
      skills: ["GitLab CI/CD", "Docker", "Nginx", "Git", "GitHub", "AWS Cloud", "Virtualization"],
      icon: "🚀", // Rocket/DevOps icon
      iconBg: "bg-green-500"
    },
    {
      number: "05",
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase"],
      icon: "🗄️", // Database icon
      iconBg: "bg-purple-500"
    },
    {
      number: "06",
      title: "Project Management",
      skills: ["Scrum Framework", "Trello", "Agile Methodology"],
      icon: "📊", // Chart/Management icon
      iconBg: "bg-pink-500"
    }
  ];

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            As a Software Engineer with DevOps and Cloud enthusiasm, I've developed expertise across 
            full-stack development, cloud infrastructure, and modern DevOps practices.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            number={category.number}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
            iconBg={category.iconBg}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

// Updated SkillCard Component with Icons
const SkillCard = ({ number, title, skills, icon, iconBg, delay }) => {
  return (
    <motion.div
      className="mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="relative">
        <div className="z-10">
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mr-4`}>
              <span className="text-xl">{icon}</span>
            </div>
            <div>
              <p className="font-playfair font-semibold text-3xl">{number}</p>
              <p className="font-playfair font-semibold text-2xl">{title}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills badges */}
      <div className="flex flex-wrap gap-2 mt-5">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gradient-to-r from-blue to-red text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default MySkills;