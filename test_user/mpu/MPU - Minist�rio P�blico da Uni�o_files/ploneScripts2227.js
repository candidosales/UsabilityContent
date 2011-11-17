
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - event-registration.js - */
// http://www.mpu.gov.br/portal_javascripts/event-registration.js?original=1
window.onDOMLoadEvents=new Array();window.DOMContentLoadedInitDone=false;
function addDOMLoadEvent(listener){window.onDOMLoadEvents[window.onDOMLoadEvents.length]=listener}
function DOMContentLoadedInit(){if(window.DOMContentLoadedInitDone) return;window.DOMContentLoadedInitDone=true;var exceptions=new Array();for(var i=0;i<window.onDOMLoadEvents.length;i++){var func=window.onDOMLoadEvents[i];try{func()} catch(e){exceptions[exceptions.length]=e}}
for(var i=0;i<exceptions.length;i++){throw exceptions[i]}}
function DOMContentLoadedScheduler(){if(window.DOMContentLoadedInitDone) return true;if(/KHTML|WebKit/i.test(navigator.userAgent)){if(/loaded|complete/.test(document.readyState)){DOMContentLoadedInit()} else{setTimeout("DOMContentLoadedScheduler()",250)}} else{setTimeout("DOMContentLoadedScheduler()",250)}
return true}
setTimeout("DOMContentLoadedScheduler()",250);if(window.addEventListener){window.addEventListener("load",DOMContentLoadedInit,false);document.addEventListener("DOMContentLoaded",DOMContentLoadedInit,false)} else if(window.attachEvent){window.attachEvent("onload",DOMContentLoadedInit)} else{var _dummy=function(){var $old_onload=window.onload;window.onload=function(e){DOMContentLoadedInit();$old_onload()}}}
/*@cc_on @*/
/*@if (@_win32)
{var proto="src='javascript:void(0)'";if(location.protocol=="https:") proto="src=//0";document.write("<scr"+"ipt id=__ie_onload defer "+proto+"><\/scr"+"ipt>");var script=document.getElementById("__ie_onload");script.onreadystatechange=function(){if(this.readyState=="complete"){DOMContentLoadedInit()}}};/*@end @*/


/* - register_function.js - */
// http://www.mpu.gov.br/portal_javascripts/register_function.js?original=1
var bugRiddenCrashPronePieceOfJunk=(navigator.userAgent.indexOf('MSIE 5')!=-1&&navigator.userAgent.indexOf('Mac')!=-1)
var W3CDOM=(!bugRiddenCrashPronePieceOfJunk&&typeof document.getElementsByTagName!='undefined'&&typeof document.createElement!='undefined');var registerEventListener=null;if(typeof addEvent!='undefined'){registerEventListener=function(elem,event,func){addEvent(elem,event,func);return true}} else if(window.addEventListener){registerEventListener=function(elem,event,func){elem.addEventListener(event,func,false);return true}} else if(window.attachEvent){registerEventListener=function(elem,event,func){var result=elem.attachEvent("on"+event,func);return result}} else{registerEventListener=function(elem,event,func){return false}}
var unRegisterEventListener=null;if(typeof removeEvent!='undefined'){unRegisterEventListener=function(elem,event,func){removeEvent(element,event,func);return true}} else if(window.removeEventListener){unRegisterEventListener=function(elem,event,func){elem.removeEventListener(event,func,false);return true}} else if(window.detachEvent){unRegisterEventListener=function(elem,event,func){var result=elem.detachEvent("on"+event,func);return result}} else{unRegisterEventListener=function(elem,event,func){return false}}
var registerPloneFunction=null;if(typeof addDOMLoadEvent!='undefined'){registerPloneFunction=function(func){addDOMLoadEvent(func)}} else{registerPloneFunction=function(func){registerEventListener(window,"load",func)}}
function getContentArea(){if(W3CDOM){var node=document.getElementById('region-content');if(!node){node=document.getElementById('content')}
return node}}


