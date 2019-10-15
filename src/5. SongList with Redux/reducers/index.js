import { combineReducers } from 'redux';

const songListReducer = () => {
    return [
        {
            title: 'dil pagal hai',
            duration: '2:30'
        },
        {
            title: 'dil hai ki manta nahi',
            duration: '2:50'
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        console.log('red', action)
        return action.payload;
    }
        

    return selectedSong;
}

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
})