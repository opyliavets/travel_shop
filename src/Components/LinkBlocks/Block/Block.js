import React from 'react'
import classes from './Block.module.scss'
import ImageBlock from './ImageBlock/ImageBlock'
import NameBlock from './NameBlock/NameBlock'

const Block = props => {
    return (
        <div className={classes.Block}>
            <ImageBlock
                classImageBlock={classes.ImageBlock}
                url={props.url}
            />
            <NameBlock
                classNameBlock={classes.NameBlock}
                blockName={props.description}                
            />
        </div>
    )
}

export default Block