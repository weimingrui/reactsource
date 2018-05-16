import React, { Component } from 'react';
import './table-list.css';

class TableContentList extends Component {
    constructor(props){
        super(props);//第一步，这是必须的
        //不能调用state
    }
    state = {
    };
    static defaultProps = {
            name:'add',
            list:[]
    }
    
    handleAdd(e){
        e.preventDefault();
        // 通过 refs 获取dom元素，然后获取输入的内容
        var inputDom=this.refs.inputnew;
        var newthing=inputDom.value.trim();
        // 获取传入的todolist数据
        var rows=this.props.list;
        if(newthing !==""){
            rows.push({id: 2, name:newthing, status: 0});
            // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
            this.props.onAdd(rows);
        }
        inputDom.value = '';

    }
    render() {
        console.log(this.state,this.props);
        return (
            <form onSubmit={this.handleAdd.bind(this)}>         
                <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" autoComplete="off" />
            </form>
        );
    }
}

export default TableContentList;
