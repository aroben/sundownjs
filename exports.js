delete this.Module;

function MarkdownRenderer(settings) {
  var callbacks = _malloc(26 * 4);
  var options = _malloc(5 * 4);
  var flags = 0, extensions = 0;
  settings = settings || {};
  if(settings['filter_html']) flags |= 1<<0;
  if(settings['no_styles']) flags |= 1<<1;
  if(settings['no_images']) flags |= 1<<2;
  if(settings['no_links']) flags |= 1<<3;
  flags |= 1<<4; //expand tabs
  if(settings['safe_links_only']) flags |= 1<<5;
  if(settings['with_toc_data']) flags |= 1<<6;
  if(settings['hard_wrap']) flags |= 1<<7;
  if(settings['xhtml']) flags |= 1<<8;
  if(settings['escape_html']) flags |= 1<<9;
  if(settings['no_intra_emphasis']) extensions |= 1<<0;
  if(settings['tables']) extensions |= 1<<1;
  if(settings['fenced_code_blocks']) extensions |= 1<<2;
  if(settings['autolink']) extensions |= 1<<3;
  if(settings['strikethrough']) extensions |= 1<<4;
  if(settings['space_after_headers']) extensions |= 1<<6;
  if(settings['superscript']) extensions |= 1<<7;
  if(settings['lax_spacing']) extensions |= 1<<8;
  _sdhtml_renderer(callbacks, options, flags);
  var renderer = _sd_markdown_new(extensions, 16, callbacks, options);
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
