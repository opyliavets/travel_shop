import React, {Component} from 'react'
import classes from './Trekking.module.scss'
import TypeTrevels from '../InnerContent/TypeTravels/TypeTravels'


class Trekking extends Component {

    state = {
            image1: {
                legend: 'Photo 1'
            },
            image2: {
                legend: 'Photo 2'
            },
            image3: {
                legend: 'Photo 3'
            },
            title: 'Гірський треккінг',
            places: 'Карпати (Чорногора, Горгани, Мармароси, Татри), Кавказ',
            season: 'цілий рік',
            description: 'Гірський треккінг - це мандрівка гірською місцевістю, за тривалістю від 2-х днів... (Додати)',
            price: 'Від 500 грн/день'
        }
    render() {
        return (
            <div className={classes.Trekking}>
                <TypeTrevels
                    legend1={this.state.image1.legend}
                    legend2={this.state.image2.legend}
                    legend3={this.state.image3.legend}
                    title={this.state.title}
                    places={this.state.places}
                    season={this.state.season}
                    description={this.state.description}
                    price={this.state.price}
                />
            </div>
        )
    }
}

export default Trekking