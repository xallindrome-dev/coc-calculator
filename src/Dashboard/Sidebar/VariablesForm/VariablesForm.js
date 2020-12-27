import React, { Component } from 'react'
import Wrapper from '../../../shared/Wrapper/Wrapper';

class VariablesForm extends Component {
    render() {
        return (
            <Wrapper>
                <a className="list-group-item collapsed" href="#variables" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
                    <h5 className="ml-3">Variables</h5>
                </a>
                <form className="px-3 collapse" id="variables">
                    <div className="row">
                        <div className="form-group col">
                            <label for="startDate">Start Date</label>
                            <input className="form-control" id="startDate" type="datetime-local" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label for="gold">Starting Gold</label>
                            <input className="form-control" id="gold" type="number" />
                        </div>
                        <div className="form-group col">
                            <label for="elixer">Starting Elixer</label>
                            <input className="form-control" id="elixer" type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label for="gRate">Gold Rate</label>
                            <input className="form-control" id="gRate" type="number" />
                        </div>
                        <div className="form-group col">
                            <label for="eRate">Elixer Rate</label>
                            <input className="form-control" id="eRate" type="number" />
                        </div>
                        <div className="form-group col">
                            <label for="gemRate">Gem Rate</label>
                            <input className="form-control" id="gemRate" type="number" step="0.01" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-4">
                            <label for="mines">Mines</label>
                            <input className="form-control" id="mines" type="number" />
                        </div>
                        <div className="form-group col-8">
                            <label for="dailyBonus">Daily Bonus</label>
                            <input className="form-control" id="dailyBonus" type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label for="maxGold">Max Gold</label>
                            <input className="form-control" id="maxGold" type="number" />
                        </div>
                        <div className="form-group col">
                            <label for="maxElixer">Max Elixer</label>
                            <input className="form-control" id="maxElixer" type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label for="maxGem">Max Gem</label>
                            <input className="form-control" id="maxGem" type="number" />
                        </div>
                    </div>
                </form>
            </Wrapper>
        )
    }
}

export default VariablesForm
