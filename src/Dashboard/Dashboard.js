import React, { Component } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Wrapper from '../shared/Wrapper/Wrapper';
import Overview from './Overview/Overview';
import Chart from '../shared/Chart/Chart';
import CardList from './CardList/CardList';

class Dashboard extends Component {
    render() {
        return (
            <Wrapper>
                <Sidebar />
                <div className="col-9">
                    <div className="row">
                        <div className="col-12">
                            <h3>Build Plan</h3>
                        </div>
                        <Overview />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Chart id="buildChart" className="mb-2 mt-2" />
                        </div>
                        <CardList />
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Dashboard
