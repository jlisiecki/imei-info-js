$(function () {
    window.dataLayer = window.dataLayer || [];
    var adBlockEnabled = false;
    var testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    window.setTimeout(function () {
        if (testAd.offsetHeight === 0) {
            adBlockEnabled = true;
        }
        testAd.remove();
        if (adBlockEnabled) {
            dataLayer.push({
                event: 'Adblock',
                eventCategory: 'Ad Setting',
                eventAction: 'Adblock',
                eventLabel: 'Enabled'
            });
        }
    }, 100);
});
