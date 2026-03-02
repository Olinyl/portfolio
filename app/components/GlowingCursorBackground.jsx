"use client";
import React, { useEffect, useRef, useState } from "react";

const GlowingCursorBackground = () => {
  const glowRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on mobile devices for better performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    mouse.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    pos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      const speed = 0.15;
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;
      
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x - 250}px, ${pos.current.y - 250}px, 0)`;
      }
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationFrame.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 500,
        height: 500,
        pointerEvents: "none",
        zIndex: -50, 
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(139,92,246,0.10) 60%, rgba(0,0,0,0) 100%)",
        filter: "blur(100px)",
        willChange: "transform",
      }}
    />
  );
};

export default GlowingCursorBackground;
