import "./portfolio.css";

import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png";
import IMG4 from "../../assets/IMG4.png";
import IMG5 from "../../assets/IMG5.png";
import IMG6 from "../../assets/IMG6.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Bloemerbar Club Website",
      img: IMG1,
      description:
        "Developed a modern and responsive website for exploring Nijmegen, Netherlands,party club featuring travel resources with a clean, user-friendly interface.",
      technologies: " Next.js|Typescript |GSAP/WEBGL",
      link: "https://www.gotonijmegen.com/",
      github: "https://github.com/a95-shah",
    },
    {
      id: 2,
      title: "School Management Portal ",
      img: IMG4,
      description:
        "Built a School Management Portal with four user roles: Admin, Teacher, Student, and Parent, enabling efficient management and communication within the school system.",
      technologies: "NEXT.js | Supabase | typescript | Railway | JWT Auth",
      link: "https://themapplewoodschool-pk.vercel.app/",
      github: "https://github.com/a95-shah",
    },
    {
      id: 3,
      title: "Pharmacy Management system",
      img: IMG2,
      description: "Developed a Pharmacy Management System with Python and Django featuring inventory management, billing, sales tracking, supplier management, and role-based access for efficient pharmacy operations",
      technologies: "python | django | JavaScript",
      link: "https://medixx.store/",
      github: "https://github.com/a95-shah",
    },
    {
      id: 4,
      title: "Parkinson Daily Dairy",
      img: IMG3,
      description:
        "Developed a Parkinson’s Daily Diary web application to help users track daily health activities, symptoms, and routines through a simple, interface.",
      technologies: "Next.js|Supabase |Typescript |",
      link: "https://parkinson-care-pi.vercel.app",
      github: "https://github.com/a95-shah",
    },
    {
      id: 5,
      title: "Codematics Full Stack Website",
      img: IMG5,
      description:
        "Developed a modern and responsive comapny website featuring full backend in NEXT.JS with propper dashboard for data input, (still underdevelopment)",
      technologies: "Next.js|Node.js| MongoDB | Cloudinary",
      link: "https://codematics-co.vercel.app/",
      github: "https://github.com/a95-shah",
    },
    {
      id: 6,
      title: "Interview Prepwise with AI",
      img: IMG6,
      description:
        "Build an interview preperation platform for students with AI",
      technologies: "Next.js | WAPI | Javascript | Firebase",
      link: "https://ai-mock-interviews-main-seven.vercel.app/",
      github: "https://github.com/a95-shah",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
