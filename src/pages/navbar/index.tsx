import React, { useEffect } from "react";
import { Tooltip } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  {
    id: "about",
    name: "Haqimizda",
  },
  {
    id: "services",
    name: "Xizmatlar",
  },
  {
    id: "design",
    name: "Dizayn",
  },
  {
    id: "contact",
    name: "Aloqa",
  },
];

function Navbar({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const header = document.getElementById("header");
    let start = window.scrollY;

    const hanldeScroll = () => {
      // find the height of the header
      const height = header?.offsetHeight;

      if (height) {
        // get the scroll position
        const end = window.scrollY;
        const diff = end - start;

        // get the percentage of the scroll by the height of the header
        if (diff > 0) {
          header.classList.add("translate-y-[-100%]");
        } else {
          header.classList.remove("translate-y-[-100%]");
        }

        start = end;
      }
      handleCloseSidebar();
    };

    window.addEventListener("scroll", hanldeScroll);

    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);
  const handleCloseSidebar = () => {
    const sidebar = document.getElementById("aside");
    sidebar?.classList.remove("translate-x-0");
    sidebar?.classList.add("translate-x-[100%]");
  };

  const handleOpenSidebar = () => {
    const sidebar = document.getElementById("aside");
    sidebar?.classList.remove("translate-x-[100%]");
    sidebar?.classList.add("translate-x-0");
  };

  return (
    <div className={styles.contanier}>
      <header
        className={`${styles.header} transition-transform duration-500 ease-in-out`}
        id="header"
      >
        <p className={styles.logo}>
          <strong>UPHOLSTER</strong>
        </p>

        <nav className={styles.navbar}>
          <ul className={styles.navUl}>
            {links.map((link) => (
              <React.Fragment key={link.id}>
                <a href={`#${link.id}`} className={styles.navLi}>
                  {link.name}
                </a>
              </React.Fragment>
            ))}
          </ul>
        </nav>

        <Tooltip title="Menu" onClick={handleOpenSidebar}>
          <button className={`${styles.iconBtn} sm:hidden`}>
            <MenuIcon />
          </button>
        </Tooltip>

        <aside id="aside" className={styles.aside}>
          <Tooltip title="Menuni yopish">
            <button className={styles.iconBtn} onClick={handleCloseSidebar}>
              <CloseIcon />
            </button>
          </Tooltip>
          <hr />

          <ul className={styles.navUl}>
            {links.map((link) => (
              <React.Fragment key={link.id}>
                <a href={`#${link.id}`} className={styles.navLi}>
                  {link.name}
                </a>
                <hr />
              </React.Fragment>
            ))}
          </ul>
        </aside>
      </header>

      <hr />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Navbar;

const styles = {
  contanier: "w-screen h-screen flex flex-col ",
  header:
    "h-[70px] fixed w-full bg-white flex justify-between items-center px-5 shadow-lg",
  navbar: "hidden opacity-0 sm:flex sm:opacity-100",
  aside:
    "flex opacity-100  sm:hidden sm:opacity-0 h-[100vh] w-[150px] bg-white fixed top-0 right-0 shadow-lg flex-col items-center py-5 gap-5 translate-x-[100%] transition-transform duration-500 ease-in-out ",
  logo: "cursor-pointer text-2xl",
  nav: "flex flex-col gap-2 w-full",
  navUl: "flex flex-col gap-2 w-full sm:flex-row md:gap-5 ",
  navLi:
    "hover:bg-slate-100 sm:hover:bg-white sm:hover:underline w-full text-center py-1 cursor-pointer",
  main: "mt-[70px] scroll-smooth overflow-y-scroll",
  iconBtn: " p-2 rounded-full hover:bg-slate-100",
};
