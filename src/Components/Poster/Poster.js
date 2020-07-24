import React from 'react'
import classes from './Poster.module.scss'
import Photo from './Photo/Photo'
import Info from './Info/Info'

const Poster = props => {
    const cls = [classes.Poster]

    return (
        <div
            className={cls}
            type={props.type}
        >
            <Photo
                url={props.url}
            />
            <Info
                header={props.header}
                description={props.description}
            />
        </div>
    )
}

export default Poster