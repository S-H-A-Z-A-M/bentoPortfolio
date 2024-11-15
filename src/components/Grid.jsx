import React from "react";
import { Aboutme, ContactMe, Navbar, Profile, Socials, Skill } from "./data";

function Grid() {
  return (
    <div className=" bg-slate-950">
      <div className=" grid h-screen  max-h-[75rem] min-h-[50rem] grid-cols-12 grid-rows-10 gap-4 p-4">
        <Navbar className="col-span-full row-span-1" />
        <Aboutme className="col-span-5 row-span-5" />
        <Profile className="col-span-3 row-span-5" />
        <Skill className="col-span-4 row-span-8" />
        <Aboutme className="col-span-4 row-span-4" />
        <ContactMe className="col-span-4 row-span-4" />
        <Socials className="col-span-4 row-span-1" />
      </div>
    </div>
  );
}

export default Grid;
