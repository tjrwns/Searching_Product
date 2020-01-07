/*/
//APIDocument;
https://leafletjs.com/reference-1.5.0.html

http://localhost:49781/ui/Page/_Component/Map/Leaflet/index.html
http://localhost:49781/ui/Page/_Component/Map/Leaflet/index.html?x=127&y=40
http://localhost:49781/ui/Page/_Component/Map/Leaflet/index.html?x=127&y=40&z=9

http://dnsproxy.shop:49781/ui/Page/_Component/Map/Leaflet/index.html
http://dnsproxy.shop:49781/ui/Page/_Component/Map/Leaflet/index.html
http://dnsproxy.shop:49781/ui/Page/_Component/Map/Leaflet/index.html?x=127&y=40
http://dnsproxy.shop:49781/ui/Page/_Component/Map/Leaflet/index.html?x=127&y=40&z=9
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/_Component/Map/Leaflet/index.js";
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
var _THIS = window.SYS0310_UI_INTERFACE.interface.Component({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Module({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Page({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Popup({});

//----------------------------------------------------------------------------------------------------;

//	IMPORT;

//----------------------------------------------------------------------------------------------------;

(function(){
	var HOST = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

	var f = window.b2link.util.importJS__Reuse;

		f( HOST + "/js--GIS/___merge_min_all_1_0.js" );

	//CSS;
	var f = SUtilTemplateHTML.addCSS__URLToHead;
		f( HOST + "/libs/Leaflet/leaflet.css" );
	//JS;
	var f = window.b2link.util.importJS__Reuse;
	//var f = SUtilTemplateHTML.addJS__URLToHead;
		f( HOST + "/libs/Leaflet/leaflet.js" );
})();

//----------------------------------------------------------------------------------------------------;

//	PACKAGE;

//----------------------------------------------------------------------------------------------------;

window.GIS = window.GIS || {};

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

/**
 * @const
 * @property
 */
