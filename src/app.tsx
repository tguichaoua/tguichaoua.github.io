import React from "react";

import { FaGithubSquare } from "react-icons/fa";

export function App() {
  return (
    <>
      <main className="w-[80%] h-screen mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl whitespace-nowrap">
          Tristan Guichaoua
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-4xl whitespace-nowrap mt-5">
          Personal Website
        </h2>

        <p className="mt-20 whitespace-nowrap">Work in progress ...</p>

        <hr className="w-[80%] h-px my-8 bg-gray-700 border-0 dark:bg-gray-200" />

        <div className="">
          <a href="https://github.com/tguichaoua">
            <FaGithubSquare className="text-5xl" />
          </a>
        </div>
      </main>
    </>
  );
}
