import { useEffect } from 'react';
import Switch from 'react-switch';

import { FaIcons } from 'react-icons/fa';
import { IoTextOutline } from 'react-icons/io5';

import { TextSkillIcon, TextSkillIconContext } from '../components/skill-icons';
import { usePersistentState } from '../hooks/persistent-state';

export function AboutMe() {
  const [iconInTextMode, setIconInTextMode] = usePersistentState(
    'ICON_MODE',
    false,
    (x): x is boolean => typeof x === 'boolean'
  );

  useEffect(() => {
    function onKeypress(ev: KeyboardEvent) {
      if (ev.key === 'o') {
        setIconInTextMode((prev) => !prev);
      }
    }

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 left-[15px] h-0 w-[calc(max(10%,60px)-30px)]">
        <div className="relative top-4 flex flex-col gap-1 items-stretch ">
          <div className="flex flex-row justify-between gap-1">
            <FaIcons />
            <IoTextOutline />
          </div>
          <div className="flex">
            <Switch
              className="mx-auto"
              checked={iconInTextMode}
              onChange={setIconInTextMode}
              handleDiameter={15}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#888"
              offColor="#888"
              height={15}
              width={30}
            />
          </div>
        </div>
      </div>

      <TextSkillIconContext.Provider value={iconInTextMode ? 'text' : 'icon'}>
        <main className="flex flex-col items-center gap-5 ml-[max(10%,60px)] mr-[10%]">
          <article className="w-full">
            <h3 className="text-2xl font-bold">Who Am I ?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              mattis sapien placerat sagittis volutpat. Donec at metus
              condimentum, blandit mi in, efficitur ante. Morbi cursus convallis
              metus, eget finibus tellus pharetra id. Curabitur nisl libero,
              malesuada eu magna non, condimentum euismod ante. Cras interdum
              volutpat enim. Fusce ac magna eu orci blandit placerat. In sit
              amet cursus elit. Integer id nulla est. Nam quis aliquet diam, vel
              laoreet quam. Nullam feugiat felis ut nisl laoreet, at bibendum
              purus dignissim. Cras sodales ornare aliquam.
            </p>
          </article>

          <article className="w-full">
            <h3 className="text-2xl font-bold">
              I am a Fullstack Web Developer
            </h3>
            <p>
              Fullstack means I can work on both the frontend i.e. what the
              client see (a web page or a web app) and the backend i.e. the
              server that host the website.
            </p>

            <p>
              For the frontend I'm using the web trinity languages :{' '}
              <TextSkillIcon skill="Html" />, <TextSkillIcon skill="Css" /> and{' '}
              <TextSkillIcon skill="Javascript" />. Actually I'm using more
              powerful tools like <TextSkillIcon skill="Typescript" /> and{' '}
              <TextSkillIcon skill="Vite" /> for the coding part,{' '}
              <TextSkillIcon skill="React" /> to create dynamic app and{' '}
              <TextSkillIcon skill="Tailwind" /> for the style.
            </p>

            <p>
              For the backend, I can setup a simple static web server with{' '}
              <TextSkillIcon skill="Nginx" /> or a more complex API with{' '}
              <TextSkillIcon skill="NodeJs" /> and{' '}
              <TextSkillIcon skill="NestJs" />.
            </p>

            <p>
              To store data I may use relational databases like{' '}
              <TextSkillIcon skill="Sqlite" /> or{' '}
              <TextSkillIcon skill="MySql" /> or using document based database
              like <TextSkillIcon skill="MongoDB" />.
            </p>

            <p>
              Once the application developed I containerize it with{' '}
              <TextSkillIcon skill="Docker" /> to facilitate the deployment on
              the production server.
            </p>
          </article>

          <article className="w-full">
            <h3 className="text-2xl font-bold">I am a System Developer</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              mattis sapien placerat sagittis volutpat. Donec at metus
              condimentum, blandit mi in, efficitur ante. Morbi cursus convallis
              metus, eget finibus tellus pharetra id. Curabitur nisl libero,
              malesuada eu magna non, condimentum euismod ante. Cras interdum
              volutpat enim. Fusce ac magna eu orci blandit placerat. In sit
              amet cursus elit. Integer id nulla est. Nam quis aliquet diam, vel
              laoreet quam. Nullam feugiat felis ut nisl laoreet, at bibendum
              purus dignissim. Cras sodales ornare aliquam.
            </p>
          </article>
        </main>
      </TextSkillIconContext.Provider>
    </>
  );
}
