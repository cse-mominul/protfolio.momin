import React, { useRef } from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_quwscct', 'template_y65nx0q', form.current, 'Q1wMQNvovcb9MAXoO')
        e.target.reset()
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id='Contact'>
            <h5> Get in touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <AiOutlineMail className="Icon"></AiOutlineMail>
                        <h4>Email</h4>
                        <h5>cse.mominul.islam@gmail.com</h5>
                        <a href='mailto:cse.mominul.islam@gmail.com' target="_blank">Send a massage</a>
                    </article>
                    <article className='contact_option'>
                        <BsMessenger className="Icon"/>
                        <h4>Messenger</h4>
                        <h5>Md Mominul Islam</h5>
                        <a href='https://m.me/cse.mominul' target="_blank">Send a massage</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className="Icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+8801771804106</h5>
                        <a href='https://api.whatsapp.com/send?phone=+8801771804106' target="_blank">Send a massage</a>
                    </article>

                </div>
                {/* ====End Of Contact Options====== */}
                <div>
                <form ref={form} onSubmit={sendEmail}> 
                    <input type="text" name='name' placeholder='Your Full Name' required></input>
                    <input type="email" name='email' placeholder='Your Email' required></input>
                    <textarea name='message' rows="7" placeholder='Your Massage' required></textarea>
                    <button type='submit' className='btn btn-primary submitbtn'>Send Massage</button>
                </form>
                </div>
               

            </div>
        </section>
    );
};

export default Contact;