//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/sparkline/window.SYS0310_UI_API.sparkline.addPie.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Sparkline Pie Component 추가
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.sparkline.addPie = function( targetID )
{
	var PATH = window.SYS0310_UI_API.sparkline.HOST + "Pie/";
	return window.SYS0310_UI_API.sparkline.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;