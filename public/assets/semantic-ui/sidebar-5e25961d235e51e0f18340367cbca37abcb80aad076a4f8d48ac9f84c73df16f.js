/*!
 * # Semantic UI - Sidebar
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,i,n){"use strict";e.fn.sidebar=function(a){var o,r=e(this),s=e(t),l=e(i),c=e("html"),u=e("head"),d=r.selector||"",h=(new Date).getTime(),p=[],m=arguments[0],f="string"==typeof m,g=[].slice.call(arguments,1),v=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var r,b,y,T,k,C,E=e.isPlainObject(a)?e.extend(!0,{},e.fn.sidebar.settings,a):e.extend({},e.fn.sidebar.settings),w=E.selector,D=E.className,I=E.namespace,S=E.regExp,_=E.error,R="."+I,x="module-"+I,O=e(this),A=e(E.context),L=O.children(w.sidebar),N=A.children(w.fixed),F=A.children(w.pusher),P=this,K=O.data(x);C={initialize:function(){C.debug("Initializing sidebar",a),C.create.id(),k=C.get.transitionEvent(),C.is.ios()&&C.set.ios(),E.delaySetup?v(C.setup.layout):C.setup.layout(),v(function(){C.setup.cache()}),C.instantiate()},instantiate:function(){C.verbose("Storing instance of module",C),K=C,O.data(x,C)},create:{id:function(){y=(Math.random().toString(16)+"000000000").substr(2,8),b="."+y,C.verbose("Creating unique id for element",y)}},destroy:function(){C.verbose("Destroying previous module for",O),O.off(R).removeData(x),C.is.ios()&&C.remove.ios(),A.off(b),s.off(b),l.off(b)},event:{clickaway:function(e){var t=F.find(e.target).length>0||F.is(e.target),i=A.is(e.target);t&&(C.verbose("User clicked on dimmed page"),C.hide()),i&&(C.verbose("User clicked on dimmable context (scaled out page)"),C.hide())},touch:function(e){},containScroll:function(e){P.scrollTop<=0&&(P.scrollTop=1),P.scrollTop+P.offsetHeight>=P.scrollHeight&&(P.scrollTop=P.scrollHeight-P.offsetHeight-1)},scroll:function(t){0===e(t.target).closest(w.sidebar).length&&t.preventDefault()}},bind:{clickaway:function(){C.verbose("Adding clickaway events to context",A),E.closable&&A.on("click"+b,C.event.clickaway).on("touchend"+b,C.event.clickaway)},scrollLock:function(){E.scrollLock&&(C.debug("Disabling page scroll"),s.on("DOMMouseScroll"+b,C.event.scroll)),C.verbose("Adding events to contain sidebar scroll"),l.on("touchmove"+b,C.event.touch),O.on("scroll"+R,C.event.containScroll)}},unbind:{clickaway:function(){C.verbose("Removing clickaway events from context",A),A.off(b)},scrollLock:function(){C.verbose("Removing scroll lock from page"),l.off(b),s.off(b),O.off("scroll"+R)}},add:{inlineCSS:function(){var t,i=C.cache.width||O.outerWidth(),n=C.cache.height||O.outerHeight(),a=C.is.rtl(),o=C.get.direction(),s={left:i,right:-i,top:n,bottom:-n};a&&(C.verbose("RTL detected, flipping widths"),s.left=-i,s.right=i),t="<style>","left"===o||"right"===o?(C.debug("Adding CSS rules for animation distance",i),t+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d("+s[o]+"px, 0, 0);           transform: translate3d("+s[o]+"px, 0, 0); }"):("top"===o||"bottom"==o)&&(t+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+s[o]+"px, 0);           transform: translate3d(0, "+s[o]+"px, 0); }"),C.is.ie()&&("left"===o||"right"===o?(C.debug("Adding CSS rules for animation distance",i),t+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+s[o]+"px, 0, 0);           transform: translate3d("+s[o]+"px, 0, 0); }"):("top"===o||"bottom"==o)&&(t+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+s[o]+"px, 0);           transform: translate3d(0, "+s[o]+"px, 0); }"),t+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),t+="</style>",r=e(t).appendTo(u),C.debug("Adding sizing css to head",r)}},refresh:function(){C.verbose("Refreshing selector cache"),A=e(E.context),L=A.children(w.sidebar),F=A.children(w.pusher),N=A.children(w.fixed),C.clear.cache()},refreshSidebars:function(){C.verbose("Refreshing other sidebars"),L=A.children(w.sidebar)},repaint:function(){C.verbose("Forcing repaint event"),P.style.display="none";P.offsetHeight;P.scrollTop=P.scrollTop,P.style.display=""},setup:{cache:function(){C.cache={width:O.outerWidth(),height:O.outerHeight(),rtl:"rtl"==O.css("direction")}},layout:function(){0===A.children(w.pusher).length&&(C.debug("Adding wrapper element for sidebar"),C.error(_.pusher),F=e('<div class="pusher" />'),A.children().not(w.omitted).not(L).wrapAll(F),C.refresh()),(0===O.nextAll(w.pusher).length||O.nextAll(w.pusher)[0]!==F[0])&&(C.debug("Moved sidebar to correct parent element"),C.error(_.movedSidebar,P),O.detach().prependTo(A),C.refresh()),C.clear.cache(),C.set.pushable(),C.set.direction()}},attachEvents:function(t,i){var n=e(t);i=e.isFunction(C[i])?C[i]:C.toggle,n.length>0?(C.debug("Attaching sidebar events to element",t,i),n.on("click"+R,i)):C.error(_.notFound,t)},show:function(t){if(t=e.isFunction(t)?t:function(){},C.is.hidden()){if(C.refreshSidebars(),E.overlay&&(C.error(_.overlay),E.transition="overlay"),C.refresh(),C.othersActive())if(C.debug("Other sidebars currently visible"),E.exclusive){if("overlay"!=E.transition)return void C.hideOthers(C.show);C.hideOthers()}else E.transition="overlay";C.pushPage(function(){t.call(P),E.onShow.call(P)}),E.onChange.call(P),E.onVisible.call(P)}else C.debug("Sidebar is already visible")},hide:function(t){t=e.isFunction(t)?t:function(){},(C.is.visible()||C.is.animating())&&(C.debug("Hiding sidebar",t),C.refreshSidebars(),C.pullPage(function(){t.call(P),E.onHidden.call(P)}),E.onChange.call(P),E.onHide.call(P))},othersAnimating:function(){return L.not(O).filter("."+D.animating).length>0},othersVisible:function(){return L.not(O).filter("."+D.visible).length>0},othersActive:function(){return C.othersVisible()||C.othersAnimating()},hideOthers:function(e){var t=L.not(O).filter("."+D.visible),i=t.length,n=0;e=e||function(){},t.sidebar("hide",function(){n++,n==i&&e()})},toggle:function(){C.verbose("Determining toggled direction"),C.is.hidden()?C.show():C.hide()},pushPage:function(t){var i,n,a,o=C.get.transition(),r="overlay"===o||C.othersActive()?O:F;t=e.isFunction(t)?t:function(){},"scale down"==E.transition&&C.scrollToTop(),C.set.transition(o),C.repaint(),i=function(){C.bind.clickaway(),C.add.inlineCSS(),C.set.animating(),C.set.visible()},n=function(){C.set.dimmed()},a=function(e){e.target==r[0]&&(r.off(k+b,a),C.remove.animating(),C.bind.scrollLock(),t.call(P))},r.off(k+b),r.on(k+b,a),v(i),E.dimPage&&!C.othersVisible()&&v(n)},pullPage:function(t){var i,n,a=C.get.transition(),o="overlay"==a||C.othersActive()?O:F;t=e.isFunction(t)?t:function(){},C.verbose("Removing context push state",C.get.direction()),C.unbind.clickaway(),C.unbind.scrollLock(),i=function(){C.set.transition(a),C.set.animating(),C.remove.visible(),E.dimPage&&!C.othersVisible()&&F.removeClass(D.dimmed)},n=function(e){e.target==o[0]&&(o.off(k+b,n),C.remove.animating(),C.remove.transition(),C.remove.inlineCSS(),("scale down"==a||E.returnScroll&&C.is.mobile())&&C.scrollBack(),t.call(P))},o.off(k+b),o.on(k+b,n),v(i)},scrollToTop:function(){C.verbose("Scrolling to top of page to avoid animation issues"),T=e(t).scrollTop(),O.scrollTop(0),t.scrollTo(0,0)},scrollBack:function(){C.verbose("Scrolling back to original page position"),t.scrollTo(0,T)},clear:{cache:function(){C.verbose("Clearing cached dimensions"),C.cache={}}},set:{ios:function(){c.addClass(D.ios)},pushed:function(){A.addClass(D.pushed)},pushable:function(){A.addClass(D.pushable)},dimmed:function(){F.addClass(D.dimmed)},active:function(){O.addClass(D.active)},animating:function(){O.addClass(D.animating)},transition:function(e){e=e||C.get.transition(),O.addClass(e)},direction:function(e){e=e||C.get.direction(),O.addClass(D[e])},visible:function(){O.addClass(D.visible)},overlay:function(){O.addClass(D.overlay)}},remove:{inlineCSS:function(){C.debug("Removing inline css styles",r),r&&r.length>0&&r.remove()},ios:function(){c.removeClass(D.ios)},pushed:function(){A.removeClass(D.pushed)},pushable:function(){A.removeClass(D.pushable)},active:function(){O.removeClass(D.active)},animating:function(){O.removeClass(D.animating)},transition:function(e){e=e||C.get.transition(),O.removeClass(e)},direction:function(e){e=e||C.get.direction(),O.removeClass(D[e])},visible:function(){O.removeClass(D.visible)},overlay:function(){O.removeClass(D.overlay)}},get:{direction:function(){return O.hasClass(D.top)?D.top:O.hasClass(D.right)?D.right:O.hasClass(D.bottom)?D.bottom:D.left},transition:function(){var e,t=C.get.direction();return e=C.is.mobile()?"auto"==E.mobileTransition?E.defaultTransition.mobile[t]:E.mobileTransition:"auto"==E.transition?E.defaultTransition.computer[t]:E.transition,C.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=i.createElement("element"),a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in a)if(t.style[e]!==n)return a[e]}},is:{ie:function(){var e=!t.ActiveXObject&&"ActiveXObject"in t,i="ActiveXObject"in t;return e||i},ios:function(){var e=navigator.userAgent,t=e.match(S.ios),i=e.match(S.mobileChrome);return t&&!i?(C.verbose("Browser was found to be iOS",e),!0):!1},mobile:function(){var e=navigator.userAgent,t=e.match(S.mobile);return t?(C.verbose("Browser was found to be mobile",e),!0):(C.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!C.is.visible()},visible:function(){return O.hasClass(D.visible)},open:function(){return C.is.visible()},closed:function(){return C.is.hidden()},vertical:function(){return O.hasClass(D.top)},animating:function(){return A.hasClass(D.animating)},rtl:function(){return C.cache.rtl===n&&(C.cache.rtl="rtl"==O.css("direction")),C.cache.rtl}},setting:function(t,i){if(C.debug("Changing setting",t,i),e.isPlainObject(t))e.extend(!0,E,t);else{if(i===n)return E[t];E[t]=i}},internal:function(t,i){if(e.isPlainObject(t))e.extend(!0,C,t);else{if(i===n)return C[t];C[t]=i}},debug:function(){E.debug&&(E.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,E.name+":"),C.debug.apply(console,arguments)))},verbose:function(){E.verbose&&E.debug&&(E.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,E.name+":"),C.verbose.apply(console,arguments)))},error:function(){C.error=Function.prototype.bind.call(console.error,console,E.name+":"),C.error.apply(console,arguments)},performance:{log:function(e){var t,i,n;E.performance&&(t=(new Date).getTime(),n=h||t,i=t-n,h=t,p.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:P,"Execution Time":i})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var t=E.name+":",i=0;h=!1,clearTimeout(C.performance.timer),e.each(p,function(e,t){i+=t["Execution Time"]}),t+=" "+i+"ms",d&&(t+=" '"+d+"'"),(console.group!==n||console.table!==n)&&p.length>0&&(console.groupCollapsed(t),console.table?console.table(p):e.each(p,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),p=[]}},invoke:function(t,i,a){var r,s,l,c=K;return i=i||g,a=P||a,"string"==typeof t&&c!==n&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(i,a){var o=i!=r?a+t[i+1].charAt(0).toUpperCase()+t[i+1].slice(1):t;if(e.isPlainObject(c[o])&&i!=r)c=c[o];else{if(c[o]!==n)return s=c[o],!1;if(!e.isPlainObject(c[a])||i==r)return c[a]!==n?(s=c[a],!1):(C.error(_.method,t),!1);c=c[a]}})),e.isFunction(s)?l=s.apply(a,i):s!==n&&(l=s),e.isArray(o)?o.push(l):o!==n?o=[o,l]:l!==n&&(o=l),s}},f?(K===n&&C.initialize(),C.invoke(m)):(K!==n&&C.invoke("destroy"),C.initialize())}),o!==n?o:this},e.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document);