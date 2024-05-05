import React, { useState } from 'react';
import './projects.css';

function Projects(){
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <section className='projects section' id="project">
            <h2 className='section_title'>Projects</h2>
            <span className='section_subtitle'>What I made</span>

            <div className='projects_container container grid'>

                {/* Diabetics Predictor */}
                <div className='projects_content'>
                    <div>
                        <i className='uil uil-web-grid projects_icon'></i>
                        <h3 className='projects_title'>Diabetics Predictor</h3>
                    </div>

                    <span className='projects_button' onClick={() => toggleTab(1)}>View More <i className='uil uil-arrow-right projects_button-icon'></i></span>

                    <div className={toggleState === 1? 'projects_modal active_modal' : "projects_modal"}>
                        <div className='projects_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times projects_modal-close'></i>

                            <h3 className='projects_modal-title'>Diabetics Predictor</h3>
                            <p className='projects_modal-description'> Created a diabetic predictor website using HTML/CSS for frontend and Hugging Face backend from Kaggle
notebook, simplifying deployment and ensuring efficient model inference.<br/>
Designed a user-friendly interface for the predictor, prioritizing intuitive design and accessibility to enhance
user engagement.<br/>
Collaborated on integrating backend seamlessly with frontend, ensuring smooth communication for a cohesive
web application.</p>

                            <ul className='projects_modal-projects grid'>

                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                        <a href='https://sanchiitvijay.github.io/Diabetics-Predictor' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>github.io/Diabetics-Predictor</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Ball-game */}
                <div className='projects_content'>
                    <div>
                        <i className='uil uil-web-grid projects_icon'></i>
                        <h3 className='projects_title'>Ball-game</h3>
                    </div>

                    <span className='projects_button' onClick={() => toggleTab(2)}>View More <i className='uil uil-arrow-right projects_button-icon'></i></span>

                    <div className={toggleState === 2? 'projects_modal active_modal' : "projects_modal"}>
                        <div className='projects_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times projects_modal-close'></i>

                            <h3 className='projects_modal-title'>Ball-game</h3>
                            <p className='projects_modal-description'>This simple and interactive game is built using HTML, CSS, and JavaScript <br/>
                            Challenge the computer opponent in a thrilling ping pong match and see if you can emerge victorious!</p>

                            <ul className='projects_modal-projects grid'>

                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                        <a href='https://github.com/sanchiitvijay/ball_game' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>github.com/sanchiitvijay/ball_game</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Waver */}
                <div className='projects_content'>
                    <div>
                        <i className='uil uil-web-grid projects_icon'></i>
                        <h3 className='projects_title'>Waver</h3>
                    </div>

                    <span className='projects_button' onClick={() => toggleTab(3)}>View More <i className='uil uil-arrow-right projects_button-icon'></i></span>

                    <div className={toggleState === 3? 'projects_modal active_modal' : "projects_modal"}>
                        <div className='projects_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times projects_modal-close'></i>

                            <h3 className='projects_modal-title'>Waver</h3>
                            <p className='projects_modal-description'>It is a social media webapp where users can create and share posts with text and images. They can also
