/*/
http://localhost:49781/ui/Page/_Component/Chart/EChart/Parallel/index.html?width=500&height=500

//사이즈를 %로 적용;
http://localhost:49781/ui/Page/_Component/Chart/EChart/Parallel/index.html?width=100%25&height=500
http://localhost:49781/ui/Page/_Component/Chart/EChart/Parallel/index.html?width=100%25&height=800

//사이즈를 %로 적용 - Height는 적용 안됨;
http://localhost:49781/ui/Page/_Component/Chart/EChart/Parallel/index.html?width=100%25&height=100%25

http://localhost:49781/ui/Page/_Component/Chart/EChart/Parallel/index.html?url=http://localhost:49781/ui/Page/_Component/Chart/EChart/Parallel/index.json
http://dnsproxy.shop:49781/ui/Page/_Component/Chart/EChart/Parallel/index.html?url=http://dnsproxy.shop:49780/country/brand
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/_Component/Chart/EChart/Parallel/index.js";
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
		f( HOST + "/libs/ECharts/import-js.js" );

	//CSS;
	var f = SUtilTemplateHTML.addCSS__URLToHead;
		//f( HOST + "/libs/Leaflet/leaflet.css" );
	//JS;
	var f = window.b2link.util.importJS__Reuse;
	//var f = SUtilTemplateHTML.addJS__URLToHead;
		//f( HOST + "/libs/Leaflet/leaflet.js" );
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
		ROOT : "ui/Page/_Component/Chart/EChart/Parallel/index"
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
	//window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED.appendChild( o.ROOT );
	window.b2link.element.mouseEnable( o.ROOT );
	//window.b2link.element.mouseDisable( o.ROOT );

	return o;
})();

/**
 * @const
 * @property
 */
var _ECHART = (function(){
	return {
		CHART : null
	};
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
		data: [
              [12.99, 100, 82, "Good"]
            , [9.99, 80, 77, "OK"]
            , [20, 120, 60, "Excellent"]
        ]
		, parallelAxis: [
	          {dim : 0, name: "Price"}
	        , {dim : 1, name: "Net Weight"}
	        , {dim : 2, name: "Amount"}
	        , {
	            dim : 3
	            , name : "Score"
	            , type : "category"
	            , data : ["Excellent", "Good", "OK", "Bad"]
	        }
	    ]

		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
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

			//d.data;
			d.data = data;

			//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
			_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( d );
		});

		return {};
	}

	////[ SAMPLE ] - [ S ] - 자동 삭제;
	//아무 데이터 없이 호출시 샘플로 들어가는 데이터;
	//window.b2link.event.INITIALIZED 이벤트 리스너;
	_THIS.super.addEvent__INITIALIZED( _ELS.ROOT, function( event ){ _THIS.draw( null, null ); });

	return {
		data: [
              [12.99, 100, 82, "Good"]
            , [9.99, 80, 77, "OK"]
            , [20, 120, 60, "Excellent"]
        ]
		, parallelAxis: [
	          {dim : 0, name: "Price"}
	        , {dim : 1, name: "Net Weight"}
	        , {dim : 2, name: "Amount"}
	        , {
	            dim : 3
	            , name : "Score"
	            , type : "category"
	            , data : ["Excellent", "Good", "OK", "Bad"]
	        }
	    ]

		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	};
	////[ SAMPLE ] - [ E ] - 자동 삭제;
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
 * <code>
	{
	series: {
		type: 'parallel'
		, lineStyle: { width: 4 }
		, data: null
	}
	, parallelAxis : null
}
 * </code>
 */
var _OPTIONS = {
	series: {
		type: 'parallel'
		, lineStyle: { width: 4 }
		, data: null
	}
	, parallelAxis : null
};

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT - DISPATCH EVENTS;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

/**
 * @function
 * @param {Event}
 */
