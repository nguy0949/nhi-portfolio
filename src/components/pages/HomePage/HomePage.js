import React, { useContext, useEffect } from 'react'
import styles from './homePage.module.scss'
import { AppContext } from '../../../AppContext'
const VIDEO_LINK = "https://nhi-portfolio.s3.ca-central-1.amazonaws.com/VIDEO.mp4"

const HomePage = () => {
    const { changeIsHomePage } = useContext(AppContext)

    useEffect(() => {
        changeIsHomePage(true)
        return () => {
            changeIsHomePage(false)
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.text_container}>
                <h1 className={styles.name}>Nhi Nguyen</h1>
                <h3 className={styles.position}>Multimedia Designer</h3>
            </div>
            <div className={styles.video_container}>
                <div className={styles.video_frame}>
                    <video loop muted autoPlay src={VIDEO_LINK} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
