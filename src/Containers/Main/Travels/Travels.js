import React, { Component } from 'react'
import classes from './Travels.module.scss'
import TabsTitle from '../../../Components/TabsTitle/TabsTitle'
import Poster from '../../../Components/Poster/Poster'
import Slogan from '../../../Components/Slogan/Slogan'

class Travels extends Component{
    state = {
        images: {
            TitleTabMainImage: "https://images.unsplash.com/uploads/141148589884100082977/a816dbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        tabName: 'Мандрівки',
        firstPoster: {
            name: 'Trekking',
            type: 'right',
            image: 'https://images.unsplash.com/photo-1595495745640-534ca1c3297c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80',
            header: 'Походи в гори',
            description: 'Спробуй разом з нами підкорити найвищі вершини світу!',
            buttonTitle: 'Дізнатись більше'
        },
        secondPoster: {
            name: 'Rafting',
            type: 'left',
            image: 'https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            header: 'Рафтинг',
            description: 'Спробуй разом з нами підкорити найстрімкіші річки України!',
            buttonTitle: 'Дізнатись більше'
        },
        thirdPoster: {
            name: 'Sea',
            type: 'right',
            image: 'https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
            header: 'Шалене море',
            description: 'Спробуй разом з нами підкорити високі хвилі Чорного моря!',
            buttonTitle: 'Дізнатись більше'
        },
        slogan: 'Лише той хто мандрує, відкриває нові шляхи!'
    }

    render() {
        return (
            <div className={classes.TitlePage}>
                <TabsTitle
                    url={this.state.images.TitleTabMainImage}
                    tabName={this.state.tabName}
                />
                <Slogan
                    slogan={this.state.slogan}
                />
                <Poster
                    type={this.state.firstPoster.type}
                    url={this.state.firstPoster.image}
                    header={this.state.firstPoster.header}
                    description={this.state.firstPoster.description}
                    btnName={this.state.firstPoster.buttonTitle}
                    state={this.state.firstPoster}
                />
                <Poster
                    type={this.state.secondPoster.type}
                    url={this.state.secondPoster.image}
                    header={this.state.secondPoster.header}
                    description={this.state.secondPoster.description}
                    btnName={this.state.secondPoster.buttonTitle}
                    state={this.state.secondPoster}
                />
                <Poster
                    type={this.state.thirdPoster.type}
                    url={this.state.thirdPoster.image}
                    header={this.state.thirdPoster.header}
                    description={this.state.thirdPoster.description}
                    btnName={this.state.thirdPoster.buttonTitle}
                    state={this.state.thirdPoster}
                />
            </div>
        )
    }
}

export default Travels