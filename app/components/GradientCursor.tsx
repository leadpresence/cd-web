"use client";

import { useEffect, useRef } from "react";

export default function GradientCursor() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    let x = 0, y = 0;
    let targetX = 0, targetY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      blob.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      animId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-[1] opacity-[0.07] hidden lg:block"
      style={{
        background:
          "radial-gradient(circle, #2D8B7E 0%, #4FA399 30%, transparent 70%)",
        filter: "blur(60px)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
