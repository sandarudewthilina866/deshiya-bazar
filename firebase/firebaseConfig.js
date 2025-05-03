// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHh89xwpUpOCm-Pj6BtogA-eiA7_Yqows",
    authDomain: "sd-1-deshiya-bazar.firebaseapp.com",
    databaseURL: "https://sd-1-deshiya-bazar-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sd-1-deshiya-bazar",
    storageBucket: "sd-1-deshiya-bazar.firebasestorage.app",
    messagingSenderId: "1051018887066",
    appId: "1:1051018887066:web:c7d3268ad9be7d201f4423",
    measurementId: "G-D9C8E5DHER"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);



// firebase/firestore.js


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
