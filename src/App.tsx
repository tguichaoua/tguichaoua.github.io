import { useEffect, useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Masonry from 'react-layout-masonry';

import { CatRule } from './components/cat-rule';
import { Box } from './components/box';
import {
  Skill,
  SkillIcon,
  TextSkillIcon,
  TextSkillIconContext,
  TextSkillIconMode,
} from './components/skill-icons';

export function App() {
  const [skillIconMode, setSkillIconMode] = useState<TextSkillIconMode>('icon');
  const [profile, setProfile] = useState<'full' | 'skill'>('skill');

  useEffect(() => {
    function onKeypress(ev: KeyboardEvent) {
      if (ev.key === 'o') {
        setSkillIconMode((prev) => (prev === 'icon' ? 'text' : 'icon'));
      }

      if (ev.key === 'p') {
        setProfile((prev) => (prev === 'full' ? 'skill' : 'full'));
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

      <Box theme="warn" className="my-7 text-center w-fit mx-auto">
        <h2 className="text-yellow-500 dark:text-yellow-300">
          /!\ Work in progress /!\
        </h2>
        <p>This website is still under construction</p>
      </Box>

      <main className="flex flex-col items-center w-[80%] mx-auto gap-5">
        <TextSkillIconContext.Provider value={skillIconMode}>
          {profile === 'skill' ? <ProfileSkill /> : <ProfileFull />}
        </TextSkillIconContext.Provider>
      </main>

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

function ProfileFull() {
  return (
    <>
      <article className="w-full">
        <h3 className="text-2xl font-bold">Who Am I ?</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis
          sapien placerat sagittis volutpat. Donec at metus condimentum, blandit
          mi in, efficitur ante. Morbi cursus convallis metus, eget finibus
          tellus pharetra id. Curabitur nisl libero, malesuada eu magna non,
          condimentum euismod ante. Cras interdum volutpat enim. Fusce ac magna
          eu orci blandit placerat. In sit amet cursus elit. Integer id nulla
          est. Nam quis aliquet diam, vel laoreet quam. Nullam feugiat felis ut
          nisl laoreet, at bibendum purus dignissim. Cras sodales ornare
          aliquam.
        </p>
      </article>

      <article className="w-full">
        <h3 className="text-2xl font-bold">I am a Fullstack Web Developer</h3>
        <p>
          Fullstack means I can work on both the frontend i.e. what the client
          see (a web page or a web app) and the backend i.e. the server that
          host the website.
        </p>

        <p>
          For the frontend I'm using the web trinity languages :{' '}
          <TextSkillIcon skill="Html" />, <TextSkillIcon skill="Css" /> and{' '}
          <TextSkillIcon skill="Javascript" />. Actually I'm using more powerful
          tools like <TextSkillIcon skill="Typescript" /> and{' '}
          <TextSkillIcon skill="Vite" /> for the coding part,{' '}
          <TextSkillIcon skill="React" /> to create dynamic app and{' '}
          <TextSkillIcon skill="Tailwind" /> for the style.
        </p>

        <p>
          For the backend, I can setup a simple static web server with{' '}
          <TextSkillIcon skill="Nginx" /> or a more complex API with{' '}
          <TextSkillIcon skill="NodeJs" /> and <TextSkillIcon skill="NestJs" />.
        </p>

        <p>
          To store data I may use relational databases like{' '}
          <TextSkillIcon skill="Sqlite" /> or <TextSkillIcon skill="MySql" /> or
          using document based database like <TextSkillIcon skill="MongoDB" />.
        </p>

        <p>
          Once the application developed I containerize it with{' '}
          <TextSkillIcon skill="Docker" /> to facilitate the deployment on the
          production server.
        </p>
      </article>

      <article className="w-full">
        <h3 className="text-2xl font-bold">I am a System Developer</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis
          sapien placerat sagittis volutpat. Donec at metus condimentum, blandit
          mi in, efficitur ante. Morbi cursus convallis metus, eget finibus
          tellus pharetra id. Curabitur nisl libero, malesuada eu magna non,
          condimentum euismod ante. Cras interdum volutpat enim. Fusce ac magna
          eu orci blandit placerat. In sit amet cursus elit. Integer id nulla
          est. Nam quis aliquet diam, vel laoreet quam. Nullam feugiat felis ut
          nisl laoreet, at bibendum purus dignissim. Cras sodales ornare
          aliquam.
        </p>
      </article>
    </>
  );
}

function ProfileSkill() {
  interface SkillSection {
    title: string;
    skills: Skill[][];
  }

  const ICON_SIZE = 50;
  const SKILLS: SkillSection[] = [
    {
      title: 'Systems programming',
      skills: [['C', 'Cpp', 'Rust']],
    },
    {
      title: 'Web Frontend',
      skills: [
        ['Html', 'Css', 'Javascript', 'Typescript'],
        ['Vite', 'React', 'Tailwind'],
      ],
    },
    {
      title: 'Web Backend',
      skills: [['Nginx', 'NodeJs', 'NestJs']],
    },
    {
      title: 'Database',
      skills: [['MySql', 'Sqlite', 'MongoDB']],
    },
    {
      title: 'Tools',
      skills: [['Git', 'Github', 'Docker', 'Postman', 'VsCode']],
    },
    {
      title: 'Game Engine',
      skills: [['Bevy', 'Unity']],
    },
    {
      title: 'Misc.',
      skills: [
        ['Python', 'CSharp', 'Lua'],
        ['Latex', 'Markdown', 'Regex', 'Arduino'],
      ],
    },
  ];

  const skillSections = SKILLS.map(({ title, skills }, i) => {
    const skillIcons = skills.map((skills, i) => (
      <div
        key={i}
        className="flex flex-wrap flex-row justify-center gap-3 mb-5 w-full"
      >
        {skills.map((skill, i) => (
          <SkillIcon key={i} skill={skill} width={ICON_SIZE} />
        ))}
      </div>
    ));

    return (
      <div
        key={i}
        className="border shadow-solid rounded-md px-5 pt-3"
        style={{ flex: '1 auto' }}
      >
        <h3 className="text-center text-2xl mb-5 font-bold">{title}</h3>
        {skillIcons}
      </div>
    );
  });

  return (
    <Masonry
      className="w-full"
      columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }}
      gap={16}
      columnProps={{ className: 'h-fit' }}
    >
      {skillSections}
    </Masonry>
  );
}
