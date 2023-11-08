import React from 'react';
import './footer.css';

function Footer(){
    return(
        <footer className='footer'>
            <div className='footer_container container'>
                <h1 className='footer_title'>Sanchit</h1>

                <ul className='footer_list'>
                    <li>
                        <a href='#about' className='footer_link'>About</a>
                    </li>
                    <li>
                        <a href='#project' className='footer_link'>Projects</a>
                    </li>
                    <li>
                        <a href='#skills' className='footer_link'>Skills</a>
                    </li>
                </ul>

                <div className='footer_social'>
                    <a href="egh" className='home_social-icon' target ="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="erh" className='home_social-icon' target ="_blank">
                        <i class="bx bxl-github"></i>
                    </a>

                    <a href="ehj" className='home_social-icon' target ="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className='footer_copy'> &#169;
                    All right reserved
                </span>
            </div>
        </footer>
    )
}
export default Footer;