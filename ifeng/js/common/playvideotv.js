//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});
var videoPlayerTV = function(context)

{
	var _videoPlayer = this;
	var event_listener = [];
	var InfrastructureInfo_listener = [];
	var parentElement = null;

	var videoplaytime=null;
	var progressBar_c = null;
	var _video=null;
	var _qchole=null;
	var counter=0;
	var _videoplaysign=false;
	var _firstenterfullScreen=false;
	var volumedisplay=null;
	var enterfullvideoscreen=null;
	var _isFullScreen=false;
	var _draw_progressbar_timer = null;
	var _seek_effective_timer = null;
	var _seek_effective_timer2 = null;
	var playeTime=0;
	var currenttime = -1;
	var _videopauseimg=null;
	var _videovolume=null;
	var _playtimeline=null;
	var video_zindex = 10000;
	var ctx = null;
	var isVisible = false;
	var isVisibleVolume=false;
	var useCss=false;

	var _player_container=null;
	var _videoplaycontain=null;
	var _playerSpinContain=null;
	//var netSpeed=null;
	var listeningNetSpeed=null;
	var resetNetSpeedPosition=null;
	var listeningPSign=null;
	var listening_Spin=null;
	var showProgressBarSign=true;
	var video_error_timer=null;
	var devicesInfo = null;
	var video_stalled_error_timer=null;
	var updateSign=true;
	var isAllowSpin=true;
	/*var opts = {
	 lines: 13, // The number of lines to draw
	 length: 15, // The length of each line
	 width: 5, // The line thickness
	 radius: 20, // The radius of the inner circle
	 corners: 1, // Corner roundness (0..1)
	 rotate: 0, // The rotation offset
	 direction: 1, // 1: clockwise, -1: counterclockwise
	 color: '#ffffff', // #rgb or #rrggbb or array of colors
	 speed: 1, // Rounds per second
	 trail: 60, // Afterglow percentage
	 shadow: false, // Whether to render a shadow
	 hwaccel: false, // Whether to use hardware acceleration
	 className: 'spinner', // The CSS class to assign to the spinner
	 zIndex: 0, // The z-index (defaults to 2000000000)
	 top: '49%', // Top position relative to parent
	 left: '50%', // Left position relative to parent
	 transform: 'translate(-50%, -50%)'
	 };
	 var spinner = null;*/
	var isTimerEnabled = false;
	var _current_time = 0;
	var isBuffering = false;
	var stable_indicator_count = 0;
	var errorType=null;
	var playingSign=false;
	var stable_indicator_count1=0;
	var allowReloadVideo=true;

	this.createVideoContainer=function()
	{
		isVisible = true;

		var width=0;
		var height=0;
		width = window.innerWidth || top.innerWidth || qcastTop.innerWidth;
		height = window.innerHeight|| top.innerHeight || qcastTop.innerHeight;
		//以1080P为基准
		var ratio = width/1280;

		//进度条
		progressBar_c = document.createElement("div");
		//progressBar_c.className = "progressBar_c";
		progressBar_c.style.width = width-130*ratio+"px";
		progressBar_c.style.height = 108*ratio+"px";
		progressBar_c.style.position = "absolute";
		progressBar_c.style.top = 566*ratio+"px";
		progressBar_c.style.left = 65*ratio+"px";
		//progressBar.style.backgroundColor = "rgba(0,0,0,0.5)";
		progressBar_c.style.display = "none";

		var totalBar = document.createElement("div");
		totalBar.className = "progressTotalBar";
		totalBar.style.width = width-130*ratio+"px";
		totalBar.style.height = "6px";
		totalBar.style.position = "absolute";
		totalBar.style.top = 54*ratio+"px";
		totalBar.style.left = 0*ratio+"px";
		totalBar.style.backgroundColor = "#595959";
		totalBar.style.display = "block";
		progressBar_c.appendChild(totalBar);

		var timeShow = document.createElement("div");
		timeShow.className = "progressTimeShow";
		timeShow.style.width = 200*ratio+"px";
		timeShow.style.height = 30*ratio+"px";
		timeShow.style.position = "absolute";
		timeShow.style.top = 35*ratio+"px";
		timeShow.style.right = 0*ratio+"px";
		timeShow.style.fontSize = 30*ratio+"px";
		timeShow.style.fontFamily='Arial,Helvetica,sans-serif,Fantasy,"宋体","Microsoft YaHei","黑体"';

		timeShow.style.color = "#ffffff";
		timeShow.style.lineHeight = 100*ratio+"px";
		timeShow.style.display = "block";
		timeShow.style.textAlign = "right";
		progressBar_c.appendChild(timeShow);

		var currentBar = document.createElement("div");
		currentBar.className = "progressCurrentBar";
		currentBar.style.width = width-130*ratio+"px";
		currentBar.style.height = "6px";
		currentBar.style.position = "absolute";
		currentBar.style.top = 54*ratio+"px";
		currentBar.style.left = 0*ratio+"px";
		currentBar.style.backgroundColor = "#046cd7";
		currentBar.style.display = "block";
		progressBar_c.appendChild(currentBar);
		//ctx= videoplaytime.getContext("2d");

		var seekBar = document.createElement("div");
		seekBar.className = "progressSeekBar";
		seekBar.style.width = width-130*ratio+"px";
		seekBar.style.height = "6px";
		seekBar.style.position = "absolute";
		seekBar.style.top = 54*ratio+"px";
		seekBar.style.left = 0*ratio+"px";
		seekBar.style.backgroundColor = "#b6b6b6";
		seekBar.style.display = "block";
		progressBar_c.appendChild(seekBar);

		var currentPosition = document.createElement("img");
		currentPosition.className = "progressCurrentPosition";
		currentPosition.style.width = 2*ratio+"px";
		currentPosition.style.height = 21*ratio+"px";
		currentPosition.style.top = 39*ratio+"px";
		currentPosition.style.left = 0*ratio+"px";
		currentPosition.src = "http://image.qcast.cn/player/icon/line.jpg";
		currentPosition.style.position = "absolute";
		currentPosition.style.display = "none";
		progressBar_c.appendChild(currentPosition);

		var currentTime = document.createElement("div");
		currentTime.className = "progressCurrentTime";
		currentTime.style.width = 100*ratio+"px";
		currentTime.style.height = 40*ratio+"px";
		currentTime.style.top = -4*ratio+"px";
		currentTime.style.left = 50*ratio+"px";
		//currentTime.style.backgroundImage = 'url("http://tv.qcast.cn/homepage/player/icon/time.png")';
		currentTime.style.backgroundColor = "rgba(0,0,0,0.5)";
		currentTime.style.borderRadius="25px";
		currentTime.style.backgroundSize = "100% 100%";
		currentTime.style.position = "absolute";
		currentTime.style.display = "none";
		currentTime.style.fontSize = 26*ratio+"px";
		currentTime.style.fontFamily='Arial,Helvetica,sans-serif,Fantasy,"宋体","Microsoft YaHei","黑体"';
		currentTime.style.color = "#ffffff";
		currentTime.style.textAlign = "center";
		currentTime.style.lineHeight = 40*ratio+"px";
		progressBar_c.appendChild(currentTime);
		//$(videoplaytime).addClass('mycanvas');
		//volume 
		_videovolume=document.createElement("canvas");
		_videovolume.style.position="absolute";
		_videovolume.width=30;
		_videovolume.height=height-400;
		_videovolume.style.right=100+"px";
		_videovolume.style.top=200+"px";
		_videovolume.style.display="none";
		//document.body.appendChild(_videovolume);

		//img
		_videopauseimg = document.createElement("img");
		_videopauseimg.src = "http://image.qcast.cn/player/icon/pause.png";
		_videopauseimg.style.width = 158*ratio+"px";
		_videopauseimg.style.height = 158*ratio+"px";
		_videopauseimg.style.left = (width-158*ratio)/2+"px";
		_videopauseimg.style.top = (height-158*ratio)/2+"px";
		_videopauseimg.style.display = "none";
		_videopauseimg.style.position = "absolute";

		_videoplaycontain=document.createElement("div");
		_videoplaycontain.appendChild(progressBar_c);
		_videoplaycontain.appendChild(_videovolume);
		//
		//document.body.appendChild(_videoplaycontain);

		_player_container=document.createElement("div");
		_player_container.style.width='100%';
		_player_container.style.height='100%';
		_player_container.style.left=0;//-24*widthscreen/100;
		_player_container.style.top=0;
		_player_container.style.backgroundColor="black";
		_player_container.style.position="absolute";
		//player spin
		_playerSpinContain=document.createElement("span");
		_playerSpinContain.style.width='240px';
		_playerSpinContain.style.height='25px';
		_playerSpinContain.style.left='50%';
		_playerSpinContain.style.top='50%';
		_playerSpinContain.style.color="#ffffff";
		_playerSpinContain.style.font="24px normal";
		_playerSpinContain.style.display="none";
		_playerSpinContain.style.textAlign="center";
		_playerSpinContain.style.transform="translate(-50%, -50%)";
		_playerSpinContain.style.position="absolute";

		_video=document.createElement("video");
		_video.src="about:null";
		_video.style.width='100%';
		_video.style.height='100%';
		_video.style.left="0px";
		_video.style.top="0px";
		_video.style.position="absolute";

		/*netSpeed=document.createElement("span");
		 netSpeed.style.position="absolute";
		 netSpeed.style.width=70+"px";
		 netSpeed.style.height=25+"px";
		 netSpeed.style.zIndex=0;
		 netSpeed.style.textAlign="left";
		 netSpeed.style.color="#ffffff";
		 netSpeed.style.font="24px normal";
		 netSpeed.style.display="none";
		 netSpeed.style.top='50%';
		 netSpeed.style.left="63%";
		 netSpeed.style.transform="translate(-50%, -50%)";*/

		_qchole = document.createElement("qchole");
		_qchole.style.cssText ="height:100%;width:100%;position: absolute;-webkit-transform:rotate(0deg)";
		_player_container.appendChild(_video);
		_player_container.appendChild(_videopauseimg);
		/*if(typeof jContentShellJBridge != "undefined"){
		 var app_version_json_str = jContentShellJBridge.getAppVersionString();
		 var app_version_json = null;
		 var current_app_version = null;
		 var support_app_version = 4330;
		 try{
		 app_version_json = JSON.parse(app_version_json_str);
		 current_app_version = app_version_json.version_name;
		 //console.log("current_app_version: "+current_app_version);
		 if(!current_app_version || current_app_version.match(/\d+\.\d+\.\d+\.\d+/) == null){
		 throw new Error();
		 }
		 current_app_version = parseInt(current_app_version.split(".")[3]);
		 if(current_app_version && current_app_version >= support_app_version){
		 _player_container.appendChild(_qchole);
		 }else{
		 }
		 }catch(e){

		 }
		 }*/
		if(navigator.userAgent.indexOf('Linux')>-1){
			_player_container.appendChild(_qchole);
		}

		_player_container.appendChild(_videoplaycontain);
		_player_container.appendChild(_playerSpinContain);

		addVideoEventListeners();
		if(typeof jContentShellJBridge!="undefined")
			if(typeof jContentShellJBridge.getDeviceInfo!="undefined")
				devicesInfo = JSON.parse(jContentShellJBridge.getDeviceInfo());

	};

	this.registerVideoEventListener = function(id, callback_){
		var obj = new Object();
		obj.id = id; //identify the params
		obj.callback = callback_;
		event_listener.push(obj);
	};

	this.unregisterVideoEventListener =function(id){
		for(var i=0; i<i< event_listener.length; i++){
			if(event_listener[i].id == id)
			{
				event_listener.splice(i,1);
				break;
			}
		}
	};
	//'autoplay', 'preload'
	this.setVideoParam=function(json){
		if(typeof json == 'undefined')
			return;
		if(typeof json.autoplay !='undefined'){
			_video.autoplay=json.autoplay;
		}
		if(typeof json.preload != 'undefined'){
			_video.preload = json.preload;
		}
		if(typeof json.loop != 'undefined'){
			_video.loop = json.loop;
		}
	};

	this.isVideoPlaying = function(){
		return !_video.paused;
	};
	this.getVideoZIndex = function(){
		return video_zindex;
	};
	this.setVideoZIndex = function(index){
		video_zindex = index;
		_video.style.zIndex=index;
	};
	this.setVideoDisplay=function(dp){
		_video.style.display=dp;
		_videoplaycontain.style.display=dp;

	}
	/*fullScreen size
	 0->original
	 1->fullscreen
	 2->16:9
	 3->4:3
	 */
	this.setVideoAspectRatio = function(ar){
		var ratio=null;
		if(ar==0){
			ratio='origin';
		}else if(ar==1){
			ratio='full';
		}else if(ar==2){
			ratio= '16:9';
		}else if(ar==3){
			ratio='4:3';
		}
		if(typeof _video.videoAspectRatio != 'undefined' && _video.videoAspectRatio)
		{
			_video.videoAspectRatio = ratio;
		}
		else{
			console.log('aspect ratio is not supported');
		}

	};
	this.setShowProgressBarSign=function(){
		showProgressBarSign=false;
	}
	this.hideProgressBar=function(){
		progressBar_c.style.display="none";
		hideProgressBar();
		disableProgressDrawTimer();

	}
	this.showProgressBar=function(){

		progressBar_c.style.display="block";
		showProgressBar();
		enableProgressDrawTimer();
	}

	this.enterFullScreenVideo = function(){

		_videoplaycontain.style.display="block";
		_videoplaycontain.style.zIndex=video_zindex+1;


		if(!_video.paused) {
			_videopauseimg.style.display="none";
			counter=0;
		}

		_firstenterfullScreen=true;
		_isFullScreen=true;
		_player_container.style.position="fixed";
		_player_container.style.zIndex=video_zindex;
		_videoplaysign=true;
		volumedisplay=0;
		if(showProgressBarSign){
			progressBar_c.style.display="block";
			showProgressBar();
			enableProgressDrawTimer();
		}else{

		}
		pausePositionResize();
		setTimeout(fullScreenChangeback(),0);
		if(_playerSpinContain.style.display=="block"){
			stopSpinner();
			spin();
		}
	};
	this.setVideoTarget = function(parent, position){
		parentElement = parent;
		parent.insertBefore(_player_container,parent.firstChild);
	};
	this.setVideoSrc = function(src){
		_video.src=src;
		allowReloadVideo=true;
		console.log("### _video.src= "+_video.src);
		if(_video.src!='about:null'&&_playerSpinContain.style.display=="none"){
			stopSpinner();
			spin();
		}
		_current_time = -1;
	};

	this.setVideoPoster=function(img){
		_video.poster=img;
	};
	this.reloadVideo=function(){
		_video.load();
		_video.play();
	};
	this.exitVideoPlayer=function(){
		this.setVideoSrc("about:null");
		this.setStartTime(0);
		hideProgressBar();
		hideVolumeProgressBar();
		this.exitFullScreenVideo();
		_videopauseimg.style.display='none';
		stopSpinner();
	};

	this.exitFullScreenVideo = function (){
		if(this.isVideoFullScreen()){
			progressBar_c.style.display="none";
			//_videopauseimg.style.display="none";
			//_videoplaycontain.style.display="none";
			//_videovolume.style.zIndex="";
			//_videovolume.style.display="none";
			_videopauseimg.style.zIndex=0;
			_player_container.style.position="absolute";
			_player_container.style.zIndex="";
			_isFullScreen=false;
			_firstenterfullScreen=false;
			disableProgressDrawTimer();
			pausePositionResize();
			if(_videopauseimg.style.display == "block")
				disableProgressDrawTimer();

			setTimeout(fullScreenChangeback(),0);
			if(_playerSpinContain.style.display=="block"){
				stopSpinner();
				spin();
			}
		}
	};
	//time: second
	this.seekVideo = function(time){
		if(this.isVideoFullScreen()){
			if(!useCss){
				//show control bar
				if(_seek_effective_timer2){
					window.clearTimeout(_seek_effective_timer2);
					_seek_effective_timer2 = null;
				}
				progressBar_c.style.display="block";
				drawProgressBar();
				showProgressBar();
				//enableProgressDrawTimer();
				var ratio = window.innerWidth/1280;
				var width = window.innerWidth-130*ratio;//clientWidth;
				//var height=80;//clientHeight;
				var c= videoplaytime;
				//var ctx=c.getContext("2d");
				var maxduration = _video.duration;
				//set video current time

				var currentBuffer;
				if(time>0&&time<(maxduration-3)){
					currentBuffer = time;
				}else if(time<=0){
					currentBuffer =0;
				}else if(time>=(maxduration-3)){
					currentBuffer=maxduration-3;
				}
				//_playtimeline.style.display="block";
				//videoplaytime.style.display="block";
				if(!_video.paused ) {
					_videoplaysign=true;
				}
				else{
					_videoplaysign=false;
				}
				var currentBuffer1 = 100 * (currentBuffer) / maxduration;
				if (isNaN(maxduration)||isNaN(currentBuffer)||maxduration==0){
					maxduration=0;
					currentBuffer=0;
					currentBuffer1=0;
				}
				var playtime=currentBuffer1*width/100;

				var time_hc=parseInt(currentBuffer/3600);
				var time_mc=parseInt(currentBuffer/60-parseInt(currentBuffer/3600)*60);
				var time_sc=parseInt(currentBuffer-parseInt(currentBuffer/60)*60);
				var timec=null;
				if(time_mc<10&&time_sc>9){
					timec="0"+time_mc+":"+time_sc;
				}else if(time_mc<10&&time_sc<10){
					timec="0"+time_mc+":0"+time_sc;
				}else if(time_mc>9&&time_sc<10){
					timec=time_mc+":0"+time_sc;
				}else{
					timec=time_mc+":"+time_sc;
				}
				if(time_hc<1){
					timec=timec;
				}else if(1<time_hc<10){
					timec="0"+time_hc+":"+timec;
				}else{
					timec=time_hc+":"+timec;
				}

				/*ctx.clearRect(0,0,width+120,height/2);
				 ctx.font="30px Arial";
				 ctx.globalAlpha=0.8;
				 ctx.fillStyle='#234f98';

				 _playtimeline.style.zIndex=video_zindex+5;
				 playeTime=currentBuffer;
				 ctx.fillRect(playtime,height/2-50,120,50);
				 _playtimeline.style.left=playtime+61+"px";
				 //ctx.stroke();
				 //set video time text updatetime
				 ctx.fillStyle="#FBFFFB";
				 ctx.textAlign="center";
				 if(playtime<0){
				 ctx.fillText(timec,parseInt(60),1*height/2-10);
				 }
				 else if(playtime>width){
				 ctx.fillText(timec,parseInt(width)+60,1*height/2-10);
				 }else{
				 ctx.fillText(timec,parseInt(playtime)+60,1*height/2-10);
				 }*/
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.display = "block";
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].textContent = timec;
				if(currentBuffer>=3600){
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-60*ratio+"px";
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=120*ratio+"px";
				}else{
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-50*ratio+"px";
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=100*ratio+"px";
				}
				progressBar_c.getElementsByClassName("progressCurrentPosition")[0].style.left = parseInt(playtime)+0*ratio+"px";
				progressBar_c.getElementsByClassName("progressCurrentBar")[0].style.width = parseInt(playtime)+"px";
				updateSign=false;
				_seek_effective_timer2 = window.setTimeout(function(){
					_video.currentTime = currentBuffer;
					//ctx.clearRect(0,0,width+120,height/2);
					//_playtimeline.style.display="none";
					updateSign=true;
					if(currentBuffer>=3600){
						progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-60*ratio+"px";
						progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=120*ratio+"px";
					}else{
						progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-50*ratio+"px";
						progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=100*ratio+"px";
					}
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.display = "none";
					counter=0;
					_firstenterfullScreen=true;
					enableProgressDrawTimer();
				}, 1500);
			}
		}else{
			var maxduration = _video.duration;
			//set video current time			
			var currentBuffer;
			if(time>0&&time<(maxduration)){
				currentBuffer = time;
			}else if(time<=0){
				currentBuffer =0;
			}else if(time>=(maxduration)){
				currentBuffer=maxduration;
			}
			_video.currentTime =currentBuffer;
		}
	};

	this.playPause = function() {
		if(_video.paused) {
			_videopauseimg.style.display="none";
			counter=0;
			_videoplaysign=true;
			_firstenterfullScreen=true;
			_video.play();
			if(listeningPSign){
				window.clearTimeout(listeningPSign);
				listeningPSign = null;
			}
			listeningPSign = window.setTimeout(function(){
				stopSpinner();
				spin();
			}, 2000);
			playingSign=true;
			if(showProgressBarSign&&updateSign)
				enableProgressDrawTimer();
		}
		else {
			stopSpinner();
			_videopauseimg.style.display="block";
			_videopauseimg.style.zIndex=video_zindex+1;
			progressBar_c.getElementsByClassName("progressCurrentPosition")[0].src = "http://image.qcast.cn/player/icon/line.jpg";
			_videopauseimg.src = "http://image.qcast.cn/player/icon/pause.png";
			//videoplaytime.style.display="block";
			if(showProgressBarSign&&updateSign){
				drawProgressBar();
				showProgressBar();
				disableProgressDrawTimer();
			}
			_videoplaysign=false;
			_firstenterfullScreen=true;
			_video.pause();
		}
	};
	this.regulateVideoVolume = function(Rv){
		if(!useCss){

			var width =_videovolume.width;
			var height=_videovolume.height;
			var volumeheight=height-40;
			var vcr=_videovolume.getContext("2d");
			showVolumeProgressBar();
			_videovolume.style.zIndex=video_zindex+1;

			//set linewidth color
			vcr.lineWidth = 1;
			vcr.strokeStyle='#234f98';
			var volume = _video.volume;
			var max_vol = 1;
			if(typeof jVolumeController != 'undefined'){
				max_vol = jVolumeController.getMaxVolume();
				volume = jVolumeController.getVolume() + Rv*max_vol;
				if(volume < 0)
					volume = 0;
				if(volume > max_vol)
					volume = max_vol;
				if(Rv > 0)
					volume = Math.floor(volume);
				else
					volume = Math.ceil(volume);
				jVolumeController.setVolume(volume);
				volumepercent=100*volume/max_vol*(height-50)/100;
			}
			else{
				volume=_video.volume+Rv;
				if(volume>1.0){
					volume=1.0;
					_video.volume=1.0;
				}else if(volume<=0.0){
					volume=0.0;
					_video.volume=0.0;
				}else{
					_video.volume=volume;
				}
				volumepercent=100*_video.volume*(height-50)/100;
			}

			vcr.clearRect(0,0,width,height);
			vcr.font="15px Arial";
			//set linewidth color
			vcr.lineWidth = 1;
			vcr.strokeStyle='#234f98';//set pen color
			vcr.strokeRect(0,0,width,height-50);
			//set background color globalAlpha

			vcr.globalAlpha=0.8;
			vcr.fillStyle='#5e5e68';
			vcr.fillRect(0,0,width,height-50);
			//canvas video time globalAlpha coloe
			vcr.globalAlpha=1;
			vcr.fillStyle='#234f98';
			vcr.fillRect(0,((_videovolume.height-50)-volumepercent),width,volumepercent);
			vcr.stroke();
			vcr.fillStyle="#FBFFFB";
			vcr.textAlign="center";
			//consle.log("video.volume= "+_video.volume*100);
			vcr.fillText(Math.floor(volume/max_vol*100),width/2,(_videovolume.height-20));
		}
	};
	this.isVideoFullScreen=function(){
		return _isFullScreen;
	};
	this.getVideoCurrentTime=function(){
		return parseInt(_video.currentTime);
	};
	this.getVideoDuration=function(){
		return parseInt(_video.duration);
	};
	this.getVideoWidth=function(){
		return _video.videoWidth;
	}
	this.getVideoHeight=function(){
		return _video.videoHeight;
	}
	this.getVideoSrc=function(){
		return _video.src;
	}
	var ip_jsonObj=null;
	this.xmlHttpRequest= function(config) {
		var url= config["url"];
		var success_cb = config["success"];
		var fail_cb = config["fail"];
		var headers = config["headers"];
		var method_cb = config["method"];
		var timeout_cb = config["timeout"];
		var async_cb =config["async"];
		var data_cb=config["data"];
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.open(method_cb, url,async_cb);
		for(h in headers){
			xhr.setRequestHeader(headers[h].name, headers[h].value);
		}
		if(headers==null||headers==''||headers=='undefined')
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.setTimeout=timeout_cb;
		if((typeof data_cb=='undefined')||data_cb==null||data_cb=='')
		{
			xhr.send(null);
		}else{
			//xhr.setRequestHeader("Content-textContent", data_cb);
			xhr.send(data_cb);
		}
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					success_cb(xhr.responseText);
				}
				else{
					fail_cb();
				}
			}
		}
	};

	function loadJsonDataFromServer(callback_, obj){
		var url = null;
		var retJson = null;
		var postUrl = 'http://ip.taobao.com/service/getIpInfo.php?';
		var config1 = {"url": postUrl, "fail":function(XMLHttpRequest, textStatus, errorThrown){
			console.log("Error: failed to parse server json data!");

		},"success":function(data){
			console.log('info from taobao:'+data);
			retJson = data;
			ip_jsonObj = JSON.parse(retJson);
			obj.address=ip_jsonObj.data.country+ip_jsonObj.data.city;
			obj.isp=ip_jsonObj.data.isp;
			callback_(obj);
		},'method':'POST','timeout':20000,'async':true,'data':'ip=myip'
		};
		_videoPlayer.xmlHttpRequest(config1);

	};
	this.logM=function(msg){
		console.log('ss'+msg);
	};
	this.getInfrastructureInfo=function(callback_){
		var obj = new Object();
		if(typeof jContentShellJBridge != "undefined"){
			if(typeof jContentShellJBridge.getDeviceInfo != "undefined")
			{
				obj.devicesInfo = JSON.parse(jContentShellJBridge.getDeviceInfo());
			}
			if(typeof jContentShellJBridge.getInternetSpeed != "undefined")
			{
				obj.maxspeed = JSON.parse(jContentShellJBridge.getInternetSpeed()).maxspeed*8;
				obj.minspeed = JSON.parse(jContentShellJBridge.getInternetSpeed()).minspeed*8;
			}
		}
		console.log("aa "+obj);
		loadJsonDataFromServer(callback_, obj);
	}
	this.keydownProcess = function(param)
	{
		if(this.isVideoFullScreen()){
			switch(param)
			{
				case 38:
					//this.regulateVideoVolume(0.1);
					return true;
				case 40:   //down				
					//this.regulateVideoVolume(-0.1);
					return true;
				case 37:   //left
					changeVideoTime(-10);
					return true;
				case 39:   //right
					changeVideoTime(10);
					return true;
				case 13:   //enter
					this.playPause();
					return true;
				case 27:    //back, here is esc
				case 4:
					this.exitFullScreenVideo();
					return true;
				default:
					return false;
			}
		}
		return false;
	};
	this.setStartTime = function(t){
		if(_video && typeof _video.startTime != 'undefined'){
			_video.startTime = t;
			return true;
		}
		else{
			return false;
		}
	};
	this.stopSpin=function(){
		//console.log("wsddfsf");
		stopSpinner();
	};
	var netspeed=0;
	var clearSpinInterval=function(){
		if(listening_Spin){
			window.clearInterval(listening_Spin);
			listening_Spin = null;
		}
	}
	var spin = function(){
		if(_videoPlayer.getAllowSpinSign()){
			if(_playerSpinContain.style.display=="none"){
				listening_Spin = window.setInterval(function(){
					if(typeof qcastTop!="undefined"){
						if(qcastTop.getNetSpeed()<=1000){
							netspeed=qcastTop.getNetSpeed()+"Kb/s";
						}else{
							netspeed=(qcastTop.getNetSpeed()/1024).toPrecision(2)+"Mb/s";
						}
					}
					_playerSpinContain.innerHTML="正在缓冲  "+netspeed;

				}, 2000);
				startSpinner();
			}

		}

	};
	this.allowSpin=function(){
		isAllowSpin=true;
		if(_playerSpinContain.style.display=="none"){
			stopSpinner();
			spin();
		}
	}
	this.disallowSpin=function(){
		isAllowSpin=false;
		stopSpinner();
	}
	this.getAllowSpinSign=function(){
		return isAllowSpin;
	}
	var spin_timer=null;
	var startSpinner = function(){
		if(typeof qcastTop!="undefined"){
			if(qcastTop.getNetSpeed()<=1000){
				netspeed=qcastTop.getNetSpeed()+"Kb/s";
			}else{
				netspeed=(qcastTop.getNetSpeed()/1024).toPrecision(2)+"Mb/s";
			}
		}
		//console.log("video netspeed = "+netspeed);
		//netSpeed.innerHTML=netspeed;
		//netSpeed.style.left=_video.clientWidth*50/100+105+"px";
		//netSpeed.style.display="none";
		_playerSpinContain.style.display="block";
		_playerSpinContain.innerHTML="正在缓冲  "+netspeed;
		console.log("正在缓冲  ");
		//if(spinner==null)
		//spinner = new Spinner(opts).spin(_playerSpinContain);				
	};

	var stopSpinner = function(){
		//console.log("in stopSpin spinner = "+spinner);
		if(_playerSpinContain.style.display!="none"){
			//netspeed=0;
			//netSpeed.style.display="none";
			//spinner.stop();
			//spinner = null;			
			_playerSpinContain.style.display="none";
		}
		clearSpinInterval();
	};
	//private functions
	var pausesign=false;
	var loadstartsign=null;
	var addVideoEventListeners = function(){
		_video.addEventListener('ended', function(){
			console.log("--listening video ended--");
			if(!isNaN(_video.duration)&&!isNaN(_video.currentTime)&&20<_video.duration-_video.currentTime){
				console.log(' video time is not over');
				return ;
			}
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"ended"};
				obj.callback(param);
			}
		});
		_video.addEventListener('playing', function(){
			console.log("--listening video playing--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"playing"};
				obj.callback(param);
			}
			if(video_error_timer){
				window.clearTimeout(video_error_timer);
				video_error_timer = null;
			}
			/*if(video_stalled_error_timer){
			 window.clearTimeout(video_stalled_error_timer);
			 video_stalled_error_timer = null;
			 }*/

		});
		_video.addEventListener('error', function(e){
			console.log("--listening video error--");
			errorType=null;
			if(_video.error.code==1){
				console.log("user stop");
				errorType="userStop";
			}else if(_video.error.code==2)
			{
				console.log("network error");
				errorType="networkError";
			}else if(_video.error.code==3)
			{
				console.log("Decoding error");
				errorType="decodingError";
			}else if(_video.error.code==4)
			{
				console.log("URL invalid, url="+_video.src);
				errorType="UrlInvalid";
			}
			videoErrorSign(errorType);

		});
		_video.addEventListener('pause', function(){
			//draw a play button
			console.log("--listening video pause--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"pause"};
				obj.callback(param);
			}

		});
		_video.addEventListener('play', function(){
			console.log("--listening video play--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"play"};
				obj.callback(param);
			}
			if(video_error_timer){
				window.clearTimeout(video_error_timer);
				video_error_timer = null;
			}
			/*if(video_stalled_error_timer){
			 window.clearTimeout(video_stalled_error_timer);
			 video_stalled_error_timer = null;
			 }*/
		});

		_video.addEventListener('emptied', function(){
			//console.log("--listening video emptied--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"emptied"};
				obj.callback(param);
			}
		});
		_video.addEventListener('canplay', function(){
			//console.log("--listening video canplay--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"canplay"};
				obj.callback(param);
			}

		});
		_video.addEventListener('canplaythrough', function(){
			console.log("--listening video canplaythrough--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"canplaythrough"};
				obj.callback(param);
			}

		});
		_video.addEventListener('durationchange', function(){
			console.log("--listening video durationchange--");
			if(!isNaN(_video.duration)&&_video.duration>3600*24&&allowReloadVideo){
				_video.load();
				_video.play();
				allowReloadVideo=false;
				console.log(' video duration is over 24 hours');
				return;
			}
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"durationchange"};
				obj.callback(param);
			}
		});
		_video.addEventListener('loadeddata', function(){
			//console.log("--listening video loadeddata--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"loadeddata"};
				obj.callback(param);
			}
		});
		_video.addEventListener('loadedmetadata', function(){
			//console.log("--listening video loadedmetadata--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"loadedmetadata"};
				obj.callback(param);
			}
		});
		_video.addEventListener('loadstart', function(){
			console.log("--listening video loadstart--");
			_current_time = -1;
			isBuffering = true;
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"loadstart"};
				obj.callback(param);
			}
			loadstartsign=true;
			if(video_error_timer){
				window.clearTimeout(video_error_timer);
				video_error_timer = null;
			}
			if(typeof jContentShellJBridge!="undefined"){
				if(typeof jContentShellJBridge.getDeviceInfo!="undefined"){
					if(typeof devicesInfo!='undefined'){
						if(typeof devicesInfo.MODEL!='undefined'){
							if((devicesInfo.MODEL.match("Letv")!=null||devicesInfo.MODEL.match("Sharp")!=null)){}else{
								video_error_timer=window.setTimeout(function(){videoErrorSign('timeout')},15000);
							}
						}
					}
				}
			}
		});
		_video.addEventListener('progress', function(progress){
			//console.log("--listening video progress--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"progress"};
				obj.callback(param);
			}
		});
		_video.addEventListener('ratechange', function(){
			//console.log("--listening video ratechange--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"ratechange"};
				obj.callback(param);
			}
		});
		_video.addEventListener('seeked', function(){
			console.log("--listening video seeked--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"seeked"};
				obj.callback(param);
			}
			if(listeningPSign){
				window.clearTimeout(listeningPSign);
				listeningPSign = null;
			}
			if(video_error_timer){
				window.clearTimeout(video_error_timer);
				video_error_timer = null;
			}
			/*if(video_stalled_error_timer){
			 window.clearTimeout(video_stalled_error_timer);
			 video_stalled_error_timer = null;
			 }*/
			loadstartsign=false;
			listeningPSign= window.setTimeout(function(){
				stopSpinner();
			}, 1100);

		});
		_video.addEventListener('seeking', function(){
			//console.log("--listening video seeking--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"seeking"};
				obj.callback(param);
			}
			if(!loadstartsign&&!_video.paused){
				stopSpinner();
				spin();
			}
		});
		_video.addEventListener('stalled', function(){
			console.log("--listening video stalled--");
			/*if(video_stalled_error_timer){
			 window.clearTimeout(video_stalled_error_timer);
			 video_stalled_error_timer = null;
			 }
			 //video_stalled_error_timer=window.setTimeout(function(){videoErrorSign('stalled')},10000);*/
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"stalled"};
				obj.callback(param);
			}
		});
		_video.addEventListener('suspend', function(){
			//console.log("--listening video suspend--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"suspend"};
				obj.callback(param);
			}
		});
		_video.addEventListener('timeupdate', function(){
			//console.log("--listening video timeupdate--");

			if(listeningNetSpeed){
				window.clearTimeout(listeningNetSpeed);
				listeningNetSpeed = null;
			}
			listeningNetSpeed = window.setTimeout(function(){
				if(!_video.paused){
					stopSpinner();
					spin();
				}
				isBuffering = true;
				stable_indicator_count = 0;
			}, 1200);

			if(typeof jContentShellJBridge!= "undefined"){
				if(typeof jContentShellJBridge.getDeviceInfo != "undefined")
				{
					if(typeof devicesInfo!='undefined'){
						if((devicesInfo.MODEL.match("Letv")!=null||devicesInfo.MODEL.match("Sharp")!=null)){
							if(listeningPSign){
								window.clearTimeout(listeningPSign);
								listeningPSign = null;
							}
							if(video_error_timer){
								window.clearTimeout(video_error_timer);
								video_error_timer = null;
							}
							stopSpinner();
							if(video_stalled_error_timer){
								window.clearTimeout(video_stalled_error_timer);
								video_stalled_error_timer = null;
							}
						}else{
							if(_video.currentTime <= _current_time){
								_current_time = _video.currentTime;
								stable_indicator_count = 0;
								if(!isBuffering){
									isBuffering = true;
									if(!_video.paused){
										stopSpinner();
										spin();
										console.log('start spin because currenttime stops');
									}
									if(video_error_timer){
										return;
									}
									video_error_timer=window.setTimeout(function(){
										videoErrorSign('timeStop');
										if(typeof qcastTop!="undefined"){
											var loopchecknetspeed_timer=null;
											var loopcount=0;
											loopchecknetspeed_timer=window.setInterval(function(){
												loopcount++;
												if(loopcount>5){
													window.clearInterval(loopchecknetspeed_timer);
													loopchecknetspeed_timer=null;
													console.log('error time can not skip')
												}
												if(qcastTop.getNetSpeed()>1000){
													var seekTime=_video.currentTime+1;
													if(seekTime<_video.duration)
														_video.currentTime=seekTime;
													window.clearInterval(loopchecknetspeed_timer);
													loopchecknetspeed_timer=null;
													console.log('skip error time ')
												}
											},1000);
										}

									},10000);
								}
							}
							else{
								_current_time = _video.currentTime;

								if(isBuffering){
									if(stable_indicator_count > 2){
										stable_indicator_count = 0;
										isBuffering = false;
										if(listeningPSign){
											window.clearTimeout(listeningPSign);
											listeningPSign = null;
										}
										stopSpinner();
										if(video_error_timer){
											window.clearTimeout(video_error_timer);
											video_error_timer = null;
										}
									}
									else{
										stable_indicator_count++;
									}
								}
								if(playingSign){
									if(stable_indicator_count1 > 2){
										stable_indicator_count1 = 0;
										playingSign = false;
										if(listeningPSign){
											window.clearTimeout(listeningPSign);
											listeningPSign = null;
										}
									}else{
										stable_indicator_count1++;
									}
								}

							}
						}
					}
				}
			}
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"timeupdate"};
				obj.callback(param);
			}
		});
		_video.addEventListener('volumechange', function(){
			//console.log("--listening video volumechange--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"volumechange"};
				obj.callback(param);
			}
		});
		_video.addEventListener('waiting', function(){
			//console.log("--listening video waiting--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"waiting"};
				obj.callback(param);
			}
		});

	};
	var fullScreenChangeback=function(){
		for(var i=0; i< event_listener.length; i++){
			var obj = event_listener[i];
			var param = {"id":obj.id, "event":"fullscreenchange"};
			obj.callback(param);
		}
	};
	var pausePositionResize = function(){
		if(_isFullScreen)
		{
			var width = window.innerWidth;
			var height = window.innerHeight;
			var ratio = width/1920;
			_videopauseimg.style.width = 158*ratio+"px";
			_videopauseimg.style.height = 158*ratio+"px";
			_videopauseimg.style.left = (width-158*ratio)/2+"px";
			_videopauseimg.style.top = (height-158*ratio)/2+"px";
		}
		else
		{
			var width = parentElement.clientWidth;
			var height = parentElement.clientHeight;
			var ratio = width/1920;
			_videopauseimg.style.width = 158*ratio+"px";
			_videopauseimg.style.height = 158*ratio+"px";
			_videopauseimg.style.left = (width-158*ratio)/2+"px";
			_videopauseimg.style.top = (height-158*ratio)/2+"px";
		}
	};
	var playerInit=function(){
		this.createVideoContainer();
	};
	var isProgressBarVisible = function(){
		return isVisible;
	};

	var showProgressBar = function(){
		if(!useCss){
			counter=0;
			//videoplaytime.style.display="block";
			progressBar_c.style.display="block";
			isVisible = true;
			//notify application
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"showprogress"};
				obj.callback(param);
			}
		}
	};

	var hideProgressBar = function(){
		disableProgressDrawTimer();
		if(!useCss){
			progressBar_c.style.display="none";
			isVisible = false;
			//notify application
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"hideprogress"};
				obj.callback(param);
			}
		}
	};

	var videoErrorSign = function(e){
		if(_video.src == 'about:null' || _video.src == 'about:blank'){
			return;
		}
		console.log("--videoErrorSign,errtype="+e);
		for(var i=0; i< event_listener.length; i++){
			var obj = event_listener[i];
			var param = {"id":obj.id, "event":"error","errType":e};
			obj.callback(param);
		}
		stopSpinner();
		spin();
	};

	var showVolumeProgressBar=function(){
		isVisibleVolume=true;
		if(!useCss){
			volumedisplay=0;
			_videovolume.style.display="block";
			///isVisible = true;
		}
	}
	var hideVolumeProgressBar=function(){
		isVisibleVolume=false;
		if(!useCss){
			_videovolume.style.display="none";
			//isVisible = false;
		}
	}
	var disableProgressDrawTimer = function(){
		isTimerEnabled = false;
		if(_draw_progressbar_timer){
			window.clearInterval(_draw_progressbar_timer);
			_draw_progressbar_timer = null;
		}
	};

	var drawProgressBar = function(){
		if(!useCss){
			var ratio = window.innerWidth/1280;
			var width = window.innerWidth-130*ratio;
			//var height = 3;
			counter=counter+1;
			//console.log("counter = "+counter);
			if(counter==10&&_videoplaysign)
			{
				hideProgressBar();
				counter=0;
			}
			volumedisplay=volumedisplay+1;
			if(volumedisplay==10&&isVisibleVolume)
			{
				hideVolumeProgressBar();
				volumedisplay=0;
			}
			if(volumedisplay>10){
				volumedisplay=0;
			}
			var currentBuffer = _video.currentTime;
			var maxduration = _video.duration;

			if (isNaN(maxduration)||isNaN(currentBuffer)){
				maxduration=0;
				currentBuffer=0;
			}
			if(currentBuffer>maxduration)
				currentBuffer=maxduration;
			var percentage = 100 * (currentBuffer) / maxduration;
			if(maxduration==0){
				percentage=0;
			}
			var playtime=percentage*width/100;
			var time_h=parseInt(maxduration/3600);
			var time_m=parseInt(maxduration/60-parseInt(maxduration/3600)*60);
			var time_s=parseInt(maxduration-parseInt(maxduration/60)*60);
			var time=null;
			if(time_m<10){
				time_m="0"+time_m;
			}
			if(time_s<10){
				time_s="0"+time_s;
			}
			if(time_h<1){
				time=time_m+":"+time_s;
			}else if(1<time_h<10){
				time="0"+time_h+":"+time_m+":"+time_s;
			}
			else{
				time=time_h+":"+time_m+":"+time_s;
			}
			var time_hc=parseInt(currentBuffer/3600);
			var time_mc=parseInt(currentBuffer/60-parseInt(currentBuffer/3600)*60);
			var time_sc=parseInt(currentBuffer-parseInt(currentBuffer/60)*60);
			var timec=null;
			if(time_mc<10&&time_sc>9){
				timec="0"+time_mc+":"+time_sc;
			}else if(time_mc<10&&time_sc<10){
				timec="0"+time_mc+":0"+time_sc;
			}else if(time_mc>9&&time_sc<10){
				timec=time_mc+":0"+time_sc;
			}else{
				timec=time_mc+":"+time_sc;
			}
			if(time_hc<1){
				timec=timec;
			}else if(1<time_hc<10){
				timec="0"+time_hc+":"+timec;
			}else{
				timec=time_hc+":"+timec;
			}
			//percentage = 100 * (currentBuffer) / maxduration;
			if(percentage> 100) {
				percentage = 100;
			}
			if(percentage <=0) {
				percentage = 0;
			}
			/*ctx.font="30px Arial";
			 ctx.clearRect(0,0,width,1);

			 //set linewidth color
			 ctx.lineWidth = 1;
			 //ctx.strokeStyle='#234f98';//set pen color
			 ctx.rect(60,height/2,width,height/2);

			 ctx.globalAlpha=0.8;
			 ctx.fillStyle='#5e5e68';
			 ctx.fillRect(60,height/2,width,height/2);

			 ctx.fillStyle="#FBFFFB";
			 ctx.textAlign="right";
			 ctx.fillText(time,width-10+60,3*height/4+10);

			 ctx.globalAlpha=1;
			 ctx.fillStyle='#234f98';
			 ctx.fillRect(60,height/2,playtime,height/2);
			 //ctx.stroke();

			 ctx.fillStyle="#FBFFFB";
			 if(parseInt(percentage*1143/100-72.4941443-24.1655215)<=0){
			 ctx.textAlign="left";
			 ctx.fillText(timec,60,3*height/4+10);
			 }else{
			 ctx.textAlign="right";
			 ctx.fillText(timec,parseInt(playtime)+60-20,3*height/4+10);
			 }	*/
			//var timeShow = timec+'/'+time;
			//console.log(timeShow);
			//console.log(playtime);
			//console.log(progressBar_c.getElementsByClassName("progressCurrentBar"));
			progressBar_c.getElementsByClassName("progressCurrentBar")[0].style.width = parseInt(playtime)+"px";
			progressBar_c.getElementsByClassName("progressSeekBar")[0].style.width =0+"px";

			progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.display = "block";
			progressBar_c.getElementsByClassName("progressCurrentTime")[0].textContent = timec;
			if(currentBuffer>=3600){
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-60*ratio+"px";
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=120*ratio+"px";
			}else{
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-50*ratio+"px";
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=100*ratio+"px";
			}

			progressBar_c.getElementsByClassName("progressCurrentPosition")[0].style.display="block";
			progressBar_c.getElementsByClassName("progressCurrentPosition")[0].style.left = parseInt(playtime)+"px";

			//progressBar_c.getElementsByClassName("progressCurrentPosition")[0].style.left = playtime+0*ratio+"px";
			progressBar_c.getElementsByClassName("progressTimeShow")[0].textContent = time;
		}
	};
	var enableProgressDrawTimer = function(){
		isTimerEnabled = true;
		drawProgressBar();
		if(_draw_progressbar_timer)
			return;
		_draw_progressbar_timer = window.setInterval(function(){
			if(!isProgressBarVisible()&&!isVisibleVolume)
				return;
			drawProgressBar();
		}, 500);
	};

	var changeSign=null;
	var changeVideoTime= function(Tx){
		if(!useCss){
			if(_seek_effective_timer){
				window.clearTimeout(_seek_effective_timer);
				_seek_effective_timer = null;
			}

			//var width = 1143;//clientWidth;
			//var height=80;//clientHeight;
			var ratio = window.innerWidth/1280;
			var width = window.innerWidth-130*ratio;
			var maxduration = _video.duration;
			if(Tx<0){
				if(maxduration>=3600){
					Tx=-30;
				}else if(maxduration>=1800)
				{
					Tx=-20;
				}else if(maxduration>=1200)
				{
					Tx=-15;
				}else if(maxduration>=300)
				{
					Tx=-10;
				}else
				{
					Tx=-5;
				}

			}else{
				if(maxduration>=3600){
					Tx=30;
				}else if(maxduration>=1800)
				{
					Tx=20;
				}else if(maxduration>=1200)
				{
					Tx=15;
				}else if(maxduration>=300)
				{
					Tx=10;
				}else
				{
					Tx=5;
				}
			}
			if(currenttime == -1){
				drawProgressBar();
				if((_video.currentTime+Tx)>0
					&&(_video.currentTime+Tx)<(maxduration-3)){
					changeSign =_video.currentTime;
					currenttime = _video.currentTime+Tx;

				}else if((_video.currentTime+Tx)<=0){

					currenttime =0;

				}else if((_video.currentTime+Tx)>=(maxduration-3)){

					currenttime=maxduration-3;

				}

				//_playtimeline.style.display="block";
				progressBar_c.style.display="block";
				if(!_video.paused ) {
					_videoplaysign=true;
				}else{
					_videoplaysign=false;
				}

			}
			else{if((currenttime +Tx)>0
				&&(currenttime +Tx)<maxduration-3){
				currenttime += Tx;
			}else if((currenttime+Tx)<=0){
				currenttime =0;
			}else if((currenttime+Tx)>=(maxduration-3)){
				currenttime=maxduration-3;
			}
			}

			showProgressBar();
			enableProgressDrawTimer();
			//videoplaytime.style.display="block";
			isVisible = false;
			var currentBuffer=currenttime;
			var currentBuffer1 = 100 * (currenttime) / maxduration;
			if (isNaN(maxduration)||isNaN(currentBuffer)||maxduration==0){
				maxduration=0;
				currentBuffer=0;
				currentBuffer1=0;
			}
			var playtime=currentBuffer1*width/100;

			if(currentBuffer>= maxduration) {
				currentBuffer = maxduration-5;
			}
			if(currentBuffer < 0) {
				currentBuffer = 0;
			}

			var time_hc=parseInt(currentBuffer/3600);
			var time_mc=parseInt(currentBuffer/60-parseInt(currentBuffer/3600)*60);
			var time_sc=parseInt(currentBuffer-parseInt(currentBuffer/60)*60);
			var timec=null;
			if(time_mc<10&&time_sc>9){
				timec="0"+time_mc+":"+time_sc;
			}else if(time_mc<10&&time_sc<10){
				timec="0"+time_mc+":0"+time_sc;
			}else if(time_mc>9&&time_sc<10){
				timec=time_mc+":0"+time_sc;
			}else{
				timec=time_mc+":"+time_sc;
			}
			if(time_hc<1){
				timec=timec;
			}else if(1<time_hc<10){
				timec="0"+time_hc+":"+timec;
			}else{
				timec=time_hc+":"+timec;
			}

			/*ctx.clearRect(0,0,width+120,height/2);
			 ctx.font="30px Arial";
			 ctx.globalAlpha=0.8;
			 ctx.fillStyle='#234f98';*/

			//_playtimeline.style.zIndex=video_zindex+5;
			playeTime=currentBuffer;
			if(playtime<0){
				playtime=0;
				playeTime=0;
			}
			else if(playtime>width){
				playtime=(maxduration-3)*100*width/maxduration/100;
				playeTime=maxduration-3;
			}else{
			}
			if(currentBuffer>=3600){
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-60*ratio+"px";
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=120*ratio+"px";
			}else{
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-50*ratio+"px";
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=100*ratio+"px";
			}
			var seekW=parseInt((_video.currentTime)*width/maxduration);
			progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.display = "block";
			progressBar_c.getElementsByClassName("progressCurrentTime")[0].textContent = timec;

			progressBar_c.getElementsByClassName("progressCurrentPosition")[0].style.display="block";
			progressBar_c.getElementsByClassName("progressCurrentPosition")[0].style.left = parseInt(playtime)+"px";
			progressBar_c.getElementsByClassName("progressCurrentBar")[0].style.width = seekW+"px";

			progressBar_c.getElementsByClassName("progressSeekBar")[0].style.width = Math.abs(seekW-parseInt(playtime))+"px";
			if(parseInt(playtime)>=seekW){

				progressBar_c.getElementsByClassName("progressSeekBar")[0].style.left = seekW+"px";
			}else if(parseInt(playtime)<seekW){
				progressBar_c.getElementsByClassName("progressSeekBar")[0].style.left = parseInt(playtime)+"px";
			}

			updateSign=false;
			_seek_effective_timer = window.setTimeout(function(){
				_video.currentTime = playeTime;
				_current_time = _video.currentTime;
				updateSign=true;
				progressBar_c.getElementsByClassName("progressCurrentBar")[0].style.width = _video.currentTime*width/maxduration+"px";
				progressBar_c.getElementsByClassName("progressSeekBar")[0].style.width =0+"px";

				progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.display = "block";
				progressBar_c.getElementsByClassName("progressCurrentTime")[0].textContent = timec;
				if(currentBuffer>=3600){
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-60*ratio+"px";
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=120*ratio+"px";
				}else{
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.left = parseInt(playtime)-50*ratio+"px";
					progressBar_c.getElementsByClassName("progressCurrentTime")[0].style.width=100*ratio+"px";
				}

				progressBar_c.getElementsByClassName("progressCurrentPosition")[0].style.display="block";
				progressBar_c.getElementsByClassName("progressCurrentPosition")[0].style.left = parseInt(playtime)+"px";
				currenttime = -1;
				counter=0;
				isVisible = true;
			}, 500);
		}
	};
};
