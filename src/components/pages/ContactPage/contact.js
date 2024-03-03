import React, { useState, useEffect, useContext } from "react"
import styles from './contact.module.scss'
import { AppContext } from '../../../AppContext'
import { Button } from "@mui/material"
import BaseTextField from "../../commons/BaseTextField"

const Contact = () => {
    const { changePageName } = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        changePageName('Contact')

        return () => {
            changePageName('')
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.contact_form}>
                <BaseTextField size="small" value={name} label="Full Name" variant="outlined" />
                <BaseTextField size="small" value={email} label="Email" variant="outlined" />
                <BaseTextField size="small" value={message} label="Message" variant="outlined" />
                <Button variant="contained" className={styles.button}>Send</Button>
            </div>
            <div></div>
        </div>  
    )
}

export default Contact
