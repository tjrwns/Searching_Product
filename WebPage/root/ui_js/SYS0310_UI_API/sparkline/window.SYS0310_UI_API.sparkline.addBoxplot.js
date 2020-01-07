//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/sparkline/window.SYS0310_UI_API.sparkline.addBoxplot.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Sparkline Boxplot Component 추가
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.sparkline.addBoxplot = function( targetID )
{
	var PATH = window.SYS0310_UI_API.sparkline.HOST + "Boxplot/";
	return window.SYS0310_UI_API.sparkline.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;