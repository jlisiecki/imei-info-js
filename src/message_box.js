const $ = require('jquery');

$('body').on('click', '#messagebox .msg-cancel', function () {
    $(this).closest('div.msg').remove();
});
