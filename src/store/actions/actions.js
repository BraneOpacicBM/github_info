const setGitHubInfo = (info) => {
    return {
        type: 'SET_GITHUB_INFO',
        info: info
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