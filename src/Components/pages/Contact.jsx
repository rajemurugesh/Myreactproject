import React from "react";

const Contact = () => {
  return (
    <div>
      <section>
        <div className="py-4 bg-success">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact us</h6>
            </div>
          </div>
        </div>
      </section>
      
      <section>
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
                <div className="col-md-6 border-left">
                    <h6>Contact Form</h6>
                    <hr />
                    <div className="form-group">
                        <label className="mb-1">Full Name</label>
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div>

                    <div className="form-group">
                        <label className="mb-1">Mobile Number</label>
                        <input type="number" className="form-control" placeholder="Mobile Number"/>
                    </div>

                    <div className="form-group">
                        <label className="mb-1">Email Address</label>
                        <input type="number" className="form-control" placeholder="Email"/>
                    </div>

                    <div className="form-group">
                        <label className="mb-1">Message</label>
                        <textarea rows="3" className="form-control" placeholder="Message..."></textarea>
                    </div>
                    <div className="form-group py-3">
                        <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                        </div>
                </div>
                <div className="col-md-6 border-start">
                    
                    <h5 className="main-heading">Address Information</h5>
                    <div className="underline"></div>
                    <p>
                        #51,2nd street,Surya Avenue,chrompet,chennai-600044
                    </p>
                    <p>
                        Phone: +91 9865486212
                                +91 8956215662
                    </p>
                    <p>
                        Email: email@domain.com
                    </p>

                </div>

            </div>
            
          </div>
        </div>
      </div>
        </section>
    </div>
  );
};

export default Contact;
