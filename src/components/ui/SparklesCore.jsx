import React, { useRef, useEffect } from "react";

export const SparklesCore = ({
  background = "transparent",
  minSize = 1,
  maxSize = 2,
  particleDensity = 120,
  className = "",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.alpha = Math.random();
        this.dx = (Math.random() - 0.5) * 0.5;
        this.dy = (Math.random() - 0.5) * 0.5;
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [background, minSize, maxSize, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full ${className}`}
    />
  );
};
