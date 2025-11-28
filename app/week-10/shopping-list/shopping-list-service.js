// _services/shopping-list-service.js
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

/**
 * Get all items for a user
 */
export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

/**
 * Add a new item for a user
 */
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
