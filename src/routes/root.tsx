import { useEffect, useRef, useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';
import { Outlet } from 'react-router-dom';

import { Nav } from '../components/nav';

import TinyGuy from '../assets/tiny-guy.svg?react';
import { Confetti } from '../components/confetti';

export function Root() {
  const [isParty, setIsParty] = useState(false);
  const tinyGuy = useRef<SVGSVGElement>(null);
  const burstConfetti = useRef<() => void>();
  const confettiRainHandler = useRef(0);

  const doConfetti = () => burstConfetti.current?.();

  useEffect(() => {
    if (isParty) {
      tinyGuy.current?.classList.add('dance');
      document.body.classList.add('funky');
      confettiRainHandler.current = setInterval(doConfetti, 500);
    } else {
      tinyGuy.current?.classList.remove('dance');
      document.body.classList.remove('funky');
      clearInterval(confettiRainHandler.current);
    }
  }, [isParty]);

  useEffect(() => {
    return () => {
      clearInterval(confettiRainHandler.current);
    };
  }, []);

  return (
    <>
      <Confetti burst={(burst) => (burstConfetti.current = burst)} />

      <header role="banner" className="text-center pt-5 pb-[50px]">
        <div className="aaa">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-neon font-neon">
            Tristan Guichaoua
          </h1>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-6 mx-auto mt-5 text-base sm:text-xl lg:text-3xl">
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
          { to: 'projects', text: 'Projects' },
        ]}
      />

      <Outlet />

      <footer className="px-5 py-2 mt-[100px] text-xs sm:text-sm border-t-2 border-t-gray-700 dark:border-t-gray-200">
        <div className="absolute translate-y-[calc(-100%-9px)]">
          <TinyGuy
            ref={tinyGuy}
            width={32}
            height={32}
            onDoubleClick={() => setIsParty((x) => !x)}
          />
        </div>
        <div className="absolute translate-y-[calc(-100%-45px)] translate-x-[30px] max-w-[30%]">
          <div className="px-3 py-2 border rounded-r-xl rounded-tl-xl bg-slate-900 shadow-solid">
            Bonjour !
          </div>
        </div>
        © 2023 Tristan Guichaoua
      </footer>
    </>
  );
}
