import './Football.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import MainPage from './MainPage';
import React, { useState, useEffect } from 'react';
import youtubeApi from './Youtube'; // Import the youtubeApi instance


function Football() {
  
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await youtubeApi.get('/search', {
          params: {
            q: 'Oklahoma State football highlights',
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    fetchVideos();
  }, []);


  return (
    <div>
    <MainPage />
    <div id='header'>
      <Container id='header_container'>
      <Row id='row1' className='justify-content-center'>OSU Football</Row>
      <Row id='row2' align = "end"> 
        <DropdownButton 
          id="dropdown-button-sort"
          variant="secondary"
          title="Sort"
          className="mt-2"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1" id='highView'> Highest View </Dropdown.Item>
          <Dropdown.Item href="#/action-2" id= 'lowView'>Lowest View</Dropdown.Item>
          <Dropdown.Item href="#/action-3" id='oldest'>Oldest</Dropdown.Item>
          <Dropdown.Item href="#/action-4" id='recent'>Recent</Dropdown.Item>
        </DropdownButton>
      </Row>
    </Container>
    </div>

    <div>
      {/* Filter By and VIDEOS HERE section */}
      <Container bg>
        <Row id='row4'>
          <Col id="col1">Filter By</Col>
          <Col id="col2" align="center">
            {/* Render videos as a list */}
            <ul>
              {videos.map(video => (
                <li key={video.id.videoId} className="video-item">
                  <h3>{video.snippet.title}</h3>
                  <iframe
                  title = "OSU Football Highlights"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>


    </div>
  );
}


export default Football;
