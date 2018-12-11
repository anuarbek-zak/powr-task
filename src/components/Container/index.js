import React, { Component } from 'react';
import './index.css';
import Box from '../Box/';

class Container extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                {
                    this.props.items.map( elem => {
                        if(elem.type==='box'){
                            return <Box color={elem.color} />
                        } else {
                            return <Container index={this.props.index+1}  addItem={this.props.addItem}  items={elem.items} />
                        }
                        })
                }
                <button onClick={() => this.props.addItem(this.props.index)}>Add</button>

            </div>
        );
    }
}

export default Container;
