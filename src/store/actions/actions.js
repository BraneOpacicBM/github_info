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

export const changeUserFeedback = (feedback) => {

    return dispatch => {
        const url = "https://api.github.com/user?access_token=dd356c3725013f73396189e0780d9228ee2b5241";
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