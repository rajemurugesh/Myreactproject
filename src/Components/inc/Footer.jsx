import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <section className="section footer bg-info text-white"> 
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6>Company Information</h6>
                    <hr/>
                    <p className="text-white">
                    In today's world of burgeoning modern technologies, 
                    Limat Technology Solutions provides stellar IT solutions in Chennai
                    </p>
                </div>
                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                    <div><Link to="/">Blog</Link></div>
                </div>

                <div className="col-md-4">
                    <h6>Contact Information</h6>
                    <hr/>
                    <div><p className="text-white mb-1">#51,2nd Street,Surya Avenue,Chrompet,Chennai - 600044</p></div>
                    <div><p className="text-white mb-1">+91 9865486212</p></div>
                    <div><p className="text-white mb-1">+91 8956215662</p></div>
                    <div><p className="text-white mb-1">email@domain.com</p></div>
                </div>
            </div>
        </div>

        </section>

    );
}

export default Footer;