interact with posts by liking.
<br/>The application allows users to manage their friends list, including adding and removing friends.
<br/>Users can view profiles of their friends to see their posts and basic information.
</p>

                            <ul className='projects_modal-projects grid'>

                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                        <a href='https://github.com/sanchiitvijay/waver' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>github.com/sanchiitvijay/waver</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Kloud */}
                <div className='projects_content'>
                    <div>
                        <i className='uil uil-web-grid projects_icon'></i>
                        <h3 className='projects_title'>Kloud</h3>
                    </div>

                    <span className='projects_button' onClick={() => toggleTab(4)}>View More <i className='uil uil-arrow-right projects_button-icon'></i></span>

                    <div className={toggleState === 4? 'projects_modal active_modal' : "projects_modal"}>
                        <div className='projects_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times projects_modal-close'></i>

                            <h3 className='projects_modal-title'>Kloud</h3>
                            <p className='projects_modal-description'>Kloud is a simple weather information application that allows users to retrieve real-time weather data for a specific city. Users can enter the name of a city, and Kloud will provide them with the current temperature, a picture representing the weather conditions, "feels like" temperature, humidity, and wind speed for that city.</p>

                            <ul className='projects_modal-projects grid'>

                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                        <a href='https://github.com/sanchiitvijay/kloud' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>github.com/sanchiitvijay/kloud</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Enma */}
                <div className='projects_content'>
                    <div>
                        <i className='uil uil-web-grid projects_icon'></i>
                        <h3 className='projects_title'>ENMA</h3>
                    </div>

                    <span className='projects_button' onClick={() => toggleTab(5)}>View More <i className='uil uil-arrow-right projects_button-icon'></i></span>

                    <div className={toggleState === 5? 'projects_modal active_modal' : "projects_modal"}>
                        <div className='projects_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times projects_modal-close'></i>

                            <h3 className='projects_modal-title'>ENMA</h3>
                            <p className='projects_modal-description'>A responsive shopping site for purchasing high-quality katanas, built using HTML, CSS, JavaScript, and Bootstrap.</p>

                            <ul className='projects_modal-projects grid'>
                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                    <a href='https://github.com/sanchiitvijay/ENMA' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>github.com/sanchiitvijay/ENMA</a>
                                    </p>
                                </li>

                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                    <a href='https://sanchiitvijay.github.io/ENMA/' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>Site visit</a>
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* text extraction */}
                <div className='projects_content'>
                    <div>
                        <i className='uil uil-web-grid projects_icon'></i>
                        <h3 className='projects_title'>Text-extraction</h3>
                    </div>

                    <span className='projects_button' onClick={() => toggleTab(6)}>View More <i className='uil uil-arrow-right projects_button-icon'></i></span>

                    <div className={toggleState === 3? 'projects_modal active_modal' : "projects_modal"}>
                        <div className='projects_modal-content'>
                            <i onClick={() => toggleTab(6)} className='uil uil-times projects_modal-close'></i>

                            <h3 className='projects_modal-title'>Text-extraction</h3>
                            <p className='projects_modal-description'>
                                This Python project leverages the power of Keras OCR to extract text from images. Whether you need to extract text from scanned documents, images, or any other visual content, this project provides a convenient and efficient solution. Keras OCR is a deep learning-based optical character recognition (OCR) library that allows you to recognize and extract text from images.
                            </p>

                            <ul className='projects_modal-projects grid'>
                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                        <a href='https://github.com/sanchiitvijay/text-extraction' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>github.com/sanchiitvijay/text-extraction</a>
                                    </p>
                                </li>

                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                        <a href='https://colab.research.google.com/drive/1-Cn1i6gOaEieO6oQB8iNwXjU0srXV4sD?usp=sharing' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>Colab Notebook link</a>
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* karo karo */}
                <div className='projects_content'>
                    <div>
                        <i className='uil uil-web-grid projects_icon'></i>
                        <h3 className='projects_title'>KaroKaro</h3>
                    </div>

                    <span className='projects_button' onClick={() => toggleTab(7)}>View More <i className='uil uil-arrow-right projects_button-icon'></i></span>

                    <div className={toggleState === 7? 'projects_modal active_modal' : "projects_modal"}>
                        <div className='projects_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times projects_modal-close'></i>

                            <h3 className='projects_modal-title'>KaroKaro</h3>
                            <p className='projects_modal-description'>
                                A simple to-do list web application that allows you to add and manage tasks. This application is built using EJS, CSS, Node.js, and Bootstrap.
                            </p>

                            <ul className='projects_modal-projects grid'>
                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                        <a href='https://github.com/sanchiitvijay/to-do-list' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>github.com/sanchiitvijay/to-do-list</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* qr maker */}
                <div className='projects_content'>
                    <div>
                        <i className='uil uil-web-grid projects_icon'></i>
                        <h3 className='projects_title'>Qr-Maker</h3>
                    </div>

                    <span className='projects_button' onClick={() => toggleTab(8)}>View More <i className='uil uil-arrow-right projects_button-icon'></i></span>

                    <div className={toggleState === 8? 'projects_modal active_modal' : "projects_modal"}>
                        <div className='projects_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times projects_modal-close'></i>

                            <h3 className='projects_modal-title'>Qr-Maker</h3>
                            <p className='projects_modal-description'>
                                This is a simple QR code maker website built using EJS, CSS, JavaScript, and Node.js. It allows users to generate QR codes for the provided content.
                            </p>

                            <ul className='projects_modal-projects grid'>
                                <li className='projects_modal-project'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='projects_modal-info'>
                                        <a href='https://github.com/sanchiitvijay/qr-maker' className='projects_modal-link' rel="noopener noreferrer" target='_blank'>github.com/sanchiitvijay/qr-maker</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Projects;