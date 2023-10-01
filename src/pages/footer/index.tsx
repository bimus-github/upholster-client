import React from "react";
import { ListFooter } from "../../components";

const footer = {
  contact: [
    {
      name: "Phone num.",
      link: "tel:(90) 161 71 69",
    },
    {
      name: "Telegram",
      link: "https://t.me/muhammad_amin_sherzod_aliy",
    },
    {
      name: "Email",
      link: "mailto:bimus2022@gmail.com",
    },
  ],
  mainLinks: [
    {
      name: "Haqimizda",
      link: "#about",
    },
    {
      name: "Xizmatlar",
      link: "#services",
    },
    {
      name: "Dizayn",
      link: "#design",
    },
    {
      name: "Aloqa",
      link: "#contact",
    },
  ],
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col items-center text-white gap-3">
        <p className="font-semibold text-[18px] ms:text-[20px] text-orange-500">
          UPHOLSTER
        </p>
        <a
          href="mailto:bimus2022@gmail.com"
          className="text-[12px] md:text-[14px] opacity-80"
        >
          Muhammad Amin Sherzod Aliy Production
        </a>
      </div>
      <ListFooter list={footer.mainLinks} title="Asosiy Sahifalar" />
      <ListFooter list={footer.contact} title="Aloqa" />
    </footer>
  );
}

export default Footer;

const styles = {
  footer:
    "w-full bg-slate-600 flex flex-col sm:flex-row items-center sm:items-start justify-around gap-5 py-5",
};
