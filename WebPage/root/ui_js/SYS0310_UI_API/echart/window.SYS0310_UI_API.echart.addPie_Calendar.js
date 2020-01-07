//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/echart/window.SYS0310_UI_API.echart.addPie_Calendar.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


/**
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.echart.addPie_Calendar = function( targetID )
{
	var PATH = window.SYS0310_UI_API.echart.HOST + "Pie-Calendar/";
	return window.SYS0310_UI_API.echart.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;