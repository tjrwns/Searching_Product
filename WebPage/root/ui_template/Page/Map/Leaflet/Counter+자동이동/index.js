/*/
//APIDocument;
https://leafletjs.com/reference-1.5.0.html

http://localhost:49781/ui/Page/Map/Leaflet/_CATEGORY-BRAND/index.html

http://dnsproxy.shop:49781/ui/Page/Map/Leaflet/_CATEGORY-BRAND/index.html
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/Map/Leaflet/_CATEGORY-BRAND/Counter+자동이동/index.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 이 Private Scope 영역의 메인 객체
 * this 키워드는 사용하지 않는 다.(JS 버전 별 문제 타파)
 * Public Instance 들의 Reference를 담아 마지막에 반환 한다.
 * UI 호출 API를 통해 사용할시 이 _THIS가 els[ 1 ](JavaScript Contriller Object)가 된다.
 * @const
 * @property
 */
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Application({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Component({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Module({});
var _THIS = window.SYS0310_UI_INTERFACE.interface.Page({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Popup({});

//----------------------------------------------------------------------------------------------------;

//	IMPORT;

//----------------------------------------------------------------------------------------------------;

(function(){
	var HOST = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

	var f = window.b2link.util.importJS__Reuse;

		//f( HOST + "/js--GIS/___merge_min_all_1_0.js" );

	//CSS;
	var f = SUtilTemplateHTML.addCSS__URLToHead;
		//f( HOST + "/libs/Leaflet/leaflet.css" );
	//JS;
	//var f = window.b2link.util.importJS__Reuse;
	var f = SUtilTemplateHTML.addJS__URLToHead;
		//f( HOST + "/libs/Leaflet/leaflet.js", initialize );
})();

//----------------------------------------------------------------------------------------------------;

//	PACKAGE;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

/**
 * @const
 * @property
 */
var _CLASS = (function(){
	return {
	};
})();

/**
 * _IDS.ROOT는 약속된 명명
 * 이 컨트롤러 객체의 대상이 되는 최상위 HTMLElement는 ROOT로 지칭한다
 * @const
 * @property
 */
var _IDS = (function(){
	return {
		ROOT : "ui/Page/Map/Leaflet/_CATEGORY-BRAND/index"
	};
})();

/**
 * _ELS.ROOT는 약속된 명명
 * 이 컨트롤러 객체의 대상이 되는 최상위 HTMLElement는 ROOT로 지칭한다
 * @const
 * @property
 */
var _ELS = (function(){
	var o = {
		ROOT : window.document.getElementById( _IDS.ROOT )
	};


	window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED.appendChild( o.ROOT );
	//window.b2link.element.mouseEnable( o.ROOT );
	window.b2link.element.mouseDisable( o.ROOT );

	return o;
})();

/**
 * 이 화면 객체에서 필요에 의해 사용 하게 되는 URL을 사전에 정의 하기
 * 로직이나 기타 함수에서는 이 객체를 사용하여 URL을 활용 한다.
 * @const
 * @property
 */
var _URLS = (function(){
	var o = {};

	return o;
})();

//----------------------------------------------------------------------------------------------------;

//	EVENT - DISPATCH EVENTS;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

/**
 * 이 파일 내의 모든 전처리 Logic 및 Flow가 완료 된 후 필요한 객체를 생성 및 화면 표출 로직을 집어 넣는 함수
 * @function
 */
function initialize()
{
	try
	{
		//공통 Interface 규약 체크, Change UniqueId;
		_THIS.super.initialize();

		var els = window.SYS0310_UI_API.leaflet.addBasicMap( _ELS.ROOT.id );

		//Map HTMLElement;
		var el = els[ 0 ];

		//Map HTMLElement's Controller;
		var elc = els[ 1 ];


		//지도가 초기화 완료 된후 호출되는 콜백 함수(이벤트);
		elc.initialized = function(){
			var html = '<div style="font-size: 50px;">asdasd</div>';
			var myIcon = window.ttw.gisPack.divIcon({ className : 'my-div-icon', html : html });
			window.ttw.gisPack.marker( [ 37.510372649468756, 126.92659378051759 ], {icon : myIcon}).addTo(window.GIS.MAP_BASIC.map);
		};

		//...

		initialize._bInit = 1;
	}
	catch( er )
	{
		window.TtwLog.log( "[ ERROR ] - initialize - " + er );
		return;
	}
};
initialize._bInit = 0;

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
var _dispose = function()
{
	//dispose를 위한 각종 로직 삽입;

	//감지가 필요하면 삽입;
	//window.b2link.event.dispatchCE__DISPOSED_JS( _ELS.ROOT, _THIS );

	//----------마지막 라인에 필수 삽입;
	//이 객체에서 조작하는 대상 HTMLElement에 종속된 HTML을 제거한다;
	//이 객체에서 조작하는 대상 HTMLElement를 삭제한다;
	//_ELS.ROOT 를 제거했다는 dispatchCE__DISPOSED_EL 발생;
	_THIS.super.dispose();
	//----------마지막라인 에 필수 삽입;
};

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

//--------------------------------------------------SET;

//--------------------------------------------------GET / SET;

//--------------------------------------------------GETTER;

//--------------------------------------------------SETTER;

//--------------------------------------------------GETTER / SETTER;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

/**
 * PUBLIC API
 * @return
 */
(function(){
	var _ = _THIS;
		_.els = _ELS;
		_.dispose = _dispose;



	if( !initialize._bInit ) initialize();

	return _;
})();