const IMEIValidator = require('./imei_validation.js');

(function () {
    const imeiForm = document.getElementsByClassName(
        'imei-form imei-visible'
    )[0];
    const imeiBtn = imeiForm.getElementsByClassName('imei-check-btn')[0];

    let submitCheck = undefined;

    const imeiInput = imeiForm.getElementsByClassName('imei-input')[0];
    const imeiError = imeiForm.getElementsByClassName('imei-error')[0];
    const imeiErrorVisibleCls = 'visible';

    const validate = function () {
        IMEIValidator.validateInput(imeiInput);

        if (imeiInput.validity.valid || !imeiInput.value) {
            // Hide error message if IMEI input valid or empty
            imeiError.classList.remove(imeiErrorVisibleCls);
        } else {
            // Show error message if IMEI input not empty and invalid
            imeiError.classList.add(imeiErrorVisibleCls);
        }
    };

    // Add event listener for input
    imeiInput.addEventListener('input', validate);

    const onSubmit = function (e) {
        validate();

        e.returnValue = imeiInput.validity.valid;
        return imeiInput.validity.valid;
    };

    // Add event listener for submit
    imeiForm.addEventListener('submit', onSubmit);

    // Run initial validation
    validate();
})();
