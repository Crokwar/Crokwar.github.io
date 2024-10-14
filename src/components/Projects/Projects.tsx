import react from "react";
import "./Projects.css";

interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    tecnologies: string[];
    code: string;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        image: "https://unavatar.io/unknow",
        title: "Shopping Go",
        description:
            "Desarrollé una página con el fin de aprender a: consumir API, manejar de estado, crear estados globales, etc.",
        tecnologies: ["html5", "css3", "javascript", "react"],
        code: "#",
        link: "#",
    },
    {
        id: 2,
        image: "https://unavatar.io/unknow",
        title: "Alexa al Trabajo",
        description:
            "Desarrollé una VUI para automatizar la redacción de mis correos del trabajo usando alexa",
        tecnologies: ["nodejs", "typescript", "express"],
        code: "#",
        link: "#",
    },
    {
        id: 3,
        image: "https://unavatar.io/unknow",
        title: "Aplicación Notas ToDo",
        description:
            "Desarrollé una aplicación de gestión de notas ToDo utilizando Laravel para el backend y Vue.js en el frontend. El proyecto incluye autenticación segura con personal tokens mediante Laravel Passport, manejo de notas con CRUD (creación, edición, listado y eliminación), y un frontend interactivo que utiliza Vue Router y Vuex para la gestión de rutas y el estado de la aplicación.",
        tecnologies: ["nodejs", "typescript", "react", "mysql"],
        code: "#",
        link: "#",
    },
];

export const Projects: react.FC = () => {
    return (
        <>
            <div id="projects" className="projects-container">
                <h1 className="title-container">Mis Proyectos</h1>
                <ul className="list-projects">
                    {projects.map((project) => (
                        <div key={project.id} className="project">
                            <div className="image-project">
                                <img src={project.image} alt="project" />
                            </div>
                            <div className="info-project">
                                <h2 className="title-project">{project.title}</h2>
                                <p className="description">{project.description}</p>
                                <div className="footer">
                                    <div className="tecnologies">{project.tecnologies.map((tecno) => (
                                        <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tecno}/${tecno}-original.svg`} className="tecnology" />
                                    ))}</div>
                                    <div className="buttons-code">
                                        <a href={project.code} className="button code">
                                            <img src="./images/code.png" alt="Code" className="logos code" />
                                            <p>Code</p>
                                        </a>
                                        <a href={project.link} className="button live">
                                            <img src="./images/web.png" alt="Code" className="logos live" />
                                            <p>Live</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};
