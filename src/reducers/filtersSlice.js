const initialState = {
    status: "All"
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "filters/statusFilterChanged": {
            return {
                status: action.payload
            }
        }
        
        default: return state;
    }
}

export default filtersReducer;