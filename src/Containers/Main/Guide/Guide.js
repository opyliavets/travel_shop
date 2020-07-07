import React, { Component } from 'react'
import classes from './Guide.module.scss'

class Guide extends Component{
    render() {
        return (
            <div className={classes.Guide}>
                <h1>I'm Guide!</h1>
            </div>
        )
    }
}

export default Guide