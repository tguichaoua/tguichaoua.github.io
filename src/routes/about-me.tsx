import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import { FaIcons } from 'react-icons/fa';
import { IoTextOutline } from 'react-icons/io5';

import { useDocumentEvent } from '../hooks/document-event';
import { usePersistentState } from '../hooks/persistent-state';

import { TextSkillIcon, TextSkillIconContext } from '../components/skill-icons';
import { FuturisticBox } from '../components/futuristic-box';

export function AboutMe() {
  const [iconInTextMode, setIconInTextMode] = usePersistentState(
    'ICON_MODE',
    false,
    (x): x is boolean => typeof x === 'boolean'
  );

  useDocumentEvent('keypress', (ev) => {
    if (ev.key === 'o') {
      setIconInTextMode((prev) => !prev);
    }
  });

  return (
    <>
      <div className="sticky top-4 left-[15px] h-0 w-[calc(max(10%,60px)-30px)] z-10 flex flex-col gap-1 items-stretch">
        <div className="flex flex-row justify-between gap-1">
          <FaIcons />
          <IoTextOutline />
        </div>
        {/* Okay, this is particulary tricky here */}
        <div className="flex min-[1190px]:relative -top-[20px]">
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

      <TextSkillIconContext.Provider value={iconInTextMode ? 'text' : 'icon'}>
        <main className="flex flex-col items-center gap-5 ml-[10%] mr-[10%]">
          <Article title="Who Am I ?">
            <p>
              My name's Tristan Guichaoua, I'm a French software engineer. My
              interests are programming (yes, I know, it's so cliché for a tech
              guy), video games and board games.
            </p>
            <p>
              You can check my projects in my{' '}
              <Link
                to="portfolio"
                className="font-bold text-neon-[3px] underline"
              >
                portfolio
              </Link>
              , most of them are not visual, so, there is nothing to see, but if
              you're a fellow programmer you may find interesting to explore the
              source code <span className="font-emoji">😉</span>.
            </p>
          </Article>

          <Article title="A Full-stack Web Developer">
            <p>
              <dfn>Full-stack</dfn> means I can work on both the frontend, i.e.,
              what the client sees (a web page or a web app) and the backend,
              i.e., the server that hosts the website.
            </p>

            <p>
              For the frontend, I'm using the web trinity languages :{' '}
              <TextSkillIcon skill="Html" />, <TextSkillIcon skill="Css" /> and{' '}
              <TextSkillIcon skill="Javascript" />. Actually, I'm using more
              powerful tools like <TextSkillIcon skill="Typescript" /> and{' '}
              <TextSkillIcon skill="Vite" /> to code,{' '}
              <TextSkillIcon skill="React" /> to create dynamic app and{' '}
              <TextSkillIcon skill="Tailwind" /> for the style.
            </p>

            <p>
              For the backend, I'm using <TextSkillIcon skill="Nginx" /> for
              static content or as{' '}
              <span
                className="decoration-dotted underline"
                title="A way to dispatch incoming requests to different servers."
              >
                reverse proxy
              </span>{' '}
              and <TextSkillIcon skill="NodeJs" /> with{' '}
              <TextSkillIcon skill="NestJs" /> to build up{' '}
              <abbr title="Application Programming Interface">API</abbr>s.
            </p>

            <p>
              To store data, I may use relational databases like{' '}
              <TextSkillIcon skill="Sqlite" /> or{' '}
              <TextSkillIcon skill="MySql" /> or use document-based databases
              like <TextSkillIcon skill="MongoDB" />.
            </p>

            <p>
              Then I containerize the application with{' '}
              <TextSkillIcon skill="Docker" /> to deploy it on the production
              server.
            </p>
          </Article>

          <Article title="A System Developer">
            <p>
              As a system developer, I'm familiar with the low-level languages{' '}
              <TextSkillIcon skill="C" />, <TextSkillIcon skill="Cpp" /> and{' '}
              <TextSkillIcon skill="Rust" /> for embedded development with{' '}
              <TextSkillIcon skill="Arduino" />.
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
      <FuturisticBox
        header={
          <h3 className="text-2xl max-md:text-xl font-bold py-1">{title}</h3>
        }
        innerClassName="rounded-md"
      >
        {children}
      </FuturisticBox>
    </article>
  );
}
