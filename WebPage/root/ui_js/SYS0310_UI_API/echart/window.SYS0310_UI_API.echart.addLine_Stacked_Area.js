//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/echart/window.SYS0310_UI_API.echart.addLine_Stacked_Area.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


/**
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.echart.addLine_Stacked_Area = function( targetID )
{
	var PATH = window.SYS0310_UI_API.echart.HOST + "Line_Stacked_Area/";
	return window.SYS0310_UI_API.echart.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;