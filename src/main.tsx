import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';import Lenis from "lenis";
import './styles/index.css';

// Initialize Lenis
const lenis = new Lenis({
  lerp: 0.08,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
