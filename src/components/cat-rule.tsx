import { HTMLProps } from 'react';

type CatRuleProps = Omit<HTMLProps<HTMLDivElement>, 'children'>;

export function CatRule(props: CatRuleProps) {
  const { className, ...divProps } = props;
  return (
    <div
      className={'flex flex-row items-center ' + (className ?? '')}
      {...divProps}
    >
      <span className="flex-grow h-px border-0 inline-block bg-current"></span>
      <span>ฅ/ᐠ. ̫ .ᐟ\ฅ</span>
      <span className="flex-grow h-px border-0 inline-block bg-current"></span>
    </div>
  );
}
