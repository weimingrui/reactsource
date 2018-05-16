import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableContentList from './components/table-list'
import AddTableItem from './components/add-table-item'
class App extends Component {
  constructor(props){
    super(props);//第一步，这是必须的
    //不能调用state
  
}
state = {
    list:[
      {
          id: 0,
          name: '吃饭',
          status: 0
      }, {
          id: 1,
          name: '睡觉',
          status: 0
      }, {
          id: 2,
          name: '打豆豆',
          status : 0
      }]
  };
  handleChange(rows){
    this.setState({
      list:rows
    });
  }
  static defaultProps = {
        id: 0,
        name: '吃饭',
        status: 0
  }
  render() {
    return (
      <div className="App">
        <AddTableItem onAdd={this.handleChange.bind(this)} list={this.state.list}/>
        <TableContentList onDel={this.handleChange.bind(this)} list={this.state.list}/>
      </div>
    );
  }
}

export default App;
