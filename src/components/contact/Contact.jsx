import React from 'react';
import './contact.css';

function Contact(){
    return(
        <section className='contact section' id='contact'>
            <h2 className='section_title'>Get In Touch</h2>
            <span className='section_subtitle'>Contact Me</span>

            <div className='contact_container  container grid'>
                <div className='contact_content'>
                    <h3 className='contact_info'>Talk to me</h3>

                    <div className='contact_info'>

                        <div className='contact_card'>
                            <i className='bx bx-mail-send contact_card-icon'></i>

                            <h3 className='contact_card-title'>Email</h3>
                            <span className='contact_card-data'>sanchiitvijay@gmail.com</span>

                            <a href="mailto: sanchiitvijay@gmail.com" className='contact_button'>
                                Write me{" "}
                                <i className='bx bx-right-arrow-alt contact_button'></i>
                            </a>
                        </div>

                        <div className='contact_card'>
                            <i className='bx bxl-whatsapp contact_card-icon'></i>

                            <h3 className='contact_card-title'>Phone</h3>
                            <span className='contact_card-data'>+91 8445137008</span>

                            <a href="tel:8445137008" className='contact_button'>
                                Write me{" "}
                                <i className='bx bxl-right-arrow-alt contact_button'></i>
                            </a>
                        </div>

                        <div className='contact_card'>
                            <i className='bx bxl-messenger contact_card-icon'></i>

                            <h3 className='contact_card-title'>LinkedIn</h3>
                            <span className='contact_card-data'>sanchiiitvijay</span>

                            <a href="https://www.linkedin.com/in/sanchiitvijay" className='contact_button' rel='noopener noreferrer' target='_blank'>
                                Write me{" "}
                                <i className='bx bx-right-arrow-alt contact_button'></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className='contact_content'>
                    <h3 className='contact_title'>My address</h3>

                    <div className='contact_card contact_address'>
                            {/* <i className='bx bxl-messenger contact_card-icon'></i> */}

                            {/* <h3 className='contact_card-title'></h3> */}
                            <span className='contact_card-data contact_card_address'>NNRI Msrit Hostel, Gate 10 Mathikere, Bengaluru (560054)</span>
                        </div>
                        
                        <div className='contact_address'>
                        
                        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0580947075996!2d77.56120567489407!3d13.031972487288991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1724e349427b%3A0xa56deb9f316bef29!2sNnri%20hostel%2C%20Msrit%20hostels!5e0!3m2!1sen!2sin!4v1699433800528!5m2!1sen!2sin' className='contact_address-link' allowfullscreen="" loading="lazy" title='address' referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;