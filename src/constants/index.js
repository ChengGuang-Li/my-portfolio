import {
  e2e,
  icbc,
  bubble8,
  linkedin,
  study,
  wechat,
  user,
  email
} from "../assets/icons";

import {
  docker,
  nodejs,
  mysql,
  nginx,
  java,
  spring,
  github,
  redis,
  grpc,
  aws,
  express,
  git,
  graphql
} from "../assets/techIcons/backend";

import {
  react,
  eslint,
  js,
  prettier,
  redux,
  tailwindcss,
  threejs,
  html,
  css,
  nextjs,
  mui,
} from "../assets/techIcons/frontend";

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Industrial and Commercial Bank of China",
    icon: icbc,
    iconBg: "#fbc3bc",
    date: "Mar. 2022 - Aug. 2023",
    points: [
      "Refactored loan backend services for over 100 million users using Java, Redis, Mysql, and Spring Boot, achieved a 4x increase in TPS.",
      "Implemented microservices for credit card installment planning in a greenfield project, addressed transaction inconsistency issues in a distributed system.",
      "Optimized system performance and enhanced user experience by implementing Node.js as a BFF.",
      "Initiated an E2E automation testing project, achieving a 20x improvement in testing efficiency ",
      "Delivered a front-end car loan application project utilizing React.js, MobX, Ant Design, and Jest.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Bubble8Up",
    icon: bubble8,
    iconBg: "#a2d2ff",
    date: "Jul. 2021 - Oct. 2021",
    points: [
      "Developed secure GraphQL APIs with JWT-based unified authentication and authorization, using Node.js and Express.js for robust backend services.",
      "Collaborated with front-end engineers to develop an order and inventory management system,using React.js, MobX, Axios, and Material UI.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export const skills = [
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: spring,
    name: "Spring",
    type: "Backend",
  },
  {
    imageUrl: grpc,
    name: "gRPC",
    type: "Backend",
  },

  {
    imageUrl: mysql,
    name: "Mysql",
    type: "Backend",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Backend",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Backend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Backend",
  },
  {
    imageUrl: nginx,
    name: "Nginx",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
    type: "Backend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },

  // front end ------------------------

  {
    imageUrl: js,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: eslint,
    name: "Eslint",
    type: "Frontend",
  },
  {
    imageUrl: prettier,
    name: "Prettier",
    type: "Frontend",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: email,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ChengGuang-Li",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/vincent-li-966198211/",
  },
];

export const projects = [
  {
    iconUrl: study,
    theme: "btn-back-blue",
    name: "Study Online Platform",
    description:
      "The backend architecture of the study online project is designed based on a distributed microservices framework to support high-concurrency and high-availability scenarios.",
    link: "https://github.com/ChengGuang-Li/studyonline-platform",
  },
  {
    iconUrl: wechat,
    theme: "btn-back-green",
    name: "WeChat Auto Messenger",
    description:
      'The Mini program integrated with WeChat sends daily messages to couples on a schedule, aiming to reduce arguments and forgetfulness while fostering stronger relationships.',
    link: "https://github.com/ChengGuang-Li/WeChat-Auto-Messenger",
  },
  {
    iconUrl: user,
    theme: "btn-back-black",
    name: "Portfolio",
    description:
      "This cool 3D personal homepage is built with incredible interactive design principles and utilizes the powerful Three.js and React Fiber 3D technologies.",
    link: "https://github.com/ChengGuang-Li/my-portfolio",
  },
  {
    iconUrl: e2e,
    theme: "btn-back-yellow",
    name: "Automated Testing Project",
    description:
      "The E2E automated testing project simulates user behaviors, boosts test coverage and accuracy, saves time and costs, and reduces the risk of defects, thus streamlining software delivery and enhancing product quality.",
    link: "",
  },
];


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
