import React from "react";

type ListProps = {
  title: string;
  list: {
    name: string;
    link: string;
  }[];
};

function List({ title, list }: ListProps) {
  return (
    <div className={styles.list}>
      <cite className={styles.cite}>{title}</cite>
      <ul className={styles.ul}>
        {list.map((item, index) => (
          <li key={index} className={styles.li}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

const styles = {
  list: "flex flex-col",
  ul:
    "flex flex-row sm:flex-col justify-center items-center gap-2 p-2 opacity-80 text-white",
  cite: "text-center font-semibold text-orange-500 text-[16px]",
  li: "text-[12px] md:text-[14px]",
};
