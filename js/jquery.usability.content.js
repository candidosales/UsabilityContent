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

const lt   = '<';
const lte  = '<=';
const gt   = '>';
const gte  = '>=';
const eq   = '==';
 
(function($){
	
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
				$(this).css('background','red');
				if($(this).attr('age')!="" && $(this).attr('age')!='null'){
					//alert("Idade: "+$.uc.getAge()+"\nTexto: "+$.uc.getAge()+$(this).attr('age')+"\n Eval: "+eval($.uc.getAge()+$(this).attr('age')));
					if(!eval($.uc.getAge()+$(this).attr('age'))){
						$(this).remove();
					}
				}
			});
		},
		
		//Melhorar a legibilidade através da idade
		improveReadabilityThroughAge:function(){
		
			var arrayAges = [30,40,50,60];
			var arrayCalculateFont = [1.1, 1.2, 1.3, 1.4];
			var arrayCalculateLine = [1.3, 1.4, 1.5, 1.6];
			
			$('html, div, p, a').each(function(i){
				var currentFontSize  = $(this).css('font-size');
				var currentLineHeight  = $(this).css('line-height');
				
				var currentFontSizeNum = parseFloat(currentFontSize, 10);
				var currentLineHeightNum = parseFloat(currentLineHeight, 10);
				
				var tam = arrayAges.length;
				var newFontSize, newLineHeight, i = 0;
				
				for (i=0;i<=tam;i++){
					if(arrayAges[i] > $.uc.getAge(){
						newFontSize = currentFontSizeNum * arrayCalculateFont[i-1];
						newLineHeight = currentLineHeightNum * arrayCalculateLine[i-1];
						i = tam + 1;
					}
				}
				
				
				
				$(this).css('font-size', newFontSize+"px");
				$(this).css('line-height', newLineHeight+"px");
			});
		},
			
	}//Fim UsabilityContent
	
})( jQuery );