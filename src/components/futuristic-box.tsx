import './futiristic-box.css';

export interface FuturisticBoxProps extends React.HTMLProps<HTMLDivElement> {
  header?: React.ReactNode;
  innerClassName?: string;
}

export function FuturisticBox(props: FuturisticBoxProps) {
  const { header, children, className, innerClassName, ...wrapperProps } =
    props;
  return (
    <div
      className={'futuristic-box-wrapper ' + (className ?? '')}
      {...wrapperProps}
    >
      <div
        className={
          'futuristic-box-inner ' +
          (!header ? 'futuristic-box-no-header ' : ' ') +
          (innerClassName ?? '')
        }
      >
        {header ? <div className="futuristic-box-header">{header}</div> : null}
        <div className="px-5 py-3">{children}</div>
      </div>
    </div>
  );
}
