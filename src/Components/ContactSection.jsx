import { useState } from 'react';

function ContactSection() {
  const [count, setCount] = useState(0);

  return (
    <section id='contact-section' className='Contact-Section'>
      <h2 className='section-label'>&lt;Contact &#8725;&gt;</h2>
      <div className='contact-form card'>
        <h4>
          Wanna contact me? Feel free to use form below or message me directly at this address:{' '}
          <a href='mailto:kamilsulimierski@gmail.com'>
            kamilsulimierski@gmail.com
            <span>(Click to open in your mail app)</span>
          </a>
        </h4>
        <form target='_blank' action='https://formsubmit.co/kamilsulimierski@gmail.com' method='POST'>
          <div>
            <div className='contact-head'>
              <input className='input' type='text' name='name' placeholder='Your name' required></input>
              <input className='input' type='email' name='email' placeholder='Your email' required></input>
            </div>
            <div className='contact-body'>
              <textarea placeholder='Message' className='input' name='message' required></textarea>
            </div>
          </div>
          <button type='submit' className=''>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
