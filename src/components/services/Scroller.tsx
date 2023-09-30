import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface ScrollerProps {
  width: string;
  handleBack: () => void;
  handleForward: () => void;
  children: React.ReactNode;
}

function Scroller({
  handleBack,
  handleForward,
  width,
  children,
}: ScrollerProps) {
  return (
    <div className={`${styles.main} ${width}`}>
      <button className={styles.btn} onClick={() => handleBack()}>
        <ArrowBackIosIcon />
      </button>
      {children}
      <button className={styles.btn} onClick={() => handleForward()}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

export default Scroller;

const styles = {
  main:
    "relative z-0 p-5 flex justify-between bg-opacity-0 max-w-[370px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[800px]  gap-3",
  btn:
    "p-2 rounded-full  opacity-50 hover:opacity-100 bg-sky-300 flex justify-center items-center",
};
