import React, { useEffect, useRef, useState } from "react";
import Scroller from "./Scroller";
import { getServices } from "../../firebase/functions/services";

interface ServivesListProps {
  setSelectedItemName: Function;
  selectedItemName: string;
}
function ServivesList({
  setSelectedItemName,
  selectedItemName,
}: ServivesListProps) {
  const listRef = useRef<HTMLUListElement>(null);

  const [services, setServices] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setServices([]);
    getServices()
      .then((data) => {
        if (data) {
          // loop name every item
          data.forEach((item) => {
            setServices((prev) => {
              return [...prev, item.name];
            });
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleBack = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const handleForward = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };
  return (
    <div className={styles.main}>
      <Scroller
        handleBack={handleBack}
        handleForward={handleForward}
        width={"w-[750px]"}
      >
        <ul className={styles.list} ref={listRef}>
          {loading ? (
            // make skeleton
            <>
              <li className={`${styles.item} animate-pulse `}></li>
              <li className={`${styles.item} animate-pulse `}></li>
            </>
          ) : (
            <>
              {services.map((item, index) => {
                return (
                  <li
                    onClick={() => setSelectedItemName(item)}
                    className={`${styles.item} ${
                      selectedItemName === item ? "bg-sky-400" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </Scroller>
    </div>
  );
}

export default ServivesList;

const styles = {
  main: "w-full flex justify-center items-center relative",
  list:
    "flex items-center gap-5 p-5 rounded-md overflow-y-auto bg-white max-w-full relative drop-shadow-lg",
  item:
    "min-w-[100px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] p-2 bg-sky-500 hover:bg-sky-400 text-center rounded-md flex items-center justify-center",
};
