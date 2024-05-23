import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { getSortValue } from "../../helpers";

export const Sort = ({ onChange }: { onChange: (option: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleIconClick: React.MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    handleToggle();
  };

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    setSortBy(option);
    onChange(option);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex gap-[20px] items-center mb-[20px]">
      <p className="font-semibold text-[30px] text-left">Sort By:</p>
      <div className="relative inline-block w-[200px]" ref={dropdownRef}>
        <div
          className="flex justify-between py-[10px] px-[20px] bg-bg-card-color text-[white] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
          onClick={handleToggle}
        >
          {getSortValue(sortBy)}
          {isOpen ? (
            <MdKeyboardArrowUp size={20} onClick={handleIconClick} />
          ) : (
            <MdKeyboardArrowDown size={20} onClick={handleIconClick} />
          )}
        </div>
        {isOpen && (
          <ul className="py-[10px] px-[20px] bg-bg-card-color rounded-[10px] overflow-hidden w-[200px] block absolute z-[1]  text-[white]  ">
            <li
              className="py-[4px] px-[8px] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
              onClick={() => handleOptionClick("")}
            >
              None
            </li>
            <li
              className="py-[4px] px-[8px] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
              onClick={() => handleOptionClick("byDate=false")}
            >
              Newest{" "}
            </li>
            <li
              className="py-[4px] px-[8px] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
              onClick={() => handleOptionClick("byDate=true")}
            >
              Oldest
            </li>

            <li
              className="py-[4px] px-[8px] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
              onClick={() => handleOptionClick("byTitle=true")}
            >
              Title A-Z
            </li>
            <li
              className="py-[4px] px-[8px] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
              onClick={() => handleOptionClick("byTitle=false")}
            >
              Title Z-A
            </li>
            <li
              className="py-[4px] px-[8px] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
              onClick={() => handleOptionClick("byOrganizer=true")}
            >
              Organizer A-Z
            </li>
            <li
              className="py-[4px] px-[8px] rounded-[10px] cursor-pointer hover:text-[#0e223b] hover:bg-[#bdbdbd] transition duration-300"
              onClick={() => handleOptionClick("byOrganizer=false")}
            >
              Organizer Z-A
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
