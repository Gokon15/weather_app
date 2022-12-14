export const setData = (data) => {
	return {
		type: "SET_CITY",
		data
	}
}

export const setStorage = (data) => {
	return {
		type: "SET_STORAGE",
		data
	}
}

export const addCity = (data) => {
	return {
		type: "ADD_CITY",
		data
	}
}

export const removeCity = (data) => {
	return {
		type: "REMOVE_CITY",
		data
	}
}


