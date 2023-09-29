import React from "react";
import { ServiceInfo, ServicesList, TitleForPage } from "../../components";

function Services() {
  const [selectedItemName, setSelectedItemName] = React.useState<string>("");

  return (
    <section className={styles.services} id="services">
      <TitleForPage title="Xizmatlar" />

      <ServicesList
        setSelectedItemName={setSelectedItemName}
        selectedItemName={selectedItemName}
      />

      <ServiceInfo selectedItemName={selectedItemName} />
    </section>
  );
}

export default Services;

const styles = {
  services:
    "min-h-[100vh] py-5 px-2 flex flex-col items-start gap-10 bg-slate-100",
};
