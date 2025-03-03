import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

const YouTubePlaylist = () => {
    const videos = [
        'https://www.youtube.com/embed/ZtF6VPqWvIE?si=hG4MVdLCbsnz1xEW',
        'https://www.youtube.com/embed/I7D9_k_k5tE?si=FJqgT5UQZMWiGwoZ',
        'https://www.youtube.com/embed/v5Cend5kZOg?si=fvnWxEGYmV-Zr4GF',
    ]

    return (
        <Container className='mt-4'>
            <Row>
                {videos.map((url, index) => (
                    <Col key={url} sm={12} md={6} lg={4} className='mb-4'>
                        <Card>
                            <Card.Body>
                                <div className='ratio ratio-16x9'>
                                    <iframe
                                        title={`video-${index}`}
                                        src={url}
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default YouTubePlaylist
