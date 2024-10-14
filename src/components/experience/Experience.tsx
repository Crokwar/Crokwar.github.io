import React from "react";
import './Experience.css'

interface ExperienceProps {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({title, company, period, responsibilities}) => {
    return(
        <div className="experience">
            <div  className="experience-header">
                <h2 className="job-title">{title} | {company}</h2>
                <p className="job-period">{period}</p>
            </div>
            <ul className="responsibilities">
                {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-container"> 
            <h1 className="experience-title">Experiencia Laboral</h1>
            <ExperienceItem
                title="Operador Mesa de Servicios"
                company="INRED"
                period="Febrero 2022 - Septiembre 2024"
                responsibilities={[
                  'Monitoreo remoto, validación de estado, configuración de router Mikrotik y módem, gestión de incidentes.',
                  'Trabajo en equipo en conjunto con técnicos en campo para la validación, instalación y mantenimiento de enlaces satelitales.',
                  'Trabajo en equipo con otros operadores y otras areas de la empresa para la resolución de problemas complejos.',
                  'Soporte a más de 1000 clientes de diversas estaciones gubernamentales, y corporativos propios de la empresa.',
                ]}
            ></ExperienceItem>
            
        </section>
    )
}