import React, { Component } from 'react';
import './table-list.scss';

class TableContentList extends Component {
    constructor(props){
        super(props);//第一步，这是必须的
        //不能调用state
    }
    state = {
    };
    static defaultProps = {
            name:'list',
            list:[]
    }
    
    handleDel(item){
        // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
        this.props.onDel(item);
    }
    showDetail(data){
        this.props.onShowDetail(data);
    }
    editDetail(data){
        this.props.onEditDetail(data);
    }
    searchStudentList(e){
        var inputDom=this.refs.inputSearch;
        var searchText=inputDom.value.trim();
        this.props.search(searchText)
    }
    render() {
        // console.log(this.state,this.props);
        return (
            <div>
                <div className="searchText">
                    <input className="input" type="text" ref="inputSearch" id="todo-new" placeholder="请输入学生名字"/>
                    <button className="search" onClick={() => this.searchStudentList()}> 搜索</button>
                </div>
                <div className="add-new-student-detail"><button className="search" onClick={() => this.props.onAddDetail()}> + 新增学生信息</button></div>
                <ul id="to-do-list">
                    {
                        this.props.list.map(function(item,i){
                        return (
                            <li key={i} className="flex-b">
                                <p className="flex-v-b flex-full">
                                    <span className="name">{item.studentName}</span>
                                    <span className="course">{item.course}</span>
                                    <span className="grade">{item.grade}</span>
                                </p>
                                <div>
                                    <button className="detele" onClick={() => this.handleDel(item)} data-key={i}>删除</button>
                                    <button className="show" onClick={() => this.showDetail(item)} data-key={i}>查看</button>
                                    <button className="edit" onClick={() => this.editDetail(item)} data-key={i}>编辑</button>
                                </div>
                            </li>
                        );						
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    }
}

export default TableContentList;
