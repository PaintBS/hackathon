import React, { useState, useEffect } from 'react';
import fetchVideos from './fetchVideos';

const YoutubeComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const searchQuery = 'Oklahoma State University sports highlights';
    fetchVideos(searchQuery).then((videos) => {
      setVideos(videos);
    });
  }, []);

  return (
    <div>
      <h1>YouTube Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeComponent;
