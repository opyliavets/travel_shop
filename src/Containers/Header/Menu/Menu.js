import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Menu.module.scss'

const links = [
    { to: '/', label: 'Про проект', exact: true },
    { to: '/travels', label: 'Мандрівки', exact: false },
    { to: '/places', label: 'Місця', exact: false }, 
    { to: '/guides', label: 'Гіди', exact: false },
   
]

class Menu extends Component{

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li
                    key={index}
                    className={classes.List__item}
                >
                    <NavLink
                        to={link.to}
                        exact={link.exact}                   
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.Menu}>
                <React.Fragment>
                    <nav className={classes.Nav}>
                        <ul className={classes.List}>
                            {this.renderLinks()}
                        </ul>
                    </nav>
                </React.Fragment>
            </div>
        )
    }
}

export default Menu