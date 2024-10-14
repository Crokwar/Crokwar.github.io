import { useState, useEffect } from 'react';
import './Header.css';

export const Header = () => {
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 23) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="about" className='navbar-container'>
            <div className={`navbar ${sticky ? 'sticky' : ''}`}>
                <a href="#about">Información</a>
                <a href="#projects">Proyectos</a>
                <a href="#experience">Experiencia</a>
                <a href="#contacto">Contactame</a>
            </div>
        </div>
    );
};