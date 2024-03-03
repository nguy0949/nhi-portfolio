import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, MenuItem } from '@mui/material'
import logo from '../../../images/homepage/logo.png'
import styles from './navbar.module.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { AppContext } from '../../../AppContext'

const Navbar = () => {
    const { isHomePage, pageName } = useContext(AppContext)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const linkClass = isHomePage ? styles.light_link : styles.dark_link
    const menuClass = isHomePage ? styles.light_menu : styles.dark_menu
    const navColor = isHomePage ? styles.light_nav : styles.dark_nav

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className={`${styles.navbar} ${navColor}`}>
            {
                isHomePage 
                    ? <div className={styles.navbar__logo}><img src={logo} alt="Logo" /> </div>
                    : <div className={styles.navbar__page_name}>{pageName}</div>
            }
            <div className={styles.navbar__links}>
                <div className={styles.menu_item}><NavLink className={linkClass} to="/" exact>Home</NavLink></div>
                <div className={styles.menu_item}><NavLink className={linkClass} to="/about" exact>About</NavLink></div>
                <div className={styles.menu_item}>
                    <span
                        className={styles.item_name}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Project
                        <ArrowDropDownIcon />
                    </span>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        classes={{ paper: menuClass }}
                    >
                        <MenuItem className={styles.nav_link} onClick={handleClose}><NavLink className={linkClass} to="/video-production" exact>Video Production</NavLink></MenuItem>
                        <MenuItem className={styles.nav_link} onClick={handleClose}><NavLink className={linkClass} to="/graphic-design" exact>Graphic Design and Illustration</NavLink></MenuItem>
                        <MenuItem className={styles.nav_link} onClick={handleClose}><NavLink className={linkClass} to="/photography" exact>Photography</NavLink></MenuItem>
                    </Menu>
                </div>
                <div className={styles.menu_item}><NavLink className={linkClass} to="/contact" exact>Contact</NavLink></div>
            </div>
        </div>
    )
}

export default Navbar
