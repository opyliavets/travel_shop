import React, { Component } from 'react'
import classes from './Main.module.scss'
import { Route, Switch } from 'react-router-dom'
import Title from './Title/Title'
import About from './About/About'
import Guide from './Guide/Guide'
import Contact from './Contact/Contact'


class Main extends Component{
    render() {
        return (
            <div className={classes.Main}>                
                <Switch>
                    <Route path='/' component={Title} exact='true'/>
                    <Route path='/guide' component={Guide} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>               
            </div>
        )
    }
}

export default Main