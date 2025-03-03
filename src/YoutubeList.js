import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

const YouTubePlaylist = () => {
    const videos = [
        {
            id: 1,
            title: "Sample Video",
            url: "https://www.youtube.com/embed/ZtF6VPqWvIE?si=hG4MVdLCbsnz1xEW"
        },
        {
            id: 2,
            title: "YouTube video player",
            url: "https://www.youtube.com/embed/I7D9_k_k5tE?si=FJqgT5UQZMWiGwoZ"
        },
        {
            id: 3,
            title: "YouTube video player",
            url: "https://www.youtube.com/embed/v5Cend5kZOg?si=fvnWxEGYmV-Zr4GF"
        },
    ];

    return (
        <Container className="mt-4">
            <Row>
                {videos.map((video) => (
                    <Col key={video.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{video.title}</Card.Title>
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default YouTubePlaylist;