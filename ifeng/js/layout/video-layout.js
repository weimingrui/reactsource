/**
 * Created by mingruiwei on 2016/9/30.
 */
var VideoController=React.createClass({
    getInitialState:function(){
        return {redraw:0}
    },
    getDefaultProps:function(){
        return {playiindex:-1,
            data:{source:"about:null",
                title:"",
                desc:"",
                public:"",
                duration:0,
                currentTime:0
            },timer:{_updateVideoCurrentTimer:null}
        }
    },
    initModule:function(){
        this.props._Modules.videoController=this;
        setTimeout(this.updateVideoCurrentTime,2000)
       return this.drawVideoController();

    },
    reSetVideoData:function(){
        this.props.data={source:"about:null",
            title:"",
            desc:"",
            public:"",
            duration:0,
            currentTime:0
        };
        this.reDrawVideoController();
    },
    updateVideoData:function(data){
        if(this.props.data==data){
            return;
        }
        this.props.data=data;
        this.setState({redraw:this.state.redraw++});

    },
    clearTimeoutTimer:function(){
        if(this.props.timer._updateVideoCurrentTimer!=null){
            window.clearTimeout(this.props.timer._updateVideoCurrentTimer);
            this.props.timer._updateVideoCurrentTimer=null;
        }
    },
    updateVideoCurrentTime:function(){
        var _this=this;
        this.clearTimeoutTimer();
        _this.setState(function(state){
            var count=0;
            if(state.redraw<10){
                count=state.redraw+1;
            }
            return {redraw:count}});
        /*this.props.timer._updateVideoCurrentTimer=setTimeout(function(){

        },1000)
*/
    },
    componentWillMount:function() {

        console.log('Component WILL MOUNT!')
    },
    componentDidMount:function() {
        console.log('Component DID MOUNT!')
    },
    componentWillReceiveProps:function(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    },
    shouldComponentUpdate:function(newProps, newState) {
        console.log('shouldComponentUpdate')
        return true;
    },
    componentWillUpdate:function(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    },
    componentDidUpdate:function(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    },
    componentWillUnmount:function() {
        console.log('Component WILL UNMOUNT!')
    },
    getcurretTimeWidth:function(){
        var _videoPlayer=this.props.videoPlayer;
        var currentTime=_videoPlayer.getVideoCurrentTime();
        var duration=_videoPlayer.getVideoDuration();

        if(currentTime==0||duration==0){
            return {width:"0px"}
        }else{

            var time_w=parseInt(currentTime*780/duration)+"px";
            console.log('11111  '+time_w)
            return {width:time_w};
        }
    },
    getVideoTimeText:function(){

        var _videoPlayer=this.props.videoPlayer;
        var currentTime=_videoPlayer.getVideoCurrentTime();
        var duration=_videoPlayer.getVideoDuration();
        if(currentTime==0||duration==0){
            return '00:00/00:00'
        }else{
            var time_w=parseInt(currentTime*740/duration);
            var currentMinute = Math.floor(currentTime/60);
            if(currentMinute < 10)
                currentMinute = "0"+currentMinute;
            var currentSecond = currentTime - currentMinute*60;
            if(currentSecond < 10)
                currentSecond = "0"+currentSecond;

            var totalMinute = Math.floor(duration/60);
            if(totalMinute < 10)
                totalMinute = "0"+totalMinute;
            var totalSecond = duration - totalMinute*60;
            if(totalSecond < 10)
                totalSecond = "0"+totalSecond;

            var desc = currentMinute+":"+currentSecond+"/"+totalMinute+":"+totalSecond;
            return desc
        }
    },
    playPaused:function(){
        this.props.videoPlayer.playPause();
    },
    drawVideoController:function(){
        var data=this.props.data;
        var _this=this;
        var background=<div className="video_controller_background"></div>;
        var duration=<div className="video_controller_duration"></div>;
        var _time_w=this.getcurretTimeWidth();
        var currentTime=<div className="video_controller_currentTime" style={_time_w}></div>;
        var timeText=<div className="video_time">{this.getVideoTimeText()}</div>
        return (<div id="controller" ref="controller"  style={{padding:"0px"}}>
            {background}<div ref="menu"><img src="" onClick={this.playPaused}/></div><div style={{position:"relative",top:"-12px",left:"0px",float:"left"}}>
            {duration}{currentTime}{timeText}</div></div>)
    },
    render : function(){
        return (<div ref="video_controller"> {this.initModule()}</div>);
    }
});
ReactDOM.render(
    <div style={{position:"absolute",left:"0px",top:"0px"}}>
        <VideoController  name="videoPlayer" _Modules={Modules} videoPlayer={Modules.videoPlayerHandler} />
    </div>
    ,document.getElementById('video-controller'));