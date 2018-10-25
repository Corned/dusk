import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import userReducer from "./reducers/userReducer"
import sessionReducer from "./reducers/sessionReducer"

const reducer = combineReducers({
	users: userReducer,
	session: sessionReducer,
})

const store = createStore(
	reducer,
	applyMiddleware(thunk)
)

export default store