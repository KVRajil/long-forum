!function(e){e.fn.initial=function(t){var n=["#1abc9c","#16a085","#f1c40f","#f39c12","#2ecc71","#27ae60","#e67e22","#d35400","#3498db","#2980b9","#e74c3c","#c0392b","#9b59b6","#8e44ad","#bdc3c7","#34495e","#2c3e50","#95a5a6","#7f8c8d","#ec87bf","#d870ad","#f69785","#9ba37e","#b49255","#b49255","#a94136"];return this.each(function(){var i=e(this),o=e.extend({name:"Name",seed:0,charCount:1,textColor:"#ffffff",height:100,width:100,fontSize:60,fontWeight:400,fontFamily:"HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif",radius:0},t);o=e.extend(o,i.data());var a=o.name.substr(0,o.charCount).toUpperCase(),r=e('<text text-anchor="middle"></text>').attr({y:"50%",x:"50%",dy:"0.35em","pointer-events":"auto",fill:o.textColor,"font-family":o.fontFamily}).html(a).css({"font-weight":o.fontWeight,"font-size":o.fontSize+"px"}),s=Math.floor((a.charCodeAt(0)+o.seed)%n.length),l=e("<svg></svg>").attr({xmlns:"http://www.w3.org/2000/svg","pointer-events":"none",width:o.width,height:o.height}).css({"background-color":n[s],width:o.width+"px",height:o.height+"px","border-radius":o.radius+"px","-moz-border-radius":o.radius+"px"});l.append(r);var c=window.btoa(unescape(encodeURIComponent(e("<div>").append(l.clone()).html())));i.attr("src","data:image/svg+xml;base64,"+c)})}}(jQuery);