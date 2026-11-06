export const personalInfo = {
  name: "Bima",
  title: "Software Developer",
  tagline:
    "Informatics Engineering student at Dr. Soetomo University with experience in developing web applications within the IT division of a government agency.",
  location: "Indonesia",
  email: "bimasopan11@gmail.com",
  github: "https://github.com/mr88-zodiak",
  linkedin: "https://www.linkedin.com/in/bima-putra-b56a703b6/",
  // photo: "/profile-bima.jpg",
  photo: "src/assets/image/images.jpeg",
  resumeUrl: "#",
};

export const rotatingRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const education = [
  {
    id: 1,
    type: "education",
    degree: "Bachelor's in Informatics Engineering",
    school: "Dr. Soetomo University",
    period: "Expected April 2026",
    description:
      "Studying software development, databases, computer networks, and information systems — building a strong foundation for delivering reliable digital solutions.",
    highlights: ["Software Engineering", "Database Systems", "Web Development"],
  },
];

export const experience = [
  {
    id: 1,
    type: "experience",
    degree: "Software Developer",
    school: "BPSDMP Kominfo Surabaya",
    period: "6 months",
    description:
      "Built a web-based training registration platform for Rumah Inovatif, enabling participants to sign up for programs online with a streamlined and user-friendly flow. Collaborated with the IT team to develop responsive interfaces, integrate registration workflows, and ensure the system runs reliably for daily operational use. Contributed to improving digital services within a government technology environment focused on human resource development in the telecommunications and informatics sector.",
    highlights: [
      "Training Registration System",
      "Responsive Web UI",
      "Government Digital Services",
    ],
  },
];

export const timeline = [...education, ...experience];

export const projects = [
  {
    id: 1,
    title: "GameRent ID",
    description:
      "Landing page for a game rental service with modern UI, responsive layout, and clear call-to-action sections to attract customers.",
    tech: ["React", "CSS"],
    liveUrl: "https://landing-page-gamerentid.vercel.app/",
    githubUrl: "https://github.com/mr88-zodiak/landing-page-GAMERENTID",
    featured: true,
  },
  {
    id: 2,
    title: "FlowPage",
    description:
      "Sales page generator that helps users create high-converting landing pages quickly using an intuitive React-based interface.",
    tech: ["React", "Gemini"],
    liveUrl: "https://viral-page-ai.vercel.app/",
    githubUrl: "https://github.com/mr88-zodiak/ViralPage-AI",
    featured: true,
  },
  {
    id: 3,
    title: "Social Aid Recipient Classifier",
    description:
      "Web application for classifying social aid recipients, combining a Vue.js frontend with a Flask backend for data processing.",
    tech: ["Vue.js", "Flask", "Python", "Numpy", "Pandas", "Scikit-learn"],
    liveUrl: "https://sr-penerima-donasi-barang-bekas-fro.vercel.app/",
    githubUrl:
      "https://github.com/mr88-zodiak/SR-penerima-donasi-barang-bekas_Front-end",
    featured: true,
  },
  {
    id: 4,
    title: "BicaraAI",
    description:
      "AI-powered chatbot application built with React, offering an interactive conversational experience for users.",
    tech: ["React", "Gemini", "Firebase"],
    liveUrl: "https://batara-chatbot.vercel.app/",
    githubUrl: "https://github.com/mr88-zodiak/batara-chatbot",
    featured: false,
  },
  {
    id: 5,
    title: "Anime Card Collection",
    description:
      "Anime card collection app for browsing, organizing, and showcasing favorite anime character cards in a visually engaging layout.",
    tech: ["React", "CSS"],
    liveUrl: "https://koleksikartuanime.vercel.app/",
    githubUrl: "https://github.com/mr88-zodiak/CardCollectionAnime",
    featured: false,
  },
];

export const skills = [
  "Express.js",
  "React",
  "HTML/CSS",
  "JavaScript",
  "Flask",
  "Python",
  "Go/Golang",
  "Git",
  "REST API",
  "Pandas",
  "Laravel",
  "Numpy",
  "Matplotlib",
];
