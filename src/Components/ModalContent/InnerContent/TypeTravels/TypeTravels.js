import React from 'react'
// import classes from './TypeTravels.module.scss'
import Slider from '../Slider/Slider'
import Desc from '../Decs/Desc'

const TypeTravels = props => {
    return (
        <React.Fragment>
            <Slider
                legend1={props.legend1}
                legend2={props.legend2}
                legend3={props.legend3}
            />        
            <Desc
                title={props.title}
                places={props.places}
                season={props.season}
                description={props.description}
                price={props.price}
            />
        </React.Fragment>
    )
}

export default TypeTravels


