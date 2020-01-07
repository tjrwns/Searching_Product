//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/echart_fancygrid/window.SYS0310_UI_API.echart_fancygrid.addGrid.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


/**
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.echart_fancygrid.addGrid = function( targetID )
{
	var PATH = window.SYS0310_UI_API.echart_fancygrid.HOST;
	return window.SYS0310_UI_API.echart_fancygrid.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;