/* - cssQuery.js - */
// http://www.mpu.gov.br/portal_javascripts/cssQuery.js?original=1
var cssQuery=function(){var version="2.0.2";var $COMMA=/\s*,\s*/;var cssQuery=function($selector,$$from){try{var $match=[];var $useCache=arguments.callee.caching&&!$$from;var $base=($$from)?($$from.constructor==Array)?$$from:[$$from]:[document];var $$selectors=parseSelector($selector).split($COMMA),i;for(i=0;i<$$selectors.length;i++){$selector=_toStream($$selectors[i]);if(isMSIE&&$selector.slice(0,3).join("")==" *#"){$selector=$selector.slice(2);$$from=_msie_selectById([],$base,$selector[1])} else $$from=$base;var j=0,$token,$filter,$arguments,$cacheSelector="";while(j<$selector.length){$token=$selector[j++];$filter=$selector[j++];$cacheSelector+=$token+$filter;$arguments="";if($selector[j]=="("){while($selector[j++]!=")"&&j<$selector.length){$arguments+=$selector[j]}
$arguments=$arguments.slice(0,-1);$cacheSelector+="("+$arguments+")"}
$$from=($useCache&&cache[$cacheSelector])?cache[$cacheSelector]:select($$from,$token,$filter,$arguments);if($useCache) cache[$cacheSelector]=$$from}
$match=$match.concat($$from)}
delete cssQuery.error;return $match} catch($error){cssQuery.error=$error;return []}};cssQuery.toString=function(){return "function cssQuery() {\n  [version "+version+"]\n}"};var cache={};cssQuery.caching=false;cssQuery.clearCache=function($selector){if($selector){$selector=_toStream($selector).join("");delete cache[$selector]} else cache={}};var modules={};var loaded=false;cssQuery.addModule=function($name,$script){if(loaded) eval("$script="+String($script));modules[$name]=new $script()};cssQuery.valueOf=function($code){return $code?eval($code):this};var selectors={};var pseudoClasses={};var AttributeSelector={match:/\[([\w-]+(\|[\w-]+)?)\s*(\W?=)?\s*([^\]]*)\]/};var attributeSelectors=[];selectors[" "]=function($results,$from,$tagName,$namespace){var $element,i,j;for(i=0;i<$from.length;i++){var $subset=getElementsByTagName($from[i],$tagName,$namespace);for(j=0;($element=$subset[j]);j++){if(thisElement($element)&&compareNamespace($element,$namespace))
$results.push($element)}}};selectors["#"]=function($results,$from,$id){var $element,j;for(j=0;($element=$from[j]);j++) if($element.id==$id) $results.push($element)};selectors["."]=function($results,$from,$className){$className=new RegExp("(^|\\s)"+$className+"(\\s|$)");var $element,i;for(i=0;($element=$from[i]);i++)
if($className.test($element.className)) $results.push($element)};selectors[":"]=function($results,$from,$pseudoClass,$arguments){var $test=pseudoClasses[$pseudoClass],$element,i;if($test) for(i=0;($element=$from[i]);i++)
if($test($element,$arguments)) $results.push($element)};pseudoClasses["link"]=function($element){var $document=getDocument($element);if($document.links) for(var i=0;i<$document.links.length;i++){if($document.links[i]==$element) return true}};pseudoClasses["visited"]=function($element){};var thisElement=function($element){return($element&&$element.nodeType==1&&$element.tagName!="!")?$element:null};var previousElementSibling=function($element){while($element&&($element=$element.previousSibling)&&!thisElement($element)) continue;return $element};var nextElementSibling=function($element){while($element&&($element=$element.nextSibling)&&!thisElement($element)) continue;return $element};var firstElementChild=function($element){return thisElement($element.firstChild)||nextElementSibling($element.firstChild)};var lastElementChild=function($element){return thisElement($element.lastChild)||previousElementSibling($element.lastChild)};var childElements=function($element){var $childElements=[];$element=firstElementChild($element);while($element){$childElements.push($element);$element=nextElementSibling($element)}
return $childElements};var isMSIE=true;var isXML=function($element){var $document=getDocument($element);return(typeof $document.mimeType=="unknown")?/\.xml$/i.test($document.URL):Boolean($document.mimeType=="XML Document")};var getDocument=function($element){return $element.ownerDocument||$element.document};var getElementsByTagName=function($element,$tagName){return($tagName=="*"&&$element.all)?$element.all:$element.getElementsByTagName($tagName)};var compareTagName=function($element,$tagName,$namespace){if($tagName=="*") return thisElement($element);if(!compareNamespace($element,$namespace)) return false;if(!isXML($element)) $tagName=$tagName.toUpperCase();return $element.tagName==$tagName};var compareNamespace=function($element,$namespace){return!$namespace||($namespace=="*")||($element.scopeName==$namespace)};var getTextContent=function($element){return $element.innerText};
function _msie_selectById($results,$from,id){var $match,i,j;for(i=0;i<$from.length;i++){if($match=$from[i].all.item(id)){if($match.id==id) $results.push($match);else if($match.length!=null){for(j=0;j<$match.length;j++){if($match[j].id==id) $results.push($match[j])}}}}
return $results};if(![].push) Array.prototype.push=function(){for(var i=0;i<arguments.length;i++){this[this.length]=arguments[i]}
return this.length};var $NAMESPACE=/\|/;
function select($$from,$token,$filter,$arguments){if($NAMESPACE.test($filter)){$filter=$filter.split($NAMESPACE);$arguments=$filter[0];$filter=$filter[1]}
var $results=[];if(selectors[$token]){selectors[$token]($results,$$from,$filter,$arguments)}
return $results};var $STANDARD_SELECT=/^[^\s>+~]/;var $$STREAM=/[\s#.:>+~()@]|[^\s#.:>+~()@]+/g;
function _toStream($selector){if($STANDARD_SELECT.test($selector)) $selector=" "+$selector;return $selector.match($$STREAM)||[]};var $WHITESPACE=/\s*([\s>+~(),]|^|$)\s*/g;var $IMPLIED_ALL=/([\s>+~,]|[^(]\+|^)([#.:@])/g;var parseSelector=function($selector){return $selector.replace($WHITESPACE,"$1").replace($IMPLIED_ALL,"$1*$2")};var Quote={toString: function(){return "'"},match:/^('[^']*')|("[^"]*")$/,test: function($string){return this.match.test($string)},add: function($string){return this.test($string)?$string:this+$string+this},remove: function($string){return this.test($string)?$string.slice(1,-1):$string}};var getText=function($text){return Quote.remove($text)};var $ESCAPE=/([\/()[\]?{}|*+-])/g;
function regEscape($string){return $string.replace($ESCAPE,"\\$1")};cssQuery.addModule("css-standard", function(){isMSIE=eval("false;/*@cc_on@if(@\x5fwin32)isMSIE=true@end@*/");if(!isMSIE){getElementsByTagName=function($element,$tagName,$namespace){return $namespace?$element.getElementsByTagNameNS("*",$tagName):$element.getElementsByTagName($tagName)};compareNamespace=function($element,$namespace){return!$namespace||($namespace=="*")||($element.prefix==$namespace)};isXML=document.contentType? function($element){return/xml/i.test(getDocument($element).contentType)}: function($element){return getDocument($element).documentElement.tagName!="HTML"};getTextContent=function($element){return $element.textContent||$element.innerText||_getTextContent($element)};
function _getTextContent($element){var $textContent="",$node,i;for(i=0;($node=$element.childNodes[i]);i++){switch($node.nodeType){case 11:case 1:$textContent+=_getTextContent($node);break;case 3:$textContent+=$node.nodeValue;break}}
return $textContent}}});cssQuery.addModule("css-level2", function(){selectors[">"]=function($results,$from,$tagName,$namespace){var $element,i,j;for(i=0;i<$from.length;i++){var $subset=childElements($from[i]);for(j=0;($element=$subset[j]);j++)
if(compareTagName($element,$tagName,$namespace))
$results.push($element)}};selectors["+"]=function($results,$from,$tagName,$namespace){for(var i=0;i<$from.length;i++){var $element=nextElementSibling($from[i]);if($element&&compareTagName($element,$tagName,$namespace))
$results.push($element)}};selectors["@"]=function($results,$from,$attributeSelectorID){var $test=attributeSelectors[$attributeSelectorID].test;var $element,i;for(i=0;($element=$from[i]);i++)
if($test($element)) $results.push($element)};pseudoClasses["first-child"]=function($element){return!previousElementSibling($element)};pseudoClasses["lang"]=function($element,$code){$code=new RegExp("^"+$code,"i");while($element&&!$element.getAttribute("lang")) $element=$element.parentNode;return $element&&$code.test($element.getAttribute("lang"))};AttributeSelector.NS_IE=/\\:/g;AttributeSelector.PREFIX="@";AttributeSelector.tests={};AttributeSelector.replace=function($match,$attribute,$namespace,$compare,$value){var $key=this.PREFIX+$match;if(!attributeSelectors[$key]){$attribute=this.create($attribute,$compare||"",$value||"");attributeSelectors[$key]=$attribute;attributeSelectors.push($attribute)}
return attributeSelectors[$key].id};AttributeSelector.parse=function($selector){$selector=$selector.replace(this.NS_IE,"|");var $match;while($match=$selector.match(this.match)){var $replace=this.replace($match[0],$match[1],$match[2],$match[3],$match[4]);$selector=$selector.replace(this.match,$replace)}
return $selector};AttributeSelector.create=function($propertyName,$test,$value){var $attributeSelector={};$attributeSelector.id=this.PREFIX+attributeSelectors.length;$attributeSelector.name=$propertyName;$test=this.tests[$test];$test=$test?$test(this.getAttribute($propertyName),getText($value)):false;$attributeSelector.test=new Function("e","return "+$test);return $attributeSelector};AttributeSelector.getAttribute=function($name){switch($name.toLowerCase()){case "id":return "e.id";case "class":return "e.className";case "for":return "e.htmlFor";case "href":if(isMSIE){return "String((e.outerHTML.match(/href=\\x22?([^\\s\\x22]*)\\x22?/)||[])[1]||'')"}}
return "e.getAttribute('"+$name.replace($NAMESPACE,":")+"')"};AttributeSelector.tests[""]=function($attribute){return $attribute};AttributeSelector.tests["="]=function($attribute,$value){return $attribute+"=="+Quote.add($value)};AttributeSelector.tests["~="]=function($attribute,$value){return "/(^| )"+regEscape($value)+"( |$)/.test("+$attribute+")"};AttributeSelector.tests["|="]=function($attribute,$value){return "/^"+regEscape($value)+"(-|$)/.test("+$attribute+")"};var _parseSelector=parseSelector;parseSelector=function($selector){return _parseSelector(AttributeSelector.parse($selector))}});cssQuery.addModule("css-level3", function(){selectors["~"]=function($results,$from,$tagName,$namespace){var $element,i;for(i=0;($element=$from[i]);i++){while($element=nextElementSibling($element)){if(compareTagName($element,$tagName,$namespace))
$results.push($element)}}};pseudoClasses["contains"]=function($element,$text){$text=new RegExp(regEscape(getText($text)));return $text.test(getTextContent($element))};pseudoClasses["root"]=function($element){return $element==getDocument($element).documentElement};pseudoClasses["empty"]=function($element){var $node,i;for(i=0;($node=$element.childNodes[i]);i++){if(thisElement($node)||$node.nodeType==3) return false}
return true};pseudoClasses["last-child"]=function($element){return!nextElementSibling($element)};pseudoClasses["only-child"]=function($element){$element=$element.parentNode;return firstElementChild($element)==lastElementChild($element)};pseudoClasses["not"]=function($element,$selector){var $negated=cssQuery($selector,getDocument($element));for(var i=0;i<$negated.length;i++){if($negated[i]==$element) return false}
return true};pseudoClasses["nth-child"]=function($element,$arguments){return nthChild($element,$arguments,previousElementSibling)};pseudoClasses["nth-last-child"]=function($element,$arguments){return nthChild($element,$arguments,nextElementSibling)};pseudoClasses["target"]=function($element){return $element.id==location.hash.slice(1)};pseudoClasses["checked"]=function($element){return $element.checked};pseudoClasses["enabled"]=function($element){return $element.disabled===false};pseudoClasses["disabled"]=function($element){return $element.disabled};pseudoClasses["indeterminate"]=function($element){return $element.indeterminate};AttributeSelector.tests["^="]=function($attribute,$value){return "/^"+regEscape($value)+"/.test("+$attribute+")"};AttributeSelector.tests["$="]=function($attribute,$value){return "/"+regEscape($value)+"$/.test("+$attribute+")"};AttributeSelector.tests["*="]=function($attribute,$value){return "/"+regEscape($value)+"/.test("+$attribute+")"};
function nthChild($element,$arguments,$traverse){switch($arguments){case "n":return true;case "even":$arguments="2n";break;case "odd":$arguments="2n+1"}
var $$children=childElements($element.parentNode);
function _checkIndex($index){var $index=($traverse==nextElementSibling)?$$children.length-$index:$index-1;return $$children[$index]==$element};if(!isNaN($arguments)) return _checkIndex($arguments);$arguments=$arguments.split("n");var $multiplier=parseInt($arguments[0]);var $step=parseInt($arguments[1]);if((isNaN($multiplier)||$multiplier==1)&&$step==0) return true;if($multiplier==0&&!isNaN($step)) return _checkIndex($step);if(isNaN($step)) $step=0;var $count=1;while($element=$traverse($element)) $count++;if(isNaN($multiplier)||$multiplier==1)
return($traverse==nextElementSibling)?($count<=$step):($step>=$count);return($count%$multiplier)==$step}});loaded=true;return cssQuery}();

/* - plone_javascript_variables.js - */
// http://www.mpu.gov.br/portal_javascripts/plone_javascript_variables.js?original=1
var portal_url='http://www.mpu.gov.br';var form_modified_message='O seu formulário não foi salvo. Todas as alterações efetuadas serão perdidas';var form_resubmit_message='Você já clicou no botão de envio. Você realmente quer enviar este formulário novamente?';var external_links_open_new_window=false;var external_links_in_content_only=true;

/* - nodeutilities.js - */
// http://www.mpu.gov.br/portal_javascripts/nodeutilities.js?original=1
function wrapNode(node,wrappertype,wrapperclass){var wrapper=document.createElement(wrappertype)
wrapper.className=wrapperclass;var innerNode=node.parentNode.replaceChild(wrapper,node);wrapper.appendChild(innerNode)};
function nodeContained(innernode,outernode){var node=innernode.parentNode;while(node!=document){if(node==outernode){return true}
node=node.parentNode}
return false};
function findContainer(node,func){while(node!=null){if(func(node)){return node}
node=node.parentNode}
return false};
function hasClassName(node,class_name){return new RegExp('\\b'+class_name+'\\b').test(node.className)};
function addClassName(node,class_name){if(!node.className){node.className=class_name} else if(!hasClassName(node,class_name)){var className=node.className+" "+class_name;node.className=className.split(/\s+/).join(' ')}};
function removeClassName(node,class_name){var className=node.className;if(className){className=className.replace(new RegExp('\\b'+class_name+'\\b'),'');className=className.replace(/\s+/g,' ');node.className=className.replace(/\s+$/g,'')}};
function replaceClassName(node,old_class,new_class,ignore_missing){if(ignore_missing&&!hasClassName(node,old_class)){addClassName(node,new_class)} else{var className=node.className;if(className){className=className.replace(new RegExp('\\b'+old_class+'\\b'),new_class);className=className.replace(/\s+/g,' ');node.className=className.replace(/\s+$/g,'')}}};
function walkTextNodes(node,func,data){if(!node){return false}
if(node.hasChildNodes){for(var i=0;i<node.childNodes.length;i++){walkTextNodes(node.childNodes[i],func,data)}
if(node.nodeType==3){func(node,data)}}};
function getInnerTextCompatible(node){var result=new Array();walkTextNodes(node,
function(n,d){d.push(n.nodeValue)},result);return result.join("")};
function getInnerTextFast(node){if(node.innerText){return node.innerText} else{return getInnerTextCompatible(node)}};
function sortNodes(nodes,fetch_func,cmp_func){if(!W3CDOM){return false};var SortNodeWrapper=function(node){this.value=fetch_func(node);this.cloned_node=node.cloneNode(true);this.toString=function(){if(this.value.toString){return this.value.toString()} else{return this.value}}}
var items=new Array();for(var i=0;i<nodes.length;i++){items.push(new SortNodeWrapper(nodes[i]))}
if(cmp_func){items.sort(cmp_func)} else{items.sort()}
for(var i=0;i<items.length;i++){var dest=nodes[i];dest.parentNode.replaceChild(items[i].cloned_node,dest)}};

/* - cookie_functions.js - */
// http://www.mpu.gov.br/portal_javascripts/cookie_functions.js?original=1
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString()} else{expires=""}
document.cookie=name+"="+escape(value)+expires+"; path=/;"};
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)==0){return unescape(c.substring(nameEQ.length,c.length))}}
return null};

