$(window).load(function(){

  // two column layout
  if ($('.eaRightColumnContent').length && $('.eaLeftColumnContent').length) {
    sortTwoColumn();
    $('body').addClass('twocolumn');

    // if form in right column:
    // * move submit button to right column
    // * put right column before left column
    if ($('.eaRightColumnContent .eaFormField').length ||
        $('.eaRightColumnContent .eaMessageContent').length ) {
      $('.eaSubmitResetButtonGroup').appendTo($('.en_right_wrapper').last());
      $('.en_left_wrapper').each(function(){
        var id = $(this).attr('id').match(/[0-9]+$/);
        $(this).before($('#right_wrapper' + id[0]));
      });
    } else {
      $('.eaSubmitResetButtonGroup').appendTo($('.en_left_wrapper').last());
    }
  } else {
    $('body').addClass('onecolumn');
  }

  // enable Picker and Selector
  // see http://www.benplum.com/formstone/
  if (typeof $.fn.selecter == 'function') {
    $('select').selecter();
  }
  if (typeof $.fn.picker == 'function') {
    $('input[type=radio], input[type=checkbox]').picker();
  }
  // add a class for picker label height
  $('.picker-label').each(function(){
    var label = $(this);
    var handle = label.siblings('.picker-handle');
    if (label.height() > 25){
      label.parent().addClass('multiline');
    } else {
      label.parent().addClass('oneline');
    }
  });

  // move validation icon next to label
  // and the error message below the label
  $('.eaErrorMessage').each(function() {
    var self = $(this);
    var label = self.siblings('.eaFormElementLabel');
    var field = self.siblings('.eaFormField');
    var icon = $('.eaValidationIcon', label.parent());
    icon.appendTo(label);
    self.appendTo(field);
  });

  // add class to field, where error occured
  $(window).on('DOMSubtreeModified', '.eaErrorMessage', function(e) {
    var self = $(e.target);
    if (!self.is(':empty')) {
      self.parent().not('form').addClass('validationError');
    }
  });

  // configure progressbar = thermometer = counter
  var $thermometerEl = $('.pgbar-thermometer');
  var thermometerTarget = 250; // default
  var thermometerStart = 0; // default
  // read target value from data-target
  var thermometerDataTarget = $thermometerEl.data('target');
  if (typeof thermometerDataTarget !== 'undefined') {
    var parsedTarget = parseInt(thermometerDataTarget, 10);
    if (!isNaN(parsedTarget) && parsedTarget > 0) {
      thermometerTarget = parsedTarget;
    }
  }
  // read start value from data-start
  var thermometerDataStart = $thermometerEl.data('start');
  if (typeof thermometerDataStart !== 'undefined') {
    var parsedStart = parseInt(thermometerDataStart, 10);
    if (!isNaN(parsedStart) && parsedStart > 0) {
      thermometerStart = parsedStart;
    }
  }
  // initialize eActivistThermometer
  $thermometerEl.eActivistThermometer({
    token: '3104e980-8039-41ad-8be6-2df53841b2f0',
    campaignId: $('input[name="ea.campaign.id"]').val(),
    target: thermometerTarget,
    initialValue: thermometerStart,
    service: 'EaEmailAOTarget',
    targetDataColumn: 'participatingSupporters'
  });

  // cookie bar
  if (typeof localStorage !== 'undefined') {
    var accepted = localStorage.getItem('wow_has_accepted_cookies');
    if (accepted && accepted === 'yes') {
      $('#cookie-info').hide();
    }
  }
  $('#cookie-info .close').on('click', function(e) {
    var me = $(e.target);
    var infoBox = me.closest('#cookie-info');
    infoBox.hide();
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('wow_has_accepted_cookies', 'yes');
    }
  });
});
