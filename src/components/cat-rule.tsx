import { HTMLProps } from 'react';

type CatRuleProps = Omit<HTMLProps<HTMLDivElement>, 'children'>;

export function CatRule(props: CatRuleProps) {
  const { className, ...divProps } = props;
  return (
    <div
      className={'flex flex-row items-center ' + (className ?? '')}
      {...divProps}
    >
      <span className="flex-grow h-px bg-gray-700 border-0 dark:bg-gray-200 inline-block"></span>
      <span>ฅ/ᐠ. ̫ .ᐟ\ฅ</span>
      <span className="flex-grow h-px bg-gray-700 border-0 dark:bg-gray-200 inline-block"></span>
    </div>
  );
}
