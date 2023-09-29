import { NavLink } from 'react-router-dom';

type HtmlNavProps = React.JSX.IntrinsicElements['nav'];

export interface Link {
  to: string;
  text: string;
}

export interface NavProps extends Omit<HtmlNavProps, 'children'> {
  links: Link[];
}

export function Nav(props: NavProps) {
  const { links, className, ...navProps } = props;

  const navLinks = links.map(({ to, text }, i) => (
    <NavLink
      key={i}
      to={to}
      className={({ isActive }) =>
        'rounded-md px-3 py-1 btn-3d ' + (isActive ? 'active' : '')
      }
    >
      {text}
    </NavLink>
  ));

  return (
    <nav
      className={'flex flex-row justify-center gap-3 ' + (className ?? '')}
      {...navProps}
    >
      {navLinks}
    </nav>
  );
}
