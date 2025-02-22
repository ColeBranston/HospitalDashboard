import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Nav from '../components/nav'
import {checkLogin} from '../contexts/LoggedInContext'

const SchedulePage = () => {
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

export default SchedulePage