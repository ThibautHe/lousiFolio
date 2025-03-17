import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex justify-between max-w-[1080px] mx-auto p-8">
      <h1>Louis Malevez</h1>
      <ul className="flex gap-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/work"}>Work</Link>
        </li>
      </ul>
    </div>
  );
}
