import React, { Component } from 'react'
import classes from './Layout.module.scss'
import Header from '../../Containers/Header/Header'
import Footer from '../../Containers/Footer/Footer'
import Main from '../../Containers/Main/Main'
import { Route, Switch } from 'react-router-dom'
import TitlePage from '../../Containers/Main/Title/Title'
import AboutPage from '../../Containers/Main/About/About'

export default class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Header/>
                <Main>
                    <Switch>
                        <Route path='/' component={TitlePage}/>
                        <Route path='/about' component={AboutPage} />
                    </Switch>
                </Main>
                <Footer/>
            </div>
        )
    }
}