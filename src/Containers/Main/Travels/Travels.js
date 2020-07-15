import React, { Component } from 'react'
import classes from './Travels.module.scss'
import TabsTitle from '../../../Components/TabsTitle/TabsTitle'

class Travels extends Component{
    state = {
        images: {
            TitleTabMainImage: "https://images.unsplash.com/uploads/141148589884100082977/a816dbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        tabName: 'Мандрівки'
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

export default Travels