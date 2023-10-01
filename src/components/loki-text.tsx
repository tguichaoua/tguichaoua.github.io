import { useRef } from 'react';
import { useInterval } from 'usehooks-ts';

export interface LokiTextProps extends React.HTMLProps<HTMLDivElement> {
  children: string;
  fonts: string[];
  colors?: string[] | (() => string);
  delay?: number;
  onLetterTransformed?: (elt: HTMLSpanElement) => void;
}

export function LokiText(props: LokiTextProps) {
  const { children, fonts, colors, delay, onLetterTransformed, ...divProps } =
    props;

  const colorProvider = Array.isArray(colors)
    ? (i: number) => colors[i % colors.length]
    : colors;

  // Wrap each caracters into a span
  const textsRef = useRef(new Array() as HTMLSpanElement[]);
  const text = children.split('').map((c, i) => (
    <span
      key={i}
      ref={(elt) =>
        elt !== null && elt.innerHTML !== ' ' ? textsRef.current.push(elt) : 0
      }
      className="text-shadow"
    >
      {c}
    </span>
  ));

  // Round-robin provides a better visual effect than random.
  const iteration = useRef(0);
  useInterval(() => {
    // Select the next font
    iteration.current += 1;
    const font = fonts[iteration.current % fonts.length];

    // Pick a random caracter which font is different from the next font to be set.
    let text;
    const texts = textsRef.current;
    do {
      text = texts[Math.floor(Math.random() * texts.length)];
    } while (text.style.fontFamily === font);

    text.style.fontFamily = font;

    if (colorProvider) {
      text.style.color = colorProvider(iteration.current);
    }

    if (onLetterTransformed) onLetterTransformed(text);
  }, delay ?? 1000);

  return <div {...divProps}>{text}</div>;
}
