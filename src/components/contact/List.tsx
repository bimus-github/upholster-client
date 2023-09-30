import React from "react";

interface ListProps {
  list: string[];
  name: string;
  tell?: boolean;
}

function List({ list, name, tell }: ListProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className=""></th>
          <td className={styles.title}>{name}</td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {list.map((item, index) => (
          <tr
            key={index}
            className={`${styles.tr} ${index % 2 !== 0 ? "bg-slate-200" : ""}`}
          >
            <td className={styles.tdIndex}>{index + 1}</td>
            <td className={styles.tdItem}>
              <a href={tell ? `tel:${item}` : `http:${item}`}>{item}</a>
            </td>
          </tr>
        ))}
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
