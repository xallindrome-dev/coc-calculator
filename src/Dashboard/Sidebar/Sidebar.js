import React, { Component } from 'react'
import VariablesForm from './VariablesForm/VariablesForm';
import CreateForm from './CreateForm/CreateForm';
import BuildList from './BuildList/BuildList';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-3">
                <nav className="col-md-3 d-none d-md-block bg-light sidebar collapse in" id="sidebar">
                    <div className="sidebar-sticky">
                        <div className="list-group panel">
                            <VariablesForm />
                            <CreateForm />
                            <BuildList />
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Sidebar
