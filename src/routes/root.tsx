import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';

import { useDocumentEvent } from '../hooks/document-event';

import { Nav } from '../components/nav';
import { Confetti } from '../components/confetti';

import { nextColor } from '../styles/color';

import TinyGuy from '../assets/tiny-guy.svg?react';

export function Root() {
  const [isParty, setIsParty] = useState(false);
  const tinyGuy = useRef<SVGSVGElement>(null);
  const burstConfetti = useRef<() => void>();
  const confettiRainInterval = useRef(0);

  const doConfetti = () => burstConfetti.current?.();

  useEffect(() => {
    if (isParty) {
      tinyGuy.current?.classList.add('dance');
      document.body.classList.add('funky');
      confettiRainInterval.current = setInterval(doConfetti, 500);
    } else {
      tinyGuy.current?.classList.remove('dance');
      document.body.classList.remove('funky');
      clearInterval(confettiRainInterval.current);
    }
  }, [isParty]);

  useEffect(() => {
    return () => {
      clearInterval(confettiRainInterval.current);
    };
  }, []);

  useDocumentEvent('keypress', (ev) => {
    if (ev.key === 'p') {
      nextColor();
    }
  });

  return (
    <>
      <Confetti burst={(burst) => (burstConfetti.current = burst)} />

      <header role="banner" className="text-center pt-5 pb-[50px]">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl text-neon-[5px] text-neon-blink font-neon">
          Tristan Guichaoua
        </h1>

        <div className="flex flex-row flex-wrap items-center justify-around w-[50%] max-w-[500px] min-w-[330px] mx-auto mt-10 text-xl md:text-2xl lg:text-3xl">
          <span>Developer</span>
          <span>Engineer</span>
          <span onClick={doConfetti}>Rustacean</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-3 text-4xl mt-6">
          <a href="https://github.com/tguichaoua" target="_blank">
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/tristan-guichaoua/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://ko-fi.com/tguichaoua" target="_blank">
            <SiKofi />
          </a>
        </div>
      </header>

      <Nav
        className="mb-7"
        links={[
          { to: '', text: 'About me' },
          { to: 'skills', text: 'Skills' },
          { to: 'portfolio', text: 'Portfolio' },
        ]}
      />

      <Outlet />

      <footer className="px-5 py-2 mt-[100px] text-xs sm:text-sm border-t-2 border-current">
        <div className="absolute translate-y-[calc(-100%-9px)]">
          <TinyGuy
            ref={tinyGuy}
            width={32}
            height={32}
            onDoubleClick={() => setIsParty((x) => !x)}
          />
        </div>
        <div className="absolute translate-y-[calc(-100%-45px)] translate-x-[30px] max-w-[30%]">
          <div className="px-3 py-2 border border-current rounded-r-xl rounded-tl-xl bg-slate-900 shadow-solid">
            Bonjour !
          </div>
        </div>
        © 2023 Tristan Guichaoua
      </footer>
    </>
  );
}
