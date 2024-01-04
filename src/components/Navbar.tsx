import Link from 'next/link';

type NavItem = {
  id: string;
  displayName: string;
  href: string;
};
type Navigation = Record<string | number, NavItem>;

type NavbarProps = {
  navigation: Navigation;
};

const Navbar = ({ navigation }: NavbarProps) => {
  return (
    <div className="w-full flex py-8 px-12 justify-between">
      <div className="flex gap-12">
        <Link href="/">Home</Link>
        <ul className="flex gap-6">
          {Object.entries(navigation).map(([_, { id, displayName, href }]) => (
            <div key={id}>
              <Link href={href}>{displayName}</Link>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <Link href="/">Log In</Link>
        <Link href="/">Get Started</Link>
      </div>
    </div>
  );
};

export default Navbar;
