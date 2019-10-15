import jsonPlaceHolder from '../api/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndUsers=()=>async (dispatch, getState)=>{
    await dispatch(fetchPosts());
    debugger;
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=> dispatch(fetchUser(id)))
    .value()
}
export const fetchPosts = () => async (dispatch) => {
    const resp = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: resp.data
    })

};

export const fetchUser = (id) => async (dispatch) => {
  
    const resp = await jsonPlaceHolder.get(`/users/${id}`);
    console.log(resp.data)
        dispatch({
            type: 'FETCH_USER',
            payload: resp.data
        });
};