/* - fullscreenmode.js - */
// http://www.mpu.gov.br/portal_javascripts/fullscreenmode.js?original=1
function toggleFullScreenMode(){var body=cssQuery('body')[0];if(document.getElementById('icon-full_screen')){var fsicon=document.getElementById('icon-full_screen')}
if(hasClassName(body,'fullscreen')){removeClassName(body,'fullscreen');createCookie('fullscreenMode','');if(fsicon){fsicon.src='fullscreenexpand_icon.gif'}} else{addClassName(body,'fullscreen');createCookie('fullscreenMode','1');if(fsicon){fsicon.src='fullscreencollapse_icon.gif'}}};
function fullscreenModeLoad(){if(document.getElementById('icon-full_screen')){var fsicon=document.getElementById('icon-full_screen')}
if(readCookie('fullscreenMode')=='1'){var body=cssQuery('body')[0];addClassName(body,'fullscreen');if(fsicon){fsicon.src='fullscreencollapse_icon.gif'}}};registerPloneFunction(fullscreenModeLoad)


/* - select_all.js - */
// http://www.mpu.gov.br/portal_javascripts/select_all.js?original=1
function selectAll(id,formName){if(formName==null){checkboxes=document.getElementsByName(id)
for(i=0;i<checkboxes.length;i++){checkboxes[i].checked=true }} else{for(i=0;i<document.forms[formName].elements.length;i++){if(document.forms[formName].elements[i].name==id){document.forms[formName].elements[i].checked=true}}}}
function deselectAll(id,formName){if(formName==null){checkboxes=document.getElementsByName(id)
for(i=0;i<checkboxes.length;i++){checkboxes[i].checked=false }} else{for(i=0;i<document.forms[formName].elements.length;i++){if(document.forms[formName].elements[i].name==id){document.forms[formName].elements[i].checked=false}}}}
function toggleSelect(selectbutton,id,initialState,formName){id=id||'ids:list'
if(selectbutton.isSelected==null){initialState=initialState||false;selectbutton.isSelected=initialState}
if(selectbutton.isSelected==false){selectbutton.setAttribute('src',portal_url+'/select_none_icon.gif');selectbutton.isSelected=true;return selectAll(id,formName)} else{selectbutton.setAttribute('src',portal_url+'/select_all_icon.gif');selectbutton.isSelected=false;return deselectAll(id,formName)}}


