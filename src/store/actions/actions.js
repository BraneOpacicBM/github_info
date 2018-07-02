const setGitHubInfo = (info) => {
    return {
        type: 'SET_GITHUB_INFO',
        info: info
    }
}

export const getUserFeedback = (param) => {
    return {
        type: 'GET_USER_FEEDBACK',
        param: param
    }
}

export const getGitHubInfo = (url) => {
    return dispatch => {
        fetch(url)
    .then(res => res.json())
    .then(res => dispatch(setGitHubInfo(res)))
    .catch(err => console.log(err))
    }
}