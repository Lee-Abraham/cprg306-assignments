import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

/**
 * getItems(userId)
 * Returns array of { id, ...data } for the given user
 */
export async function getItems(userId) {
  if (!userId) return [];
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef, orderBy("name"));
    const snapshot = await getDocs(q);
    const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    return items;
  } catch (err) {
    console.error("Error getting items from Firestore:", err);
    return [];
  }
}

/**
 * addItem(userId, item)
 * item should be an object { name, quantity, category }
 * returns the new document id
 */
export async function addItem(userId, item) {
  if (!userId || !item) throw new Error("Missing userId or item");
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (err) {
    console.error("Error adding item to Firestore:", err);
    throw err;
  }
}

/**
 * deleteItem(userId, itemId)
 * deletes an item document
 */
export async function deleteItem(userId, itemId) {
  if (!userId || !itemId) throw new Error("Missing userId or itemId");
  try {
    const itemDoc = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemDoc);
    return true;
  } catch (err) {
    console.error("Error deleting item:", err);
    throw err;
  }
}
