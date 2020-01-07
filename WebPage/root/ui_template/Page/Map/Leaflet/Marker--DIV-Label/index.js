/*/
//APIDocument;
https://leafletjs.com/reference-1.5.0.html

http://localhost:49781/ui/Page/Map/Leaflet/Marker--DIV-Label/index.html
http://localhost:49781/ui/Page/Map/Leaflet/Marker--DIV-Label/index.html?data=[{%20%22nm_kr%22:%20%223CE%22,%20%22c%22:%20[37.5515438,126.9197803]%20},{%20%22nm_kr%22:%20%22%EC%95%84%EB%A6%AC%EB%94%B0%EC%9B%80%22,%20%22c%22:%20[37.5314481,126.97095239999999]%20}]
http://localhost:49781/ui/Page/Map/Leaflet/Marker--DIV-Label/index.html?url=http://localhost:49780/_CATEGORY.BRAND/allList/
http://localhost:49781/ui/Page/Map/Leaflet/Marker--DIV-Label/index.html?url=http://localhost:49780/_CATEGORY.COUNTRY/allList/

http://dnsproxy.shop:49781/ui/Page/Map/Leaflet/Marker--DIV-Label/index.html
http://dnsproxy.shop:49781/ui/Page/Map/Leaflet/Marker--DIV-Label/index.html?data=[{%20%22nm_kr%22:%20%223CE%22,%20%22c%22:%20[37.5515438,126.9197803]%20},{%20%22nm_kr%22:%20%22%EC%95%84%EB%A6%AC%EB%94%B0%EC%9B%80%22,%20%22c%22:%20[37.5314481,126.97095239999999]%20}]
http://dnsproxy.shop:49781/ui/Page/Map/Leaflet/Marker--DIV-Label/index.html?url=http://dnsproxy.shop:49780/_CATEGORY.BRAND/allList/
http://dnsproxy.shop:49781/ui/Page/Map/Leaflet/Marker--DIV-Label/index.html?url=http://dnsproxy.shop:49780/_CATEGORY.COUNTRY/allList/
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/Map/Leaflet/Marker--DIV-Label/index.js";
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
		ROOT : "ui/Page/Map/Leaflet/Marker--DIV-Label/index"
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


	//window.b2link.STATIC.CONST.ROOT_DIV.EL_APPLICATION.appendChild( o.ROOT );
	window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED.appendChild( o.ROOT );
	//window.b2link.element.mouseEnable( o.ROOT );
	window.b2link.element.mouseDisable( o.ROOT );

	return o;
})();

/**
 * 접속 URL에서 URI PARAMETERS를 추출 하여 초기값을 반영한다.
 * _setData, setWidth, setHeight등 각종 Setter또는 set Method에서 필요한 데이터를 설정하는 대상 객체
 *
 * @property {Array|Object} 필요에 따라 원하는 자료구조로 선언 가능, 기왕이면 Object로
 * <code>
 	//데이터 모델 형태 작성;
	//필요한 상태에 따라 프로퍼티 가감이 자유롭게 가능하다.;
	{
		, data : ""
		, height : {Number}
		, width : {Number}
		, url : ""
	}
 * </code>
 */
