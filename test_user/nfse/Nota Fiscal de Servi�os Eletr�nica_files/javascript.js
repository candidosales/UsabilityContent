function testeabc(a, b){
    alert ("teste");
}

function disableEmail()
	{
	    document.getElementById("rEmailPara").disabled  = true;
	    document.getElementById("rEmailAssunto").disabled  = true
		document.getElementById("rEmailCorpo").disabled  = true
		document.getElementById("btnEnviarEmail").disabled  = true
	}

function enableEmail()
	{
	    document.getElementById("rEmailPara").disabled  = false;
	    document.getElementById("rEmailAssunto").disabled  = false;
		document.getElementById("rEmailCorpo").disabled  = false;
		document.getElementById("btnEnviarEmail").disabled  = false;
	}

function contador(campo){
	if(fraseSemEspaco(campo) == 'S'){
		alert('Existe ao menos uma palavra muito grande nesse texto! Utilize a barra de espaços.')
		document.getElementById(campo.id).value = '';
	}
	else{
		if((1500-campo.value.length) <= 0){
		   alert('Limite de caracteres atingido!');
		   campo.value = campo.value.substr(0,1500);
		}
	}
	document.getElementById("qtd").value = 1500-campo.value.length
}

function validaTamanho(obj){
	if(fraseSemEspaco(obj) == 'S'){
		alert('Existe ao menos uma palavra muito grande nesse texto! Utilize a barra de espaços.')
		document.getElementById(obj.id).value = '';
	}
	else{
		if(obj.value.length > obj.maxlength){
			alert('Limite de caracteres atingido!');
			document.getElementById(obj.id).value = obj.value.substr(0,obj.maxlength);
		}
	}
}

function Trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}

function fraseSemEspaco(campo){
	var erro = 'N';
	var vet = campo.value.split(" ");
	for(i=0;i<vet.length;i++){
		if(vet[i].length > 50){
			erro = 'S';
		}
	}
	
	return erro;
}

function confirmacao(visualizarNota, id_nota_fiscal, op, motivo){
    var motivo = motivo.value;
    // mantis: 7241
    if (confirm("Deseja confirmar o cancelamento?"))
    	
    			    	document.location.href='action/notaFiscal/consultarNotaFiscalResult.php?verNota='+visualizarNota+'&id_nota_fiscal='+id_nota_fiscal+'&op='+op+'&motivo='+motivo; 
    	// top.rodape.document.location='action/notaFiscal/consultarNotaFiscalResult.php?verNota='+visualizarNota+'&id_nota_fiscal='+id_nota_fiscal+'&op='+op;

	else
        return false;
}



function confirmacaoAdm(visualizarNota, id_nota_fiscal, op, motivo){
    var motivo = motivo.value;
  // mantis: 7241
    if (confirm("Deseja confirmar o cancelamento?"))    	
    	document.location.href='action/notaFiscal/cancelarNotaFiscalAdmResult.php?verNota='+visualizarNota+'&id_nota_fiscal='+id_nota_fiscal+'&op='+op+'&motivo='+motivo; 
	else
        return false;
}

// mantis: 7241
function confirmacaoReativacao(visualizarNota, id_nota_fiscal, op){

    if (confirm("Deseja confirmar a reativação?")){    	
    	document.location.href='action/notaFiscal/reativarNotaFiscalAdmResult.php?verNota='+visualizarNota+'&id_nota_fiscal='+id_nota_fiscal+'&op='+op; 
    }else{
        return false;
    }
}


function confirmaCancelamento(id){
    if (confirm("Deseja realmente cancelar esta guia?"))
		top.principal.document.location='action/emitirGuiaNota.php?btnCancelarGuia=Estornar Guia&id_guia='+id; 
    else
        return false;
}

function confirmaCancelamentoTur(id){
    if (confirm("Deseja realmente estornar esta guia?"))
		top.principal.document.location='action/emitirGuiaNotaTur.php?btnCancelarGuia=Estornar%20Guia&id_guia='+id; 
    else
        return false;
}

function trocaPeriodoExportacao() {
	if (document.getElementsByName("rPeriodoEN")[1].checked == true) {
	 	document.getElementsByName("rMesCompetenciaEN")[0].disabled = true;	
	 	document.getElementsByName("rAnoCompetenciaEN")[0].disabled = true;	 	
		document.getElementsByName("rDataInicioEN")[0].disabled = false;
		document.getElementsByName("rDataFimEN")[0].disabled = false;			
	} else {
	 	document.getElementsByName("rMesCompetenciaEN")[0].disabled = false;	
	 	document.getElementsByName("rAnoCompetenciaEN")[0].disabled = false;	 	
		document.getElementsByName("rDataInicioEN")[0].disabled = true;
		document.getElementsByName("rDataFimEN")[0].disabled = true;			
	}
}


function trocaPeriodoCredito() {
	if (document.getElementsByName("rPeriodoCC")[1].checked == true) {
	 	document.getElementsByName("rMesCompetenciaCC")[0].disabled = true;	
	 	document.getElementsByName("rAnoCompetenciaCC")[0].disabled = true;	 	
		document.getElementsByName("rDataInicioCC")[0].disabled = false;
		document.getElementsByName("rDataFimCC")[0].disabled = false;			
	} else {
	 	document.getElementsByName("rMesCompetenciaCC")[0].disabled = false;	
	 	document.getElementsByName("rAnoCompetenciaCC")[0].disabled = false;	 	
		document.getElementsByName("rDataInicioCC")[0].disabled = true;
		document.getElementsByName("rDataFimCC")[0].disabled = true;			
	}
}


function controlaSelecaoTomador(valor, ufEx){
	if (ufEx != "s"){
		if(valor==""){
			document.getElementById("rTomCpfCnpj").readOnly = false;
			document.getElementById("rTomCpfCnpj").className = "campo";
			document.getElementById("rTomCpfCnpj").value = '';
			document.getElementById("rTomCpfCnpj").focus();
		}
		else{
			document.getElementById("rTomCpfCnpj").readOnly = true;
			document.getElementById("rTomCpfCnpj").className = "campo disabled";
			document.getElementById("rTomCpfCnpj").value = '';
		}
	}
}

function preencheTomador(f,obj){
	document.getElementById(obj.id).value = obj.value;
	document.getElementById("rAntesGravarTom").value = 'S';
	f.submit();
}

function preencheTomadorNI(f,obj){
	if (obj.checked==true) {
		document.getElementById("rAntesGravarTomNI").value = 'S';
		f.submit();	
	} else {
		document.getElementById("rAntesGravarTomNI").value = 'N';
		f.submit();			
	}

}

function trocaUf(f,obj){
	
	if(f.name == "form_credenciamento"){
		var uf = $("#txtuf").val();
		if(uf != ""){
			$.ajax({
			  url: "includes/classes/avulsa/ajaxCredenciamentoAvulso.php",
			  data: "uf="+uf+"&combo=combo",
			  success: function(data){
			   // alert(data);
				$("#txtcidade").remove();
				$("#rCidExt").remove();
				
			   $("#id").html($("#id").html() + data);
			   $("#txtuf").attr('value',uf).attr('selected',true);
			  }
			});
		}
	}else{
		document.getElementById("rAntesGravar").value = 'S';
		document.getElementById("rAntesGravarCidade").value = 'N';
		// mantis:7503
		try {
			document.getElementById("ufParaTrocar").value = obj.value;
		} catch (err) {
			// do nothing
		}
		document.getElementById(obj.id).value = obj.value;
		f.submit();
	}
}

