import React from "react";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import { TextSection } from "./components/text-section";
import { MagicText } from "./components/magic-text";
import { Paragraph } from "./components/paragraph";
import { CatRule } from "./components/cat-rule";

export function App() {
  return (
    <>
      <header role="banner" className="text-center my-5">
        <CatRule />

        <h1 className="text-3xl sm:text-5xl lg:text-7xl my-5">
          <MagicText color="red">Tristan Guichaoua</MagicText>
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 mx-auto mt-5 text-base sm:text-xl lg:text-3xl">
          <span>
            <MagicText color="blue">Developer</MagicText>
          </span>
          <span>
            <MagicText color="blue">Engineer</MagicText>
          </span>
          <span>
            <MagicText color="blue">Rustacean</MagicText>
          </span>
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

        <div className="mt-5">
          <CatRule />
        </div>
      </header>

      <main className="flex flex-col items-center w-[80%] mx-auto">
        <div className="my-5 text-center border-yellow-500 dark:border-yellow-300 border-2 rounded-xl px-5 py-3">
          <h2 className="text-yellow-500 dark:text-yellow-300">
            /!\ Work in progress /!\
          </h2>
          <p>This website is still under construction</p>
        </div>

        <TextSection title="About me" className="w-full">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis sapien placerat sagittis volutpat. Donec at metus
            condimentum, blandit mi in, efficitur ante. Morbi cursus convallis
            metus, eget finibus tellus pharetra id. Curabitur nisl libero,
            malesuada eu magna non, condimentum euismod ante. Cras interdum
            volutpat enim. Fusce ac magna eu orci blandit placerat. In sit amet
            cursus elit. Integer id nulla est. Nam quis aliquet diam, vel
            laoreet quam. Nullam feugiat felis ut nisl laoreet, at bibendum
            purus dignissim. Cras sodales ornare aliquam.
          </Paragraph>
        </TextSection>

        <hr className="w-[10%] mx-auto h-1 my-8 bg-gray-700 border-0 dark:bg-gray-200" />

        <TextSection title="Some Long Text" className="w-full">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis sapien placerat sagittis volutpat. Donec at metus
            condimentum, blandit mi in, efficitur ante. Morbi cursus convallis
            metus, eget finibus tellus pharetra id. Curabitur nisl libero,
            malesuada eu magna non, condimentum euismod ante. Cras interdum
            volutpat enim. Fusce ac magna eu orci blandit placerat. In sit amet
            cursus elit. Integer id nulla est. Nam quis aliquet diam, vel
            laoreet quam. Nullam feugiat felis ut nisl laoreet, at bibendum
            purus dignissim. Cras sodales ornare aliquam.
          </Paragraph>
        </TextSection>

        <hr className="w-[10%] mx-auto h-1 my-8 bg-gray-700 border-0 dark:bg-gray-200" />

        <TextSection title="Lorem Ipsum" className="w-full">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis sapien placerat sagittis volutpat. Donec at metus
            condimentum, blandit mi in, efficitur ante. Morbi cursus convallis
            metus, eget finibus tellus pharetra id. Curabitur nisl libero,
            malesuada eu magna non, condimentum euismod ante. Cras interdum
            volutpat enim. Fusce ac magna eu orci blandit placerat. In sit amet
            cursus elit. Integer id nulla est. Nam quis aliquet diam, vel
            laoreet quam. Nullam feugiat felis ut nisl laoreet, at bibendum
            purus dignissim. Cras sodales ornare aliquam.
          </Paragraph>
        </TextSection>
      </main>

      <footer className="px-5 py-2 mt-[50px] text-xs sm:text-sm border-t-2 border-t-gray-700 dark:border-t-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 8 8"
          shape-rendering="crispEdges"
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
