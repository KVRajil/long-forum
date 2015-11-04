/*!
 * # Semantic UI - Site
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,i,n){e.site=e.fn.site=function(a){var o,r,s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),h=e.isPlainObject(a)?e.extend(!0,{},e.site.settings,a):e.extend({},e.site.settings),p=h.namespace,m=h.error,f="module-"+p,g=e(i),v=g,b=this,y=v.data(f);return o={initialize:function(){o.instantiate()},instantiate:function(){o.verbose("Storing instance of site",o),y=o,v.data(f,o)},normalize:function(){o.fix.console(),o.fix.requestAnimationFrame()},fix:{console:function(){o.debug("Normalizing window.console"),(console===n||console.log===n)&&(o.verbose("Console not available, normalizing events"),o.disable.console()),("undefined"==typeof console.group||"undefined"==typeof console.groupEnd||"undefined"==typeof console.groupCollapsed)&&(o.verbose("Console group not available, normalizing events"),t.console.group=function(){},t.console.groupEnd=function(){},t.console.groupCollapsed=function(){}),"undefined"==typeof console.markTimeline&&(o.verbose("Mark timeline not available, normalizing events"),t.console.markTimeline=function(){})},consoleClear:function(){o.debug("Disabling programmatic console clearing"),t.console.clear=function(){}},requestAnimationFrame:function(){o.debug("Normalizing requestAnimationFrame"),t.requestAnimationFrame===n&&(o.debug("RequestAnimationFrame not available, normailizing event"),t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(t){return e.fn[t]!==n&&e.fn[t].settings!==n},enabled:{modules:function(t){var i=[];return t=t||h.modules,e.each(t,function(e,t){o.moduleExists(t)&&i.push(t)}),i}},disabled:{modules:function(t){var i=[];return t=t||h.modules,e.each(t,function(e,t){o.moduleExists(t)||i.push(t)}),i}},change:{setting:function(t,i,a,r){a="string"==typeof a?"all"===a?h.modules:[a]:a||h.modules,r=r!==n?r:!0,e.each(a,function(n,a){var s,l=o.moduleExists(a)?e.fn[a].settings.namespace||!1:!0;o.moduleExists(a)&&(o.verbose("Changing default setting",t,i,a),e.fn[a].settings[t]=i,r&&l&&(s=e(":data(module-"+l+")"),s.length>0&&(o.verbose("Modifying existing settings",s),s[a]("setting",t,i))))})},settings:function(t,i,a){i="string"==typeof i?[i]:i||h.modules,a=a!==n?a:!0,e.each(i,function(i,n){var r;o.moduleExists(n)&&(o.verbose("Changing default setting",t,n),e.extend(!0,e.fn[n].settings,t),a&&p&&(r=e(":data(module-"+p+")"),r.length>0&&(o.verbose("Modifying existing settings",r),r[n]("setting",t))))})}},enable:{console:function(){o.console(!0)},debug:function(e,t){e=e||h.modules,o.debug("Enabling debug for modules",e),o.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||h.modules,o.debug("Enabling verbose debug for modules",e),o.change.setting("verbose",!0,e,t)}},disable:{console:function(){o.console(!1)},debug:function(e,t){e=e||h.modules,o.debug("Disabling debug for modules",e),o.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||h.modules,o.debug("Disabling verbose debug for modules",e),o.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(y.cache.console===n)return void o.error(m.console);o.debug("Restoring console function"),t.console=y.cache.console}else o.debug("Disabling console function"),y.cache.console=t.console,t.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){o.verbose("Destroying previous site for",v),v.removeData(f)},cache:{},setting:function(t,i){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(i===n)return h[t];h[t]=i}},internal:function(t,i){if(e.isPlainObject(t))e.extend(!0,o,t);else{if(i===n)return o[t];o[t]=i}},debug:function(){h.debug&&(h.performance?o.performance.log(arguments):(o.debug=Function.prototype.bind.call(console.info,console,h.name+":"),o.debug.apply(console,arguments)))},verbose:function(){h.verbose&&h.debug&&(h.performance?o.performance.log(arguments):(o.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),o.verbose.apply(console,arguments)))},error:function(){o.error=Function.prototype.bind.call(console.error,console,h.name+":"),o.error.apply(console,arguments)},performance:{log:function(e){var t,i,n;h.performance&&(t=(new Date).getTime(),n=s||t,i=t-n,s=t,l.push({Element:b,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":i})),clearTimeout(o.performance.timer),o.performance.timer=setTimeout(o.performance.display,500)},display:function(){var t=h.name+":",i=0;s=!1,clearTimeout(o.performance.timer),e.each(l,function(e,t){i+=t["Execution Time"]}),t+=" "+i+"ms",(console.group!==n||console.table!==n)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,i,a){var s,l,c,u=y;return i=i||d,a=b||a,"string"==typeof t&&u!==n&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(i,a){var r=i!=s?a+t[i+1].charAt(0).toUpperCase()+t[i+1].slice(1):t;if(e.isPlainObject(u[r])&&i!=s)u=u[r];else{if(u[r]!==n)return l=u[r],!1;if(!e.isPlainObject(u[a])||i==s)return u[a]!==n?(l=u[a],!1):(o.error(m.method,t),!1);u=u[a]}})),e.isFunction(l)?c=l.apply(a,i):l!==n&&(c=l),e.isArray(r)?r.push(c):r!==n?r=[r,c]:c!==n&&(r=c),l}},u?(y===n&&o.initialize(),o.invoke(c)):(y!==n&&o.destroy(),o.initialize()),r!==n?r:this},e.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])}})}(jQuery,window,document);