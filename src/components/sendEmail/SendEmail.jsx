import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SendEmailtoUser = ({ jobData }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const { title, userEmail, salary } = jobData;

        const templateParams = {
            title,
            userEmail_,
            salary,
        };

        emailjs.send('service_0dkd1xe', 'template_odzw0rp', templateParams, 'a7CZvHvebnYjPTy5h')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="csrf_token" value="your_csrf_token" />
                <button type="submit">Apply</button>
            </form>
        </div>
    );
};

export default SendEmailtoUser;
