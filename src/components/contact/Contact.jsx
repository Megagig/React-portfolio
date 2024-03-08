import React from 'react';
import './contact.css';
import { MdAttachEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>megagigsolution@gmail.com</h5>
            <a href="mailto: megagigsolution@gmail.com" target="_blank">
              Send Email
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Email</h4>
            <h4>Messenger</h4>
            <h5>Austinopharm</h5>
            <a href="https://m.me/austinopharm/" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348060374755</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2348060374755"
              target="_blank"
            >
              Send a Direct Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
