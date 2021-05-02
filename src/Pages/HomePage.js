import React from 'react';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span className="text-info"> Muhtashim Islam Nayem</span>
                </h1>
                <p className="h-sub-text text-white">
                    Hello I'm Nayem,I am a react front-end web developer.I'm From Dhaka ,Barishal
                </p>
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
            </header>
            {/* <div className="col text-center">
                <button className="btn btn-info">Download Resume</button>
            </div> */}
            <div className="col text-center">
                <button className="btn btn-info">
                    <a href="https://drive.google.com/uc?export=download&id=1saZXO94fsswfdYHeoplH01eXJ4-Yc5I7" role="button" target="_blank" className="text-white">Download Resume</a>
                </button>
            </div>
        </div>
    )
}

export default HomePage;
