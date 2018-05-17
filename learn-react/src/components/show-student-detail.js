import React, { Component } from 'react';
import './show-student-detail.scss';

class ShowStudentDetail extends Component {
    constructor(props){
        super(props);//第一步，这是必须的
        //不能调用state
    }
    state = {
    };
    static defaultProps = {
            name:'show detail',
            list:[]
    }
    hidePopup(e){
        this.props.hide();
        return false;
    }
    stopPropagation(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        return false
    }
    render() {
        console.log(this.state,this.props);
        return (
            <div className='student-detail-content center-flex' onClick={(e)=>{this.hidePopup(e)}}>
                <div className="detail-content" onClick={(e)=>{this.stopPropagation(e)}}>
                    <p className=""><span className="label">课程名称：</span>{this.props.model.course}</p>
                    <p className=""><span className="label">课程成绩：</span>{this.props.model.grade}</p>
                    <p className=""><span className="label">学生姓名：</span>{this.props.model.studentName}</p>
                    <p className=""><span className="label">学生性别：</span>{this.props.model.gender=='1'?"男":"女"}</p>
                    <p className=""><span className="label">邮箱账号：</span>{this.props.model.email}</p>
                    <p className=""><span className="label">联系方式：</span>{this.props.model.mobile}</p>
                    <p className=""><span className="label">出生年月：</span>{this.props.model.britch}</p>
                    <button className="close" onClick={(e)=>{this.hidePopup(e)}}>关闭</button>
                </div>
            </div>
        );
    }
}

export default ShowStudentDetail;
