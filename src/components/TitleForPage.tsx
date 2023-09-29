import React from "react";

function TitleForPage({ title }: { title: string }) {
  return (
    <div className={styles.titleDiv}>
      <h1 className={styles.titleH1}>{title}</h1>
    </div>
  );
}

export default TitleForPage;

const styles = {
  titleDiv: "w-full flex items-start justify-center gap-4",
  titleH1: "text-4xl font-bold",
};
