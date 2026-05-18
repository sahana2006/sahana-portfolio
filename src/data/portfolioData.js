export const personalInfo = {
  name: "Sahana G",
  shortName: "Sahana",
  role: "Full Stack Developer | AI/ML Enthusiast",
  heroSubtitle: "Full Stack Developer | AI/ML Engineer",
  location: "India",
  education: "B.Tech CSE at IIIT Sri City",
  cgpa: "9.97",
  achievementsCgpa: "9.96",
  email: "sahana.g24@iiits.in",
  githubUsername: "sahana2006",
  githubUrl: "https://github.com/sahana2006",
  linkedinUsername: "sahanag2006",
  linkedinUrl: "https://linkedin.com/in/sahanag2006",
  resumePath: "/Sahana_G_Resume.txt",
};

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
    items: ["Django", "REST APIs"],
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
      "Machine Learning",
      "Deep Learning",
      "LangChain",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
  },
  {
    title: "Tools",
    icon: "tools",
    items: ["GitHub", "VS Code", "MySQL"],
  },
];

export const projectCategories = ["All", "AI", "Full Stack", "Web"];

export const projects = [
  {
    title: "AgroMind AI",
    category: "AI",
    description:
      "Built a smart agriculture platform that combines AI-based pest detection, crop intelligence, document-grounded assistance, and weather-aware decision support for farmers.",
    techStack: ["React", "Django", "MobileNet", "Random Forest", "RAG", "Weather API"],
    github: "https://github.com/sahana2006",
    demo: null,
    details:
      "Developed an AI-based plant disease and pest detection system using MobileNet through Hugging Face, enabling accurate crop health classification. Built machine learning models for soil analysis and crop health prediction using Random Forest, with performance validated through standard evaluation metrics on curated datasets. Designed a Retrieval-Augmented Generation chatbot capable of answering agriculture-related queries using static knowledge PDFs as well as user-uploaded documents. Integrated a real-time 5-day weather forecasting API and a community discussion module to support data-driven farmer decision-making, while strengthening the pipeline with advanced preprocessing and multi-label encoding.",
  },
  {
    title: "Interview AI",
    category: "Full Stack",
    description:
      "Created a full-stack AI-powered assessment platform that streamlines candidate screening through dynamic interviews, coding evaluation, and recruiter-friendly management tools.",
    techStack: ["React", "Django", "Python", "AI Question Generation", "MySQL"],
    github: "https://github.com/sahana2006",
    demo: null,
    details:
      "Built a full-stack candidate assessment system with domain-based quizzes and AI-generated interview questions tailored to different roles. Implemented an automated evaluation workflow for coding assessments with real-time scoring and feedback generation. Designed an HR dashboard that enables recruiters to post job roles, review candidate applications, and manage hiring pipelines more efficiently.",
  },
  {
    title: "Digital Warranty Tracker",
    category: "Web",
    description:
      "Developed a warranty management platform that simplifies product tracking, secure access, and AI-assisted support around coverage, invoices, and ownership records.",
    techStack: ["React", "Django REST API", "JWT", "Mistral AI", "MySQL"],
    github: "https://github.com/sahana2006",
    demo: null,
    details:
      "Developed a full-stack warranty tracking system using React and Django REST Framework with secure JWT-based authentication. Integrated an AI-powered chatbot using the Mistral LLM to handle user queries related to warranty status, invoices, and product details. Built RESTful APIs that enable seamless frontend-backend communication and support responsive, real-time data handling.",
  },
];

export const experienceItems = [
  {
    year: "2026",
    title: "Academic Excellence",
    subtitle: "B.Tech CSE | IIIT Sri City",
    description:
      "Maintaining a standout CGPA of 9.96 while building a strong foundation in computer science, software engineering, and applied problem-solving.",
  },
  {
    year: "2025",
    title: "School Achievements",
    subtitle: "Class 10 & 12 Performance",
    description:
      "Consistently strong academic performance through Class 10 and Class 12, reflecting discipline, curiosity, and long-term commitment to learning.",
  },
  {
    year: "2024",
    title: "DSA Foundation",
    subtitle: "Problem Solving & Core CS",
    description:
      "Built a solid grasp of data structures, algorithms, and programming fundamentals that support both competitive problem solving and production-ready development.",
  },
];
