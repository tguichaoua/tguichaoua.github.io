import Masonry from 'react-layout-masonry';
import { FaGithub } from 'react-icons/fa';
import { Skill, SkillIcon } from '../components/skill-icons';
import { FuturisticBox } from '../components/futuristic-box';

export function Portfolio() {
  return (
    <main className="w-[80%] mx-auto">
      <Masonry
        className="w-full"
        columns={{ 640: 1, 768: 2, 1024: 3 }}
        gap={16}
        columnProps={{ className: 'h-fit' }}
      >
        <ProjectSection
          title="Portfolio Website"
          description="This is the website you're currently looking at. It is build with Vite + React and hosted with Github page."
          skills={[
            'Html',
            'Css',
            'Javascript',
            'Typescript',
            'Vite',
            'React',
            'Tailwind',
            'Github',
          ]}
          repositoryUrl="https://github.com/tguichaoua/tguichaoua.github.io"
        />
        <ProjectSection
          title="Promised Sqlite3"
          description="An async wrapper for the sqlite3 library."
          skills={['Javascript', 'Typescript']}
          repositoryUrl="https://github.com/tguichaoua/promised-sqlite3"
        />
        <ProjectSection
          title="Angulus"
          description="A unit agnostic angle wrapper for rust."
          skills={['Rust']}
          repositoryUrl="https://github.com/tguichaoua/angulus"
        />
        <ProjectSection
          title="Bevy Cursor"
          description={
            <>
              A plugin for the{' '}
              <a
                href="https://bevyengine.org/"
                target="_blank"
                className="underline"
              >
                bevy game engine
              </a>{' '}
              that help to get information about the cursor.
            </>
          }
          skills={['Rust', 'Bevy']}
          repositoryUrl="https://github.com/tguichaoua/bevy_cursor"
        />
      </Masonry>
    </main>
  );
}

interface ProjectSectionProps {
  title: string;
  description: React.ReactNode;
  skills: Skill[];
  repositoryUrl: string;
}

function ProjectSection(props: ProjectSectionProps) {
  const { title, description, skills, repositoryUrl } = props;

  const skillIcons = skills.map((skill, i) => (
    <SkillIcon key={i} skill={skill} width={25} />
  ));

  return (
    <FuturisticBox innerClassName="rounded-md">
      <div className="absolute">
        <a href={repositoryUrl} target="_blank" className="relative top-[10px]">
          <FaGithub />
        </a>
      </div>
      <h3 className="text-center text-2xl font-bold">{title}</h3>
      <p className="italic text-sm mt-3">{description}</p>
      <div className="flex flex-row flex-wrap gap-1 mt-3 mb-1">
        {skillIcons}
      </div>
    </FuturisticBox>
  );
}
