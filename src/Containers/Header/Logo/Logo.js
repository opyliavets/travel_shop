import React, { Component } from 'react'
import classes from './Logo.module.scss'

class Logo extends Component{    

    render() {
        return (
            <div className={classes.Logo}>
                <div className={classes.Logo__image}>
                </div>
                <div className={classes.Logo__title}>                   
                </div>
            </div>
        )
    }
}

export default Logo