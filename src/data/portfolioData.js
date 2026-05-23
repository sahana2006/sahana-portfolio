export const personalInfo = {
  name: "Sahana G",
  shortName: "Sahana",
  role: "3rd Year CSE Student",
  heroSubtitle: "Aspiring Full-Stack Developer · AI/ML Enthusiast",
  heroTagline: "— exploring full-stack development and applied AI.",
  heroDescription:
    "Third-year B.Tech CSE student at IIIT Sri City. I build full-stack and AI-powered projects with React, Django, and machine learning—focused on learning, experimentation, and solid fundamentals.",
  location: "India",
  education: "UG-3 · B.Tech CSE · IIIT Sri City",
  cgpa: "9.97",
  achievementsCgpa: "9.97",
  email: "sahana.g24@iiits.in",
  githubUsername: "sahana2006",
  githubUrl: "https://github.com/sahana2006",
  linkedinUsername: "sahanag2006",
  linkedinUrl: "https://linkedin.com/in/sahanag2006",
  resumePath: "/Sahana_G_Resume.txt",
};

export const heroRoles = [
  "Building full-stack apps with React and Django",
  "Exploring machine learning and RAG systems",
  "Strengthening fundamentals through DSA practice",
];

export const heroMetrics = [
  { value: "9.97", label: "CGPA" },
  { value: "IIIT", label: "Sri City" },
  { value: "RAG", label: "System building" },
  { value: "DSA", label: "Strong foundation" },
];

export const focusAreas = [
  "Full-Stack Web Development",
  "REST API & Backend Design",
  "Machine Learning & Deep Learning",
  "RAG & LLM Integration",
  "System Design",
  "Data Structures & Algorithms",
];

export const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.githubUrl,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedinUrl,
  },
];

export const skills = [
  {
    title: "Frontend",
    icon: "code",
    items: ["React.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Django", "REST APIs", "JWT Authentication", "MySQL"],
  },
  {
    title: "Programming",
    icon: "terminal",
    items: ["Java", "C++", "Python", "C"],
  },
  {
    title: "AI / ML",
    icon: "cpu",
    items: [
      "Machine Learning (Random Forest, SVM, KNN)",
      "Deep Learning (CNNs, RNNs, Transformers)",
      "Retrieval-Augmented Generation (RAG)",
    ],
  },
  {
    title: "Core CS Concepts",
    icon: "terminal",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management",
      "Computer Networks",
    ],
  },
  {
    title: "Tools",
    icon: "tools",
    items: ["GitHub", "VS Code", "Hugging Face"],
  },
];

export const projectCategories = ["All", "AI / Full Stack", "Full Stack"];

export const projects = [
  {
    title: "AgroMind AI",
    category: "AI / Full Stack",
    description:
      "Built a smart agriculture platform that combines AI-based pest detection, crop intelligence, document-grounded assistance and weather-aware decision support for farmers. Implemented a RAG-based chatbot leveraging PDFs and user documents, along with weather APIs and a community feature to enable collaborative farming decisions.",
    techStack: [
      "React",
      "Django",
      "MobileNet",
      "Random Forest",
      "RAG",
      "Weather API",
    ],
    github: "https://github.com/sahana2006/AgroMind",
    demo: null,
    details:
      "Developed an AI-based plant disease and pest detection system using MobileNet through Hugging Face, enabling accurate crop health classification. Built machine learning models for soil analysis and crop health prediction using Random Forest, with performance validated through standard evaluation metrics on curated datasets. Designed a Retrieval-Augmented Generation chatbot capable of answering agriculture-related queries using static knowledge PDFs as well as user-uploaded documents. Integrated a real-time 5-day weather forecasting API and a community discussion module to support data-driven farmer decision-making, while strengthening the pipeline with advanced preprocessing and multi-label encoding.",
  },
  {
    title: "Interview AI",
    category: "AI / Full Stack",
    description:
      "Built a full-stack AI-powered assessment platform with dynamic interviews, automated coding evaluation and real-time feedback generation. Engineered an end-to-end hiring system with recruiter dashboards, role-based assessments and intelligent candidate screening.",
    techStack: ["React", "Django", "Python", "AI Question Generation", "MySQL"],
    github: "https://github.com/sahana2006/InterviewAI",
    demo: null,
    details:
      "Built a full-stack candidate assessment system with domain-based quizzes and AI-generated interview questions tailored to different roles. Implemented an automated evaluation workflow for coding assessments with real-time scoring and feedback generation. Designed an HR dashboard that enables recruiters to post job roles, review candidate applications, and manage hiring pipelines more efficiently.",
  },
  {
    title: "Digital Warranty Tracker",
    category: "Full Stack",
    description:
      "Built a full-stack warranty management platform with secure JWT authentication and seamless product, invoice and ownership tracking. Integrated an AI-powered chatbot to deliver instant, context-aware support for warranty queries and document insights.",
    techStack: ["React", "Django REST API", "JWT", "Mistral AI", "MySQL"],
    github: "https://github.com/sahana2006/DigitalWarranty",
    demo: null,
    details:
      "Developed a full-stack warranty tracking system using React and Django REST Framework with secure JWT-based authentication. Integrated an AI-powered chatbot using the Mistral LLM to handle user queries related to warranty status, invoices, and product details. Built RESTful APIs that enable seamless frontend-backend communication and support responsive, real-time data handling.",
  },
  {
    title: "Retro_Cyber",
    category: "Full Stack",
    description:
      "Built a retro-themed puzzle adventure platform with secure JWT-based authentication, combining authentication flow with interactive multi-stage challenges. Designed a 3-stage decoding game (source code clues, hidden URL paths, and button maze) culminating in a final secret key unlock experience.",
    techStack: ["React", "Django REST API", "JWT", "MySQL"],
    github: "https://github.com/sahana2006/Retro_Cyber",
    demo: null,
    details:
      "Retro_Cyber is a retro-styled puzzle adventure integrated with a secure authentication system. Users must register and log in using JWT-based authentication before accessing a sequence of encrypted challenges designed to test logic, pattern recognition and decoding skills. Designed an interactive multi-stage challenge system that includes source code analysis, hidden URL path discovery and a button maze, culminating in a final secret key unlock experience. Implemented a seamless authentication flow that integrates with the puzzle mechanics to create an engaging user journey.",
  },
];

export const experienceItems = [
  {
    year: "2026",
    title: "Academic Excellence",
    subtitle: "B.Tech CSE | IIIT Sri City",
    description:
      "Maintaining a standout CGPA of 9.97 while building a strong foundation in computer science, software engineering and applied problem-solving.",
  },
  {
    year: "2024",
    title: "DSA Foundation",
    subtitle: "Problem Solving & Core CS",
    description:
      "Solved 200+ Data Structures and Algorithms problems on LeetCode across arrays, strings, linked lists, stacks, queues, trees, and graphs, with a focus on time and space optimization, edge-case handling and efficient algorithm design.",
  },
  {
    year: "2025",
    title: "School Achievements",
    subtitle: "Class 10 & 12 Performance",
    description:
      "Consistently strong academic performance in Class X and XII, reflecting discipline, curiosity and long-term commitment to learning. Secured 97.8% in Class X (ICSE, 2022) and 96.8% in Class XII (CBSE, 2024) from Christ Academy, Bangalore.",
  },
];
