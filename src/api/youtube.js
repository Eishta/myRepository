import axios from 'axios';

const KEY='AIzaSyAdvI6JedDfvkVgEARDMSMvDSc2fN8U-FE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:5,
        key: KEY
    }
})