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
        <button className="btn btn-square btn-ghost">
          <FaGithub size={"2rem"} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
