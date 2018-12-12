import React, { Component } from 'react';
import './App.css';
import './components/Container/index';
import Container from "./components/Container/";
import { toJS } from 'mobx';
import {observer} from "mobx-react/index";


@observer
class App extends Component {

  constructor(props){
    super(props);
    this.state = {createdJSON:'', textForBuild: ''};
  }

    createJSON(){
      this.setState({createdJSON: toJS(this.props.store.rootContainer)});
    }

    build(){
        this.props.store.rootContainer = JSON.parse(this.state.textForBuild);
        console.log(toJS(this.props.store.rootContainer));
    }

  render() {
    return (
        <div className="App">
            <div>
                <p>1.</p>
                <Container addItem={this.props.store.addItem} items={this.props.store.rootContainer.items}/>
            </div>
            <div>
                <p>2</p>
                <button onClick={()=>this.build()}>Build</button>
                <br/>
                <textarea onChange={e=> this.setState({'textForBuild': e.target.value})} cols="30" value={this.state.textForBuild} rows="10"></textarea>
            </div>
            <div>
                <p>3.</p>
                <button onClick={()=>this.createJSON()}>Create JSON</button>
                <br/>
                <p className="createdJSON">{JSON.stringify(this.state.createdJSON)}</p>

            </div>
        </div>
    );
  }
}

export default App;
