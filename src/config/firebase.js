// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtsFqm_v_9peNogu62Bpbd-kRKRL8pEBY",
  authDomain: "basketdrip-35af8.firebaseapp.com",
  projectId: "basketdrip-35af8",
  storageBucket: "basketdrip-35af8.appspot.com",
  messagingSenderId: "292723025780",
  appId: "1:292723025780:web:7d9bceb59e3460846a6e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Bucle para agregar los productos a la base de datos
// productos.forEach((prod) => {
//     addDoc(collection(db, 'productos'), prod)
// });
