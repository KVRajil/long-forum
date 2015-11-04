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
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./widget"],e):e(jQuery)}(function(e){var t=!1;return e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){return!0===e.data(n.target,t.widgetName+".preventClickEvent")?(e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(n){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(n),this._mouseDownEvent=n;var i=this,o=1===n.which,r="string"==typeof this.options.cancel&&n.target.nodeName?e(n.target).closest(this.options.cancel).length:!1;return o&&!r&&this._mouseCapture(n)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(n)&&this._mouseDelayMet(n)&&(this._mouseStarted=this._mouseStart(n)!==!1,!this._mouseStarted)?(n.preventDefault(),!0):(!0===e.data(n.target,this.widgetName+".preventClickEvent")&&e.removeData(n.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),n.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(n){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,n.target===this._mouseDownEvent.target&&e.data(n.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(n)),t=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}),/*!
 * jQuery UI Slider 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)}(function(e){return e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,n,i=this.options,o=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),r="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",s=[];for(n=i.values&&i.values.length||1,o.length>n&&(o.slice(n).remove(),o=o.slice(0,n)),t=o.length;n>t;t++)s.push(r);this.handles=o.add(e(s.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,n="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),n="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(n+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,i,o,r,s,a,l,c,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(n),o=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(i-u.values(t));(o>n||o===n&&(t===u._lastChangedValue||u.values(t)===d.min))&&(o=n,r=e(this),s=t)}),a=this._start(t,s),a===!1?!1:(this._mouseSliding=!0,this._handleIndex=s,r.addClass("ui-state-active").focus(),l=r.offset(),c=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=c?{left:0,top:0}:{left:t.pageX-l.left-r.width()/2,top:t.pageY-l.top-r.height()/2-(parseInt(r.css("borderTopWidth"),10)||0)-(parseInt(r.css("borderBottomWidth"),10)||0)+(parseInt(r.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,s,i),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,i,o,r;return"horizontal"===this.orientation?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),i=n/t,i>1&&(i=1),0>i&&(i=0),"vertical"===this.orientation&&(i=1-i),o=this._valueMax()-this._valueMin(),r=this._valueMin()+i*o,this._trimAlignValue(r)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var i,o,r;this.options.values&&this.options.values.length?(i=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&n>i||1===t&&i>n)&&(n=i),n!==this.values(t)&&(o=this.values(),o[t]=n,r=this._trigger("slide",e,{handle:this.handles[t],value:n,values:o}),i=this.values(t?0:1),r!==!1&&this.values(t,n))):n!==this.value()&&(r=this._trigger("slide",e,{handle:this.handles[t],value:n}),r!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),void this._change(null,0)):this._value()},values:function(t,n){var i,o,r;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),void this._change(null,t);if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(i=this.options.values,o=arguments[0],r=0;r<i.length;r+=1)i[r]=this._trimAlignValue(o[r]),this._change(null,r);this._refreshValue()},_setOption:function(t,n){var i,o=0;switch("range"===t&&this.options.range===!0&&("min"===n?(this.options.value=this._values(0),this.options.values=null):"max"===n&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(o=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!n),this._super(t,n),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===n?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=0;o>i;i+=1)this._change(null,i);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,n,i;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(n=this.options.values.slice(),i=0;i<n.length;i+=1)n[i]=this._trimAlignValue(n[i]);return n}return[]},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,i=e-n;return 2*Math.abs(n)>=t&&(i+=n>0?t:-t),parseFloat(i.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),n=this.options.step,i=Math.floor(+(e-t).toFixed(this._precision())/n)*n;e=i+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=e.toString(),n=t.indexOf(".");return-1===n?0:t.length-n-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,n,i,o,r,s=this.options.range,a=this.options,l=this,c=this._animateOff?!1:a.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(i){n=(l.values(i)-l._valueMin())/(l._valueMax()-l._valueMin())*100,u["horizontal"===l.orientation?"left":"bottom"]=n+"%",e(this).stop(1,1)[c?"animate":"css"](u,a.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===i&&l.range.stop(1,1)[c?"animate":"css"]({left:n+"%"},a.animate),1===i&&l.range[c?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:a.animate})):(0===i&&l.range.stop(1,1)[c?"animate":"css"]({bottom:n+"%"},a.animate),1===i&&l.range[c?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:a.animate}))),t=n}):(i=this.value(),o=this._valueMin(),r=this._valueMax(),n=r!==o?(i-o)/(r-o)*100:0,u["horizontal"===this.orientation?"left":"bottom"]=n+"%",this.handle.stop(1,1)[c?"animate":"css"](u,a.animate),"min"===s&&"horizontal"===this.orientation&&this.range.stop(1,1)[c?"animate":"css"]({width:n+"%"},a.animate),"max"===s&&"horizontal"===this.orientation&&this.range[c?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:a.animate}),"min"===s&&"vertical"===this.orientation&&this.range.stop(1,1)[c?"animate":"css"]({height:n+"%"},a.animate),"max"===s&&"vertical"===this.orientation&&this.range[c?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:a.animate}))},_handleEvents:{keydown:function(t){var n,i,o,r,s=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),n=this._start(t,s),n===!1))return}switch(r=this.options.step,i=o=this.options.values&&this.options.values.length?this.values(s):this.value(),t.keyCode){case e.ui.keyCode.HOME:o=this._valueMin();break;case e.ui.keyCode.END:o=this._valueMax();break;case e.ui.keyCode.PAGE_UP:o=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:o=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;o=this._trimAlignValue(i+r);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;o=this._trimAlignValue(i-r)}this._slide(t,s,o)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}})});