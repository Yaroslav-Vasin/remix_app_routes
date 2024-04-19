import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      {/* <img className="w-20 h-20" src="./images/logoyv.svg" alt="" /> */}
      <Link to="/">Remix Course</Link>
    </div>
  );
}
