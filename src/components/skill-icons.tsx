import { HTMLProps, createContext, useContext } from 'react';

export type Skill = keyof typeof SKILLS;

// =============================================================================

export interface SkillIconProps
  extends Omit<HTMLProps<HTMLImageElement>, 'src' | 'alt' | 'title'> {
  skill: Skill;
}

export function SkillIcon(props: SkillIconProps) {
  const { skill, ...imgProps } = props;
  const { name, src } = SKILLS[skill];
  return <img src={src} alt={name} title={name} {...imgProps} />;
}

// =============================================================================

export type TextSkillIconMode = 'icon' | 'text';

export interface TextSkillIconProps {
  skill: Skill;
  mode?: TextSkillIconMode;
}

export const TextSkillIconContext = createContext<TextSkillIconMode>('icon');

export function TextSkillIcon(props: TextSkillIconProps) {
  const { skill, mode } = props;
  const contextMode = useContext(TextSkillIconContext);
  const mode_ = mode ?? contextMode;
  if (mode_ === 'icon') {
    return <SkillIcon skill={skill} width={20} className="inline" />;
  } else {
    const { name, mainColor } = SKILLS[skill];
    return (
      <span
        className="skill-icon-text"
        style={{
          color: `#${mainColor}`,
        }}
      >
        {name}
      </span>
    );
  }
}

// =============================================================================
interface SkillInfo {
  name: string;
  src: string;
  mainColor: string;
}

function skill(name: string, src: string, mainColor: string): SkillInfo {
  return { name, src, mainColor };
}

import Arduino from '../assets/skill-icons/Arduino.svg';
import Bevy from '../assets/skill-icons/Bevy-Dark.svg';
import C from '../assets/skill-icons/C.svg';
import Cpp from '../assets/skill-icons/CPP.svg';
import CSharp from '../assets/skill-icons/CS.svg';
import Css from '../assets/skill-icons/CSS.svg';
import Docker from '../assets/skill-icons/Docker.svg';
import Git from '../assets/skill-icons/Git.svg';
import Github from '../assets/skill-icons/Github-Dark.svg';
import Html from '../assets/skill-icons/HTML.svg';
import Javascript from '../assets/skill-icons/JavaScript.svg';
import Latex from '../assets/skill-icons/LaTeX-Dark.svg';
import Lua from '../assets/skill-icons/Lua-Dark.svg';
import Markdown from '../assets/skill-icons/Markdown-Dark.svg';
import MongoDB from '../assets/skill-icons/MongoDB.svg';
import NestJs from '../assets/skill-icons/NestJS-Dark.svg';
import Nginx from '../assets/skill-icons/Nginx.svg';
import NodeJs from '../assets/skill-icons/NodeJS-Dark.svg';
import Postman from '../assets/skill-icons/Postman.svg';
import Python from '../assets/skill-icons/Python-Dark.svg';
import React from '../assets/skill-icons/React-Dark.svg';
import Regex from '../assets/skill-icons/Regex-Dark.svg';
import Rust from '../assets/skill-icons/Rust.svg';
import MySql from '../assets/skill-icons/MySQL-Dark.svg';
import Sqlite from '../assets/skill-icons/SQLite.svg';
import Tailwind from '../assets/skill-icons/TailwindCSS-Dark.svg';
import Typescript from '../assets/skill-icons/TypeScript.svg';
import Unity from '../assets/skill-icons/Unity-Dark.svg';
import Vite from '../assets/skill-icons/Vite-Dark.svg';
import VsCode from '../assets/skill-icons/VSCode-Dark.svg';

const SKILLS = {
  Arduino: skill('Arduino', Arduino, '00979c'),
  Bevy: skill('Bevy', Bevy, 'ececec'),
  C: skill('C', C, '394aab'),
  Cpp: skill('C++', Cpp, '00599c'),
  CSharp: skill('C#', CSharp, '953cad'),
  Css: skill('CSS', Css, '0277bd'),
  Docker: skill('Docker', Docker, '2396ed'),
  Git: skill('Git', Git, 'f03c2e'),
  Github: skill('Github', Github, '242938'),
  Html: skill('HTML', Html, 'e14e1d'),
  Javascript: skill('JavaScript', Javascript, 'f0db4f'),
  Latex: skill('Latex', Latex, '008080'),
  Lua: skill('Lua', Lua, '000080'),
  Markdown: skill('Markdown', Markdown, 'ffffff'),
  MongoDB: skill('MongoDB', MongoDB, '12924f'),
  MySql: skill('MySQL', MySql, 'c8c9cd'),
  NestJs: skill('NestJS', NestJs, 'e0234e'),
  Nginx: skill('Nginx', Nginx, '009639'),
  NodeJs: skill('Node.js', NodeJs, '81cd39'),
  Postman: skill('Postman', Postman, 'ff6c37'),
  Python: skill('Python', Python, '00b58c'), // color-mix(in lch, #376d9a, #ffd040);
  React: skill('React', React, '00d8ff'),
  Regex: skill('Regex', Regex, '3366cc'),
  Rust: skill('Rust', Rust, 'e43717'),
  Sqlite: skill('SQLite', Sqlite, '8ad1f2'),
  Tailwind: skill('Tailwind', Tailwind, '26b8bd'),
  Typescript: skill('TypeScript', Typescript, '007acc'),
  Unity: skill('Unity', Unity, 'ffffff'),
  Vite: skill('Vite', Vite, '9b5ffe'),
  VsCode: skill('Visual Studio Code', VsCode, '3c99d4'),
};
