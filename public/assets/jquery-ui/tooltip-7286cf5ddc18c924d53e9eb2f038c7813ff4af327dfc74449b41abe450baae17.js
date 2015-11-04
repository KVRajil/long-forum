/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,i){var o,r,s,a=t.nodeName.toLowerCase();return"area"===a?(o=t.parentNode,r=o.name,t.href&&r&&"map"===o.nodeName.toLowerCase()?(s=e("img[usemap='#"+r+"']")[0],!!s&&n(s)):!1):(/^(input|select|textarea|button|object)$/.test(a)?!t.disabled:"a"===a?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var n=this.css("position"),i="absolute"===n,o=t?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var t=e(this);return i&&"static"===t.css("position")?!1:o.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&r.length?r:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])},focusable:function(n){return t(n,!isNaN(e.attr(n,"tabindex")))},tabbable:function(n){var i=e.attr(n,"tabindex"),o=isNaN(i);return(o||i>=0)&&t(n,!o)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,n){function i(t,n,i,r){return e.each(o,function(){n-=parseFloat(e.css(t,"padding"+this))||0,i&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),r&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var o="Width"===n?["Left","Right"]:["Top","Bottom"],r=n.toLowerCase(),s={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(t){return void 0===t?s["inner"+n].call(this):this.each(function(){e(this).css(r,i(this,t)+"px")})},e.fn["outer"+n]=function(t,o){return"number"!=typeof t?s["outer"+n].call(this,t):this.each(function(){e(this).css(r,i(this,t,!0,o)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(n,i){return"number"==typeof n?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),i&&i.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var n,i,o=e(this[0]);o.length&&o[0]!==document;){if(n=o.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(i=parseInt(o.css("zIndex"),10),!isNaN(i)&&0!==i))return i;o=o.parent()}return 0}}),e.ui.plugin={add:function(t,n,i){var o,r=e.ui[t].prototype;for(o in i)r.plugins[o]=r.plugins[o]||[],r.plugins[o].push([n,i[o]])},call:function(e,t,n,i){var o,r=e.plugins[t];if(r&&(i||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(o=0;o<r.length;o++)e.options[r[o][0]]&&r[o][1].apply(e.element,n)}}}),/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var i,o,r;for(r=0;null!=(o=n[r]);r++)try{i=e._data(o,"events"),i&&i.remove&&e(o).triggerHandler("remove")}catch(s){}t(n)}}(e.cleanData),e.widget=function(t,n,i){var o,r,s,a,l={},c=t.split(".")[0];return t=t.split(".")[1],o=c+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][o.toLowerCase()]=function(t){return!!e.data(t,o)},e[c]=e[c]||{},r=e[c][t],s=e[c][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new s(e,t)},e.extend(s,r,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),a=new n,a.options=e.widget.extend({},a.options),e.each(i,function(t,i){return e.isFunction(i)?void(l[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},o=function(e){return n.prototype[t].apply(this,e)};return function(){var t,n=this._super,r=this._superApply;return this._super=e,this._superApply=o,t=i.apply(this,arguments),this._super=n,this._superApply=r,t}}()):void(l[t]=i)}),s.prototype=e.widget.extend(a,{widgetEventPrefix:r?a.widgetEventPrefix||t:t},l,{constructor:s,namespace:c,widgetName:t,widgetFullName:o}),r?(e.each(r._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,s,n._proto)}),delete r._childConstructors):n._childConstructors.push(s),e.widget.bridge(t,s),s},e.widget.extend=function(t){for(var i,o,r=n.call(arguments,1),s=0,a=r.length;a>s;s++)for(i in r[s])o=r[s][i],r[s].hasOwnProperty(i)&&void 0!==o&&(e.isPlainObject(o)?t[i]=e.isPlainObject(t[i])?e.widget.extend({},t[i],o):e.widget.extend({},o):t[i]=o);return t},e.widget.bridge=function(t,i){var o=i.prototype.widgetFullName||t;e.fn[t]=function(r){var s="string"==typeof r,a=n.call(arguments,1),l=this;return s?this.each(function(){var n,i=e.data(this,o);return"instance"===r?(l=i,!1):i?e.isFunction(i[r])&&"_"!==r.charAt(0)?(n=i[r].apply(i,a),n!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+r+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+r+"'")}):(a.length&&(r=e.widget.extend.apply(null,[r].concat(a))),this.each(function(){var t=e.data(this,o);t?(t.option(r||{}),t._init&&t._init()):e.data(this,o,new i(r,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i,o,r,s=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(s={},i=t.split("."),t=i.shift(),i.length){for(o=s[t]=e.widget.extend({},this.options[t]),r=0;r<i.length-1;r++)o[i[r]]=o[i[r]]||{},o=o[i[r]];if(t=i.pop(),1===arguments.length)return void 0===o[t]?null:o[t];o[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=n}return this._setOptions(s),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,i){var o,r=this;"boolean"!=typeof t&&(i=n,n=t,t=!1),i?(n=o=e(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,o=this.widget()),e.each(i,function(i,s){function a(){return t||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof s?r[s]:s).apply(r,arguments):void 0}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=i.match(/^([\w:-]*)\s*(.*)$/),c=l[1]+r.eventNamespace,u=l[2];u?o.delegate(u,c,a):n.bind(c,a)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return("string"==typeof e?i[e]:e).apply(i,arguments)}var i=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,i){var o,r,s=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],r=n.originalEvent)for(o in r)o in n||(n[o]=r[o]);return this.element.trigger(n,i),!(e.isFunction(s)&&s.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,o,r){"string"==typeof o&&(o={effect:o});var s,a=o?o===!0||"number"==typeof o?n:o.effect||n:t;o=o||{},"number"==typeof o&&(o={duration:o}),s=!e.isEmptyObject(o),o.complete=r,o.delay&&i.delay(o.delay),s&&e.effects&&e.effects.effect[a]?i[t](o):a!==t&&i[a]?i[a](o.duration,o.easing,r):i.queue(function(n){e(this)[t](),r&&r.call(i[0]),n()})}}),e.widget}),/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){return function(){function t(e,t,n){return[parseFloat(e[0])*(f.test(e[0])?t/100:1),parseFloat(e[1])*(f.test(e[1])?n/100:1)]}function n(t,n){return parseInt(e.css(t,n),10)||0}function i(t){var n=t[0];return 9===n.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var o,r,s=Math.max,a=Math.abs,l=Math.round,c=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,f=/%$/,p=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==o)return o;var t,n,i=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=i.children()[0];return e("body").append(i),t=r.offsetWidth,i.css("overflow","scroll"),n=r.offsetWidth,t===n&&(n=i[0].clientWidth),i.remove(),o=t-n},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),o="scroll"===n||"auto"===n&&t.width<t.element[0].scrollWidth,r="scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight;return{width:r?e.position.scrollbarWidth():0,height:o?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),i=e.isWindow(n[0]),o=!!n[0]&&9===n[0].nodeType;return{element:n,isWindow:i,isDocument:o,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:i||o?n.width():n.outerWidth(),height:i||o?n.height():n.outerHeight()}}},e.fn.position=function(o){if(!o||!o.of)return p.apply(this,arguments);o=e.extend({},o);var f,m,g,v,b,y,T=e(o.of),E=e.position.getWithinInfo(o.within),C=e.position.getScrollInfo(E),D=(o.collision||"flip").split(" "),_={};return y=i(T),T[0].preventDefault&&(o.at="left top"),m=y.width,g=y.height,v=y.offset,b=e.extend({},v),e.each(["my","at"],function(){var e,t,n=(o[this]||"").split(" ");1===n.length&&(n=c.test(n[0])?n.concat(["center"]):u.test(n[0])?["center"].concat(n):["center","center"]),n[0]=c.test(n[0])?n[0]:"center",n[1]=u.test(n[1])?n[1]:"center",e=d.exec(n[0]),t=d.exec(n[1]),_[this]=[e?e[0]:0,t?t[0]:0],o[this]=[h.exec(n[0])[0],h.exec(n[1])[0]]}),1===D.length&&(D[1]=D[0]),"right"===o.at[0]?b.left+=m:"center"===o.at[0]&&(b.left+=m/2),"bottom"===o.at[1]?b.top+=g:"center"===o.at[1]&&(b.top+=g/2),f=t(_.at,m,g),b.left+=f[0],b.top+=f[1],this.each(function(){var i,c,u=e(this),d=u.outerWidth(),h=u.outerHeight(),p=n(this,"marginLeft"),y=n(this,"marginTop"),I=d+p+n(this,"marginRight")+C.width,O=h+y+n(this,"marginBottom")+C.height,w=e.extend({},b),x=t(_.my,u.outerWidth(),u.outerHeight());"right"===o.my[0]?w.left-=d:"center"===o.my[0]&&(w.left-=d/2),"bottom"===o.my[1]?w.top-=h:"center"===o.my[1]&&(w.top-=h/2),w.left+=x[0],w.top+=x[1],r||(w.left=l(w.left),w.top=l(w.top)),i={marginLeft:p,marginTop:y},e.each(["left","top"],function(t,n){e.ui.position[D[t]]&&e.ui.position[D[t]][n](w,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:h,collisionPosition:i,collisionWidth:I,collisionHeight:O,offset:[f[0]+x[0],f[1]+x[1]],my:o.my,at:o.at,within:E,elem:u})}),o.using&&(c=function(e){var t=v.left-w.left,n=t+m-d,i=v.top-w.top,r=i+g-h,l={target:{element:T,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:w.left,top:w.top,width:d,height:h},horizontal:0>n?"left":t>0?"right":"center",vertical:0>r?"top":i>0?"bottom":"middle"};d>m&&a(t+n)<m&&(l.horizontal="center"),h>g&&a(i+r)<g&&(l.vertical="middle"),s(a(t),a(n))>s(a(i),a(r))?l.important="horizontal":l.important="vertical",o.using.call(this,e,l)}),u.offset(e.extend(w,{using:c}))})},e.ui.position={fit:{left:function(e,t){var n,i=t.within,o=i.isWindow?i.scrollLeft:i.offset.left,r=i.width,a=e.left-t.collisionPosition.marginLeft,l=o-a,c=a+t.collisionWidth-r-o;t.collisionWidth>r?l>0&&0>=c?(n=e.left+l+t.collisionWidth-r-o,e.left+=l-n):c>0&&0>=l?e.left=o:l>c?e.left=o+r-t.collisionWidth:e.left=o:l>0?e.left+=l:c>0?e.left-=c:e.left=s(e.left-a,e.left)},top:function(e,t){var n,i=t.within,o=i.isWindow?i.scrollTop:i.offset.top,r=t.within.height,a=e.top-t.collisionPosition.marginTop,l=o-a,c=a+t.collisionHeight-r-o;t.collisionHeight>r?l>0&&0>=c?(n=e.top+l+t.collisionHeight-r-o,e.top+=l-n):c>0&&0>=l?e.top=o:l>c?e.top=o+r-t.collisionHeight:e.top=o:l>0?e.top+=l:c>0?e.top-=c:e.top=s(e.top-a,e.top)}},flip:{left:function(e,t){var n,i,o=t.within,r=o.offset.left+o.scrollLeft,s=o.width,l=o.isWindow?o.scrollLeft:o.offset.left,c=e.left-t.collisionPosition.marginLeft,u=c-l,d=c+t.collisionWidth-s-l,h="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,f="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,p=-2*t.offset[0];0>u?(n=e.left+h+f+p+t.collisionWidth-s-r,(0>n||n<a(u))&&(e.left+=h+f+p)):d>0&&(i=e.left-t.collisionPosition.marginLeft+h+f+p-l,(i>0||a(i)<d)&&(e.left+=h+f+p))},top:function(e,t){var n,i,o=t.within,r=o.offset.top+o.scrollTop,s=o.height,l=o.isWindow?o.scrollTop:o.offset.top,c=e.top-t.collisionPosition.marginTop,u=c-l,d=c+t.collisionHeight-s-l,h="top"===t.my[1],f=h?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,p="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(i=e.top+f+p+m+t.collisionHeight-s-r,(0>i||i<a(u))&&(e.top+=f+p+m)):d>0&&(n=e.top-t.collisionPosition.marginTop+f+p+m-l,(n>0||a(n)<d)&&(e.top+=f+p+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,i,o,s,a=document.getElementsByTagName("body")[0],l=document.createElement("div");t=document.createElement(a?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&e.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in i)t.style[s]=i[s];t.appendChild(l),n=a||document.documentElement,n.insertBefore(t,n.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",o=e(l).offset().left,r=o>10&&11>o,t.innerHTML="",n.removeChild(t)}()}(),e.ui.position}),/*!
 * jQuery UI Tooltip 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position"],e):e(jQuery)}(function(e){return e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,n){var i=(t.attr("aria-describedby")||"").split(/\s+/);i.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(i.join(" ")))},_removeDescribedBy:function(t){var n=t.data("ui-tooltip-id"),i=(t.attr("aria-describedby")||"").split(/\s+/),o=e.inArray(n,i);-1!==o&&i.splice(o,1),t.removeData("ui-tooltip-id"),i=e.trim(i.join(" ")),i?t.attr("aria-describedby",i):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,n){var i=this;return"disabled"===t?(this[n?"_disable":"_enable"](),void(this.options[t]=n)):(this._super(t,n),void("content"===t&&e.each(this.tooltips,function(e,t){i._updateContent(t.element)})))},_disable:function(){var t=this;e.each(this.tooltips,function(n,i){var o=e.Event("blur");o.target=o.currentTarget=i.element[0],t.close(o,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,i=e(t?t.target:this.element).closest(this.options.items);i.length&&!i.data("ui-tooltip-id")&&(i.attr("title")&&i.data("ui-tooltip-title",i.attr("title")),i.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&i.parents().each(function(){var t,i=e(this);i.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,n.close(t,!0)),i.attr("title")&&(i.uniqueId(),n.parents[this.id]={element:this,title:i.attr("title")},i.attr("title",""))}),this._registerCloseHandlers(t,i),this._updateContent(i,t))},_updateContent:function(e,t){var n,i=this.options.content,o=this,r=t?t.type:null;return"string"==typeof i?this._open(t,e,i):(n=i.call(e[0],function(n){o._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=r),this._open(t,e,n))})}),void(n&&this._open(t,e,n)))},_open:function(t,n,i){function o(e){c.of=e,s.is(":hidden")||s.position(c)}var r,s,a,l,c=e.extend({},this.options.position);if(i){if(r=this._find(n))return void r.tooltip.find(".ui-tooltip-content").html(i);n.is("[title]")&&(t&&"mouseover"===t.type?n.attr("title",""):n.removeAttr("title")),r=this._tooltip(n),s=r.tooltip,this._addDescribedBy(n,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.liveRegion.children().hide(),i.clone?(l=i.clone(),l.removeAttr("id").find("[id]").removeAttr("id")):l=i,e("<div>").html(l).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:o}),o(t)):s.position(e.extend({of:n},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(a=this.delayedShow=setInterval(function(){s.is(":visible")&&(o(c.of),clearInterval(a))},e.fx.interval)),this._trigger("open",t,{tooltip:s})}},_registerCloseHandlers:function(t,n){var i={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var i=e.Event(t);i.currentTarget=n[0],this.close(i,!0)}}};n[0]!==this.element[0]&&(i.remove=function(){this._removeTooltip(this._find(n).tooltip)}),t&&"mouseover"!==t.type||(i.mouseleave="close"),t&&"focusin"!==t.type||(i.focusout="close"),this._on(!0,n,i)},close:function(t){var n,i=this,o=e(t?t.currentTarget:this.element),r=this._find(o);return r?(n=r.tooltip,void(r.closing||(clearInterval(this.delayedShow),o.data("ui-tooltip-title")&&!o.attr("title")&&o.attr("title",o.data("ui-tooltip-title")),this._removeDescribedBy(o),r.hiding=!0,n.stop(!0),this._hide(n,this.options.hide,function(){i._removeTooltip(e(this))}),o.removeData("ui-tooltip-open"),this._off(o,"mouseleave focusout keyup"),o[0]!==this.element[0]&&this._off(o,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,n){e(n.element).attr("title",n.title),delete i.parents[t]}),r.closing=!0,this._trigger("close",t,{tooltip:n}),r.hiding||(r.closing=!1)))):void o.removeData("ui-tooltip-open")},_tooltip:function(t){var n=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),i=n.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]={element:t,tooltip:n}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,i){var o=e.Event("blur"),r=i.element;o.target=o.currentTarget=r[0],t.close(o,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title")||r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});