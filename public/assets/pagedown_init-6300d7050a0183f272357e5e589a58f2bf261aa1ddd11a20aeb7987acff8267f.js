(function() {
  $('textarea.wmd-input').each(function(i, input) {
    var attr, converter, editor;
    attr = $(input).attr('id').split('wmd-input')[1];
    converter = new Markdown.Converter();
    Markdown.Extra.init(converter);
    editor = new Markdown.Editor(converter, attr);
    return editor.run();
  });

}).call(this);
