import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './config';

/**
 * Load all documents from tasks collection
 * 
 * @returns 
 *  Array with the tasks.
 */
export async function load() {
  const data = [];
  const dbCollection = collection(db, 'transactions');
  const dbquery = query(dbCollection, orderBy('date', 'desc'));

  const querySnapshot = await getDocs(dbquery);
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id
    });
  });
  return data;
}