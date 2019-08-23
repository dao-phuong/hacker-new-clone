(window["webpackJsonphacker-new-clone"]=window["webpackJsonphacker-new-clone"]||[]).push([[0],{47:function(n,t,e){n.exports=e(81)},81:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),c=e(8),a=e.n(c),i=e(13),u=e(10),s=e(11),l=e(33),f=e.n(l),h=Object({NODE_ENV:"production",PUBLIC_URL:"/hacker-new-clone"}).URL||"http://localhost:3000/",d=2e4,p={"Content-Type":"application/json",Accept:"application/json"},S=new(function(){function n(t){var e=t.baseURL,r=void 0===e?h:e,o=t.timeout,c=void 0===o?d:o,a=t.headers,i=void 0===a?p:a,s=t.auth;Object(u.a)(this,n);var l=f.a.create({baseURL:r,timeout:c,headers:i,auth:s});l.interceptors.response.use(this.handleSuccess,this.handleError),this.client=l}return Object(s.a)(n,[{key:"handleSuccess",value:function(n){return n}},{key:"handleError",value:function(n){return Promise.reject(n)}},{key:"get",value:function(n){return this.client.get(n).then(function(n){return n.data})}},{key:"post",value:function(n,t){return this.client.post(n,t).then(function(n){return n.data})}},{key:"put",value:function(n,t){return this.client.put(n,t).then(function(n){return n.data})}},{key:"patch",value:function(n,t){return this.client.patch(n,t).then(function(n){return n.data})}},{key:"delete",value:function(n){return this.client.delete(n).then(function(n){return n.data})}}]),n}())({baseURL:" https://hacker-news.firebaseio.com/v0"}),E={};E.getTopStoryIds=function(){return S.get("/topstories".concat(".json?print=pretty"))},E.getStory=function(n){return S.get("/item/".concat(n).concat(".json?print=pretty"))},E.getStoriesByPage=function(n,t){var e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:t*n,end:(t+1)*n}}(20,t),r=function(n){var t=n.begin,e=n.end;return n.items.slice(t,e)}({begin:e.begin,end:e.end,items:n}).map(function(n){return E.getStory(n)});return Promise.all(r)};var b=E,g="@hnClone/story",y={FETCH_STORY_IDS_REQUEST:"".concat(g,"/FETCH_STORY_IDS_REQUEST"),FETCH_STORY_IDS_SUCCESS:"".concat(g,"/FETCH_STORY_IDS_SUCCESS"),FETCH_STORY_IDS_FAILURE:"".concat(g,"/FETCH_STORY_IDS_FAILURE"),FETCH_STORIES_REQUEST:"".concat(g,"/FETCH_STORIES_REQUEST"),FETCH_STORIES_SUCCESS:"".concat(g,"/FETCH_STORIES_SUCCESS"),FETCH_STORIES_FAILURE:"".concat(g,"/FETCH_STORIES_FAILURE")},m=function(n,t){return{type:n,payload:t}},v={fetchStoryIds:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return t(m(y.FETCH_STORY_IDS_REQUEST,n)),b.getTopStoryIds().then(function(n){return t(m(y.FETCH_STORY_IDS_SUCCESS,{storyIds:n})),t(v.fetchStories({storyIds:n,page:0})),n}).catch(function(n){return t(m(y.FETCH_STORY_IDS_FAILURE,n))})}},fetchStories:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){t(m(y.FETCH_STORIES_REQUEST,n));var e=n.storyIds,r=n.page;return b.getStoriesByPage(e,r).then(function(n){return t(m(y.FETCH_STORIES_SUCCESS,{stories:n}))}).catch(function(n){return t(m(y.FETCH_STORIES_FAILURE,n))})}}},O=v,_=e(34),T=Object(_.a)(function(n){return n.story.storyIds},function(n){return n.story.stories},function(n,t){return n.length>t.length}),j=e(44),w=e(35),I=e(43),C=e(36),R=e.n(C),x=e(1),F={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"},k=e(37),H=e(38),U=e.n(H),P=function(n){var t="";return n&&(n.includes("//")||(n="http://".concat(n)),t=U.a.parse(n).hostname),t.includes("www.")&&(t=t.split("www.")[1]),t},D="https://news.ycombinator.com",L="".concat(D,"/item?id="),Y="".concat(D,"/user?id="),A=function(n){var t=n.url,e=n.id,r="".concat(L).concat(e);return t||r},Q=e(2);function M(){var n=Object(Q.a)(["\n  color: ",";\n\n  &:visited {\n    color: ","\n  }\n"]);return M=function(){return n},n}function z(){var n=Object(Q.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return z=function(){return n},n}function B(){var n=Object(Q.a)(["\n  color: ",";\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-item: center;\n  text-decoration: none;\n"]);return B=function(){return n},n}function N(){var n=Object(Q.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return N=function(){return n},n}function J(){var n=Object(Q.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: .4px;\n"]);return J=function(){return n},n}function W(){var n=Object(Q.a)(["\n  padding: 20px;\n  border-bottom: 2px solid ","\n\n  &:last-child {\n    border-bottom: 0:\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return W=function(){return n},n}var V=x.c.li(W(),function(n){return n.theme.border}),$=x.c.h3(J(),function(n){return n.theme.text}),q=x.c.span(N(),function(n){return n.theme.text}),G=x.c.a(B(),function(n){return n.theme.text}),K=x.c.div(z(),function(n){return n.theme.textSecondary}),X=x.c.a(M(),function(n){return n.theme.textSecondary},function(n){return n.theme.textSecondary}),Z="noopener noreferrer nofollow",nn=function(n){var t=n.by,e=n.kids,r=void 0===e?[]:e,c=n.score,a=n.title,i=n.id,u=n.time,s=n.url,l=P(s)||"localhost",f=A({url:s,id:i}),h="".concat(L).concat(i),d="".concat(Y).concat(t);return o.a.createElement(V,null,o.a.createElement(G,{href:f,rel:Z,target:"_blank"},o.a.createElement($,null,a+" ",o.a.createElement(q,null,"(",l,")"))),o.a.createElement(K,null,c," points by "," ",o.a.createElement(X,{href:d,rel:Z,target:"_blank"},t),Object(k.format)(new Date(1e3*u).toISOString())," | ",o.a.createElement(X,{href:h,rel:Z,target:"_blank"},r.length," Comments")))};function tn(){var n=Object(Q.a)(["\n  background-color: ","\n  border-radius: 4px;\n  margin: 0 auto 20px;\n  display: flex;\n  flex-direction: column\n"]);return tn=function(){return n},n}var en=x.c.ul(tn(),function(n){return n.theme.backgroundSecondary}),rn=function(n){var t=n.stories;return o.a.createElement(en,null,t.map(function(n){return o.a.createElement(nn,Object.assign({key:n.id},n))}))};function on(){var n=Object(Q.a)(["\n  text-align: center;\n\n  span {\n    color: ","\n    display: inline-block;\n    margin: 0 4px;\n    font-size: 80px;\n    line-height: 0.1;\n    animation-name: ",";\n    animation-duration: 1s;\n    animation-interaction-count: infinite;\n    animation-fill-mode: both;\n  }\n\n  span:nth-child(2) {\n    animation-delay: .2s;\n  }\n\n  span:nth-child(3) {\n    animation-delay: .4s;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(Q.a)(["\n  0% {\n    opacity: .2;\n  }\n\n  20% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: .2;\n  }\n"]);return cn=function(){return n},n}var an=Object(x.d)(cn()),un=x.c.div(on(),function(n){return n.theme.textSecondary},an),sn=function(){return o.a.createElement(un,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))};function ln(){var n=Object(Q.a)(["\n  color: ","\n  font-size: 20px;\n  font-weight: 300;\n  margin-top: 24px;\n  margin-bottom: 26px;\n"]);return ln=function(){return n},n}function fn(){var n=Object(Q.a)(["\n  width: 85%;\n  margin: 0 auto;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 200px;\n\n  "," {\n    width: 96%;\n  }\n\n"]);return fn=function(){return n},n}var hn=x.c.div(fn(),"@media only sceen and (max-width: 768px)"),dn=x.c.h1(ln(),function(n){return n.theme.textSecondary}),pn=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=Object(j.a)(this,(n=Object(w.a)(t)).call.apply(n,[this].concat(o)))).fetchStories=function(){var n=e.props,t=n.storyIds,r=n.page,o=n.fetchStories;n.isFetching||o({storyIds:t,page:r})},e}return Object(I.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage()}},{key:"render",value:function(){var n=this.props,t=n.stories,e=n.hasMoreStories;return o.a.createElement(x.a,{theme:F},o.a.createElement("div",null,o.a.createElement(hn,null,o.a.createElement(dn,null,"Hacker News Reader"),o.a.createElement(R.a,{dataLength:t.length,next:this.fetchStories,hasMore:e,loader:o.a.createElement(sn,null),style:{height:"100%",overflow:"visible"}},o.a.createElement(rn,{stories:t})))))}}]),t}(o.a.Component),Sn=Object(i.b)(function(n){return{stories:n.story.stories,page:n.story.page,storyIds:n.story.storyIds,isFetching:n.story.isFetching,hasMoreStories:T(n)}},function(n){return{fetchStoriesFirstPage:function(){return n(O.fetchStoryIds())},fetchStories:function(t){var e=t.storyIds,r=t.page;return n(O.fetchStories({storyIds:e,page:r}))}}})(pn);function En(){var n=Object(Q.a)(["\n    * {\n      box-sizing: border-box;\n    }\n    html, body {\n      font-family: Lato, Helvetica-Neue, Helvetica, Arial, sans-serif;\n      width: 100vw;\n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n      min-height: 100vh;\n      background-color: ",";\n    }\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n    a {\n      text-decoration: none;\n      &:visited {\n        color: inherit;\n      }\n    }\n  "]);return En=function(){return n},n}var bn=Object(x.b)(En(),F.background),gn=e(4),yn=e(12),mn={SET_THEME:"".concat("@hnClone/app","/SET_THEME")};function vn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,r)}return e}function On(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?vn(e,!0).forEach(function(t){Object(yn.a)(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):vn(e).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}var _n=function(){return{theme:"dark"}},Tn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_n,t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case mn.SET_THEME:return On({},n,{},r);default:return n}},jn=e(20);function wn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,r)}return e}function In(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?wn(e,!0).forEach(function(t){Object(yn.a)(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):wn(e).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}var Cn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case y.FETCH_STORIES_REQUEST:case y.FETCH_STORY_IDS_REQUEST:return In({},n,{isFetching:!0});case y.FETCH_STORY_IDS_SUCCESS:return In({},n,{},r);case y.FETCH_STORIES_SUCCESS:return In({},n,{stories:[].concat(Object(jn.a)(n.stories),Object(jn.a)(r.stories)),page:n.page+1,isFetching:!1});default:return n}},Rn=Object(gn.c)({app:Tn,story:Cn}),xn=e(41),Fn=(e(42),[]);Fn.push(xn.a);var kn=Object(gn.d)(gn.a.apply(void 0,Fn)),Hn=function(n){return Object(gn.e)(Rn,n,kn)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){var n=Hn({});n.dispatch({type:"@hnClone/@@INIT"}),a.a.render(o.a.createElement(i.a,{store:n},o.a.createElement(Sn,null),o.a.createElement(bn,null)),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.6626e158.chunk.js.map