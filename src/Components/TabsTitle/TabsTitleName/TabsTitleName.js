import React from 'react'

const TabsTitleImage = props => {
    return (
        <div className={props.tabNameClass}>
            <h3>
                {props.tabName}
            </h3>
        </div>
    )
}

export default TabsTitleImage