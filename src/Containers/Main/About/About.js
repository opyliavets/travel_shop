import React, { Component } from 'react'
import classes from './About.module.scss'

class About extends Component{
    render() {
        return (
            <div className={classes.About}>
                <h1>I'm About!</h1>
            </div>
        )
    }
}

export default About