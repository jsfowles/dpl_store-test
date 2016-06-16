// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  var baseUrl = 'http://devpoint-ajax-example-server.herojuapp.com/api/v1/products';

  if (location.pathname === '/') {
    $.ajax({
      url: baseUrl,
      type: 'GET',
      dataType: 'JSON'
    }).done(function(data) {

    }).fail(function(err) {

    });
  }
});
