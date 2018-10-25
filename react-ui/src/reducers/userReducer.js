import userService from "../services/userService"

const initialState = {
	list: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_USERS":
			return {
				list: action.data,
				current: state.current
			}
		default:
			return state
	}
}

export const getAllUsers = () => {
	return async (dispatch) => {
		const users = await userService.getAllUsers()
		
		dispatch({
			type: "INIT_USERS",
			data: users
		})
	}
}

export default reducer