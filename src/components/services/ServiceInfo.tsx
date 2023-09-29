import React, { useEffect, useRef, useState } from "react";
import { Service_Type } from "../../types";
import { getService } from "../../firebase/functions/services";
import PageLoading from "../loading/PageLoading";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

interface ServiceInfoProps {
  selectedItemName: string;
}
function ServiceInfo({ selectedItemName }: ServiceInfoProps) {
  const imagesRef = useRef<HTMLElement>(null);
  const [service, setService] = useState<Service_Type>({} as Service_Type);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    getService(selectedItemName)
      .then((data) => {
        if (data) {
          setService(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedItemName]);

  const handleBack = () => {
    if (imagesRef.current) {
      imagesRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const handleForward = () => {
    if (imagesRef.current) {
      imagesRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      <cite className={styles.cite}>{selectedItemName}</cite>
      {loading ? (
        <div className={styles.loading}>
          <PageLoading />
        </div>
      ) : (
        <>
          {service.name && (
            <div className={styles.service}>
              <picture className={styles.images} ref={imagesRef}>
                {service?.images.map((image, index) => (
                  <picture key={index} className={styles.picture}>
                    <img
                      src={image}
                      alt={selectedItemName}
                      className={styles.img}
                    />
                  </picture>
                ))}
              </picture>

              {/* image scroller */}
              <div className={styles.scroller}>
                <button className={styles.btn} onClick={handleBack}>
                  <KeyboardDoubleArrowLeftIcon />
                </button>
                <button className={styles.btn} onClick={handleForward}>
                  <KeyboardDoubleArrowRightIcon />
                </button>
              </div>

              <details>{service.description}</details>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default ServiceInfo;

const styles = {
  main: "w-full h-full flex flex-col gap-5",
  cite: "text-2xl font-bold text-blue-500",
  loading: "w-full h-[500px] flex items-center justify-center",
  service: " flex flex-col gap-5",
  images: "max-w-[100%] object-cover flex overflow-y-auto gap-4",
  picture:
    "h-[300px] min-w-[300px] relative overflow-hidden rounded-md flex justify-center items-center",
  img: "",

  scroller: "flex w-full justify-around ",
  btn: "p-2 w-[100px] bg-sky-300 hover:bg-opacity-50 rounded-md",
};
