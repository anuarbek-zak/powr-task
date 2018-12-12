import React, { Component } from 'react';
import './index.css';
import { GithubPicker } from 'react-color'
import {observer} from "mobx-react/index";

@observer
class Box extends Component {

    constructor(props){
        super(props);
        this.state = {showPicker:false};
    }

    changeColor(e){
        this.props.store.changeColor(this.props.box, e.hex);
    }

    togglePicker(){
        this.setState({showPicker:!this.state.showPicker});
    }

    deleteBox(){
        this.togglePicker();
        this.props.store.deleteBox(this.props.box, this.props.items);
    }

    render() {
        return (
                <div onCut={()=>{this.deleteBox()}} onClick={()=>this.togglePicker()} style={{'background': this.props.box.color}} className="box">
                    {this.state.showPicker?<GithubPicker onChange={(evt)=>this.changeColor(evt)} className="picker"></GithubPicker>:null}
                </div>

        );
    }
}

export default Box;
