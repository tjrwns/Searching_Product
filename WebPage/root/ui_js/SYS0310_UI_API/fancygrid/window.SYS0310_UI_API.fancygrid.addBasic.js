//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/fancygrid/window.SYS0310_UI_API.fancygrid.addBasic.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


/**
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.fancygrid.addBasic = function( targetID )
{
	var PATH = window.SYS0310_UI_API.fancygrid.HOST + "Basic/";
	return window.SYS0310_UI_API.fancygrid.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;