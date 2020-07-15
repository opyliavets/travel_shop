import React from 'react'
import classes from './TabsTitle.module.scss'
import TabsTitleImage from './TabsTitleImage/TabsTitleImage'
import TabsTitleName from './TabsTitleName/TabsTitleName'

const TabsTitle = props => {
    return (
        <div className={classes.TabsTitle}>
            <TabsTitleImage
                url={props.url}
                tabsImageClass={classes.Image}
            />
            <TabsTitleName
                tabName={props.tabName}
                tabNameClass={classes.Name}
            />            
        </div>
    )
}

export default TabsTitle