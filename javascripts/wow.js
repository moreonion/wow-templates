$(window).load(function(){

  // two column layout
  if ($('.eaRightColumnContent').length && $('.eaLeftColumnContent').length) {
    sortTwoColumn();
    $('body').addClass('twocolumn');

    // if form in right column:
    // * move submit button to right column
    // * put right column before left column
    if ($('.eaRightColumnContent .eaFormField').length) {
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

});
