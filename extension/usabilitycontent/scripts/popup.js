function loginAttempt() {
  background.setupProcess = 1;
  chrome.tabs.create({ url: loginURL });
}

function logout() {
  background.logout();
}

function getProfilePic() {
  background.getProfilePic(function(profile, url) {
    showProfilePic(profile, url);
  });
}
