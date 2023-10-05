import Masonry from 'react-layout-masonry';
import { Skill, SkillIcon } from '../components/skill-icons';
import { FuturisticBox } from '../components/futuristic-box';

export function Skills() {
  return (
    <main className="w-[80%] mx-auto">
      <Masonry
        className="w-full"
        columns={{ 640: 1, 768: 2, 1024: 3 }}
        gap={16}
        columnProps={{ className: 'h-fit' }}
      >
        <SkillSection
          title="Systems Programming"
          skills={[['C', 'Cpp', 'Rust']]}
        />
        <SkillSection
          title="Web Frontend"
          skills={[
            ['Html', 'Css', 'Javascript', 'Typescript'],
            ['Vite', 'React', 'Tailwind'],
          ]}
        />
        <SkillSection
          title="Web Backend"
          skills={[['Nginx', 'NodeJs', 'NestJs']]}
        />
        <SkillSection
          title="Database"
          skills={[['MySql', 'Sqlite', 'MongoDB']]}
        />
        <SkillSection
          title="Tools"
          skills={[['Git', 'Github', 'Docker', 'Postman', 'VsCode']]}
        />
        <SkillSection title="Game Engine" skills={[['Bevy', 'Unity']]} />
        <SkillSection
          title="Misc."
          skills={[
            ['Python', 'CSharp', 'Lua'],
            ['Latex', 'Markdown', 'Regex', 'Arduino'],
          ]}
        />
      </Masonry>
    </main>
  );
}

interface SkillSectionProps {
  title: string;
  skills: Skill[][];
}

function SkillSection(props: SkillSectionProps) {
  const { title, skills } = props;

  const skillIcons = skills.map((skills, i) => (
    <div
      key={i}
      className="flex flex-wrap flex-row justify-center gap-3 mb-5 w-full"
    >
      {skills.map((skill, i) => (
        <SkillIcon key={i} skill={skill} width={50} />
      ))}
    </div>
  ));

  return (
    <FuturisticBox innerClassName="rounded-md">
      <h3 className="text-center text-2xl mb-5 font-bold">{title}</h3>
      {skillIcons}
    </FuturisticBox>
  );
}
