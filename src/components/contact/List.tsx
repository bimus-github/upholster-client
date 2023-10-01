import React from "react";

interface ListProps {
  list: {
    name: string;
    link: string;
  }[];
  name: string;
  isLoading?: boolean;
}

function List({ list, name, isLoading }: ListProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className=""></th>
          <td className={styles.title}>{name}</td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {isLoading ? (
          <>
            <tr className={`${styles.tr} animate-pulse`}>
              <td className={styles.tdIndex}></td>
              <td className={styles.tdItem}></td>
            </tr>
            <tr className={`${styles.tr} animate-pulse bg-slate-200`}>
              <td className={styles.tdIndex}></td>
              <td className={styles.tdItem}></td>
            </tr>
          </>
        ) : (
          <>
            {list.map((item, index) => (
              <tr
                key={index}
                className={`${styles.tr} ${
                  index % 2 === 0 ? "bg-slate-200" : ""
                }`}
              >
                <td className={styles.tdIndex}>{index + 1}</td>
                <td className={styles.tdItem}>
                  <a href={item.link}>{item.name}</a>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
}

export default List;

const styles = {
  table: "min-w-full border border-black",
  title: "font-semibold p-2 text-sky-500",
  tbody: "w-full",
  tr: "border rounded border-black bg-white",
  tdIndex: "p-2 w-[10%] border border-black text-center font-semibold",
  tdItem: "p-2 w-[90%]",
};
