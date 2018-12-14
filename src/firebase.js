import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyB_9qTycrtHpHSRiwJGtzPKQzu6CKXTjM0",
    authDomain: "wishlist-41b65.firebaseapp.com",
    databaseURL: "https://wishlist-41b65.firebaseio.com",
    projectId: "wishlist-41b65",
    storageBucket: "",
    messagingSenderId: "98768965427"
  });

export const db = app.database();
export const namesRef = db.ref('names');