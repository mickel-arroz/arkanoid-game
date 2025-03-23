// import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");

    const ctx = canvas.getContext("2d");

    // VARIABLES DE LOS ELEMENTOS

    canvas.width = 800;
    canvas.height = 500;

    // Tamaño de la pelota
    const ballRadius = 4;

    // Posicion de la pelota
    let x = canvas.width / 2;
    let y = canvas.height - 30;

    // Velocidad de la Pelota
    let dx = 2;
    let dy = -2;

    // FUNCIONES DE DIBUJADO
    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = () => {};
    const drawBlock = () => {};

    const ballMovement = () => {
      // Colision paredes laterales
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        // Invertir direccion en X
        dx = -dx;
      }

      // Colision pared superior
      if (y + dy < ballRadius) {
        dy = -dy;
      }

      if (y + dy > canvas.height - ballRadius) {
        // document.location.reload();
        dy = -dy;
      }

      x += dx;
      y += dy;
    };

    const collisionDetection = () => {};

    const cleanCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const draw = () => {
      cleanCanvas();

      // Apartado de Dibujado de elementos
      drawBall();
      drawPaddle();
      drawBlock();

      // Apartado de Movimiento y colisiones
      ballMovement();

      // Funcion para llamar constantemente y redibujar el canvas
      window.requestAnimationFrame(draw);
    };

    draw();
  });

  return <canvas></canvas>;
}

export default App;
