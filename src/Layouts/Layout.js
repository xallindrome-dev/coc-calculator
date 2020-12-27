import React, { Component } from 'react'
import Wrapper from '../shared/Wrapper/Wrapper';
import Header from './Header/Header';
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <main className="container-fluid">
                    <div className="row">
                        {this.props.children}
                    </div>
                </main>
            </Wrapper>
        )
    }
}

export default Layout
