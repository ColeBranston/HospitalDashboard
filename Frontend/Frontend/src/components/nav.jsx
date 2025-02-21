import React from 'react';
import { Link } from 'react-router-dom';
import MedicalIcon from '../assets/medicalSymbol.ico'
import { checkLogin } from '../contexts/LoggedInContext';
import { useContext } from 'react';
const Nav = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(checkLogin)
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
                    {
                        isLoggedIn?
                        <div>
                            <Link to="/AccountPage"><div className='glowingButton'><p>Account</p></div></Link>
                        </div>
                        :
                        <div>
                            <Link to="/LoginPage"><div className='glowingButton'><p>Log In</p></div></Link>
                        </div>
                        }
                </div>
            </div>
        </div>
    );
};

export default Nav;
