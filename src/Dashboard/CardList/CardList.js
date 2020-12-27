import React, { Component } from 'react'
import Card from './Card/Card';

class CardList extends Component {
    render() {
        return (
            <div className="col-12 cards">
                <div className="card-deck">
                    <Card />
                </div>
            </div>
        )
    }
}

export default CardList
