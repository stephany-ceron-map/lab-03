import { collection, addDoc,Timestamp } from "firebase/firestore";
import { db } from "./config";

export async function save(data) {
  try {
    data.date = Timestamp.fromDate(new Date())
    const dbCollection = collection(db, 'transactions');
    const docRef = await addDoc(dbCollection, data);
    return docRef.id
  }
  catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}
