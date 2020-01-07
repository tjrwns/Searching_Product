/*/
http://localhost:49781/ui/Page/검색목록--카드/index.html
http://dnsproxy.shop:49781/ui/Page/검색목록--카드/index.html

//사이즈 설정;
http://localhost:49781/ui/Page/검색목록--카드/index.html?width=500&height=500
http://dnsproxy.shop:49781/ui/Page/검색목록--카드/index.html?width=500&height=500

//사이즈를 %로 적용;
http://localhost:49781/ui/Page/검색목록--카드/index.html?width=100%25&height=500
http://localhost:49781/ui/Page/검색목록--카드/index.html?width=100%25&height=800
http://dnsproxy.shop:49781/ui/Page/검색목록--카드/index.html?width=100%25&height=500
http://dnsproxy.shop:49781/ui/Page/검색목록--카드/index.html?width=100%25&height=800

//사이즈를 %로 적용 - Height는 적용 안됨;
http://localhost:49781/ui/Page/검색목록--카드/index.html?width=100%25&height=100%25&
http://dnsproxy.shop:49781/ui/Page/검색목록--카드/index.html?width=100%25&height=100%25&


http://localhost:49781/ui/Page/검색목록--카드/index.html?url=http://localhost:49781/ui/Page/검색목록--카드/index.json
http://dnsproxy.shop:49781/ui/Page/검색목록--카드/index.html?url=http://dnsproxy.shop:49781/ui/Page/검색목록--카드/index.json
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/검색목록--카드/index.js";
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

	//CSS;
	var f = SUtilTemplateHTML.addCSS__URLToHead;

	//JS;
	var f = window.b2link.util.importJS__Reuse;
	//var f = SUtilTemplateHTML.addJS__URLToHead;
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
	var o = {
		k : "ui/Page/검색목록--카드/index--"
	};

	o.FILTER_BRAND = o.k + "FILTER_BRAND"
	o.FILTER_COUNTRY = o.k + "FILTER_COUNTRY"
	o.FILTER_SHOP = o.k + "FILTER_SHOP"

	o.PRODUCT_LIST = o.k + "PRODUCT_LIST"

	return o
})();

/**
 * _IDS.ROOT는 약속된 명명
 * 이 컨트롤러 객체의 대상이 되는 최상위 HTMLElement는 ROOT로 지칭한다
 * @const
 * @property
 */
