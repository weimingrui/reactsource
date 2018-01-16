
var ItemList=React.createClass({
    getInitialState:function(){
        return {redraw:0,
        playIndex:-1,
        requestData:true,}
    },
    getDefaultProps:function(){
        return {

        };
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
        console.log('shouldComponentUpdate');
        if(0){
            return false;
        }
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
    testFunc:function (){
        return this.refs.container;
    },
    itemMoseOver:function(index){
        if(this.refs&&this.refs[index]){
            this.refs[index].style.background="rgb(218, 209, 209)";
            this.refs[index].style.backgroundY="-5px";
        }

    },
    itemMouseOut:function(index){
        if(this.refs&&this.refs[index]){
            this.refs[index].style.background=""
        }
    },
    play:function(index){
        if(this.state.playIndex==index){
            return
        }
        this.setState({playIndex: index});
        var _videoHandler= this.props._Modules.videoPlayerHandler;
        _videoHandler.setVideoSrc(this.props.data[index].url);
        _videoHandler.playPause();

        var Moduls=this.props._Modules.videoController;
            Moduls.updateVideoCurrentTime();


    },
    createNewItem:function(itemData,index){
        var _this=this;
        var text=<p className="text_area_normal text" ref={"text"+index}>{itemData.title}</p>;
        var img=<div></div>;
        var bottomLine=''//<div className="item_bottom_line"></div>;
        var resetArea={};
        var oder=<div>{img}{text}{bottomLine}</div>
        if((index)==this.state.playIndex){
            img=<img className={"items_icon"}src={itemData["imgSrc"]}/>;
            text=<p className="text_area_play text" ref={"text"+index}>{itemData.title}</p>;
            bottomLine=''//<div className="item_bottom_line" style={{position:"relative",top:"5px"}}></div>;
            resetArea={height:"90px"};
            oder=<div>{img}{bottomLine}{text}</div>
        }
        return (<li key={index}  ref={index} name={itemData.title} style={resetArea} onClick={this.play.bind(this,index)}
                    onMouseOver={_this.itemMoseOver.bind(this,index)} onMouseOut={this.itemMouseOut.bind(this,index)}>
            {oder}</li>);
    },
    managerHandle:function(){
        var a=1;
        if(a==1){
            this.addNewUser(this.props.data[0]);
            console.log('if true')
        }else{
            console.log('kkkkk')
        }
        this.setState({redraw:this.state.redraw+1});
    },
    drawItemList:function(){
        this.props._Modules.ItemList=this;

        var data=this.props.data;
        var _this=this;
        var tableItems=data.map(function(itemData,index){
            return function(itemData,index){return _this.createNewItem(itemData,index)}(itemData,index)
        })
        return <ul  id="itemList" ref="itemsTable" type="none" style={{padding:"0px"}}>{tableItems}</ul>

    },
    render : function(){
        var _this=this;
        return (<div ref="container"> {this.drawItemList()}</div>);
    }
});
var xhr = new AjaxRequest();
var url='';/*数据链接暂时不提供*/
xhr.getHtmlContent(url,'','GET','','text',function(reponse){
    var data=null;
    try{
     data=JSON.parse(reponse.data).channel.data[0].dataItem;
     data.length=40;
    }catch (e){
     return
    }
    var component=ReactDOM.render(

     <ItemList  name="ItemList" _Modules={Modules} data={data}/>

     ,document.getElementById('item-list'));

    Modules.ItemList.play(0);
    });
//@ sourceMappingURL=/path/to/file.js.map