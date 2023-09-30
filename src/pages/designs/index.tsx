import React, { useEffect, useState } from "react";
import { CarServices, SelectInput, TitleForPage } from "../../components";
import { getCars, getServiceOfTheCar } from "../../firebase/functions/cars";
import { getServices } from "../../firebase/functions/services";
import { Car_Service_Type } from "../../types";

function Designs() {
  const [selectedCarName, setSelectedCarName] = useState<string>("");
  const [selectedServiceName, setSelectedServiceName] = useState<string>("");
  const [service, setService] = useState<Car_Service_Type>(
    {} as Car_Service_Type
  );
  const [carOptions, setCarOptions] = useState<string[]>([]);
  const [serviceOptions, setServiceOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCarOptionsLoading, setIsCarOptionsLoading] = useState<boolean>(true);
  const [isCarServiceOptionsLoading, setIsCarServiceOptionsLoading] = useState<
    boolean
  >(true);

  useEffect(() => {
    setCarOptions([]);
    setIsCarOptionsLoading(true);
    getCars()
      .then((data) => {
        if (data) {
          setCarOptions(data.map((item) => item.name));
        }
      })
      .finally(() => {
        setIsCarOptionsLoading(false);
      });
  }, []);

  useEffect(() => {
    setServiceOptions([]);
    setIsCarServiceOptionsLoading(true);
    getServices()
      .then((data) => {
        if (data) {
          data.forEach((item) => {
            setServiceOptions((prev) => {
              return [...prev, item.name];
            });
          });
        }
      })
      .finally(() => {
        setIsCarServiceOptionsLoading(false);
      });
  }, [selectedCarName]);

  useEffect(() => {
    if (selectedCarName.length && selectedServiceName.length) {
      setService({} as Car_Service_Type);
      setLoading(true);
      getServiceOfTheCar(selectedCarName, selectedServiceName)
        .then((data) => {
          if (data) {
            setService(data);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedCarName, selectedServiceName]);

  return (
    <section className={styles.designs} id="design">
      <TitleForPage title="Dizaynlar" />

      <SelectInput
        oprions={carOptions}
        selectedItemName={selectedCarName}
        setSelectedItemName={setSelectedCarName}
        title="Mashina turini tanlang"
        loading={isCarOptionsLoading}
      />

      <SelectInput
        oprions={serviceOptions}
        selectedItemName={selectedServiceName}
        setSelectedItemName={setSelectedServiceName}
        title="Xizmat turini tanlang"
        loading={isCarServiceOptionsLoading}
      />

      <div className="h-[1px] bg-gray-500 w-full" />
      <CarServices service={service} loading={loading} />
    </section>
  );
}

export default Designs;

const styles = {
  designs: "min-h-[100vh] py-5 px-2 flex flex-col items-start gap-5",
};
