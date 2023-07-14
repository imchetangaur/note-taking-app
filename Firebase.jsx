import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBAPyGc-v50AuINaxP79gBDV-xq4pGN0v4",
	authDomain: "react-note-b4161.firebaseapp.com",
	projectId: "react-note-b4161",
	storageBucket: "react-note-b4161.appspot.com",
	messagingSenderId: "814748327062",
	appId: "1:814748327062:web:ea25da32d0968c692076b7",
	measurementId: "G-REQ7ZCMJ0L",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const notesCollection = collection(db, "notes");
