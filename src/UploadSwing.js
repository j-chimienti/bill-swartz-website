import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const VideoUploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    sports: '',
    faceOn: null,
    downTheLine: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const { name } = e.target
    const file = e.target.files[0]
    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Handle the form submission logic here (e.g., send data to a server)
    console.log('Form Data Submitted:', formData)
  }

  return (
    <Container className='mt-4 bg-dark text-white'>
      <h2 className='mb-4'>Golf Swing Video Upload</h2>
      <Form onSubmit={handleSubmit}>
        <p className='mb-3'>
          Please upload two videos of your golf swing. The first video should be
          a face-on view with the camera positioned at hip height and centered
          on you. The second video should be a down-the-line view with the
          camera positioned at hip height and directly behind you.
        </p>
        <Row>
          <Col md={6}>
            <Form.Group className='mb-3' controlId='formFaceOn'>
              <Form.Label>Face-On Video</Form.Label>
              <Form.Control
                type='file'
                name='faceOn'
                accept='video/*'
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='mb-3' controlId='formDownTheLine'>
              <Form.Label>Down-The-Line Video</Form.Label>
              <Form.Control
                type='file'
                name='downTheLine'
                accept='video/*'
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <h3 className='mb-4'>Tell Us About You</h3>
        <Form.Group className='mb-3' controlId='formTendencies'>
          <Form.Label>Tell Us About Your Game</Form.Label>
          <p>
            Please provide detailed information about your swing tendencies,
            common misses, and any specific feels or thoughts you have during
            your swing.
          </p>
          <Form.Control
            as='textarea'
            name='tendencies'
            placeholder='For example: My tendencies are to hit off the toe and hook the ball. Divots point out to the right.'
            value={formData.tendencies}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formHandicap'>
          <Form.Label>Your Current Handicap</Form.Label>
          <p>
            If you don't have an official handicap, please provide your best
            estimate.
          </p>
          <Form.Control
            type='text'
            name='handicap'
            placeholder='Enter your handicap or best estimate'
            value={formData.handicap}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formSports'>
          <Form.Label>Sports You Play or Played</Form.Label>
          <Form.Control
            type='text'
            name='sports'
            placeholder='basketball, soccer, etc.'
            value={formData.sports}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formComments'>
          <Form.Label>Additional Comments</Form.Label>
          <Form.Control
            as='textarea'
            name='comments'
            placeholder='Enter any additional comments'
            value={formData.comments}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default VideoUploadForm