var _DATA = (function(){

	//Origin에서 URI Parameter를 추출한다.;
	var d = SUtilLocation.getObjectFromParamters();

	//초기 값으로 데이터를 불러올수 있는 url을 넘겨 받을 수 있다.;
	if( d.url )
	{
		//URI Parameter중 url은 decoding 한다.;
		d.url = window.b2link.uri.decodeURIComponent( d.url );

		//비동기 필요 데이터 요청;
		window.b2link.xhr.req_String( d.url, function( responseData ){
			window.TtwLog.log( _ELS.ROOT.id + ".url : " + d.url );

			//ERROR - 데이터가 없음;
			if( !responseData )
			{
				window.TtwLog.error( "[ ERROR ] - _DATA 생성 오류 : " + responseData );
				return;
			}

			var data = JSON.parse( responseData );

			//Set Width, Height;
			//if( d.width  ){ if( !_getWidth()  ) _setWidth(  d.width ); } else _setWidth( "100%" );
			//if( d.height ){ if( !_getHeight() ) _setHeight( d.height ); } else _setHeight( null );

			//d.data;
			d.data = data;

			//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
			_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( d );
		});

		return {};
	}

	if( !d.data ) d.data = [];

	return d;
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

/**
 * 이 컨트롤러에서 사용하는 컴포넌트 또는 메인 객체에 필요한 설정과 관련된 Option 값들을 정의 한다.
 * @property {Object}
 */
var _OPTIONS = (function(){

	var o = {};

		o.DivIcon = {};

	(function(){
		var common0 = '<div style="white-space: nowrap; box-sizing: border-box; font-size: 20px; ';

		o.DivIcon.TEXT_SHADOW_BLACK = common0 + 'color: #ffffff; text-shadow: -2px 0 #000000, 0 2px #000000, 2px 0 #000000, 0 -2px #000000;"><!=VAL=!></div>';
		o.DivIcon.TEXT_SHADOW_WHITE = common0 + 'color: #000000; text-shadow: -2px 0 #ffffff, 0 2px #ffffff, 2px 0 #ffffff, 0 -2px #ffffff;"><!=VAL=!></div>';
	})();

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

		//지도 띄우기;
		var els = _create__Component__Map();
		var elc = els[ 1 ];
			elc.super.addEvent__INITIALIZED( function( event ){

			});

		//window.b2link.event.DATA_LOAD_COMPLETE Event Listener 추가;
		_THIS.super.addEvent__DATA_LOAD_COMPLETE( function( event ){
			var EVENT_DATA = event.detail;

			//Event Dispatch 시키는 곳에서 이벤트 객체의 구조는 필요에 따라 변경 될 수 있다.;
			_draw( EVENT_DATA.data, null );
		});

		//_약속된 HTMLElement인 this.T.els.ROOT를 통해 window.b2link.event.INITIALIZED 이벤트를 Dispatch 시킨다.;
		_THIS.super.dispatchCE__INITIALIZED( _THIS );

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
 * 지도 띄우기
 * @function
 * @return [ {HTMLElement}, {Object} ]
 */
var _create__Component__Map = function()
{
	//----------Component 호출;
	var els = window.SYS0310_UI_API.leaflet.addBasicMap();

	//Map HTMLElement;
	var el = els[ 0 ];

	//Map HTMLElement's Controller;
	var elc = els[ 1 ];

	return els;
};

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

/**
 * 그리기
 * @function
  * @param {Object} data
 * <code>
	{
		data : []
	}
 * </code>
 *
 * @param {null|Object} options
 * <code>
	{
	}
 * </code>
 */
var _draw = function( data, options )
{
	//data Parameter 처리 - _DATA를 정의한 방식에 따라 로직이 달라져야 한다;
	if( data ) _setData({ data : data.data });
	else data = _DATA;

	//options Parameter 처리;
	if( options ) _setOptions( options );
	else options = _OPTIONS;

	//Marker 그리기;
	_draw.markers( data.data, options.DivIcon.TEXT_SHADOW_BLACK );
	//_draw.markers( data.data, options.DivIcon.TEXT_SHADOW_WHITE );
};

/**
 * 마커 추가
 * @function
 * @param {String} key key값
 * @param {Array} c 중심점 좌표 [ y, x ]
 * @param {String} html {HTMLDivElement}
 * @param {String} val val값
 */
_draw.addMarker = function( c, html, val ){
	var icon = window.ttw.gisPack.divIcon({ className : "", html : html });
	window.ttw.gisPack.marker( c, { icon : icon } ).addTo( window.GIS.MAP_BASIC.map );
};

/**
 * Marker 그리기
 * @function
 * @param {Array} data
 * <code>
	[
	]
 * </code>
 *
 * @param {HTMLString} markerTemplate
 */
_draw.markers = function( data, markerTemplate ){
	var io;
	var i=0,iLen=data.length;
	for( ;i<iLen;i++ )
	{
		var io = data[ i ];

		//좌표 데이터 체크;
		if( !io.c || io.c.length != 2 ) continue;

		var nm = io.nm_us;

		var html = markerTemplate.replace( "<!=VAL=!>", nm.replace( /\n/gi, "" ).replace( /\r\n/, "" ) );
		_draw.addMarker( io.c, html, nm );
	}
};

/**
 * 다시 그리기
 * @function
  * @param {Object} data
 * <code>
	{
		data : []
	}
 * </code>
 *
 * @param {null|Object} options
 * <code>
	{
	}
 * </code>
 */
var _redraw = function( data, options )
{
	//redraw를 위한 필요 로직 추가;

	//전체 마커 삭제?;

	_draw( data, options );
};

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * <code>
 	function( event ){
		var t = event.target//XHR;
		//...;
	}
 * </code>
 */
var _reqData = function( url, cbComplete )
{
	var FN = function( responseData ){
		//ERROR;
		if( !responseData )
		{
			window.TtwLog.error( "[ ERROR ] - _reqData - responseData : " + responseData );
			return;
		}

		var json = JSON.parse( responseData );

		_setData({ data : json });

		if( cbComplete ) cbComplete( json );

		//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
		_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( json );
	};

	window.b2link.xhr.req_String( url, FN );
};

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

//--------------------------------------------------SET;

/**
 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
 * @function
 * @param {Object} d url과 data는 병행 사용 불가능하다.
 * <code>
	{
		"url" : {String}
		, "data" : {Array}
		, "options" : {Object}
	}
 * </code>
 *
 * @param {null|Object} options
 * <code>
	{
	}
 * </code>
 */
var _setData = function( d )
{
	if( !d )
	{
		//window.TtwLog.error( "[ ERROR ] - _setData : d가 존재하지 않음" );
		return;
	}

	if( d )
	{
		if( d.options )
		{
			_setOptions( d.options );
		}

		if( d.data )
		{
			_DATA.data = d.data;
		}
		else
		{
			if( d.url )
			{
				_reqData( d.url, null );
			}
		}
	}
};

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

		_.draw = _draw;
		_.redraw = _redraw;

		_.reqData = _reqData;

		_.setData = _setData;

	//Resize 대상 객체를 Observer 패턴에 추가한다;
	//아직 기능 개발 되있지 않음;
	//필수 Interface가 존재함 - 미정의;
	//window.????.????.push( _ );

	if( !initialize._bInit ) initialize();

	return _;
})();