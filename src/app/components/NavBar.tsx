import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

type Props = {};

function NavBar({}: Props) {
  return (
    <nav className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Breaking Bad Quotes</a>
      </div>
      <div className="flex-none">
        <a className="btn btn-square btn-ghost" href="https://github.com/lhiguer1/Random-Breaking-Bad-Quote">
          <FaGithub size={"2rem"} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
