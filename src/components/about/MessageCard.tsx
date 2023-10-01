import React from "react";

interface MessageCardProps {
  children: React.ReactNode;
  isClient: boolean;
}

function MessageCard({ children, isClient }: MessageCardProps) {
  return (
    <div id="message" className={styles.main}>
      <div
        className={`w-[90%] shadow-bottom  flex ${
          isClient ? styles.client : styles.server
        }`}
      >
        {isClient && <div className="w-[15px] bg-white rounded-br-full" />}
        <div className={`${styles.dialog} `}>
          <h1 className={styles.h1}>{isClient ? "Mijoz" : "Usta"}</h1>
          <hr className="w-full border-black" />
          <p className={styles.p}>{children}</p>
        </div>
        {!isClient && <div className="w-[15px] bg-white rounded-bl-full" />}
      </div>
    </div>
  );
}

export default MessageCard;

const styles = {
  main:
    " w-full flex message opacity-40 transition-opacity duration-500 ease-in-out",
  dialog: " w-full p-2 flex flex-col items-start gap-2 ",
  h1: "font-semibold",
  p: "text-justify font-serif",
  client: "bg-green-200 rounded-r-lg ",
  server: "bg-sky-300 ml-auto rounded-l-lg ",
};
