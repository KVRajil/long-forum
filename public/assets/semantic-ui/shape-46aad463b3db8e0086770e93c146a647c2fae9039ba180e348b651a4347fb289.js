/*!
 * # Semantic UI - Shape
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,i,n){"use strict";e.fn.shape=function(a){var o,r=e(this),s=(e("body"),(new Date).getTime()),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),h=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var t,p,m,f=r.selector||"",g=e.isPlainObject(a)?e.extend(!0,{},e.fn.shape.settings,a):e.extend({},e.fn.shape.settings),v=g.namespace,b=g.selector,y=g.error,T=g.className,k="."+v,C="module-"+v,E=e(this),w=E.find(b.sides),D=E.find(b.side),I=!1,S=this,_=E.data(C);m={initialize:function(){m.verbose("Initializing module for",S),m.set.defaultSide(),m.instantiate()},instantiate:function(){m.verbose("Storing instance of module",m),_=m,E.data(C,_)},destroy:function(){m.verbose("Destroying previous module for",S),E.removeData(C).off(k)},refresh:function(){m.verbose("Refreshing selector cache for",S),E=e(S),w=e(this).find(b.shape),D=e(this).find(b.side)},repaint:function(){m.verbose("Forcing repaint event");var e=w[0]||i.createElement("div");e.offsetWidth},animate:function(e,i){m.verbose("Animating box with properties",e),i=i||function(e){m.verbose("Executing animation callback"),e!==n&&e.stopPropagation(),m.reset(),m.set.active()},g.beforeChange.call(p[0]),m.get.transitionEvent()?(m.verbose("Starting CSS animation"),E.addClass(T.animating),w.css(e).one(m.get.transitionEvent(),i),m.set.duration(g.duration),h(function(){E.addClass(T.animating),t.addClass(T.hidden)})):i()},queue:function(e){m.debug("Queueing animation of",e),w.one(m.get.transitionEvent(),function(){m.debug("Executing queued animation"),setTimeout(function(){E.shape(e)},0)})},reset:function(){m.verbose("Animating states reset"),E.removeClass(T.animating).attr("style","").removeAttr("style"),w.attr("style","").removeAttr("style"),D.attr("style","").removeAttr("style").removeClass(T.hidden),p.removeClass(T.animating).attr("style","").removeAttr("style")},is:{complete:function(){return D.filter("."+T.active)[0]==p[0]},animating:function(){return E.hasClass(T.animating)}},set:{defaultSide:function(){t=E.find("."+g.className.active),p=t.next(b.side).length>0?t.next(b.side):E.find(b.side).first(),I=!1,m.verbose("Active side set to",t),m.verbose("Next side set to",p)},duration:function(e){e=e||g.duration,e="number"==typeof e?e+"ms":e,m.verbose("Setting animation duration",e),(g.duration||0===g.duration)&&w.add(D).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=E.find("."+g.className.active),t=e.outerWidth(!0),i=e.outerHeight(!0);E.css({width:t,height:i})},stageSize:function(){var e=E.clone().addClass(T.loading),t=e.find("."+g.className.active),i=I?e.find(b.side).eq(I):t.next(b.side).length>0?t.next(b.side):e.find(b.side).first(),n={};m.set.currentStageSize(),t.removeClass(T.active),i.addClass(T.active),e.insertAfter(E),n={width:i.outerWidth(!0),height:i.outerHeight(!0)},e.remove(),E.css(n),m.verbose("Resizing stage to fit new content",n)},nextSide:function(e){I=e,p=D.filter(e),I=D.index(p),0===p.length&&(m.set.defaultSide(),m.error(y.side)),m.verbose("Next side manually set to",p)},active:function(){m.verbose("Setting new side to active",p),D.removeClass(T.active),p.addClass(T.active),g.onChange.call(p[0]),m.set.defaultSide()}},flip:{up:function(){return!m.is.complete()||m.is.animating()||g.allowRepeats?void(m.is.animating()?m.queue("flip up"):(m.debug("Flipping up",p),m.set.stageSize(),m.stage.above(),m.animate(m.get.transform.up()))):void m.debug("Side already visible",p)},down:function(){return!m.is.complete()||m.is.animating()||g.allowRepeats?void(m.is.animating()?m.queue("flip down"):(m.debug("Flipping down",p),m.set.stageSize(),m.stage.below(),m.animate(m.get.transform.down()))):void m.debug("Side already visible",p)},left:function(){return!m.is.complete()||m.is.animating()||g.allowRepeats?void(m.is.animating()?m.queue("flip left"):(m.debug("Flipping left",p),m.set.stageSize(),m.stage.left(),m.animate(m.get.transform.left()))):void m.debug("Side already visible",p)},right:function(){return!m.is.complete()||m.is.animating()||g.allowRepeats?void(m.is.animating()?m.queue("flip right"):(m.debug("Flipping right",p),m.set.stageSize(),m.stage.right(),m.animate(m.get.transform.right()))):void m.debug("Side already visible",p)},over:function(){return!m.is.complete()||m.is.animating()||g.allowRepeats?void(m.is.animating()?m.queue("flip over"):(m.debug("Flipping over",p),m.set.stageSize(),m.stage.behind(),m.animate(m.get.transform.over()))):void m.debug("Side already visible",p)},back:function(){return!m.is.complete()||m.is.animating()||g.allowRepeats?void(m.is.animating()?m.queue("flip back"):(m.debug("Flipping back",p),m.set.stageSize(),m.stage.behind(),m.animate(m.get.transform.back()))):void m.debug("Side already visible",p)}},get:{transform:{up:function(){var e={y:-((t.outerHeight(!0)-p.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(-90deg)"}},down:function(){var e={y:-((t.outerHeight(!0)-p.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(90deg)"}},left:function(){var e={x:-((t.outerWidth(!0)-p.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(90deg)"}},right:function(){var e={x:-((t.outerWidth(!0)-p.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(-90deg)"}},over:function(){var e={x:-((t.outerWidth(!0)-p.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(180deg)"}},back:function(){var e={x:-((t.outerWidth(!0)-p.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=i.createElement("element"),a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in a)if(t.style[e]!==n)return a[e]},nextSide:function(){return t.next(b.side).length>0?t.next(b.side):E.find(b.side).first()}},stage:{above:function(){var e={origin:(t.outerHeight(!0)-p.outerHeight(!0))/2,depth:{active:p.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};m.verbose("Setting the initial animation position as above",p,e),w.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),p.addClass(T.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px)"})},below:function(){var e={origin:(t.outerHeight(!0)-p.outerHeight(!0))/2,depth:{active:p.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};m.verbose("Setting the initial animation position as below",p,e),w.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),p.addClass(T.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px)"})},left:function(){var e={active:t.outerWidth(!0),next:p.outerWidth(!0)},i={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};m.verbose("Setting the initial animation position as left",p,i),w.css({transform:"translateZ(-"+i.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+i.depth.active+"px)"}),p.addClass(T.animating).css({left:i.origin+"px",transform:"rotateY(-90deg) translateZ("+i.depth.next+"px)"})},right:function(){var e={active:t.outerWidth(!0),next:p.outerWidth(!0)},i={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};m.verbose("Setting the initial animation position as left",p,i),w.css({transform:"translateZ(-"+i.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+i.depth.active+"px)"}),p.addClass(T.animating).css({left:i.origin+"px",transform:"rotateY(90deg) translateZ("+i.depth.next+"px)"})},behind:function(){var e={active:t.outerWidth(!0),next:p.outerWidth(!0)},i={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};m.verbose("Setting the initial animation position as behind",p,i),t.css({transform:"rotateY(0deg)"}),p.addClass(T.animating).css({left:i.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(t,i){if(m.debug("Changing setting",t,i),e.isPlainObject(t))e.extend(!0,g,t);else{if(i===n)return g[t];g[t]=i}},internal:function(t,i){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(i===n)return m[t];m[t]=i}},debug:function(){g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments)},performance:{log:function(e){var t,i,n;g.performance&&(t=(new Date).getTime(),n=s||t,i=t-n,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":i})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=g.name+":",i=0;s=!1,clearTimeout(m.performance.timer),e.each(l,function(e,t){i+=t["Execution Time"]}),t+=" "+i+"ms",f&&(t+=" '"+f+"'"),r.length>1&&(t+=" ("+r.length+")"),(console.group!==n||console.table!==n)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,i,a){var r,s,l,c=_;return i=i||d,a=S||a,"string"==typeof t&&c!==n&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(i,a){var o=i!=r?a+t[i+1].charAt(0).toUpperCase()+t[i+1].slice(1):t;if(e.isPlainObject(c[o])&&i!=r)c=c[o];else{if(c[o]!==n)return s=c[o],!1;if(!e.isPlainObject(c[a])||i==r)return c[a]!==n?(s=c[a],!1):!1;c=c[a]}})),e.isFunction(s)?l=s.apply(a,i):s!==n&&(l=s),e.isArray(o)?o.push(l):o!==n?o=[o,l]:l!==n&&(o=l),s}},u?(_===n&&m.initialize(),m.invoke(c)):(_!==n&&_.invoke("destroy"),m.initialize())}),o!==n?o:this},e.fn.shape.settings={name:"Shape",debug:!1,verbose:!1,performance:!0,namespace:"shape",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document);