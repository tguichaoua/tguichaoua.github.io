import React from "react";
import { MagicText } from "./magic-text";

interface Props {
  title: string;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function TextSection({ title, className, style, children }: Props) {
  return (
    <article className={className} style={style}>
      <header className="mb-3">
        <h2 className="text-center text-xl sm:text-3xl lg:text-5xl">
          <MagicText color="green">{title}</MagicText>
        </h2>
      </header>
      {children}
    </article>
  );
}
