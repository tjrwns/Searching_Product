//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/__define/200_define_window.SYS0310_UI_API.dhtmlx6_2_2.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0310_UI_API.dhtmlx6_2_2;

window.SYS0310_UI_API.dhtmlx6_2_2 = window.SYS0310_UI_API.dhtmlx6_2_2 || {};

/**
 * ???/ui/Page/_Component/Chart/EChart/??? 를 사용하기 위한 호스트
 * 사용량 및 기타 여러 문제 발생시 Development-Component-UI 레파지토리로 이전 시킬수 있기 위해 HOST 개별 선언
 * Page 또는 컴포넌트 경로 강제성을 위해 지정
 * @property {String}
 */
window.SYS0310_UI_API.dhtmlx6_2_2.HOST = window.b2link.url.getServerURL_WebServer_Self() + "/ui/Page/_Component/DHTMLX/6.2.2/";

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} path
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.dhtmlx6_2_2.add = function( path, targetID ){ return window.SYS0310_UI_API.Page.add( path, targetID ); };

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0310_UI_API.dhtmlx6_2_2;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;