/* - dragdropreorder.js - */
// http://www.mpu.gov.br/portal_javascripts/dragdropreorder.js?original=1
var ploneDnDReorder={}
ploneDnDReorder.dragging=null;ploneDnDReorder.table=null;ploneDnDReorder.rows=null;ploneDnDReorder.isDraggable=function(node){return hasClassName(node,'draggable')};ploneDnDReorder.doDown=function(e){if(!e) var e=window.event;var target=findContainer(this,ploneDnDReorder.isDraggable);if(target==null)
return;for(var i=0;i<ploneDnDReorder.rows.length;i++)
ploneDnDReorder.rows[i].onmousemove=ploneDnDReorder.doDrag;ploneDnDReorder.dragging=target;ploneDnDReorder.dragging._position=ploneDnDReorder.getPos(ploneDnDReorder.dragging);addClassName(ploneDnDReorder.dragging,"dragging");return false}
ploneDnDReorder.getPos=function(node){var children=node.parentNode.childNodes;var pos=0;for(var i=0;i<children.length;i++){if(node==children[i])
return pos;if(hasClassName(children[i],"draggable"))
pos++}
return null}
ploneDnDReorder.doDrag=function(e){if(!e) var e=window.event;if(!ploneDnDReorder.dragging)
return;var target=this;if(!target)
return;if(target.id!=ploneDnDReorder.dragging.id){ploneDnDReorder.swapElements(target,ploneDnDReorder.dragging)}
return false}
ploneDnDReorder.swapElements=function(child1,child2){var parent=child1.parentNode;var children=parent.childNodes;var items=new Array();for(var i=0;i<children.length;i++){var node=children[i];items[i]=node;if(node.id){removeClassName(node,"even");removeClassName(node,"odd");if(node.id==child1.id)
items[i]=child2;if(node.id==child2.id)
items[i]=child1}}
Sarissa.clearChildNodes(parent);var pos=0;for(var i=0;i<items.length;i++){var node=parent.appendChild(items[i]);if(node.id){if(pos%2)
addClassName(node,"even");else
addClassName(node,"odd");pos++}}}
ploneDnDReorder.doUp=function(e){if(!e) var e=window.event;if(!ploneDnDReorder.dragging)
return;removeClassName(ploneDnDReorder.dragging,"dragging");ploneDnDReorder.updatePositionOnServer();ploneDnDReorder.dragging._position=null;try{delete ploneDnDReorder.dragging._position} catch(e){}
ploneDnDReorder.dragging=null;for(var i=0;i<ploneDnDReorder.rows.length;i++)
ploneDnDReorder.rows[i].onmousemove=null;return false}
ploneDnDReorder.updatePositionOnServer=function(){var delta=ploneDnDReorder.getPos(ploneDnDReorder.dragging)-ploneDnDReorder.dragging._position;if(delta==0)
return;var req=new XMLHttpRequest();req.open("POST","folder_moveitem",true);req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var item_id=ploneDnDReorder.dragging.id.substr('folder-contents-item-'.length);req.send("item_id="+item_id+"&delta:int="+delta)}
ploneDnDReorder.initializeDragDrop=function(){ploneDnDReorder.table=cssQuery("table#sortable")[0];if(!ploneDnDReorder.table)
return;ploneDnDReorder.rows=cssQuery("table#sortable > tr,"+"table#sortable > tbody > tr");var targets=cssQuery("table#sortable > tr > td,"+"table#sortable > tbody > tr > td");for(var i=0;i<targets.length;i++){if(hasClassName(targets[i],'notDraggable'))
continue;targets[i].onmousedown=ploneDnDReorder.doDown;targets[i].onmouseup=ploneDnDReorder.doUp;addClassName(targets[i],"draggingHook")}}
registerPloneFunction(ploneDnDReorder.initializeDragDrop);

/* - mark_special_links.js - */
// http://www.mpu.gov.br/portal_javascripts/mark_special_links.js?original=1
function scanforlinks(){if(!W3CDOM){return false}
if((typeof external_links_in_content_only!='undefined')&&(external_links_in_content_only==false)){links=document.getElementsByTagName('a');for(i=0;i<links.length;i++){if((links[i].getAttribute('href'))&&(links[i].className.indexOf('link-plain')==-1)){var linkval=links[i].getAttribute('href');if(linkval.toLowerCase().indexOf(window.location.protocol+'//'+window.location.host)==0){} else if(linkval.indexOf('http:')!=0){} else{links[i].setAttribute('target','_blank')}}}}
contentarea=getContentArea();if(!contentarea)
return false;links=contentarea.getElementsByTagName('a');for(i=0;i<links.length;i++){if((links[i].getAttribute('href'))&&(links[i].className.indexOf('link-plain')==-1)){var linkval=links[i].getAttribute('href');if(linkval.toLowerCase().indexOf(window.location.protocol+'//'+window.location.host)==0){} else if(linkval.indexOf('http:')!=0){protocols=['mailto','ftp','news','irc','h323','sip','callto','https','feed','webcal'];for(p=0;p<protocols.length;p++){if(linkval.indexOf(protocols[p]+':')==0){wrapNode(links[i],'span','link-'+protocols[p]);break}}} else{if(links[i].getElementsByTagName('img').length==0){wrapNode(links[i],'span','link-external')}
if((typeof external_links_open_new_window!='undefined')&&(external_links_open_new_window==true)){links[i].setAttribute('target','_blank')}}}}};registerPloneFunction(scanforlinks);

/* - collapsiblesections.js - */
// http://www.mpu.gov.br/portal_javascripts/collapsiblesections.js?original=1
function isCollapsible(node){if(hasClassName(node,'collapsible')){return true}
return false};
function toggleCollapsible(event){if(!event) var event=window.event;if(!this.tagName&&(this.tagName=='DT'||this.tagName=='dt')){return true}
var container=findContainer(this,isCollapsible);if(!container){return true}
if(hasClassName(container,'collapsedBlockCollapsible')){replaceClassName(container,'collapsedBlockCollapsible','expandedBlockCollapsible')} else if(hasClassName(container,'expandedBlockCollapsible')){replaceClassName(container,'expandedBlockCollapsible','collapsedBlockCollapsible')} else if(hasClassName(container,'collapsedInlineCollapsible')){replaceClassName(container,'collapsedInlineCollapsible','expandedInlineCollapsible')} else if(hasClassName(container,'expandedInlineCollapsible')){replaceClassName(container,'expandedInlineCollapsible','collapsedInlineCollapsible')}};
function activateCollapsibles(){if(!W3CDOM){return false}
var collapsibles=cssQuery('dl.collapsible');for(var i=0;i<collapsibles.length;i++){var collapsible=collapsibles[i];var collapsible_header=cssQuery('dt.collapsibleHeader',collapsible)[0];collapsible_header.onclick=toggleCollapsible;if(hasClassName(collapsible,'inline')){if(hasClassName(collapsible,'collapsedOnLoad')){replaceClassName(collapsible,'collapsedOnLoad','collapsedInlineCollapsible')} else{addClassName(collapsible,'expandedInlineCollapsible')}} else{if(hasClassName(collapsible,'collapsedOnLoad')){replaceClassName(collapsible,'collapsedOnLoad','collapsedBlockCollapsible')} else{addClassName(collapsible,'expandedBlockCollapsible')}}}};registerPloneFunction(activateCollapsibles);

/* - highlightsearchterms.js - */
// http://www.mpu.gov.br/portal_javascripts/highlightsearchterms.js?original=1
function highlightTermInNode(node,word){var contents=node.nodeValue;var index=contents.toLowerCase().indexOf(word.toLowerCase());if(index<0){return false};var parent=node.parentNode;if(parent.className!="highlightedSearchTerm"){var hiword=document.createElement("span");hiword.className="highlightedSearchTerm";hiword.appendChild(document.createTextNode(contents.substr(index,word.length)));parent.insertBefore(document.createTextNode(contents.substr(0,index)),node);parent.insertBefore(hiword,node);parent.insertBefore(document.createTextNode(contents.substr(index+word.length)),node);parent.removeChild(node)}}
function highlightSearchTerms(terms,startnode){if(!W3CDOM){return false};if(!terms){return false};if(!startnode){return false};for(var term_index=0;term_index<terms.length;term_index++){var term=terms[term_index];if(term.length<1)
continue;var term_lower=term.toLowerCase();if(term_lower!='not'&&term_lower!='and'&&term_lower!='or'){walkTextNodes(startnode,highlightTermInNode,term)}}}
function getSearchTermsFromURI(uri){var query;if(typeof decodeURI!='undefined'){query=decodeURI(uri)} else if(typeof unescape!='undefined'){query=unescape(uri)} else{}
var result=new Array();if(window.decodeReferrer){var referrerSearch=decodeReferrer();if(null!=referrerSearch&&referrerSearch.length>0){result=referrerSearch}}
var qfinder=new RegExp("searchterm=([^&]*)","gi");var qq=qfinder.exec(query);if(qq&&qq[1]){var terms=qq[1].replace(/\+/g,' ').split(/\s+/);for(var i=0;i<terms.length;i++){if(terms[i]!=''){result.push(terms[i])}}
return result}
return result.length==0?false:result}
function highlightSearchTermsFromURI(){if(!W3CDOM){return false};var terms=getSearchTermsFromURI(window.location.search);var contentarea=getContentArea();highlightSearchTerms(terms,contentarea)}
registerPloneFunction(highlightSearchTermsFromURI);

