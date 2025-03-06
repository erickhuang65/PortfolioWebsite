import React from 'react'
import './Contact.css/'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {

  const sendEmail = (e) => {
    
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailForm, 
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(
      (response) => {
        console.log("EMAIL SUCCESS", response.status, response.text);
        alert("Sent! I will get back to you within a few business days.")
        window.location.reload();
      },
      (error) => {
        console.log("FAILED...", error)
        alert("Failed to send the email, please try again.")
      },
    );
  }

  return (
    <div className='contact-page'>
      <div className='left-container'>
        <h1>Contact Me</h1>
        <p>
          <span>Hello, thanks for stopping by!</span>
        </p>
        <p>
          <span>If you have any other inquiries don't hesitate to reach out by filling out the form.</span>
        </p>
        <p>
          <span>Look forward to hearing from you soon!</span>
        </p>
        <a
        href='https://www.linkedin.com/in/erickhuang'
        target="_blank"
        rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size='5x' />
        </a>
      </div>
      <div className ='form-container'>
      <form id='emailForm' onSubmit={sendEmail} action="email-form">
        <div className='form'>
          <input type="text" placeholder='First Name' name='first_name' />
          <input type="text" placeholder='Last Name' name='last_name' />
        </div>
        <div className='form'>
          <input type="text" placeholder='Email' name="user_email" />
        </div>
        <div className='form'>
          <input type="text" placeholder='Subject' name="subject" />
        </div>
        <div className='form'>
          <textarea className='text-area' name="message" placeholder='Message' id="message_id"></textarea>
        </div>
          <button className='contact-button'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