function trocaCidade(f,obj){
	document.getElementById("rAntesGravar").value = 'S';
	document.getElementById("rAntesGravarCidade").value = 'S';
	document.getElementById(obj.id).value = obj.value;
	f.submit();
}

function trocaRecolhimento(f,obj){
	document.getElementById("rAntesGravar").value = 'S';
	document.getElementById("rAntesGravarRecolhimento").value = 'S';
	document.getElementById(obj.id).value = obj.value;
	f.submit();
}

function trocaTributacao(f,obj){
	document.getElementById("rAntesGravar").value = 'S';
	document.getElementById("rAntesGravarTributacao").value = 'S';
	document.getElementById(obj.id).value = obj.value;
	f.submit();
}

function trocaIntermediacao(f,obj){
	document.getElementById("rAntesGravar").value = 'S';
	document.getElementById("rAntesGravarIntermediacao").value = 'S';
	document.getElementById(obj.id).value = obj.value;
	f.submit();
}

function controlaSelecaoAtividade(valor,page){
    valor = valor.substr(1,1000);
    
   
    
	if(valor != ""){
		if(valor == "0"){
			document.location=page+'?todasAtividades=S';
		}
		else{
			if(page == 'prestador/configurarPerfil.php'){
				document.getElementById("rAntesGravar").value = 'S';
				document.getElementById("valor").value = valor;
				document.forms["configurarPerfil"].submit();
			}
			else
				parent.rodape.location='action/'+page+'?achaAliquota=S&valor='+valor;
		}
	}
	else{
		document.getElementById("rAliquota").value = '';
		document.getElementById("rAliquota").readOnly = false;
		document.getElementById("rAliquota").className = "campo";
		document.getElementById("rDescrServ").value = '';
		document.getElementById("rCodServ").value = '';
	}
}

function exibirDescricao(rowName){
	var estado = document.getElementById("rItemDeducao").checked;
	var table = document.getElementById("item");

	for (var i = 0; i < table.rows.length; i++) {
		if(table.rows[i].id == rowName){
			if(estado == true){
				table.rows[i].cells[1].innerHTML = '<select name="rItemDescricao" id="rItemDescricao" class="campo" style="width:330px;"><option value="Despesas com Materiais">Despesas com Materiais</option><option value="Despesas com Subempreitada">Despesas com Subempreitada</option></select>';
			}
			else{
				table.rows[i].cells[1].innerHTML = '<textarea name="rItemDescricao" cols="62" rows="1" id="rItemDescricao" class="campo"></textarea>';
			}
		}
	}

}

function calculaValorTotal(){
	// qtd =
	// this.trocaDecimal(document.getElementById("rItemQtd").value,',','');
	// qtd = this.trocaDecimal(qtd,'.','');
	// document.getElementById("rItemQtd").value = qtd;
	
	// val =
	// this.trocaDecimal(document.getElementById("rItemValUnit").value,',','.');
	// val = this.moeda2float(document.getElementById("rItemValUnit").value);
	qtd = document.getElementById("rItemQtd").value;
	val = document.getElementById("rItemValUnit").value;

	if((qtd != "") && (val != "")){
		tot = qtd * val;
		if(tot.toString() != "NaN")			
			document.getElementById("rItemValTotal").value = tot;// this.float2moeda(tot);
		else
			document.getElementById("rItemValTotal").value = "0,00";
			
			// document.getElementById("rItemValTotal").value =
			// this.number_format(tot,2,",","");
			
			// VALOR DO ISS B?SICO
			/*
			 * aliq =
			 * this.trocaDecimal(document.getElementById("rAliquota").value,',','.');
			 * if(aliq != ""){ iss = tot * (aliq / 100);
			 * document.getElementById("rItemValIss").value =
			 * this.number_format(iss,2,",",""); } else{
			 * document.getElementById("rItemValIss").value = "0,00"; }
			 */
	}
	else{
		document.getElementById("rItemValTotal").value = "0,00";
	}
	// document.getElementById("rItemValUnit").value = this.float2moeda(val);
	// document.getElementById("rItemValUnit").value =
	// this.trocaDecimal(val,'.',',');
}

function recalculaValoresIss(){
	totNota = this.trocaDecimal(document.getElementById("rValTotNota").value,',','.');
	totDed = this.trocaDecimal(document.getElementById("rValTotDed").value,',','.');
	aliq = this.trocaDecimal(document.getElementById("rAliquota").value,',','.');

	if((totNota != "") && (totDed != "") && (aliq != "")){
		tot = (totNota - totDed) * (aliq / 100);
		if(tot < 0)
			tot = 0;
		if(tot.toString() != "NaN")
			document.getElementById("rValTotIss").value = this.number_format(tot,2,",","");
	}
}

function excluirItem(itemId,f){
	document.getElementById("itemId").value = itemId;
	document.getElementById("botaoApagar").value = 'S';
	f.submit();
	// parent.rodape.location='action/notaFiscal/emitirNotaFiscalPasso6.php?btnExcluir=S&itemId='+itemId;
}

function excluirDeducao(page, deducaoId){
	parent.rodape.location='action/notaFiscal/'+page+'?btnExcluir=S&deducaoId='+deducaoId;
}
/*
 * function mudaDeducoes(tela){ document.getElementById("telaDeducao").value =
 * tela; }
 */

function editarSubUsuario(subUsuarioId){
	parent.rodape.location='action/usuario/cadastrarSubUsuario.php?btnEditar=S&subUsuarioId='+subUsuarioId;
}

function editarSubUsuarioAdm(UsuarioId){
	parent.rodape.location='action/usuario/cadastrarSubUsuarioAdm.php?btnEditar=S&subUsuarioId='+UsuarioId;
}

function desvincSubUsuarioAdm(UsuarioId){
	var confirmar = confirm('Deseja desvincular este SubUsuário do grupo de usuários?');
	if (confirmar)
		parent.rodape.location='action/usuario/desvincularSubUsuarioAdm.php?subUsuarioId='+UsuarioId;
}

function limpar(){
	document.getElementById("rSubUsuarioNome").value = "";
}

function marcaImposto(imposto,marcacao){
    aliquota = this.trocaDecimal(document.getElementById("rAliq"+imposto).value,',','.');
    
	if(marcacao == true){
		this.recalculaAliquota(imposto,aliquota);
	}
	else{
		document.getElementById("rVal"+imposto).value = "0,00";
	}
}

function recalculaAliquota(imposto,aliquota){
	// valorBase =
	// this.trocaDecimal(document.getElementById("rValTotServ").value,',','.');
	aliquota = this.trocaDecimal(aliquota,',','.');
	// valorBase =
	// this.moeda2float(document.getElementById("rValTotServ").value);
	valorBase = this.moeda2float(document.getElementById("rValTotNota").value);
	// aliquota = this.moeda2float(aliquota);
	// alert(aliquota);
	valor = valorBase * (aliquota / 100);
	
	if(valor < 0)
		valor = 0;
	if(valor.toString() != "NaN"){
		if(document.getElementById("rTem"+imposto).checked == true)
			document.getElementById("rVal"+imposto).value = this.float2moeda(valor);
			// document.getElementById("rVal"+imposto).value =
			// this.number_format(valor,2,",","");
		else
			document.getElementById("rVal"+imposto).value = "0,00";
	}
}

