function showActiveIcon() {
  chrome.browserAction.setIcon({ path: '../images/icon16.png'});
}

function showInactiveIcon() {
  chrome.browserAction.setIcon({ path: '../images/icon16_gray.png'});
}

function showLoading() {
  $('#loading').show();
}

function hideLoading() {
  $('#loading').hide();
}

function initEvents() {
  $('#login-btn').click(function() {
    loginAttempt();
  });

  $('#logout-btn').click(function() {
    logout();
  });

  $('#logout-btn span button').val(logoutText);

  $('#login-text').text(loginButtonText);
  $('#intro').text(introText);
  $('#error').text(errorText);


  if(localStorage['tab'] === undefined) {
    localStorage['tab'] = '#stream';
  }

}


function isArray(obj) {
  return obj && (length in obj) && typeof obj.length === 'number' && !(obj.propertyIsEnumerable('length'));
}
