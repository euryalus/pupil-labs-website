"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),Bideo=function(){function e(t){_classCallCheck(this,e),this.videoEl=t.videoEl,this.resize=t.resize||!1,this.isMobile=t.isMobile||!1,this.autoplay=t.autoplay||!1,this.onLoad=t.onLoad,this.src=t.src,this.container=t.container,this.playButton=t.playButton,this._addSources(),this.loadState=!1,this._addEventListeners=this._addEventListeners.bind(this),this._resize=this._resize.bind(this),this._canPlay=this._canPlay.bind(this),this._mobileOptIn=this._mobileOptIn.bind(this),this.isMobile===!0&&(this.playButton.style.display="block"),this._addEventListeners()}return _createClass(e,[{key:"_addEventListeners",value:function(){this.videoEl.addEventListener("canplaythrough",this._canPlay),this.playButton.addEventListener("click",this._mobileOptIn),this.resize===!0&&window.addEventListener("resize",this._resize,!1)}},{key:"_addSources",value:function(){var e=document.createElement("source");e.setAttribute("src",this.src.src),e.setAttribute("type",this.src.type),this.videoEl.appendChild(e)}},{key:"_canPlay",value:function(){console.log(this.videoEl.readyState),this.isMobile===!1&&(this.onLoad(),this.autoplay===!0&&this.videoEl.play())}},{key:"_mobileOptIn",value:function(){this.isMobile&&this.playButton&&(this.onLoad(),this.playButton.style.display="none",this.videoEl.play())}},{key:"_resize",value:function(){if(!("object-fit"in document.body.style)){var e=this.videoEl.videoWidth,t=this.videoEl.videoHeight,i=(e/t).toFixed(4),o=this.container,s=window.getComputedStyle(o),a=parseFloat(s.getPropertyValue("width")),n=parseFloat(s.getPropertyValue("height"));if("border-box"!==s.getPropertyValue("box-sizing")){var l=parseFloat(s.getPropertyValue("padding-top")),r=parseFloat(s.getPropertyValue("padding-bottom")),d=parseFloat(s.getPropertyValue("padding-left")),c=parseFloat(s.getPropertyValue("padding-right"));a+=d+c,n+=l+r}var u,h,p=a/e,y=n/t;p>y?(u=a,h=Math.ceil(u/i)):(h=n,u=Math.ceil(h*i)),this.videoEl.style.width=u+"px",this.videoEl.style.height=h+"px"}}}]),e}();!function(){var e={videoEl:document.querySelector("#background-video"),container:document.querySelector("#Oculus-addon-cup-video-container"),resize:!0,autoplay:!0,isMobile:window.matchMedia("(max-width: 768px)").matches,playButton:document.querySelector("#play"),pauseButton:document.querySelector("#pause"),src:{src:"../media/videos/oculus_addon_cup.mp4",type:"video/mp4"},onLoad:function(){document.querySelector("#video_cover").style.display="none"}};new Bideo(e)}();