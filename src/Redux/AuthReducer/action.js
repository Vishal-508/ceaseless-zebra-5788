import {
	AUTH_FAILURE,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	GOOGLE_SUCCESS,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
} from "./actionTypes";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Components/Firebase/firebase";

export const Signup = (email, password) => async (dispatch) => {
	// console.log(email,password)
	dispatch({ type: AUTH_REQUEST });
	try {
		let res = await createUserWithEmailAndPassword(auth, email, password);
		//console.log(res);
		dispatch({ type: AUTH_SUCCESS, payload: res.user.uid });
	} catch (err) {
		alert(err);
		dispatch({ type: AUTH_FAILURE });
	}
};

export const LoginData = (email, password) => async (dispatch) => {
	dispatch({ type: AUTH_REQUEST });
	try {
		let res = await signInWithEmailAndPassword(auth, email, password);
		console.log(res);
		dispatch({ type: LOGIN_SUCCESS, payload: res.user.uid });
	} catch (err) {
		dispatch({ type: AUTH_FAILURE });
		alert(err);
	}
};

export const Signup_google = () => async (dispatch) => {
	try {
		const googleauth = new GoogleAuthProvider();
		const res = await signInWithPopup(auth, googleauth);
		console.log(res);
		dispatch({
			type: GOOGLE_SUCCESS,
			// payload: res.user.uid,
			payload: { token: res.user.uid, photo: res.user.photoURL },
		});
		// return signInWithPopup(auth, googleauth)
	} catch (err) {
		dispatch({ type: AUTH_FAILURE });
		// console.log(err)
		alert(err);
	}
};

export const Logout = () => ({ type: LOGOUT_SUCCESS });
