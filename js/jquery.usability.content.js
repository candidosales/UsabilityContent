/**
 * UsabilityCandido Library v0.1.2
 * http://usabilitycandido.com/
 *
 * Copyright 2011, Cândido Sales Gomes
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://usabilitycandido.com/
 *
 *
 * Date: Wed Apr 31 11:38:23 2011 -0400
 */

(function($){

	$.fn.showContentByGenderAndAge = function (options) {
		if(options){
			if(options.age)
				this.attr('age',options.age);
			if(options.gender)
				this.attr('gender',options.gender);
		}
	}
	
	jQuery.uc = {
		//Idade do usuário
		age: null,
		//Gênero do usuário
		gender: null,
		//Caminho padrão do CSS
		path: null,
		//Nome do arquivo do CSS Masculino
		cssMale: null,
		//Nome do arquivo do CSS Masculino para ser utilizado na função addStyleByGender
		cssAddMale: null,
		//Nome do arquivo do CSS Feminino
		cssFemale: null,
		//Nome do arquivo do CSS Feminino para ser utilizado na função addStyleByGender
		cssAddFemale: null,
		
		//Inicializa o plugin
		init: function(options){
			this.age = options.age;
			this.gender = options.gender;
			this.path = options.path;
			this.cssMale = options.cssMale;
			this.cssAddMale = options.cssAddMale;
			this.cssFemale = options.cssFemale;
			this.cssAddFemale = options.cssAddFemale;
		},
		
		//Getters e Setters
		getGender: function(){
			return this.gender;
		},
		setGender: function(gender){
			this.gender = gender;
		},
		
		getAge: function(){
			return this.age;
		},
		setAge: function(age){
			this.age = age;
		},
			
	    //Substituir o CSS de acordo com o sexo - ok
		replaceStyleByGender:function(){
			if($.uc.getGender()=='male'){
				$("link[rel=stylesheet]").attr({href : this.path+this.cssMale,id:"link_male",gender:"male"});
				return '1';
			}else if($.uc.getGender()=='female'){
				$("link[rel=stylesheet]").attr({href : this.path+this.cssFemale,id:"link_female",gender:"female"});
				return '2';
			}
		},
		
		
		//Adicionar o CSS de acordo com o sexo
		addStyleByGender:function(){
			if($.uc.getGender()=='male'){
				//Verifica se já existe o CSS na página
				if($("#link_male").attr('href')!='/styles/style.css'){
					$("link[rel=stylesheet]").after('<link id="link_male_add" href="'+this.path+this.cssAddMale+'" rel="stylesheet" type="text/css" media="all">');
				}
			}else if($.uc.getGender()=='female'){
				if($("#link_female").attr('href')!='/styles/style.female.css'){
					$("link[rel=stylesheet][id=link_male]").after('<link id="link_female_add" href="'+this.path+this.cssAddFemale+'" rel="stylesheet" type="text/css" media="all">');
				}
			}
		},
		
		//Apresenta o Conteúdo de acordo com o sexo na classe específicada
		showContentByGenderThroughClass:function(){
			if($.uc.getGender()=='male'){
				$('*.male').show();
				$('*.female').remove();
			}else if($.uc.getGender()=='female'){
				$('*.male').remove();
				$('*.female').show();
			}
		},
		
		//Apresenta o Conteúdo de acordo com o sexo na tag específicada
		showContentByGenderThroughTag:function(){
				
			if($.uc.getGender()=='male'){
				$('*[gender="male"]').show();
				$('*[gender="female"]').remove();
			}else if($.uc.getGender()=='female'){
				$('*[gender="male"]').remove();
				$('*[gender="female"]').show();
			}
		},
		
		//Apresenta o Conteúdo de acordo com a idade e condição na tag específicada
		showContentByAgeThroughTag:function(){
			$('*[age]').each(function(i){
				if($(this).attr('age')!="" && $(this).attr('age')!='null'){
					alert("Idade: "+$.uc.getAge()+"\nTexto: "+$.uc.getAge()+$(this).attr('age')+"\n Eval: "+eval($.uc.getAge()+$(this).attr('age')));
					if(!eval($.uc.getAge()+$(this).attr('age'))){
						$(this).remove();
					}
				}
			});
		},
		
		//Melhorar a legibilidade através da idade
		improveReadabilityThroughAge:function(){
		
			var arrayAges = [30,40,50,60], arrayCalculateFont = [1.1, 1.2, 1.3, 1.4], arrayCalculateLine = [1.3, 1.4, 1.5, 1.6];
			
			var tam = arrayAges.length;
			var newFontSize  = 0, newLineHeight = 0, x = 0;
			
				for (x = 0 ; x < tam ; x++){
					if(arrayAges[x] > $.uc.getAge()){
						newFontSize = arrayCalculateFont[x-1];
						newLineHeight = arrayCalculateLine[x-1];
						x = tam + 1;
					}
				}
			//Se os valores indefinidos , quer dizer que o usuário tem idade menor que 30
				if(newFontSize != undefined && newLineHeight != undefined){

					$('html, div, p, a, span').each(function(i){

						var currentFontSizeNum = parseFloat($(this).css('font-size'), 10);
						var currentLineHeightNum = parseFloat($(this).css('line-height'), 10);
						
						//alert("Current Font-size: "+currentFontSizeNum+"\nCurrent Line-height: "+currentLineHeightNum);
						
						currentFontSizeNum = currentFontSizeNum * newFontSize;		
						currentLineHeightNum =	currentLineHeightNum * newLineHeight;
							
						$(this).css('font-size', currentFontSizeNum+"px");
						$(this).css('line-height', currentLineHeightNum+"px");
					});
				}
		},
		
		blockingInappropriateContent:function(){
	
			if($.uc.getAge() < 18){
				var arrayWords = ['xvideos','xvideos.com','porn','porno','sexo','anal'];
				
				var keywords = $('meta[name=keywords]').attr("content").toLowerCase();
				var title = $('title').text().toLowerCase();
				
				var arrayKeywords = keywords.split(',');
				var tam  = arrayKeywords.length;

				var x = 0;
				
				//Se o elemento ainda não foi inserido, vamos forçar a inserção
				var forcarBloqueio = true;
				while(forcarBloqueio){
					if ($('#blocking').length == 0){
						for (x = 0 ; x < tam ; x++){
							if (new RegExp('^(' + arrayWords.join('|') + ')$').test(arrayKeywords[x])){
								$.uc.insertBlock();
								x = tam + 1;
							}else{
								forcarBloqueio =  false;
							}			
						}
					}else{
						forcarBloqueio =  false;
					}
				}
			}
		},

		insertBlock:function(){
		
			$('body').prepend($('<div id="blocking" style="line-height:42px;margin: -10px 0 0;width:100%;height:100%;z-index:999;background:#000;padding:12% 0 0 0;font-weight:bold;color:#fff;text-align:center;display:none;clear:both;position: absolute;overflow:hidden;font-size:30px;">'+
				$.uc.getSvgBlock()+
				'<p style="display:none">Desculpe este conteúdo não pode ser visualizado.</p>'+
				'<p class="gray" style="display:none;color:#edd669;font-size:26px;text-shadow: 1px 1px 1px #7a717a;filter: dropshadow(color=#7a717a, offx=1, offy=1); ">O conteúdo desta página é inadequado para você.</p>'+
			'</div>'));
			
			$('#blocking').fadeIn(500, function(){
				$('#blocking p').fadeIn(1000);
				$('#blocking ~ *').remove();
			});
		},
		
		getSvgBlock:function(){
			return 	'<svg height="144.407" id="svg1609" inkscape:version="0.40" sodipodi:docbase="/mnt/donnees/09-Mes_images/Travaux/Travaux vectoriel/pictogrammes/sécu SVG/Avertissement" sodipodi:docname="DangerGeneral.svg" sodipodi:version="0.32" width="156.262" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink">'+
				  '<metadata>'+
				   '<rdf:RDF xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'+
					  '<cc:Work rdf:about="">'+
						'<dc:title>advertising</dc:title>'+
					   '<dc:description></dc:description>'+
						'<dc:subject>'+
						  '<rdf:Bag><rdf:li></rdf:li><rdf:li>caution</rdf:li><rdf:li>security</rdf:li><rdf:li>warning</rdf:li><rdf:li>signs_and_symbols</rdf:li><rdf:li>sign</rdf:li></rdf:Bag></dc:subject>'+
						'<dc:publisher> <cc:Agent rdf:about="http://www.openclipart.org"><dc:title>yves GUILLOU</dc:title></cc:Agent></dc:publisher><dc:creator>'+

						' <cc:Agent>  <dc:title>yves GUILLOU</dc:title>'+
					   ' </cc:Agent></dc:creator>'+
					   ' <dc:rights><cc:Agent>'+
						 ' <dc:title>yves GUILLOU</dc:title></cc:Agent>'+

					   ' </dc:rights> <dc:date></dc:date> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><cc:license rdf:resource="http://web.resource.org/cc/PublicDomain"/> <dc:language>en</dc:language></cc:Work>'+
					 ' <cc:License rdf:about="http://web.resource.org/cc/PublicDomain">'+

						'<cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/><cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/><cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>'+
					  '</cc:License> </rdf:RDF></metadata>'+
				  '<sodipodi:namedview bordercolor="#666666" borderopacity="1.0" id="base" inkscape:current-layer="svg1609" inkscape:cx="52.528651" inkscape:cy="59.396977" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:window-height="929" inkscape:window-width="1291" inkscape:window-x="140" inkscape:window-y="75" inkscape:zoom="4.9119411" pagecolor="#ffffff"/>'+
				  '<defs id="defs1610"> <marker id="ArrowEnd" markerHeight="3" markerUnits="strokeWidth" markerWidth="4" orient="auto" refX="0" refY="5" viewBox="0 0 10 10">'+

					 ' <path d="M 0 0 L 10 5 L 0 10 z" id="path1612"/> </marker>'+
					'<marker id="ArrowStart" markerHeight="3" markerUnits="strokeWidth" markerWidth="4" orient="auto" refX="10" refY="5" viewBox="0 0 10 10">'+
					'  <path d="M 10 0 L 0 5 L 10 10 z" id="path1614"/> </marker>'+
				  '</defs>'+
				 ' <g id="g1615">'+
					'<path d="M 12.473000,121.08200 C 11.559033,122.84329 10.481800,124.49000 10.481700,126.42300 L 10.490728,127.23088 C 10.490728,131.40288 13.756600,133.92500 17.511300,133.92500 L 138.83100,133.92500 C 142.58600,133.92500 145.81986,130.79848 145.81986,126.62648 L 145.78000,125.81500 C 145.78000,123.88200 144.82971,122.20348 143.78900,120.47400 L 83.705600,12.693800 C 81.051000,9.7442300 76.747300,9.7442300 74.092300,12.694200 L 12.473000,121.08200 z " id="path1616" sodipodi:nodetypes="ccccccccccc" style="stroke:#000000; stroke-width:2; fill:#ffffff"/>'+
					'<path d="M 78.703 16.2915L 15.2797 128.128L 76.4667 128.128L 79.3188 128.128L 139.826 128.128L 79.5155 16.2915L 78.703 16.2915z" id="path1617" style="stroke:#000000; stroke-width:4.8516000000000004; stroke-linejoin:round; stroke-linecap:round; fill:#ffcc00"/>'+
				  '</g>'+
				  '<g id="g1618">'+
					'<path d="M 84.366054,45.157900 C 85.289904,46.139400 85.469800,46.370250 85.931700,48.160100 C 86.393600,49.949950 87.405817,53.469087 86.291592,57.462546 C 85.829592,64.390946 86.129850,70.967972 85.856575,77.979383 C 85.583663,84.981490 87.317400,93.426000 79.234100,95.042600 C 77.155600,95.273600 75.077100,93.887900 74.268800,91.924800 C 72.883100,77.837000 71.497500,64.442000 70.111700,50.700600 C 71.266400,47.120900 74.153200,43.656700 77.617500,43.194800 C 81.081800,42.732900 83.442204,44.176400 84.366054,45.157900 z " id="path1619" sodipodi:nodetypes="czczccczz" style="stroke:none; fill:#000000"/>'+
				   ' <path d="M 83.1603 103.357C 86.3936 105.32 86.9709 108.9 86.9709 112.479C 85.5852 115.944 84.0841 119.985 79.5806 119.985C 76.8092 119.87 74.1533 119.292 72.3057 117.214C 71.151 113.057 68.4951 108.784 72.3057 105.32C 75.1926 101.278 79.2341 102.318 83.1603 103.357z" id="path1620" style="stroke:none; fill:#000000"/>'+
				  '</g>'+
				'</svg>';
		},
			
	}//Fim UsabilityContent
	
})( jQuery );