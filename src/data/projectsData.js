// src/data/projectsData.js

const importAll = (r, useDefault = false) => {
  return r.keys().map(key => {
    const imported = r(key);
    return useDefault ? (imported.default || imported) : imported;
  });
};

// Import all images from specific folders (no .default needed for images)
const medvisionImages = importAll(
  require.context('../assets/medvision', false, /\.(png|jpe?g|svg)$/),
  false
);

const scanItMobImages = importAll(
  require.context('../assets/scan_it_mob', false, /\.(png|jpe?g|svg)$/),
  false
);

const scanItWebImages = importAll(
  require.context('../assets/scanitweb', false, /\.(png|jpe?g|svg)$/),
  false
);

const ccm = importAll(
  require.context('../assets/ccm', false, /\.(png|jpe?g|svg)$/),
  false
);

const admin_web = importAll(
  require.context('../assets/admin_web', false, /\.(png|jpe?g|svg)$/),
  false
);

const quermes = importAll(
  require.context('../assets/Quermes', false, /\.(png|jpe?g|svg)$/),
  false
);

// Import videos with .default handling
const aws_dep = [
  {
    url:"https://res.cloudinary.com/dnxplymvt/video/upload/v1769083279/awsB_iic2rr.mp4",
    title: 'Backend deploiment',
    description: 'The backend application is managed using PM2 to ensure process stability and automatic restarts',
    type: "local"
  },
  {
    url: "https://res.cloudinary.com/dnxplymvt/video/upload/v1769083381/awsF_xygnys.mp4",
    title: 'Demo Part 2', 
    description: 'frontend service is configured to run persistently using systemd',
    type: "local"
  },

]
const planifVideos = [
  {
    url:"https://res.cloudinary.com/dnxplymvt/video/upload/v1769082412/demo1_z1exm5.mp4",
    title: 'Demo Part 1',
    description: 'Authentication & User Management',
    type: "local"
  },
  {
    url: "https://res.cloudinary.com/dnxplymvt/video/upload/v1769083023/demo2_vz9ybi.mp4",
    title: 'Demo Part 2', 
    description: 'Quotation Module (DEVIS)',
    type: "local"
  },
  {
    url: "https://res.cloudinary.com/dnxplymvt/video/upload/v1769082631/demo3_ytv0dh.mp4",
    title: 'Demo Part 3',
    description: 'Planning & Scheduling',
    type: "local"
  },
  {
    url: "https://res.cloudinary.com/dnxplymvt/video/upload/v1769083115/demo4_zo6hjq.mp4",
    title: 'Demo Part 4',
    description: 'Analysis & Monitoring',
    type: "local"
  }
];

