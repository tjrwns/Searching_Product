//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_API/__define/000_define_window.SYS0310_UI_API.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0310_UI_API;

window.SYS0310_UI_API = window.SYS0310_UI_API || {};

//----------------------------------------------------------------------------------------------------;

/**
 * ./ui/Page/... 소스들을 컴포넌트로 사용하기 위한 기능 API
 * @property {Object}
 */
window.SYS0310_UI_API.Page = window.SYS0310_UI_API.Page || {};

/**
 * ./ui/Popup/... 을 활용 하기 위한 공통 API
 * @property {Object}
 */
window.SYS0310_UI_API.Popup = window.SYS0310_UI_API.Popup || {};

//----------------------------------------------------------------------------------------------------;

/**
 * ./ui/Page/??? 의 index.thtml, index.js를 호출하여 객체를 생성 후 반환한다
 * index.thtml, index.js 약속 파일
 * @function
 * @param {String} path
 * @param {String} targetID
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.SYS0310_UI_API.Page.add = function( path, targetID )
{
	return window.b2link.util.importHTMLJS(
		path + "index.thtml"
		, path + "index.js"
		//, ( targetID || window.b2link.STATIC.CONST.ROOT_DIV.ID_APPLICATION )
		, ( targetID || window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED )
	);
};

//----------------------------------------------------------------------------------------------------;

/**
 * ./ui/Popup/???의 index.html, index.js를 Popup으로 오픈 한다.
 * @function
 * @param {String} path
 * @return {Window}
 */
window.SYS0310_UI_API.Popup.open = function( path )
{
	return window.b2link.open.newWindow__CompactPopup__HTML_JS;
};

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0310_UI_API;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;