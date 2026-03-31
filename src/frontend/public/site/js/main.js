$(document).ready(function () {

  /* STICKY NAVBAR */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 60) {
      $('.navbar').addClass('scrolled');
      $('.scroll-top').addClass('visible');
    } else {
      $('.navbar').removeClass('scrolled');
      $('.scroll-top').removeClass('visible');
    }
  });

  /* MOBILE MENU */
  $('.hamburger').on('click', function () {
    $('.mobile-menu').toggleClass('open');
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.mobile-menu').removeClass('open');
    }
  });

  /* HERO SLIDER */
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

  /* SERVICES TABS */
  $('.tab-btn').on('click', function () {
    var target = $(this).data('tab');
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active');
    $('#' + target).addClass('active');
  });

  /* FAQ ACCORDION */
  $(document).on('click', '.faq-question', function () {
    var item = $(this).closest('.faq-item');
    var isOpen = item.hasClass('open');
    $('.faq-item').removeClass('open');
    if (!isOpen) item.addClass('open');
  });

  /* STATS COUNTER */
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

  /* SCROLL REVEAL */
  function checkReveal() {
    $('.reveal').each(function () {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 60) {
        $(this).addClass('visible');
      }
    });
  }
  $(window).on('scroll', checkReveal);
  checkReveal();

  /* SCROLL TO TOP */
  $(document).on('click', '.scroll-top', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* TESTIMONIALS SLIDER */
  var tIdx = 0;
  var tCards = $('.testimonial-card');
  var tTotal = tCards.length;
  function slideTo(n) {
    if (tTotal === 0) return;
    tIdx = (n + tTotal) % tTotal;
    var perView = $(window).width() > 900 ? 3 : $(window).width() > 600 ? 2 : 1;
    var cardWidth = $('.testimonials-track').width() / perView;
    var offset = -tIdx * (cardWidth + 24);
    $('.testimonials-track').css('transform', 'translateX(' + offset + 'px)');
    $('.t-dot').removeClass('active');
    $('.t-dot').eq(tIdx).addClass('active');
  }
  $(document).on('click', '.t-dot', function () { slideTo($(this).index()); });
  setInterval(function () { slideTo(tIdx + 1); }, 4500);
  $(window).on('resize', function () { slideTo(tIdx); });

  /* FILE INPUT */
  $(document).on('change', 'input[type=file]', function () {
    var name = $(this).val().split('\\').pop();
    $(this).closest('.file-input-wrap').find('.file-name').text(name || 'No file chosen');
  });
  $(document).on('click', '.file-input-wrap', function () {
    $(this).find('input[type=file]').trigger('click');
  });

  /* FORM VALIDATION */
  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function isPhone(v) { return /^[6-9]\d{9}$/.test(v.replace(/[\s\-\+]/g, '')); }
  function showError($f, $m, msg) { $f.addClass('error').removeClass('success'); $m.text(msg).addClass('show'); }
  function clearError($f, $m) { $f.removeClass('error').addClass('success'); $m.removeClass('show'); }
  function validateField($field) {
    var $group = $field.closest('.form-group');
    var $msg = $group.find('.error-msg');
    var val = $field.val().trim();
    var type = $field.attr('type') || $field[0].tagName.toLowerCase();
    var required = $field.prop('required');
    if (required && !val) { showError($field, $msg, 'This field is required.'); return false; }
    if (type === 'email' && val && !isEmail(val)) { showError($field, $msg, 'Please enter a valid email address.'); return false; }
    if ($field.hasClass('phone-field') && val && !isPhone(val)) { showError($field, $msg, 'Please enter a valid 10-digit mobile number.'); return false; }
    clearError($field, $msg);
    return true;
  }
  $(document).on('blur', '.validate-form input, .validate-form select, .validate-form textarea', function () { validateField($(this)); });
  $(document).on('input', '.validate-form input, .validate-form textarea', function () {
    if ($(this).closest('.form-group').find('.error-msg').hasClass('show')) validateField($(this));
  });

  /* CONTACT FORM */
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

  /* ADVISOR FORM */
  $('#advisorForm').on('submit', function (e) {
    e.preventDefault();
    var valid = true;
    $(this).find('input[required], select[required]').each(function () {
      if (!validateField($(this))) valid = false;
    });
    if (!$('input[name="experience"]:checked').length) { $('.radio-error').addClass('show'); valid = false; } else { $('.radio-error').removeClass('show'); }
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

  /* SMOOTH SCROLL */
  $(document).on('click', 'a[href^="#"]:not([href="#"])', function (e) {
    var target = $(this.hash);
    if (target.length) { e.preventDefault(); $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600); }
  });

});
