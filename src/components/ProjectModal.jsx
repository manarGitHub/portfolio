// src/components/ProjectModal.jsx
import { useState, useRef, useEffect,useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTimes, 
  FaCalendar, 
  FaUserTie,
  FaCheckCircle,
  FaLink,
  FaCode,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaDesktop,
  FaMobileAlt
} from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Set default tab to "video" if videos exist, otherwise "web"
  const [activeMediaTab, setActiveMediaTab] = useState(() => {
    if (project) {
      if (project.videoDemo || (project.videoDemos && project.videoDemos.length > 0)) {
        return "video";
      }
      if (project.screenshots && project.screenshots.length > 0) {
        return "web";
      }
      if (project.mobileScreenshots && project.mobileScreenshots.length > 0) {
        return "mobile";
      }
    }
    return "web";
  });
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  //const [setIsVideoPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoRef = useRef(null);
  const modalRef = useRef(null);

  // Determine available media tabs
  const mediaTabs = useMemo(() => {
  const tabs = [];
  
  if (project) {
    if (project.screenshots && project.screenshots.length > 0) {
      tabs.push({ id: "web", label: "Web Screenshots", icon: <FaDesktop /> });
    }
    
    if (project.mobileScreenshots && project.mobileScreenshots.length > 0) {
      tabs.push({ id: "mobile", label: "Mobile Screens", icon: <FaMobileAlt /> });
    }
    
    // Support both single videoDemo and multiple videoDemos
    if (project.videoDemo || (project.videoDemos && project.videoDemos.length > 0)) {
      tabs.push({ id: "video", label: "Video Demo", icon: <FaPlay /> });
    }
  }
  
  return tabs;
}, [project]); 

  // Reset indices when project changes or modal opens
  useEffect(() => {
    if (project && isOpen) {
      setCurrentImageIndex(0);
      setCurrentMobileIndex(0);
      setCurrentVideoIndex(0);
      //setIsVideoPlaying(false);
      
      // Ensure active tab is valid
      if (mediaTabs.length > 0) {
        const isValidTab = mediaTabs.some(tab => tab.id === activeMediaTab);
        if (!isValidTab) {
          setActiveMediaTab(mediaTabs[0].id);
        }
      }
    }
  }, [project, isOpen, activeMediaTab,mediaTabs]);

  // Navigation functions for web screenshots
  const nextWebImage = (e) => {
    e.stopPropagation();
    if (project?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === project.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevWebImage = (e) => {
    e.stopPropagation();
    if (project?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.screenshots.length - 1 : prev - 1
      );
    }
  };

  // Navigation functions for mobile screenshots
  const nextMobileImage = (e) => {
    e.stopPropagation();
    if (project?.mobileScreenshots) {
      setCurrentMobileIndex((prev) => 
        prev === project.mobileScreenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMobileImage = (e) => {
    e.stopPropagation();
    if (project?.mobileScreenshots) {
      setCurrentMobileIndex((prev) => 
        prev === 0 ? project.mobileScreenshots.length - 1 : prev - 1
      );
    }
  };

  // Navigation functions for videos
  const nextVideo = (e) => {
    e.stopPropagation();
    if (project?.videoDemos) {
      setCurrentVideoIndex((prev) => 
        prev === project.videoDemos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevVideo = (e) => {
    e.stopPropagation();
    if (project?.videoDemos) {
      setCurrentVideoIndex((prev) => 
        prev === 0 ? project.videoDemos.length - 1 : prev - 1
      );
    }
  };

  // Early return must be AFTER all hooks
  if (!project || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-90"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="bg-white rounded-xl sm:rounded-2xl max-w-6xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white p-4 sm:p-6 border-b border-gray-200 flex justify-between items-start sm:items-center z-10 shadow-sm">
            <div className="max-w-2xl flex-1 pr-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-gray-900 leading-tight">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1 sm:mt-2 font-medium">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="flex-shrink-0 p-2 sm:p-3 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Close modal"
            >
              <FaTimes className="text-xl sm:text-2xl text-gray-700" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Project Metadata */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
              {project.role && (
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-lg text-sm sm:text-base">
                  <FaUserTie className="text-red text-sm sm:text-base" />
                  <span className="font-semibold text-red">{project.role}</span>
                </div>
              )}
              {project.timeline && (
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-lg text-sm sm:text-base">
                  <FaCalendar className="text-red text-sm sm:text-base" />
                  <span className="text-red">{project.timeline}</span>
                </div>
              )}
              {project.year && (
                <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-lg font-semibold text-red text-sm sm:text-base">
                  {project.year}
                </div>
              )}
            </div>

            {/* Full-width Media Display Section */}
            {(mediaTabs.length > 0) && (
              <div className="mb-6 sm:mb-8">
                {/* Web Screenshots */}
                {activeMediaTab === "web" && project.screenshots && project.screenshots.length > 0 && (
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-inner">
                    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg isolate">
                      <img
                        src={project.screenshots[currentImageIndex]}
                        alt={`Screenshot ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain bg-white"
                      />
                      
                      {project.screenshots.length > 1 && (
                        <>
                          <button
                            onClick={prevWebImage}
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-red/60 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-30"
                          >
                            <FaChevronLeft className="text-lg sm:text-2xl" />
                          </button>
                          <button
                            onClick={nextWebImage}
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-red/60 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-30"
                          >
                            <FaChevronRight className="text-lg sm:text-2xl" />
                          </button>
                        </>
                      )}
                      
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm z-30">
                        {currentImageIndex + 1} / {project.screenshots.length}
                      </div>
                    </div>
                    
                    {project.screenshots.length > 1 && (
                      <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto py-2">
                        {project.screenshots.map((screenshot, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(index);
                            }}
                            className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 overflow-hidden rounded-lg border-2 transition-all ${
                              currentImageIndex === index 
                                ? 'border-red scale-105 shadow-md' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <img
                              src={screenshot}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Mobile Screenshots */}
                {activeMediaTab === "mobile" && project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-inner">
                    <div className="relative h-80 sm:h-96 overflow-hidden rounded-lg isolate">
                      <div className="w-full h-full flex items-center justify-center bg-white">
                        <img
                          src={typeof project.mobileScreenshots[currentMobileIndex] === 'object' 
                            ? project.mobileScreenshots[currentMobileIndex].url 
                            : project.mobileScreenshots[currentMobileIndex]}
                          alt={`Mobile screen ${currentMobileIndex + 1}`}
                          className="h-full object-contain"
                          style={{ maxWidth: '250px' }}
                        />
                      </div>
                      
                      {project.mobileScreenshots.length > 1 && (
                        <>
                          <button
                            onClick={prevMobileImage}
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-red/60 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-30"
                          >
                            <FaChevronLeft className="text-lg sm:text-2xl" />
                          </button>
                          <button
                            onClick={nextMobileImage}
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-red/60 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-30"
                          >
                            <FaChevronRight className="text-lg sm:text-2xl" />
                          </button>
                        </>
                      )}
                      
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm z-30">
                        {currentMobileIndex + 1} / {project.mobileScreenshots.length}
                      </div>
                    </div>
                    
                    {project.mobileScreenshots.length > 1 && (
                      <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto py-2">
                        {project.mobileScreenshots.map((screen, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentMobileIndex(index);
                            }}
                            className={`flex-shrink-0 w-12 h-20 sm:w-16 sm:h-24 overflow-hidden rounded-lg border-2 transition-all ${
                              currentMobileIndex === index 
                                ? 'border-red scale-105 shadow-md' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <img
                              src={typeof screen === 'object' ? screen.url : screen}
                              alt={`Mobile thumb ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Video Demo */}
                {activeMediaTab === "video" && project.videoDemos && project.videoDemos.length > 0 && (
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-inner">
                    <div className="relative bg-black rounded-lg overflow-hidden isolate">
                      <video
                        ref={videoRef}
                        key={currentVideoIndex}
                        src={project.videoDemos[currentVideoIndex]?.url}
                        className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
                        controls
                        autoPlay={false}
                        preload="metadata"
                      >
                        <source src={project.videoDemos[currentVideoIndex]?.url} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                      
                      {/* Video navigation */}
                      {project.videoDemos.length > 1 && (
                        <>
                          <button
                            onClick={prevVideo}
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-red/60 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-30"
                          >
                            <FaChevronLeft className="text-lg sm:text-2xl" />
                          </button>
                          <button
                            onClick={nextVideo}
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-red/60 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-30"
                          >
                            <FaChevronRight className="text-lg sm:text-2xl" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Video Info */}
                    <div className="text-center mt-3 sm:mt-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                        {project.videoDemos[currentVideoIndex]?.title || `Video ${currentVideoIndex + 1}`}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        {project.videoDemos[currentVideoIndex]?.description || 
                         `Watch a walkthrough of the ${project.title} showing key features and user interactions.`}
                      </p>
                    </div>

                    {/* Video Thumbnails */}
                    {project.videoDemos.length > 1 && (
                      <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto py-2">
                        {project.videoDemos.map((video, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentVideoIndex(index);
                              
                            }}
                            className={`flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 overflow-hidden rounded-lg border-2 transition-all relative ${
                              currentVideoIndex === index 
                                ? 'border-red scale-105 shadow-md' 
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                              <FaPlay className="text-white text-lg sm:text-2xl" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center truncate">
                              {video.title || `Video ${index + 1}`}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Description */}
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 text-red">
                    <FaCode className="text-red text-lg sm:text-xl" />
                    Project Overview
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                {/* Features */}
                {project.features && (
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-red">
                      <FaCheckCircle className="text-red text-lg sm:text-xl" />
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 gap-3 sm:gap-4">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red/10 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                            <span className="text-red font-bold text-xs sm:text-sm">✓</span>
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-6">
                {/* Technologies */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-4 sm:mb-6 text-blue">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white border border-gray-200 text-gray-800 rounded-lg font-medium text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-red">
                    <FaLink className="text-red text-lg sm:text-xl" />
                    Project Links
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* GitHub Link */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 sm:p-4 bg-gray-900 text-white rounded-xl hover:bg-black transition-all group"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <FaGithub className="text-xl sm:text-2xl flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm sm:text-base">Source Code</p>
                            <p className="text-xs sm:text-sm text-gray-300">View on GitHub</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt className="text-sm sm:text-base flex-shrink-0" />
                      </a>
                    )}
                    
                    {/* Live Demo Links */}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 sm:p-4 bg-red text-white rounded-xl hover:bg-dark-red transition-all group"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <FaExternalLinkAlt className="text-lg sm:text-xl flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm sm:text-base">Live Demo</p>
                            <p className="text-xs sm:text-sm text-red-100">Visit Website</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt className="text-sm sm:text-base flex-shrink-0" />
                      </a>
                    )}
                    
                    {project.live && !project.liveDemo && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 sm:p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all group"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <FaExternalLinkAlt className="text-lg sm:text-xl flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm sm:text-base">Live Project</p>
                            <p className="text-xs sm:text-sm text-blue-100">Visit Application</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt className="text-sm sm:text-base flex-shrink-0" />
                      </a>
                    )}
                    
                    {/* Media Navigation Buttons */}
                    {mediaTabs.length > 1 && (
                      <div className="space-y-2 mt-4">
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">View Media:</p>
                        {project.screenshots && project.screenshots.length > 0 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMediaTab("web");
                            }}
                            className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all text-sm sm:text-base ${
                              activeMediaTab === "web" 
                                ? "bg-red text-white" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <FaDesktop className="flex-shrink-0" />
                              <span>Web Screenshots</span>
                            </div>
                            <span className="text-xs sm:text-sm">{project.screenshots.length} images</span>
                          </button>
                        )}
                        
                        {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMediaTab("mobile");
                            }}
                            className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all text-sm sm:text-base ${
                              activeMediaTab === "mobile" 
                                ? "bg-red text-white" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <FaMobileAlt className="flex-shrink-0" />
                              <span>Mobile Screens</span>
                            </div>
                            <span className="text-xs sm:text-sm">{project.mobileScreenshots.length} screens</span>
                          </button>
                        )}
                        
                        {(project.videoDemo || (project.videoDemos && project.videoDemos.length > 0)) && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMediaTab("video");
                            }}
                            className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all text-sm sm:text-base ${
                              activeMediaTab === "video" 
                                ? "bg-red text-white" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <FaPlay className="flex-shrink-0" />
                              <span>Video Demo</span>
                            </div>
                            <FaExternalLinkAlt className="flex-shrink-0" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 p-3 sm:p-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
              <div className="text-xs sm:text-sm text-gray-500">
                {project.category === 'mobile' ? '📱 Mobile App' : 
                 project.category === 'web' ? '🌐 Web Application' : 
                 project.category === 'devops' ? '☁️ DevOps Project' : '✨ Other Project'}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm sm:text-base"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;