import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Paragraph({ children, className, style }: Props) {
  return (
    <p
      className={
        "text-justify first-letter:text-purple-300 first-letter:text-4xl " +
        (className ?? "")
      }
      style={style}
    >
      {children}
    </p>
  );
}