var _evt_resize = function( event )
{
	window.clearTimeout( _evt_resize._TIMEOUT );
	_evt_resize._TIMEOUT = window.setTimeout( function(){ _evt_resize.resize( event ); }, 1000 );
};
_evt_resize._TIMEOUT = -1;
_evt_resize.resize = function( event ){
	if( event.type == window.b2link.event.RESIZED_EL )
	{
		//event.detail이 parentElement 일시----------;
		var el = event.detail;
		if( el.tagName )
		{
			if( _ELS.ROOT.parentElement == el )
			{
				_setWidth( "100%" );
				_setHeight( null );
				_redraw( null, null );
				return;
			}
		}
	}

	_setWidth( "100%" );
	_setHeight( null );
	_redraw( null, null );
};

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

		//Set Width, Height;
		if( _DATA.width  ){ if( !_getWidth()  ) _setWidth(  _DATA.width ); } else _setWidth( "100%");
		if( _DATA.height ){ if( !_getHeight() ) _setHeight( _DATA.height ); } else _setHeight( null );

		_ECHART.CHART = window.echarts.init( _ELS.ROOT );

		//RESIZE;
		window.addEventListener( "resize", _evt_resize, false, 0, true );

		//window.b2link.event.DATA_LOAD_COMPLETE Event Listener 추가;
		_THIS.super.addEvent__DATA_LOAD_COMPLETE( function( event ){
			var EVENT_DATA = event.detail;

			//Event Dispatch 시키는 곳에서 이벤트 객체의 구조는 필요에 따라 변경 될 수 있다.;
			_redraw( EVENT_DATA.data, null );
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
 * @function
 * @return {Number} temp_height
 */
var _calculation_temp_height_echart = function()
{
	var temp_height = 0;
	var h = _ELS.ROOT.parentElement.clientHeight || window.screen.availHeight;

	temp_height = h * 0.06;
 	return -temp_height;
};

/**
 * @function
 * @param {Object} d
 * <code>
	{
		data: [
              [12.99, 100, 82, "Good"]
            , [9.99, 80, 77, "OK"]
            , [20, 120, 60, "Excellent"]
        ]
		, parallelAxis: [
	          {dim : 0, name: "Price"}
	        , {dim : 1, name: "Net Weight"}
	        , {dim : 2, name: "Amount"}
	        , {
	            dim : 3
	            , name : "Score"
	            , type : "category"
	            , data : ["Excellent", "Good", "OK", "Bad"]
	        }
	    ]
	}
 * </code>
 */
var _createOptions = function( d )
{
	if( !d.data )
	{
		window.TtwLog.error( "[ ERROR ] - _createOptions : d 가 불충분함" );
		return;
	}

	var series = [];

	//chart option 설정;
	_OPTIONS.series.data = d.data;//chart option - 시리즈 설정;
	_OPTIONS.parallelAxis = d.parallelAxis;//chart option - 시리즈 설정;
};

/**
 * @function
 */
var _dispose = function()
{
	//dispose를 위한 각종 로직 삽입;
	_ELS.ROOT.parentElement.removeEventListener( window.b2link.event.RESIZED_EL, _evt_resize, false );

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
 * @param {Array|Object} data
 * <code>
	{
		data: [
              [12.99, 100, 82, "Good"]
            , [9.99, 80, 77, "OK"]
            , [20, 120, 60, "Excellent"]
        ]
		, parallelAxis: [
	          {dim : 0, name: "Price"}
	        , {dim : 1, name: "Net Weight"}
	        , {dim : 2, name: "Amount"}
	        , {
	            dim : 3
	            , name : "Score"
	            , type : "category"
	            , data : ["Excellent", "Good", "OK", "Bad"]
	        }
	    ]

		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options EChart의 options
 * <code>
	{
	series: {
		type: 'parallel'
		, lineStyle: { width: 4 }
		, data: null
	}
	, parallelAxis : null
}
 * </code>
 */
var _draw = function( data, options )
{
	//data Parameter 처리 - _DATA를 정의한 방식에 따라 로직이 달라져야 한다;
	if( data ) _setData( data );
	else data = _DATA;

	//options Parameter 처리;
	if( options ) _setOptions( options );
	else
	{
		options = _OPTIONS;

		//data 기반으로 Options 생성하기;
		_createOptions( data );
	}

	_ECHART.CHART.setOption( options, true );
};

/**
 * 다시 그리기
 * @function
 * @param {Array|Object} data
 * <code>
	{
		data: [
              [12.99, 100, 82, "Good"]
            , [9.99, 80, 77, "OK"]
            , [20, 120, 60, "Excellent"]
        ]
		, parallelAxis: [
	          {dim : 0, name: "Price"}
	        , {dim : 1, name: "Net Weight"}
	        , {dim : 2, name: "Amount"}
	        , {
	            dim : 3
	            , name : "Score"
	            , type : "category"
	            , data : ["Excellent", "Good", "OK", "Bad"]
	        }
	    ]

		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options EChart의 options
 * <code>
	{
	series: {
		type: 'parallel'
		, lineStyle: { width: 4 }
		, data: null
	}
	, parallelAxis : null
}
* </code>
*/
var _redraw = function( data, options )
{
	if( _ECHART.CHART != null ) _ECHART.CHART.clear();
	if( _ECHART.CHART != null ) _ECHART.CHART.resize();

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
			_DATA = d.data;
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

/**
 * set Chart(EChart) Options
 * @function
 * @param {Object} d
 * <code>
	{
	series: {
		type: 'parallel'
		, lineStyle: { width: 4 }
		, data: null
	}
	, parallelAxis : null
}
 * </code>
 */
var _setOptions = function( d )
{
	if( !d )
	{
		//window.TtwLog.error( "[ ERROR ] - _setOptions : d가 존재하지 않음" );
		return;
	}

	if( d )
	{
		//_OPTIONS 덮어쓰기 로직 작성;
		_OPTIONS = d;
	}
	else
	{
	}
};

/**
 * @function
 * @param {HTMLElement} parentElement
 */
var _setParentElement = function( parentElement )
{
	window.removeEventListener( "resize", _evt_resize, false, 0 );

	parentElement.appendChild( _ELS.ROOT );
	parentElement.addEventListener( window.b2link.event.RESIZED_EL, _evt_resize, false, 0, true );
};

//--------------------------------------------------GET & SET;

var _getHeight = function(){ return _THIS.super.getHeight(); };
var _setHeight = function( s ){
	if( null == s ) var s = ( _ELS.ROOT.parentElement.clientHeight + _setHeight.TERM_HEIGHT() ) || ( window.screen.availHeight + _setHeight.TERM_HEIGHT() );

	_THIS.super.setHeight( s );
};
//_setHeight.TERM_HEIGHT = 0;//ETC;
_setHeight.TERM_HEIGHT = _calculation_temp_height_echart;//EChart;
//_setHeight.TERM_HEIGHT = -120;//Sparkline;

var _getWidth = function(){ return _THIS.super.getWidth(); };
var _setWidth = function( s ){ _THIS.super.setWidth( s ); };

//--------------------------------------------------GETTER & SETTER;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

/**
 * Chart - EChart Parallel
 * @example
 * <code>
 	var els = window.SYS0310_UI_API.echart.addParallel();
		els[ 1 ].setData({ url : "http://localhost:49781/ui/Page/_Component/Chart/EChart/Parallel/index.json" });
		els[ 1 ].redraw();
 * </code>
 */
(function(){
	var _ = _THIS;
		_.els = _ELS;
		_.echart = _ECHART;


		_.dispose = _dispose;

		_.draw = _draw;
		_.redraw = _redraw;

		_.reqData = _reqData;

		_.setData = _setData;
		_.setParentElement = _setParentElement;

		_.getHeight = _getHeight;
		_.setHeight = _setHeight;

		_.getWidth = _getWidth;
		_.setWidth = _setWidth;

	//Resize 대상 객체를 Observer 패턴에 추가한다;
	//아직 기능 개발 되있지 않음;
	//필수 Interface가 존재함 - 미정의;
	//window.????.????.push( _ );

	if( !initialize._bInit ) initialize();

	return _;
})();