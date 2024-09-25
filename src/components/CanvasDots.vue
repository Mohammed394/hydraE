<template>
    <canvas ref="canvas" class="canvas-dots"></canvas>
  </template>
  
  <script>
  export default {
    mounted() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      let dots = [];
      const numDots = 1000;
      const dotRadius = 2;
      const dotColor = '#ff851b'; // Orange color
  
      // Resize canvas to fill the window
      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
  
      // Initialize dots
      function initializeDots() {
        dots = [];
        for (let i = 0; i < numDots; i++) {
          dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
          });
        }
      }
  
      // Update dot positions
      function updateDots() {
        for (let dot of dots) {
          dot.x += dot.vx;
          dot.y += dot.vy;
  
          if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
          if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        }
      }
  
      // Draw dots
      function drawDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let dot of dots) {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
          ctx.closePath();
        }
      }
  
      // Animation loop
      function animate() {
        updateDots();
        drawDots();
        requestAnimationFrame(animate);
      }
  
      // Initialize and start animation
      resizeCanvas();
      initializeDots();
      animate();
      window.addEventListener('resize', resizeCanvas);
    },
  };
  </script>
  
  <style scoped>
  .canvas-dots {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Behind other elements */
  }
  </style>
  