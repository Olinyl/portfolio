'use client'

import React, { useState, useEffect } from "react";
import NavItem from "./nav-item";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = Array.from(document.querySelectorAll('[data-section]'));
            const scrollPosition = window.scrollY + window.innerHeight / 4; // Adjust offset as needed

            let currentSection = sections[0];
            for (let section of sections) {
                if (section.offsetTop <= scrollPosition) {
                    currentSection = section;
                }
            }
            setActiveSection(currentSection.id);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Set initial section

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='navigation' className='flex flex-col py-10 font-medium tracking-widest'>
            <NavItem active={activeSection === 'about'} href='#about' num='01' name="ABOUT" />
            <NavItem active={activeSection === 'experiences'} href='#experiences' num='02' name="EXPERIENCES" />
            <NavItem active={activeSection === 'education'} href='#education' num='03' name="EDUCATION" />
            <NavItem active={activeSection === 'projects'} href='#projects' num='04' name="PROJECTS" />
            <NavItem active={activeSection === 'gallery' || activeSection === 'credits'} href='#gallery' num='05' name="GALLERY" />
        </div>
    );
};

export default Navigation;