import React, { Component } from 'react'
import classes from './Places.module.scss'
import TabsTitle from '../../../Components/TabsTitle/TabsTitle'

class Places extends Component{
    state = {
        images: {
            TitleTabMainImage: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        },
        tabName: 'Місця'
    }

    render() {
        return (
            <div className={classes.TitlePage}>
                <TabsTitle
                    url={this.state.images.TitleTabMainImage}
                    tabName={this.state.tabName}
                />
            </div>
        )
    }
}

export default Places