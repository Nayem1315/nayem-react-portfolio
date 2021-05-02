import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from "emailjs-com"
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactItem from '../Components/ContactItem';

const ContactPage = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_grvjiv9', e.target, 'user_mLXnHD2fGCAvockfna0MV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <div className="container">
                <div className="title">
                    <Tittle title={'About Me'} span={'About Me'} />
                </div>
                <div className="ContactPage">
                    <div className="mail-sect">
                        <form onSubmit={sendEmail}>
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Email-Address" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea type="text" class="form-control" name="data" placeholder="Your Message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="form-control btn btn-success" value="send message" name="name" />
                            </div>
                        </form>
                    </div>
                    <div className="contact-sect">
                        <ContactItem icon={phone} text1={'+880 179-4251315'} text2={'+880 183-1286643'} title={'Phone'} />
                        <ContactItem icon={email} text1={'ndeveloper@gmail.com'} text2={'muhtasimislamnayem@gmail.com'} title={'Email'} />
                        <ContactItem icon={location} text1={'Dhaka Bangladesh'} text2={'Barishal,Patuakhali'} title={'Address'} />
                    </div>
                </div>
                {/* <div className="d-flex">
                    <div className="pt-5">
                        <form onSubmit={sendEmail}>
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Email-Address" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea type="text" class="form-control" name="data" placeholder="Your Message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="form-control btn btn-success" value="send message" name="name" />
                            </div>
                        </form>
                    </div>
                    <div className="contact-sect">
                        <ContactItem icon={phone} text1={'+257 7756110718'} text2={'+0333 6782 8792'} title={'Phone'} />
                        <ContactItem icon={email} text1={'loremipusum@hmail.com'} text2={'abcloremipsum@gmail.com'} title={'Email'} />
                        <ContactItem icon={location} text1={'25 Paramount St, PN4 8H9 London'} text2={'United Kingdom'} title={'Address'} />
                    </div>
                </div> */}
                <div className="icons">
                    <a href="https://www.facebook.com/Muhtasim315/" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/Nayem1315" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" className="icon-holder">
                        <FontAwesomeIcon icon={faEnvelope} className="icon yt" />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon gh" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;