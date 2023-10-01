import React, { useEffect, useState } from "react";
import { List, TitleForPage } from "../../components";
import {
  getAddress,
  getGarageImage,
  getTelNumbers,
} from "../../firebase/functions/contact";

function Contact() {
  const [tellNumbers, setTellNumbers] = useState<
    { name: string; link: string }[]
  >([]);
  const [isLoadingNumbers, setIsLoadingNumbers] = useState<boolean>(true);

  const [image, setImage] = useState<string>("");
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const [addresses, setAddresses] = useState<{ name: string; link: string }[]>(
    []
  );
  const [isLoadingAddresses, setIsLoadingAddresses] = useState<boolean>(true);

  useEffect(() => {
    setTellNumbers([]);
    setIsLoadingNumbers(true);
    getTelNumbers()
      .then((data) => {
        if (data) {
          data.number.forEach((item) => {
            setTellNumbers((prev) => {
              return [...prev, { name: item, link: `tel:${item}` }];
            });
          });
        }
      })
      .finally(() => {
        setIsLoadingNumbers(false);
      });
  }, []);

  useEffect(() => {
    setImage("");
    setIsImageLoading(true);
    getGarageImage()
      .then((data) => {
        if (data) {
          setImage(data.url);
        }
      })
      .finally(() => {
        setIsImageLoading(false);
      });
  }, []);

  useEffect(() => {
    setAddresses([]);
    setIsLoadingAddresses(true);
    getAddress()
      .then((data) => {
        if (data) {
          data.address.forEach((item) => {
            setAddresses((prev) => {
              return [...prev, { name: item.name, link: `https:${item.url}` }];
            });
          });
        }
      })
      .finally(() => {
        setIsLoadingAddresses(false);
      });
  }, []);
  return (
    <section id="contact" className={styles.contact}>
      <TitleForPage title="Biz bilan bog'lanish" />

      <hr className="w-full border-black" />
      <picture className="w-full flex flex-col gap-2">
        <p className="text-left pl-10 font-semibold  text-sky-400">
          Garaj ko'rinishi
        </p>

        <picture className="w-[300px] h-[300px] relative overflow-hidden flex justify-center items-center rounded-xl mx-auto shadow-md">
          {isImageLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <div className="animate-spin inline-block w-12 h-12 border-t-4 border-l-4 border-black rounded-full" />
            </div>
          ) : (
            <>
              {!image.length ? (
                <p>Xali ma'lumot qo'shilmagan</p>
              ) : (
                <img src={image} alt="garage" className="w-full h-full" />
              )}
            </>
          )}
        </picture>
      </picture>

      <List
        name="Telefon raqamlar"
        list={tellNumbers}
        isLoading={isLoadingNumbers}
      />

      <List
        name="Electron manzillar"
        list={addresses}
        isLoading={isLoadingAddresses}
      />
    </section>
  );
}

export default Contact;

const styles = {
  contact:
    "min-h-[100vh] py-5 px-2 flex flex-col items-start gap-5 bg-slate-100",
};
