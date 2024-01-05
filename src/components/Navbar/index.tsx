import Link from 'next/link';

import DropdownNavItem from './DropdownNavItem';

type SubNavItem = {
  id: string;
  displayName: string;
  href: string;
  description: string;
};
export type SubNav = Record<number, SubNavItem>;
type NavItem = {
  id: string;
  displayName: string;
  href?: string;
  subNav?: SubNav;
};
type Navigation = Record<number, NavItem>;

type NavbarProps = {
  navigation: Navigation;
};

const Navbar = ({ navigation }: NavbarProps) => {
  return (
    <div className="w-full flex py-8 px-12 justify-between">
      <ul className="flex gap-12">
        <Link href="/">Home</Link>
        <ul className="flex gap-6">
          {Object.entries(navigation).map(
            ([_, { id, displayName, href, subNav }]) => {
              if (subNav) {
                return (
                  <DropdownNavItem
                    key={id}
                    displayName={displayName}
                    subNav={subNav}
                  />
                );
              }
              return (
                <li key={id}>
                  <Link href={href || '/'}>{displayName}</Link>
                </li>
              );
            }
          )}
        </ul>
      </ul>
      <div className="flex gap-4">
        <Link href="/">Log In</Link>
        <Link href="/">Get Started</Link>
      </div>
    </div>
  );
};

export default Navbar;
