import React, { Component } from 'react'
import classes from './Guides.module.scss'
import TabsTitle from '../../../Components/TabsTitle/TabsTitle'

class Guides extends Component{
    state = {
        images: {
            TitleTabMainImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
        },
        tabName: 'Гіди'
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

export default Guides