(function(){$("textarea.wmd-input").each(function(e,t){var n,i,o;return n=$(t).attr("id").split("wmd-input")[1],i=new Markdown.Converter,Markdown.Extra.init(i),o=new Markdown.Editor(i,n),o.run()})}).call(this);