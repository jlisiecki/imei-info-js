(() => {
    const exec = (fontname, filename, selector) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) return;
        const font = new FontFace(fontname, `url(${filename})`, {
            style: 'normal'
        });
        font.load().then(() => {
            document.fonts.add(font);
            elements.forEach((p) => (p.style.fontFamily = fontname));
        });
    };
    const fonts = {
        akrobatregular: {
            selector:
                '.site-hero .form-control::placeholder, body, h1 span, h2.smaller, .tableh2, .table td.unlock span, .news h3, .news .likeh3, .comment .label, .phone h3, #service-result h3, .boldfont, #checkers .btn-outline, #readmore_btn a, #watchvideo a',
            filename: '/static/v7d953a4b/imei/fonts/Akrobat-Regular.woff2'
        },
        akrobatextralight: {
            selector:
                'ul.footer-nav a, h3, .likeh3, .step-box .num, .feature.unlock .txt, .feature.check .txt, .feature.blacklist .txt, .footer-nav li a, .copyrights, .lightfont, .samrescol',
            filename: '/static/v7d953a4b/imei/fonts/Akrobat-ExtraLight.woff2'
        },
        akrobatblack: {
            selector:
                '.btn, h1, .likeh1, h2, #drawer .registration a, .bold, .bold-pink, .big-bold, .big-bold-contact, .big-bold-error404, .table-featured, .table td.price, .table td.unlock, #blue-box a, .nogallery, #easybox, .step-box, .feature.blacklist .txt b, .footer .statnumber, #messagebox .msg, tr.highlight-1 td a, tr.highlight-2 td a, tr.highlight-2:hover td a, tr.highlight-3 td a, form.imei-redirect-form button, .bolderfont, .heavy, .pill1, .head-btn, .glossary-popover .popover-title',
            filename: '/static/v7d953a4b/imei/fonts/Akrobat-Black.woff2'
        },
        akrobatbold: {
            selector:
                '.pill2, .head-btn-bold, .bipill1, #basic-info .expand_btn, #basic-info #readmore_btn .btn-primary, .btn.btn-primary.bt760-btn',
            filename: '/static/v7d953a4b/imei/fonts/Akrobat-Bold.woff2'
        }
    };

    for (let fontname of Object.keys(fonts)) {
        exec(fontname, fonts[fontname].filename, fonts[fontname].selector);
    }
})();
