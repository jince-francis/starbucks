// import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // or any other icon



function Footer() {
    return (
        <div className="row" style={{ backgroundColor: '#0f392c' }}>
            <div className="col-md-2 d-flex align-items-center justify-content-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRb7bajyNE680SjYk2aqUIAoAXdoMw8t66g&s" className="image-fluid" alt="no image" style={{ height: '60px' }} /></div>
            <div className="col-md-2 text-white text-center mt-4">
                <h3>About Us</h3>
                <br />
                <p>Our Heritage</p>
                <p>Coffee House</p>
                <p>Our company</p>
            </div>
            <div className="col-md-2 text-white text-center mt-4">
                <h3>Responsibility</h3>
                <br />
                <p>Diversity</p>
                <p>Community</p>
                <p>Ethical Sourcing</p>
                <p>Environmental Stewardship</p>
                <p>Learn More</p>
            </div>
            <div className="col-md-2 text-white text-center mt-4">
                <h3>Qick Links</h3>
                <br />
                <p>Privacy Policy</p>
                <p>FAQs</p>
                <p>Customer Service</p>
                <p>Delivery</p>
                <p>Season's Gifting</p>
            </div>
            <div className="col-md-2 text-white text-center mt-4">
                <h3>Social media</h3>
                <br />
                <div className='d-md-flex justify-content-between'>
                    <FontAwesomeIcon className='fa-2xl me-3' icon={faTwitter} />
                    <FontAwesomeIcon className='fa-2xl me-3' icon={faFacebook} />
                    <FontAwesomeIcon className='fa-2xl me-3' icon={faInstagram} />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer