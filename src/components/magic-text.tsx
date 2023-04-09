import React from "react";

interface Props {
  color: "red" | "green" | "blue";
  children: string;
}

// Make sure those classes are not tree shaked
// "first-letter:text-red-300"
// "first-letter:text-green-300"
// "first-letter:text-blue-300"

export function MagicText({ color, children }: Props) {
  const wordClassName = `first-letter:text-${color}-300 inline-block`;
  const spans = children.split(/\s+/).map((word, i) => (
    <React.Fragment key={i}>
      <span className={wordClassName}>{word}</span>{" "}
    </React.Fragment>
  ));

  return <>{spans}</>;
}
