import { Hourglass } from "react-loader-spinner";

export const Loader = ({ size = "60", classTitle = "" }) => {
  const loaderStyle =
    classTitle === "insideButton"
      ? "absolute top-[50%] right-[10px] translate-y-[-50%]"
      : "w-full h-full fixed top-0 left-0 z-999 flex justify-center items-center bg-[#030303] opacity-[0.8]";
  return (
    <div className={loaderStyle}>
      <Hourglass
        visible={true}
        height={size}
        width={size}
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};
