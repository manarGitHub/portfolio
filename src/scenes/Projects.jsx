// src/components/Projects.jsx
import { useState, useMemo } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import ProjectModal from "../components/ProjectModal";
import {getProjectsByCategory, getProjectsCountByCategory } from "../data/projectsData";
import { categories, categoryColors, activeCategoryColors } from "../data/categories";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ project, onClick }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`;

  return (
    <motion.div variants={projectVariant} className="relative group h-full min-h-[300px]" onClick={onClick}>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{project.title}</p>
        <p className="mt-7 mb-4">{project.subtitle}</p>
        <span className="px-6 py-2 bg-red text-white font-semibold rounded-full">
          View Details
        </span>
      </div>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover absolute inset-0"
      />
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get projects count for each category
  const projectsCount = useMemo(() => getProjectsCountByCategory(), []);

  // Get filtered projects based on active category
  const filteredProjects = useMemo(() => 
    getProjectsByCategory(activeCategory),
    [activeCategory]
  );

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Click on any project to view detailed information about the technologies used, features, and links to the live demo or source code.
        </p>
      </motion.div>

      {/* CATEGORY FILTERS */}
      {/* CATEGORY FILTERS */}
<motion.div
  className="flex flex-wrap justify-center gap-2 mb-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
>
  {categories.map((category) => (
    <button
      key={category.id}
      onClick={() => {
        console.log('Category clicked:', category.id);
        setActiveCategory(category.id);
      }}
      className={`px-4 py-1.5 text-sm rounded-full font-semibold transition-all duration-300 flex items-center gap-1.5 ${
        activeCategory === category.id
          ? activeCategoryColors[category.id] || "bg-red text-white"
          : categoryColors[category.id] || "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      title={category.description}
    >
      <span>{category.icon}</span>
      <span>{category.name}</span>
      <span className="text-xs opacity-80">({projectsCount[category.id] || 0})</span>
    </button>
  ))}
</motion.div>

      {/* PROJECTS GRID */}
      <div className="flex justify-center">
        {filteredProjects && filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl w-full"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            key={activeCategory} // Add key to force re-render
          >
            {filteredProjects.map((project) => (
              <Project 
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-2xl font-playfair mb-4">No projects found in this category</p>
            <p className="text-gray-600">Check back soon for new projects!</p>
          </motion.div>
        )}
      </div>

      {/* Debug Info - Remove in production */}
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded text-xs opacity-50 hidden">
        <p>Active: {activeCategory}</p>
        <p>Projects: {filteredProjects?.length || 0}</p>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;