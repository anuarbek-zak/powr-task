import React, { Component } from 'react';
import './index.css';
import Box from '../Box/';
import {observer} from "mobx-react/index";


@observer
class Container extends Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.items.map( elem => {
                        if(elem.type==='box'){
                            return <Box key={elem.id} store={this.props.store} box={elem} items={this.props.items} />
                        } else {
                            return <Container  key={elem.id}  store={this.props.store} items={elem.items} />
                        }
                        })
                }

                <div className="buttons-container">
                    <div className="buttons">
                        <button onClick={() => this.props.store.addItem(this.props.items,'box')}>Box</button>
                        <button onClick={() => this.props.store.addItem(this.props.items,'container')}>Container</button>
                    </div>
                    Add
                </div>
            </div>
        );
    }
}

export default Container;
