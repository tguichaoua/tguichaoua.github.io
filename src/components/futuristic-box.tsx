import { HTMLProps } from 'react';
import './futiristic-box.css';

export interface FuturisticBoxProps extends React.HTMLProps<HTMLDivElement> {
  innerClassName?: string;
  topLeftChamfer?: boolean;
}

export function FuturisticBox(props: FuturisticBoxProps) {
  const {
    children,
    className,
    innerClassName,
    topLeftChamfer,
    ...wrapperProps
  } = props;
  return (
    <div
      className={'futuristic-box-wrapper ' + (className ?? '')}
      {...wrapperProps}
    >
      <div
        className={
          'futuristic-box-inner' +
          (topLeftChamfer === true ? ' futuristic-box-tl-chamfer ' : ' ') +
          (innerClassName ?? '')
        }
      >
        {children}
      </div>
    </div>
  );
}

export function FuturisticHeader(props: HTMLProps<HTMLDivElement>) {
  const { className, ...divProps } = props;

  return (
    <div
      className={'futuristic-box-header ' + (className ?? '')}
      {...divProps}
    ></div>
  );
}
