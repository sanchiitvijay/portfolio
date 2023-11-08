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

                            <a href="mailto:sanchiitvijay@gmail.com.com" className='contact_button'>
                                Write me{" "}
                                <i className='bx bx-right-arrow-alt contact_button'></i>
                            </a>
                        </div>

                        <div className='contact_card'>
                            <i className='bx bxl-whatsapp contact_card-icon'></i>

                            <h3 className='contact_card-title'>Phone</h3>
                            <span className='contact_card-data'>+91 8445137008</span>

                            <a href="dff" className='contact_button'>
                                Write me{" "}
                                <i className='bx bxl-right-arrow-alt contact_button'></i>
                            </a>
                        </div>

                        <div className='contact_card'>
                            <i className='bx bxl-messenger contact_card-icon'></i>

                            <h3 className='contact_card-title'>LinkedIn</h3>
                            <span className='contact_card-data'>sanchiiitvijay</span>

                            <a href="sdd" className='contact_button'>
                                Write me{" "}
                                <i className='bx bx-right-arrow-alt contact_button'></i>
                            </a>
                        </div>

                    </div>
                </div>

                <div className='contact_content'>
                    <h3 className='contact_title'>Write me your project</h3>

                    <form className='contact_form'>
                        <div className='contact_form-div'>
                            <label className='contact_form-tag'>Name</label>
                            <input type='text' name='name' className='contact_form-input' placeholder='Insert your name' />
                        </div>

                        <div className='contact_form-div'>
                            <label className='contact_form-tag'>Mail</label>
                            <input type='email' name='email' className='contact_form-input' placeholder='Insert your Email' />
                        </div>

                        <div className='contact_form-div'>
                            <label className='contact_form-tag'>Projects</label>
                            <textarea name='project' cols='30' rows='10' className='contact_form-input' placeholder='write your project'></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;