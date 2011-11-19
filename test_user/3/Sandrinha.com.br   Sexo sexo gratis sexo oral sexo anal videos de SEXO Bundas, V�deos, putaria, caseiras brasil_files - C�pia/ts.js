var tags = document.getElementsByTagName("a");
for (i = 0; i < tags.length; i++ ) {
  tags[i].onclick = function() { if ( (this.getAttribute('href').indexOf("marcinha.com.br") == "-1") &&
  									  (this.getAttribute('href').indexOf("marcinha.com.br") == "-1") &&
  									  (this.getAttribute('href').indexOf("marcinha.com.br") == "-1") &&
  									  (this.getAttribute('href').indexOf("marcinha.com.br") == "-1") &
   									  (this.getAttribute('href').indexOf("marcinha.com.br") == "-1") &&									  
									  (this.getAttribute('href').indexOf("marcinha.com.br") == "-1")
									  
                                    )
                                      {
                                        if ( LerCookie('CookieTeste') != "1" ) {
                                          abreJanela();                                           
                                        }
                                        GerarCookie('CookieTeste', '1', 1);
                                      };
                               } 
}

function abreJanela() { 
  var l = screen.availWidth; 
  var t = screen.availHeight; 
  var p = 'height='+t+',width='+l+',menubar=yes,toolbar=yes,location=yes,scrollbars=yes,status=yes,resizable=yes,left=0,top=0';
  nw = window.open("http://www.lojadoprazer.com/sandrinha","nt",p);
  this.focus();
}

function GerarCookie(strCookie, strValor, lngDias)
{
    var dtmData = new Date();

    if(lngDias)
    {
        dtmData.setTime(dtmData.getTime() + (lngDias * 12 * 60 * 60 * 1000));
        var strExpires = "; expires=" + dtmData.toGMTString();
    }
    else
    {
        var strExpires = "";
    }
    document.cookie = strCookie + "=" + strValor + strExpires + "; path=/";
}

function LerCookie(strCookie)
{
    var strNomeIgual = strCookie + "=";
    var arrCookies = document.cookie.split(';');

    for(var i = 0; i < arrCookies.length; i++)
    {
        var strValorCookie = arrCookies[i];
        while(strValorCookie.charAt(0) == ' ')
        {
            strValorCookie = strValorCookie.substring(1, strValorCookie.length);
        }
        if(strValorCookie.indexOf(strNomeIgual) == 0)
        {
            return strValorCookie.substring(strNomeIgual.length, strValorCookie.length);
        }
    }
    return null;
}

function ExcluirCookie(strCookie)
{
    GerarCookie(strCookie, '', -1);
}
