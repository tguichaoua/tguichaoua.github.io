import { useEffect, useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import { CatRule } from '../components/cat-rule';
import { Box } from '../components/box';
import {
  TextSkillIconContext,
  TextSkillIconMode,
} from '../components/skill-icons';
import { Link, Outlet } from 'react-router-dom';

export function Root() {
  const [skillIconMode, setSkillIconMode] = useState<TextSkillIconMode>('icon');

  useEffect(() => {
    function onKeypress(ev: KeyboardEvent) {
      if (ev.key === 'o') {
        setSkillIconMode((prev) => (prev === 'icon' ? 'text' : 'icon'));
      }
    }

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, []);

  return (
    <>
      <header role="banner" className="text-center my-5">
        <CatRule className="mb-5" />

        <h1 className="text-3xl sm:text-5xl lg:text-7xl">Tristan Guichaoua</h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 mx-auto mt-5 text-base sm:text-xl lg:text-3xl">
          <span>Developer</span>
          <span>Engineer</span>
          <span>Rustacean</span>
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
        </div>

        <CatRule className="mt-5" />
      </header>

      <nav className="flex flex-row justify-center gap-3">
        <Link to="">
          <div className="px-3 py-1 shadow-solid border rounded-md">
            About Me
          </div>
        </Link>
        <Link to="skills">
          <div className="px-3 py-1 shadow-solid border rounded-md">Skills</div>
        </Link>
      </nav>

      <Box theme="warn" className="my-7 text-center w-fit mx-auto">
        <h2 className="text-yellow-500 dark:text-yellow-300">
          /!\ Work in progress /!\
        </h2>
        <p>This website is still under construction</p>
      </Box>

      {/* <main className="flex flex-col items-center w-[80%] mx-auto gap-5">
        <TextSkillIconContext.Provider value={skillIconMode}>
          {profile === 'skill' ? <ProfileSkill /> : <ProfileFull />}
       
      </main> */}

      <TextSkillIconContext.Provider value={skillIconMode}>
        <Outlet />
      </TextSkillIconContext.Provider>

      <footer className="px-5 py-2 mt-[50px] text-xs sm:text-sm border-t-2 border-t-gray-700 dark:border-t-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 8 8"
          shapeRendering="crispEdges"
          width={32}
          height={32}
          className="absolute translate-y-[calc(-100%-9px)]"
        >
          <path stroke="white" d="M2 0h1" />
          <path stroke="white" d="M3 0h1M4 1h1M4 2h1M1 5h1M3 6h1" />
          <path stroke="white" d="M4 0h1M2 1h1M4 5h1M4 6h1" />
          <path stroke="white" d="M5 0h1M3 2h1M4 4h2" />
          <path stroke="gray" d="M3 1h1" />
          <path stroke="gray" d="M5 1h1" />
          <path stroke="white" d="M2 2h1M2 7h1M5 7h1" />
          <path stroke="white" d="M5 2h1M3 3h1M3 5h1" />
          <path stroke="white" d="M4 3h1" />
          <path stroke="white" d="M6 3h1M2 4h2" />
        </svg>
        © 2023 Tristan Guichaoua
      </footer>
    </>
  );
}
