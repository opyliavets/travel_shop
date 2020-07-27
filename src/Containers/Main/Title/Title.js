import React, { Component } from 'react'
import classes from './Title.module.scss'
import TabsTitle from '../../../Components/TabsTitle/TabsTitle'
import Slogan from '../../../Components/Slogan/Slogan'
import LinkBlocks from '../../../Components/LinkBlocks/LinkBlocks'




class TitlePage extends Component{
    state = {
        images: {
            TitleTabMainImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
        },
        tabName: 'Про проект',
        slogan: 'Лише той хто мандрує, відкриває нові шляхи.',
        firstPoster: {
            photo: 'https://images.unsplash.com/photo-1595449379811-56f427b8063d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=628&q=80',
            type: 'Left',
            header: 'Подорожуй куди забажаєш',
            description: ':Все началось однажды ночью в середине 70-х, когда мы были в местном баре в Лос-Гатос в Калифорнии. Люди вокруг говорили о домашних животных, о том, как трудно кормить, гулять и убирать за ними. Пораженный внезапным вдохновением, Гэри Рос Даль заявил, что у него нет таких проблем с его «питомцем». «У меня есть любимый камень», — заявил он. Его ответ всех развеселил, а он решил поиграть с идеей и основал компанию, которая принесла ему миллионы: Даль начал продавать в качестве домашних животных обычные камни. Простая идея, которая принесла много денег.'
        }
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
                <LinkBlocks />
            </div>
        )
    }
}

export default TitlePage