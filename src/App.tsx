import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Browse from './pages/Browse'
import Details from './pages/Details'
import Category from './pages/Category'
import MyCart from './pages/MyCart'
import Booking from './pages/Booking'
import Payment from './pages/Payment'
import BookingFinished from './pages/BookingFinished'
import CheckBooking from './pages/CheckBooking'
import BookingDetails from './pages/BookingDetails'
import Brand from './pages/Brand'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Browse />} />
                <Route path='/cosmetic/:slug' element={<Details />} />
                <Route path='/category/:slug' element={<Category />} />
                <Route path='/brand/:slug' element={<Brand />} />
                <Route path='/cart' element={<MyCart />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/booking-finished' element={<BookingFinished />} />
                <Route path='/check-booking' element={<CheckBooking />} />
                <Route path='/my-booking' element={<BookingDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
