import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';
import { Outlet } from 'react-router-dom';

import { CatRule } from '../components/cat-rule';
import { Nav } from '../components/nav';
import { LokiText } from '../components/loki-text';

import TinyGuy from '../assets/tiny-guy.svg?react';

export function Root() {
  const onTinyGuyDoubleClick = (event: React.MouseEvent) => {
    event.currentTarget.classList.toggle('dance');
    document.body.classList.toggle('funky');
  };

  return (
    <>
      <header role="banner" className="text-center my-5">
        <CatRule className="mb-5" />

        <h1 className="text-4xl sm:text-5xl lg:text-7xl">
          <LokiText
            className="tracking-widest "
            delay={1000}
            fonts={['CloisterBlack', 'ARB', 'terminator']}
            colors={
              // ['#F04358', '#FFD262', '#05D5AA', '#107FB1']
              ['#219C90', '#468B97', '#EF6262', '#F3AA60']
            }
            onLetterTransformed={(elt) => elt.classList.add('text-neon')}
          >
            Tristan Guichaoua
          </LokiText>
        </h1>

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
          <a href="https://ko-fi.com/tguichaoua" target="_blank">
            <SiKofi />
          </a>
        </div>

        <CatRule className="mt-5" />
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

      <footer className="px-5 py-2 mt-[50px] text-xs sm:text-sm border-t-2 border-t-gray-700 dark:border-t-gray-200">
        <div className="absolute translate-y-[calc(-100%-9px)]">
          <TinyGuy
            width={32}
            height={32}
            onDoubleClick={onTinyGuyDoubleClick}
          />
        </div>
        © 2023 Tristan Guichaoua
      </footer>
    </>
  );
}
