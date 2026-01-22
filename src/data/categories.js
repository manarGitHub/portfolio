// src/data/categories.js

export const categories = [
  {
    id: "all",
    name: "All Projects",
    description: "View all my projects across different domains"
  },
  {
    id: "web",
    name: "Web Development",
    description: "Full-stack web applications and websites"
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    description: "Cross-platform mobile applications"
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    description: "Infrastructure, deployment, and cloud solutions"
  },
  {
    id: "others",
    name: "Other Projects",
    description: "Machine learning, games, and other interesting projects"
  }
];

// Category colors for UI - make sure all categories are included
export const categoryColors = {
  all: "bg-blue-500 text-red hover:bg-purple-200",
  web: "bg-blue-100 text-red hover:bg-purple-200",
  mobile: "bg-blue-100 text-red hover:bg-purple-200",
  devops: "bg-blue-100 text-red hover:bg-purple-200",
  others: "bg-blue-100 text-red hover:bg-purple-200",
};

// Active category colors
export const activeCategoryColors = {
  all: "bg-red text-white",
  web: "bg-red text-white",
  mobile: "bg-red text-white",
  devops: "bg-red text-white",
  others: "bg-red text-white",
};