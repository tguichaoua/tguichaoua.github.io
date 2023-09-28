import { HTMLProps } from 'react';

type BoxTheme = 'none' | 'neutral' | 'info' | 'warn' | 'error';

export interface BoxProps extends HTMLProps<HTMLDivElement> {
  theme?: BoxTheme;
}

export function Box(props: BoxProps) {
  const { theme, className, ...divProps } = props;

  return (
    <div
      className={
        (className ?? '') +
        ' px-5 py-3 border-2 rounded-xl shadow-solid ' +
        getThemeClass(theme)
      }
      {...divProps}
    ></div>
  );
}

function getThemeClass(theme: BoxTheme | undefined): string {
  switch (theme) {
    case 'neutral':
      return 'border-slate-500 dark:border-slate-300 shadow-slate-600 dark:shadow-slate-400';
    case 'info':
      return 'border-blue-500 dark:border-blue-300 shadow-blue-600 dark:shadow-blue-400';
    case 'warn':
      return 'border-yellow-500 dark:border-yellow-300 shadow-yellow-600 dark:shadow-yellow-400';
    case 'error':
      return 'border-red-500 dark:border-red-300 shadow-red-600 dark:shadow-red-400';
  }

  return '';
}
