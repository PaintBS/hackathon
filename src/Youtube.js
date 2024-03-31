import axios from 'axios';

const KEY= 'AIzaSyDLFRm8YtoDxtAOXdNmfkIeGAiA1i8f66A'


export default axios.create({
    baseURL: 'https:www.googleapis.com/youtube/v3/videos ',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

/*
const axios = require('axios');
async function fetchVideoDetails(videoId, apiKey) {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet',
                id: videoId,
                key: apiKey
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching video details:', error);
        throw error;
    }
}

// Export the function so it can be used in other parts of the project
module.exports = {
    fetchVideoDetails
};
*/