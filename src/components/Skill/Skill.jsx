import React from "react";
import { FaReact, FaHtml5, FaCss3, FaJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

function OneSkill({ name, icon }) {
  return (
    <div className="flex gap-32 pl-3 pb-3 pt-2 items-center border-b-2 border-slate-900">
      {icon}
      <p className="text-2xl">{name}</p>
    </div>
  );
}

function Skill({ className }) {
  return (
    <div
      className={`bg-[#ede3d0]  rounded-xl py-8 pt-6 px-8 uppercase text-left overflow-y-auto hide-scrollbar no-scrollbar ${className}`}
    >
      <OneSkill name="React" icon={<FaReact className="text-5xl" />} />
      <OneSkill name="HTML" icon={<FaHtml5 className="text-5xl" />} />
      <OneSkill name="CSS" icon={<FaCss3 className="text-5xl" />} />
      <OneSkill name="JS" icon={<FaJs className="text-5xl" />} />
      <OneSkill
        name="Tailwind"
        icon={<RiTailwindCssFill className="text-5xl" />}
      />
      <OneSkill name="Git & Github" icon={<FaGithub className="text-5xl" />} />
      <OneSkill name="Mongodb" icon={<SiMongodb className="text-5xl" />} />
      <OneSkill name="React" icon={<FaGithub className="text-5xl" />} />
    </div>
  );
}

export default Skill;
