document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var form = document.getElementById('contact-form');
  var captchaA = document.getElementById('captcha-a');
  var captchaB = document.getElementById('captcha-b');
  var captchaAnswer = document.getElementById('captcha-answer');
  var captchaError = document.getElementById('captcha-error');

  if (form && captchaA && captchaB && captchaAnswer) {
    var newCaptcha = function () {
      var a = Math.floor(Math.random() * 8) + 1;
      var b = Math.floor(Math.random() * 8) + 1;
      captchaA.textContent = a;
      captchaB.textContent = b;
      form.dataset.captchaSum = String(a + b);
      captchaAnswer.value = '';
    };

    newCaptcha();

    form.addEventListener('submit', function (event) {
      var expected = parseInt(form.dataset.captchaSum, 10);
      var given = parseInt(captchaAnswer.value, 10);

      if (given !== expected) {
        event.preventDefault();
        if (captchaError) {
          captchaError.hidden = false;
        }
        captchaAnswer.focus();
        newCaptcha();
      } else if (captchaError) {
        captchaError.hidden = true;
      }
    });
  }
});
