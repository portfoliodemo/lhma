/* Custom Captchas */

/* Okotoks Captcha */
document.getElementById('okotoks-contact-form').addEventListener('submit', function(event) {
    const okotoksCaptchaAnswer = document.getElementById('okotoks-captcha').value.toLowerCase();
    if (okotoksCaptchaAnswer !== 'lhma') {
        alert('Verification answer is incorrect. Please enter LHMA to verify your request. Thank you! - LHMA');
        event.preventDefault();
    }
});

/* Calgary Captcha */
document.getElementById('calgary-contact-form').addEventListener('submit', function(event) {
    const calgaryCaptchaAnswer = document.getElementById('calgary-captcha').value.toLowerCase();
    if (calgaryCaptchaAnswer !== 'lhma') {
        alert('Verification answer is incorrect. Please enter LHMA to verify your request. Thank you! - LHMA');
        event.preventDefault();
    }
});