"use strict";(self.webpackChunkckb_explorer_fronted=self.webpackChunkckb_explorer_fronted||[]).push([[3119],{33119:function(n,t,e){e.r(t),e.d(t,{CellCountChart:function(){return v}});var i=e(29439),a=e(17144),r=e.n(a),o=e(15897),c=e(17452),l=e(79842),d=e(50595),s=e(49818),u=e(80286),x=e(36583),p=e(80184),h=function(n){return(0,s.Br)(n,"en"===(0,c.XX)()?60:80)},f=function(n){var t=n.seriesName,e=n.data,i=n.color;return t===c.ZP.t("statistic.live_cell")?"<div>".concat((0,s.ud)(i)).concat(h(c.ZP.t("statistic.live_cell"))," ").concat((0,l.pN)(e[1],2),"</div>"):t===c.ZP.t("statistic.all_cells")?"<div>".concat((0,s.ud)(i)).concat(h(c.ZP.t("statistic.all_cells"))," ").concat((0,l.pN)(e[2],2),"</div>"):""},m=function(n,t,e){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a={left:"4%",right:"4%",top:"8%",bottom:"6%",containLabel:!0},o={left:"3%",right:"3%",top:"8%",bottom:"5%",containLabel:!0};return{color:t.colors,tooltip:i?void 0:{trigger:"axis",formatter:function(n){var t=n,e="<div>".concat((0,s.ud)("#333333")).concat(h(c.ZP.t("statistic.date"))," ").concat(t[0].data[0],"</div>");return t.forEach((function(n){e+=f(n)})),e}},legend:i?void 0:{data:[{name:c.ZP.t("statistic.live_cell")},{name:c.ZP.t("statistic.all_cells")}]},grid:i?a:o,dataZoom:i?[]:l.ub,xAxis:[{name:e||i?"":c.ZP.t("statistic.date"),nameLocation:"middle",nameGap:30,type:"category",boundaryGap:!1}],yAxis:[{position:"left",name:e||i?"":c.ZP.t("statistic.live_cell"),type:"value",scale:!0,axisLine:{lineStyle:{color:t.colors[0]}},axisLabel:{formatter:function(n){return(0,l.pN)(new(r())(n))}}},{position:"right",name:e||i?"":c.ZP.t("statistic.all_cells"),type:"value",scale:!0,axisLine:{lineStyle:{color:t.colors[1]}},axisLabel:{formatter:function(n){return(0,l.pN)(new(r())(n))}}}],series:[{name:c.ZP.t("statistic.live_cell"),type:"line",yAxisIndex:0,symbol:i?"none":"circle",symbolSize:3,encode:{x:"timestamp",y:"live"}},{name:c.ZP.t("statistic.all_cells"),type:"line",yAxisIndex:1,symbol:i?"none":"circle",symbolSize:3,encode:{x:"timestamp",y:"all"}}],dataset:{source:n.map((function(n){return[(0,d.di)(n.createdAtUnixtimestamp),new(r())(n.liveCellsCount).toNumber(),new(r())(n.allCellsCount).toNumber()]})),dimensions:["timestamp","live","all"]}}},A=function(n){return n?n.map((function(n){return[n.createdAtUnixtimestamp,n.liveCellsCount,n.allCellsCount]})):[]},v=function(n){var t=n.isThumbnail,e=void 0!==t&&t,a=(0,o.$)(),r=(0,i.Z)(a,1)[0];return(0,p.jsx)(s.UU,{title:r("statistic.cell_count"),isThumbnail:e,fetchData:x.rY,getEChartOption:m,toCSV:A,cacheKey:u.$.CellCount,cacheMode:"date"})};t.default=v},49818:function(n,t,e){e.d(t,{S7:function(){return E},UU:function(){return N},ud:function(){return O},Br:function(){return B}});var i,a,r,o,c,l=e(1413),d=e(72791),s=(e(22107),e(99146),e(39536),e(21216),e(18690),e(6283),e(99516),e(60260),e(17332),e(60967),e(33776),e(23598)),u=e.n(s),x=e(29044),p=e(30168),h=e(15751),f=h.ZP.div(i||(i=(0,p.Z)(["\n  margin-bottom: 30px;\n  background: white;\n"]))),m=h.ZP.div(a||(a=(0,p.Z)(["\n  background: white;\n  margin-top: 30px;\n  padding: 10px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 750px) {\n    margin-top: 20px;\n  }\n\n  .chart__detail__title__panel {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n\n    > span {\n      color: #000000;\n      text-align: center;\n      font-size: 24px;\n      margin-left: 100px;\n\n      @media (max-width: 750px) {\n        font-size: 16px;\n        margin-left: 0px;\n      }\n    }\n\n    > img {\n      width: 18px;\n      height: 18px;\n      margin-left: 10px;\n    }\n  }\n\n  .chart__detail__title__download {\n    width: 100px;\n    padding: 5px 0;\n    border-radius: 2px;\n    border: solid 1px #666666;\n    font-size: 12px;\n    text-align: center;\n    color: #666666;\n    margin-right: 3.6%;\n\n    @media (max-width: 750px) {\n      display: none;\n    }\n  }\n"]))),A=h.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  width: 100%;\n  height: ",";\n  align-items: center;\n  justify-content: center;\n"])),(function(n){return n.isThumbnail?"200px":"70vh"})),v=h.ZP.div(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: ",";\n  height: ",";\n  border-radius: 6px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);\n  border: solid 0.5px ",";\n  background-color: #ffffff;\n\n  > img {\n    width: ",";\n    height: ",";\n  }\n\n  > span {\n    font-size: 12px;\n    font-weight: 500;\n    margin-top: 5px;\n    color: ",";\n  }\n"])),(function(n){return n.isThumbnail?"92px":"184px"}),(function(n){return n.isThumbnail?"56px":"112px"}),(function(n){return n.theme.primary}),(function(n){return n.isThumbnail?"18.5px":"37px"}),(function(n){return n.isThumbnail?"14px":"28px"}),(function(n){return n.theme.primary})),g=h.ZP.div(c||(c=(0,p.Z)(["\n  font-size: 12px;\n  with: 100%;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 6px 3%;\n  text-align: left;\n"]))),y=e(34508),b=e(47382),T=e(24861),w=e(86279),F=e(17452),j=e(83366),C=e(73860),U=e(38652),k=e(41172),Z=e(80184),P=function(n){return n.isThumbnail?(0,Z.jsx)(w.Z,{}):(0,Z.jsx)(y.Z,{show:!0})},_=function(n){var t=n.show,e=n.isThumbnail,i=void 0!==e&&e;return(0,Z.jsx)(A,{isThumbnail:i,children:t?(0,Z.jsx)(P,{isThumbnail:i}):(0,Z.jsxs)(v,{isThumbnail:i,children:[(0,Z.jsx)("img",{alt:"no data",src:(0,T.mC)()?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAqBAMAAAAdXSXHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTD/JjT3HjD/JjkfSmDzHijzHiz3Hiz3HizzHizzHizzGioxo4B0AAAALdFJOUwA2VR8L1vFsiqq+P/y9HgAAAbJJREFUOMt9U79Lw0AUvrYRa6dWCoJdrCKKWSqICl2SoYuTiLhkEkWQW7qIQxfBQSFLRbcuVdw6pdA06ffP+XKXXC4x5IPSd/dd3nvf+8EYYX3KSlBz5qU0960y3vVfyugB7phx8P7WLKbXEbIqwP2PYn6GJv0I30Ws0cGUdSIaO0V8H3NWs46fgMAqEo4FXVvWNjAuyhyQ0lwsC3TjhqRFqHK0t573MmwFizME0h6Bk6srnW7AYw5kTTZE/hm+jy8WSRMauaD9YUqP6MsG4q6Zj137kCexIjgL0iakRcnRn3Gu14fTU8OF5s8Y4VoVRfg9xb2WTh1hW+mai64Fehcc+J8J7ckLvd0mpT/UaLrQy71G9FKLnUqT3qP2CXcXMiqVNt+JSxk0FMeJLk3U15NVfhXHrLQoaCAqfptoDbLeeShCNJXWXnZAV1HIRao1O0lOmLyJtXr/Y0/UguWkycxNqAXLSnNFrAFW3ZaESdIqsd06Ak6ItqEhIHkKy3iWUvg940HZcmDsmcaP09fJutY2d2PsU7LV2E53Qa2dne9aDpPiDU6GIN+1HOr4LaONn+z5D/tN1bZlg6TXAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAqBAMAAAAdXSXHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTIij7Iei64ml74Wi65Su+Iai64ai64ai64ai7Iai64Wh68UdleAAAAALdFJOUwA3Vh7XCvK7iG6l9tKrJgAAAbNJREFUOMt9k79LAmEYx1+1l7RJA4lwsQyibtECF5cIarnlCiFoi9ChWyxocomCCFyEXMLFaHRSjvO87z/X++vu3vOO+4J450ee5/k+PwhhKg1IhgrmMhPbjpXFR3jLwl08Enry9V5NxyX4JA/A/U3nQ5TZh+k5jdIaBqTGsVtP420sScFqTcCypBkHt0bJHjBLqxzK2ifWydQjXDNrXHkb1f2fRgzn4JzBk89T9FmoSx1vY0FNZo1rh9cPW+cdYUtOjfYFd8cRnrplFkFNzXj6Pj+1g1xcpsO8QU0tz7/ugag/tieq1+KxCq/Cpoi4bfQ0XIRfDX0t1NS0Vphw/3RMTbepcYOVP9Yw+0FfyC2G10FuSzRHX0jamtiyU3fSJGvt5gZeyCpkUfOYNdFr2YIPtRO9+BaIqB08BAvpxaObvkhRDr024wu64imdqJPxW7N9S/1Hq0W7LZ5s7lrR1iQrN8IDo3FrI5Gri9VBRcpgY8yp58oxxBBuoMkjRTt8WauCI7lNGmJ1ULmhxmdilIIG51jYPVQ6YsXequdG8poSU9vQHPUMSjentqEiXrMwfYm//wNhZtQ+LjTiaQAAAABJRU5ErkJggg=="}),(0,Z.jsx)("span",{children:F.ZP.t("statistic.no_data")})]})})},E=function(n){var t=n.option,e=n.isThumbnail,i=n.clickEvent,a=n.notMerge,r=void 0!==a&&a,o=n.lazyUpdate,c=void 0!==o&&o,s=n.style,x=n.className,p=void 0===x?"":x,h=(0,d.useRef)(null),f=(0,d.useRef)(null),m=(0,C.D9)(t),A=(0,C.D9)(i);return(0,d.useEffect)((function(){var n=null;if(h.current){if(!f.current){var e=u().getInstanceByDom(h.current);e&&e.dispose(),f.current=u().init(h.current)}n=f.current;try{(0,k.xb)(m,t,["formatter"])||n.setOption(t,{notMerge:r,lazyUpdate:c}),i&&"function"===typeof i&&i!==A&&n.on("click",i)}catch(a){console.error("error",a),n&&n.dispose()}}}),[i,c,r,t,A,m]),(0,C.w_)((function(){var n;f.current&&(null===(n=f.current)||void 0===n||n.resize())})),(0,Z.jsx)("div",{style:(0,l.Z)({height:e?"200px":"70vh"},s),className:p,ref:h})},q=function(n){var t=n.title,e=n.children,i=n.description,a=function(n){if(n&&0!==n.length){var t="";return n.forEach((function(n){t+=n.join(","),t+="\n"})),t}}(n.data),r=(t.indexOf(" (")>0?t.substring(0,t.indexOf(" (")):t).replace(/&/g,"").toLowerCase().replace(/\s+/g,"-");return(0,Z.jsxs)(j.Z,{children:[(0,Z.jsxs)(m,{className:"container",children:[(0,Z.jsxs)("div",{className:"chart__detail__title__panel",children:[(0,Z.jsx)("span",{children:t}),i&&(0,Z.jsx)(x.Z,{placement:"bottom",title:i,children:(0,Z.jsx)("img",{src:b,alt:"chart help"})})]}),a&&(0,Z.jsx)("a",{className:"chart__detail__title__download",rel:"noopener noreferrer",href:"data:text/csv;charset=utf-8,".concat(encodeURI(a)),target:"_blank",download:"".concat(r,".csv"),children:F.ZP.t("statistic.download_data")})]}),(0,Z.jsx)(f,{className:"container",children:e})]})};function N(n){var t=n.title,e=n.description,i=n.note,a=n.isThumbnail,r=void 0!==a&&a,o=n.chartProps,c=n.fetchData,s=n.onFetched,u=n.getEChartOption,x=n.toCSV,p=n.cacheKey,h=n.cacheMode,f=void 0===h?"forever":h,m=(0,C.dD)(),A=(0,U.mr)().app,v=(0,C.fg)(c,p,f),y=(0,d.useMemo)((function(){var n;return null!==(n=v.data)&&void 0!==n?n:[]}),[v.data]);(0,d.useEffect)((function(){s&&v.data&&s(v.data)}),[s,v.data]);var b=(0,d.useMemo)((function(){return u(y,A.chartColor,m,r)}),[A.chartColor,y,u,m,r]),T=v.isLoading?(0,Z.jsx)(_,{show:!0,isThumbnail:r}):(0,Z.jsx)(E,(0,l.Z)({option:b,isThumbnail:r},o));return r?T:(0,Z.jsxs)(q,{title:t,description:e,data:x(y),children:[T,null!=i&&(0,Z.jsx)(g,{children:i})]})}var O=function(n){return'<span style="display:inline-block;margin-right:8px;margin-left:5px;margin-bottom:2px;border-radius:10px;width:6px;height:6px;background-color:'.concat(n,'"></span>')},B=function(n,t){return'<span style="width:'.concat(t,'px;display:inline-block;">').concat(n,":</span>")}},79842:function(n,t,e){e.d(t,{nK:function(){return c},pN:function(){return o},ub:function(){return r}});var i=e(17144),a=e.n(i),r=[{show:!0,realtime:!0,start:0,end:100,xAxisIndex:[0]},{type:"inside",realtime:!0,start:0,end:100,xAxisIndex:[0]}],o=function(n,t,e){var i="string"===typeof n||"number"===typeof n?new(a())(n):n;if(i.isNaN()||i.isZero())return"0";var r=i.dividedBy(1e3),o=r.dividedBy(1e3),c=o.dividedBy(1e3),l=c.dividedBy(1e3),d=l.dividedBy(1e3),s=d.dividedBy(1e3),u=s.dividedBy(1e3),x=u.dividedBy(1e3);return x.isGreaterThanOrEqualTo(1)?"".concat(void 0!==t?x.toFixed(t):x.toFixed(),"Y"):u.isGreaterThanOrEqualTo(1)?"".concat(void 0!==t?u.toFixed(t):u.toFixed(),"Z"):s.isGreaterThanOrEqualTo(1)?"".concat(void 0!==t?s.toFixed(t):s.toFixed(),"E"):d.isGreaterThanOrEqualTo(1)?"".concat(void 0!==t?d.toFixed(t):d.toFixed(),"P"):l.isGreaterThanOrEqualTo(1)?"".concat(void 0!==t?l.toFixed(t):l.toFixed(),"T"):c.isGreaterThanOrEqualTo(1)?"".concat(void 0!==t?c.toFixed(t):c.toFixed(),"G"):o.isGreaterThanOrEqualTo(1)?"".concat(void 0!==t?o.toFixed(t):o.toFixed(),"M"):r.isGreaterThanOrEqualTo(1)?"".concat(void 0!==t?r.toFixed(t):r.toFixed(),"K"):"".concat(t&&!e?i.toFixed(t):i.toFixed())},c=function(n,t){var e="string"===typeof n||"number"===typeof n?new(a())(n):n;return"[".concat(e.isGreaterThanOrEqualTo(1e3)?o(e.dividedBy(10),0):"0",", ").concat(o(n,0)).concat(t||"","]")}}}]);
//# sourceMappingURL=3119.d47f6340.chunk.js.map