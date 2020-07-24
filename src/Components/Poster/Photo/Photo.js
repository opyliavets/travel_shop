import React from 'react'
import classes from './Photo.module.scss'

const Photo = props => {
        return (
            <div
                className={classes.Photo}
                style={{
                    backgroundImage: `url(${props.url})`,             
                }}
            />   
        )
}
    
export default Photo