/* - se-highlight.js - */
// http://www.mpu.gov.br/portal_javascripts/se-highlight.js?original=1
var searchEngines=[['^http://([^.]+\\.)?google.*','q='],['^http://search\\.yahoo.*','p='],['^http://search\\.msn.*','q='],['^http://search\\.aol.*','userQuery='],['^http://(www\\.)?altavista.*','q='],['^http://(www\\.)?feedster.*','q='],['^http://search\\.lycos.*','query='],['^http://(www\\.)?alltheweb.*','q='],['^http://(www\\.)?ask\\.com.*','q=']]
function decodeReferrer(ref){if(null==ref&&document.referrer){ref=document.referrer}
if(!ref) return null;var match=new RegExp('');var seQuery='';for(var i=0;i<searchEngines.length;i++){if(!match.compile){match=new RegExp(searchEngines[i][0],'i')} else{match.compile(searchEngines[i][0],'i')}
if(ref.match(match)){if(!match.compile){match=new RegExp('^.*[?&]'+searchEngines[i][1]+'([^&]+)&?.*$','i')} else{match.compile('^.*[?&]'+searchEngines[i][1]+'([^&]+)&?.*$')}
seQuery=ref.replace(match,'$1');if(seQuery){seQuery=decodeURIComponent(seQuery);seQuery=seQuery.replace(/\'|"/, '');return seQuery.split(/[\s,\+\.]+/)}}}
return null}


/* - first_input_focus.js - */
// http://www.mpu.gov.br/portal_javascripts/first_input_focus.js?original=1
function setFocus(){if(!W3CDOM){return false};var xre=new RegExp(/\berror\b/);for(var f=0;(formnode=document.getElementsByTagName('form').item(f));f++){for(var i=0;(node=formnode.getElementsByTagName('div').item(i));i++){if(xre.exec(node.className)){for(var j=0;(inputnode=node.getElementsByTagName('input').item(j));j++){try{if(inputnode.focus){inputnode.focus();return}} catch(e){}}}}}}
registerPloneFunction(setFocus)


/* - folder_contents_filter.js - */
// http://www.mpu.gov.br/portal_javascripts/folder_contents_filter.js?original=1
function submitFolderAction(folderAction){document.folderContentsForm.action=document.folderContentsForm.action+'/'+folderAction;document.folderContentsForm.submit()}
function submitFilterAction(){document.folderContentsForm.action=document.folderContentsForm.action+'/folder_contents';filter_selection=document.getElementById('filter_selection');for(var i=0;i<filter_selection.length;i++){if(filter_selection.options[i].selected){if(filter_selection.options[i].value=='#'){document.folderContentsForm.filter_state.value='clear_view_filter'}
else{document.folderContentsForm.filter_state.value='set_view_filter'}}}
document.folderContentsForm.submit()}


/* - folder_contents_hideAddItems.js - */
// http://www.mpu.gov.br/portal_javascripts/folder_contents_hideAddItems.js?original=1
function hideTraditionalAddItemPullDown(){pullDown=document.getElementById('traditional-add-item-pulldown');if(pullDown){pullDown.style.display='none'}}
registerPloneFunction(hideTraditionalAddItemPullDown)


/* - styleswitcher.js - */
// http://www.mpu.gov.br/portal_javascripts/styleswitcher.js?original=1
function setActiveStyleSheet(title,reset){if(!W3CDOM){return false};var i,a,main;for(i=0;(a=document.getElementsByTagName("link")[i]);i++){if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("title")){a.disabled=true;if(a.getAttribute("title")==title){a.disabled=false}}}
if(reset==1){createCookie("wstyle",title,365)}};
function setStyle(){var style=readCookie("wstyle");if(style!=null){setActiveStyleSheet(style,0)}};registerPloneFunction(setStyle);

/* - table_sorter.js - */
// http://www.mpu.gov.br/portal_javascripts/table_sorter.js?original=1
function compare(a,b){au=new String(a);bu=new String(b);if(au.charAt(4)!='-'&&au.charAt(7)!='-'){var an=parseFloat(au)
var bn=parseFloat(bu)}
if(isNaN(an)||isNaN(bn)){as=au.toLowerCase()
bs=bu.toLowerCase()
if(as>bs){return 1}
else{return-1}}
else{return an-bn}}
function getConcatenedTextContent(node){var _result="";if(node==null){return _result}
var childrens=node.childNodes;var i=0;while(i<childrens.length){var child=childrens.item(i);switch(child.nodeType){case 1:case 5:_result+=getConcatenedTextContent(child);break;case 3:case 2:case 4:_result+=child.nodeValue;break;case 6:case 7:case 8:case 9:case 10:case 11:case 12:break}
i++}
return _result}
function sort(e){var el=window.event?window.event.srcElement:e.currentTarget;var a=new Array();if(el.nodeName=='IMG') el=el.parentNode;var name=el.childNodes.item(1).nodeValue;var dad=el.parentNode;var node;for(var im=0;(node=dad.getElementsByTagName("th").item(im));im++){if(node.lastChild.nodeName=='IMG'){lastindex=node.getElementsByTagName('img').length-1;node.getElementsByTagName('img').item(lastindex).setAttribute('src',portal_url+'/arrowBlank.gif')}}
for(var i=0;(node=dad.getElementsByTagName("th").item(i));i++){var xre=new RegExp(/\bnosort\b/);if(!xre.exec(node.className)&&node.childNodes.item(1).nodeValue==name){lastindex=node.getElementsByTagName('img').length-1;node.getElementsByTagName('img').item(lastindex).setAttribute('src',portal_url+'/arrowUp.gif');break}}
var tbody=dad.parentNode.parentNode.getElementsByTagName("tbody").item(0);for(var j=0;(node=tbody.getElementsByTagName("tr").item(j));j++){a[j]=new Array();a[j][0]=getConcatenedTextContent(node.getElementsByTagName("td").item(i));a[j][1]=getConcatenedTextContent(node.getElementsByTagName("td").item(1));a[j][2]=getConcatenedTextContent(node.getElementsByTagName("td").item(0));a[j][3]=node}
if(a.length>1){a.sort(compare);if(a[0][0]==getConcatenedTextContent(tbody.getElementsByTagName("tr").item(0).getElementsByTagName("td").item(i))&&a[1][0]==getConcatenedTextContent(tbody.getElementsByTagName("tr").item(1).getElementsByTagName("td").item(i))){a.reverse();lastindex=el.getElementsByTagName('img').length-1;el.getElementsByTagName('img').item(lastindex).setAttribute('src',portal_url+'/arrowDown.gif')}}
for(var j=0;j<a.length;j++){a[j][3].className=((j%2)==0)?'odd':'even';tbody.appendChild(a[j][3])}}
function initalizeTableSort(e){if(!W3CDOM){return false};var tbls=document.getElementsByTagName('table');for(var t=0;t<tbls.length;t++){var re=new RegExp(/\blisting\b/)
var xre=new RegExp(/\bnosort\b/)
if(re.exec(tbls[t].className)&&!xre.exec(tbls[t].className)){try{var thead=tbls[t].getElementsByTagName("thead").item(0);var node;blankarrow=document.createElement('img');blankarrow.setAttribute('src',portal_url+'/arrowBlank.gif');blankarrow.setAttribute('height',6);blankarrow.setAttribute('width',9);initialsort=false;for(var i=0;(node=thead.getElementsByTagName("th").item(i));i++){if(!xre.exec(node.className)){node.insertBefore(blankarrow.cloneNode(1),node.firstChild);node.style.cursor='pointer';if(!initialsort){initialsort=true;uparrow=document.createElement('img');uparrow.setAttribute('src',portal_url+'/arrowUp.gif');uparrow.setAttribute('height',6);uparrow.setAttribute('width',9);node.appendChild(uparrow)} else{node.appendChild(blankarrow.cloneNode(1))}
if(node.addEventListener) node.addEventListener("click",sort,false);else if(node.attachEvent) node.attachEvent("onclick",sort)}}} catch(er){}}}}
registerPloneFunction(initalizeTableSort)


/* - calendar_formfield.js - */
// http://www.mpu.gov.br/portal_javascripts/calendar_formfield.js?original=1
function onJsCalendarDateUpdate(cal){var year=cal.params.input_id_year;var month=cal.params.input_id_month;var day=cal.params.input_id_day;var daystr=''+cal.date.getDate();if(daystr.length==1)
daystr='0'+daystr;var monthstr=''+(cal.date.getMonth()+1);if(monthstr.length==1)
monthstr='0'+monthstr;cal.params.inputField.value=''+cal.date.getFullYear()+'/'+monthstr+'/'+daystr
year.value=cal.params.inputField.value.substring(0,4);month.value=cal.params.inputField.value.substring(5,7);day.value=cal.params.inputField.value.substring(8,10)}
function showJsCalendar(input_id_anchor,input_id,input_id_year,input_id_month,input_id_day,input_id_hour,input_id_minute,yearStart,yearEnd){var input_id_anchor=document.getElementById(input_id_anchor);var input_id=document.getElementById(input_id);var input_id_year=document.getElementById(input_id_year);var input_id_month=document.getElementById(input_id_month);var input_id_day=document.getElementById(input_id_day);var format='y/mm/dd';var dateEl=input_id;var mustCreate=false;var cal=window.calendar;var params={'range':[yearStart,yearEnd],inputField:input_id,input_id_year:input_id_year,input_id_month:input_id_month,input_id_day:input_id_day};
function param_default(pname,def){if(typeof params[pname]=="undefined"){params[pname]=def}};param_default("inputField",null);param_default("displayArea",null);param_default("button",null);param_default("eventName","click");param_default("ifFormat","%Y/%m/%d");param_default("daFormat","%Y/%m/%d");param_default("singleClick",true);param_default("disableFunc",null);param_default("dateStatusFunc",params["disableFunc"]);param_default("dateText",null);param_default("firstDay",1);param_default("align","Bl");param_default("range",[1900,2999]);param_default("weekNumbers",true);param_default("flat",null);param_default("flatCallback",null);param_default("onSelect",null);param_default("onClose",null);param_default("onUpdate",null);param_default("date",null);param_default("showsTime",false);param_default("timeFormat","24");param_default("electric",true);param_default("step",2);param_default("position",null);param_default("cache",false);param_default("showOthers",false);param_default("multiple",null);if(!(cal&&params.cache)){window.calendar=cal=new Calendar(params.firstDay,null,onJsCalendarDateUpdate,
function(cal){cal.hide()});cal.time24=true;cal.weekNumbers=true;mustCreate=true} else{cal.hide()}
cal.showsOtherMonths=false;cal.yearStep=2;cal.setRange(yearStart,yearEnd);cal.params=params;cal.setDateStatusHandler(null);cal.getDateText=null;cal.setDateFormat(format);if(mustCreate)
cal.create();cal.refresh();if(!params.position)
cal.showAtElement(input_id_anchor,null);else
cal.showAt(params.position[0],params.position[1]);return false}
function update_date_field(field,year,month,day,hour,minute,ampm){var field=document.getElementById(field)
var date=document.getElementById(date)
var year=document.getElementById(year)
var month=document.getElementById(month)
var day=document.getElementById(day)
var hour=document.getElementById(hour)
var minute=document.getElementById(minute)
var ampm=document.getElementById(ampm)
if(0<year.value){field.value=year.value+"-"+month.value+"-"+day.value+" "+hour.value+":"+minute.value
if(ampm&&ampm.value)
field.value=field.value+" "+ampm.value}
else{field.value=''
month.options[0].selected=1
day.options[0].selected=1
hour.options[0].selected=1
minute.options[0].selected=1
if(ampm&&ampm.options)
ampm.options[0].selected=1}}


/* - calendarpopup.js - */
// http://www.mpu.gov.br/portal_javascripts/calendarpopup.js?original=1
function showDay(date){document.getElementById('day'+date).style.visibility='visible';return true}
function hideDay(date){document.getElementById('day'+date).style.visibility='hidden';return true}


/* - ie5fixes.js - */
// http://www.mpu.gov.br/portal_javascripts/ie5fixes.js?original=1
function hackPush(el){this[this.length]=el}
function hackPop(){var N=this.length-1,el=this[N];this.length=N
return el}
function hackShift(){var one=this[0],N=this.length;for(var i=1;i<N;i++){this[i-1]=this[i]}
this.length=N-1
return one}
var testPushPop=new Array();if(testPushPop.push){}else{Array.prototype.push=hackPush
Array.prototype.pop=hackPop
Array.prototype.shift=hackShift}


/* - formUnload.js - */
// http://www.mpu.gov.br/portal_javascripts/formUnload.js?original=1
if(!window.beforeunload)(function(){var BeforeUnloadHandler=function(){var self=this;this.message=window.form_modified_message||"Your form has not been saved. All changes you have made will be lost.";this.forms=[];this.chkId=[];this.chkType=new this.CheckType();this.handlers=[this.isAnyFormChanged];this.submitting=false;this.execute=function(event){if(self.submitting) return;if(!event) event=window.event;for(var i=0;i<self.handlers.length;i++){var fn=self.handlers[i];var message=message||fn.apply(self)}
if(message===true) message=self.message;if(message===false) message=undefined;if(event&&message){event.returnValue=message}
return message}
this.execute.tool=this}
var Class=BeforeUnloadHandler.prototype;Class.isAnyFormChanged=function(){for(var i=0;i<this.forms.length;i++){var form=this.forms[i];if(this.isElementChanged(form)){return true}}
return false}
Class.addHandler=function(fn){this.handlers.push(fn)}
Class.onsubmit=function(){var tool=window.onbeforeunload&&window.onbeforeunload.tool;tool.submitting=true}
Class.addForm=function(form){for(var i=0;i<this.forms.length;i++){if(this.forms[i]==form) return}
this.forms.push(form);form.onsubmit=this.onsubmit;var elements=form.getElementsByTagName('input');for(var j=0;j<elements.length;j++){var ele=elements[j];if(ele.type=='hidden'){ele.setAttribute('originalValue',ele.defaultValue)}}}
Class.addForms=function(){for(var i=0;i<arguments.length;i++){var element=arguments[i];if(!element) continue;if(element.tagName=='FORM'){this.addForm(element)}
else{var forms=element.getElementsByTagName('form');for(var j=0;j<forms.length;j++){this.addForm(forms[j])}}}}
Class.removeForms=function(){for(var i=0;i<arguments.length;i++){var element=arguments[i];if(!element) continue;if(element.tagName=='FORM'){for(var j=0;j<arguments.length;j++){if(this.forms[j]==element){this.forms.splice(j--,1);element.onsubmit=null}}} else{var forms=element.getElementsByTagName('form');for(var j=0;j<forms.length;j++){this.removeForms(forms[j])}}}}
Class.CheckType=function(){};var c=Class.CheckType.prototype;c.checkbox=c.radio=function(ele){return ele.checked!=ele.defaultChecked}
c.password=c.textarea=c.text=function(ele){return ele.value!=ele.defaultValue}
c.hidden=function(ele){var orig=ele.getAttribute("originalValue");return orig&&(ele.value!=orig)}
c['select-one']=function(ele){for(var i=0 ;i<ele.length;i++){var opt=ele.options[i];if(opt.selected!=opt.defaultSelected){if(i===0&&opt.selected) continue;return true}}
return false}
c['select-multiple']=function(ele){for(var i=0 ;i<ele.length;i++){var opt=ele.options[i];if(opt.selected!=opt.defaultSelected){return true}}
return false}
Class.chk_form=function(form){var elements=form.elements;for(var i=0;i<elements.length;i++){var element=elements[i];if(this.isElementChanged(element)){return true}}
return false}
Class.isElementChanged=function(ele){var method=ele.id&&this.chkId[ele.id];if(!method&&ele.type&&ele.name)
method=this.chkType[ele.type];if(!method&&ele.tagName)
method=this['chk_'+ele.tagName.toLowerCase()];return method?method.apply(this,[ele]):false};window.onbeforeunload=new BeforeUnloadHandler().execute;registerPloneFunction(function(){if(!W3CDOM){return false};var tool=window.onbeforeunload&&window.onbeforeunload.tool;var content=getContentArea();if(tool&&content){var forms=cssQuery('form.enableUnloadProtection');for(var i=0;i<forms.length;i++){tool.addForm(forms[i])}}})})();

/* - sarissa.js - */
// http://www.mpu.gov.br/portal_javascripts/sarissa.js?original=1
function Sarissa(){};Sarissa.PARSED_OK="Document contains no parsing errors";Sarissa.IS_ENABLED_TRANSFORM_NODE=false;Sarissa.IS_ENABLED_XMLHTTP=false;Sarissa.IS_ENABLED_SELECT_NODES=false;var _sarissa_iNsCounter=0;var _SARISSA_IEPREFIX4XSLPARAM="";var _SARISSA_HAS_DOM_IMPLEMENTATION=document.implementation&&true;var _SARISSA_HAS_DOM_CREATE_DOCUMENT=_SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.createDocument;var _SARISSA_HAS_DOM_FEATURE=_SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.hasFeature;var _SARISSA_IS_MOZ=_SARISSA_HAS_DOM_CREATE_DOCUMENT&&_SARISSA_HAS_DOM_FEATURE;var _SARISSA_IS_SAFARI=navigator.userAgent.toLowerCase().indexOf("applewebkit")!=-1;var _SARISSA_IS_IE=document.all&&window.ActiveXObject&&navigator.userAgent.toLowerCase().indexOf("msie")>-1&&navigator.userAgent.toLowerCase().indexOf("opera")==-1;if(!window.Node||!window.Node.ELEMENT_NODE){var Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}};if(_SARISSA_IS_IE){_SARISSA_IEPREFIX4XSLPARAM="xsl:";var _SARISSA_DOM_PROGID="";var _SARISSA_XMLHTTP_PROGID="";pickRecentProgID=function(idList,enabledList){var bFound=false;for(var i=0;i<idList.length&&!bFound;i++){try{var oDoc=new ActiveXObject(idList[i]);o2Store=idList[i];bFound=true;for(var j=0;j<enabledList.length;j++)
if(i<=enabledList[j][1])
Sarissa["IS_ENABLED_"+enabledList[j][0]]=true}catch(objException){}};if(!bFound)
throw "Could not retreive a valid progID of Class: "+idList[idList.length-1]+". (original exception: "+e+")";idList=null;return o2Store};_SARISSA_DOM_PROGID=pickRecentProgID(["Msxml2.DOMDocument.5.0","Msxml2.DOMDocument.4.0","Msxml2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"],[["SELECT_NODES",2],["TRANSFORM_NODE",2]]);_SARISSA_XMLHTTP_PROGID=pickRecentProgID(["Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],[["XMLHTTP",4]]);_SARISSA_THREADEDDOM_PROGID=pickRecentProgID(["Msxml2.FreeThreadedDOMDocument.5.0","MSXML2.FreeThreadedDOMDocument.4.0","MSXML2.FreeThreadedDOMDocument.3.0"]);_SARISSA_XSLTEMPLATE_PROGID=pickRecentProgID(["Msxml2.XSLTemplate.5.0","Msxml2.XSLTemplate.4.0","MSXML2.XSLTemplate.3.0"],[["XSLTPROC",2]]);pickRecentProgID=null;Sarissa.getDomDocument=function(sUri,sName){var oDoc=new ActiveXObject(_SARISSA_DOM_PROGID);if(sName){if(sUri){oDoc.loadXML("<a"+_sarissa_iNsCounter+":"+sName+" xmlns:a"+_sarissa_iNsCounter+"=\""+sUri+"\" />");++_sarissa_iNsCounter}
else
oDoc.loadXML("<"+sName+"/>")};return oDoc};Sarissa.getParseErrorText=function(oDoc){var parseErrorText=Sarissa.PARSED_OK;if(oDoc.parseError!=0){parseErrorText="XML Parsing Error: "+oDoc.parseError.reason+"\nLocation: "+oDoc.parseError.url+"\nLine Number "+oDoc.parseError.line+", Column "+oDoc.parseError.linepos+":\n"+oDoc.parseError.srcText+"\n";for(var i=0;i<oDoc.parseError.linepos;i++){parseErrorText+="-"};parseErrorText+="^\n"};return parseErrorText};Sarissa.setXpathNamespaces=function(oDoc,sNsSet){oDoc.setProperty("SelectionLanguage","XPath");oDoc.setProperty("SelectionNamespaces",sNsSet)};XSLTProcessor=function(){this.template=new ActiveXObject(_SARISSA_XSLTEMPLATE_PROGID);this.processor=null};XSLTProcessor.prototype.importStylesheet=function(xslDoc){var converted=new ActiveXObject(_SARISSA_THREADEDDOM_PROGID);converted.loadXML(xslDoc.xml);this.template.stylesheet=converted;this.processor=this.template.createProcessor();this.paramsSet=new Array()};XSLTProcessor.prototype.transformToDocument=function(sourceDoc){this.processor.input=sourceDoc;var outDoc=new ActiveXObject(_SARISSA_DOM_PROGID);this.processor.output=outDoc;this.processor.transform();return outDoc};XSLTProcessor.prototype.transformToFragment=function(sourceDoc,ownerDocument){return this.transformToDocument(sourceDoc)};XSLTProcessor.prototype.setParameter=function(nsURI,name,value){if(nsURI){this.processor.addParameter(name,value,nsURI)}else{this.processor.addParameter(name,value)};if(!this.paramsSet[""+nsURI]){this.paramsSet[""+nsURI]=new Array()};this.paramsSet[""+nsURI][name]=value};XSLTProcessor.prototype.getParameter=function(nsURI,name){if(this.paramsSet[""+nsURI]&&this.paramsSet[""+nsURI][name])
return this.paramsSet[""+nsURI][name];else
return null}}
else{if(_SARISSA_HAS_DOM_CREATE_DOCUMENT){if(window.XMLDocument){XMLDocument.prototype.onreadystatechange=null;XMLDocument.prototype.readyState=0;XMLDocument.prototype.parseError=0;var _SARISSA_SYNC_NON_IMPLEMENTED=false;try{XMLDocument.prototype.async=true;_SARISSA_SYNC_NON_IMPLEMENTED=true}catch(e){};XMLDocument.prototype._sarissa_load=XMLDocument.prototype.load;XMLDocument.prototype.load=function(sURI){var oDoc=document.implementation.createDocument("","",null);Sarissa.copyChildNodes(this,oDoc);this.parseError=0;Sarissa.__setReadyState__(this,1);try{if(this.async==false&&_SARISSA_SYNC_NON_IMPLEMENTED){var tmp=new XMLHttpRequest();tmp.open("GET",sURI,false);tmp.send(null);Sarissa.__setReadyState__(this,2);Sarissa.copyChildNodes(tmp.responseXML,this);Sarissa.__setReadyState__(this,3)}
else{this._sarissa_load(sURI)}}
catch(objException){this.parseError=-1}
finally{if(this.async==false){Sarissa.__handleLoad__(this)}};return oDoc}};Sarissa.__handleLoad__=function(oDoc){if(!oDoc.documentElement||oDoc.documentElement.tagName=="parsererror")
oDoc.parseError=-1;Sarissa.__setReadyState__(oDoc,4)};_sarissa_XMLDocument_onload=function(){Sarissa.__handleLoad__(this)};Sarissa.__setReadyState__=function(oDoc,iReadyState){oDoc.readyState=iReadyState;if(oDoc.onreadystatechange!=null&&typeof oDoc.onreadystatechange=="function")
oDoc.onreadystatechange()};Sarissa.getDomDocument=function(sUri,sName){var oDoc=document.implementation.createDocument(sUri?sUri:"",sName?sName:"",null);oDoc.addEventListener("load",_sarissa_XMLDocument_onload,false);return oDoc}}};if(!window.DOMParser){DOMParser=function(){};DOMParser.prototype.parseFromString=function(sXml,contentType){var doc=Sarissa.getDomDocument();doc.loadXML(sXml);return doc}};if(window.XMLHttpRequest){Sarissa.IS_ENABLED_XMLHTTP=true}
else if(_SARISSA_IS_IE){XMLHttpRequest=function(){return new ActiveXObject(_SARISSA_XMLHTTP_PROGID)};Sarissa.IS_ENABLED_XMLHTTP=true};if(!window.document.importNode&&_SARISSA_IS_IE){try{window.document.importNode=function(oNode,bChildren){var importNode=document.createElement("div");if(bChildren)
importNode.innerHTML=Sarissa.serialize(oNode);else
importNode.innerHTML=Sarissa.serialize(oNode.cloneNode(false));return importNode.firstChild}}catch(e){}};if(!Sarissa.getParseErrorText){Sarissa.getParseErrorText=function(oDoc){var parseErrorText=Sarissa.PARSED_OK;if(oDoc.parseError!=0){if(oDoc.documentElement.tagName=="parsererror"){parseErrorText=oDoc.documentElement.firstChild.data;parseErrorText+="\n"+oDoc.documentElement.firstChild.nextSibling.firstChild.data}
else if(oDoc.documentElement.tagName=="html"){parseErrorText=Sarissa.getText(oDoc.documentElement.getElementsByTagName("h1")[0],false)+"\n";parseErrorText+=Sarissa.getText(oDoc.documentElement.getElementsByTagName("body")[0],false)+"\n";parseErrorText+=Sarissa.getText(oDoc.documentElement.getElementsByTagName("pre")[0],false)}};return parseErrorText}};Sarissa.getText=function(oNode,deep){var s="";var nodes=oNode.childNodes;for(var i=0;i<nodes.length;i++){var node=nodes[i];var nodeType=node.nodeType;if(nodeType==Node.TEXT_NODE||nodeType==Node.CDATA_SECTION_NODE){s+=node.data}
else if(deep==true&&(nodeType==Node.ELEMENT_NODE||nodeType==Node.DOCUMENT_NODE||nodeType==Node.DOCUMENT_FRAGMENT_NODE)){s+=Sarissa.getText(node,true)}};return s};if(window.XMLSerializer){Sarissa.serialize=function(oDoc){return(new XMLSerializer()).serializeToString(oDoc)}}else{if((Sarissa.getDomDocument("","foo",null)).xml){Sarissa.serialize=function(oDoc){return oDoc.xml};XMLSerializer=function(){};XMLSerializer.prototype.serializeToString=function(oNode){return oNode.xml}}};Sarissa.stripTags=function(s){return s.replace(/<[^>]+>/g,"")};Sarissa.clearChildNodes=function(oNode){while(oNode.hasChildNodes()){oNode.removeChild(oNode.firstChild)}};Sarissa.copyChildNodes=function(nodeFrom,nodeTo,bPreserveExisting){if(!bPreserveExisting){Sarissa.clearChildNodes(nodeTo)};var ownerDoc=nodeTo.nodeType==Node.DOCUMENT_NODE?nodeTo:nodeTo.ownerDocument;var nodes=nodeFrom.childNodes;if(ownerDoc.importNode&&(!_SARISSA_IS_IE)){for(var i=0;i<nodes.length;i++){nodeTo.appendChild(ownerDoc.importNode(nodes[i],true))}}
else{for(var i=0;i<nodes.length;i++){nodeTo.appendChild(nodes[i].cloneNode(true))}}};Sarissa.moveChildNodes=function(nodeFrom,nodeTo,bPreserveExisting){if(!bPreserveExisting){Sarissa.clearChildNodes(nodeTo)};var nodes=nodeFrom.childNodes;if(nodeFrom.ownerDocument==nodeTo.ownerDocument){nodeTo.appendChild(nodes[i])}else{var ownerDoc=nodeTo.nodeType==Node.DOCUMENT_NODE?nodeTo:nodeTo.ownerDocument;if(ownerDoc.importNode&&(!_SARISSA_IS_IE)){for(var i=0;i<nodes.length;i++){nodeTo.appendChild(ownerDoc.importNode(nodes[i],true))}}
else{for(var i=0;i<nodes.length;i++){nodeTo.appendChild(nodes[i].cloneNode(true))}};Sarissa.clearChildNodes(nodeFrom)}};Sarissa.xmlize=function(anyObject,objectName,indentSpace){indentSpace=indentSpace?indentSpace:'';var s=indentSpace+'<'+objectName+'>';var isLeaf=false;if(!(anyObject instanceof Object)||anyObject instanceof Number||anyObject instanceof String||anyObject instanceof Boolean||anyObject instanceof Date){s+=Sarissa.escape(""+anyObject);isLeaf=true}else{s+="\n";var itemKey='';var isArrayItem=anyObject instanceof Array;for(var name in anyObject){s+=Sarissa.xmlize(anyObject[name],(isArrayItem?"array-item key=\""+name+"\"":name),indentSpace+"   ")};s+=indentSpace};return s+=(objectName.indexOf(' ')!=-1?"</array-item>\n":"</"+objectName+">\n")};Sarissa.escape=function(sXml){return sXml.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g, "&quot;").replace(/'/g,"&apos;")};Sarissa.unescape=function(sXml){return sXml.replace(/&apos;/g,"'").replace(/&quot;/g,"\"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")};

