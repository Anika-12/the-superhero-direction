import React from 'react';
import logo from '../../images/background.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <h2>Welcome To  Know About Music Superheros</h2>
            <p className="para">Music is the art of arranging sounds in time to produce a composition 
                through the elements of melody,
                 harmony, rhythm, and timbre.</p>
                 <h5 className="para">Total Budget: 100 Million</h5>
                 <img className="logo" src={logo}></img>
                 
        </div>
    );
};

export default Header;