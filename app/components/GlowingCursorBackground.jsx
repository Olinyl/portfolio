"use client";
import React, { useEffect, useRef } from "react";

const GlowingCursorBackground = () => {
  const glowRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef();

  useEffect(() => {
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
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;
      if (glowRef.current) {
        glowRef.current.style.left = `${pos.current.x - 250}px`;
        glowRef.current.style.top = `${pos.current.y - 250}px`;
      }
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        left: "50vw",
        top: "50vh",
        width: 500,
        height: 500,
        pointerEvents: "none",
        zIndex: 0,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(139,92,246,0.10) 60%, rgba(0,0,0,0) 100%)",
        filter: "blur(100px)"
      }}
      aria-hidden="true"
    />
  );
};

export default GlowingCursorBackground;
