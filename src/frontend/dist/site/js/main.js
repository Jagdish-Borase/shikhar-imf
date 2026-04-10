/* ===== GLOBAL HELPERS (outside ready, accessible everywhere) ===== */
function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function isPhone(v) { return /^[6-9]\d{9}$/.test(v.replace(/[\s\-\+]/g, '')); }
function showError($f, $m, msg) { $f.addClass('error').removeClass('success'); $m.text(msg).addClass('show'); }
function clearError($f, $m) { $f.removeClass('error').addClass('success'); $m.removeClass('show'); }
function validateField($field) {
  var $group = $field.closest('.form-group');
  var $msg = $group.find('.error-msg').first();
  var val = $field.val().trim();
  var type = $field.attr('type') || $field[0].tagName.toLowerCase();
  var required = $field.prop('required');
  if (required && !val) { showError($field, $msg, 'This field is required.'); return false; }
  if (type === 'email' && val && !isEmail(val)) { showError($field, $msg, 'Please enter a valid email address.'); return false; }
  if ($field.hasClass('phone-field') && val && !isPhone(val)) { showError($field, $msg, 'Please enter a valid 10-digit mobile number.'); return false; }
  clearError($field, $msg);
  return true;
}

/* =====================================================================
   LEAD GEN POPUP CONFIGURATION — window.LeadPopupConfig
   =====================================================================
   SETTINGS (edit these to control popup behaviour):

   mode          : Controls WHEN the popup is shown. Options:
                   'always'  → Show on EVERY page load, ignores storage.
                               Best for testing/demo. Reload = popup appears.
                   'session' → Show ONCE per browser session (tab lifetime).
                               Resets when user closes the tab/browser.
                               Uses sessionStorage key: shikhar_lead_popup_shown
                               To reset manually: DevTools > Application > Session Storage
                               → delete the key 'shikhar_lead_popup_shown'.
                   'once'    → Show only ONCE EVER in that browser.
                               Uses localStorage key: shikhar_lead_popup_shown
                               To reset: DevTools > Application > Local Storage
                               → delete the key 'shikhar_lead_popup_shown'.

   delaySeconds  : Seconds to wait before popup appears after page load.
                   Default: 2.5 (2500ms). Set to 0 to show immediately.

   HOW TO TEST / CONFIGURE:
   ─────────────────────────
   * See popup on EVERY reload (demo/testing): mode: 'always', delaySeconds: 0
   * Session-based (default):                  mode: 'session'
   * One-time ever:                            mode: 'once'
   * Show immediately:                         delaySeconds: 0

   OVERRIDE PER-PAGE: Add BEFORE the main.js <script> tag on any page:
   <script>
     window.LeadPopupConfig = { mode: 'always', delaySeconds: 0 };
   </script>
   ===================================================================== */
window.LeadPopupConfig = {
  mode        : 'session',   // 'always' | 'session' | 'once'
  delaySeconds: 2.5          // seconds before popup appears (0 = instant)
};

