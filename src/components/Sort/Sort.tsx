import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

import { sortOptions } from "../../constants";

interface ISortProps {
  onChange: (label: string, value: string) => void;
  sortLabel: string;
}
export const Sort = ({ sortLabel, onChange }: ISortProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState(sortLabel);

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

  const handleOptionClick = (label: string, value: string) => {
    setIsOpen(false);
    setSortBy(label);
    onChange(label, value);
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
          className="flex justify-between items-center py-[10px] px-[20px] bg-[#27303a] text-[white] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
          onClick={handleToggle}
        >
          {sortBy}

          <MdKeyboardArrowUp
            size={20}
            onClick={handleIconClick}
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </div>
        {isOpen && (
          <ul className="py-[10px] px-[12px] bg-[#27303a] rounded-[10px] overflow-hidden w-[200px] block absolute top-[50px] left-0 z-[1]  text-[white] space-y-1 ">
            {sortOptions.map(({ label, value }, index) => (
              <li
                key={index}
                style={label === sortBy ? { backgroundColor: "#6b7279" } : {}}
                className="py-[4px] px-[8px] rounded-[10px] cursor-pointer hover:text-bg-card-color hover:bg-[#bdbdbd] transition duration-300"
                onClick={() => handleOptionClick(label, value)}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
