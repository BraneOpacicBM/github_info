const initialState = {
    info: null,
    repos: null,
    changeName: false,
    changeLocation: false,
    changeBlog: false,
    changeCompany: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GITHUB_INFO':
            return {
                ...state,
                info: action.info
            }
        case 'GET_USER_FEEDBACK':
            switch (action.param.type) {
                case 'name':
                    return {
                        ...state,
                        changeName: true,
                        changeLocation: false,
                        changeBlog: false,
                        changeCompany: false
                    }
                case 'location':
                    return {
                        ...state,
                        changeName: false,
                        changeLocation: true,
                        changeBlog: false,
                        changeCompany: false
                    }
                case 'blog':
                    return {
                        ...state,
                        changeName: false,
                        changeLocation: false,
                        changeBlog: true,
                        changeCompany: false
                    }
                case 'company':
                    return {
                        ...state,
                        changeName: false,
                        changeLocation: false,
                        changeBlog: false,
                        changeCompany: true
                    }
                default:
                    return {
                        ...state
                    }
            }
        case 'CLOSE_USER_FEEDBACK':
            return {
                ...state,
                changeBlog: false,
                changeName: false,
                changeCompany: false,
                changeLocation: false
            }
        case 'UPDATE_STATE_WITH_FEEDBACK':
            return {
                ...state,
                info: {
                    ...state.info,
                    [action.feedType]: action.value
                }
            }
        case 'HANDLE_REPOS':
            return {
                ...state,
                repos: action.repos
            }
        default:
            return state;
    }
}

export default reducer;