import React, { Component } from 'react'
import classes from './Footer.module.scss'
import FooterNav from './FooterNav/FooterNav'
import EmailForm from './EmailForm/EmailForm'
import Copyrights from './Copyrights/Copyrights'

class Footer extends Component{
    render() {
        return (
            <div className={classes.FooterWrapper}>
                <div className={classes.Footer}>
                    <FooterNav />
                    <EmailForm/>                
                </div>
                <Copyrights/>
            </div>
        )
    }
}

export default Footer