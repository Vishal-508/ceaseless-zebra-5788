import * as types from "./actionTypes";

const initialState = {
	homeData: [],
	sideData:{},
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
			case types.GET_HOME_SIDEBAR_DATA_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case types.GET_HOME_SIDEBAR_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				sideData: payload,
			};
		case types.GET_HOME_SIDEBAR_DATA_FAILURE:
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
