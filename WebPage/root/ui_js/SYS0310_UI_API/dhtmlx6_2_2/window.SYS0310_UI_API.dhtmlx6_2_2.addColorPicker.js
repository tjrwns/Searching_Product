//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/dhtmlx6_2_2/window.SYS0310_UI_API.dhtmlx6_2_2.addColorPicker.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


/**
 * @function
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.dhtmlx6_2_2.addColorPicker = function( targetID )
{
	var PATH = window.SYS0310_UI_API.dhtmlx6_2_2.HOST + "ColorPicker/";
	return window.SYS0310_UI_API.dhtmlx6_2_2.add( PATH, targetID );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;