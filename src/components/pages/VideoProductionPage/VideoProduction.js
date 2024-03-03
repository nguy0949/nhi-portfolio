import React, { useContext, useEffect } from 'react'
import styles from './videoProduction.module.scss'
import { AppContext } from '../../../AppContext'
import videos from './videos.json'

const VideoProduction = () => {
    const { changePageName } = useContext(AppContext)

    useEffect(() => {
        changePageName('Video Production')

        return () => {
            changePageName('')
        }
    }, [])

    return (
        <div className={styles.container}>
            {
                videos?.length > 0 && videos.map((video, index) => (
                    <div key={index} className={styles.video_card}>
                        <div className={styles.video_content}>
                            <div className={styles.video_container}>
                                <iframe
                                    src={video.link}>
                                </iframe>
                            </div>
                            <p>{video.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default VideoProduction