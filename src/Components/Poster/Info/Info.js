import React from 'react'
import classes from './Info.module.scss'
import PopUp from '../../UI/Modal/Modal'

const Info = props => {
        return (
            <div className={classes.Info}>
                <h2>{props.header}</h2>
                <p>{props.description}</p>
                <PopUp
                    btnName={props.btnName}
                    type={props.type}
                    state={props.state}
                />
            </div>
        )
}
    
export default Info