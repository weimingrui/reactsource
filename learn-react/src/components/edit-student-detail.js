import React, { Component } from 'react';
import './edit-student-detail.scss';
let defaultStudent = {};
class EditStudentDetail extends Component {
    constructor(props){
        super(props);//第一步，这是必须的
        //不能调用state
    }
    state = {
        model:{}
    };
    static defaultProps = {
            name:'add',
            list:[]
    }
  
    componentWillMount(){
        let model = JSON.parse(JSON.stringify(this.props.model));
        defaultStudent = model;
        this.setState({model:model})
    }
    handleAdd(e){
        e.preventDefault();
    }
    hidePopup(e){
        this.props.hide();
        return false;
    }
    updateStudent(e){
        if(e.currentTarget.className=="grade"&&e.currentTarget.value>100){
            return false;
        }
        defaultStudent[e.currentTarget.className]=e.currentTarget.value;
        console.log('update-set',defaultStudent)
        this.setState({model:defaultStudent})
    }
    updateStudentData(){
        if(this.state.model.grade==''){
            alert('成绩不能为空！')
            return false;
        }
        if(!String(this.state.model.email).match(`^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$`)){
            alert('请输入正确的邮箱地址')
            return false;
        }
        if(!String(this.state.model.mobile).match(`^(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$`)){
            alert('请输入正确的手机号码')
            return false;
        }
        this.props.update(defaultStudent);
        console.log('update-0',defaultStudent)
        this.props.hide();
    }
    render() {
        // console.log(this.state,this.props);
        return (
            <div className='student-detail-content center-flex edit-student-detail-contain'>
                <div className="detail-content">
                    <p className=""><span className="label">课程名称：</span>{this.props.model.course}</p>
                    <p className=""><span className="label">学生姓名：</span>{this.props.model.studentName}</p>
                    <p className=""><span className="label">学生性别：</span>{this.props.model.gender=='1'?"男":"女"}</p>
                    <p className=""><span className="label">出生年月：</span>
                        <input placeholder="请输入出生年月..." className="britch" value={this.state.model.britch|| ''} onChange={(e)=>{this.updateStudent(e)}}/>
                    </p>
                    <p className="">
                        <span className="label">课程成绩：</span>
                        <input type="number" placeholder="请输入成绩..." className="grade" value={this.state.model.grade|| ''} onChange={(e)=>{this.updateStudent(e)}}/>
                    </p>                   
                    <p className="">
                        <span className="label">邮箱账号：</span>
                        <input className="email" type="email" placeholder="请填写邮箱账号..." value={this.state.model.email|| ''} onChange={(e)=>{this.updateStudent(e)}}/>
                        </p>
                    <p className="">
                        <span className="label">联系方式：</span>
                        <input className="mobile" placeholder="请填写联系方式..." value={this.state.model.mobile|| ''} onChange={(e)=>{this.updateStudent(e)}}/>
                    </p>
                    <div>
                        <button className="cancel" onClick={(e)=>{this.hidePopup(e)}}>取消</button>
                        <button className="update" onClick={(e)=>{this.updateStudentData(e)}}>更新</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStudentDetail;
