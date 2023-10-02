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
          <Article title="Who Am I ?">
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
          </Article>

          <Article title="I am a Full-stack Web Developer">
            <p>
              <dfn>Full-stack</dfn> means I can work on both the frontend, i.e.,
              what the client sees (a web page or a web app) and the backend,
              i.e., the server that hosts the website.
            </p>

            <p>
              For the frontend I'm using the web trinity languages :{' '}
              <TextSkillIcon skill="Html" />, <TextSkillIcon skill="Css" /> and{' '}
              <TextSkillIcon skill="Javascript" />. Actually, I'm using more
              powerful tools like <TextSkillIcon skill="Typescript" /> and{' '}
              <TextSkillIcon skill="Vite" /> to code,{' '}
              <TextSkillIcon skill="React" /> to create dynamic app and{' '}
              <TextSkillIcon skill="Tailwind" /> for the style.
            </p>

            <p>
              For the backend, I'm using <TextSkillIcon skill="Nginx" /> for
              static content or as reverse proxy and{' '}
              <TextSkillIcon skill="NodeJs" /> with{' '}
              <TextSkillIcon skill="NestJs" /> to build up{' '}
              <abbr title="Application Programming Interface">API</abbr>s.
            </p>

            <p>
              To store data, I may use relational databases like{' '}
              <TextSkillIcon skill="Sqlite" /> or{' '}
              <TextSkillIcon skill="MySql" /> or using document-based database
              like <TextSkillIcon skill="MongoDB" />.
            </p>

            <p>
              Then I containerize the application with{' '}
              <TextSkillIcon skill="Docker" /> to deploy it on the production
              server.
            </p>
          </Article>

          <Article title="I am a System Developer">
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
          </Article>
        </main>
      </TextSkillIconContext.Provider>
    </>
  );
}

interface ArticleProps {
  title: string;
  children: React.ReactNode;
}

function Article(props: ArticleProps) {
  const { title, children } = props;

  return (
    <article className="w-full">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      {children}
    </article>
  );
}
