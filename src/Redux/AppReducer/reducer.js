import * as types from "./actionTypes";

const initialState = {
	homeData: [],
	isLoading: false,
	isError: false,
};
const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.GET_HOMEDATA_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case types.GET_HOMEDATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				homeData: payload,
			};
		case types.GET_HOMEDATA_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};

export { reducer };
