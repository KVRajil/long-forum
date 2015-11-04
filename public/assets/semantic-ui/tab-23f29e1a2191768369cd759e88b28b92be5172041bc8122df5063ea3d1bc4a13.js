/*!
 * # Semantic UI - Tab
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,i,n){"use strict";e.fn.tab=function(a){var o,r=e(e.isFunction(this)?t:this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,h=[].slice.call(arguments,1),p=!1;return r.each(function(){var m,f,g,v,b,y,T=e.isPlainObject(a)?e.extend(!0,{},e.fn.tab.settings,a):e.extend({},e.fn.tab.settings),k=T.className,C=T.metadata,E=T.selector,w=T.error,D="."+T.namespace,I="module-"+T.namespace,S=e(this),_={},x=!0,R=0,O=this,A=S.data(I);b={initialize:function(){b.debug("Initializing tab menu item",S),b.fix.callbacks(),b.determineTabs(),b.debug("Determining tabs",T.context,f),T.auto&&b.set.auto(),b.bind.events(),T.history&&!p&&(b.initializeHistory(),p=!0),b.instantiate()},instantiate:function(){b.verbose("Storing instance of module",b),A=b,S.data(I,b)},destroy:function(){b.debug("Destroying tabs",S),S.removeData(I).off(D)},bind:{events:function(){e.isWindow(O)||(b.debug("Attaching tab activation events to element",S),S.on("click"+D,b.event.click))}},determineTabs:function(){var t;"parent"===T.context?(S.closest(E.ui).length>0?(t=S.closest(E.ui),b.verbose("Using closest UI element as parent",t)):t=S,m=t.parent(),b.verbose("Determined parent element for creating context",m)):T.context?(m=e(T.context),b.verbose("Using selector for tab context",T.context,m)):m=e("body"),T.childrenOnly?(f=m.children(E.tabs),b.debug("Searching tab context children for tabs",m,f)):(f=m.find(E.tabs),b.debug("Searching tab context for tabs",m,f))},fix:{callbacks:function(){e.isPlainObject(a)&&(a.onTabLoad||a.onTabInit)&&(a.onTabLoad&&(a.onLoad=a.onTabLoad,delete a.onTabLoad,b.error(w.legacyLoad,a.onLoad)),a.onTabInit&&(a.onFirstLoad=a.onTabInit,delete a.onTabInit,b.error(w.legacyInit,a.onFirstLoad)),T=e.extend(!0,{},e.fn.tab.settings,a))}},initializeHistory:function(){if(b.debug("Initializing page state"),e.address===n)return b.error(w.state),!1;if("state"==T.historyType){if(b.debug("Using HTML5 to manage state"),T.path===!1)return b.error(w.path),!1;e.address.history(!0).state(T.path)}e.address.bind("change",b.event.history.change)},event:{click:function(t){var i=e(this).data(C.tab);i!==n?(T.history?(b.verbose("Updating page state",t),e.address.value(i)):(b.verbose("Changing tab",t),b.changeTab(i)),t.preventDefault()):b.debug("No tab specified")},history:{change:function(t){var i=t.pathNames.join("/")||b.get.initialPath(),a=T.templates.determineTitle(i)||!1;b.performance.display(),b.debug("History change event",i,t),y=t,i!==n&&b.changeTab(i),a&&e.address.title(a)}}},refresh:function(){g&&(b.debug("Refreshing tab",g),b.changeTab(g))},cache:{read:function(e){return e!==n?_[e]:!1},add:function(e,t){e=e||g,b.debug("Adding cached content for",e),_[e]=t},remove:function(e){e=e||g,b.debug("Removing cached content for",e),delete _[e]}},set:{auto:function(){var t="string"==typeof T.path?T.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";b.verbose("Setting up automatic tab retrieval from server",t),e.isPlainObject(T.apiSettings)?T.apiSettings.url=t:T.apiSettings={url:t}},loading:function(e){var t=b.get.tabElement(e),i=t.hasClass(k.loading);i||(b.verbose("Setting loading state for",t),t.addClass(k.loading).siblings(f).removeClass(k.active+" "+k.loading),t.length>0&&T.onRequest.call(t[0],e))},state:function(t){e.address.value(t)}},changeTab:function(i){var n=t.history&&t.history.pushState,a=n&&T.ignoreFirstLoad&&x,o=T.auto||e.isPlainObject(T.apiSettings),r=o&&!a?b.utilities.pathToArray(i):b.get.defaultPathArray(i);i=b.utilities.arrayToPath(r),e.each(r,function(t,n){var s,l,c,u,d=r.slice(0,t+1),h=b.utilities.arrayToPath(d),p=b.is.tab(h),f=t+1==r.length,E=b.get.tabElement(h);if(b.verbose("Looking for tab",n),p){if(b.verbose("Tab was found",n),g=h,v=b.utilities.filterArray(r,d),f?u=!0:(l=r.slice(0,t+2),c=b.utilities.arrayToPath(l),u=!b.is.tab(c),u&&b.verbose("Tab parameters found",l)),u&&o)return a?(b.debug("Ignoring remote content on first tab load",h),x=!1,b.cache.add(i,E.html()),b.activate.all(h),T.onFirstLoad.call(E[0],h,v,y),T.onLoad.call(E[0],h,v,y)):(b.activate.navigation(h),b.fetch.content(h,i)),!1;b.debug("Opened local tab",h),b.activate.all(h),b.cache.read(h)||(b.cache.add(h,!0),b.debug("First time tab loaded calling tab init"),T.onFirstLoad.call(E[0],h,v,y)),T.onLoad.call(E[0],h,v,y)}else{if(-1!=i.search("/")||""===i)return b.error(w.missingTab,S,m,h),!1;if(s=e("#"+i+', a[name="'+i+'"]'),h=s.closest("[data-tab]").data(C.tab),E=b.get.tabElement(h),s&&s.length>0&&h)return b.debug("Anchor link used, opening parent tab",E,s),E.hasClass(k.active)||setTimeout(function(){b.scrollTo(s)},0),b.activate.all(h),b.cache.read(h)||(b.cache.add(h,!0),b.debug("First time tab loaded calling tab init"),T.onFirstLoad.call(E[0],h,v,y)),T.onLoad.call(E[0],h,v,y),!1}})},scrollTo:function(t){var n=t&&t.length>0?t.offset().top:!1;n!==!1&&(b.debug("Forcing scroll to an in-page link in a hidden tab",n,t),e(i).scrollTop(n))},update:{content:function(e,t,i){var a=b.get.tabElement(e),o=a[0];i=i!==n?i:T.evaluateScripts,i?(b.debug("Updating HTML and evaluating inline scripts",e,t),a.html(t)):(b.debug("Updating HTML",e,t),o.innerHTML=t)}},fetch:{content:function(t,i){var a,o,r=b.get.tabElement(t),s={dataType:"html",encodeParameters:!1,on:"now",cache:T.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){b.cache.add(i,e),b.update.content(t,e),t==g?(b.debug("Content loaded",t),b.activate.tab(t)):b.debug("Content loaded in background",t),T.onFirstLoad.call(r[0],t,v,y),T.onLoad.call(r[0],t,v,y)},urlData:{tab:i}},l=r.api("get request")||!1,c=l&&"pending"===l.state();i=i||t,o=b.cache.read(i),T.cache&&o?(b.activate.tab(t),b.debug("Adding cached content",i),"once"==T.evaluateScripts?b.update.content(t,o,!1):b.update.content(t,o),T.onLoad.call(r[0],t,v,y)):c?(b.set.loading(t),b.debug("Content is already loading",i)):e.api!==n?(a=e.extend(!0,{},T.apiSettings,s),b.debug("Retrieving remote content",i,a),b.set.loading(t),r.api(a)):b.error(w.api)}},activate:{all:function(e){b.activate.tab(e),b.activate.navigation(e)},tab:function(e){var t=b.get.tabElement(e),i=t.hasClass(k.active);b.verbose("Showing tab content for",t),i||(t.addClass(k.active).siblings(f).removeClass(k.active+" "+k.loading),t.length>0&&T.onVisible.call(t[0],e))},navigation:function(e){var t=b.get.navElement(e),i=t.hasClass(k.active);b.verbose("Activating tab navigation for",t,e),i||t.addClass(k.active).siblings(r).removeClass(k.active+" "+k.loading)}},deactivate:{all:function(){b.deactivate.navigation(),b.deactivate.tabs()},navigation:function(){r.removeClass(k.active)},tabs:function(){f.removeClass(k.active+" "+k.loading)}},is:{tab:function(e){return e!==n?b.get.tabElement(e).length>0:!1}},get:{initialPath:function(){return r.eq(0).data(C.tab)||f.eq(0).data(C.tab)},path:function(){return e.address.value()},defaultPathArray:function(e){return b.utilities.pathToArray(b.get.defaultPath(e))},defaultPath:function(e){var t=r.filter("[data-"+C.tab+'^="'+e+'/"]').eq(0),i=t.data(C.tab)||!1;if(i){if(b.debug("Found default tab",i),R<T.maxDepth)return R++,b.get.defaultPath(i);b.error(w.recursion)}else b.debug("No default tabs found for",e,f);return R=0,e},navElement:function(e){return e=e||g,r.filter("[data-"+C.tab+'="'+e+'"]')},tabElement:function(e){var t,i,n,a;return e=e||g,n=b.utilities.pathToArray(e),a=b.utilities.last(n),t=f.filter("[data-"+C.tab+'="'+e+'"]'),i=f.filter("[data-"+C.tab+'="'+a+'"]'),t.length>0?t:i},tab:function(){return g}},utilities:{filterArray:function(t,i){return e.grep(t,function(t){return-1==e.inArray(t,i)})},last:function(t){return e.isArray(t)?t[t.length-1]:!1},pathToArray:function(e){return e===n&&(e=g),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(t){return e.isArray(t)?t.join("/"):!1}},setting:function(t,i){if(b.debug("Changing setting",t,i),e.isPlainObject(t))e.extend(!0,T,t);else{if(i===n)return T[t];T[t]=i}},internal:function(t,i){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(i===n)return b[t];b[t]=i}},debug:function(){T.debug&&(T.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,T.name+":"),b.debug.apply(console,arguments)))},verbose:function(){T.verbose&&T.debug&&(T.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,T.name+":"),b.verbose.apply(console,arguments)))},error:function(){b.error=Function.prototype.bind.call(console.error,console,T.name+":"),b.error.apply(console,arguments)},performance:{log:function(e){var t,i,n;T.performance&&(t=(new Date).getTime(),n=l||t,i=t-n,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":i})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var t=T.name+":",i=0;l=!1,clearTimeout(b.performance.timer),e.each(c,function(e,t){i+=t["Execution Time"]}),t+=" "+i+"ms",s&&(t+=" '"+s+"'"),(console.group!==n||console.table!==n)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,i,a){var r,s,l,c=A;return i=i||h,a=O||a,"string"==typeof t&&c!==n&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(i,a){var o=i!=r?a+t[i+1].charAt(0).toUpperCase()+t[i+1].slice(1):t;if(e.isPlainObject(c[o])&&i!=r)c=c[o];else{if(c[o]!==n)return s=c[o],!1;if(!e.isPlainObject(c[a])||i==r)return c[a]!==n?(s=c[a],!1):(b.error(w.method,t),!1);c=c[a]}})),e.isFunction(s)?l=s.apply(a,i):s!==n&&(l=s),e.isArray(o)?o.push(l):o!==n?o=[o,l]:l!==n&&(o=l),s}},d?(A===n&&b.initialize(),b.invoke(u)):(A!==n&&A.invoke("destroy"),b.initialize())}),o!==n?o:this},e.tab=function(){e(t).tab.apply(this,arguments)},e.fn.tab.settings={name:"Tab",namespace:"tab",debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,alwaysRefresh:!1,cache:!0,ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,i){},onLoad:function(e,t,i){},onVisible:function(e,t,i){},onRequest:function(e,t,i){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document);