import React, { useState } from 'react';
import './services.css';

function Services(){
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <section className='services section' id="services">
            <h2 className='section_title'>Services</h2>
            <span className='section_subtitle'>What I Offer</span>

            <div className='services_container container grid'>
                <div className='services_content'>
                    <div>
                        <i className='uil uil-web-grid services_icon'></i>
                        <h3 className='services_title'>1st</h3>
                    </div>

                    <span className='services_button' onClick={() => toggleTab(1)}>View More <i className='uil uil-arrow-right services_button-icon'></i></span>

                    <div className={toggleState === 1? 'services_modal active_modal' : "services_modal"}>
                        <div className='services_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

                            <h3 className='services_model-title'>first</h3>
                            <p className='services_modal-description'>bldfjreigkdsdij</p>

                            <ul className='services_modal-services grid'>
                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        erfuwehsgeusidf
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        fjigfkj
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        sfjgrij
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className='services_content'>
                    <div>
                        <i className='uil uil-web-grid services_icon'></i>
                        <h3 className='services_title'>2nd</h3>
                    </div>

                    <span className='services_button' onClick={() => toggleTab(2)}>View More <i className='uil uil-arrow-right services_button-icon'></i></span>

                    <div className={toggleState === 2? 'services_modal active_modal' : "services_modal"}>
                        <div className='services_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

                            <h3 className='services_model-title'>second</h3>
                            <p className='services_modal-description'>bldfjreigkdsdij</p>

                            <ul className='services_modal-services grid'>
                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        erfuwehsgeusidf
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        fjigfkj
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        sfjgrij
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='services_content'>
                    <div>
                        <i className='uil uil-web-grid services_icon'></i>
                        <h3 className='services_title'>3rd</h3>
                    </div>

                    <span className='services_button' onClick={() => toggleTab(3)}>View More <i className='uil uil-arrow-right services_button-icon'></i></span>

                    <div className={toggleState === 3? 'services_modal active_modal' : "services_modal"}>
                        <div className='services_modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

                            <h3 className='services_model-title'>third</h3>
                            <p className='services_modal-description'>bldfjreigkdsdij</p>

                            <ul className='services_modal-services grid'>
                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        erfuwehsgeusidf
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        fjigfkj
                                    </p>
                                </li>

                                <li className='services_modal-service'>
                                    <i className='uil uil-check-circle servies_modal-icon'></i>
                                    <p className='services_modal-info'>
                                        sfjgrij
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
export default Services;