// Individual project objects
export const projects = [
  {
    id: 1,
    title: "PlanifGRDF",
    subtitle: "Full-stack NextJs planification platform",
    category: "web",
    image: "../assets/grdf.png",
    description: "A centralized, secure, and collaborative web platform (PLANIFGRDF), designed to address the limitations of current tools by offering unified and automated management of workload plans for a company's team.",
    technologies: ["NextJs", "Node.js", "MySQL", "Express", "Prisma", "Tailwind CSS", "Git", "Redux Toolkit", "AWS"],
    github: "https://github.com/manarGitHub/PlanifGRDF.git",
    videoDemos: planifVideos,
    features: [
      "User Authentication & Authorization",
      "Resource management (employees)",
      "Financial module (devis)",
      "Task and application management",
      "Dashboards and reporting",
      "Access control module"
    ],
    role: "Full Stack Developer",
    timeline: "6 months",
    year: "2025"
  },
   {
    id: 2,
    title: "MERN Stack Admin Panel",
    subtitle: "Modern responsive administration site design",
    category: "web",
    image: "../assets/admin.jpeg",
    description: "A web application based on modern technologies that performs administrator needs analysis using a tailored software architecture, enabling deployment on different infrastructures via Docker with guaranteed security.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Git", "Docker", "Redux", "Postman"],
    github: "https://github.com/manarGitHub/fullstack-admin.git",
    screenshots: admin_web,

    features: [
      "Reporting and Analysis System",
      "Adapted software architecture",
      "Data security guarantee",
      "Deployment on different infrastructures",
      "Performance Optimized"
    ],
    role: "Fullstack Developer",
    timeline: "4 months",
    year: "2024"
  },
  {
    id: 3,
    title: "E-commerce App",
    subtitle: "Flutter Mobile app for CCM business",
    category: "mobile",
    image: "../assets/ccm_image.png",
    description: "A mobile e-commerce application for presenting and purchasing products from a Tunisian hardware store based in Sfax.",
    technologies: ["Flutter", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/ccm-ecommerce",
    mobileScreenshots: ccm,
    features: [
      "Product Catalog & Search",
      "Shopping Cart & Secure Checkout",
      "User Account & Order History",
      "Real-time inventory management"
    ],
    role: "Mobile Developer",
    timeline: "1 month",
    year: "2024"
  },
  {
    id: 4,
    title: "Doctors app",
    subtitle: "React Native medical consultations application",
    category: "mobile",
    image: "../assets/medvis_image.png",
    description: "Design of an application for real-time access to online medical consultations",
    technologies: ["React Native", "NodeJS", "JavaScript", "Trello", "Stack", "Git"],
    github: "https://github.com/manarGitHub/medvision_app.git",
    mobileScreenshots: medvisionImages,
    features: [
      "User & doctor login",
      "Health stories feed",
      "Video call integration",
      "Chat functionality",
      "E-prescription system",
      "Task checklist"
    ],
    role: "Mobile Developer",
    timeline: "1 month",
    year: "2025"
  },
   {
    id: 5,
    title: "DevOps Pipeline Project",
    subtitle: "Automation of build, test, and deployment processes using CI/CD pipelines",
    category: "devops",
    image: "../assets/actia_cicd.PNG",
    description: "Design and implementation of CI/CD pipelines with GitLab CI for automated software delivery.",
    technologies: ["DevOps", "Docker", "Git", "Pipenv", "Pip", "Automation", "GitLab CI/CD", "Python"],
    github: "https://github.com/manarGitHub/sample-ci-python.git",
    videoDemos:  [  
      {
        url: "https://res.cloudinary.com/dnxplymvt/video/upload/v1769085829/Pipelines_vjo5eg.mp4",
        title: "Pipeline Demo",
        description: "GitLab CI/CD demonstration"
        
      }
    ],
    features: [
      "Python virtual environment management",
      "Containerization with Docker",
      "Version management with Git",
      "Automation of build, test, and deployment processes",
      "Design and implementation of CI/CD pipelines with GitLab CI"
    ],
    role: "DevOps Engineer",
    timeline: "2 months",
    year: "2024"
  },
  {
    id: 6,
    title: "Mobile Control App",
    subtitle: "Mobile app for machine control using the MQTT protocol",
    category: "mobile",
    image: "../assets/quermes_image.png",
    description: "A mobile app that allows users to monitor and control industrial machines remotely using the MQTT protocol.",
    technologies: ["Flutter", "MongoDB", "MQTT", "IoT"],
    github: "https://github.com/yourusername/machine-control-app",
    mobileScreenshots: quermes,
    features: [
      "Display machine parameters (temperature, speed, status) in real-time",
      "Start or stop machines remotely",
      "Connect to MQTT broker for message publishing/subscribing",
      "Push notifications for threshold alerts",
      "Historical data recording and viewing"
    ],
    role: "Mobile Developer",
    timeline: "2 months",
    year: "2024"
  },
  {
    id: 7,
    title: "Scan IT Web app",
    subtitle: "Modern responsive stock management site",
    category: "web",
    image: "../assets/scanitw.jpg",
    description: "ScanIt is a web-based stock management application developed using Angular and Firebase. It helps product store owners efficiently manage their inventory in real time by tracking stock levels, monitoring product movements, and preventing shortages or overstocking. The app offers a simple, responsive interface and cloud-based data storage for secure and scalable inventory management.",
    technologies: ["Angular", "Firebase","Postman","Bootstrap","Typescript"],
    screenshots: scanItWebImages,
    features: [
      "Add, update, and delete products",
      "Manage quantities, categories, and product details",
      "Scan products to quickly update stock levels",
      "Reduce manual data entry errors",
      "Automatic stock synchronization using Firebase",
      "Visual dashboard showing stock status"
    ],
    role: "Web Developer",
    timeline: "2 months",
    year: "2022"
  },
  {
    id: 8,
    title: "Scan IT Mobile app",
    subtitle: "Modern responsive shopping management mobile app",
    category: "mobile",
    image: "../assets/scanitM.jpeg",
    description: "This mobile application is a smart in-store shopping solution developed using Flutter and Firebase, inspired by the Amazon Go concept. It enables customers to perform their shopping autonomously and efficiently using their smartphones.Customers start their shopping session by scanning a personal QR code (generated at signup) on the shopping cart for identification. Products are added automatically to a real-time shopping cart using QR/Barcode scanning and Deep Learning–based product recognition. Fresh products such as fruits and vegetables can be added manually using PIN/PLU codes.The application also integrates an intelligent chatbot that assists customers by guiding them to the exact location of products inside the store departments. Once shopping is completed, users can securely finalize their purchase using electronic cards or the D17 mobile payment application, eliminating the need for traditional checkout queues.",
    technologies: ["Flutter", "Firebase","Postman","Deeplearning","IA","Dart"],
    screenshots: scanItMobImages,
    features: [
      "Unique QR code generated for each user at registration",
      "Camera-based product scanning",
      "Display of products with prices, quantities, and total cost",
      "PIN/PLU code input for fresh items",
      "Secure Online Payment",
      "AI Chatbot for In-Store Guidance"
    ],
    role: "Mobile Developer",
    timeline: "2 months",
    year: "2022"
  },
  {
    id: 9,
    title: "Scan IT IOT project",
    subtitle: "Intelligent shopping cart management system in a store.",
    category: "others",
    image: "../assets/scanit.jpg",
    description: "ScanIt is a smart shopping system designed to automate and enhance the in-store purchasing experience through the integration of IoT technologies, mobile and web applications, and cloud services. The project is composed of two main components: an on-board IoT system integrated into a smart shopping trolley, and a software system consisting of a mobile application and a web application for user and product management.\n Customers identify themselves by scanning a personal QR code on the trolley using their smartphones. Once authenticated, they can browse available products using a voice assistant, add or remove items by scanning QR codes or barcodes, and view their basket in real time. Product detection and verification are handled by intelligent embedded software running on a Raspberry Pi connected to a camera and a weight sensor. After validating the basket, customers can complete their purchase using a selected payment method. All system data is securely stored and synchronized using Firebase cloud services.",
    technologies: ["IOT", "Raspberry Pi","python","Deeplearning","IA","QR Code detection","Smart Shopping"],
    screenshots: ["../assets/IOT.jpg"],
    features: [
      "Smart Cart Identification: User authentication via personal QR code linked to the shopping trolley",
      "Intelligent Product Detection: QR/barcode scanning with camera and weight sensor verification",
      "Real-Time Basket Management: Automatic update of products, prices, and quantities",
      "Voice Assistant & Chatbot: Product consultation and in-store guidance by department",
      "Secure Online Payment: Multiple payment methods with digital invoice generation",
      "Cloud-Based Management System: Mobile app (Flutter) and web app (Angular) connected to Firebase"
    ],
    role: "Iot and embedded engineer",
    timeline: "2 months",
    year: "2022"
  },
   {
    id: 10,
    title: "Aws deploy ",
    subtitle: "deployment of a web application on Amazon Web Services (AWS)",
    category: "devops",
    image: "../assets/aws arch.jpg",
    description: "This project focuses on the deployment of a web application on Amazon Web Services (AWS) using a secure, scalable, and well-structured cloud architecture. The deployment follows a multi-layer architecture that separates access, application, and data layers to ensure security, availability, and maintainability.\n The access layer handles user authentication, request routing, and static content delivery. Amazon Cognito is used to securely manage user authentication and authorization, while Caddy acts as a reverse proxy to route incoming requests to the appropriate backend or frontend services. Static resources such as images are stored in Amazon S3. Network traffic is managed using a main routing table and an Internet Gateway, within an isolated VPC that includes both public and private subnets.\n The public subnet hosts EC2 instances running the frontend and backend applications, secured by security groups and connected to a public routing table. The private subnet contains an Amazon RDS database, isolated from direct internet access and protected by dedicated security groups and a private routing table.\n The backend application is managed using PM2 to ensure process stability and automatic restarts, while the frontend service is configured to run persistently using systemd. This architecture ensures secure communication, high availability, and efficient resource management.",
    technologies: ["Web Application Deployment", "systemd", "PM2", "Reverse Proxy", "Security Groups", "Private Subnet", "Public Subnet", "VPC","S3","AWS","Amazon Cognito","RDS","EC2"],
    videoDemos: aws_dep,
    features: [
      "User authentication and authorization managed by Amazon Cognito",
      "VPC with public and private subnets",
      "EC2 instances hosting frontend and backend services",
      "Backend process managed using PM2",
      "Amazon RDS hosted in a private subnet",
      "Amazon S3 for storing and serving static resources"
    ],
    role: "DevOps Engineer",
    timeline: "2 months",
    year: "2025"
  },
  {
    id: 11,
    title: "Aws with gitlab CI ",
    subtitle: "Dynamic management of development/test environments",
    category: "devops",
    image: "../assets/aws_cicd.PNG",
    description: "The goal of this project is to design and implement a system that dynamically provisions and destroys development and test environments on-demand, optimizing resource usage and minimizing costs. The system utilizes Amazon Web Services (AWS), specifically CloudFormation, EC2/ECS instances, S3, CloudWatch, and Lambda, alongside the Boto3 library for automation. The objective is to deploy environments when requested (for example, via GitLab CI), and then remove them after use, ensuring efficient resource allocation.",
    technologies: ["Aws", "GitLab CI", "SNS", "Lambda", "CloudWatch", "S3", "ECS", "EC2","Boto3","CloudFormation"],
    videoDemos: [  // Wrap single video in array
      {
        url: "https://res.cloudinary.com/dnxplymvt/video/upload/v1769083454/gitlab_aws_xvjufl.mp4",
        title: "AWS with GitLab CI Demo",
        description: "Demonstration of dynamic environment management with AWS and GitLab CI/CD",
        type: "local"
      }
    ],
    features: [
      "Automate the creation and destruction of EC2/ECS instances based on project requirements.",
      "Ensure cost efficiency by removing unused resources after their purpose is fulfilled.",
      "Back up important data to an S3 bucket before deleting environments.",
      "Monitor resource usage and detect idle resources using CloudWatch, triggering automatic cleanup via Lambda functions.",
      "Provide user notifications via SNS (Simple Notification Service) once processes like provisioning, deployment, and cleanup are complete."
    ],
    role: "DevOps Engineer",
    timeline: "1 months",
    year: "2025"
  },
  {
    id: 12,
    title: "Docker containers ",
    subtitle: "Docker-based MERN deployment project",
    category: "devops",
    image: "../assets/docker.png",
    description: "This project focuses on the deployment of a MERN web application (MongoDB, Express.js, React, Node.js) using a containerized architecture based on Docker. The application is deployed using four separate Docker containers, each responsible for a specific service to ensure modularity, scalability, and ease of maintenance.The architecture includes a container for the frontend (React), a container for the backend (Node.js / Express), a container for the MongoDB database, and a dedicated Nginx container acting as the entry point of the system. Nginx functions as a reverse proxy, receiving incoming user requests, routing them to the appropriate frontend or backend containers, and returning the corresponding responses to the clients.This containerized approach isolates services, simplifies deployment, and allows the application to be easily deployed, scaled, or migrated across different environments.",
    technologies: ["Docker", "MERN Stack", "Microservices", "Containerization", "Nginx"],
    videoDemos: [  
      {
        url: "https://res.cloudinary.com/dnxplymvt/video/upload/v1769083568/M%C3%A9dia1_nszl5z.mp4",
        title: "Docker-based MERN deployment Demo",
        description: "Demonstration of deploying our application using four separate Docker containers"
        
      }
    ],
    features: [
      "Microservices-Oriented Containerization",
      "Nginx Reverse Proxy",
      "Scalable & Portable Deployment",
      "Secure Inter-Container Communication",
      "MongoDB data persistence using Docker volumes",
      "Fast deployment and easy service management"
    ],
    role: "DevOps Engineer",
    timeline: "1 months",
    year: "2024"
  },
];

projects.forEach(project => {
  if (project.videoDemos) {
    try {
      const isArray = Array.isArray(project.videoDemos);
      const count = isArray ? project.videoDemos.length : 1;
      console.log(`Project ${project.id} (${project.title}):`, {
        hasVideoDemos: true,
        isArray: isArray,
        videoCount: count
      });
    } catch (error) {
      console.error(`Error logging project ${project.id}:`, error);
    }
  }
});

// Helper functions to get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'all') {
    return projects;
  }
  
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id) => {
  const project = projects.find(project => project.id === id);
  console.log(`Getting project by ID ${id}:`, project);
  return project;
};

export const getAllCategories = () => {
  const categories = new Set(projects.map(project => project.category));
  return Array.from(categories);
};

export const getProjectsCountByCategory = () => {
  const counts = { all: projects.length };
  
  projects.forEach(project => {
    counts[project.category] = (counts[project.category] || 0) + 1;
  });
  
  return counts;
};

export default projects;