var _IDS = (function(){
	return {
		ROOT : "ui/Page/검색목록--카드/index"
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

	var f0 = window.b2link.element.getElementByClassName;

	o.FILTER_BRAND = f0( o.ROOT, _CLASS.FILTER_BRAND );
	o.FILTER_COUNTRY = f0( o.ROOT, _CLASS.FILTER_COUNTRY );
	o.FILTER_SHOP = f0( o.ROOT, _CLASS.FILTER_SHOP );

	o.PRODUCT_LIST = f0( o.ROOT, _CLASS.PRODUCT_LIST );

	//window.b2link.STATIC.CONST.ROOT_DIV.EL_APPLICATION.appendChild( o.ROOT );
	window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED.appendChild( o.ROOT );

	//window.b2link.element.mouseEnable( o.ROOT );
	window.b2link.element.mouseDisable( o.ROOT );

	var f1 = window.b2link.element.mouseEnable;
	var f2 = window.b2link.element.mouseDisable;
	var f3 = window.b2link.element.show;
	var f4 = window.b2link.element.hide;

	//f1( o.FILTER_BRAND );  f3( o.FILTER_BRAND );
	f2( o.FILTER_BRAND );  f4( o.FILTER_BRAND );
	//f1( o.FILTER_COUNTRY );f3( o.FILTER_BRAND );
	f2( o.FILTER_COUNTRY );f4( o.FILTER_BRAND );
	f1( o.FILTER_SHOP );   f3( o.FILTER_BRAND );
	//f2( o.FILTER_SHOP );   f4( o.FILTER_BRAND );
	f1( o.PRODUCT_LIST );  f3( o.FILTER_BRAND );
	//f2( o.PRODUCT_LIST );  f4( o.FILTER_BRAND );

	window.document.body.style.overflowY = "hidden";

	return o;
})();

/**
 * 접속 URL에서 URI PARAMETERS를 추출;
 * @property {Array|Object} 필요에 따라 원하는 자료구조로 선언 가능, 기왕이면 Object로
 */
var _DATA = (function(){
	var d = SUtilLocation.getObjectFromParamters();

	var r = {};

	if( d.data ) r.data = JSON.parse(d.data);

	if( d.url )
	{
		//var url = window.b2link.uri.getURIReplaceSharp__JSON( d.url );
		var url = window.b2link.uri.decodeURIComponent( d.url );
		r.data = window.b2link.xhr.reqSync_JSON( url );
	}

	if( !r.hasOwnProperty( "data" ) )
	{
		r.data = [];
		return r;
	}
	else return r;
})();

/**
 * 이 화면 객체에서 필요에 의해 사용 하게 되는 URL을 사전에 정의 하기
 * 로직이나 기타 함수에서는 이 객체를 사용하여 URL을 활용 한다.
 * @const
 * @property
 */
var _URLS = (function(){

	//var HOST = window.b2link.url.getServerURL_APIServer_Self();
	var HOST = window.b2link.url.getServerURL_APIServer_SCODE( "SYS0310" );

	var o = {
		searchKeyword : {
			url : HOST + "/_SITE_COLLECT_DATA.list/getList__Loop?DATA=<!=DATA=!>"
			, param : {
				k : ""
				, t : -1
				//, t_k : -1
				, limit : 2
				, sort : { t : -1 }
			}
		}
		, searchKeywordCount : {
			url : HOST + "/_SITE_COLLECT_DATA/crud/searchKeywordCount?DATA=<!=DATA=!>"
			, param : { k : "" }
		}
	};

	o.searchKeyword.getURL = function( data ){
		_URLS.searchKeyword.param.k = _COMPONENTS.SEARCHBOX.getKeyword();

		if( data ){
			if( data.lastTime ) o.searchKeyword.param.t = data.lastTime;
		}
		return _URLS.searchKeyword.url.replace( "<!=DATA=!>", JSON.stringify( _URLS.searchKeyword.param ) + "&" );
	};

	o.searchKeywordCount.getURL = function( keyword ){
		_URLS.searchKeywordCount.param.k = _COMPONENTS.SEARCHBOX.getKeyword();
		return _URLS.searchKeywordCount.url.replace( "<!=DATA=!>", JSON.stringify( _URLS.searchKeywordCount.param ) + "&" );
	};

	return o;
})();

/**
 * 이 컨트롤러에서 사용하는 컴포넌트 또는 메인 객체에 필요한 설정과 관련된 Option 값들을 정의 한다.
 * @property {Object}
 * <code>
	{

	}
 * </code>
 */
var _OPTIONS = {

	//[ 샘플 ] - 옵션 추가;

};

/**
 *
 * @property {Object}
 * <code>
	{

	}
 * </code>
 */
var _COMPONENTS = (function(){

	var o = {};

		o.SEARCHBOX = {};
		o.SEARCHBOX.ROOT = null;
		o.SEARCHBOX.CTRL = null;

		//[ COMPONENT - API ] 이동;
		o.SEARCHBOX.getKeyword = function(){
			var KEYWORD = _COMPONENTS.SEARCHBOX.CTRL.els.INPUT__SEARCHBOX.value;
			if( !KEYWORD )
			{
				//...;
			}

			return KEYWORD;
		};

		o.DHTMLX510_WINDOWS = {};
		o.DHTMLX510_WINDOWS.ROOT = null;
		o.DHTMLX510_WINDOWS.CTRL = null;

	return o;
})();

//----------------------------------------------------------------------------------------------------;

//	EVENT - DISPATCH EVENTS;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Event} event
 * <code>
	{
		detail : {
			r : {Number}
			, m : {String}
			, data : {Object}
		}
	}
 * </code>
 */
var _evt_RESPONSE_DATA__SEARCHBOX = function( event )
{
	var detail = event.detail;

	if ( !global.b2link.response.getResultStatus( detail ) )
	{
		if( detail.m )
		{
			window.b2link_ui.message.error( detail.m );
		}
	}

	window.b2link.element.removeAllChildren( _ELS.PRODUCT_LIST );


	/*/
	//delete _URLS.searchKeyword.param.t;
	//delete _URLS.searchKeyword.param.t_k;
	//var url = _URLS.searchKeyword.getURL( null );
	//_reqData( url, _COMPONENTS.DHTMLX510_LIST.responseDataProcess );

	delete _URLS.searchKeyword.param.t;
	delete _URLS.searchKeyword.param.t_k;
	var url = _URLS.searchKeyword.getURL( null );
	_reqLoopData.end();
	_reqLoopData.start( url );
	/*/
	window.ui_spinner.spinkit.show();
	_evt_RESPONSE_DATA__SEARCHBOX.reqSearchKeywordCount();
	//*/
};
_evt_RESPONSE_DATA__SEARCHBOX.reqSearchKeywordCount = function(){
	window.b2link_service.common._fn_reqAsync( _URLS.searchKeywordCount.getURL( null )
	, _evt_RESPONSE_DATA__SEARCHBOX.reqSearchKeywordCount.complete
	, _evt_RESPONSE_DATA__SEARCHBOX.reqSearchKeywordCount.error );
};
_evt_RESPONSE_DATA__SEARCHBOX.reqSearchKeywordCount.complete = function( responseData ){
	if( responseData.data > 20 )
	{
		//delete _URLS.searchKeyword.param.t;
		//delete _URLS.searchKeyword.param.t_k;
		//var url = _URLS.searchKeyword.getURL( null );
		//_reqData( url, _COMPONENTS.DHTMLX510_LIST.responseDataProcess );

		delete _URLS.searchKeyword.param.t;
		delete _URLS.searchKeyword.param.t_k;

		var url = _URLS.searchKeyword.getURL( null );

		window.ui_spinner.spinkit.hide();

		_reqLoopData.end();
		_reqLoopData.start( url );

		return;
	}
	else window.setTimeout( _evt_RESPONSE_DATA__SEARCHBOX.reqSearchKeywordCount, 1000 );

};
_evt_RESPONSE_DATA__SEARCHBOX.reqSearchKeywordCount.error = function( responseData ){ window.ui_spinner.spinkit.hide(); };

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
		if( el.hasOwnProperty( "tagName" ) )
		{
			if( _ELS.ROOT.parentElement == el )
			{
				_setWidth( "100%" );
				_setHeight( "100%" );
				_redraw( null, null );
				return;
			}
		}
	}

	_setWidth( "100%" );
	_setHeight( "100%" );

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
		if( _DATA.width  ){ if( !_getWidth()  ) _setWidth(  _DATA.width ); } else _setWidth( 400 );
		if( _DATA.height ){ if( !_getHeight() ) _setHeight( _DATA.height ); } else _setHeight( "100%" );

		//RESIZE;
		//window.addEventListener( "resize", _evt_resize, false, 0, true );

		//이 Page에서 사용할 Components 들을 생성한다.
		initialize.components();

		//window.b2link.event.DATA_LOAD_COMPLETE Event Listener 추가;
		_THIS.super.addEvent__DATA_LOAD_COMPLETE( function( event ){
			var EVENT_DATA = event.detail;

			if( !_ELS.PRODUCT_LIST.children[ 0 ] )
			{
				//Event Dispatch 시키는 곳에서 이벤트 객체의 구조는 필요에 따라 변경 될 수 있다.;
				_redraw( EVENT_DATA.data, null );
			}
			else
			{
				//LIST에 기존 데이터가 존재 함으로 데이터를 추가 시킨다.;
				_draw( EVENT_DATA.data, null );
			}

			//setTimeout End;
			if( _reqLoopData.isUse )
			{
				window.clearTimeout( _reqLoopData.TIMEOUT.ref );
				_reqLoopData.TIMEOUT.ref = window.setTimeout( _reqLoopData, _reqLoopData.TIMEOUT.time() );
			}
		});

		//_약속된 HTMLElement인 this.T.els.ROOT를 통해 window.b2link.event.INITIALIZED 이벤트를 Dispatch 시킨다.;
		_THIS.super.dispatchCE__INITIALIZED( _THIS );

		initialize._bInit = 1;
	}
	catch( er )
	{
		window.TtwLog.error( "[ ERROR ] - initialize - " + er );
		return;
	}
};
initialize._bInit = 0;