function trocaDecimal(valor,sai,entra){
	if(valor != ""){
		return valor.replace(sai,entra);
	}
	else
		return '';
}

function number_format (number, decimals, dec_point, thousands_sep)
{
  var exponent = "";
  var numberstr = number.toString ();
  var eindex = numberstr.indexOf ("e");
  if (eindex > -1)
  {
    exponent = numberstr.substring (eindex);
    number = parseFloat (numberstr.substring (0, eindex));
  }
  
  if (decimals != null)
  {
    var temp = Math.pow (10, decimals);
    number = Math.round (number * temp) / temp;
  }
  var sign = number < 0 ? "-" : "";
  var integer = (number > 0 ? 
      Math.floor (number) : Math.abs (Math.ceil (number))).toString ();
  
  var fractional = number.toString ().substring (integer.length + sign.length);
  dec_point = dec_point != null ? dec_point : ".";
  fractional = decimals != null && decimals > 0 || fractional.length > 1 ? 
               (dec_point + fractional.substring (1)) : "";
  if (decimals != null && decimals > 0)
  {
    for (i = fractional.length - 1, z = decimals; i < z; ++i)
      fractional += "0";
  }
  
  thousands_sep = (thousands_sep != dec_point || fractional.length == 0) ? 
                  thousands_sep : null;
  if (thousands_sep != null && thousands_sep != "")
  {
	for (var i = integer.length - 3; i > 0; i -= 3)
      integer = integer.substring (0 , i) + thousands_sep + integer.substring (i);
  }
  
  return sign + integer + fractional + exponent;
}

function checkCompetencia(field) {
	DateValue = field.value; 
	
	/* Deletando todos os caracteres exceto o 0..9 */ 
	DateValue = DateValue.replace(/[^0-9]/gi, '');
	var modificado = true;
	
	if(DateValue.length == 6)
		DateValue = DateValue.substr(0,2)+"/"+DateValue.substr(2, 5);

	else if(DateValue.length == 5)
		DateValue = "0"+DateValue.substr(0,1)+"/"+DateValue.substr(1, 4);

	else if(DateValue.length == 4)
		DateValue = DateValue.substr(0,2) + "/20" + DateValue.substr(2,4);

	else if(DateValue.length == 3)
		DateValue = "0" + DateValue.substr(0,1) + "/20" + DateValue.substr(1,2);

	else
		modificado = false;
	
	if(modificado == true){
		field.value = DateValue;
		
		/*
		 * separado = DateValue.split('/');
		 * 
		 * hoje = new Date(); if((separado[0] < 1) || (separado[0]) > 12)
		 * alert("Verifique Mes de Competencia"); else if((separado[1] < 1980) ||
		 * (separado[1] > hoje.getFullYear())) alert("Verifique Mes de
		 * Competencia");
		 */
	}
}


function marcaItens(){
    var status="";
    for (i=0; i < document.forms[0].elements.length; i++){ 
    	if (document.forms[0].elements[i].checked == true) {
	    	document.forms[0].elements[i].checked = false;
	    } else {
		    document.forms[0].elements[i].checked = true;
	    }
    	
    	if(document.forms[0].elements[i].disabled){
    		document.forms[0].elements[i].checked = false;
    	}
    	
        // document.emitirGuiaNota.elements[i].checked=true;
    } 
}

function desmarcaGrupo(){
    for (i=0; i < document.forms[0].elements.length; i++){ 
		document.forms[0].elements[i].checked=false;
    }
}

function checkDate(field) {
	var checkstr = "0123456789"; 

	var DateField = field; 
	var Datevalue = ""; 
	var DateTemp = ""; 
	var seperator = "/"; 
	var day; 
	var month; 
	var year; 
	var leap = 0; 
	var err = 0; 
	var i; 
	err = 0; 
	DateValue = DateField.value; 
	
	/* Deletando todos os caracteres exceto o 0..9 */ 
	for (i = 0; i < DateValue.length; i++){ 
		if (checkstr.indexOf(DateValue.substr(i,1)) >= 0)
			DateTemp = DateTemp + DateValue.substr(i,1); 
	}
	DateValue = DateTemp; 
	
	if(DateValue.length == 0)
		err = 20;
	
	if (DateValue.length > 8)
		err = 19;
	
	/* Exectutando a data para 8 digitos - string */ 
	/* if entrada do ano com 2-digitos / exemplo 20xx */ 
	if (DateValue.length == 6)
		DateValue = DateValue.substr(0,4) + '20' + DateValue.substr(4,2); 
		
		
	/* Se o ano for errado = 0000 */ 
	year = DateValue.substr(4,4); 
	if (year == 0)
		year = 2007;
	
	/* Validando o mes */ 
	month = DateValue.substr(2,2); 
	if (month < 1)
		month = "01";

	if (month > 12)
		month = 12;
	
	/* Validando o dia */ 
	day = DateValue.substr(0,2); 
	if (day < 1)
		day = "01";
	
	/* Validando ano Bissexto / fevereiro / dia */
	if ((year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0))
		leap = 1;
	if ((month == 2) && (leap == 1) && (day > 29))
		day = 29;
	if ((month == 2) && (leap != 1) && (day > 28))
		day = 28;
	
	
	/* Validando o mes */ 
	if ((day > 31) && ((month == "01") || (month == "03") || (month == "05") || (month == "07") || (month == "08") || (month == "10") || (month == "12")))
		day = 31; 
	if ((day > 30) && ((month == "04") || (month == "06") || (month == "09") || (month == "11"))) 
		day = 30; 
		
	/* if 00 houvendo entrada, com erros */ 
	if ((day == 0) && (month == 0) && (year == 00)){
		err = 18;
		day = ""; 
		month = ""; 
		year = ""; 
		seperator = "";
	}
	
	/* if sem erros, escrevo a data completa no Input-Field (e.x. 13/12/2001) */ 
	if (err == 0) 
		DateField.value = day + seperator + month + seperator + year; 
	else
		DateField.value = "";
}

function getCEP(sistema, cep, tipoLogradouro, logradouro, numero, bairro, cidade, estado, tipobairro, complemento){
	top.topo.location = '../NotaFiscal/action/carregalist_cidade.php?uf='+estado+'&campouf=rTomUf&campo=rTomCidadeCodigo&cid='+cidade;
	document.getElementsByName("rAntesGravar")[0].value = 'S';
	document.getElementsByName("rTomCep")[0].value = cep;
	document.getElementsByName("rTomUf")[0].value = estado.toUpperCase();
	document.getElementsByName("rTomCidade")[0].value = cidade;
	document.getElementsByName("rTomTipoLogradouro")[0].value = tipoLogradouro.toUpperCase();
	document.getElementsByName("rTomLogradouro")[0].value = logradouro;
	document.getElementsByName("rTomNumero")[0].value = numero;
	document.getElementsByName("rTomBairro")[0].value = bairro;		
	document.getElementsByName("rTomTipoBairro")[0].value = tipobairro.toUpperCase();				
	document.getElementsByName("rTomComplemento")[0].value = complemento;			
}

