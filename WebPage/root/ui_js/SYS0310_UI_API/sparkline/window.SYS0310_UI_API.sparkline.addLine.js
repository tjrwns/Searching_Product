//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/sparkline/window.SYS0310_UI_API.sparkline.addLine.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Sparkline Line Component 추가
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.sparkline.addLine = function( targetID )
{
	var PATH = window.SYS0310_UI_API.sparkline.HOST + "Line/";
	return window.SYS0310_UI_API.sparkline.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;