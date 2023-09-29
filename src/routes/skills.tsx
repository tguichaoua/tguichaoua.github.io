import Masonry from 'react-layout-masonry';
import { Skill, SkillIcon } from '../components/skill-icons';

export function Skills() {
  interface SkillSection {
    title: string;
    skills: Skill[][];
  }

  const ICON_SIZE = 50;
  const SKILLS: SkillSection[] = [
    {
      title: 'Systems Programming',
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
    <main className="w-[80%] mx-auto">
      <Masonry
        className="w-full"
        columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }}
        gap={16}
        columnProps={{ className: 'h-fit' }}
      >
        {skillSections}
      </Masonry>
    </main>
  );
}
