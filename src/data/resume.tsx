import { Icons } from "@/components/icons";
import { FileIcon, HomeIcon } from "lucide-react";
import proj1 from "../../public/proj1.png"
import proj2 from "../../public/proj2.b9e419a529f8da4fc8f3.png"
import proj3 from "../../public/proj3.585e2e1fb797ea00c1a5.png"
import code from "../../public/data.jpg"
export const DATA = {
  name: "Natanel Liloz",
  initials: "DV",
  url: "https://natanel-liloz.netlify.app/",
  location: "",
  locationLink: "",
  img:code,
  description:
    "Full-Stack Developer passionate about technology, currently pursuing a Computer Science degree and seeking opportunities to grow and solve complex problems.",
  summary:`I'm currently studying Computer Science at The Open University.\n I love learning new technologies and tackling complex challenges, and I'm eager to join a dynamic team to make a positive impact on meaningful projects.\n I thrive in collaborative environments and am always ready to explore new ideas and innovate. \nMy goal is to grow professionally and contribute creatively to the tech community and the world.`,
  avatarUrl: "/ava.png",
  skills: [
    "Python",
    "Javascript",
    "Typescript",
    "Java",
    "Django",
    "Flask",
    "AWS",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Postgres",
    "React",
    "Redux",
    "Next.js",
    "HTML",
    "CSS",
    "Docker",
    "Git",
    "OOP",
    "Rest API"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home"},
  ],
  contact: {
    email: "nta1998@gmail.com",
    tel: "+972526894022",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nta1998",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/natanelliloz/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:nta1998@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
  ],
  education: [
    {
      school: "The open University",
      href: "https://www.openu.ac.il/",
      degree: "B.Sc. in computer science -student",
      logoUrl: "/openu.jpeg",
      start: "December 2023",
      end: "Present",
    },
    {
      school: "John bryce",
      href: "https://www.johnbryce.co.il/",
      degree: "Python full stack Development",
      logoUrl: "/jb.png",
      start: "September 2022",
      end: "April 2023",
    },
    {
      school: "Udemy Academy",
      href: "https://www.udemy.com/",
      degree: "Python pro Bootcamp",
      logoUrl: "/ud.png",
      start: "July 2022",
      end: "August 2022",
    },
    {
      school: "HarvardX",
      href: "https://www.edx.org/",
      degree: "CS50P",
      logoUrl: "/edx.png",
      start: "August 2022",
      end: "October 2022",
    },
  ],
  projects: [
    {
      title: "HOUSE COMMITTEE",
      active: true,
      description:
        "The House Committee Management System is a web application that provides a user-friendly management system for a house committee. It includes features such as a chat, votes for the house committee, surveys, and a shop for the sale of products in the building itself. The application is built using React-redux and Python Django and works on ASGI",
      technologies: [
        "Typescript",
        "HTML",
        "CSS",
        "Redux",
        "Django",
        "PostgreSQL",
      ],
      links: [
        {
          type: "FrontEnd",
          href: "https://github.com/nta1998/house-committee",
          icon: <Icons.github className="size-3" />,
        },  
        {
          type: "BackEnd",
          href: "https://github.com/nta1998/house_committee_web",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: proj1,
      video: "",
    },
    
    {
      title: "AI FACEBOOK",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Software that connects to chatGPT and creates Facebook posts on a selected topic and sends them to be posted on Facebook by entering a password and email. The software will create the requested post and publish it on its own. Built using selenium and tkinter ",
      technologies: [
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nta1998/Ai_facebook",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: proj2,
      video:"",
    },
    {
      title: "LIBRARY",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A website for managing a library that includes adding new books, adding questions and adding new customers to the library was built in React and Python flask",
      technologies: [
        "Javascript",
        "HTML",
        "CSS",
        "Python",
        "Flask",
      ,
      ],
      links: [
        {
          type: "Website",
          href: "https://book-lms.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "FrontEnd",
          href: "https://github.com/nta1998/bookpreo?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "BackEnd",
          href: "https://github.com/nta1998/book_pro_back/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: proj3,
      video:"",
    },
  ],
} as const;
