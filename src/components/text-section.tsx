import React from "react";

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
        <h2 className="text-center text-green-300 text-xl sm:text-3xl lg:text-5xl">
          {title}
        </h2>
      </header>
      {children}
    </article>
  );
}
