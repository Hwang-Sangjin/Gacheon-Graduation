import React, { useEffect, useState } from "react";

const DesignerNavbar = ({ selectedCategory, setSelectedCategory }) => {
  const ChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  const catetories = ["All", "Committee", "Product", "Space"];

  return (
    <div>
      <ul className="flex flex-row">
        {catetories.map((category) => {
          return category === selectedCategory ? (
            <div
              className="mx-1 my-2 bg-black flex px-2 py-0.5 rounded-md"
              key={category.id}
              onClick={() => ChangeCategory(category)}
            >
              <li
                key={category.id}
                className="text-[#FFF16F] text-sm md:text-3xl font-['Hack-Bold']"
              >
                ({category})
              </li>
            </div>
          ) : (
            <div
              className="mx-1 my-2 flex px-2 py-0.5"
              key={category.id}
              onClick={() => ChangeCategory(category)}
            >
              <li
                key={category.id}
                className="text-sm md:text-3xl font-['Hack-Bold']"
              >
                ({category})
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DesignerNavbar;
