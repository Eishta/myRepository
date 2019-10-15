import { combineReducers } from 'redux';



const postListReducer = (state = null, action) => {
    if (action.type === 'FETCH_POSTS'){
        return action.payload;
    }
    return state;
}



const userReducer = (state = [], action) => {
    if (action.type === 'FETCH_USER'){
        return [...state, action.payload];
    }
    return state;
}

export default combineReducers({
    posts: postListReducer,
    users: userReducer
})