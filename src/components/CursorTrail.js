import React, { useEffect, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let isMouseMoving = false;
    let lastMousePosition = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 50%)`;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.96;
      }

      draw() {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      isMouseMoving = true;
      lastMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      isMouseMoving = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMouseMoving) {
        const dx = mouse.current.x - lastMousePosition.x;
        const dy = mouse.current.y - lastMousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          for (let i = 0; i < 3; i++) {
            particles.current.push(
              new Particle(
                lastMousePosition.x + Math.random() * 10 - 5,
                lastMousePosition.y + Math.random() * 10 - 5
              )
            );
          }
          lastMousePosition = { x: mouse.current.x, y: mouse.current.y };
        }
      }

      particles.current = particles.current.filter(particle => {
        particle.update();
        particle.draw();
        return particle.life > 0;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail" />;
};

export default CursorTrail; 