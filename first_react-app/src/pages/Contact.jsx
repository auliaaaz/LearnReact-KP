import React, { useState } from 'react';
import './styles/ContactStyles.css';

const FormContact = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phonenum: '',
        messages: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const emailValidation = () => {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mailFormat.test(formData.email)) {
            return true;
        }
        alert("Invalid email address!");
        return false;
    };
    
    const phoneValidation = () => {
        const phoneFormat = /^\d{12,13}$/;
        if (phoneFormat.test(formData.phonenum)) {
            return true;
        }
        alert("Only receive number format with minimum 12 digits and maximum 13 digits!");
        return false;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailValidation() && phoneValidation()) {
            alert("Email successfully submitted!");
            return true;
        }
        return false;
    };

    return (
        <div className="container text-center p-5">
            <section className="col">
                <header>
                    <h2><b>Get in Touch</b></h2>
                </header>
            </section>

            <section className="col">
                <form name="form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullname" 
                        value={formData.fullname} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" name="email" className="form-control" id="email" 
                        value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phonenum" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phonenum" 
                        value={formData.phonenum} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="messages" className="form-label">Message</label>
                        <textarea className="form-control" id="messages" rows="3"
                        value={formData.messages} onChange={handleChange}></textarea>
                    </div>
                    <input className="btn btn-primary" type="submit" id="submit" value="Submit" />
                    <input className="btn btn-primary" type="reset" value="Reset" onClick={() => setFormData({
                        fullname: '',
                        email: '',
                        phonenum: '',
                        messages: ''
                    })} />
                </form>
            </section>

            <section className="col p-5">
                <div className="personal-info">
                    <b>Personal Information</b> 
                </div>
            
                <div className="grid-container-personal-info">
                    <div className="grid-item">Name:</div>
                    <div className="grid-item">Aulia Syahnur |</div>
                    <div className="grid-item">Email:</div>
                    <div className="grid-item">saulia479@gmail.com |</div>
                    <div className="grid-item">Phone Number:</div>
                    <div className="grid-item">6282376787113</div>
                </div>
            </section>
        </div>
    );
};

export default FormContact;
