import React, { Component } from 'react'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'
import classes from './Header.module.scss'

class Header extends Component{    

    render() {
        return (
            <div className={classes.Header}>
                <Logo />
                <Menu />                
            </div>
        )
    }
}

export default Header