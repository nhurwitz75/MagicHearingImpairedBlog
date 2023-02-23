import React, { Component } from 'react';
import car from '../img/nava_car.jpg';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div>
                    <img class="car" src={car} alt="Picture of Me in car"></img>
                </div>
            </div>
        );
    }
}
