import React, { Component } from 'react'
import classes from './Layout.module.scss'
import Header from '../../Containers/Header/Header'
import Footer from '../../Containers/Footer/Footer'
import Main from '../../Containers/Main/Main'

export default class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}