var emptyUser = { uid: {lastUpdated: 0 },
                  sex: {lastUpdated: 0 },
                  name: {lastUpdated: 0 }};
var user = emptyUser;
var setupProcess = 0;
var start;
var end;
var timeout;
var emptyCache = { notifications: { lastUpdated: 0 },
                            wall: { lastUpdated: 0 },
			   inbox: { lastUpdated: 0 },
		      profilePic: { lastUpdated: 0 },
		          stream: { lastUpdated: 0 }};
var cache = emptyCache;

var background = chrome.extension.getBackgroundPage();
var apiKey = '0a2a1e2b42c7def3ed083cf9ec8a95b4';
var appSecret = '47ad502677c2d31eaf133b205a68e974';
var appId = '193626643996325';
var successURL = 'http://usability.vendepublicidade.com.br';
var cancelURL = 'http://www.facebook.com/connect/login_failure.html';
var permissions = 'user_about_me,user_likes,email,publish_stream,status_update,user_birthday,user_location,user_work_history,offline_access';
var fb_canvas_page_url = 'http://apps.facebook.com/usabilitycontent/';
var fb_canvas_url = 'http://usability.vendepublicidade.com.br/';

var accessToken = 'https://graph.facebook.com/oauth/access_token?client_id='+appId+
			'&client_secret='+appSecret+
			'&grant_type=client_credentials';

var loginURL = 'http://www.facebook.com/login.php?api_key=' + apiKey +
                '&fbconnect=true' +
                '&v=1.0' +
                '&connect_display=page' +
                '&return_session=true' +
                '&session_key_only=true' +
                '&next=' + successURL +
                '&cancel_url=' + cancelURL +
                '&req_perms=' + permissions;

var refreshTime = 1000 * 5 * 60;          
                
/*var loginURL =  'http://www.facebook.com/dialog/oauth?client_id='+appId+
                '&redirect_uri='+encodeURI(fb_canvas_page_url)+
                '&scope='+permissions;*/
                

