const usersReducer = (state = { user: [], token: null, id: null }, action) => {
    switch (action.type) {
        case "LOG_IN_USER":
            return {
                token: action.payload.token,
                user: { firstName: action.payload.firstName, imageUrl: action.payload.imageUrl, _id: action.payload.id },
                id: action.payload._id,
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                user: null,
                token: null,
                id: null
            }
        case "LOG_IN_LS":

            return {
                token: action.payload.token,
                user: { firstName: action.payload.firstName, imageUrl: action.payload.imageUrl, _id: action.payload.id },
                id: action.payload._id
            }
        default:
            return {
                ...state
            }
    }
}

export default usersReducer