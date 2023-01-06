import React from 'react';
import Slider from '../inc/Slider'
import {Link} from 'react-router-dom';
import VMC from './inc/Vmc';
import Service1 from '../images/service.jpg';


const Home = () => {
    return (
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            In today's world of burgeoning modern technologies, 
                            LIMAT Technology Solutions provides stellar IT solutions in Chennai which include a variety of services like website designing, 
                            mobile application development, Hosting services, 
                            Application development and DevOps and automation support for your applications. 
                            LIMAT Technology Solutions can help you in reaching your target of enhancing your business. 
                            We transcend every aspect of quality required to deliver high-performing business solutions.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
              </section>   

              {/* our mission, vision and values    */}

              <VMC />

              {/* our services */}
              <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>         
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                            <img src={Service1} className="w-100 border-bottom" alt="services" />
                               <div className="card body">
                                <h6>Services 1</h6>
                                <div className="underline"></div>
                                <p>
                                In today's world of burgeoning modern technologies, 
                            LIMAT Technology Solutions provides stellar IT solutions in Chennai which include a variety of services like website designing, 
                            mobile application development, Hosting services, 
                            Application development and DevOps and automation support for your applications.
                                </p>
                                <Link to="/services" className="btn btn-link">read more</Link> 
                               </div>
                            </div>            
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                            <img src={Service1} className="w-100 border-bottom" alt="services" />
                               <div className="card body">
                                <h6>Services 1</h6>
                                <div className="underline"></div>
                                <p>
                                In today's world of burgeoning modern technologies, 
                            LIMAT Technology Solutions provides stellar IT solutions in Chennai which include a variety of services like website designing, 
                            mobile application development, Hosting services, 
                            Application development and DevOps and automation support for your applications.
                                </p>
                                <Link to="/services" className="btn btn-link">read more</Link> 
                               </div>
                            </div>            
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                            <img src={Service1} className="w-100 border-bottom" alt="services" />
                               <div className="card body">
                                <h6>Services 1</h6>
                                <div className="underline"></div>
                                <p>
                                In today's world of burgeoning modern technologies, 
                            LIMAT Technology Solutions provides stellar IT solutions in Chennai which include a variety of services like website designing, 
                            mobile application development, Hosting services, 
                            Application development and DevOps and automation support for your applications.
                                </p>
                                <Link to="/services" className="btn btn-link">read more</Link> 
                               </div>
                            </div>            
                        </div>
                    </div>
                </div>
              </section>
        </div>
    );
}

export default Home;