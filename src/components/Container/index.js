import React, { Component } from 'react';
import './index.css';
import Box from '../Box/';
import {observer} from "mobx-react/index";


@observer
class Container extends Component {

    render() {
        console.log(`Container re-rendered`);

        return (
            <div className="container">
                {
                    this.props.items.map( elem => {
                        if(elem.type==='box'){
                            return <Box color={elem.color} />
                        } else {
                            return <Container addItem={this.props.addItem} items={elem.items} />
                        }
                        })
                }

                <div className="buttons-container">
                    <div className="buttons">
                        <button onClick={() => this.props.addItem(this.props.items,'box')}>Box</button>
                        <button onClick={() => this.props.addItem(this.props.items,'container')}>Container</button>
                    </div>
                    Add
                </div>
            </div>
        );
    }
}

export default Container;
