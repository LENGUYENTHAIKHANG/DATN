import { GLOBALTYPES } from './globalTypes'
import { getDataAPI } from '../../utils/fetchData'

export const STORY_TYPES = {
    LOADING: 'LOADING_ALLPOST',
    GET_POSTS: 'GET_ALL_POSTS',
    UPDATE_POST: 'UPDATE_ALL_POST'
}

export const getAllPosts = (token) => async (dispatch) => {
    try {
        dispatch({type: STORY_TYPES.LOADING, payload: true})

        const res = await getDataAPI(`getallpost`)
        dispatch({type: STORY_TYPES.GET_POSTS, payload: res.data})

        dispatch({type: STORY_TYPES.LOADING, payload: false})

    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
    }
}