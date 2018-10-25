import axios from "axios"

const baseUrl = "/api/user"

const getAllUsers = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const register = async (data) => {
	const response = await axios.post(baseUrl, data)
	return response.data
}


export default { 
	getAllUsers,
	register
}