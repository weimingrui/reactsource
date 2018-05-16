import React, { Component } from 'react';
import './table-list.css';

class TableContentList extends Component {
    constructor(props){
        super(props);//第一步，这是必须的
        //不能调用state
    }
    state = {
    };
    handleChange(rows){
        this.setState({
        list:rows
        });
    }
    static defaultProps = {
            name:'list',
            list:[]
    }
    
    handleDel(index){
        // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
        this.props.list.splice(index, 1);
        this.props.onDel(this.props.list);
    }
    render() {
        console.log(this.state,this.props);
        return (
            <ul id="to-do-list">
                {
                    this.props.list.map(function(item,i){
                    return (
                        <li key={i}>
                            <span>{item.name}</span>
                            <button className="destroy" onClick={() => this.handleDel(i)} data-key={i}>delete</button>
                        </li>
                    );						
                    }.bind(this))
                }
            </ul>
        );
    }
}

export default TableContentList;
