import React from 'react'
import classes from './Info.module.scss'

const Info = props => {
        return (
            <div className={classes.Info}>
                <h2>{props.header}</h2>
                <p>{props.description}</p>
            </div>
        )
}
    
export default Info