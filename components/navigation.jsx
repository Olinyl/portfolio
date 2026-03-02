'use client'

import React, { useState, useEffect, useCallback } from "react";
import NavItem from "./nav-item";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const sections = Array.from(document.querySelectorAll('[data-section]'));
                    const scrollPosition = window.scrollY + window.innerHeight / 4;

                    let currentSection = sections[0];
                    for (let section of sections) {
                        if (section.offsetTop <= scrollPosition) {
                            currentSection = section;
                        }
                    }
                    setActiveSection(currentSection.id);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

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