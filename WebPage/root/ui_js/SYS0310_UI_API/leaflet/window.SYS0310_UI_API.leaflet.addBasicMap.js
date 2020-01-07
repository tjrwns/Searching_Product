//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/leaflet/window.SYS0310_UI_API.leaflet.addBasicMap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


/**
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.leaflet.addBasicMap = function( targetID )
{
	var PATH = window.SYS0310_UI_API.leaflet.HOST + "/";
	return window.SYS0310_UI_API.leaflet.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;