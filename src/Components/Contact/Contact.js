import React, { useContext, useRef, useState } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_jc4s0ag",
                "template_d759xto",
                form.current,
                "GByfnFGzbIIqRLJZO"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    form.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="contact">
                    {/* darkMode */}
                    <span style={{ color: darkMode ? 'white' : '' }}>Contact Me</span>
                    <p className="pt-2 pb-4">S M Katibur Rahman</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Satkhira Sadar,Satkhira,Khulna,Bangladesh</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>01788735788</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>katiburrahmansany@gmail.com</span>
                        </p>
                    </div>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send Email" className="button" />
                    <span>{done && "Thanks for sending email, I will try to contact you ASAP"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;