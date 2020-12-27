import React, { Component } from 'react'

class Overview extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="btn bg-gold mr-2">
                    <b>Gold Spent &nbsp;</b>
                    <span className="badge badge-light gold-spent"></span>
                </div>
                <div className="btn bg-elixer mr-2">
                    <b>Elixer Spent &nbsp;</b>
                    <span className="badge badge-light elixer-spent"></span>
                </div>
                <div className="btn bg-dark text-light">
                    <b>Days Elapsed &nbsp;</b>
                    <span className="badge badge-light days-elapsed"></span>
                </div>
            </div>
        )
    }
}

export default Overview
