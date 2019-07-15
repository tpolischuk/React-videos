import axios from 'axios';

const KEY = 'AIzaSyBdXoqh9Tv2A0h6LIZ0oy2S3cRPPKJq-bg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});