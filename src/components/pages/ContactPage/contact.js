import React, { useState, useEffect, useContext, useRef } from "react"
import styles from './contact.module.scss'
import { AppContext } from '../../../AppContext'
import { Button } from "@mui/material"
import BaseTextField from "../../commons/BaseTextField"
import MailIcon from '../../../images/contactpage/mail_icon.png'
import LocationIcon from '../../../images/contactpage/location_icon.png'
import CallIcon from '../../../images/contactpage/call_icon.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const { changePageName, changeUseAppBG } = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef()

    useEffect(() => {
        changePageName('Contact')
        changeUseAppBG(true)

        return () => {
            changePageName('')
            changeUseAppBG(false)
        }
    }, [])

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_8m1hdod', 'template_yum38t1', form.current, {
                publicKey: 'dwyuucNhlLI2o--u0',
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                },
                (error) => {
                    console.log('FAILED...', error.text)
                },
            )
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <form className={styles.contact_form} ref={form} onSubmit={sendEmail}>
                    <div className={styles.main_info}>
                        <BaseTextField size="small" value={name} name="user_name" onChange={handleChangeName} variant="outlined" placeholder="Full name" fullWidth />
                        <BaseTextField size="small" value={email} name="user_email" onChange={handleChangeEmail} variant="outlined" placeholder="Email" fullWidth />
                    </div>
                    <div>
                        <BaseTextField size="small" value={message} name="user_message" onChange={handleChangeMessage} variant="outlined" placeholder="Message" multiline rows={2} maxRows={3} fullWidth />
                    </div>
                    <div>
                        <Button type="submit" variant="contained" className={styles.button}>Send</Button>
                    </div>
                </form>
            </div>

            <div className={styles.icon_container}>
                <p>For any problems, please contact me at: </p>
                <div className={styles.icons}>
                    <div className={styles.icon_row}>
                        <img className={styles.social_icon} src={MailIcon} alt="Gmail" />
                        <p>nhi.adobe@gmail.com</p>
                    </div>
                    <div className={styles.icon_row}>
                        <img className={styles.social_icon} src={CallIcon} alt="Gmail" />
                        <p>+1 (613) 807-3007</p>
                    </div>
                    <div className={styles.icon_row}>
                        <img className={styles.social_icon} src={LocationIcon} alt="Gmail" />
                        <p>Ottawa, ON, Canada</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
