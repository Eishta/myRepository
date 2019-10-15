import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 33e633212a8d06118ff10dfdda5245dbc0ece5c8707215a57a220c5137fc7011'
    }
});