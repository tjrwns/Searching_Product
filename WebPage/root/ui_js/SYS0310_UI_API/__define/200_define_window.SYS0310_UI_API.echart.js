//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/__define/200_define_window.SYS0310_UI_API.echart.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0310_UI_API.echart;

window.SYS0310_UI_API.echart = window.SYS0310_UI_API.echart || {};

/**
 * ???/ui/Page/_Component/Chart/EChart/??? 를 사용하기 위한 호스트
 * 사용량 및 기타 여러 문제 발생시 Development-Component-UI 레파지토리로 이전 시킬수 있기 위해 HOST 개별 선언
 * Page 또는 컴포넌트 경로 강제성을 위해 지정
 * @property {String}
 */
window.SYS0310_UI_API.echart.HOST = window.b2link.url.getServerURL_WebServer_Self() + "/ui/Page/_Component/Chart/EChart/";

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} path
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.echart.add = function( path, targetID ){ return window.SYS0310_UI_API.Page.add( path, targetID ); };

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0310_UI_API.echart;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;