(function(){
	
	// Facebook Helper
	var idFb = null;
	var accessTokenFb = null;
	
	fbHelper = {
		
		appId: null,
		canvasPageUrl: null,
		channelUrl: null,
		
		// Inicializa o Facebook JS SDK
		init: function(appId, canvasPageUrl, channelUrl){
			
			this.appId = appId;
			this.canvasPageUrl = canvasPageUrl;
			this.channelUrl = channelUrl;
			
			FB.init({
				appId: this.appId,
				cookie: true,
				status: true,
				xfbml: true,
				channelUrl: this.channelUrl
			});	
			
			//$('#debug').css({display:'block'}).html('<p>Entrou dentro da funcao init de fbhelper</p>');
						
		},
		
		//Apresenta todos os dados do usuário
		
		showDetails:function(user_id){
		
			$('#debug').append('<p class="pad-lft">2.1.Entrou no fbHelper.showDetails onde o uid: '+user_id+'</p>');  		
			var query = FB.Data.query('SELECT uid,name,sex,username  FROM user WHERE uid={0}',user_id);
			
			query.wait(function(rows) {
				user = rows[0];
				
				$('#debug').append('<p class="pad-lft-2">2.1.1.Entrou no fbHelper.showDetails onde o seu nome: '+user.name+'</p>'); 
				
				$('#display').css('display','block').html('<img class="left avatar" src="https://graph.facebook.com/'+user.uid+'/picture"></img><p>'+user.name+'</p><p>'+user.sex+'</p><p>'+user.username+'</p>');
				$('#login').css({display:'none'});

			});
		},
		
		graphUC:function(){
			$('#debug').append('<p class="pad-lft">4.Entrou no fbHelper.graphUC</p>'); 

			$.ajax({
			  url: 'http://usability.vendepublicidade.com.br/index/me',
			  dataType: "json",
			  type: "POST",
			  async: false,
			  success: function(data){
				$('#debug').append('<p class="pad-lft-2">4.1.Entrou no fbHelper.graphUC Ajax</p>'); 
				$('#json').append('<p class="pad-lft-2"> ID: '+data.id+'</p>'+
								  '<p class="pad-lft-2"> Aniversario: '+data.birthday+'</p>'+
								  '<p class="pad-lft-2"> Locale: '+data.locale+'</p>'+
								  '<p class="pad-lft-2"> Timezone: '+data.timezone+'</p>'+
								  '<p class="pad-lft-2"> Cidade Nasceu: '+data.hometown.name+'</p>'+
								  '<p class="pad-lft-2"> Cidade Mora: '+data.location.name+'</p>');
			  },
			  statusCode: {
				404: function() {
				  alert('page not found');
				}
			  }
			});
		},
		
		graph:function(){
			$('#debug').append('<p class="pad-lft">5.Entrou no fbHelper.graph</p>'); 
			
			var url = "https://graph.facebook.com/"+idFb+"?access_token="+accessTokenFb+" ";
			
			$('#debug').append('<p class="pad-lft-2">5.1.Entrou no fbHelper.graph URL: '+url+'</p>');
		
			$.ajax({
			  url: url,
			  dataType: "json",
			  type: "GET",
			  async: false,
			  success: function(data){
				var age = fbHelper.calculateAge(data.birthday);
				
				$('#debug').append('<p class="pad-lft-2">5.1.Entrou no fbHelper.graph Ajax</p>'); 
				$('#json').append('<p class="pad-lft-2"> ID: '+data.id+'</p>'+
								  '<p class="pad-lft-2"> Aniversario: '+data.birthday+'</p>'+
								  '<p class="pad-lft-2"> Idade: '+age+'</p>'+
								  '<p class="pad-lft-2"> Locale: '+data.locale+'</p>'+
								  '<p class="pad-lft-2"> Timezone: '+data.timezone+'</p>'+
								  '<p class="pad-lft-2"> Cidade Nasceu: '+data.hometown.name+'</p>'+
								  '<p class="pad-lft-2"> Cidade Mora: '+data.location.name+'</p>');
			  },
			  statusCode: {
				404: function() {
				  alert('page not found');
				}
			  }
			});
		},
		
		accessTokenUC:function(){
			$('#debug').append('<p class="pad-lft">2.2.Entrou no fbHelper.accessTokenUC</p>'); 
		
			$.ajax({
			  url: "http://usability.vendepublicidade.com.br/index/access-token",
			  dataType: "json",
			  type: "GET",
			  async: false,
			  success: function(data){
				$('#debug').append('<p class="pad-lft-2">2.2.1.Entrou no fbHelper.accessTokenUC Ajax</p>'); 
				$('#json').append('<p class="pad-lft-2"> Access-token: '+data.access_token+'</p><p class="pad-lft-2"> UID: '+data.uid+'</p>');

				idFb = data.uid;
				accessTokenFb = data.access_token;
				
				return data;
			  },
			  statusCode: {
				404: function() {
				  alert('page not found');
				}
			  }
			});
		},
			
		calculateAge: function(dateOfBirth){
			var array = dateOfBirth.split("/");
			var bday=parseInt(array[1]);
			var bmo=parseInt(array[0]);
			var byr=parseInt(array[2]);
			var byr;
			var age;
				var now = new Date();
				tday=now.getDate();
				tmo=(now.getMonth());
				tyr=(now.getFullYear());

			
				if((tmo > bmo)||(tmo==bmo & tday>=bday)){
					age=byr
				}else{
					age=byr+1
				}
				return (tyr-age);
		},
		
		//Garantir que o usuário está logado e tem permissão necessária
		
		ensureLogin: function(redirectBackTo, permissions, onSuccessCallBack){	
			
			var redirectUri = this.canvasPageUrl + ((!redirectBackTo) ? '' : redirectBackTo);
			permissions = (!permissions) ? '' : permissions;
			
			// Build the login url
			var loginUrl = 
				'https://graph.facebook.com/oauth/authorize?client_id=' + 
				this.appId + 
				'&redirect_uri=' + escape(redirectUri) + 
				'&scope=' + escape(permissions);
			
					
			FB.getLoginStatus(function(response){
				
				if (response.status != 'connected') {
					// Usuário não conectado redireciona para a página de login
					top.location = loginUrl;
					return;
				}
					
				if (permissions == ''){
					// Usuário está conectado.
					// Como não existem permissões para verificar, estado de sessão é um sucesso
					if (onSuccessCallBack) onSuccessCallBack(response);
					return;
				}
				// Check to see whether the user has valid permissions
				var query = FB.Data.query('select {0} from permissions where uid={1}', permissions, response.session.uid);
				query.wait(function(rows) {
					
					if (rows.length != 1){
						top.location = loginUrl;
					}
					
					var permissionsArray = permissions.split(',');
					
					for (var i=0; i<permissionsArray.length; i++){
						
						var permission = permissionsArray[i];
						if (rows[0][permission] != 1){
							top.location = loginUrl;
							return;
						}
						
					}
					
					if (onSuccessCallBack) onSuccessCallBack(response);
					return;
					
				});
				
			});
			
		},
		
		
		
		// Retorna perfil básico sobre o usuário atual
		getMe: function(onCompleteCallback){
			
			FB.api('/me', function(response) {
				
				if (onCompleteCallback)	onCompleteCallback(response);
				
			});
		
		},
		
		isLoggedIn:function(){
			return FB.getSession();
		},
		
		uid:function(){
			// Assumed to only be called when logged in
			return FB.getSession().uid;
		},
		
		
		// Shows the Publish to Stream dialog
		showPublishToStreamDialog: function(options){
			
			// Default settings
			var settings = { 
				display: '',
				name: 'A name',
				caption: 'A caption',
				description: 'A description',
				linkUrl: this.canvasPageUrl,
				linkTitle: 'Visit site',
				userPrompt: 'Post a message to your wall',
				imageUrl: '',
				onSuccessCallBack: null,
				onFailureCallBack: null
			};
			
			$.extend(settings, options);
			
			// Add image if url passed
			var mediaDetails = [];
			if (settings.imageUrl && settings.imageUrl != ''){
				mediaDetails.push({ 
					'type': 'image', 
					'src': settings.imageUrl, 
					'href': settings.linkUrl
				});
			}
			
			
			// Display the stream.publish dialog
			FB.ui(
				{
					method: 'stream.publish',
					display: settings.display,
					// Always leave this blank for the user to add their personal message
					message: '', 
					attachment: {
						name: settings.name,
						caption: settings.caption,
						description: (settings.description),
						href: settings.linkUrl,
						media: mediaDetails
					},
					action_links: [
						{ text: settings.linkTitle, href: settings.linkUrl }
					],
					user_message_prompt: settings.userPrompt
				},
				function(response) {
					if (response && response.post_id) {
						if (settings.onSuccessCallBack) settings.onSuccessCallBack(response);
					} 
					else {
						if (settings.onFailureCallBack) settings.onFailureCallBack(response);
					}
				}
			);
				
		},
		
		
		// Update a user's Facebook status.
		// The user must have granted the publish_to_stream extended permission
		updateStatus: function(statusText, onSuccessCallBack, onErrorCallBack){
						
			FB.api('/me/feed', 'post', { message: statusText }, function(response) {
        if (!response || response.error) {
					if (onErrorCallBack) onErrorCallBack(response);
        } 
				else {
					if (onSuccessCallBack) onSuccessCallBack(response);
				}
			});
			
		}
	
	}
	
})();
