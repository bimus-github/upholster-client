import React from "react";
import { List, TitleForPage } from "../../components";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <TitleForPage title="Biz bilan bog'lanish" />

      <List
        name="Telefon raqamlar"
        list={["+998 99 999 99 99", "+998 99 999 99 99"]}
        tell
      />
    </section>
  );
}

export default Contact;

const styles = {
  contact:
    "min-h-[100vh] py-5 px-2 flex flex-col items-start gap-10 bg-slate-100",
};
