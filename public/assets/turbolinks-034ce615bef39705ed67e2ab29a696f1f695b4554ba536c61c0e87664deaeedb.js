(function(){var e,t,n,i,o,a,r,s,l,c,u,d,h,f,m,p,g,v,E,T,b,C,I,D,O,y,R,_,k,K,w,x,S,N,A,L,P,F,B,M,$,H,q,z,j,W,U,V,G,X,Y,Q,Z,J,ee,te,ne=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1},ie=function(e,t){function n(){this.constructor=e}for(var i in t)oe.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},oe={}.hasOwnProperty,ae=[].slice,re=function(e,t){return function(){return e.apply(t,arguments)}};N={},h=10,Q=!1,B=null,E=null,x=null,H=null,te=null,i={BEFORE_CHANGE:"page:before-change",FETCH:"page:fetch",RECEIVE:"page:receive",CHANGE:"page:change",UPDATE:"page:update",LOAD:"page:load",RESTORE:"page:restore",BEFORE_UNLOAD:"page:before-unload",EXPIRE:"page:expire"},D=function(e){var t;return e=new n(e),U(),d(),null!=B&&B.start(),Q&&(t=Z(e.absolute))?(O(t),y(e,null,!1)):y(e,X)},Z=function(e){var t;return t=N[e],t&&!t.transitionCacheDisabled?t:void 0},b=function(e){return null==e&&(e=!0),Q=e},T=function(e){return null==e&&(e=!0),c?e?null!=B?B:B=new a("html"):(null!=B&&B.uninstall(),B=null):void 0},y=function(e,t,n){return null==n&&(n=!0),J(i.FETCH,{url:e.absolute}),null!=te&&te.abort(),te=new XMLHttpRequest,te.open("GET",e.withoutHashForIE10compatibility(),!0),te.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),te.setRequestHeader("X-XHR-Referer",H),te.onload=function(){var n;return J(i.RECEIVE,{url:e.absolute}),(n=F())?(q(e),z(),f.apply(null,I(n)),S(),"function"==typeof t&&t(),J(i.LOAD)):document.location.href=v()||e.absolute},B&&n&&(te.onprogress=function(e){return function(e){var t;return t=e.lengthComputable?e.loaded/e.total*100:B.value+(100-B.value)/10,B.advanceTo(t)}}(this)),te.onloadend=function(){return te=null},te.onerror=function(){return document.location.href=e.absolute},te.send()},O=function(e){return null!=te&&te.abort(),f(e.title,e.body),M(e),J(i.RESTORE)},d=function(){var e;return e=new n(E.url),N[e.absolute]={url:e.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},p(h)},L=function(e){return null==e&&(e=h),/^[\d]+$/.test(e)?h=parseInt(e):void 0},p=function(e){var t,n,o,a,r,s;for(r=Object.keys(N),t=r.map(function(e){return N[e].cachedAt}).sort(function(e,t){return t-e}),s=[],n=0,a=r.length;a>n;n++)o=r[n],N[o].cachedAt<=t[e]&&(J(i.EXPIRE,N[o]),s.push(delete N[o]));return s},f=function(t,n,o,a){return J(i.BEFORE_UNLOAD),document.title=t,document.documentElement.replaceChild(n,document.body),null!=o&&e.update(o),Y(),a&&C(),E=window.history.state,null!=B&&B.done(),J(i.CHANGE),J(i.UPDATE)},C=function(){var e,t,n,i,o,a,r,s,l,c,u,d;for(d=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),n=0,o=d.length;o>n;n++)if(u=d[n],""===(l=u.type)||"text/javascript"===l){for(t=document.createElement("script"),c=u.attributes,i=0,a=c.length;a>i;i++)e=c[i],t.setAttribute(e.name,e.value);u.hasAttribute("async")||(t.async=!1),t.appendChild(document.createTextNode(u.innerHTML)),s=u.parentNode,r=u.nextSibling,s.removeChild(u),s.insertBefore(t,r)}},V=function(e){return e.innerHTML=e.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),e},Y=function(){var e,t;return e=(t=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[t.length-1],e&&document.activeElement!==e?e.focus():void 0},q=function(e){return(e=new n(e)).absolute!==H?window.history.pushState({turbolinks:!0,url:e.absolute},"",e.absolute):void 0},z=function(){var e,t;return(e=te.getResponseHeader("X-XHR-Redirected-To"))?(e=new n(e),t=e.hasNoHash()?document.location.hash:"",window.history.replaceState(window.history.state,"",e.href+t)):void 0},v=function(){var e;return null!=(e=te.getResponseHeader("Location"))&&new n(e).crossOrigin()?e:void 0},U=function(){return H=document.location.href},W=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},j=function(){return E=window.history.state},S=function(){var e;return navigator.userAgent.match(/Firefox/)&&!(e=new n).hasNoHash()?(window.history.replaceState(E,"",e.withoutHash()),document.location.hash=e.hash):void 0},M=function(e){return window.scrollTo(e.positionX,e.positionY)},X=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},m=function(e){var t,n,i;if(null==e||"object"!=typeof e)return e;t=new e.constructor;for(n in e)i=e[n],t[n]=m(i);return t},P=function(e){var t,n;return n=(null!=(t=document.cookie.match(new RegExp(e+"=(\\w+)")))?t[1].toUpperCase():void 0)||"",document.cookie=e+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",n},J=function(e,t){var n;return"undefined"!=typeof Prototype&&Event.fire(document,e,t,!0),n=document.createEvent("Events"),t&&(n.data=t),n.initEvent(e,!0,!0),document.dispatchEvent(n)},A=function(e){return!J(i.BEFORE_CHANGE,{url:e})},F=function(){var e,t,n,i,o,a;return t=function(){var e;return 400<=(e=te.status)&&600>e},a=function(){var e;return null!=(e=te.getResponseHeader("Content-Type"))&&e.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},i=function(e){var t,n,i,o,a;for(o=e.querySelector("head").childNodes,a=[],t=0,n=o.length;n>t;t++)i=o[t],null!=("function"==typeof i.getAttribute?i.getAttribute("data-turbolinks-track"):void 0)&&a.push(i.getAttribute("src")||i.getAttribute("href"));return a},e=function(e){var t;return x||(x=i(document)),t=i(e),t.length!==x.length||o(t,x).length!==x.length},o=function(e,t){var n,i,o,a,r;for(e.length>t.length&&(o=[t,e],e=o[0],t=o[1]),a=[],n=0,i=e.length;i>n;n++)r=e[n],ne.call(t,r)>=0&&a.push(r);return a},!t()&&a()&&(n=g(te.responseText),n&&!e(n))?n:void 0},I=function(t){var n;return n=t.querySelector("title"),[null!=n?n.textContent:void 0,V(t.querySelector("body")),e.get(t).token,"runScripts"]},e={get:function(e){var t;return null==e&&(e=document),{node:t=e.querySelector('meta[name="csrf-token"]'),token:null!=t&&"function"==typeof t.getAttribute?t.getAttribute("content"):void 0}},update:function(e){var t;return t=this.get(),null!=t.token&&null!=e&&t.token!==e?t.node.setAttribute("content",e):void 0}},g=function(e){var t;return t=document.documentElement.cloneNode(),t.innerHTML=e,t.head=t.querySelector("head"),t.body=t.querySelector("body"),t},n=function(){function e(t){return this.original=null!=t?t:document.location.href,this.original.constructor===e?this.original:void this._parse()}return e.prototype.withoutHash=function(){return this.href.replace(this.hash,"").replace("#","")},e.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},e.prototype.hasNoHash=function(){return 0===this.hash.length},e.prototype.crossOrigin=function(){return this.origin!==(new e).origin},e.prototype._parse=function(){var e;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,e=this.link,this.href=e.href,this.protocol=e.protocol,this.host=e.host,this.hostname=e.hostname,this.port=e.port,this.pathname=e.pathname,this.search=e.search,this.hash=e.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},e}(),o=function(e){function t(e){return this.link=e,this.link.constructor===t?this.link:(this.original=this.link.href,this.originalElement=this.link,this.link=this.link.cloneNode(!1),void t.__super__.constructor.apply(this,arguments))}return ie(t,e),t.HTML_EXTENSIONS=["html"],t.allowExtensions=function(){var e,n,i,o;for(n=1<=arguments.length?ae.call(arguments,0):[],i=0,o=n.length;o>i;i++)e=n[i],t.HTML_EXTENSIONS.push(e);return t.HTML_EXTENSIONS},t.prototype.shouldIgnore=function(){return this.crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},t.prototype._anchored=function(){return(this.hash.length>0||"#"===this.href.charAt(this.href.length-1))&&this.withoutHash()===(new n).withoutHash()},t.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+t.HTML_EXTENSIONS.join("|")+")?$","g"))},t.prototype._optOut=function(){var e,t;for(t=this.originalElement;!e&&t!==document;)e=null!=t.getAttribute("data-no-turbolink"),t=t.parentNode;return e},t.prototype._target=function(){return 0!==this.link.target.length},t}(n),t=function(){function e(e){this.event=e,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(A(this.link.absolute)||ee(this.link.href),this.event.preventDefault()))}return e.installHandlerLast=function(t){return t.defaultPrevented?void 0:(document.removeEventListener("click",e.handle,!1),document.addEventListener("click",e.handle,!1))},e.handle=function(t){return new e(t)},e.prototype._extractLink=function(){var e;for(e=this.event.target;e.parentNode&&"A"!==e.nodeName;)e=e.parentNode;return"A"===e.nodeName&&0!==e.href.length?this.link=new o(e):void 0},e.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},e.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},e}(),a=function(){function e(e){this.elementSelector=e,this._trickle=re(this._trickle,this),this.value=0,this.content="",this.speed=300,this.opacity=.99,this.install()}var t;return t="turbolinks-progress-bar",e.prototype.install=function(){return this.element=document.querySelector(this.elementSelector),this.element.classList.add(t),this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this._updateStyle()},e.prototype.uninstall=function(){return this.element.classList.remove(t),document.head.removeChild(this.styleElement)},e.prototype.start=function(){return this.advanceTo(5)},e.prototype.advanceTo=function(e){var t;if(e>(t=this.value)&&100>=t){if(this.value=e,this._updateStyle(),100===this.value)return this._stopTrickle();if(this.value>0)return this._startTrickle()}},e.prototype.done=function(){return this.value>0?(this.advanceTo(100),this._reset()):void 0},e.prototype._reset=function(){var e;return e=this.opacity,setTimeout(function(e){return function(){return e.opacity=0,e._updateStyle()}}(this),this.speed/2),setTimeout(function(t){return function(){return t.value=0,t.opacity=e,t._withSpeed(0,function(){return t._updateStyle(!0)})}}(this),this.speed)},e.prototype._startTrickle=function(){return this.trickling?void 0:(this.trickling=!0,setTimeout(this._trickle,this.speed))},e.prototype._stopTrickle=function(){return delete this.trickling},e.prototype._trickle=function(){return this.trickling?(this.advanceTo(this.value+Math.random()/2),setTimeout(this._trickle,this.speed)):void 0},e.prototype._withSpeed=function(e,t){var n,i;return n=this.speed,this.speed=e,i=t(),this.speed=n,i},e.prototype._updateStyle=function(e){return null==e&&(e=!1),e&&this._changeContentToForceRepaint(),this.styleElement.textContent=this._createCSSRule()},e.prototype._changeContentToForceRepaint=function(){return this.content=""===this.content?" ":""},e.prototype._createCSSRule=function(){return this.elementSelector+"."+t+"::before {\n  content: '"+this.content+"';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: "+this.opacity+";\n  width: "+this.value+"%;\n  transition: width "+this.speed+"ms ease-out, opacity "+this.speed/2+"ms ease-in;\n  transform: translate3d(0,0,0);\n}"},e}(),u=function(e){return setTimeout(e,500)},k=function(){return document.addEventListener("DOMContentLoaded",function(){return J(i.CHANGE),J(i.UPDATE)},!0)},w=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(e,t,n){return jQuery.trim(t.responseText)?J(i.UPDATE):void 0}):void 0},K=function(e){var t,i;return(null!=(i=e.state)?i.turbolinks:void 0)?(t=N[new n(e.state.url).absolute])?(d(),O(t)):ee(e.target.location.href):void 0},_=function(){return W(),j(),document.addEventListener("click",t.installHandlerLast,!0),window.addEventListener("hashchange",function(e){return W(),j()},!1),u(function(){return window.addEventListener("popstate",K,!1)})},R=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),l=window.history&&window.history.pushState&&window.history.replaceState&&R,r=!navigator.userAgent.match(/CriOS\//),G="GET"===($=P("request_method"))||""===$,c=l&&r&&G,s=document.addEventListener&&document.createEvent,s&&(k(),w()),c?(ee=D,_()):ee=function(e){return document.location.href=e},this.Turbolinks={visit:ee,pagesCached:L,enableTransitionCache:b,enableProgressBar:T,allowLinkExtensions:o.allowExtensions,supported:c,EVENTS:m(i)}}).call(this);