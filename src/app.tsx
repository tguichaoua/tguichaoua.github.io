import React from "react";

import { FaGithubSquare } from "react-icons/fa";

import { TextSection } from "./components/text-section";

export function App() {
  return (
    <>
      <header role="banner" className="text-center pt-5">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl whitespace-nowrap my-5">
          <span className="text-red-300">T</span>ristan{" "}
          <span className="text-red-300">G</span>uichaoua
        </h1>
        <div className="grid grid-cols-3 gap-y-2 max-w-[600px] mx-auto mt-10 text-base sm:text-xl lg:text-3xl">
          <p className="text-3xl sm:text-5xl lg:text-7xl">🧙‍♂️</p>
          <p className="text-3xl sm:text-5xl lg:text-7xl">👨‍💻</p>
          <p className="text-3xl sm:text-5xl lg:text-7xl">🦀</p>
          <p>
            <span className="text-blue-300">D</span>eveloper
          </p>
          <p>
            <span className="text-blue-300">E</span>ngineer
          </p>
          <p>
            <span className="text-blue-300">R</span>ustacean
          </p>
        </div>
      </header>

      <hr className="w-[30%] mx-auto h-px my-8 bg-gray-700 border-0 dark:bg-gray-200" />

      <main className="flex flex-col items-center w-[80%] mx-auto">
        <TextSection title="About me" className="w-full mb-3">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis sapien placerat sagittis volutpat. Donec at metus
            condimentum, blandit mi in, efficitur ante. Morbi cursus convallis
            metus, eget finibus tellus pharetra id. Curabitur nisl libero,
            malesuada eu magna non, condimentum euismod ante. Cras interdum
            volutpat enim. Fusce ac magna eu orci blandit placerat. In sit amet
            cursus elit. Integer id nulla est. Nam quis aliquet diam, vel
            laoreet quam. Nullam feugiat felis ut nisl laoreet, at bibendum
            purus dignissim. Cras sodales ornare aliquam.
          </p>
        </TextSection>
        <TextSection title="About me" className="w-full mb-3">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis sapien placerat sagittis volutpat. Donec at metus
            condimentum, blandit mi in, efficitur ante. Morbi cursus convallis
            metus, eget finibus tellus pharetra id. Curabitur nisl libero,
            malesuada eu magna non, condimentum euismod ante. Cras interdum
            volutpat enim. Fusce ac magna eu orci blandit placerat. In sit amet
            cursus elit. Integer id nulla est. Nam quis aliquet diam, vel
            laoreet quam. Nullam feugiat felis ut nisl laoreet, at bibendum
            purus dignissim. Cras sodales ornare aliquam.
          </p>
        </TextSection>
        <TextSection title="About me" className="w-full mb-3">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis sapien placerat sagittis volutpat. Donec at metus
            condimentum, blandit mi in, efficitur ante. Morbi cursus convallis
            metus, eget finibus tellus pharetra id. Curabitur nisl libero,
            malesuada eu magna non, condimentum euismod ante. Cras interdum
            volutpat enim. Fusce ac magna eu orci blandit placerat. In sit amet
            cursus elit. Integer id nulla est. Nam quis aliquet diam, vel
            laoreet quam. Nullam feugiat felis ut nisl laoreet, at bibendum
            purus dignissim. Cras sodales ornare aliquam.
          </p>
        </TextSection>

        <p className="mt-20 whitespace-nowrap">Work in progress ...</p>

        <div className="">
          <a href="https://github.com/tguichaoua">
            <FaGithubSquare className="text-5xl" />
          </a>
        </div>
      </main>
    </>
  );
}
