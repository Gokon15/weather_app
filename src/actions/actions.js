//Set searched city
export const setData = (data) => {
	return {
		type: "SET_CITY",
		data
	}
}

//Set storage of cities
export const setStorage = (data) => {
	return {
		type: "SET_STORAGE",
		data
	}
}

//Add city to storage
export const addCity = (data) => {
	return {
		type: "ADD_CITY",
		data
	}
}

//Remove city from storage
export const removeCity = (data) => {
	return {
		type: "REMOVE_CITY",
		data
	}
}


