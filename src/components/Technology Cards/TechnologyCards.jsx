import React from "react";
import { cardsList } from "./cardsList";

import "./TechnologyCards.css";

const TechnologyCards = () => {
  return (
    <div className="bg-[#f4faff] flex flex-col justify-center items-center py-5">
      <h1 className="text-[#171f46] text-4xl font-bold py-3">
        Learn 4.0 Technologies
      </h1>
      <p className="text-center text-[#64748b] p-5">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, <br /> Nvidia, Qualcomm, etc. Learn directly from professionals
        involved in Product <br /> Development.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {cardsList.map((card) => {
          const { id, title, description, className, imgUrl } = card;
          return (
            <div key={id} className={className}>
              <h1 className="text-[#171f46] text-xl font-bold">{title}</h1>
              <p className="text-[#64748b]">{description}</p>
              <div className="flex justify-end text-right">
                <img src={imgUrl} alt={title} className="h-20" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologyCards;
