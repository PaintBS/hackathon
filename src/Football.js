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

  
  
    const fetchVideos = async (year = '') => {
      try {
        const api = youtubeApi(); // Call the youtubeApi function to get the Axios instance
        const response = await api.get('/search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            q: year ? 'Oklahoma State football' + year : 'Oklahoma State football',

          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    useEffect(() => {
    fetchVideos();
  }, []);

  function handleYearSelect(year) {
    // Construct the search query string with the selected year
    const searchTermWithYear = 'Oklahoma State football highlights' + year;
    fetchVideos(searchTermWithYear); // Call fetchVideos with the updated search query
  }
  
  return (
    <div>
    <MainPage/>
    <div id='header'>
      <body>
      <Container id='header_container'>
      <Row id='row1' className='justify-content-center' >OSU Football</Row>
    </Container>
    </body>
    </div>

    <div>
        <Container bg>
          <Row id='row4'>
            <Col id="col1" align="start">Filter By</Col>
            <Col id="col2" align="start">
              <DropdownButton 
                id="dropdown-button-year"
                variant="secondary"
                title="Year"
                className="mt-2"
                data-bs-theme="light"
              >    
                {/* Example filter options */}
                <Dropdown.Item onClick={() => handleYearSelect('2023')} id='year_dropdown'>2023</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')} id='year_dropdown'>2022</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')} id='year_dropdown'>2021</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')} id='year_dropdown'>2020</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')} id='year_dropdown'>2019</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')} id='year_dropdown'>2018</Dropdown.Item>
                <Dropdown.Item onClick={() => handleYearSelect('2022')} id='year_dropdown'>2017</Dropdown.Item>
                {/* Add more options as needed */}
              </DropdownButton>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
      {/* Filter By and VIDEOS HERE section */}
      <Container bg>
        <Row id='row4'>
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
