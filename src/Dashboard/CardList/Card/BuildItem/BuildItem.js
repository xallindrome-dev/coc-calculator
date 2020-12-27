import React, { Component } from 'react'

class BuildItem extends Component {
    render() {
        //let outcome = `$outcome.displayName increased by $toAbbreviated(outcome.amount)`;

        return (
            <li className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">$capitalizeFirstLetters(item.name)</h5>
                    <small className="text-muted">$item.time hours</small>
                </div>
                <p className="mb-1">
                    $outcome
                </p>
                <small className="text-muted">Cost: $toThousands(item.cost) $item.resource</small>
            </li>
        )
    }
}

export default BuildItem