/* - login.js - */
// http://www.mpu.gov.br/portal_javascripts/login.js?original=1
function cookiesEnabled(){var c="areYourCookiesEnabled=0";document.cookie=c;var dc=document.cookie;if(dc.indexOf(c)==-1) return 0;c="areYourCookiesEnabled=1";document.cookie=c;dc=document.cookie;if(dc.indexOf(c)==-1) return 0;document.cookie="areYourCookiesEnabled=; expires=Thu, 01-Jan-70 00:00:01 GMT";return 1}
function setLoginVars(user_name_id,alt_user_name_id,password_id,empty_password_id,js_enabled_id,cookies_enabled_id){if(js_enabled_id){el=document.getElementById(js_enabled_id);if(el){el.value=1}}
if(cookies_enabled_id){el=document.getElementById(cookies_enabled_id);if(el){el.value=cookiesEnabled()}}
if(user_name_id&&alt_user_name_id){user_name=document.getElementById(user_name_id)
alt_user_name=document.getElementById(alt_user_name_id)
if(user_name&&alt_user_name){alt_user_name.value=user_name.value}}
if(password_id&&empty_password_id){password=document.getElementById(password_id)
empty_password=document.getElementById(empty_password_id)
if(password&&empty_password){if(password.value.length==0){empty_password.value='1'} else{empty_password.value='0'}}}
return 1}
function showCookieMessage(msg_id){msg=document.getElementById(msg_id)
if(msg){if(cookiesEnabled()){msg.style.display='none'} else{msg.style.display='block'}}}
function showEnableCookiesMessage(){showCookieMessage('enable_cookies_message')}
registerPloneFunction(showEnableCookiesMessage);

/* - formsubmithelpers.js - */
// http://www.mpu.gov.br/portal_javascripts/formsubmithelpers.js?original=1
function inputSubmitOnClick(event){if(!event) var event=window.event;if(hasClassName(this,'submitting')){return confirm(window.form_resubmit_message)} else{addClassName(this,'submitting')}
return true}
function registerSubmitHandler(){var nodes=cssQuery('input[type=submit]');for(var i=0;i<nodes.length;i++){var node=nodes[i];if(!node.onclick){node.onclick=inputSubmitOnClick}}}
registerPloneFunction(registerSubmitHandler);
