import { useState } from 'react';

function ContactSection() {
  const [count, setCount] = useState(0);

  return (
    <section id='contact-section' className='Contact-Section'>
      <h2>&lt;Contact &#8725;&gt;</h2>
      <div className='contact-form'>
        <h4>
          Wanna contact me? Feel free to use form below or message me directly at this address:{' '}
          <a href='mailto:kamilsulimierski@gmail.com'>kamilsulimierski@gmail.com</a>
        </h4>
        <form target='_blank' action='https://formsubmit.co/kamilsulimierski@gmail.com' method='POST'>
          <div>
            <div className='contact-head'>
              <input type='text' name='name' placeholder='Your name' required></input>
              <input type='email' name='email' placeholder='Your email' required></input>
            </div>
            <div className='contact-body'>
              <textarea placeholder='Message' class='' name='message' rows='10' cols='50' required></textarea>
            </div>
          </div>
          <button type='submit' class=''>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
