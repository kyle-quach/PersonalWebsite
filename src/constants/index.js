import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  mongodb,
  docker,
  fridgerage,
  reverdan,
  bodwell,
  fridgerageproduct,
  qrcodehunter,
  personalwebsite,
  aws,
  springboot,
  openai,
  java,
  crypto,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Architecture",
    icon: backend,
  },
  {
    title: "Virtual Reality",
    icon: web,
  },
  {
    title: "Cloud Infrastructure",
    icon: mobile,
  },
  {
    title: "Generative AI",
    icon: creator,
  },

];

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },

];

const experiences = [
  {
    title: "Founder",
    company_name: "Fridge Rage",
    icon: fridgerage,
    iconBg: "#ce5b28",
    date: "May 2023 - Present",
    points: [
      "Build a software using generative AI to help create innovative recipes to reduce waste of leftover food.",
      "Leading a team, I architected an end-to-end web application leveraging React for the front-end, Java with SpringBoot for the back-end, OpenAI API with function calling to power the GenAI features and finally integrating AWS services like DynamoDB and Cognito",
      "This project not only honed my skills in full-stack development but also gave me insights into team leadership, system architecture, and integration of various software components. ",
      "Give it a try: https://www.fridgerage.com/"
    ],
  },
  {
    title: "Software Developer",
    company_name: "Reverdan",
    icon: reverdan,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Part-time position working on a proof of concept project named Reverdan, whose focus is in health and pharmaceutical data analysis.",
      "Implementing the UI using React components, Redux, React Router with Javascript, styling CSS by using the Bootstrap framework to provide a seamless and consistent user experience",
      "In the back-end, I maintain the AWS infrastructure required to support the back-end such as the API gateway and Aurora Database under the supervision of the technical lead along with another developer."
    ],
  },
  {
    title: "Peer Tutor",
    company_name: "Bodwell High School",
    icon: bodwell,
    iconBg: "#ffffff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Helped students to improve their understanding of the core concepts in Calculus, and Physics.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fridge Rage",
    description:
      "A web application using generative AI to help create recipes to reduce waste of leftover food. I architected an end-to-end web application leveraging React for the front-end, Java with SpringBoot for the back-end, OpenAI API with function calling to power the GenAI features and finally integrating AWS services like DynamoDB and Cognito.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Generative AI",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
    ],
    image: fridgerageproduct,
    source_code_link: "https://github.com/fridgerage2023/DEMO_FRIDGERAGE",
  },
  {
    name: "QR Code Hunter",
    description:
      " An Android application to gamify geo-caching QR codes. The project uses Java (Android SDK), XML for creating interfaces, and Firebase for infrastructure, and Figma for designing",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color:"blue-text-gradient",
      }
    ],
    image: qrcodehunter,
    source_code_link: "https://github.com/CMPUT301W23T17/JellyFizz",
  },
  {
    name: "3D Personal Portfolio",
    description:
      "A personal website using Three.js for for rendering and animating the 3D object, TailwindCSS for styling, and React Three Fiber for creating 3D model. The website is hosted in AWS.",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: personalwebsite,
    source_code_link: "https://github.com/kyle-quach/PersonalWebsite",
  },
  {
    name: "Market Mood Metrics",
    description:
    "A software to analyze news and predict cryptocurrency prices. It transforms the chaos of market sentiment into actionable insights by leveraging the influence of currrent news flow.",
    tags: [
      {
        name: "Generative AI",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
