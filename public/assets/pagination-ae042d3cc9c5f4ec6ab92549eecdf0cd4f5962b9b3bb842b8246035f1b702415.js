(function(){$(document).on("ready page:load",function(){$("#infinite-scrolling").size()>0&&$(window).on("scroll",function(){var e;e=$("#infinite-scrolling .next_page a").attr("href"),e&&$(window).scrollTop()>$(document).height()-$(window).height()-290&&($(".pagination").html('<div id="anim_load"><img src="/assets/103.GIF" alt="Loading..." title="Loading..." /></div>'),setTimeout(function(){return $.getScript(e,function(){})},2e3))})})}).call(this);