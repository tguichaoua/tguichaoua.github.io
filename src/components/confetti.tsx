import { useRef } from 'react';

import './confetti.css';

export interface ConfettiProps {
  burst?: (doBurst: () => void) => void;
}

export function Confetti(props: ConfettiProps) {
  const { burst } = props;

  const container = useRef<HTMLDivElement>(null);

  const doBurst = () => {
    if (!container.current) return;

    for (let i = 0; i < 50; i++) {
      const e = document.createElement('div');
      e.classList.add('confetti');
      e.style.setProperty('--x', String(Math.random() * 100) + 'vw');
      e.style.setProperty('--y', '-' + String(5 + Math.random() * 95) + 'vh');
      e.style.setProperty('--duration', String(1 + Math.random() * 2) + 's');
      e.innerHTML = '🦀';
      e.addEventListener('animationend', function () {
        this.remove();
      });
      container.current.appendChild(e);
    }
  };

  burst?.(doBurst);

  return <div ref={container} className="confetti-wrapper"></div>;
}
