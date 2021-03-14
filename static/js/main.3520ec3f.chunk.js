(this["webpackJsonpbinance-app"]=this["webpackJsonpbinance-app"]||[]).push([[0],{121:function(e,t,a){},129:function(e,t){},131:function(e,t){},141:function(e,t){},143:function(e,t){},170:function(e,t){},172:function(e,t){},173:function(e,t){},178:function(e,t){},180:function(e,t){},199:function(e,t){},211:function(e,t){},214:function(e,t){},223:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(14),i=a.n(n),c=a(113),r=a.n(c),o=(a(121),a(59)),s=a(115),l=a(6),h=a(11),u=a(12),d=a(22),v=a(21),f=a(116),b=a(60),p=a.n(b),m=a(114),j=a.n(m),T=a(228),y=(a(223),a(3)),D=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).convertTickerData=n.convertTickerData.bind(Object(u.a)(n)),n.convertCandleData=n.convertCandleData.bind(Object(u.a)(n)),n.convertCandleToTickerData=n.convertCandleToTickerData.bind(Object(u.a)(n)),n.ref=i.a.createRef(),n.state={candleData:[],lineData:[],smaData:[]},n}return Object(h.a)(a,[{key:"convertToLocalTimeSeconds",value:function(e){return e/1e3-60*(new Date).getTimezoneOffset()}},{key:"convertToUTCMilliseconds",value:function(e){return 1e3*(e+60*(new Date).getTimezoneOffset())}},{key:"convertTickerData",value:function(e){var t=this.convertToLocalTimeSeconds(e.eventTime),a=parseFloat(e.curDayClose);return{lineData:{time:t,value:a},smaData:{time:t,value:this.sma.nextValue(a)}}}},{key:"convertCandleData",value:function(e){return e.time=this.convertToLocalTimeSeconds(e.startTime||e.openTime),{candleData:e}}},{key:"convertCandleToTickerData",value:function(e){return this.convertTickerData({eventTime:e.openTime,curDayClose:e.close})}},{key:"getStateUpdater",value:function(e){var t=this;return function(a){t.setState((function(t){var n=e(a);for(var i in n)n[i]=[].concat(Object(s.a)(t[i]),[n[i]]);return n}))}}},{key:"componentDidMount",value:function(){var e=this;this.binance=j()(),this.sma=new T.a({period:600,values:[]}),this.binance.candles({symbol:this.props.symbol,interval:"1m",limit:1e3}).then((function(t){var a,n=Object.assign({},e.state),i=Object(o.a)(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;if(n.lineData.length>0){var r=n.lineData[n.lineData.length-1],s=Object.assign({},c),l=s.openTime;s.openTime=e.convertToUTCMilliseconds(r.time);var h=parseFloat(s.close);s.close=r.value;for(var u=(h-r.value)/60;s.openTime<l;){var d=e.convertCandleToTickerData(s);for(var v in d)n[v].push(d[v]);s.openTime+=1e3,s.close+=u}}var f=Object.assign({},e.convertCandleToTickerData(c),e.convertCandleData(c));for(var b in f)n[b].push(f[b])}}catch(p){i.e(p)}finally{i.f()}e.setState(n)})),this.closeWS=[this.binance.ws.ticker(this.props.symbol,this.getStateUpdater(this.convertTickerData)),this.binance.ws.candles(this.props.symbol,"1m",this.getStateUpdater(this.convertCandleData))],this.chart=Object(f.a)(this.ref.current,{width:600,height:400,localization:{locale:"es-ES"},timeScale:{timeVisible:!0}}),this.charts={lineData:this.chart.addLineSeries({lineWidth:1,crosshairMarkerRadius:3}),candleData:this.chart.addCandlestickSeries(),smaData:this.chart.addLineSeries({lineWidth:1,crosshairMarkerRadius:3,title:"SMA 50",color:"#219600"})};var t={priceFormat:{precision:6,minMove:1e-6}};for(var a in this.charts)this.charts[a].applyOptions(t)}},{key:"componentDidUpdate",value:function(e,t){if(this.state!==t)for(var a in this.state)this.state[a]!==t[a]&&this.charts[a].setData(this.state[a])}},{key:"componentWillUnmount",value:function(){var e,t=Object(o.a)(this.closeWS);try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(a){t.e(a)}finally{t.f()}this.closeWS=[]}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{ref:this.ref})})}}]),a}(i.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).binance=null,n.state={apiKeyValue:"",apiSecretValue:""},n.handleChangeAPIKey=n.handleChangeAPIKey.bind(Object(u.a)(n)),n.handleChangeAPISecret=n.handleChangeAPISecret.bind(Object(u.a)(n)),n.handleRun=n.handleRun.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handleChangeAPIKey",value:function(e){this.setState({apiKeyValue:e.target.value})}},{key:"handleChangeAPISecret",value:function(e){this.setState({apiSecretValue:e.target.value})}},{key:"handleRun",value:function(){}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("input",{name:"APIKEY",type:"text",value:this.state.apiKeyValue,onChange:this.handleChangeAPIKey}),Object(y.jsx)("input",{name:"APISECRET",type:"text",value:this.state.apiSecretValue,onChange:this.handleChangeAPISecret}),Object(y.jsx)("button",{onClick:this.handleRun,children:"Run"}),Object(y.jsx)(p.a,{width:980,height:610,symbol:"KRAKEN:ADAEUR",interval:"1",timezone:"Europe/Madrid",style:"1",locale:"es",toolbar_bg:"#f1f3f6",enable_publishing:!1,withdateranges:!0,hide_side_toolbar:!1,allow_symbol_change:!0,theme:b.Themes.DARK}),Object(y.jsx)(D,{symbol:"ADAEUR"})]})}}]),a}(i.a.Component),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,229)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(g,{})}),document.getElementById("root")),O()}},[[226,1,2]]]);
//# sourceMappingURL=main.3520ec3f.chunk.js.map