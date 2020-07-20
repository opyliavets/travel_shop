import React from 'react'
import classes from './Slogan.module.scss'

const Slogan = props => {
    return (
        <div className={classes.Slogan}>
            <h1>
                {props.slogan}
            </h1>
        </div>
    )
}

export default Slogan