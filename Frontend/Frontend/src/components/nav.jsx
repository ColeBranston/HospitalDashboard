import React from 'react';
import { Link } from 'react-router-dom';
import MedicalIcon from '../assets/medicalSymbol.ico'
const Nav = () => {
    return (
        <div className='nav'>
            <div className="mainContainer">
                <div className="pathContainer">
                    <Link to="/" className='navButtons' id="medicalImage"><div><img src={MedicalIcon} alt="Medical Symbol" width="50px" height="50px"/></div></Link>
                    <Link to="/NewsPage" className='navButtons'><div className='navButtons'><p>News</p></div></Link>
                    <Link to="/BookingPage" className='navButtons'><div><p>Booking</p></div></Link>
                    <Link to="/SchedulePage" className='navButtons'><div><p>Schedule</p></div></Link>
                </div>
                <div className="accountContainer">
                    <div>
                        <p>Account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
