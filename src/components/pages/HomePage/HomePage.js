import React, { useContext, useEffect } from 'react'
import styles from './homePage.module.scss'
// import video from '../../../images/homepage/VIDEO.mp4'
import { AppContext } from '../../../AppContext'

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
                    {/* <video loop muted autoPlay src={video} /> */}
                </div>
            </div>
        </div>
    )
}

export default HomePage
