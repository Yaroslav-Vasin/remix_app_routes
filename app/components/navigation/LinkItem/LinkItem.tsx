interface NavItemProps {
  url: string;
  label: string;
}

import { Link } from "@remix-run/react";

export default function LinkItem({ url, label }: NavItemProps) {
  return (
    <li>
      <Link
        to={url}
        className="px-4 py-2 bg-black hover:bg-gray-600 text-white rounded-3xl"
      >
        {label}
      </Link>
    </li>
  );
}
