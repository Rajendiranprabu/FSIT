const initialState = {
    courseList: null
}


const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COURSES":
            console.log(action.type)
            return {
                ...state,
                courseList: action.pload
            }


        default:
            return state;
    }
}

export default courseReducer;