import token from '../../assets/Token';

export const url = "https://api.github.com/user?access_token=" + token;
const reposUrl = "https://api.github.com/users/BraneOpacicBM/repos";


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

export const closeUserFeedback = () => {
    return {
        type: 'CLOSE_USER_FEEDBACK'
    }
}

const updateStateWithFeedback = (feedType, value) => {
    return {
        type: 'UPDATE_STATE_WITH_FEEDBACK',
        value: value,
        feedType: feedType
    }
}

const handleRepos = (repos) => {
    return {
        type: 'HANDLE_REPOS',
        repos: repos
    }
}
export const getGitRepos = () => {
    return dispatch => {
        fetch(reposUrl)
            .then(res => res.json())
            .then(res => dispatch(handleRepos(res)))
            .catch(err => err)
    }
}

export const changeUserFeedback = (feedback) => {

    return dispatch => {

        const obj = {
            method: 'PATCH',
            body: JSON.stringify({
                [feedback.type]: feedback.value
            })
        }
        fetch(url, obj)
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(resJson => {
                const feedbackType = feedback.type;
                const feedbackValue = resJson[feedback.type];
                dispatch(updateStateWithFeedback(feedbackType, feedbackValue))
            })


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