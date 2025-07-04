"use client";
import React, { useEffect, useRef } from "react";

const GlowingCursorBackground = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX - 250}px`;
        glowRef.current.style.top = `${e.clientY - 250}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
        filter: "blur(100px)",
      }}
      aria-hidden="true"
    />
  );
};

export default GlowingCursorBackground;
