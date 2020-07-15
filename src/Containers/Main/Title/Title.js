import React, { Component } from 'react'
import classes from './Title.module.scss'
import TabsTitle from '../../../Components/TabsTitle/TabsTitle'



class TitlePage extends Component{
    state = {
        images: {
            TitleTabMainImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
        },
        tabName: 'Про проект'
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

export default TitlePage