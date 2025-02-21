import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Nav from '../components/nav'
import { checkLogin } from '../contexts/LoggedInContext'
import { Navigate } from 'react-router-dom'

const BookingPage = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(checkLogin)
    return(
        <>
            {isLoggedIn?
                <>
                <Nav/>
                </>
                :
                <Navigate to ="/LoginPage"/>
            }
        </>
    )
}

export default BookingPage