import React from 'react'
import classes from './Desc.module.scss'

const Desc = props => {
    return (
        <React.Fragment>
            <div className={classes.Desc}>
                <h1 className={classes.Title}>{props.title}</h1>
                <h4 className={classes.Places}>Місця: {props.places}</h4>
                <h4 className={classes.Seasons}>Сезон: {props.season}</h4>
                <p className={classes.Description}><b>Що це таке:</b> {props.description}</p>
                <p className={classes.Price}><b>Скільки це коштує:</b> {props.price}</p>
           </div>
        </React.Fragment>
    )
}

export default Desc