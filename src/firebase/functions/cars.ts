import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "..";
import { Car_Type } from "../../types";

const collection_name = "cars";

export const getCars = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, collection_name));
    const cars: Car_Type[] = [];

    if (querySnapshot.empty) {
      return null;
    }

    querySnapshot.forEach((doc) => {
      cars.push(doc.data() as Car_Type);
    });

    return cars;
  } catch (err) {
    console.log("Error while getting cars: ", err);
  }
};

export const getCar = async (name: string) => {
  try {
    const docRef = doc(db, collection_name, name);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as Car_Type;
    } else {
      return null;
    }
  } catch (err) {
    console.log("Error while getting car: ", err);
  }
};

export const getServiceOfTheCar = async (name: string, serviceName: string) => {
  try {
    const docRef = doc(db, collection_name, name);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const services = docSnap.data().services as Car_Type["services"];

      const service = services.find((service) => service.name === serviceName);

      if (service && service.items.length !== 0) {
        return service;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error while getting service of the car: ", error);
  }
};
