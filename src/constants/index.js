import {
  back,
    port,
    reactodolist,
    vueProject,
    tindog,
    todoList,
    chefT,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    vue,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    next,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    dervac,
    yaba,
    portimg
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
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
        name: "Next JS",
        icon: next,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Dervac ICT Hub",
      icon: dervac,
      iconBg: "#383E56",
      date: "Sept 2024 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend tutor",
      company_name: "Dervac ICT Hub",
      icon: dervac,
      iconBg: "#E6DEDD",
      date: "Sept 2024  - present",
      points: [
        "Educating young developers ",
        "Designing projects for young developers",
        "Developing software developers",
        "Participating in code reviews and providing constructive feedback to young developers.",
      ],
    },
    {
      title: "Frontend tutor",
      company_name: "Yabatech Secondary School",
      icon: yaba,
      iconBg: "#383E56",
      date: "Sept 2024 - present",
      points: [
        "Tutoring Yabatech sceondary students on Frontend web development",
        "Educating the students on ethical hacking and cyber-security",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
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
      name: "Portfolio",
      description:"A portfolio built by ReactJS for job application.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        
      ],
      image: portimg,
      source_code_link: "https://emjaytech.github.io/Emjay-Portfolio/",
    },
    {
      name: "React-TodoList",
      description: "A todolist app built with ReactJS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        
      ],
      image: reactodolist,
      source_code_link: "https://emjaytech.github.io/vite-todoList/",
    },
    {
      name: "Full-Stack Food Delivery Website",
      description:"This is a website created with frontend and backend service with the use of MongoDB for database integration. ",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "blue-text-gradient",
        },
        {
          name: "Toastify",
          color: "green-text-gradient",
        }
      ],
      image: chefT,
      source_code_link: "https://github.com/EmjayTech",
    },
    {
      name: "Vue Project",
      description: "My first website built with Vue js",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        
      ],
      image: vueProject,
      source_code_link: "https://github.com/EmjayTech",
    },
    {
      name: "Portfolio",
      description: "A portfolio created with basic web development skills (i.e. JavaScript, HTML and CSS).",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        }
        
      ],
      image: port,
      source_code_link: "https://portfolio-2-gilt-iota.vercel.app/",
    },
    {
      name: "TinDog",
      description: "TinDog website created with HTML and CSS",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        
      ],
      image: tindog,
      source_code_link: "https://tin-dog-updated-8w6a.vercel.app/",
    },
    {
      name: "Backend Projects",
      description: "For more details on my backend projects, click on the github icon.",
      tags: [
        {
          name: "OAuth",
          color: "pink-text-gradient",
        },
        {
          name: "Passport",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "Expressjs",
          color: "blue-text-gradient",
        },
        {
          name: "Other backend services",
          color: "pink-text-gradient",
        },

        
      ],
      image: back,
      source_code_link: "https://github.com/EmjayTech",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };