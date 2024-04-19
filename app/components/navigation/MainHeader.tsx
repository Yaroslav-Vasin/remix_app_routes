import { Link } from "@remix-run/react";
import Logo from "../util/logo";
import NavLinkItem from "./NavLinkItem/NavLinkItem";
import LinkItem from "./LinkItem/LinkItem";

function MainHeader() {
  return (
    <header
      id="main-header"
      className="grid grid-cols-3 justify-between items-center p-4 bg-gray-100 shadow-md"
    >
      <Logo />
      <nav className="flex justify-center" id="main-nav">
        <ul className="flex gap-16">
          <NavLinkItem url={"/"} label={"Home"} />
          <NavLinkItem url={"/pricing"} label={"Pricing"} />
          <NavLinkItem url={"/expenses"} label={"Expenses"} />
        </ul>
      </nav>
      <nav className="flex justify-end" id="cta-nav">
        <ul>
          <LinkItem url={"/login"} label={"Login"} />
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
