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
  const mode_ = mode ?? useContext(TextSkillIconContext);
  if (mode_ === 'icon') {
    return <SkillIcon skill={skill} width={30} className="inline" />;
    skill;
  } else {
    const { name } = SKILLS[skill];
    return <span>{name}</span>;
  }
}

// =============================================================================
interface SkillInfo {
  name: string;
  src: string;
}

function skill(name: string, src: string): SkillInfo {
  return { name, src };
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
  Arduino: skill('Arduino', Arduino),
  Bevy: skill('Bevy', Bevy),
  C: skill('C', C),
  Cpp: skill('Cpp', Cpp),
  CSharp: skill('CSharp', CSharp),
  Css: skill('Css', Css),
  Docker: skill('Docker', Docker),
  Git: skill('Git', Git),
  Github: skill('Github', Github),
  Html: skill('Html', Html),
  Javascript: skill('Javascript', Javascript),
  Latex: skill('Latex', Latex),
  Lua: skill('Lua', Lua),
  Markdown: skill('Markdown', Markdown),
  MongoDB: skill('MongoDB', MongoDB),
  NestJs: skill('NestJs', NestJs),
  Nginx: skill('Nginx', Nginx),
  NodeJs: skill('NodeJs', NodeJs),
  Postman: skill('Postman', Postman),
  Python: skill('Python', Python),
  React: skill('React', React),
  Regex: skill('Regex', Regex),
  Rust: skill('Rust', Rust),
  MySql: skill('MySql', MySql),
  Sqlite: skill('Sqlite', Sqlite),
  Tailwind: skill('Tailwind', Tailwind),
  Typescript: skill('Typescript', Typescript),
  Unity: skill('Unity', Unity),
  Vite: skill('Vite', Vite),
  VsCode: skill('Visual Studio Code', VsCode),
};
