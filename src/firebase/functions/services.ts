import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "..";
import { Service_Type } from "../../types";

const colection_name = "services";

export const getServices = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, colection_name));
    const services: Service_Type[] = [];

    if (querySnapshot.empty) {
      return null;
    }

    querySnapshot.forEach((doc) => {
      services.push(doc.data() as Service_Type);
    });
    return services;
  } catch (err) {
    console.log("Error while getting services: ", err);
  }
};

export const getService = async (name: string) => {
  try {
    const docRef = doc(db, colection_name, name);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as Service_Type;
    } else {
      return null;
    }
  } catch (err) {
    console.log("Error while getting service: ", err);
  }
};
