$(document).ready(function() {
    background.setStart(showLoading);
    background.setEnd(hideLoading);

    background.setupLoginLogoutHandlers();

    background.onLogin(function() {
      showActiveIcon();
      hideLogin();
      getProfilePic();
    });

    background.onLogout(function() {
      showLogin(background.setupProcess == 1);
      //removeProfilePic();
      showInactiveIcon();
    });

    initEvents();
});
