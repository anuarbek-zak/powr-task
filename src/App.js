import React, { Component } from 'react';
import './App.css';
import './components/Container/index';
import Container from "./components/Container/";
import store from './store/';
// import { Provider } from 'mobx-react';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {hello:'hi',elements: [
        {type:'container',
            items:[
                {type:'container',
                    items:[
                        {type:'box', color:'green'},
                        {type:'container', items:[
                                {type:'box',color:'blue'}
                            ]},
                        ]},
                {type:'box'},
                {type:'box', color:'red'}
                ]},
        ]};
  }

  addItem(index){
      // let counter = 0;
      // let container = {};
      // while (index!==counter){
      //   container = this.state.elements[counter];
      // }
      // this.setState({elements:[{type:'container',items:[]}]});
      console.log(index)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Container addItem={this.addItem.bind(this)} index={0} items={this.state.elements[0].items}/>
      </div>
    );
  }
}

export default App;
