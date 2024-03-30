import axios from 'axios';

const fetchVideos = async () => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'Oklahoma State University sports highlights',
        type: 'video',
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

export default fetchVideos;
