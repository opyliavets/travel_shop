import React from 'react'

const NameBlock = props => {
    return (
        <div
            className={props.classNameBlock}            
        >
            <h5>
                {props.blockName}
            </h5>
        </div>             
    )
}

export default NameBlock