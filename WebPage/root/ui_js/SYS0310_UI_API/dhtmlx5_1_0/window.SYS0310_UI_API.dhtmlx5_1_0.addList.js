//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/dhtmlx5_1_0/window.SYS0310_UI_API.dhtmlx5_1_0.addList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


/**
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.dhtmlx5_1_0.addList = function( targetID )
{
	var PATH = window.SYS0310_UI_API.dhtmlx5_1_0.HOST + "List/";
	return window.SYS0310_UI_API.dhtmlx5_1_0.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;