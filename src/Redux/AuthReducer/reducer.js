import {
	AUTH_FAILURE,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	GOOGLE_SUCCESS,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
} from "./actionTypes";

const initialData = {
	isLoading: false,
	isError: false,
	isAuth: false,
	token: localStorage.getItem("token") || "",
	photourl:
		localStorage.getItem("photourl") ||
		"https://toppng.com//public/uploads/preview/avatar-png-11554021819gij72acuim.png",
};

export const authReducer = (state = initialData, { type, payload }) => {
	switch (type) {
		case AUTH_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}

		case AUTH_SUCCESS: {
			localStorage.setItem("token", payload);
			return {
				...state,
				isLoading: false,
				isError: false,
				isAuth: true,
				token: payload,
			};
		}
		case LOGIN_SUCCESS: {
			localStorage.setItem("token", payload);
			return {
				...state,
				isLoading: false,
				isError: false,
				isAuth: true,
				token: payload,
			};
		}

		case GOOGLE_SUCCESS: {
			localStorage.setItem("token", payload.token);
			localStorage.setItem("photourl", payload.photo);
			return {
				...state,
				isLoading: false,
				isError: false,
				isAuth: true,
				token: payload.token,
				photourl: payload.photo,
			};
		}

		case AUTH_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
				isAuth: false,
			};
		}

		case LOGOUT_SUCCESS: {
			localStorage.removeItem("token");
			return {
				...state,
				isLoading: false,
				isError: false,
				isAuth: false,
				token: "",
			};
		}

		default: {
			return state;
		}
	}
};
