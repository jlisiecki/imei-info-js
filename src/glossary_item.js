// Initialization script for glossary_item template tag (popovers)
// Requires: Bootstrap3, jQuery

$(function () {
  // Use custom popover template to provide glossary-popover class
  const glossaryPopoverTemplate = (
    '<div class="popover glossary-popover" role="tooltip">' +
    '<div class="arrow"></div><h3 class="popover-title"></h3>' +
    '<div class="popover-content"></div></div>'
  )
  const glossaryPopoverParams = {
    'container': 'body',
    'delay': 200,
    'html': true,
    'placement': 'right',
    'template': glossaryPopoverTemplate,
    'trigger': 'hover',
  };

  // Initialize Bootstrap popovers for glossary items (from template tags)
  $('.glossary-link[data-toggle="popover"]').popover(glossaryPopoverParams);
  $('.glossary-icon[data-toggle="popover"]').popover(
    Object.assign({}, glossaryPopoverParams, {'trigger': 'focus'})
  );
});
