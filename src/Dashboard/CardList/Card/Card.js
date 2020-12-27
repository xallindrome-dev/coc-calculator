import React, { Component } from 'react'
import Chart from '../../../shared/Chart/Chart';
import BuildItem from './BuildItem/BuildItem';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    $moment(data.startDate).format("dddd MM, YYYY [at] hh:mm a")
                          </div>
                <div className="card-body">
                    <h5 className="card-title">Builds: $builds</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Total Build Time: $data.totalBuildTime hours</h6>
                    $costs.length > 0 ? '<p className="card-text">Total Cost: ' + costs.join(', ') + '</p>' : ''
                </div>
                <div className="card-body">
                    {/* <canvas id='$moment(data.startDate).format("ddddMMYYYYhhmma") + this.index'></canvas> */}
                    <Chart id="" />
                </div>
                <ul class="list-group list-group-flush">
                    $cards
                    <BuildItem />
                </ul>
                <div className="card-footer text-right text-muted">
                    &nbsp;
                    $goldWarning
                    $elixerWarning
                </div>
            </div>
        )
    }
}

export default Card
