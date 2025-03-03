import React, {useState} from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";

const VideoUploadForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        sports: "",
        frontView: null,
        sideView: null,
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const {name} = e.target;
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            [name]: file,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle the form submission logic here (e.g., send data to a server)
        console.log("Form Data Submitted:", formData);
    };

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Golf Swing Video Upload</h2>
            <Form onSubmit={handleSubmit}>
                <p className="mb-3">
                    Please upload two videos of your golf swing. The first video should be a face-on view with the
                    camera positioned at hip height and centered on you. The second video should be a back view with the
                    camera positioned at hip height and directly behind you.
                </p>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formFrontView">
                            <Form.Label>Front View Video</Form.Label>
                            <Form.Control
                                type="file"
                                name="frontView"
                                accept="video/*"
                                onChange={handleFileChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formSideView">
                            <Form.Label>Side View Video</Form.Label>
                            <Form.Control
                                type="file"
                                name="sideView"
                                accept="video/*"
                                onChange={handleFileChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSports">
                    <Form.Label>Sports You Play</Form.Label>
                    <Form.Control
                        type="text"
                        name="sports"
                        placeholder="Enter sports you play"
                        value={formData.sports}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formComments">
                    <Form.Label>Additional Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="comments"
                        placeholder="Enter any additional comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default VideoUploadForm;