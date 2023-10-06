import { hslToRgb } from '../utils/color';

function hsl(h: number, s: number, l: number) {
  return hslToRgb(h / 360, s / 100, l / 100).join(' ');
}

const COLORS: { front?: string; back?: string }[] = [
  {},
  { front: hsl(0, 100, 50) },
  { front: hsl(120, 100, 50) },
  { front: hsl(240, 80, 60) },
  //   { front: '0 0 0', back: '255 255 255' }, // TODO: adapt the website for the reversed color
];

let currentColor = 0;

export function nextColor() {
  currentColor += 1;
  if (currentColor === COLORS.length) {
    currentColor = 0;
  }

  const color = COLORS[currentColor];
  const style = document.documentElement.style;

  style.setProperty('--front-color', color.front ?? '');
  style.setProperty('--back-color', color.back ?? '');
}