/* ===== TEAM MEMBER DATA ===== */
var teamData = {
  laxman: {
    name: 'Laxman Ghube', role: 'MD & CEO', initials: 'LG',
    photo: 'https://shikharimf.com/assets/team/laxman-ghube.jpg',
    bio: 'Laxman Ghube is the founder and CEO of Shikhar IMF Pvt. Ltd. with over 18 years of deep expertise in the Indian insurance industry. A visionary leader who transformed Shikhar IMF into one of Pune\'s most trusted IRDAI-approved Insurance Marketing Firms, serving thousands of clients and empowering a wide network of advisors across Maharashtra and beyond.',
    expertise: ['Life & Health Insurance', 'Business Strategy', 'IRDAI Compliance', 'Financial Planning', 'Advisor Development', 'Risk Management'],
    achievements: ['Founded Shikhar IMF and led it to 50,000+ client base', 'Established partnerships with 20+ leading Indian insurers', 'IRDAI certified Insurance Marketing professional', 'Built a nationwide advisor network across 10+ states'],
    socials: [
      { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/laxman-ghube-0aa80161/', label: 'LinkedIn' },
      { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/laxmanghube', label: 'Facebook' },
      { icon: 'fab fa-instagram', url: 'https://www.instagram.com/ghubelaxman', label: 'Instagram' }
    ]
  },
  kalyan: {
    name: 'Kalyan Goshegaonkar', role: 'Co-Founder', initials: 'KG',
    photo: 'https://shikharimf.com/assets/team/kalyan-goshegaonkar.jpg',
    bio: 'Kalyan Goshegaonkar is a Co-Founder at Shikhar IMF with a strong background in insurance distribution and customer relationship management. He plays a pivotal role in advisor training and business development, ensuring advisors receive world-class support and tools to succeed.',
    expertise: ['Advisor Training', 'Business Development', 'Customer Relations', 'Insurance Distribution', 'Sales Strategy'],
    achievements: ['Designed the advisor onboarding framework at Shikhar IMF', 'Trained 500+ insurance advisors across Maharashtra', 'Specialist in health and life insurance product advisory', 'Key contributor to the company\'s digital sales transformation'],
    socials: [
      { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/kalyan.goshegaonkar.3', label: 'Facebook' },
      { icon: 'fab fa-instagram', url: 'https://www.instagram.com/kalyan.goshegaonkar', label: 'Instagram' }
    ]
  },
  rajesh: {
    name: 'Rajesh Nair', role: 'Co-Founder', initials: 'RN',
    photo: 'https://shikharimf.com/assets/team/rajesh-nair.jpg',
    bio: 'Rajesh Nair is a Co-Founder of Shikhar IMF with extensive expertise in financial advisory and motor insurance. He leads the operations and technology team, ensuring clients get a seamless digital experience from quote to claim settlement.',
    expertise: ['Motor Insurance', 'Operations Management', 'Financial Advisory', 'Technology & CRM', 'Claims Processing'],
    achievements: ['Streamlined the digital quote comparison system', 'Oversees 3,000+ network garage partnerships for motor claims', 'Expert in commercial and vehicle insurance products', 'Led Shikhar IMF\'s technology and CRM platform integration'],
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn' },
      { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' }
    ]
  },
  rashmi: {
    name: 'Rashmi Vaidya', role: 'Co-Founder', initials: 'RV',
    photo: 'https://shikharimf.com/assets/team/rashmi-vaidya.jpg',
    bio: 'Rashmi Vaidya is a Co-Founder at Shikhar IMF specializing in health and life insurance advisory for families and senior citizens. She champions the company\'s customer-first philosophy and heads the client experience division, ensuring every client receives personalized, empathetic service.',
    expertise: ['Health Insurance', 'Life Insurance', 'Client Experience', 'Family Financial Planning', 'Senior Citizen Plans'],
    achievements: ['Pioneered the family floater insurance advisory service', 'Built Shikhar IMF\'s multilingual support framework', 'Expert in senior citizen and critical illness plans', 'Instrumental in achieving 99% claim settlement rate'],
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn' },
      { icon: 'fab fa-instagram', url: '#', label: 'Instagram' }
    ]
  },
  pralhad: {
    name: 'Pralhad Thutte', role: 'Co-Founder', initials: 'PT',
    photo: 'https://shikharimf.com/assets/team/pralhad-thutte.jpg',
    bio: 'Pralhad Thutte is a Co-Founder of Shikhar IMF with deep expertise in business insurance and commercial risk assessment. He heads the corporate and SME insurance division, helping businesses across India find the right protection plans at the best rates.',
    expertise: ['Business Insurance', 'Commercial Risk', 'SME Advisory', 'Property & Fire Insurance', 'Marine Insurance'],
    achievements: ['Established Shikhar IMF\'s B2B insurance division', 'Managed corporate insurance portfolios worth ₹50+ crores', 'Expert in multi-location business insurance solutions', 'Key partnerships with 15+ commercial insurance providers'],
    socials: [
      { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn' },
      { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' }
    ]
  }
};

$(document).ready(function () {

  /* ===== STICKY NAVBAR ===== */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 60) {
      $('.navbar').addClass('scrolled');
      $('.scroll-top').addClass('visible');
    } else {
      $('.navbar').removeClass('scrolled');
      $('.scroll-top').removeClass('visible');
    }
  });

  /* ===== MOBILE MENU ===== */
  $('.hamburger').on('click', function () {
    $('.mobile-menu').toggleClass('open');
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.mobile-menu').removeClass('open');
    }
  });

  /* ===== MOBILE SUB-MENU ACCORDION ===== */
  $(document).on('click', '.mobile-dropdown-label', function () {
    var $items = $(this).next('.mobile-dropdown-items');
    var isOpen = $items.hasClass('open');
    // Close all, open clicked
    $('.mobile-dropdown-items').removeClass('open');
    if (!isOpen) $items.addClass('open');
  });

  /* ===== NAV DROPDOWN (desktop) ===== */
  $('.nav-dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $menu = $(this).siblings('.nav-dropdown-menu');
    // Read visibility BEFORE closing others (use css() to detect inline display:none)
    var isOpen = $menu.css('display') !== 'none';
    // Close all menus (remove inline style so CSS default hides them, then force hide)
    $('.nav-dropdown-menu').removeAttr('style').hide();
    $('.nav-dropdown-toggle i').css('transform', '');
    if (!isOpen) {
      $menu.show();
      $(this).find('i').css('transform', 'rotate(180deg)');
    }
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.nav-dropdown').length) {
      $('.nav-dropdown-menu').removeAttr('style').hide();
      $('.nav-dropdown-toggle i').css('transform', '');
    }
  });

  /* ===== HERO SLIDER ===== */
  var currentSlide = 0;
  var slides = $('.slide');
  var totalSlides = slides.length;
  var sliderTimer;
  var INTERVAL = 5500;

  if (totalSlides > 0) {
    function goToSlide(n) {
      slides.removeClass('active');
      $('.dot').removeClass('active');
      currentSlide = (n + totalSlides) % totalSlides;
      $(slides[currentSlide]).addClass('active');
      $('.dot').eq(currentSlide).addClass('active');
      animateProgress();
    }
    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }
    function animateProgress() {
      $('.slider-progress').css({ width: '0', transition: 'none' });
      setTimeout(function () {
        $('.slider-progress').css({ width: '100%', transition: 'width ' + INTERVAL + 'ms linear' });
      }, 20);
    }
    function startAutoPlay() { sliderTimer = setInterval(nextSlide, INTERVAL); }
    function resetAutoPlay() { clearInterval(sliderTimer); startAutoPlay(); }

    goToSlide(0);
    startAutoPlay();

    $(document).on('click', '.slider-arrow.next', function () { nextSlide(); resetAutoPlay(); });
    $(document).on('click', '.slider-arrow.prev', function () { prevSlide(); resetAutoPlay(); });
    $(document).on('click', '.dot', function () { goToSlide($(this).index()); resetAutoPlay(); });

    var touchStartX = 0;
    $('.hero-slider').on('touchstart', function (e) { touchStartX = e.originalEvent.changedTouches[0].screenX; });
    $('.hero-slider').on('touchend', function (e) {
      var diff = touchStartX - e.originalEvent.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) { if (diff > 0) nextSlide(); else prevSlide(); resetAutoPlay(); }
    });
  }

  /* ===== SERVICES TABS ===== */
  $('.tab-btn').on('click', function () {
    var target = $(this).data('tab');
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active');
    $('#' + target).addClass('active');
  });

  /* ===== FAQ ACCORDION ===== */
  $(document).on('click', '.faq-question', function () {
    var item = $(this).closest('.faq-item');
    var isOpen = item.hasClass('open');
    $('.faq-item').removeClass('open');
    if (!isOpen) item.addClass('open');
  });

  /* ===== STATS COUNTER ===== */
  var counted = false;
  function animateCounters() {
    if (counted) return;
    var statsSection = $('.stats-bar, .stats-grid');
    if (!statsSection.length) return;
    var top = statsSection.first().offset().top;
    if ($(window).scrollTop() + $(window).height() > top + 100) {
      counted = true;
      $('.num[data-target]').each(function () {
        var $el = $(this);
        var target = parseInt($el.data('target'));
        var suffix = $el.data('suffix') || '';
        var duration = 2000;
        var step = target / (duration / 16);
        var current = 0;
        var timer = setInterval(function () {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          $el.text(Math.floor(current).toLocaleString('en-IN') + suffix);
        }, 16);
      });
    }
  }
  $(window).on('scroll', animateCounters);
  setTimeout(animateCounters, 800);

  /* ===== SCROLL REVEAL ===== */
  function checkReveal() {
    $('.reveal').each(function () {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 60) {
        $(this).addClass('visible');
      }
    });
  }
  $(window).on('scroll', checkReveal);
  checkReveal();

  /* ===== SCROLL TO TOP ===== */
  $(document).on('click', '.scroll-top', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* ===== TESTIMONIALS SLIDER ===== */
  var tIdx = 0;
  var tCards = $('.testimonial-card');
  var tTotal = tCards.length;
  function calcPerView() { return $(window).width() > 900 ? 3 : $(window).width() > 600 ? 2 : 1; }
  function slideTo(n) {
    if (tTotal === 0) return;
    var perView = calcPerView();
    var gap = 24;
    var containerWidth = $('.testimonials-slider').width();
    var cardWidth = (containerWidth - (perView - 1) * gap) / perView;
    var maxIdx = Math.max(0, tTotal - perView);
    tIdx = ((n % tTotal) + tTotal) % tTotal;
    if (tIdx > maxIdx) tIdx = 0;
    tCards.css({ 'width': cardWidth + 'px', 'min-width': cardWidth + 'px', 'max-width': cardWidth + 'px' });
    var offset = -(tIdx * (cardWidth + gap));
    $('.testimonials-track').css('transform', 'translateX(' + offset + 'px)');
    $('.t-dot').removeClass('active');
    $('.t-dot').eq(tIdx).addClass('active');
  }
  if (tTotal > 0) slideTo(0);
  $(document).on('click', '.t-dot', function () { slideTo($(this).index()); });
  setInterval(function () { slideTo(tIdx + 1); }, 4500);
  $(window).on('resize', function () { slideTo(tIdx); });

  /* ===== FILE INPUT ===== */
  $(document).on('change', 'input[type=file]', function () {
    var name = $(this).val().split('\\').pop();
    $(this).closest('.file-input-wrap').find('.file-name').text(name || 'No file chosen');
  });
  $(document).on('click', 'input[type=file]', function (e) {
    e.stopPropagation();
  });
  $(document).on('click', '.file-input-wrap', function (e) {
    if ($(e.target).is('input[type=file]')) return;
    $(this).find('input[type=file]')[0].click();
  });

  /* ===== LIVE FIELD VALIDATION (blur / input) ===== */
  $(document).on('blur', '.validate-form input, .validate-form select, .validate-form textarea', function () { validateField($(this)); });
  $(document).on('input', '.validate-form input, .validate-form textarea', function () {
    if ($(this).closest('.form-group').find('.error-msg').hasClass('show')) validateField($(this));
  });

  /* ===== CONTACT FORM ===== */
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required], select[required], textarea[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (!valid) return;
    var $btn = $(this).find('.btn-submit');
    $btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Sending...');
    setTimeout(function () {
      $btn.prop('disabled', false).html('<i class="fas fa-paper-plane"></i> Send Message');
      $('#contactForm')[0].reset();
      $('#contactForm .form-group input, #contactForm select, #contactForm textarea').removeClass('success error');
      $('#contactSuccess').addClass('show');
      setTimeout(function () { $('#contactSuccess').removeClass('show'); }, 6000);
    }, 1800);
  });

  /* ===== ADVISOR FORM ===== */
  $('#advisorForm').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required], select[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (!$('input[name="experience"]:checked').length) { $('.radio-error').addClass('show'); valid = false; } else { $('.radio-error').removeClass('show'); }

    // Soft validation for optional PAN number (if filled, must match format)
    var panVal = $('#panNumber').val().trim().toUpperCase();
    if (panVal) {
      var $panGroup = $('#panNumber').closest('.form-group');
      var $panMsg = $panGroup.find('.error-msg');
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panVal)) {
        showError($('#panNumber'), $panMsg, 'PAN must be 10 characters (e.g. ABCDE1234F).');
        valid = false;
      } else {
        clearError($('#panNumber'), $panMsg);
      }
    }

    // Soft validation for optional Aadhaar number (if filled, must be 12 digits)
    var aadhaarVal = $('#aadhaarNumber').val().trim();
    if (aadhaarVal) {
      var $aadhaarGroup = $('#aadhaarNumber').closest('.form-group');
      var $aadhaarMsg = $aadhaarGroup.find('.error-msg');
      if (!/^[0-9]{12}$/.test(aadhaarVal)) {
        showError($('#aadhaarNumber'), $aadhaarMsg, 'Aadhaar must be exactly 12 digits.');
        valid = false;
      } else {
        clearError($('#aadhaarNumber'), $aadhaarMsg);
      }
    }

    if (!valid) return;
    var $btn = $(this).find('.btn-submit');
    $btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Submitting...');
    setTimeout(function () {
      $btn.prop('disabled', false).html('<i class="fas fa-check-circle"></i> Submit & Get Started');
      $('#advisorForm')[0].reset();
      $('#advisorSuccess').addClass('show');
      $('html, body').animate({ scrollTop: $('#advisorSuccess').offset().top - 100 }, 500);
    }, 2000);
  });
  $(document).on('change', 'input[name="experience"]', function () { $('.radio-error').removeClass('show'); });

  // Auto-uppercase PAN number input
  $(document).on('input', '#panNumber', function () {
    var pos = this.selectionStart;
    $(this).val($(this).val().toUpperCase());
    this.setSelectionRange(pos, pos);
    // Clear error on input if already showing
    if ($(this).closest('.form-group').find('.error-msg').hasClass('show')) {
      var panVal = $(this).val().trim();
      if (/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panVal)) {
        clearError($(this), $(this).closest('.form-group').find('.error-msg'));
      }
    }
  });

  // Clear Aadhaar error on input
  $(document).on('input', '#aadhaarNumber', function () {
    if ($(this).closest('.form-group').find('.error-msg').hasClass('show')) {
      var aadhaarVal = $(this).val().trim();
      if (/^[0-9]{12}$/.test(aadhaarVal)) {
        clearError($(this), $(this).closest('.form-group').find('.error-msg'));
      }
    }
  });

  /* ===== LOGIN FORM ===== */
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    var $email = $('#loginEmail');
    var $pass = $('#loginPassword');
    var emailVal = $email.val().trim();
    var passVal = $pass.val().trim();
    var $emailMsg = $email.closest('.form-group').find('.error-msg');
    var $passMsg = $pass.closest('.form-group').find('.error-msg');

    if (!emailVal) {
      showError($email, $emailMsg, 'Please enter your email or mobile number.');
      valid = false;
    } else {
      clearError($email, $emailMsg);
    }

    if (!passVal) {
      showError($pass, $passMsg, 'Please enter your password.');
      valid = false;
    } else if (passVal.length < 6) {
      showError($pass, $passMsg, 'Password must be at least 6 characters.');
      valid = false;
    } else {
      clearError($pass, $passMsg);
    }

    if (!valid) return;

    var $btn = $(this).find('.btn-submit');
    $btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Signing In...');
    setTimeout(function () {
      $btn.prop('disabled', false).html('<i class="fas fa-sign-in-alt"></i> Sign In to Account');
      $('#loginSuccess').addClass('show');
      setTimeout(function () { $('#loginSuccess').removeClass('show'); }, 6000);
    }, 1800);
  });

  /* ===== REGISTER FORM ===== */
  $('#registerForm').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required], select[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });

    // Password match check
    var pass = $('#regPassword').val();
    var confirm = $('#regPasswordConfirm').val();
    if (pass && confirm && pass !== confirm) {
      var $cf = $('#regPasswordConfirm');
      showError($cf, $cf.closest('.form-group').find('.error-msg'), 'Passwords do not match.');
      valid = false;
    }

    // Terms check
    if (!$('#regTerms').is(':checked')) {
      $('#registerForm .terms-error').addClass('show');
      valid = false;
    } else {
      $('#registerForm .terms-error').removeClass('show');
    }

    if (!valid) return;
    var $btn = $(this).find('.btn-submit');
    $btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Creating Account...');
    setTimeout(function () {
      $btn.prop('disabled', false).html('<i class="fas fa-user-plus"></i> Create My Account');
      $('#registerForm')[0].reset();
      $('#registerForm .form-group input, #registerForm select').removeClass('success error');
      $('#psFill').css({ width: '0' });
      $('#psLabel').text('');
      $('#registerSuccess').addClass('show');
      $('html, body').animate({ scrollTop: $('#registerSuccess').offset().top - 100 }, 400);
      setTimeout(function () { $('#registerSuccess').removeClass('show'); }, 6000);
    }, 2000);
  });
  $(document).on('change', '#regTerms', function () {
    if ($(this).is(':checked')) $('#registerForm .terms-error').removeClass('show');
  });

  /* ===== QUOTE FORM ===== */
  $('#quoteForm').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required], select[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (!$('#quoteTerms').is(':checked')) {
      $('#quoteForm .terms-error').addClass('show');
      valid = false;
    } else {
      $('#quoteForm .terms-error').removeClass('show');
    }
    if (!valid) {
      // Scroll to first error
      var $firstErr = $('#quoteForm .form-group input.error, #quoteForm .form-group select.error').first();
      if ($firstErr.length) $('html, body').animate({ scrollTop: $firstErr.offset().top - 120 }, 400);
      return;
    }
    var $btn = $(this).find('.btn-submit');
    $btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Fetching Quotes...');
    setTimeout(function () {
      $btn.prop('disabled', false).html('<i class="fas fa-search"></i> Get My Free Quotes Now');
      $('#quoteForm')[0].reset();
      $('#quoteForm .form-group input, #quoteForm select').removeClass('success error');
      $('#quoteSuccess').addClass('show');
      $('html, body').animate({ scrollTop: $('#quoteSuccess').offset().top - 100 }, 400);
      setTimeout(function () { $('#quoteSuccess').removeClass('show'); }, 8000);
    }, 1800);
  });
  $(document).on('change', '#quoteTerms', function () {
    if ($(this).is(':checked')) $('#quoteForm .terms-error').removeClass('show');
  });

  /* ===== SMOOTH SCROLL ===== */
  $(document).on('click', 'a[href^="#"]:not([href="#"])', function (e) {
    var target = $(this.hash);
    if (target.length) { e.preventDefault(); $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600); }
  });

  /* ===== QUOTE TYPE TABS ===== */
  $(document).on('click', '.quote-type-btn', function () {
    $('.quote-type-btn').removeClass('active');
    $(this).addClass('active');
    var type = $(this).data('type');
    $('.quote-extra').hide();
    $('#extra-' + type).show();
  });

  /* ===== PASSWORD TOGGLE ===== */
  $(document).on('click', '.toggle-password', function () {
    var targetId = $(this).data('target');
    var $input = $('#' + targetId);
    var $icon = $(this).find('i');
    if ($input.attr('type') === 'password') {
      $input.attr('type', 'text');
      $icon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      $input.attr('type', 'password');
      $icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });

  /* ===== PASSWORD STRENGTH ===== */
  $(document).on('input', '#regPassword', function () {
    var val = $(this).val();
    var strength = 0;
    if (val.length >= 8) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/[0-9]/.test(val)) strength++;
    if (/[^A-Za-z0-9]/.test(val)) strength++;
    var colors = ['', '#e74c3c', '#E8A320', '#27AE60', '#1B3A7A'];
    var labels = ['', 'Weak', 'Fair', 'Strong', 'Very Strong'];
    var pct = (strength / 4) * 100;
    $('#psFill').css({ width: pct + '%', background: colors[strength] });
    $('#psLabel').text(labels[strength] || '').css('color', colors[strength]);
  });

  /* ===== TEAM CARD CLICK - PROFILE MODAL ===== */
  $(document).on('click', '.team-card', function () {
    var member = $(this).data('member');
    var d = teamData[member];
    if (!d) return;
    $('#tmPhoto').attr('src', d.photo).show();
    $('#tmInitials').text(d.initials).hide();
    $('#tmPhoto').off('error').on('error', function () { $(this).hide(); $('#tmInitials').show(); });
    $('#tmName').text(d.name);
    $('#tmRole').text(d.role);
    $('#tmBio').text(d.bio);
    var tagsHtml = d.expertise.map(function (t) { return '<span class="tm-tag">' + t + '</span>'; }).join('');
    $('#tmExpertise').html(tagsHtml);
    var achHtml = d.achievements.map(function (a) { return '<li>' + a + '</li>'; }).join('');
    $('#tmAchievements').html(achHtml);
    var socialHtml = d.socials.map(function (s) {
      return '<a href="' + s.url + '" target="_blank" title="' + s.label + '"><i class="' + s.icon + '"></i></a>';
    }).join('');
    $('#tmSocials').html(socialHtml);
    $('#teamModal').addClass('open');
    $('body').css('overflow', 'hidden');
  });

  // Close modal
  $(document).on('click', '.team-modal-close, .team-modal-overlay', function (e) {
    if ($(e.target).hasClass('team-modal-overlay') || $(e.target).hasClass('team-modal-close') || $(e.target).closest('.team-modal-close').length) {
      $('#teamModal').removeClass('open');
      $('body').css('overflow', '');
    }
  });
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') { $('#teamModal').removeClass('open'); $('body').css('overflow', ''); }
  });

  /* ===== CARD SHARE ===== */
  $(document).on('click', '#tmShare', function () {
    var name = $('#tmName').text();
    var role = $('#tmRole').text();
    var text = name + ', ' + role + ' at Shikhar IMF Pvt. Ltd. | info@shikharimf.in | +91 9356633524';
    var $icon = $(this).find('i');
    if (navigator.share) {
      navigator.share({ title: name + ' - Shikhar IMF', text: text, url: window.location.href });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () {
        $icon.removeClass('fa-share-alt').addClass('fa-check');
        setTimeout(function () { $icon.removeClass('fa-check').addClass('fa-share-alt'); }, 2000);
      });
    }
  });

  /* ===== CARD DOWNLOAD (vCard) ===== */
  $(document).on('click', '#tmDownload', function () {
    var name = $('#tmName').text();
    var role = $('#tmRole').text();
    var vcard = 'BEGIN:VCARD\nVERSION:3.0\nFN:' + name + '\nTITLE:' + role + '\nORG:Shikhar IMF Pvt. Ltd.\nEMAIL:info@shikharimf.in\nTEL:+919356633524\nURL:https://shikharimf.com\nADR:;;Office No-1311/12 Boulevard Towers 13th Floor;Pune;Maharashtra;411001;India\nEND:VCARD';
    var blob = new Blob([vcard], { type: 'text/vcard' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = name.replace(/\s+/g, '-') + '-Shikhar-IMF.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });



  /* ===== INSURANCE PARTNERS TABS ===== */
  $(document).on('click', '.partners-tab', function () {
    var cat = $(this).data('cat');
    $('.partners-tab').removeClass('active');
    $(this).addClass('active');
    $('.partners-cat').removeClass('active');
    $('#pcat-' + cat).addClass('active');
  });

  /* ===== INSURERS PAGE TABS ===== */
  $(document).on('click', '.insurers-tab-btn', function () {
    var tab = $(this).data('tab');
    $('.insurers-tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.insurers-tab-content').removeClass('active');
    $('#itab-' + tab).addClass('active');
  });

  /* ===================================================================
     LEAD GENERATION POPUP MODAL
     Configuration: window.LeadPopupConfig (defined at top of this file).
     Override per-page by adding a <script> BEFORE main.js:
       <script>window.LeadPopupConfig = { mode: 'always', delaySeconds: 0 };</script>
     =================================================================== */
  (function () {
    var POPUP_KEY = 'shikhar_lead_popup_shown';
    var pageCfg = $.extend({ mode: 'session', delaySeconds: 2.5 }, window.LeadPopupConfig || {});

    function getStorage() {
      if (pageCfg.mode === 'once')    return localStorage;
      if (pageCfg.mode === 'session') return sessionStorage;
      return null; // 'always' — never read or write storage
    }

    function closeLeadPopup(markShown) {
      $('#leadGenOverlay').removeClass('active');
      if (markShown) {
        var store = getStorage();
        if (store) { try { store.setItem(POPUP_KEY, 'true'); } catch (e) {} }
      }
    }

    function showLeadPopup() {
      var store = getStorage();
      if (store) {
        try { if (store.getItem(POPUP_KEY) === 'true') return; } catch (e) {}
      }
      var delayMs = (parseFloat(pageCfg.delaySeconds) || 0) * 1000;
      setTimeout(function () { $('#leadGenOverlay').addClass('active'); }, delayMs);
    }

    // Validation helpers for popup
    function leadValidate() {
      var ok = true;

      var fields = [
        { sel: '#lgFirstName',  type: 'text',   msg: 'This field is required.' },
        { sel: '#lgLastName',   type: 'text',   msg: 'This field is required.' },
        { sel: '#lgMobile',     type: 'phone',  msg: '' },
        { sel: '#lgEmail',      type: 'email',  msg: '' },
        { sel: '#lgInsurance',  type: 'select', msg: 'Please select your insurance requirement.' }
      ];

      $.each(fields, function (_, f) {
        var $el = $(f.sel);
        var $grp = $el.closest('.form-group');
        var $err = $grp.find('.error-msg');
        var val = $el.val() ? $el.val().trim() : '';

        $grp.removeClass('error success');
        $err.removeClass('show').text('');

        if (!val) {
          $grp.addClass('error');
          $err.text(f.msg).addClass('show');
          ok = false;
          return;
        }
        if (f.type === 'phone' && !isPhone(val)) {
          $grp.addClass('error');
          $err.text('Enter a valid 10-digit mobile number.').addClass('show');
          ok = false;
          return;
        }
        if (f.type === 'email' && !isEmail(val)) {
          $grp.addClass('error');
          $err.text('Enter a valid email address.').addClass('show');
          ok = false;
          return;
        }
        $grp.addClass('success');
      });

      return ok;
    }

    // Close button
    $(document).on('click', '#leadGenClose', function () {
      closeLeadPopup(true);
    });

    // Click outside modal to close
    $(document).on('click', '#leadGenOverlay', function (e) {
      if ($(e.target).is('#leadGenOverlay')) {
        closeLeadPopup(true);
      }
    });

    // Escape key to close
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape') closeLeadPopup(true);
    });

    // Submit
    $(document).on('click', '#lgSubmitBtn', function () {
      if (!leadValidate()) return;
      // Success state
      $('#lgFormBody').hide();
      $('#lgSuccessState').css('display', 'flex');
      var store = getStorage();
      if (store) { try { store.setItem(POPUP_KEY, 'true'); } catch (e) {} }
      // Countdown auto-close (3 seconds)
      var secs = 3;
      var $cd = $('#lgCountdown');
      $cd.text('Closing in ' + secs + 's\u2026');
      var timer = setInterval(function () {
        secs--;
        if (secs <= 0) {
          clearInterval(timer);
          closeLeadPopup(false);
        } else {
          $cd.text('Closing in ' + secs + 's\u2026');
        }
      }, 1000);
    });

    // Clear error on input/change
    $(document).on('input change', '#lgFirstName, #lgLastName, #lgMobile, #lgEmail, #lgInsurance', function () {
      var $grp = $(this).closest('.form-group');
      $grp.removeClass('error');
      $grp.find('.error-msg').removeClass('show').text('');
    });

    // Trigger on page load
    showLeadPopup();
  })();

});