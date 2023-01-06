import React from 'react';
import VMC from './inc/Vmc';

const About = () => {
    return (
        <div>
            <section>
                <div className="py-4 bg-success">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About us</h4>
                        </div>
                           <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About us
                            </h6>
                            </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>
                    In today's world of burgeoning modern technologies,
                     LIMAT Technology Solutions provides stellar IT solutions in Chennai which include a variety of services like website designing, 
                     mobile application development, Hosting services, Application development and DevOps and automation support for your applications. 
                     LIMAT Technology Solutions can help you in reaching your target of enhancing your business. We transcend every aspect of quality required to deliver high-performing business solutions
                    </p>
                </div>
            </section>

            {/* our mission, vision and values    */}
            <VMC />
       </div>
        
    );
}

export default About;