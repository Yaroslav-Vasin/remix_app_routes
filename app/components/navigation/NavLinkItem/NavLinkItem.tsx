interface NavItemProps {
  url: string;
  label: string;
}

import { NavLink } from "@remix-run/react";

export default function NavLinkItem({ url, label }: NavItemProps) {
  return (
    <li className="px-4 py-2 hover:shadow-md text-black rounded-3xl">
      <NavLink
        to={url}
        className={({ isActive, isPending }) =>
          isPending
            ? "text-red-600"
            : isActive
            ? "text-purple-600"
            : "text-black hover:text-purple-600 transition duration-300"
        }
      >
        {label}
      </NavLink>
    </li>
  );
}
