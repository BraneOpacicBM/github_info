const initialState = {
    info: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_GITHUB_INFO':
            return {
                ...state,
                info: action.info
            }
        default:
        return state;
    }
}

export default reducer;