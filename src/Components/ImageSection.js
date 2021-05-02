import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info text-white">
                <h4>I am<span className="text-info"> Muhtashim Islam Nayem</span></h4>
                <p className="about-text">
                    I'm Nayem. I live in Patuakhali, Barisal, Dhaka, Bangladesh. I am a reactive developer. I have done engineering with electrical department. I want to work as a react developer now.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Muhtashim Islam Nayem</p>
                        <p>: 21</p>
                        <p>: Bangladesh</p>
                        <p>: Bangla,English,Hindi</p>
                        <p>: Bangladesh,Barisal,Patuakhali</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>
                <button className="btn btn-info">
                    <a href="https://drive.google.com/uc?export=download&id=1saZXO94fsswfdYHeoplH01eXJ4-Yc5I7" role="button" target="_blank" className="text-white" />
                    Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
