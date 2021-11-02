import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import LastFooter from '../components/LastFooter'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Slider/>
            <HomeContent/>
            <Footer/>
            <LastFooter/>
        </div>
    )
}

export default Home
