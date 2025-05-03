// firebase/firestore.js
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Add a product
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), productData);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Get all products
export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });
  return products;
};
