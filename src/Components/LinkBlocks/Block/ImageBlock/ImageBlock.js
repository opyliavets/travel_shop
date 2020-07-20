import React from 'react'

const ImageBlock = props => {
    return (
        <div
            className={props.classImageBlock}
            style={{
                backgroundImage: `url(${props.url})`,             
            }}
        />             
    )
}

export default ImageBlock