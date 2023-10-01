import React, { useEffect, useState } from "react";
import { CarServices, SelectInput, TitleForPage } from "../../components";
import { getCars } from "../../firebase/functions/cars";
import { getServices } from "../../firebase/functions/services";

function Designs() {
  const [selectedCarName, setSelectedCarName] = useState<string>("");
  const [selectedServiceName, setSelectedServiceName] = useState<string>("");

  const [carOptions, setCarOptions] = useState<string[]>([]);
  const [serviceOptions, setServiceOptions] = useState<string[]>([]);

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
      <CarServices
        selectedCarName={selectedCarName}
        selectedServiceName={selectedServiceName}
      />
    </section>
  );
}

export default Designs;

const styles = {
  designs: "min-h-[100vh] py-5 px-2 flex flex-col items-start gap-5",
};