function trocaPeriodo() {
	if (document.getElementsByName("rPeriodoCN")[1].checked == true) {
	 	document.getElementsByName("rMesCompetenciaCN")[0].disabled = true;	
	 	document.getElementsByName("rAnoCompetenciaCN")[0].disabled = true;	 	
		document.getElementsByName("rDataInicioCN")[0].disabled = false;
		document.getElementsByName("rDataFimCN")[0].disabled = false;			
	} else {
	 	document.getElementsByName("rMesCompetenciaCN")[0].disabled = false;	
	 	document.getElementsByName("rAnoCompetenciaCN")[0].disabled = false;	 	
		document.getElementsByName("rDataInicioCN")[0].disabled = true;
		document.getElementsByName("rDataFimCN")[0].disabled = true;			
	}
}

function pegaPos(obj){
  var topo = obj.offsetTop + obj.offsetHeight;
  objY=obj;
  while((objY = objY.offsetParent) != null) topo += objY.offsetTop;
  
  var esquerda = obj.offsetLeft + obj.offsetWidth;
  objX=obj;
  while((objX = objX.offsetParent) != null) esquerda += objX.offsetLeft;
  var retorno = Array(topo,esquerda);
  return retorno;
}


var timerID = null;
function abreFecha(bloco){
	
	if(document.getElementById(bloco).style.position == 'absolute'){
	    document.getElementById(bloco).style.visibility = 'visible';
	    document.getElementById(bloco).style.display = 'inline';
	    // alert(document.getElementById(bloco).style);
	    // window.clearTimeout(timerID);
    	document.getElementById(bloco).style.position = 'relative';
    	var src = document.getElementById(bloco+"Seta").src;
    	document.getElementById(bloco+"Seta").src = src.replace("down","up");
	    // document.getElementById(bloco+"Seta").src =
		// "../NotaFiscal/imagens/setas_up.gif";
	}else{
	    document.getElementById(bloco).style.visibility = 'hidden';
	    document.getElementById(bloco).style.display = 'none';
	    document.getElementById(bloco).style.position = 'absolute';
	    var src = document.getElementById(bloco+"Seta").src;
    	document.getElementById(bloco+"Seta").src = src.replace("up","down");
	   // document.getElementById(bloco+"Seta").src =
		// "../NotaFiscal/imagens/setas_down.gif";
	}
	
	if(bloco == "dadosItemNota"){
		bloco2 = "valoresNota";
		abreFecha(bloco2);
	}

}

function buscarCep(cep) {
	parent.rodape.location='action/notaFiscal/consultarCep.php?cep='+cep.value;
}

function cpfcnpj(obj, evento){
	var valida;
	soNumero(obj);
	if(obj.value.replace(/[^0-9]/gi, '').length == 11){
		valida = validaCPF(obj.value);
		if(valida){
			alert(valida);
			obj.value='';
			obj.focus();
		}else{
			FormataCPFDSF(obj, evento);
            return 'OK';
		}
	}
	else {
		if(obj.value.replace(/[^0-9]/gi, '').length == 14){
			valida = validaCNPJ(obj.value);
			if(valida){
				alert(valida);
				obj.value='';
				obj.focus();
			}else{
				FormataCNPJDSF(obj, evento);
                return 'OK';
			}
		}
		else {
			/*
			 * if(obj.value.replace(/[^0-9]/gi, '').length > 0){ alert("CPF/CNPJ
			 * com formato invalido."); }
			 */
			// obj.value = '';
		}
	}
}

function FormataCEP(obj1){
	cep = obj1.value.replace(/[^0-9]/gi, '');
	if(cep.length == 8){
		cep = cep.substr(0,2)+cep.substr(2,3)+"-"+cep.substr(5,3);
		obj1.value = cep;
		return cep;
	}
	else{
		alert("CEP Inválido!");
		obj1.value = '';
		obj1.focus();
		return true;
	}
}


