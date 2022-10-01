import {
	AUTH_FAILURE,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	GOOGLE_SUCCESS,
	LOGIN_SUCESS,
	LOGOUT_SUCCESS,
} from "./actionTypes";

const initialData = {
	isLoading: false,
	isError: false,
	isAuth: false,
	token: localStorage.getItem("token") || "",
};

export const authReducer = (state = initialData, { type, payload }) => {
	switch (type) {
		case AUTH_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}

		case AUTH_SUCCESS: {
			localStorage.setItem("token", payload.token);
			return {
				...state,
				loading: false,
				error: false,
				isAuth: true,
				token: payload,
			};
		}
		case LOGIN_SUCESS: {
			localStorage.setItem("token", payload.token);
			return {
				...state,
				loading: false,
				error: false,
				isAuth: true,
				token: payload,
			};
		}

		case GOOGLE_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				isAuth: true,
				token: payload,
			};
		}

		case AUTH_FAILURE: {
			return {
				...state,
				loading: false,
				error: true,
				isAuth: false,
			};
		}

		case LOGOUT_SUCCESS: {
			localStorage.removeItem("token");
			return {
				...state,
				loading: false,
				error: false,
				isAuth: false,
				token: "",
			};
		}

		default: {
			return state;
		}
	}
};
