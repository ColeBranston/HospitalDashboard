import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage'
import NewsPage from './pages/NewsPage'
import BookingPage from './pages/BookingPage'
import SchedulePage from './pages/SchedulePage'
import AccountPage from './pages/AccountPage'
import LoginPage from './pages/LoginPage'
import {LoginProvider} from './contexts/LoggedInContext'

createRoot(document.getElementById('root')).render(
  <LoginProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/NewsPage' element={<NewsPage/>} />
        <Route path='/BookingPage' element={<BookingPage/>} />
        <Route path='/SchedulePage' element={<SchedulePage/>} />
        <Route path='/LoginPage' element={<LoginPage/>} />
        <Route path='/AccountPage' element={<AccountPage/>} />
      </Routes>
    </BrowserRouter>
  </LoginProvider>
)
