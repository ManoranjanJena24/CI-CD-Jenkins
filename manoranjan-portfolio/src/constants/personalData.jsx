import React from "react";

export const profile = {
  name: "Manoranjan Jena",
  title: "Full-Stack Developer (React + Node)",
  location: "Pune, Maharashtra, India",
  email: "manoranjan.p.jena@gmail.com",
  phone: "+91-9637740832",
  github: "https://github.com/ManoranjanJena24",
  linkedin: "https://linkedin.com/in/ManoranjanJena",
  about:
    "Results-oriented Full-Stack Developer with 2.5+ years of experience building scalable, high-performance web and mobile applications. Specialized in React, Node.js, and TypeScript, with a strong foundation across end-to-end development; from intuitive frontend interfaces to robust backend architectures. Currently driving impactful solutions, collaborating with clients across fintech, real estate, and e-commerce domains to deliver reliable, user-centric products.",
};

export const skillGroups = [
  {
    title: "Backend Core & Languages",
    icon: (
      <svg
        className="w-6 h-6 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: ["NodeJS", "Express", "TypeScript", "Javascript", "Rest API"],
  },
  {
    title: "Databases & Architecture",
    icon: (
      <svg
        className="w-6 h-6 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: ["SQL", "MongoDB", "NoSQL", "Redis", "RabbitMQ"],
  },
  {
    title: "Frontend & Mobile",
    icon: (
      <svg
        className="w-6 h-6 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    skills: [
      "React JS",
      "React Native",
      "Redux ToolKit",
      "Context Api",
      "HTML, CSS, Bootstrap",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg
        className="w-6 h-6 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    skills: ["Docker", "Postman", "GIT", "Test-Driven Development (TDD)"],
  },
];

export const experiences = [
  {
    role: "Full Stack Developer (React + Node)",
    company: "Beltronic Consultancy (PLM Team)",
    period: "July 2023 - Present",
    description: [
      "Build and scale high-performance web and mobile applications using React.js, React Native, and Node.js.",
      "Develop efficient RESTful APIs and responsive, user-centric interfaces.",
      "Leverage Redis to enhance application speed, caching, and overall performance.",
      "Deliver impactful, user-focused solutions for clients such as Finova Bank and GlobalNest Realty.",
      "Collaborate cross-functionally to ensure high-quality, reliable software delivery.",
    ],
  },
  {
    role: "Full Stack Intern",
    company: "CocoTechoes",
    period: "January 2023 - June 2023",
    description: [
      "Developed features for the 'Real Estate View' app using React Native and Redux for iOS and Android environments.",
      "Built intuitive UI and ensured smooth navigation and user experience.",
      "Implemented efficient state management using Redux.",
      "Applied TDD practices to ensure application stability and reliability.",
      "Delivered a high-performing app with strong user and stakeholder feedback.",
    ],
  },
];

export const projects = [
  {
    title: "ExpenditureXpert",
    tagline: "Expense Management System",
    description:
      "A responsive web application helping users record and manage expenses. Built premium report generation features, integrated Razorpay for processing payments, and implemented a dual SQL/NoSQL backend database layer.",
    tech: [
      "Javascript",
      "Express",
      "NodeJS",
      "AWS",
      "JWT",
      "Sequelize",
      "Mongoose",
      "Jenkins",
    ],
    link: "https://github.com/ManoranjanJena24/Fully-Functioning-Expense-Tracker-/tree/cicddeployments",
  },
  {
    title: "SquadTalk",
    tagline: "Real-Time Group Chat Architecture",
    description:
      "A real-time group chat application featuring group administration privileges (creating/deleting users, assigning admins) and automated server-side routines to archive old chats.",
    tech: [
      "Socket.io",
      "Express",
      "Sequelize",
      "Cron job",
      "Nodejs",
      "AWS",
      "JWT",
      "Jenkins",
    ],
    link: "https://github.com/ManoranjanJena24/Fully-Functioning-ChatApp/tree/frontendreadytodeploy",
  },
];
