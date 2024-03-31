const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/youtube', async (req, res) => {
  try {
    const youtubeResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'YOUR_YOUTUBE_API_KEY',
        q: 'Oklahoma State football highlights',
      },
    });
    res.send(youtubeResponse.data);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).send('Error fetching videos');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});