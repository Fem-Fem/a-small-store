export default function usersReducer(state = {
	users: [{'obafad94@gmail.com':'obafad94@gmail.com'}],
	current_user: {}
}, action) {


	switch(action.type) {
		case 'GET_USERS':
			return {
				state
			}

		case 'ADD_USER':
			return {
				...state,
				users: [
					...state.users,
					action.payload
				]
			}

		case 'LOG_IN':
			return {
				...state,
				current_user: [
					action.payload
				]
			}

		case 'LOG_OUT':
			return {
				...state,
				current_user: []
			}
			
		default:
			return state;
	}
};