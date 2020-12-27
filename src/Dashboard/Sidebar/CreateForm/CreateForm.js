import React, { Component } from 'react'
import Wrapper from '../../../shared/Wrapper/Wrapper';

class CreateForm extends Component {
    render() {
        return (
            <Wrapper>
                <a className="list-group-item collapsed" href="#createBuild" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
                    <h5 className="ml-3">Create Build Item</h5>
                </a>
                <form className="px-3 collapse" id="createBuild">
                    <div className="row">
                        <div className="form-group col">
                            <label for="name">Name</label>
                            <input className="form-control" id="name" type="text" />
                        </div>
                        <div className="form-group col">
                            <label for="level">Level</label>
                            <input className="form-control" id="level" type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label for="resource">Resource</label>
                            <input className="form-control" id="resource" type="text" />
                        </div>
                        <div className="form-group col">
                            <label for="cost">Cost</label>
                            <input className="form-control" id="cost" type="number" />
                        </div>
                        <div className="form-group col">
                            <label for="time">Time (in hours)</label>
                            <input className="form-control" id="time" type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5>Outcomes</h5>
                        </div>
                        <div className="form-group col-8">
                            <label for="changeName">Name</label>
                            <input className="form-control" id="changeName" type="number" />
                        </div>
                        <div className="form-group col-4">
                            <label for="change">Change</label>
                            <input className="form-control" id="change" type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label for="amount">Amount</label>
                            <input className="form-control" id="amount" type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <button className="btn btn-primary float-right" id="addBuildItem">Add Build Item</button>
                        </div>
                    </div>
                </form>
                <div className="clearfix"></div>
            </Wrapper>
        )
    }
}

export default CreateForm
