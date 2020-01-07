/*/
http://localhost:49781/ui/Page/검색화면--키워드-List/index.html
http://dnsproxy.shop:49781/ui/Page/검색화면--키워드-List/index.html

//사이즈 설정;
http://localhost:49781/ui/Page/검색화면--키워드-List/index.html?width=500&height=500
http://dnsproxy.shop:49781/ui/Page/검색화면--키워드-List/index.html?width=500&height=500

//사이즈를 %로 적용;
http://localhost:49781/ui/Page/검색화면--키워드-List/index.html?width=100%25&height=500
http://localhost:49781/ui/Page/검색화면--키워드-List/index.html?width=100%25&height=800
http://dnsproxy.shop:49781/ui/Page/검색화면--키워드-List/index.html?width=100%25&height=500
http://dnsproxy.shop:49781/ui/Page/검색화면--키워드-List/index.html?width=100%25&height=800

//사이즈를 %로 적용 - Height는 적용 안됨;
http://localhost:49781/ui/Page/검색화면--키워드-List/index.html?width=100%25&height=100%25&
http://dnsproxy.shop:49781/ui/Page/검색화면--키워드-List/index.html?width=100%25&height=100%25&


http://localhost:49781/ui/Page/검색화면--키워드-List/index.html?url=http://localhost:49781/ui/Page/검색화면--키워드-List/index.json
http://dnsproxy.shop:49781/ui/Page/검색화면--키워드-List/index.html?url=http://dnsproxy.shop:49781/ui/Page/검색화면--키워드-List/index.json
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/검색화면--키워드-List/index.js";
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
		ROOT : "ui/Page/검색화면--키워드-List/index"
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
			url : HOST + "/_SITE_COLLECT_DATA.list/getList/?DATA=<!=DATA=!>"
			, param : {
				k : ""
				, t : -1
				//, t_k : -1
				, limit : 1
				, sort : { t : 1 }
			}
		}
	};

	o.searchKeyword.getURL = function( data ){
		if( data ) if( data.lastTime ) o.searchKeyword.param.t = data.lastTime;

		var url = _URLS.searchKeyword.url.replace( "<!=DATA=!>", JSON.stringify( _URLS.searchKeyword.param ) + "&" );
		return url;
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

		o.DHTMLX510_LIST = {};
		o.DHTMLX510_LIST.ROOT = null;
		o.DHTMLX510_LIST.CTRL = null;
		o.DHTMLX510_LIST.OPTIONS = {};

		o.DHTMLX510_LIST.addItems = function( data ){
			var i=0, iLen=data.length;
			var io;//data[ i ];
			for( ; i<iLen; ++i )
			{
				io = data[ i ];
				if( io.cd$COUNTRY ) io.cd$COUNTRY_low = io.cd$COUNTRY.toLowerCase();
				_COMPONENTS.DHTMLX510_LIST.CTRL.addItem( io );
			}
		};

		//Keyword 수집 요청 결과 후 처리;
		//마지막 데이터 기준 ( timestamp ) 이후 데이터 존재 시 리스트 데이터 추가;
		o.DHTMLX510_LIST.responseDataProcess = function( responseData ){

			var data = responseData.data;
			if( !data.length )
			{
				window.console.log( "[ ERROR ] - 데이터가 없음" );
				return responseData;
			}

			//*/
			data.forEach(function( item ){
				try
				{
					if( io.cd$COUNTRY ) item.cd$COUNTRY_low = item.cd$COUNTRY.toLowerCase();
				}
				catch( er )
				{
				}
			});
			//*/
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

	_COMPONENTS.DHTMLX510_LIST.CTRL.removeAllItem();

	_URLS.searchKeyword.param.k = _COMPONENTS.SEARCHBOX.getKeyword();
	delete _URLS.searchKeyword.param.t;
	delete _URLS.searchKeyword.param.t_k;

	var url = _URLS.searchKeyword.getURL( null );

	/*/
	_reqData( url, _COMPONENTS.DHTMLX510_LIST.responseDataProcess );
	/*/
	_reqLoopData.end();
	_reqLoopData.start( url );
	//*/
};

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

			if( !_COMPONENTS.DHTMLX510_LIST.CTRL.isData )
			{
				//Event Dispatch 시키는 곳에서 이벤트 객체의 구조는 필요에 따라 변경 될 수 있다.;
				_redraw( EVENT_DATA.data, null );
			}
			else
			{
				//LIST에 기존 데이터가 존재 함으로 데이터를 추가 시킨다.;
				//데이터 가감 로직 추가 하기;
				initialize.components.setOptions();
				_COMPONENTS.DHTMLX510_LIST.addItems( EVENT_DATA.data );
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
	//*/
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

	//DHTMLX 5.1.0 List 추가;
	var els = window.SYS0310_UI_API.dhtmlx5_1_0.addList( _ELS.ROOT.id );

	_COMPONENTS.DHTMLX510_LIST.ROOT = els[ 0 ];
	_COMPONENTS.DHTMLX510_LIST.CTRL = els[ 1 ];

	//가져와서 사용하는 Components의 스타일을 재정의 한다;
	initialize.components.setStyle();

	//_COMPONENTS.DHTMLX510_LIST의 옵션을 이 Page에서 사용하기 위한 셋팅;
	initialize.components.setOptions();

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
initialize.components.setOptions = function(){
	var optionsTemplate = function( item ){ return window.b2link.string.applyBrace( optionsTemplate.TEMPLATE, item ); };
		optionsTemplate.TEMPLATE = `<div class='ui cards' style="">
			<div class='card'>
				<div class="image">
					<img src="{{img}}">
				</div>
				<div class='content'>
					<div class='header'>{{nm_p}}</div>
					<div class='meta'>
						<i class='{{cd$COUNTRY_low}} flag'>
							<span>SITE : {{url}}</span>
						</i>
					</div>
					<div class='description'>{{p}}</div>
				</div>
				 <div class='extra content'>
					<a href='{{url_p}}' target='_balnk'>상세페이지</a>
				</div>
			</div>
		</div>`

	var options = {
		type : {
			template : optionsTemplate
			, width : ""
			, height : null
		}

		, width : "100%"
		, height : "100%"
		, margin : 0
		, padding : 10
		, border  : 1
		, select : true
		, useFilter : true
	}

	_COMPONENTS.DHTMLX510_LIST.CTRL.setOptions( options );
};

//기본 컴포넌트 스타일 외 별도 스타일 설정;
initialize.components.setStyle = function(){

	//----------_COMPONENTS.SEARCHBOX;

	//SEARCHBOX ROOT 스타일 변경;
	/*/
	_COMPONENTS.SEARCHBOX.ROOT.style.display = "block";
	_COMPONENTS.SEARCHBOX.ROOT.style.position = "relative";
	_COMPONENTS.SEARCHBOX.ROOT.style.right = "unset";
	_COMPONENTS.SEARCHBOX.ROOT.style.top = "unset";
	_COMPONENTS.SEARCHBOX.ROOT.style.padding = "15px";
	//*/

	//*/
	_COMPONENTS.SEARCHBOX.ROOT.style.left = "10px";
	_COMPONENTS.SEARCHBOX.ROOT.style.top = "10px";
	//*/

	//SEARCHBOX 나라 선택 숨김;
	_COMPONENTS.SEARCHBOX.CTRL.els.SELECT__COUNTRY.style.display = "none";

	window.b2link.element.mouseEnable( _COMPONENTS.SEARCHBOX.ROOT );

	//----------_COMPONENTS.SEARCHBOX;
	_COMPONENTS.DHTMLX510_LIST.ROOT.style.position = "absolute";
	_COMPONENTS.DHTMLX510_LIST.ROOT.style.top = "50px";
	_COMPONENTS.DHTMLX510_LIST.ROOT.style.height = "calc( 100% - 40px )";
	_COMPONENTS.DHTMLX510_LIST.ROOT.style.paddingLeft = "5px";

	//LIST 사이즈 설정;
	_COMPONENTS.DHTMLX510_LIST.CTRL.setWidth( 350 );
	_COMPONENTS.DHTMLX510_LIST.CTRL.setHeight( "100%" );

	window.b2link.element.mouseEnable( _COMPONENTS.DHTMLX510_LIST.ROOT );
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
		window.TtwLog.error( "[ ERROR ] - _createOptions : d 가 불충분함" );
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
	if( !_COMPONENTS.DHTMLX510_LIST.isData )
	{
		//data, options가 변경 또는 다중 컴포넌트로 하위 데이터가 생기면 다른 로직으로 처리;
		_COMPONENTS.DHTMLX510_LIST.CTRL.draw( { DHTMLX : { data : data } }, options );
	}
	else
	{
		_COMPONENTS.DHTMLX510_LIST.addItems( data );
	}
};

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

	if( !_COMPONENTS.DHTMLX510_LIST.isData )
	{
		//data, options가 변경 또는 다중 컴포넌트로 하위 데이터가 생기면 다른 로직으로 처리;
		_COMPONENTS.DHTMLX510_LIST.CTRL.redraw( { DHTMLX : { data : data } }, options );
	}
	else
	{
		//만약 Page 특성으로 인하여 다른 로직 가감을 원하면 변경 가능;

		//data, options가 변경 또는 다중 컴포넌트로 하위 데이터가 생기면 다른 로직으로 처리;
		_COMPONENTS.DHTMLX510_LIST.CTRL.redraw( { DHTMLX : { data : data } }, options );
	}
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
_reqLoopData.TIMEOUT = { ref : -1, time : function(){ return 100; } };
_reqLoopData.isUse = false;

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

	//데이터 프로세싱;
	_COMPONENTS.DHTMLX510_LIST.responseDataProcess( responseData );

	if( responseData.data ) _reqLoopData.start.LAST_ITEM = responseData.data[ responseData.data.length - 1 ];

	//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
	_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( responseData );
};
_reqLoopData.start.error = function( responseData ){ debugger; };
_reqLoopData.start.LAST_ITEM = null;
_reqLoopData.end = function(){
	_reqLoopData.isUse = false;
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

/**
 * 검색화면--키워드-List ( DHTMLX 5.1.0 )
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