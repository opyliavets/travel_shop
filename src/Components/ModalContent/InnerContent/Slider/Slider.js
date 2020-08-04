import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './Slider.module.scss'
 
class Slider extends Component {
    render() {
        return (
            <div className={classes.Slider}>
                <Carousel>
                    <div>
                        <img 
                            src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                            
                        />
                        <p className="legend">{this.props.legend1}</p>
                    </div>
                    <div>
                        <img
                            src='https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
                            
                        />
                        <p className="legend">{this.props.legend2}</p>
                    </div>
                    <div>
                        <img
                            src='https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80'
                            
                        />
                        <p className="legend">{this.props.legend3}</p>
                    </div>
                </Carousel>
            </div>
        );
    }
};
 
export default Slider