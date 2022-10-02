import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDjHz16g5iBTGwAcshCH0D_sOT2XRtY1sc",
	authDomain: "react-authetication-f80dd.firebaseapp.com",
	projectId: "react-authetication-f80dd",
	storageBucket: "react-authetication-f80dd.appspot.com",
	messagingSenderId: "318243228479",
	appId: "1:318243228479:web:2652d8282fa5fe11c7618a",
	measurementId: "G-6QZNNZ7K9G",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
