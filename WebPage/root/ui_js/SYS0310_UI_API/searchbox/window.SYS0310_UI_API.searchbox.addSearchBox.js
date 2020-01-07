//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/searchbox/window.SYS0310_UI_API.searchbox.addSearchBox.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Searchbox Component 추가
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.searchbox.addSearchBox = function( targetID )
{
	var PATH = window.SYS0310_UI_API.searchbox.HOST + "/";
	return window.SYS0310_UI_API.searchbox.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;