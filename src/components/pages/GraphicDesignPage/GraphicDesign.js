import React, { useEffect, useContext } from "react"
import styles from './graphicDesign.module.scss'
import { AppContext } from '../../../AppContext'
import graphics from './graphics.json'

const GraphicDesign = () => {
    const { changePageName } = useContext(AppContext)

    useEffect(() => {
        changePageName('Graphic Design')

        return () => {
            changePageName('')
        }
    }, [])

    return (
        <div className={styles.container}>
            {
                graphics?.length > 0 && graphics.map((graphic, index) => (
                    <div key={index} className={styles.graphic_card}>
                        <div className={styles.graphic_content}>
                            <div className={styles.graphic_container}>
                               {
                                    graphic.images && graphic.images.length > 0 && graphic.images.map((image, index) => (
                                        <div className={`${styles.image_container} ${image.size == "normal" ? styles.normal_size : image.size == "large" ? styles.large_size : styles.small_size}`}>
                                            <img 
                                                key={index} 
                                                src={`/images/graphicpage/${image.src}`} 
                                                alt="graphic" 
                                            />
                                        </div>
                                    ))
                               }
                            </div>
                            <div className={styles.text_content}>
                                <p>{graphic.content}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default GraphicDesign