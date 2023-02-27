/**
 * Document ready event
 */
$(function () {
    fetch(chrome.runtime.getURL('../data.json'))
        .then((response) => response.json())
        .then((json) => injectFormData(json))
        .then(() => focusCaptchaField());
});

/**
 * Injects form data
 */
function injectFormData(data) {

    // Last Name:
    $("input#appointment_newAppointmentForm_lastname").val(data.last_name);

    // First Name:
    $("input#appointment_newAppointmentForm_firstname").val(data.first_name);

    // Email:
    $("input#appointment_newAppointmentForm_email").val(data.email);

    // Repeat Email:
    $("input#appointment_newAppointmentForm_emailrepeat").val(data.email);

    // Passport number:
    $("input#appointment_newAppointmentForm_fields_0__content").val(data.passport_number);

    // Citizenship:
    $("select#appointment_newAppointmentForm_fields_1__content").val(data.citizenship);

    // Date of collection of fingerprints:
    $("input#fields2content").val(data.fingerprint_collection_date);
}

/**
 * Focuses the captcha field
 */
function focusCaptchaField() {

    // Captcha:
    $("input#appointment_newAppointmentForm_captchaText").focus();
}