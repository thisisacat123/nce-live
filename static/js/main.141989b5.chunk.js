(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a(219)},145:function(e,t,a){},149:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(13),r=a.n(i),l=(a(145),a(44)),s=a.n(l),c=a(63),u=a(80),p=a(15),h=a(16),m=a(18),d=a(17),b=a(19),f=a(279),g=a(100),v=a.n(g),E=a(137),w=(a(149),a(136)),C=Object(w.a)({palette:{type:"dark"},typography:{useNextVariants:!0,fontFamily:'"Noto Sans TC", "Roboto", "Helvetica", "Arial", sans-serif'}}),y=a(33),O=a(5),j=a(274),k=a(81),D=function(e){return{root:{backgroundColor:"#000",position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex"},progress:{flexGrow:1},appMenuDialogTitleRoot:{padding:"16px 10px 16px 18px"},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2),color:e.palette.common.white,backgroundColor:e.palette.common.black,"&:hover":{backgroundColor:k.a[900]}},fill:{flex:1},qrcodeContainer:{backgroundColor:e.palette.common.white,padding:e.spacing(1)},linkBackground:{marginTop:e.spacing(2),marginBottom:e.spacing(2),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),backgroundColor:k.a[900]}}},S=a(32),x=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){(Math.abs(e.bounds.height-a.state.dimensions.height)>30||Math.abs(e.bounds.width-a.state.dimensions.width)>30)&&a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.containerWidth,n=e.containerHeight,i=this.state.dimensions,r=i.width,l=i.height;return o.a.createElement(S.a,{bounds:!0,onResize:this.resize},function(e){var i=e.measureRef;return o.a.createElement("div",{ref:i,className:"playerContainer",style:{width:a+"%",height:n+"%"}},o.a.createElement("div",{className:"player facebook"},o.a.createElement("iframe",{src:encodeURI("https://www.facebook.com/plugins/video.php?href={id}".replace("{id}",t["#id"]))+"&height="+parseInt(l)+"&width="+parseInt(r),className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no"})))})}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1},initCompleted:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({initCompleted:!0})},1e4)}},{key:"render",value:function(){var e=this,t=this.props,a=t.player,n=t.containerWidth,i=t.containerHeight;return o.a.createElement(S.a,{bounds:!0,onResize:this.resize},function(t){var r=t.measureRef;return o.a.createElement("div",{className:"playerContainer",style:{width:n+"%",height:i+"%"}},o.a.createElement("div",{className:"player yahoo"},o.a.createElement("iframe",{ref:r,onMouseOver:function(){e.setState({initCompleted:!0})},src:a["#id"],className:a["#v"]?"v":"h",title:a["#title"],frameBorder:"0",scrolling:"no",style:e.state.initCompleted?{}:{flex:0,width:320}})))})}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.player,a=e.containerWidth,n=e.containerHeight;return o.a.createElement(S.a,{bounds:!0,onResize:this.resize},function(e){var i=e.measureRef;return o.a.createElement("div",{ref:i,className:"playerContainer",style:{width:a+"%",height:n+"%"}},o.a.createElement("div",{className:"player"},o.a.createElement("iframe",{src:t["#id"],className:t["#v"]?"v":"h",title:t["#title"],frameBorder:"0",scrolling:"no"})))})}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.state={dimensions:{width:-1,height:-1}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.data;if(!e)return null;var t=this.state.dimensions,a=t.width,n=t.height,i=e.length,r=1,l=1;i>1&&(2===i?r=2:(1.2*a<n&&i<=4?(r=1,l=i):(r=2,l=2),i>4&&(i<=6?r=3:i>12?(r=4,l=4):i>9?(r=4,l=3):(r=3,l=3))));var s=100/r,u=100/l;return(1.2*a>=n||2===i||i>4)&&a<n&&(s=100/l,u=100/r),o.a.createElement(S.a,{bounds:!0,onResize:this.resize},function(t){var a=t.measureRef;return o.a.createElement("div",{ref:a,className:"playerList"},e.map(function(e,t){var a=e.type,n=Object(c.a)(e,["type"]),i={player:n,containerWidth:s,containerHeight:u};switch(a){case"facebook":return o.a.createElement(x,Object.assign({key:n["#id"]},i));case"yahoo":return o.a.createElement(R,Object.assign({key:n["#id"]},i));default:return o.a.createElement(A,Object.assign({key:n["#id"]},i))}}))})}}]),t}(n.Component),N=a(278),z=a(245),V=a(246),W=a(247),L=a(248),T=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.preloadReady,a=e.handleNewDataDialogResult;return o.a.createElement(N.a,{open:t,onClose:a({confirmed:!1}),TransitionComponent:function(e){return o.a.createElement(z.a,Object.assign({},e,{direction:"up"}))},message:"New Live(s) Found \u627e\u5230\u65b0\u76f4\u64ad",action:[o.a.createElement(V.a,{color:"secondary",onClick:a({confirmed:!0})},"Watch Now \u7acb\u5373\u6536\u770b"),o.a.createElement(W.a,{color:"inherit",onClick:a({confirmed:!1})},o.a.createElement(L.a,null,"close"))]})}}]),t}(n.Component),F=Object(y.a)(Object(O.a)(D,{withTheme:!0}))(T),J=a(275),I=a(249),B=a(253),H=a(55),U=a(277),q=a(250),K=a(268),P=a(269),Q=a(270),G=a(271),$=a(272),_=a(273),X=a(126),Y=a.n(X),Z=a(127),ee=a(251),te=a(252),ae=a(221),ne=a(276),oe=a(266),ie=a(254),re=a(255),le=a(256),se=a(257),ce=a(258),ue=a(259),pe=a(260),he=a(261),me=a(262),de=a(263),be=a(264),fe=a(265),ge=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resize=function(e){a.setState({dimensions:e.bounds})},a.handleCloseCopiedMsg=function(){a.setState({copied:!1})},a.state={dimensions:{width:-1,height:-1},copied:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.dimensions,i=t.copied,r=this.props,l=r.open,s=r.handleDialogAction,c=r.classes;return o.a.createElement(n.Fragment,null,o.a.createElement(J.a,{maxWidth:"xs",open:l,onClose:s({action:"close"})},o.a.createElement(I.a,{disableTypography:!0},o.a.createElement(H.a,{noWrap:!0},"\u5206\u4eab\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0"),o.a.createElement(H.a,{noWrap:!0},"Share NCE Lives")),o.a.createElement(q.a,null),o.a.createElement(ee.a,null,o.a.createElement(te.a,{classes:{root:c.qrcodeContainer}},o.a.createElement(S.a,{bounds:!0,onResize:this.resize},function(e){var t=e.measureRef;return o.a.createElement("div",{ref:t},o.a.createElement(Y.a,{size:a.width,value:window.location.href,logo:"/resources/apple-touch-icon.png"}))})),o.a.createElement(ae.a,{square:!0,classes:{root:c.linkBackground}},o.a.createElement(B.a,{container:!0,spacing:1,alignItems:"center"},o.a.createElement(B.a,{item:!0},o.a.createElement(L.a,null,"link")),o.a.createElement(B.a,{item:!0,classes:{item:c.fill}},o.a.createElement(ne.a,{fullWidth:!0,readOnly:!0,value:window.location.href}))))),o.a.createElement(q.a,null),o.a.createElement(ee.a,null,o.a.createElement(B.a,{container:!0,spacing:1},o.a.createElement(B.a,{item:!0},o.a.createElement(ie.a,{url:window.location.href},o.a.createElement(re.a,{size:32,round:!0}))),o.a.createElement(B.a,{item:!0},o.a.createElement(le.a,{url:window.location.href},o.a.createElement(se.a,{size:32,round:!0}))),o.a.createElement(B.a,{item:!0},o.a.createElement(ce.a,{url:window.location.href},o.a.createElement(ue.a,{size:32,round:!0}))),o.a.createElement(B.a,{item:!0},o.a.createElement(pe.a,{url:window.location.href},o.a.createElement(he.a,{size:32,round:!0}))),o.a.createElement(B.a,{item:!0},o.a.createElement(me.a,{url:window.location.href},o.a.createElement(de.a,{size:32,round:!0}))),o.a.createElement(B.a,{item:!0},o.a.createElement(be.a,{url:window.location.href},o.a.createElement(fe.a,{size:32,round:!0}))))),o.a.createElement(q.a,null),o.a.createElement(oe.a,null,o.a.createElement(V.a,{onClick:s({action:"close"}),color:"inherit"},"\u95dc\u9589 Close"),o.a.createElement(Z.CopyToClipboard,{text:window.location.href,onCopy:function(){return e.setState({copied:!0})}},o.a.createElement(V.a,{color:"secondary"},"\u8907\u88fd\u9023\u7d50 Copy Link")))),o.a.createElement(N.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:i,autoHideDuration:3e3,onClose:this.handleCloseCopiedMsg,message:o.a.createElement("span",null,"\u5df2\u5c07\u9023\u7d50\u8907\u88fd\u5728\u526a\u8cbc\u7c3f Link is copied into clipboard")}))}}]),t}(n.Component),ve=Object(y.a)(Object(O.a)(D,{withTheme:!0}))(ge),Ee=a(267),we=a(280),Ce=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={newVisibleCount:null},e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.open,n=t.handleDialogAction,i=t.appOptions,r=this.state.newVisibleCount;return o.a.createElement(J.a,{maxWidth:"xs",open:a,onClose:n({action:"close"})},o.a.createElement(I.a,{disableTypography:!0},o.a.createElement(H.a,{noWrap:!0},"\u66f4\u6539\u76f4\u64ad\u4e0a\u9650"),o.a.createElement(H.a,{noWrap:!0},"Change Maximum of Livestream")),o.a.createElement(ee.a,{dividers:!0},o.a.createElement(Ee.a,null,"\u8acb\u6ce8\u610f\uff01\u6578\u64da\u6d41\u91cf\u53d6\u6c7a\u65bc\u60a8\u6536\u770b\u76f4\u64ad\u7684\u6578\u91cf\u3002 ",o.a.createElement("br",null),"Please note that your data usage will increase according to the number of livestreams playing."),o.a.createElement(we.a,{defaultValue:parseInt(i.visibleCount),getAriaValueText:function(e){return e},"aria-labelledby":"discrete-slider-small-steps",step:1,marks:[{value:4,label:"4"},{value:8,label:"8"},{value:12,label:"12"},{value:16,label:"16"}],min:1,max:16,valueLabelDisplay:"auto",onChangeCommitted:function(t,a){e.setState({newVisibleCount:a})}})),o.a.createElement(oe.a,null,o.a.createElement(V.a,{onClick:n({action:"changeVisibleCount",newValue:r}),color:"inherit"},"\u5132\u5b58 Save")))}}]),t}(n.Component),ye=Object(y.a)(Object(O.a)(D,{withTheme:!0}))(Ce),Oe=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).handleShareDialogAction=function(t){var a=t.action;return function(){"close"===a&&e.setState({openShareDialog:!1})}},e.handleVisibleCountDialogAction=function(t){var a=t.action,n=t.newValue;return function(){"close"===a&&e.setState({openChangeVisibleCountDialog:!1}),"changeVisibleCount"===a&&(e.props.handleAppMenuAction({action:"changeVisibleCount",newValue:n||e.props.appOptions.visibleCount})(),e.setState({openChangeVisibleCountDialog:!1}))}},e.state={openChangeVisibleCountDialog:!1,openShareDialog:!1},e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.open,i=t.handleAppMenuAction,r=t.classes,l=t.theme,s=t.appOptions,c=this.state,u=c.openChangeVisibleCountDialog,p=c.openShareDialog,h={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen};return o.a.createElement(n.Fragment,null,o.a.createElement(J.a,{open:a,maxWidth:"xs",fullWidth:!0,onClose:i({action:"close"})},o.a.createElement(I.a,{disableTypography:!0,classes:{root:r.appMenuDialogTitleRoot}},o.a.createElement(B.a,{container:!0,spacing:2,justify:"space-between"},o.a.createElement(B.a,{item:!0},o.a.createElement(H.a,{noWrap:!0},"\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0"),o.a.createElement(H.a,{noWrap:!0},"No China Extradition Live")),o.a.createElement(U.a,{only:"xs"},o.a.createElement(B.a,{item:!0},o.a.createElement(W.a,{onClick:function(){e.setState({openShareDialog:!0})}},o.a.createElement(L.a,null,"share")))))),o.a.createElement(q.a,null),o.a.createElement(K.a,{component:"nav","aria-label":"Main mailbox folders"},o.a.createElement(U.a,{smUp:!0},o.a.createElement(P.a,{button:!0},o.a.createElement(Q.a,null,o.a.createElement(L.a,null,"share")),o.a.createElement(G.a,{primary:"\u5206\u4eab\u53cd\u9001\u4e2d\u76f4\u64ad\u53f0",secondary:"Share NCE Lives",onClick:function(){e.setState({openShareDialog:!0})}}))),o.a.createElement(P.a,{button:!0},o.a.createElement(Q.a,null,o.a.createElement(L.a,null,"view_module")),o.a.createElement(G.a,{primary:"\u66f4\u6539\u76f4\u64ad\u4e0a\u9650",secondary:"Change Maximum of Livestreams",onClick:function(){e.setState({openChangeVisibleCountDialog:!0})}})))),o.a.createElement(ve,{open:p,handleDialogAction:this.handleShareDialogAction,appOptions:s}),o.a.createElement(ye,{open:u,handleDialogAction:this.handleVisibleCountDialogAction,appOptions:s}),o.a.createElement($.a,{in:!0,timeout:h,style:{transitionDelay:"".concat(h.exit,"ms")},unmountOnExit:!0},o.a.createElement(_.a,{className:r.fab,color:"inherit",onClick:i({action:"open"})},o.a.createElement(L.a,null,"menu"))))}}]),t}(n.Component),je=Object(y.a)(Object(O.a)(D,{withTheme:!0}))(Oe),ke=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={currentLink:null,mobileOpen:!1},e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.classes,n=e.loading,i=e.appOptions,r={preloadReady:e.preloadReady,preloadData:e.preloadData,handleNewDataDialogResult:e.handleNewDataDialogResult},l={open:e.showAppMenu,handleAppMenuAction:e.handleAppMenuAction,appOptions:i};return o.a.createElement("div",{className:a.root},n?o.a.createElement("div",{className:a.progress},o.a.createElement(j.a,null)):o.a.createElement(M,{data:t}),o.a.createElement(F,r),o.a.createElement(je,l))}}]),t}(n.Component),De=Object(y.a)(Object(O.a)(D,{withTheme:!0}))(ke),Se=Object(E.a)(),xe="https://ncehk2019.github.io/nce-live-datasrc/lives.json",Re=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).setupShortcutListener=function(){window.addEventListener("keyup",e.onKeyUp)},e.showAppMenu=function(){console.log("showAppMenu"),e.setState({showAppMenu:!0})},e.onKeyUp=function(t){77===t.which&&e.showAppMenu()},e.refresh=Object(u.a)(s.a.mark(function t(){var a,n,o,i,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.prev=1,t.next=4,fetch(xe+"?time="+new Date);case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,o=n.visibleCount,i=n.lives,r=[],e.options&&e.options.visibleCount?o=e.options.visibleCount:e.options.visibleCount=o,i.forEach(function(e){var t=e.active,a=Object(c.a)(e,["active"]);t&&r.length<o&&r.push(a)}),e.setState({loading:!1,data:r}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),console.log("refresh error",t.t0),e.setState({loading:!1,data:[]});case 19:case"end":return t.stop()}},t,null,[[1,15]])})),e.autoRefresh=function(){e.autoRefreshJob=setInterval(Object(u.a)(s.a.mark(function t(){var a,n,o,i,r,l,u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.data,!a.preloadReady&&!e.preloadFetching){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,e.preloadFetching=!0,t.next=7,fetch(xe+"?time="+new Date);case 7:return o=t.sent,t.next=10,o.json();case 10:i=t.sent,r=i.visibleCount,l=i.lives,e.options&&e.options.visibleCount?r=e.options.visibleCount:e.options.visibleCount=r,u=[],l.forEach(function(e){var t=e.active,a=Object(c.a)(e,["active"]);t&&u.length<r&&u.push(a)}),JSON.stringify(n)!==JSON.stringify(u)&&e.setState({preloadReady:!0,preloadData:u}),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(3),console.log("autoRefresh error",t.t0),e.setState({preloadReady:!1,preloadData:[]});case 22:e.preloadFetching=!1;case 23:case"end":return t.stop()}},t,null,[[3,18]])})),3e4)},e.autoFocus=function(){e.autoFocusJob=setInterval(function(){window.focus(),document.activeElement&&document.activeElement.blur()},5e3)},e.handleNewDataDialogResult=function(t){var a=t.confirmed;return function(){a?e.setState({data:e.state.preloadData,preloadReady:!1,preloadData:[]}):(e.autoRefreshJob&&clearInterval(e.autoRefreshJob),e.setState({preloadReady:!1,preloadData:[]}))}},e.handleAppMenuAction=function(t){var a=t.action,n=t.newValue;return function(){"close"===a&&e.setState({showAppMenu:!1}),"open"===a&&e.setState({showAppMenu:!0}),"changeVisibleCount"===a&&(e.options.visibleCount=n,Se.push({search:"?visibleCount="+n}),e.refresh(),e.setState({showAppMenu:!1}))}},e.state={loading:!1,data:[],preloadReady:!1,preloadData:[],showAppMenu:!1},e.preloadFetching=!1,e.options=v.a.parse(Se.location.search,{ignoreQueryPrefix:!0}),e.unlistenHistory=Se.listen(function(){var t=v.a.parse(Se.location.search,{ignoreQueryPrefix:!0});console.log("history.listen",t),e.options&&t.visibleCount!==e.options.visibleCount&&(e.options.visibleCount=t.visibleCount,e.refresh())}),e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.refresh(),this.autoRefresh(),this.autoFocus(),this.setupShortcutListener();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.autoRefreshJob&&clearInterval(this.autoRefreshJob),this.autoFocusJob&&clearInterval(this.autoFocusJob),this.unlistenHistory(),window.removeEventListener("keyup",this.onKeyUp)}},{key:"render",value:function(){return o.a.createElement(f.a,{theme:C},o.a.createElement(De,Object.assign({},this.state,{appOptions:this.options,handleNewDataDialogResult:this.handleNewDataDialogResult,handleAppMenuAction:this.handleAppMenuAction})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[140,1,2]]]);