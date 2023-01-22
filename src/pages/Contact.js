import React, {  useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';
import { validateEmail } from '../utils/helpers';
import { capitalizeFirstLetter } from '../utils/helpers';

 const Contact= () => {
  const form = useRef();
  const [pages] = useState([
    {
        name: "contact"
    }
]);

const [currentPage] = useState(pages[0]);

const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
});
const [errorMessage, setErrorMessage] = useState('');
const { name, email, message } = formState;


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
    } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
    }
    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
    }
};

  return (
    <Container  className=' '>
        
     <form className='email' ref={form} onSubmit={sendEmail}>
      <label className='fs-2'>Name</label>
      <input type="text" onBlur={handleChange} name="user_name" />
      <label className='fs-2'>Email</label>
      <input type="email" onBlur={handleChange} name="user_email" />
      <label>Message</label>
      <textarea  onBlur={handleChange} name="message" />
      <button type="submit" className="btn btn-primary btn-xl js-scroll-trigger">Submit</button>
    </form>
    </Container>
  );
};

export default Contact;