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
import youtubeApi from './Youtube';
 // Import the youtubeApi instance


function Football() {
  
  const [videos, setVideos] = useState([]);

  
    async function fetchVideos(year = '') {
      try {
        const response = await youtubeApi.get('/search', {
          params: {
            part: 'snippet',
            maxResults: 15, 
            q: 'Oklahoma State football highlights ' + year, // Replace the template literal with string concatenation
          },
        });
        console.log('Response data:', response.data);
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
    useEffect(() => {
    fetchVideos();
  }, []);

  function handleYearSelect(year) {
    fetchVideos(year); // Call fetchVideos with the selected year
  }
  return (
    <div>
    <MainPage />
    <div id='header'>
      <body>
      <Container id='header_container'>
      <Row id='row1' className='justify-content-center' >OSU Football</Row>
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
    </body>
    </div>

    <div>
        <Container bg>
          <Row id='row4'>
            <Col id="col1">Filter By</Col>
            <Col id="col2" align="center">
              <DropdownButton 
                id="dropdown-button-year"
                variant="secondary"
                title="Year"
                className="mt-2"
                data-bs-theme="light"
              >
                {/* Example filter options */}
                <Dropdown.Item onClick={() => handleYearSelect('2023')}>2023</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')}>2022</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')}>2021</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')}>2020</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')}>2019</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')}>2018</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')}>2017</Dropdown.Item>
                {/* Add more options as needed */}
              </DropdownButton>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container bg>
          <Row id='row4'>
            <Col id="col1"></Col>
            <Col id="col2" align="center">
              <div className="video-container">
                {videos.map(video => (
                  <div key={video.id.videoId} className="video-item">
                    <h3>{video.snippet.title}</h3>
                    <iframe
                      title="OSU Football Highlights"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}


export default Football;
