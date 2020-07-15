import React, { Component } from 'react'
import classes from './Main.module.scss'
import { Route, Switch } from 'react-router-dom'
import Title from './Title/Title'
import Guides from './Guides/Guides'
import Travels from './Travels/Travels'
import Places from './Places/Places'


class Main extends Component{
    render() {
        return (
            <div className={classes.Main}>                
                <Switch>
                    <Route path='/' component={Title} exact='true'/>
                    <Route path='/travels' component={Travels} />                    
                    <Route path='/places' component={Places} />
                    <Route path='/guides' component={Guides} />
                </Switch>               
            </div>
        )
    }
}

export default Main