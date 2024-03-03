import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import AboutPage from '../../pages/AboutPage'
import VideoProductionPage from '../../pages/VideoProductionPage'
import GraphicDesignPage from '../../pages/GraphicDesignPage'
import PhotoGraphyPage from '../../pages/PhotoGraphyPage'
import ContactPage from '../../pages/ContactPage'
import Navbar from '../Navbar'
import styles from './main.module.scss'
import { AppContext } from '../../../AppContext'

const Main = () => {
    const { useDarkBG } = useContext(AppContext)
    const color = useDarkBG ? styles.dark : undefined

    return (
        <div className={`${styles.app_container} ${color}`}>
            <Router>
                <Navbar />
                <div className={styles.page_wrapper}>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/about" element={<AboutPage />} /> 
                        <Route exact path="/video-production" element={<VideoProductionPage />} /> 
                        <Route exact path="/graphic-design" element={<GraphicDesignPage />} /> 
                        <Route exact path="/photography" element={<PhotoGraphyPage />} /> 
                        <Route exact path="/contact" element={<ContactPage />} /> 
                        {/* Add more routes here */}
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default Main