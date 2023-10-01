import React, { useEffect, useRef, useState } from "react";
import { Car_Service_Type } from "../../types";
import PageLoading from "../loading/PageLoading";
import { getServiceOfTheCar } from "../../firebase/functions/cars";

interface CarServicesProps {
  selectedCarName: string;
  selectedServiceName: string;
}

function CarServices({
  selectedCarName,
  selectedServiceName,
}: CarServicesProps) {
  const servicesRef = useRef<HTMLElement>(null);

  const [service, setService] = useState<Car_Service_Type>(
    {} as Car_Service_Type
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const services = servicesRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (
            selectedCarName.length !== 0 &&
            selectedServiceName.length !== 0
          ) {
            setService({} as Car_Service_Type);
            setLoading(true);
            getServiceOfTheCar(selectedCarName, selectedServiceName)
              .then((data) => {
                if (data) {
                  setService(data);
                } else {
                  setService({} as Car_Service_Type);
                  setLoading(false);
                }
              })
              .finally(() => {
                setLoading(false);
              });
          } else {
            setService({} as Car_Service_Type);
          }
        } else {
        }
      });
    });
    if (services) {
      observer.observe(services);
    }
  }, [selectedCarName, selectedServiceName, setLoading]);

  return (
    <article ref={servicesRef} className={styles.article} id="services">
      {!loading ? (
        <ul className={styles.ul}>
          {service.name?.length === 0 && <p>Xali ma'lumot qo'shilmagan</p>}
          {service.items?.map((item, index) => (
            <li
              key={index}
              className={`${styles.li} ${
                index % 2 === 0 ? "bg-slate-100" : ""
              }`}
            >
              {/* before then images will be shown */}
              <div className={styles.imgTitleDiv}>
                <p>Dastlabki xolati</p>
                <p>Natijaviy xolati</p>
              </div>
              <picture className={styles.images}>
                <picture className={styles.image}>
                  <img src={item.before} alt={item.before} />
                </picture>
                <picture className={styles.image}>
                  <img src={item.then} alt={item.then} />
                </picture>
              </picture>

              {/* inormation about the service, e.g. price, description etc */}
              <article className="flex flex-col gap-2  md:px-5">
                <p className=" font-semibold p-1">
                  Xizmat narxi: <em>{item.price}</em>
                </p>
                <details>
                  <summary className="font-semibold opacity-70">
                    Xizmat haqida ma'lumot
                  </summary>
                  <p className="p-1 text-justify font-serif">
                    {item.description}
                  </p>
                </details>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-full flex justify-center items-center h-[600px]">
          <PageLoading />
        </div>
      )}
    </article>
  );
}

export default CarServices;

const styles = {
  article: "w-full flex items-center justify-center",
  ul: "flex flex-col gap-5 items-center justify-center w-full",
  li: "flex flex-col p-1 rounded w-full md:w-[700px]",
  picture: "",
  imgTitleDiv: "flex w-full justify-around items-center mb-2 font-semibold",
  images: "flex max-w-full gap-2",
  image:
    "w-1/2 h-[200px] object-cover relative overflow-hidden rounded flex justify-center items-center",
};
