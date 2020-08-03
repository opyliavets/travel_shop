import React from 'react'
import classes from './Button.module.scss'

const Button = props => {
    const cls = [classes.Button]

    if (props.type) {
        cls.push(classes[props.type])
    }

    return (
        <React.Fragment>
            <button onClick={props.onClick} className={cls.join(' ')}>{props.btnName}</button>
        </React.Fragment>
    )
}
    
export default Button