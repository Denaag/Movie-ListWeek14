import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './about.css';

const AboutPage = () => {

    return (<div className='m-5 text-white'>
        <h2 className="text-white text-center mt-5"> About Us</h2>
     <h5> About starts here</h5>
        <p className='m-4 about-text-container'>
Description will go here        </p>
        <p className='m-4 about-text-container'>
        Topic
Text will go here        </p>
        <h5>   Where does it come from?</h5>
        <p className='m-4 about-text-container'>
      
Text will go here
        </p>

        <div className='d-flex'>
          <Link to='/'  className="flex-end back-button">
          <Button>Back To Home</Button>
          </Link>  
        </div>
    </div>)
}   

export default AboutPage;