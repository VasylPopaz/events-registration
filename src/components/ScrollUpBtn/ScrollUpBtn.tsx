import { IoArrowUpSharp } from "react-icons/io5";

interface ScrollUpBtnProps {
  isVisible: boolean;
}

export const ScrollUpBtn = ({ isVisible }: ScrollUpBtnProps) => {
  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "scroll-up-btn opacity-[1] visible" : " scroll-up-btn"
      }`}
      type="button"
      onClick={handleClickBtn}
    >
      <IoArrowUpSharp className="w-[30px] h-[30px]" />
    </button>
  );
};
