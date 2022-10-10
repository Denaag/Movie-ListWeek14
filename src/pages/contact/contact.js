import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './contact.css';

const ContactPage = () => { // this will be the contact form

    return (<div className='m-5 text-white'>
    <h2 className="text-white text-center mt-5"> Contact Us</h2>
    <Form className="form-container">
    <Form.Group className="mb-4" controlId='form-name'>
           <Form.Label>Name</Form.Label>
           <Form.Control type='text' required placeholder='Enter your Name'></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4" controlId='form-emailId'>
           <Form.Label>Email</Form.Label>
           <Form.Control type='email' required placeholder='Enter your Email Address'></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4" controlId='form-feedback'>
           <Form.Label>Feedback</Form.Label>
            <Form.Control as={`textarea`} row={7} style={{height:'100px'}} placeholder="Enter you Feedback" />
        </Form.Group>
        <Button type='submit'>Submit</Button>
    </Form>
    <div className='d-flex'>
      <Link to='/' className="flex-end back-button">
      <Button >Back To Home</Button>
      </Link>  
    </div>
</div>)
}

export default ContactPage;