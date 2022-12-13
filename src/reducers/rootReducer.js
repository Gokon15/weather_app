const initState = {
	currentCity: '',
	storage: JSON.parse(localStorage.getItem('fav')) ? JSON.parse(localStorage.getItem('fav')) : '',
	id: localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : []
}

const rootReducer = (state = initState, action) => {

	if (action.type === "SET_CITY") {
		return {
			...state,
			currentCity: action.data
		}
	}

	if (action.type === "ADD_CITY") {
		return {
			...state,
			id: [...state.id, action.data]
		}
	}

	if (action.type === "REMOVE_CITY") {
		return {
			...state,
			id: state.id.filter(val => val !== action.data)
		}
	}

	if (action.type === "SET_STORAGE") {
		return {
			...state,
			storage: action.data
		}
	}


	return state;

}

export default rootReducer;