//이 Page에서 사용할 Components 들을 생성한다.
initialize.components = function(){

	//Application.IFRAME 지도 배경;
	/*/
	(function(){
		var el = window.document.getElementById( "ID--if0" );
			el.src = window.b2link.url.getServerURL_WebServer_Self() + "/ui/Page/_Component/Map/Leaflet/index.html";

		window.b2link.element.mouseEnable( el );
	})();
	//*/

	//*/
	var els = window.SYS0310_UI_API.dhtmlx5_1_0.addWindows();
	_COMPONENTS.DHTMLX510_WINDOWS.ROOT = els[ 0 ];
	_COMPONENTS.DHTMLX510_WINDOWS.CTRL = els[ 1 ];

	_COMPONENTS.DHTMLX510_WINDOWS.CTRL.closeAll();
	//*/

	//searchbox 추가;
	var els = window.SYS0310_UI_API.searchbox.addSearchBox( _ELS.ROOT.id );
	_COMPONENTS.SEARCHBOX.ROOT = els[ 0 ];
	_COMPONENTS.SEARCHBOX.CTRL = els[ 1 ];
	_COMPONENTS.SEARCHBOX.ROOT.removeEventListener( window.b2link.event.RESPONSE_DATA, _evt_RESPONSE_DATA__SEARCHBOX, false );
	_COMPONENTS.SEARCHBOX.ROOT.addEventListener( window.b2link.event.RESPONSE_DATA, _evt_RESPONSE_DATA__SEARCHBOX, false, 0, true );

	//가져와서 사용하는 Components의 스타일을 재정의 한다;
	initialize.components.setStyle();

	/*/
	var o = _COMPONENTS.DHTMLX510_WINDOWS.CTRL.addWindow({
		DHTMLX : {
			contents : {
				a : {
					title : "a"
					, renderer : function( win ){
						win.attachObject( _COMPONENTS.DHTMLX510_LIST.ROOT );
						_COMPONENTS.DHTMLX510_LIST.CTRL.setParentElement( win.cell.children[ 0 ] );
					}
					, width : 350
					, height : 700
					, x : 10
					, y : 50
				}
			}
		}
	});
	//*/
};
//기본 컴포넌트 스타일 외 별도 스타일 설정;
initialize.components.setStyle = function(){

	window.document.body.style.over
	//----------_COMPONENTS.SEARCHBOX;

	/*/
	_COMPONENTS.SEARCHBOX.ROOT.style.left = "10px";
	_COMPONENTS.SEARCHBOX.ROOT.style.top = "10px";
	//*/

	//*/
	_COMPONENTS.SEARCHBOX.ROOT.style.left = "10px";
	_COMPONENTS.SEARCHBOX.ROOT.style.right = "10px";
	_COMPONENTS.SEARCHBOX.ROOT.style.top = "10px";
	//*/
};

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param{Object} d
 * <code>
	{
		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @return{Object} option
 */
var _createOptions = function( d )
{
	if( !d.data )
	{
		//window.TtwLog.error( "[ ERROR ] - _createOptions : d 가 불충분함" );
		return;
	}

	//_OPTIONS 데이터 생성 또는 가감 로직 추가;
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
 * @param {Array|Object} data data, options가 변경 또는 다중 컴포넌트로 하위 데이터가 생기면 다른 로직으로 처리;
 * <code>
	{
	}
 * </code>
 * @param {null|Object} options data, options가 변경 또는 다중 컴포넌트로 하위 데이터가 생기면 다른 로직으로 처리;
 * <code>
	{
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

	//data is Array;
	if( data.pop )
	{
		var io;
		var i=0, iLen=data.length;
		for( ; i<iLen; ++i )
		{
			io = data[ i ];

			if( io.cd$COUNTRY )
			{
				io.cd$COUNTRY_low = io.cd$COUNTRY.toLowerCase();
			}

			var el = window.b2link.html.createHTMLElement( window.b2link.string.applyBrace( _draw.TEMPLATE, data[ i ] ) );
			_ELS.PRODUCT_LIST.appendChild( el );
		}
	}
};
_draw.TEMPLATE = window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" ) + "/ui_piece/Template/_SITE_COLLECT_DATA.list/semanticui.template0000.thtml" );

/**
 * 다시 그리기
 * @function
 * @param {Array|Object} data data, options가 변경 또는 다중 컴포넌트로 하위 데이터가 생기면 다른 로직으로 처리;
 * <code>
	{
	}
 * </code>
 * @param {null|Object} options data, options가 변경 또는 다중 컴포넌트로 하위 데이터가 생기면 다른 로직으로 처리;
 * <code>
	{
	}
 * </code>
 */
var _redraw = function( data, options )
{
	//redraw를 위한 필요 로직 추가;

	window.b2link.element.removeAllChildren( _ELS.PRODUCT_LIST );

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

		if( !window.b2link.response.getResultStatus( responseData ) )
		{
			if( responseData.m ) window.console.log( responseData.m );
			else window.console.log( "[ ERROR ] - " );

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

/**
 * @function
 * @param {String} url
 */
var _reqLoopData = function( url )
{
	var url;
	if( _reqLoopData.start.LAST_ITEM )
		url = _URLS.searchKeyword.getURL({ lastTime : _reqLoopData.start.LAST_ITEM.t });
	else url = _URLS.searchKeyword.getURL( null );

	_reqLoopData.start( url );
};
_reqLoopData.count = 0;
_reqLoopData.isUse = false;
_reqLoopData.count_max = 200;
_reqLoopData.TIMEOUT = { ref : -1, time : function(){ return 100; } };

_reqLoopData.start = function( url ){

	_reqLoopData.isUse = true;

	window.clearTimeout( _reqLoopData.TIMEOUT.ref );

	//ResponseText를 자동으로 JSON으로 변경하여 Complete의 Parameter로 전달한다;
	window.b2link_service.common._fn_reqAsync( url, _reqLoopData.start.complete, _reqLoopData.start.error );
};
_reqLoopData.start.complete = function( responseData ){

	//ERROR;
	if( !responseData )
	{
		window.TtwLog.error( "[ ERROR ] - _reqData - responseData : " + responseData );
		return;
	}

	if( !window.b2link.response.getResultStatus( responseData ) )
	{
		if( responseData.m ) window.console.log( responseData.m );
		else window.console.log( "[ ERROR ] - " );

		return;
	}

	if( responseData.data ) _reqLoopData.start.LAST_ITEM = responseData.data[ responseData.data.length - 1 ];

	//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
	_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( responseData );

	if( _reqLoopData.count_max == _reqLoopData.count )
	{
		_reqLoopData.end();
		return;
	}

	++_reqLoopData.count;
};
_reqLoopData.start.error = function( responseData ){ debugger; };
_reqLoopData.start.LAST_ITEM = null;
_reqLoopData.end = function(){

	_reqLoopData.count = 0;
	_reqLoopData.isUse = false;

	window.ui_spinner.spinkit.hide();

	window.clearTimeout( _reqLoopData.TIMEOUT.ref );
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
 * @param {null|Object} options sparkline의 options
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

	if( null == s ) var s = _ELS.ROOT.parentElement.clientHeight || ( window.screen.availHeight + _setHeight.TERM_HEIGHT );

	_THIS.super.setHeight( s );
};
_setHeight.TERM_HEIGHT = 0;//ETC;
//_setHeight.TERM_HEIGHT = -150;//EChart;
//_setHeight.TERM_HEIGHT = -120;//Sparkline;

var _getWidth = function(){ return _THIS.super.getWidth(); };
var _setWidth = function( s ){ _THIS.super.setWidth( s ); };

//--------------------------------------------------GETTER & SETTER;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//Spinner;
window.ui_spinner.spinkit.setMode( "8-circle" );

/**
 * 검색목록--카드 ( DHTMLX 5.1.0 )
 * @example
 * <code>
 * </code>
 */
(function(){
	var _ = _THIS;
		_.els = _ELS;

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