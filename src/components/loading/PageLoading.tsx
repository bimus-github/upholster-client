import React from "react";

const PageLoading = () => {
  return (
    <div
      className={styles.main}
      style={{
        perspective: "400px",
      }}
    >
      <div className={styles.card} />
      <div
        className={styles.card}
        style={{
          animationDelay: "1s",
        }}
      />
    </div>
  );
};

export default PageLoading;

const styles = {
  main: "w-[200px] h-[200px]",
  card:
    "absolute w-[100px] h-[100px] bg-sky-200 animate-flip-load origin-bottom-right ",
};
