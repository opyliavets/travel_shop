import React, { Component } from 'react'
import classes from './Title.module.scss'

class TitlePage extends Component{
    render() {
        return (
            <div className={classes.TitlePage}>
                <h1>I'm Title!</h1>
            </div>
        )
    }
}

export default TitlePage