function valida(){

		if(document.form_credenciamento.tipo_regime.value == 'A'){
			for (i = 0; i < document.form_credenciamento.elements.length; i++) {
				if (document.form_credenciamento.elements[i].name == "atv_principal" && document.form_credenciamento.elements[i].checked) {
					ret = 1;
					break;
				}else{
					ret = 0;
				}
			}
			if (ret == 0){
				alert('É obrigatório indicar uma Atividade como Principal!');
				return false;
			}	

			if (!validarRepLegal(document.form_credenciamento) && document.form_credenciamento.txtcpfcnpj.value.length == 18 && document.form_credenciamento.codCidIni.value != 5403 && document.form_credenciamento.nomeLegal.value == ""){
				alert('É obrigatória a seleção de um Responsável Legal!');
				return false;
			}

			if(document.form_credenciamento.txtcpfcnpj.value.length == 18 && document.form_credenciamento.txtuf.value == 'PI' && document.form_credenciamento.txtcidade.value == 'TERESINA'){
				alert('Não é permitido o credenciamento na NFSe-Avulsa para empresas de Teresina - PI');
				return false;
			}

		}else{
			if (document.form_credenciamento.codCidIni.value == "6291" || document.form_credenciamento.codCidIni.value == "9051" || document.form_credenciamento.codCidIni.value == "7145" || document.form_credenciamento.codCidIni.value == "5869") {
				for (i = 0; i < document.form_credenciamento.elements.length; i++) {
					if (document.form_credenciamento.elements[i].name == "atv_principal" && document.form_credenciamento.elements[i].checked) {
						ret = 1;
						break;
					}else{
						ret = 0;
					}
				}
				if (ret == 0){
					alert('É obrigatório indicar uma Atividade como Principal!');
					return false;
				}		
		
				
			} else {
				if (!validarRepLegal(document.form_credenciamento) && document.form_credenciamento.txtcpfcnpj.value.length == 18 && document.form_credenciamento.codCidIni.value != 5403){
					alert('É obrigatória a seleção de um Responsável Legal!');
					return false;
				}
			}
		}

		if(document.form_credenciamento.txtcpfcnpj.value.length == 18){
			if (document.form_credenciamento.nomeLegal.value == "" && document.form_credenciamento.total_registros0.value == 0 ){
				alert('Adicione o representante para cadastro');
				return (false);
			}
		}

		if (document.form_credenciamento.total_registros1.value == 0 && !document.form_credenciamento.total_registros2){
			alert('Necessário ao menos uma atividade para cadastro');
			return (false);
		}

		validarEmailCred();
		if (!cpfcnpj(document.form_credenciamento.txtcpfcnpj, 'event')){
			alert('CPF/CNPJ deve estar preenchido');
			document.form_credenciamento.txtcpfcnpj.focus();
			return (false);
		}		

		if (Trim(document.form_credenciamento.txtrazaosocial.value) == ""){
			alert('Nome/Razão Social deve estar preenchido');
			document.form_credenciamento.txtrazaosocial.focus();			
			return (false);
		}

		if (Trim(document.form_credenciamento.txtlogradouro.value) == ""){
			alert('Logradouro deve estar preenchido');
			document.form_credenciamento.txtlogradouro.focus();			
			return (false);
		}
		
		// Alteração conforme Mantis 2894 e 3039
		// Nova Iguaçu também não valida o número
		/*
		 * if (eval(Trim(document.form_credenciamento.txtnumero.value)) == "0" ||
		 * document.form_credenciamento.txtnumero.value == ''){
		 * if(document.form_credenciamento.codCidIni.value == 5869 &&
		 * document.form_credenciamento.txtcomplemento.value == ""){
		 * alert('Informar número ou complemento'); return false; }
		 * if(document.form_credenciamento.txtcidade.value != 'CAMPO GRANDE' &&
		 * document.form_credenciamento.codCidIni.value != 5403 &&
		 * document.form_credenciamento.codCidIni.value != 5869){ alert('Número
		 * não pode ser zero'); return (false); } }
		 */
		// mantis:7120
		if ((eval(Trim(document.form_credenciamento.txtnumero.value)) == "0" || document.form_credenciamento.txtnumero.value == '') && document.form_credenciamento.txtcomplemento.value == "") {
			alert('Informar número ou complemento');
			return false;
		}
		if (Trim(document.form_credenciamento.txtnumero.value) == "" && Trim(document.form_credenciamento.txtcomplemento.value) == "" && document.form_credenciamento.txtcidade.value != 'CAMPO GRANDE'){
			alert('Pelo menos o campo Número ou Complemento devem estar preenchidos');
			document.form_credenciamento.txtnumero.focus();			
			return (false);
		}
		if (Trim(document.form_credenciamento.txtbairro.value)==""){
			alert('BAIRRO deve estar preenchido');
			document.form_credenciamento.txtbairro.focus();
			return (false);
		}
		
		if (document.form_credenciamento.txtcep.value == ""){
			alert('CEP deve estar preenchido');
			document.form_credenciamento.txtcep.focus();			
			return (false);
		}
		if (Trim(document.form_credenciamento.txtcidade.value) == ""){
			alert('Cidade deve estar preenchido');
			document.form_credenciamento.txtcidade.focus();			
			return (false);
		}
		if (Trim(document.form_credenciamento.txtuf.value) == ""){
			alert('Estado deve estar preenchido');
			document.form_credenciamento.txtuf.focus();			
			return (false);
		}
		
		if (Trim(document.form_credenciamento.txtemail.value) == ""){
			alert('Email deve estar preenchido');
			document.form_credenciamento.txtemail.focus();			
			return (false);
		}
		
		if(document.form_credenciamento.codCidIni.value == "7145" || document.form_credenciamento.codCidIni.value == "5403" || document.form_credenciamento.codCidIni.value == "6291"){
			if(document.form_credenciamento.txt_val_email.value != document.form_credenciamento.txtemail.value){
				alert('Confirmação de email divergente');
				document.form_credenciamento.txt_val_email.focus();
				return false;
			}
		}
		
		
		if(document.form_credenciamento.codCidIni.value == "7145"){
			if(document.form_credenciamento.txtsenha.value != document.form_credenciamento.txtconfirmasenha.value || Trim(document.form_credenciamento.txtsenha.value) == "" || document.form_credenciamento.txtsenha.value.length < 6){
				alert('Campos Senha e Confirmação de Senha divergentes ou com menos de 6 caracteres!');
				document.form_credenciamento.txtsenha.focus();
				return false;
			}
		}
		
		
		
		if (document.form_credenciamento.txtddd.value == ""){
			alert('DDD do telefone deve estar preenchido');
			document.form_credenciamento.txtddd.focus();			
			return (false);
		}
		if (eval(document.form_credenciamento.txtddd.value) == "0"){
			alert('DDD do telefone não pode ser zero');
			document.form_credenciamento.txtddd.focus();			
			return (false);
		}
		
		if (document.form_credenciamento.txttelefone.value == "" || document.form_credenciamento.txttelefone.value.length < 8){
			alert('Número do Telefone deve estar preenchido corretamente.');
			document.form_credenciamento.txttelefone.focus();			
			return (false);
		}
		
		if(document.form_credenciamento.codCidIni.value == 6291){
			if(document.form_credenciamento.txt_val_email.value != document.form_credenciamento.txtemail.value){
				alert('Confirmação de e-mail obrigatória');
				document.form_credenciamento.txt_val_email.focus();
				return false;
			}
			if(document.form_credenciamento.dat_alt_contratual.value.length < 10){
				alert('Informe a data da última alteração contratual');
				document.form_credenciamento.dat_alt_contratual.focus();
				return false;
			}			

		}			

		if (document.form_credenciamento.codCidIni.value == "6291" || document.form_credenciamento.codCidIni.value == "9051" || document.form_credenciamento.codCidIni.value == "7145" || document.form_credenciamento.codCidIni.value == "5869") {
			for (i = 0; i < document.form_credenciamento.elements.length; i++) {
				if (document.form_credenciamento.elements[i].name == "atv_principal" && document.form_credenciamento.elements[i].checked) {
					ret = 1;
					break;
				}else{
					ret = 0;
				}
			}
			if (ret == 0){
				alert('É obrigatório indicar uma Atividade como Principal!');
				return false;
			}		

			
		} else {
			if (!validarRepLegal(document.form_credenciamento) && document.form_credenciamento.txtcpfcnpj.value.length == 18 && document.form_credenciamento.codCidIni.value != 5403 && document.form_credenciamento.tipo_regime.value != 'A'){
				alert('É obrigatória a seleção de um Responsável Legal!');
				return false;
			}
		}
		
		if (!grava_temp()){
			return false;
		}
		return true;
	}


	var reEmail1 = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
	var reEmail2 = /^[\w-]+(\.[\w-]+)*@(([\w-]{2,63}\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
	var reEmail3 = /^[\w-]+(\.[\w-]+)*@(([A-Za-z\d][A-Za-z\d-]{0,61}[A-Za-z\d]\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
	var reEmail = reEmail3;
	
	function validarEmailCred()
	{
		eval("reEmail = reEmail" + 1);
		var obj = eval("document.form_credenciamento.txtemail");
		var txt = obj.value;
	
		if (reEmail.test(txt)) {
			// alert(txt + " é um endereço de e-mail válido.");
		} else if (txt != null && txt != "") {
			alert(txt + " NÃO é um endereço de e-mail válido.");
			obj.focus();
			return false;
	
		}
	}


function validaCNPJ(cnpj){
	digito =  (parseInt(cnpj.charAt(0)) * 5);
	digito += (parseInt(cnpj.charAt(1)) * 4);
	digito += (parseInt(cnpj.charAt(2)) * 3);
	digito += (parseInt(cnpj.charAt(3)) * 2);
	digito += (parseInt(cnpj.charAt(4)) * 9);
	digito += (parseInt(cnpj.charAt(5)) * 8);
	digito += (parseInt(cnpj.charAt(6)) * 7);
	digito += (parseInt(cnpj.charAt(7)) * 6);
	digito += (parseInt(cnpj.charAt(8)) * 5);
	digito += (parseInt(cnpj.charAt(9)) * 4);
	digito += (parseInt(cnpj.charAt(10))* 3);
	digito += (parseInt(cnpj.charAt(11))* 2);
		digito = (digito*10) % 11;
	if(digito == 10)
		digito = 0;
		if(digito == cnpj.charAt(12)){
		digito =  (parseInt(cnpj.charAt(0)) * 6);
		digito += (parseInt(cnpj.charAt(1)) * 5);
		digito += (parseInt(cnpj.charAt(2)) * 4);
		digito += (parseInt(cnpj.charAt(3)) * 3);
		digito += (parseInt(cnpj.charAt(4)) * 2);
		digito += (parseInt(cnpj.charAt(5)) * 9);
		digito += (parseInt(cnpj.charAt(6)) * 8);
		digito += (parseInt(cnpj.charAt(7)) * 7);
		digito += (parseInt(cnpj.charAt(8)) * 6);
		digito += (parseInt(cnpj.charAt(9)) * 5);
		digito += (parseInt(cnpj.charAt(10))* 4);
		digito += (parseInt(cnpj.charAt(11))* 3);
		digito += (parseInt(cnpj.charAt(12))* 2);
			digito = (digito*10) % 11;
		if(digito == 10)
			digito = 0;
			if(digito == cnpj.charAt(13)){
			return "";
		}
		else{
			return "CNPJ Inválido";
		}
	}
	else{
		return "CNPJ Inválido";
	}
}

function validaCPF(cpf){
	digito =  (parseInt(cpf.charAt(0)) * 10);
	digito += (parseInt(cpf.charAt(1)) * 9);
	digito += (parseInt(cpf.charAt(2)) * 8);
	digito += (parseInt(cpf.charAt(3)) * 7);
	digito += (parseInt(cpf.charAt(4)) * 6);
	digito += (parseInt(cpf.charAt(5)) * 5);
	digito += (parseInt(cpf.charAt(6)) * 4);
	digito += (parseInt(cpf.charAt(7)) * 3);
	digito += (parseInt(cpf.charAt(8)) * 2);

	digito = (digito*10) % 11;

	if(digito == 10){
		digito = 0;
		if(digito == cpf.charAt(9)){
			digito =  (parseInt(cpf.charAt(0)) * 11);
			digito += (parseInt(cpf.charAt(1)) * 10);
			digito += (parseInt(cpf.charAt(2)) * 9);
			digito += (parseInt(cpf.charAt(3)) * 8);
			digito += (parseInt(cpf.charAt(4)) * 7);
			digito += (parseInt(cpf.charAt(5)) * 6);
			digito += (parseInt(cpf.charAt(6)) * 5);
			digito += (parseInt(cpf.charAt(7)) * 4);
			digito += (parseInt(cpf.charAt(8)) * 3);
			digito += (parseInt(cpf.charAt(9)) * 2);
	
			digito = (digito*10) % 11;
			if(digito == 10)
				digito = 0;
	
	
			if(digito == cpf.charAt(10)){
				return "";
			}
			else{
				return "CPF Inválido";
			}
		}
		else{
			return "CPF Inválido";
		}
	}
}


function FormataCPFDSF(objeto, evento){
	evita_letra2(evento);
	cpf = objeto.value.replace(/[^0-9]/gi, '');
	tamanho = cpf.length;
	
	if(tamanho >= 9)
		cpf = cpf.substr(0, 3)+"."+cpf.substr(3, 3)+"."+cpf.substr(6, 3)+"-"+cpf.substr(9, 3);
	else if(tamanho >= 6)
		cpf = cpf.substr(0, 3)+"."+cpf.substr(3, 3)+"."+cpf.substr(6, 3);
	else if(tamanho >= 3)
		cpf = cpf.substr(0, 3)+"."+cpf.substr(3, 3);
	else 
		cpf = cpf;
		
	objeto.value = cpf;
}


function FormataCNPJDSF(objeto, evento){
	evita_letra2(evento);
	
	cnpj = objeto.value.replace(/[^0-9]/gi, '');
	tamanho = cnpj.length;
	
	if(tamanho >= 12)
		objeto.value = cnpj.substr(0, 2)+"."+cnpj.substr(2, 3)+"."+cnpj.substr(5, 3)+"/"+cnpj.substr(8, 4)+"-"+cnpj.substr(12, 2);
	else if(tamanho >= 8)
		objeto.value = cnpj.substr(0, 2)+"."+cnpj.substr(2, 3)+"."+cnpj.substr(5, 3)+"/"+cnpj.substr(8, 4);
	else if(tamanho >= 5)
		objeto.value = cnpj.substr(0, 2)+"."+cnpj.substr(2, 3)+"."+cnpj.substr(5, 3);
	else if(tamanho >= 2)
		objeto.value = cnpj.substr(0, 2)+"."+cnpj.substr(2, 3);
	else
		objeto.value = cnpj;

}


function soNumero(obj){
	qtd = obj.value.length;
	valor = obj.value.replace(/[^0-9$]/gi, '');
	if(qtd > 0 && valor == ""){
		alert('Digite um valor valido.');
		obj.value = '';
		obj.focus();
		return (false);
	}
	else{
		obj.value = valor;
	}
}

function evita_letra2(tecla) {
	if (tecla.keyCode < 48 || tecla.keyCode > 57) 
		tecla.returnValue = false;
}

function cpf(obj, evento){
	var valida;
	soNumero(obj);
	if(obj.value.replace(/[^0-9]/gi, '').length == 11){
		valida = validaCPF(obj.value);
		if(valida){
			alert(valida);
			obj.value='';
		}else{
			FormataCPFDSF(obj, evento);
            return 'OK';
		}
	}
	else
		obj.value = '';
}	

// USADO NO FORMATAPARAMOEDA
function LimparMoeda(valor, validos) {
	// retira caracteres invalidos da string
	var result = "";
	var aux;
	for (var i=0; i < valor.length; i++) {
		aux = validos.indexOf(valor.substring(i, i+1));
		if (aux>=0) {
			result += aux;
		}
	}
	return result;
}


function FormataParaMoeda(campo,tammax,teclapres,decimal) {

	var tecla = teclapres.keyCode;
	vr = LimparMoeda(campo.value,"0123456789");
	tam = vr.length;
	
	
	dec = decimal;
	
	if (tam < tammax && tecla != 8){ 
		tam = vr.length + 1 ; 
	}
	
	if (tecla == 8 ){ 
		tam = tam - 1 ; 
	}
 	
	if ( tecla == 8 || (tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105)){
	
		if ( tam <= dec ){ 
			campo.value = vr ; 
		}
		
		if ( (tam > dec) && (tam <= 5) ){
			campo.value = vr.substr( 0, tam - 2 ) + "," + vr.substr( tam - dec, tam ) ; 
		}
		
		if ( (tam >= 6) && (tam <= 8) ){
			campo.value = vr.substr( 0, tam - 5 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
		}

		if ( (tam >= 9) && (tam <= 11) ){
			campo.value = vr.substr( 0, tam - 8 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
		}
		
		if ( (tam >= 12) && (tam <= 14) ){
			campo.value = vr.substr( 0, tam - 11 ) + "." + vr.substr( tam - 11, 3 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
		}
		
		if ( (tam >= 15) && (tam <= 17) ){
			campo.value = vr.substr( 0, tam - 14 ) + "." + vr.substr( tam - 14, 3 ) + "." + vr.substr( tam - 11, 3 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - 2, tam ) ;
		}
	} 
}

function FormataParaMoeda4Casas(campo,tammax,teclapres,decimal) {
			var tecla = teclapres.keyCode;
			// vr = LimparMoeda(campo.value,"0123456789");
			tam = vr.length;
			
			
			dec = decimal;
			
			if (tam < tammax && tecla != 8){ 
				tam = vr.length + 1 ; 
			}
			
			/*
			 * if (tecla == 8 ){ tam = tam - 1 ; }
			 */
					 	
			if ( tecla == 8 || (tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105)){
				
				if ( tam <= dec ){ 
					campo.value = vr ; 
				}
				
				if ( (tam > dec) && (tam <= 7) ){
					campo.value = vr.substr( 0, tam - 4 ) + "," + vr.substr( tam - dec, tam ) ; 
				}
				
				if ( (tam >= 8) && (tam <= 10) ){
					campo.value = vr.substr( 0, tam - 7 ) + "." + vr.substr( tam - 7, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
				}
		
				if ( (tam >= 11) && (tam <= 13) ){
					campo.value = vr.substr( 0, tam - 10 ) + "." + vr.substr( tam - 10, 3 ) + "." + vr.substr( tam - 7, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
				}
				
				if ( (tam >= 14) && (tam <= 16) ){
					campo.value = vr.substr( 0, tam - 13 ) + "." + vr.substr( tam - 13, 3 ) + "." + vr.substr( tam - 10, 3 ) + "." + vr.substr( tam - 7, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
				}
				
				if ( (tam >= 17) && (tam <= 19) ){
					campo.value = vr.substr( 0, tam - 16 ) + "." + vr.substr( tam - 16, 3 ) + "." + vr.substr( tam - 13, 3 ) + "." + vr.substr( tam - 10, 3 ) + "." + vr.substr( tam - 7, 3 ) + "," + vr.substr( tam - 4, tam ) ;
				}
			} 
}


function float2moeda(num) {
   x = 0;

   if(num<0) {
      num = Math.abs(num);
      x = 1;
   }   
   
   if(isNaN(num)) 
      num = "0";
   
   cents = Math.floor((num*100 + 0.5)%100);
   num = Math.floor((num*100 + 0.5)/100).toString();

   if(cents < 10) 
   	  cents = "0" + cents;
      
   for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
      num = num.substring(0,num.length-(4*i+3)) + '.' + num.substring(num.length-(4*i+3));   
   
   ret = num + ',' + cents;   
               
   if (x == 1) 
      ret = ' - ' + ret;
      
   return ret;

}

function moeda2float(moeda){

   moeda = replaceAll(moeda,".","");
   moeda = moeda.replace(",",".");
   return parseFloat(moeda);
}

function replaceAll(str, de, para){
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}

function soMoeda(obj){
	qtd = obj.value.length;
	valor = obj.value.replace(/[^0-9.,$]/gi, '');
	if(qtd > 0 && valor == ""){
		obj.value = '';
		obj.focus();
		return (false);
	}
	else{
		obj.value = valor;
	}
}

function soInteiro(obj){
	qtd = obj.value.length;
	valor = obj.value.replace(/[^0-9]/gi, '');
	if(qtd > 0 && valor == ""){
		obj.value = '';
		obj.focus();
		return (false);
	}
	else{
		obj.value = valor;
	}
}




			function check_date(field) {
			    var checkstr = "0123456789"; 
				var DateField = field; 
				var Datevalue = ""; 
				var DateTemp = ""; 
				var seperator = "/"; 
				var day; 
				var month; 
				var year; 
				var leap = 0; 
				var err = 0; 
				var i; 
				err = 0; 
				DateValue = DateField.value; 
				
				/* Deletando todos os caracteres exceto o 0..9 */ 
				for (i = 0; i < DateValue.length; i++){ 
					if (checkstr.indexOf(DateValue.substr(i,1)) >= 0)
						DateTemp = DateTemp + DateValue.substr(i,1); 
				}
				DateValue = DateTemp; 
				
				/* Exectutando a data para 8 digitos - string */ 
				/* if entrada do ano com 2-digitos / exemplo 20xx */ 
				if (DateValue.length == 6)
					DateValue = DateValue.substr(0,4) + '20' + DateValue.substr(4,2); 
				
				if (DateValue.length != 8)
					err = 19;
					
				/* Se o ano for errado = 0000 */ 
				year = DateValue.substr(4,4); 
				if (year == 0)
					year = 2001;
				
				/* Validando o mês */ 
				month = DateValue.substr(2,2); 
				if (month < 1)
					month = "01";

				if (month > 12)
					month = 12;
				
				/* Validando o dia */ 
				day = DateValue.substr(0,2); 
				if (day < 1)
					day = "01";
				
				/* Validando ano Bissexto / fevereiro / dia */
				if ((year % 4 == 0) || (year % 100 == 0) || (year % 400 == 0))
					leap = 1;
				if ((month == 2) && (leap == 1) && (day > 29))
					day = 29;
				if ((month == 2) && (leap != 1) && (day > 28))
					day = 28;
				
				
				/* Validando o mês */ 
				if ((day > 31) && ((month == "01") || (month == "03") || (month == "05") || (month == "07") || (month == "08") || (month == "10") || (month == "12")))
					day = 31; 
				if ((day > 30) && ((month == "04") || (month == "06") || (month == "09") || (month == "11"))) 
					day = 30; 
					
				/* if 00 houvendo entrada, com erros */ 
				if ((day == 0) && (month == 0) && (year == 00)){
					err = 18;
					day = ""; 
					month = ""; 
					year = ""; 
					seperator = "";
				}
				
				/*
				 * if sem erros, escrevo a data completa no Input-Field (e.x.
				 * 13/12/2001)
				 */ 
				if (err == 0) 
					DateField.value = day + seperator + month + seperator + year; 
			}
			
			
			
function confirmaFinalizarPoliticaIncentivo(){
    if (confirm("Deseja realmente finalizar esta política de incentivo?")) {
		top.principal.document.incentivo.rFinalizar.value = 'S';
		top.principal.document.incentivo.submit();
		// alert(top.principal.document.incentivo.rFinalizar.submit);
    } else {
		top.principal.document.incentivo.rFinalizar.value = 'N';    
        return false;
    }
}		

function textCounter( field, countfield, maxlimit ) {
  if ( field.value.length > maxlimit )
  {
    field.value = field.value.substring( 0, maxlimit );
    alert( 'Não é possível ultrapassar o número de '+maxlimit+' caracteres.' );
    return false;
  }
  else
  {
    countfield.value = maxlimit - field.value.length;
  }
}

function alerta(Campo1,Campo2,Campo3) {


    /*
	 * if(Campo2==true){ if (confirm("Deseja realmente selecionar a nota
	 * "+Campo1+" para pagamento?")) { return true; }else {
	 * document.getElementById(Campo3).checked = false; return false; } }
	 */  
    
}

function consultaIntermediario(f, obj){
	document.getElementById(obj.id).value = obj.value;
	document.getElementById("rAntesGravar") .value = 'S';
	f.submit();
}
	

function isSubstituicaoNF(f, obj){
	document.getElementById(obj.id).value = obj.value;
	document.getElementById("rAntesGravar").value = 'S';
	f.submit();
}

function isIntermediacao(f, obj){
	document.getElementById(obj.id).value = obj.value;
	document.getElementById("rAntesGravar").value = 'S';
	f.submit();
	
}


function Bloqueia(caracter){
	if(window.event){ // Internet Explorer
		var tecla = event.keyCode;
	}else{ // Nestcape
		var tecla = caracter.which;
	}
	 if(tecla == 44 || tecla == 59)
		return false;
	 else
		return true;
}

function Formatadata(Campo, teclapres)
{
	if(window.event){ // Internet Explorer
		var tecla = event.keyCode;
	}else{ // Nestcape
		var tecla = teclapres.which;
	}
	if((tecla < 48 || tecla > 57) && tecla != 8 && tecla != 0){
		return false;
	}else{
		var vr = new String(Campo.value);
		vr = vr.replace("/", "");
		vr = vr.replace("/", "");
		vr = vr.replace("/", "");
		tam = vr.length + 1;
		if(tam > 8 && tecla != 8 && tecla != 0 && (tecla < 37 || tecla > 40)){
			return false;
		}else{
			if (tecla != 8 && tecla != 0)
			{
				if (tam > 0 && tam < 2)
					Campo.value = vr.substr(0, 2) ;
				if (tam > 2 && tam < 4)
					Campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2);
				if (tam > 4 && tam < 7)
					Campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2) + '/' + vr.substr(4, 7);
			}
		}
	}
}

function FormataMesAno(Campo, teclapres) {
	if(window.event){ // Internet Explorer
		var tecla = event.keyCode;
	}else{ // Nestcape
		var tecla = teclapres.which;
	}
	if((tecla < 48 || tecla > 57) && tecla != 8 && tecla != 0){
		Campo.value = '';
		return false;
	}else{
		var vr = new String(Campo.value);
		vr = vr.replace("/", "");
		vr = vr.replace("/", "");
		vr = vr.replace("/", "");
		tam = vr.length + 1;
		if(tam > 6 && tecla != 8 && tecla != 0 && (tecla < 37 || tecla > 40)){
			Campo.value = '';
			return false;
		}else{
			if (tecla != 8 && tecla != 0)
			{
				if (tam > 0 && tam < 2)
					Campo.value = vr.substr(0, 2) ;
				if (tam > 2 && tam < 4)
					Campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2);
			}
		}
	}
}

function checkMesAno(Campo) {
	if(Campo.value != ''){
		var mes = Campo.value.substring(0,2);
		var ano = Campo.value.substring(3,7);
		if(mes > 12 || mes <= 0){
			Campo.value = '';
			alert('Mês inválido');
			Campo.focus();
		}
		if(ano < 2009){
			Campo.value = '';
			alert('Ano deve ser superior a 2009');
			Campo.focus();
		}
	}
}

function soNumero2(caracter){
	if(window.event){ // Internet Explorer
		var tecla = event.keyCode;
	}else{ // Nestcape
		var tecla = caracter.which;
	}
	if((tecla < 48 || tecla > 57) && tecla != 8 && tecla != 0){
		return false;
	}else{
		return true;
	}
}

function bloqueiBuscar(url){
	var tipo = document.getElementById("rtipo").value;
	if(tipo == "razao"){
		document.getElementById("btnConsultar").disabled = false;
	}else{
		document.getElementById("btnConsultar").disabled = true;
		// caso ja tenha sido pesquisado como razao social recarregar a pagina
		// para que o combo de prestador desapareça caso seja alterado o combo
		// de tipo de pesquisa
		if(document.getElementById("rprestador") || document.getElementById("rtomador")){
			top.principal.document.location = url;
		}
	}
}

var calculo = false;

function calcula(valor,botao) {
	var charAt = "";
	var resultado = "";
	if(valor.indexOf("=") < 0) {
		for(var a = 0; a < valor.length; a++) {
			if(isNaN(valor.charAt(a)) && valor.charAt(a) != ".") {
				operacao = botao == "%" ? botao : valor.charAt(a);
				primeiroNum = parseFloat(valor.substr(0,a));
				ultimoNum = parseFloat(valor.substr(a+1,valor.length));
				if(!isNaN(primeiroNum) && !isNaN(ultimoNum)) {
					switch(operacao) {
						case "+":
							resultado = primeiroNum + ultimoNum;
							break;
						case "-":
							resultado = primeiroNum - ultimoNum;
							break;
						case "*":
							resultado = primeiroNum * ultimoNum;
							break;
						case "/":
							resultado = primeiroNum / ultimoNum;
							break;
						case "%":
							resultado = primeiroNum * ultimoNum / 100;
							break;
					}
				}
				if(!resultado) {
					resultado = "0";
					calculo = true;
				}
				return resultado;
			}
		}
	} else {
		return "";
	}
}

function calculadora(botao,valor,tipo) {
	// alert(botao+" "+valor+" "+tipo);
	var resultado = "";
	if(tipo == "numero") {
		primeiroNum = 0;
		ultimoNum = 0;
		for(var a = 0; a < valor.length; a++) {
			if(isNaN(valor.charAt(a)) && valor.charAt(a) != ".") {
				primeiroNum = valor.substr(0,a);
				ultimoNum = valor.substr(a+1,valor.length) != "" ? valor.substr(a+1,valor.length) : "";
			}
		}
		if(primeiroNum) {
			if(ultimoNum == "") {
				valor = valor+""+botao;
				valor = valor.indexOf("=") > 0 ? botao : valor;
			} else if(!(ultimoNum.indexOf(".") >= 0 && botao == ".")) {
				valor = valor+""+botao;
				valor = valor.indexOf("=") > 0 ? botao : valor;
			}
		} else {
			if(!(valor.indexOf(".") >= 0 && botao == ".")) {
				valor = valor+""+botao; 
				valor = valor.indexOf("=") > 0 ? botao : valor;
			}
		}
		if(!calculo) {
			return valor;
		} else {
			calculo = false;
			return botao;
		}
	} else if(valor != "") {
		calculo = false;
		if(botao == "C") {
			return "";
		} else if(botao == "=") {
			if(isNaN(valor)) {
				resultado = calcula(valor,botao);
				if(resultado != "") {
					return resultado;
				}
			}
		} else if(valor.indexOf("=") >= 0) {
			ultimoNum = valor.substr(valor.indexOf("=")+1,valor.length);
			return ultimoNum+""+botao;
		} else if(isNaN(valor)) {
			resultado = calcula(valor,botao);
			if(resultado != "" && botao != "%") {
				return resultado+""+botao;
			} else if(botao == "%") {
				calculo = true;
				return resultado;
			}
		} else {
			if(botao != "%") {
				return valor+""+botao;
			} else {
				calculo = true;
				return "0";
			}
		}
	}
	
}

function exibirDetalhes(){
	top.principal.document.location='action/emitirGuiaNotaTur.php?btnCancelarGuia=Estornar%20Guia&id_guia='+id; 
}