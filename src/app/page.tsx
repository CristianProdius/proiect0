"use client";
import { panels } from "../constants/resurse";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden m-0 font['Multi']">
      <div className="flex w-[90vw]">
        {panels.map((panel, index) => (
          <div
            key={index}
            className={`bg-cover bg-center bg-no-repeat h-[80vh] rounded-[50px] text-white cursor-pointer flex-[0.5] m-2.5 relative transition-all duration-700 ease-in ${
              index === active ? "flex-[5]" : ""
            } ${index > 3 ? "hidden sm:block" : ""}`}
            style={{ backgroundImage: `url('${panel.image}')` }}
            onClick={() => setActive(index)}
          >
            <h3
              className={`text-2xl absolute bottom-5 left-5 m-0 transition-opacity duration-300 ease-in delay-300 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            >
              {panel.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
