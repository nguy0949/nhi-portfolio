import React, { useEffect, useContext } from 'react'
import styles from './about.module.scss'
import { Avatar, Button } from '@mui/material'
import avatar from '../../../images/aboutpage/avatar.jpg'
import resume from '../../../images/aboutpage/RESUME.pdf'
import LinkedInIcon from '../../../images/aboutpage/linkedin_icon.png'
import GmailIcon from '../../../images/aboutpage/gmail_icon.png'
import BehanceIcon from '../../../images/aboutpage/behance_icon.png'
import InstagramIcon from '../../../images/aboutpage/instagram_icon.png'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../../AppContext'

function About() {
    const { changeUseAppBG, changePageName } = useContext(AppContext)

    useEffect(() => {
        changePageName('About')

        return () => {
            changePageName('')
        }
    }, [])

    return (
        <div className={styles.page_container}>
            <div className={styles.container}>
                <div className={styles.main_content}>
                    <div className={styles.avatar_container}>
                        <p className={styles.name}>Nhi Nguyen</p>
                        <Avatar className={styles.avatar} alt="Nhi Nguyen" src={avatar} sx={{}} />
                        <p className={styles.address}>Ottawa, ON, Canada</p>
                    </div>
                    <div className={styles.introduction}>
                        <p className={styles.no_margin}>
                            Hello! My digital portfolio is a visual journey through my imagination, where I explore many art styles/ trends and technology
                            tools to bring unique and captivating creations to life.
                        </p>
                        <p className={styles.no_margin}>
                            Besides my academic journey 4-year study in marketing and media product management at Hoa Sen University,
                            <br />I am also an alumnus of Algonquin College, I majored in Interactive Media Design, delving into the realms of graphic design, content creation, video production, and UI/UX.
                        </p>
                        <p className={styles.no_margin}>
                            More than that, proficient in Adobe Creative Suits and Blender software, I bring a seamless blend of creativity and technical expertise.
                        </p>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.resume_link}>
                        <Button className={styles.resume_button} href={resume} variant="contained" target="_blank">Resume</Button>
                    </div>
                    <div className={styles.social_links}>
                        {/* <a href='https://www.instagram.com/ntran9409?igsh=ajA4aDV3dGFvemww&utm_source=qr' target='_blank'>
                            <img className={styles.social_icon} src={InstagramIcon} alt="Instagram" />
                        </a> */}
                        <a href='https://www.behance.net/nhinguyen311' target='_blank'>
                            <img className={styles.social_icon} src={BehanceIcon} alt="Behance" />
                        </a>
                        <a href='https://www.linkedin.com/in/nhi-nguyen-8720692a3' target='_blank'>
                            <img className={styles.social_icon} src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                        <a href='mailto:NHI.ADOBE@GMAIL.COM' target='_blank'>
                            <img className={styles.social_icon} src={GmailIcon} alt="Gmail" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
