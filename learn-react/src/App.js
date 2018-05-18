import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableContentList from './components/table-list'
import AddTableItem from './components/add-table-item'
import ShowStudentDetail from './components/show-student-detail'
import EditStudentDetail from './components/edit-student-detail'
class App extends Component {
  constructor(props){
    super(props);//第一步，这是必须的
    //不能调用state
  }
  static defaultProps= {
    list:[
      {
          id: 0,
          studentName: '李小明',
          gender: '1',
          grade: 90,
          mobile: 13912312323,
          email: 'xiaoming@xxx.edu.com',
          britch:'1994-10',
          meta:'',
          course:"C++",
          status: 0,
          no:118237107
      },
      {
        id: 1,
        studentName: '王大锤',
        gender: '1',
        grade: 90,
        mobile: 13912312323,
        email: 'xiaoming@xxx.edu.com',
        britch:'1994-10',
        meta:'',
        course:"C++",
        status: 0,
        no:118237001
    }
  ]
  }
  state = {
    popupState: 0,
    studentDetailModel:{},
    searchList:[],
    searchText:''
  };
  componentWillMount(){
    this.setState({searchList:this.props.list,originList:this.props.list})
  }
	deleteStudentDetail(data){
		let newList = [];
		this.state.originList.forEach(item => {
			if(item.id+'' != data.id+''){
				newList.push(item);
			}
		});
		this.setState({originList:newList})
		let newSList = [];
		newList.forEach(item => {
			if(item.name.indexOf(this.state.searchText)>-1){
				newSList.push(item);
			}
		});
		this.setState({searchList:newSList});
  }
  hideStudentDetail() {
    this.setState({isShowStudentDetail: 0,studentDetailModel:{}})
  }
  showStudentDetail(data) {
    this.setState({isShowStudentDetail: 1,studentDetailModel:data})
  }
  editStudentDetail(data){
    this.setState({isShowStudentDetail: 2,studentDetailModel:data})
  }
  addStudentDetail(){
    this.setState({isShowStudentDetail: 3,studentDetailModel:{}})
  }
  searchStudentList(searchText){
    let newList = [];
    this.state.originList.forEach(item => {
      if(item.studentName.indexOf(searchText)>-1){
        newList.push(item);
      }
    });
    this.setState({searchList:newList});
    console.log('1111',this.state.searchList)
    this.setState({searchText:searchText});
  }
  updateStudentData(data){
    let newList = [];
    this.state.originList.forEach(item => {
      if(item.no == data.no){
        newList.push(data);
      }else{
        newList.push(item);
      }
    });
    this.setState({originList:newList})
    console.log('update-d',newList,this.state.originList)
    let newSList = [];
    newList.forEach(item => {
      if(item.studentName.indexOf(this.state.searchText)>-1){
        newSList.push(item);
      }
    });
    this.setState({searchList:newSList});
  }
  addStudentData(data){
    this.setState({originList:this.state.originList.push(data)});
    console.log('133333',this.state.originList)
    this.searchStudentList(this.state.searchText);
  }
  render() {
    return (
      <div className="App">
        <TableContentList onDel={this.deleteStudentDetail.bind(this)}
        list={this.state.searchList} 
        onShowDetail={this.showStudentDetail.bind(this)}
        onEditDetail={this.editStudentDetail.bind(this)}
        onAddDetail = {
          this.addStudentDetail.bind(this)
        }
        search={this.searchStudentList.bind(this)}
        />
        {this.state.isShowStudentDetail==1?<ShowStudentDetail hide={()=>this.hideStudentDetail()} model = {this.state.studentDetailModel}/>:''}
        {this.state.isShowStudentDetail==2?<EditStudentDetail 
          hide={()=>this.hideStudentDetail()}
          update={this.updateStudentData.bind(this)}
          model = {this.state.studentDetailModel}
        />:''}
        {this.state.isShowStudentDetail==3?<AddTableItem 
          hide={()=>this.hideStudentDetail()}
          add={this.addStudentData.bind(this)}
          model = {this.state.studentDetailModel}
        />:''}
      </div>
    );
  }
}

export default App;
