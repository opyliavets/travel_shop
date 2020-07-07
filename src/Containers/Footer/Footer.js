import React, { Component } from 'react'
import classes from './Footer.module.scss'

class Footer extends Component{
    render() {
        return (
            <div className={classes.Footer}>
                <h1>I'm Footer!</h1>
            </div>
        )
    }
}

export default Footer