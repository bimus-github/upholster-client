import { doc, getDoc } from "firebase/firestore";
import { db } from "..";
import { Address_Type } from "../../types";

const collection_name = "info";

export const getTelNumbers = async () => {
  try {
    const docRef = doc(db, collection_name, "number");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data() as { number: string[] };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (err) {
    console.log("Error while getting numbers: ", err);
  }
};

export const getGarageImage = async () => {
  try {
    const docRef = doc(db, collection_name, "garageImage");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data() as { url: string };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (err) {
    console.log("Error while getting garage image: ", err);
  }
};

export const getAddress = async () => {
  try {
    const docRef = doc(db, collection_name, "address");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data() as { address: Address_Type[] };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (err) {
    console.log("Error while getting address: ", err);
  }
};