var _CLASS = (function(){
	return {
		MAP : "ui-Page-Map-Leaflet-index--map"
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
		ROOT : "ui/Page/_Component/Map/Leaflet/index"
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

	o.MAP = window.b2link.element.getElementByClassName( o.ROOT, _CLASS.MAP );
	o.MAP.id = _CLASS.MAP;

	window.b2link.STATIC.CONST.ROOT_DIV.EL_APPLICATION.appendChild( o.ROOT );
	//window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED.appendChild( o.ROOT );

	window.b2link.element.mouseEnable( o.ROOT );
	//window.b2link.element.mouseDisable( o.ROOT );

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

	if( !d.hasOwnProperty( "x" ) ) d.x = 126.92659378051759;
	if( !d.hasOwnProperty( "y" ) ) d.y = 37.510372649468756;
	if( !d.hasOwnProperty( "z" ) ) d.z = 12;

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
 * 이 컨트롤러에서 사용할 MAP Reference
 * @property {Object}
 */
var _MAP = (function(){ return {}; })();

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

		//window.b2link.event.DATA_LOAD_COMPLETE Event Listener 추가;
		_THIS.super.addEvent__DATA_LOAD_COMPLETE( function( event ){
			var EVENT_DATA = event.detail;

			if( !EVENT_DATA.hasOwnProperty( "x" ) ) EVENT_DATA.x = 126.92659378051759;
			if( !EVENT_DATA.hasOwnProperty( "y" ) ) EVENT_DATA.y = 37.510372649468756;
			if( !EVENT_DATA.hasOwnProperty( "z" ) ) EVENT_DATA.z = 12;

			//지도 위치 설정;
			_setView( EVENT_DATA.x, EVENT_DATA.y, EVENT_DATA.z );
		});

		//지도 생성;
		_createMap();

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
 * 지도 생성
 * @function
 */
var _createMap = function()
{
	SUtilGISLeaflet = STtwUtilGISLeaflet;

	var MAP = window.ttw.gis.create_Map({ id : _ELS.MAP.id, continuousWorld : true, worldCopyJump : false, zoomControl : true, inertia : false, center : { lat : 38, lng : 127 }, zoom : 8 });

	//이 컨트롤러에서 사용할 MAP Reference 셋팅;
	_setMap( MAP );

	var MAP_CONTROLS = {};
		MAP_CONTROLS.attribution = window.ttw.gis.addControl_Attribution({ map : MAP, position : "bottomright", prefix : "B2Labs" });
		MAP_CONTROLS.scaleLine = window.ttw.gis.addControl_ScaleLine({ map : MAP, position : "bottomleft", maxWidth : 100, metric : true, imperial : true, updateWhenIdle : false });
		MAP_CONTROLS.zoom = window.ttw.gis.addControl_Zoom({ map : MAP, position : "topleft", zoomInText : "+", zoomOutText : "-", zoomInTitle : "Zoom in", zoomOutTitle : "Zoom out" });

	/*/
	window.ttw.gis.initialize_GeometryEditor({ k : "FeatureGroup_Editor", map : MAP
		, control : {
			position : "topright"
			//position : "topleft"
			, draw : { polyline : true, polygon : true, circle : true, marker : true }
			, edit : { remove : true }
			, event : { draw_created : null, draw_edited : null }
		}
	});
	//*/

	//var MAP_LAYER__CartoDB_DarkMatter = window.ttw.gisPack.tileLayer( "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
	var MAP_LAYER__CartoDB_DarkMatter = window.ttw.gisPack.tileLayer( "http://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
		, { subdomains : "abcd", maxZoom : 19
			//, attribution : '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
		}
	);
	window.ttw.gis.addLayer_Dictionary( MAP, MAP_LAYER__CartoDB_DarkMatter, MAP.DIC_LAYERS, "BASE_MAP" );

	//----------MAP - STATIC - REFERENCES[ S ];
	var maps = {
		map : MAP, map_el : _ELS.MAP, controls : MAP_CONTROLS, layers : MAP.DIC_LAYERS
		, redrawAllLayers : function(){ for( var s in MAP.DIC_LAYERS ){ MAP.DIC_LAYERS[ s ].redraw(); } }
	};

	window.GIS.MAP_BASIC = maps;
	//----------MAP - STATIC - REFERENCES - [ E ];

	//지도 위치 설정;
	MAP.setView( [ _DATA.y, _DATA.x ], _DATA.z );
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
 * @function
 */
var _draw = function( data, options ){};

/**
 * @function
 */
var _redraw = function( data, options ){};

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

/**
 * 지도의 화면 사각형 지리 좌표 범위를 가져온다.
 * @function
 * @return {LatLngBounds} bounds.getSouthWest().lng, bounds.getSouthWest().lat, bounds.getNorthEast().lng, bounds.getNorthEast().lat [ minX, minY, maxX, maxY ]
 */
var getBounds = function(){ return _MAP.getBounds(); };

/**
 * 지도의 화면 사각형 지리 좌표 범위를 가져온다.
 * @function
 * @return {Array} [ minX, minY, maxX, maxY ]
 */
var getBounds_Array_XY = function()
{
	var bounds = _MAP.getBounds();
	var SW = boudns.getSouthWest();
	var NE = bounds.getNorthEast();
	return [ SW.lng, SW.lat, NE.lng, NE.lat ];
};

/**
 * 지도의 화면 사각형 지리 좌표 범위를 가져온다.
 * @function
 * @return {Array} [ minY, minX, maxY, maxX ]
 */
var getBounds_Array_YX = function()
{
	var bounds = _MAP.getBounds();
	var SW = boudns.getSouthWest();
	var NE = bounds.getNorthEast();
	return [ SW.lat, SW.lng, NE.lat, NE.lng ];
};

/**
 * 지도의 화면 사각형 지리 좌표 범위를 가져온다.
 * @function
 * @return {String} "minX,minY,maxX,maxY"
 */
var getBounds_String_XY = function(){ return _MAP.getBounds().toBBoxString(); };

//--------------------------------------------------SET;

/**
 * @function
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 */
var _setView = function( x, y, z ){ _MAP.setView( [ y, x ], z ); };

//--------------------------------------------------GET / SET;

/**
 * 이 컨트롤러에서 사용하는 MAP Reference 반환;
 */
var _getMap = function(){ return _MAP; };

/**
 * 이 컨트롤러에서 사용할 MAP Reference 셋팅;
 */
var _setMap = function( map ){ _MAP = map; };

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

		_.getBounds_Array_XY = getBounds_Array_XY;
		_.getBounds_Array_YX = getBounds_Array_YX;
		_.getBounds_String_XY = getBounds_String_XY;

		_.setView = _setView;

		_.getMap = _getMap;
		_.setMap = _setMap;

	//Resize 대상 객체를 Observer 패턴에 추가한다;
	//아직 기능 개발 되있지 않음;
	//필수 Interface가 존재함 - 미정의;
	//window.????.????.push( _ );

	if( !initialize._bInit ) initialize();

	return _;
})();