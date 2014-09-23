delete this.Module;

function MarkdownRenderer() {
  var callbacks = _malloc(26 * 4);
  var options = _malloc(5 * 4);
  _sdhtml_renderer(callbacks, options, 0);
  var flags = (1 << 0) | (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4) | (1 << 8);
  var renderer = _sd_markdown_new(flags, 16, callbacks, options);
  _free(callbacks);

  this['render'] = function(text) {
    var utf8CharacterArray = intArrayFromString(text);
    var utf8CText = allocate(utf8CharacterArray, 'i8', ALLOC_NORMAL);
    var buffer = _bufnew(1024);
    _sd_markdown_render(buffer, utf8CText, utf8CharacterArray.length, renderer);
    var utf8CResult = _bufcstr(buffer);
    var result = Pointer_stringify(utf8CResult);
    _bufrelease(buffer);
    return result;
  }

  this.destrory = function() {
    _sd_markdown_free(this.renderer);
    _free(this.options);
  }
}

this.MarkdownRenderer = MarkdownRenderer;
window['MarkdownRenderer'] = MarkdownRenderer;
