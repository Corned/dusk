const initialState = {
	token: null
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
	case "LOGIN":
		return {
			token: action.token
		}
	case "LOGOUT":
		return initialState
	default:
		return state
	}
}

export const login = (token) => {
	return async (dispatch) => {
		window.localStorage.setItem("DUSK-token", token)
		dispatch({
			type: "LOGIN",
			token
		})
	}
}

export const logout = () => {
	return async (dispatch) => {
		window.localStorage.removeItem("DUSK-token")
		dispatch({
			type: "LOGOUT"
		})
	}
}

export default reducer