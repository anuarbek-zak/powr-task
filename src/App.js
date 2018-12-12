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
      try{
          let containerObj = JSON.parse(this.state.textForBuild);
          if(containerObj.items){
              this.props.store.rootContainer = containerObj;
          }
      }catch (e) {
          console.log('please follow pattern')
        }
      }

  render() {
    return (
        <div className="App">
            <div>
                <p>1.(press "ctr+x" to delete selected box)</p>
                <Container items={this.props.store.rootContainer.items} store={this.props.store}/>
            </div>
            <div>
                <p>2</p>
                <button onClick={()=>this.build()}>Build</button>
                <br/>
                <textarea placeholder="Example: {type:'container', items:[]}" onChange={e=> this.setState({'textForBuild': e.target.value})} cols="30" value={this.state.textForBuild} rows="10"></textarea>
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
