import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars = [];
    const numStars = 150;

    // Spectrum bars for radio frequency visualization
    const spectrumBars = [];
    const numBars = 20;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.01,
      });
    }

    // Initialize spectrum bars for radio frequency visualization
    for (let i = 0; i < numBars; i++) {
      spectrumBars.push({
        x: 50 + i * 8,
        height: Math.random() * 30 + 10,
        frequency: Math.random() * 0.05 + 0.02,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        // Update star opacity for twinkling effect
        star.opacity += star.twinkle;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkle = -star.twinkle;
        }

        // Move stars slowly
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw radio frequency spectrum visualization (bottom left corner)
      spectrumBars.forEach((bar, index) => {
        bar.phase += bar.frequency;
        const currentHeight = bar.height + Math.sin(bar.phase) * 15;
        
        // Create gradient for spectrum bars
        const gradient = ctx.createLinearGradient(0, canvas.height - currentHeight, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(14, 165, 233, 0.8)');
        gradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.5)');
        gradient.addColorStop(1, 'rgba(14, 165, 233, 0.2)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(bar.x, canvas.height - currentHeight, 5, currentHeight);
      });

      // Draw satellite orbit animation (top right)
      const time = Date.now() * 0.001;
      const orbitCenterX = canvas.width - 100;
      const orbitCenterY = 100;
      const orbitRadius = 40;
      
      // Draw orbit path
      ctx.beginPath();
      ctx.arc(orbitCenterX, orbitCenterY, orbitRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw satellite
      const satelliteX = orbitCenterX + Math.cos(time * 0.5) * orbitRadius;
      const satelliteY = orbitCenterY + Math.sin(time * 0.5) * orbitRadius;
      
      ctx.beginPath();
      ctx.arc(satelliteX, satelliteY, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(14, 165, 233, 0.9)';
      ctx.fill();
      
      // Draw signal transmission
      ctx.beginPath();
      ctx.arc(satelliteX, satelliteY, Math.sin(time * 2) * 15 + 15, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(14, 165, 233, ${0.3 - Math.sin(time * 2) * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default StarField;
