import React, { useEffect, useContext } from "react"
import styles from './photography.module.scss'
import { AppContext } from '../../../AppContext'
import photos from './photos.json'

const Photography = () => {
    const { changePageName } = useContext(AppContext)

    useEffect(() => {
        changePageName('Photography')

        return () => {
            changePageName('')
        }
    }, [])

    return (
        <div className={styles.container}>
            { 
                photos && photos.length > 0 && photos.map((photo, index) => (
                    <div key={index} className={styles.photo_card}>
                        <div className={styles.image_container}>
                            <img 
                                src={`/images/photographypage/${photo}`} 
                                alt="photo" 
                            />
                        </div>
                    </div>
                ))
            }
        </div>  
    )
}

export default Photography
