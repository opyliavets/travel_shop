import React, { Component } from 'react'
import classes from './LinkBlocks.module.scss'
import { NavLink } from 'react-router-dom'
import Block from '../LinkBlocks/Block/Block'

const links = [
    {
        to: '/travels',
        label: 'Подорожуй куди забажаєш',
        exact: false,
        url: 'https://images.unsplash.com/uploads/141095223684089854824/a352f6f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Here will be some short description'
    },
    {
        to: '/places',
        label: 'Знаходь найкращі місця',
        exact: false,
        url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Here will be some short description'
    }, 
    {
        to: '/guides',
        label: 'Обери свого провідника',
        exact: false,
        url: 'https://images.unsplash.com/photo-1588203833667-2bbcb75d4d35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        description: 'Here will be some short description'
    },   
]

class LinkBlocks extends Component {


    renderLinks() {
        return links.map((link, index) => {
            return (
                <div
                    key={index}
                    className={classes.LinkBlock}
                >
                    <Block
                        url={link.url}
                        blockName={link.label}
                        description={link.description}
                    />
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        className={classes.Link}
                    >
                        {link.label}
                    </NavLink>
                </div>
            )
        })
    }

    render() {
        return(
            <div className={classes.LinkBlocks}>
                {this.renderLinks()}
            </div>
        )    
    }

    // return (
    //     <div className={classes.LinkBlocks}>

    //     </div>
    // )
}

export default LinkBlocks