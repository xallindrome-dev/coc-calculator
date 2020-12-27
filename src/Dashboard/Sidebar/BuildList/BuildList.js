import React, { Component } from 'react'
import Wrapper from '../../../shared/Wrapper/Wrapper';

class BuildList extends Component {
    render() {
        return (
            <Wrapper>
                <a className="list-group-item collapsed" href="#buildOrder" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
                    <h5 className="ml-3">Build Order</h5>
                </a>
                <ul className="list-group sortable w-100 mt-3 px-3 collapse" id="buildOrder"></ul>
            </Wrapper>
        )
    }
}

export default BuildList
