import React from 'react'

const TabsTitleImage = props => {
    return (
        <div
            className={props.tabsImageClass}
            style={{
                backgroundImage: `url(${props.url})`,             
            }}
        />
    )
}

export default TabsTitleImage