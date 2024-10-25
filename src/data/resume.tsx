import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nikil Balaji",
  initials: "NB",
  url: "https://nikilb.com",
  location: "San Diego, CA",
  locationLink: "https://www.google.com/maps/place/sandiego",
  description:
    "About 3 Years of software engineering experience fueled by curiosity and a knack for automating everything possible — because being lazy is just smart efficiency.",
  summary:
    "[Kickstarted my career in July 2021 as a Software Engineer at Deloitte](#work), where I spent over two years working with a range of technologies, focusing on [Python, SQL, and SAP](#work). I am [now pursuing a Master's in Computer Science at CSUSM](#education) while interning at [Legrand North America](#work), developing their test automation framework using [SpecFlow and .NET](#skills). Along the way, I had the [pleasure of winning Deloitte's Hackslam 2023](#), further fueling my passion for innovation and automation.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "Python",
    "React",
    "Node.js",
    "Django",
    "Flask",
    "Fast API",
    "Spring Boot",
    "Postgres",
    "Docker",
    "SAP Successfactors"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nikilb.31@gmail.com",
    tel: "+17607593828",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nixcodes",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nikilb",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nikilb.31@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Deloitte",
      href: "https://deloitte.com",
      badges: [],
      location: "Chennai, IN",
      title: "Business Technology Analyst",
      logoUrl: "/deloitte.jpg",
      start: "Jul 2021",
      end: "Aug 2023",
      description:
        "Implemented the inquiry and dispute SAP workflow using Groovy accommodating complex hierarchical and access control logics. Engineered data processing pipeline framework to facilitate seamless integration between SAP Commissions and Power BI dashboards. Developed multiple stored procedures for data extraction and transformation, refactoring complex queries, logging, and indexing strategies.",
    },
    {
      company: "Legrand North America",
      badges: [],
      href: "https://legrand.com",
      location: "San Diego, CA",
      title: "Software Engineer Intern",
      logoUrl: "/legrand.jpg",
      start: "May 2024",
      end: "Current",
      description:
        "Collaborated on designing a SpecFlow automation framework in .NET, improving test coverage by 30% through optimized UI documentation and streamlined code. Owned SpecFlow integration with WinApp Driver and NUnit, using Gherkin for clear communication. Developed a Python-based GUI for IoT device discovery via BACnet, reducing discovery time by 80% with asynchronous programming, and integrated Flask for report generation.",
    },
    {
      company: "California State University San Marcos",
      href: "https://csusm.edu/",
      badges: [],
      location: "Santa Diego, CA",
      title: "Software Development Student Assistant",
      logoUrl: "/csusm.jpg",
      start: "Oct 2023",
      end: "Current",
      description:
        "Built a web app using Django integrating Canvas LMS API to automate rubric creation, streamlining faculty assessment processes. Designed and presented a text-to-QTI converter web app using Django, enhancing assessment management. Created detailed documentation for future scalability and contributed to improving instructional methodologies and technology at CSUSM.",
    },
  ],
  education: [
    {
      school: "California State University",
      href: "https://csusm.edu",
      degree: "Master of Science, Computer Science",
      logoUrl: "/csusm.jpg",
      start: "2023",
      end: "2025",
    },
    {
      school: "University of Madras",
      href: "https://www.unom.ac.in/",
      degree: "Bachelor's in Computer Application (BCA)",
      logoUrl: "/uom.png",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Student Management System LMS",
      href: "https://nikilbalaji.pythonanywhere.com/",
      dates: "2022",
      active: true,
      description:
        "Developed a full-featured Student Management System (LMS) with REST API integration and SQLite3 for managing student data, ensuring post-deployment maintenance via [GitHub](#https://github.com/nixcodes/StudentManagementLMS).",
      technologies: [
        "Python",
        "Django",
        "REST API",
        "SQLite3",
        "React",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nikilbalaji.pythonanywhere.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nixcodes/StudentManagementLMS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/StudentManagement.png",
      video:
        "",
    },
    {
      title: "Decentralized Sports Betting App",
      href: "https://github.com/nixcodes/sportsbetting-solidity",
      dates: "2023",
      active: true,
      description:
        "Developed and deployed a fully functional decentralized sports betting app on the Sepolia testnet. Engineered bug free solidity contract and integrated it with a user-friendly front end with react and Node.js runtime, while storing the data in Postgres database.",
      technologies: [
        "JavaScript", "Solidity", "React.js", "Node.js", "PostgreSQL", "TailwindCSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nixcodes/sportsbetting-solidity",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Web3.png",
      video: "",
    },
    {
      title: "Survey Platform Clone",
      href: "https://github.com/nixcodes/SurveyPlatformClone",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Designed and developed a survey-building platform like Qualtrics, enabling users to create and analyze surveys. Built a secure data storage pipeline using AWS S3 for scalability and secure file handling.",
      technologies: [
        "JavaScript", "React.js", "Node.js", "AWS S3", "PostgreSQL"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nixcodes/SurveyPlatformClone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Party Hosting App",
      href: "https://github.com/nixcodes/YAI",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "•	Developed APIs for user registration, password management, and session handling using Redis for optimized performance, with load testing via JMeter. Led UI/UX design using Figma, creating wireframes to align team understanding and streamline project requirements.",
      technologies: [
        "Java", "Spring Boot", "Redis", "Docker", "PostgreSQL", "React.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nixcodes/YAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/partyapp.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Deloitte Hackslam 2023",
      dates: "Mar 2023",
      location: "Chennai, IN",
      description:
        "Won the Hackslam 2023 hackathon happened across Deloitte USI (1/871) for AI Aided centralized Deloitte booking system.",
      image:
        "/hackathondeloitte.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "LPL Financial Hackarama",
      dates: "Jan 2024",
      location: "San Diego, CA",
      description:
        "Developed a fully functional automated loan processing system with image data extraction and validation in 24 hrs",
      image:
        "/hackathonlpl.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
