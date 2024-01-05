import Link from 'next/link';

import { SubNav } from '.';

type DropdownNavItemProps = {
  displayName: string;
  subNav: SubNav;
};

const DropdownNavItem = ({ displayName, subNav }: DropdownNavItemProps) => (
  <li className="group relative cursor-pointer">
    {displayName}
    <div className="group-hover:block hidden absolute w-max top-full left-0">
      <span className="block w-full h-4" />
      <ul className="flex flex-col bg-white text-black">
        {Object.entries(subNav).map(
          ([_, { id, displayName, href, description }]) => {
            return (
              <li key={id} className="p-8 hover:bg-slate-200">
                <Link href={href}>
                  <h3>{displayName}</h3>
                  <p>{description}</p>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  </li>
);

export default DropdownNavItem;
