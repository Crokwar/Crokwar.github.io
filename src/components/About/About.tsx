import react from "react";
import "./About.css";

export const About: react.FC = () => {
    return (
        <>
            <div className="profile-card">
                <div className="header">
                    <span>
                        Colombia
                        <img src="images/colombiaFlag.png" alt="🇨🇴 Flag" />
                    </span>
                </div>
                <div className="profile-info">
                    <div className="profile-img">
                        <img src="images/profile.png" alt="Profile Photo" />
                    </div>

                    <div className="profile-text">
                        <h2>¡Holaa! 👋</h2>
                        <h1>CRISTIAN MARTINEZ</h1>
                        <h3>Ingeniero Mecatrónico | FullStack Developer</h3>

                        <div className="social-links">
                            <a href="https://github.com/Crokwar" target="_blank" className="button github">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="logos" />
                                <p>Github</p>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/cristian-martinez-im/"
                                target="_blank"
                                className="button linkedin"
                            >
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" className="logos" />
                                <p>Linkedin</p>
                            </a>
                            <a
                                href="download/HdV-Cristian-Martinez.pdf"
                                download={"HdV-Cristian-Martinez.pdf"}
                                className="button cv">
                                <img src="images/download.png" alt="GitHub" className="logos" />
                                <p>HdV</p>
                            </a>
                        </div>
                    </div>


                </div>



                <p className="profile-description">
                    A lo largo de mi carrera como Ingeniero Mecatrónico, desarrollé un
                    interés especial por la programación. Desde mis primeros proyectos, en
                    los cuales integraba hardware y software utilizando lenguajes como C,
                    C++ y Python, me he dedicado a crear soluciones que fusionan
                    tecnología y programación. Además, he expandido mi experiencia al
                    desarrollo web, lo que ha fortalecido aún más mi pasión por el
                    desarrollo de software. Estoy en un constante proceso de aprendizaje,
                    siempre buscando profundizar mis conocimientos y habilidades en este
                    campo, con el objetivo de enfocar mi carrera profesional en el
                    fascinante mundo del desarrollo de software.
                </p>
            </div>
        </>
    );
};
