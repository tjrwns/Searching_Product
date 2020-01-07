/*/
http://localhost:49781/ui/Page/_Component/AddDenyKeyword/index.html?width=200&height=26

http://localhost:49781/ui/Page/_Component/AddDenyKeyword/index.html?width=500&height=500

//사이즈를 %로 적용;
http://localhost:49781/ui/Page/_Component/AddDenyKeyword/index.html?width=100%25&height=500
http://localhost:49781/ui/Page/_Component/AddDenyKeyword/index.html?width=100%25&height=800

//사이즈를 %로 적용 - Height는 적용 안됨;
http://localhost:49781/ui/Page/_Component/AddDenyKeyword/index.html?width=100%25&height=100%25

http://localhost:49781/ui/Page/_Component/AddDenyKeyword/index.html?url=http://localhost:49781/ui/Page/_Component/AddDenyKeyword/index.json
http://dnsproxy.shop:49781/ui/Page/_Component/AddDenyKeyword/index.html?url=http://dnsproxy.shop:49781/ui/Page/_Component/AddDenyKeyword/index.json
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/_Component/AddDenyKeyword/index.js";
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
		//f( HOST + "/libs/FancyGrid/import-js.js" );

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
		ROOT : "ui/Page/_Component/AddDenyKeyword/index"
	};
})();

/**
 * _ELS.ROOT는 약속된 명명
 * 이 컨트롤러 객체의 대상이 되는 최상위 HTMLElement는 ROOT로 지칭한다
 * @const
 * @property
 */
var _ELS = (function(){
	var f0 = window.b2link.element.getElementByClassName;
	var o = {
		ROOT : window.document.getElementById( _IDS.ROOT )
	};

	o.BTN__ADD = f0( o.ROOT, "btn__add" );

	o.INPUT__DENYKEYWORD = f0( o.ROOT, "input__denyKeyword" );

	o.SELECT__COUNTRY = f0( o.ROOT, "select__country" );

	//window.b2link.STATIC.CONST.ROOT_DIV.EL_APPLICATION.appendChild( o.ROOT );
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
		, SUPPORT_LANGUAGE : [
			{
				//{String}
				cd$COUNTRY : ""
				//{String}
				, nm : ""
			}
		]
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
		data : {
			//[ 샘플 ] 데이터 추가;
			SUPPORT_LANGUAGE : [
				{
					CD$COUNTRY : "_ALL"
					, nm : "ALL"
				}
				, {
					CD$COUNTRY : "KR"
					, nm : "KR"
				}
				, {
					CD$COUNTRY : "US"
					, nm : "US"
				}
				,{
					CD$COUNTRY : "JP"
					, nm : "JP"
				}
				,{
					CD$COUNTRY : "CN"
					, nm : "CN"
				}
			]
		}

		, width : ( d.width || 200 )
		, height : ""
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

	//var HOST = window.b2link.url.getServerURL_APIServer_Self();
	var HOST = window.b2link.url.getServerURL_APIServer_SCODE( "SYS0310" );

	var o = {
		addDenyKeyword : HOST + "/reqKeyword/crud/addDenyKeyword?keyword=<!=KEYWORD=!>&cd$BRAND=<!=CD$BRAND=!>&cd$COUNTRY_k=<!=CD$COUNTRY_k=!>"
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

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT - DISPATCH EVENTS;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

/**
 * 이 Controller의 HTMLElement에 사용할 EventListener를 추가한다.
 * 무조건 등록할 예정인 이벤트를 한번 제거 후 등록한다.
 * @function
 */
var _addEvent = function()
{
	window.RayLog.timeStamp( " [ S ] - _addEvent():void----------" );

	_removeEvent();
	_ELS.BTN__ADD.addEventListener( "click", _reqData, false, 0, true );
	_ELS.INPUT__DENYKEYWORD.addEventListener( "keyup", _evt_keyup__input_denykeyword, false, 0, true );

	window.RayLog.timeStamp( " [ E ] - _addEvent():void----------" );
};

/**
 * input__denykeyword 엔터 처리 
 * @function
 * @param event {Event}
 */
var _evt_keyup__input_denykeyword = function( event )
{
	if( event.keyCode != 13) return; _reqData();
};

/**
 * 이 Controller의 HTMLElement에 추가한 EventListener를 제거한다.
 * @function
 */
var _removeEvent = function()
{
	window.RayLog.timeStamp( " [ S ] - _removeEvent():void----------" );
	window.removeEventListener( "click", _reqData, false );

	window.removeEventListener( "keyup", _evt_keyup__input_denykeyword, false );
	window.RayLog.timeStamp( " [ E ] - _removeEvent():void----------" );
};

/**
 * @function
 * @param {Event}
 */
var _evt_resize = function( event )
{
	window.clearTimeout( _evt_resize._TIMEOUT );
	_evt_resize._TIMEOUT = window.setTimeout( _evt_resize.resize, 1000 );
};
_evt_resize._TIMEOUT = -1;
_evt_resize.resize = function(){
	//_setWidth( "100%" ); _setHeight( "100%" ); _redraw( null, null );
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
		//if( _DATA.width  ){ if( !_getWidth()  ) _setWidth(  _DATA.width ); } else _setWidth( 200 );
		//if( _DATA.height ){ if( !_getHeight() ) _setHeight( _DATA.height ); } else _setHeight( 26 );

		//RESIZE;
		//window.addEventListener( "resize", _evt_resize, false, 0, true );

		//사용자 정의 함수로 추가 이벤트관리;
		_addEvent();

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
 * @param{Object} d
 * <code>
	{
		SUPPORT_LANGUAGE : [
			//{String}
			cd$COUNTRY : ""
			//{String}
			,nm : ""
		]
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
	if( d.data.SUPPORT_LANGUAGE )
	{
		_createOptions.createSelectBoxOption_SUPPORT_LANGUAGE( d.data.SUPPORT_LANGUAGE );
	}
};
//
_createOptions.createSelectBoxOption_SUPPORT_LANGUAGE =  function( d ){
	window.RayLog.timeStamp( " [ S ] - _createOptions.createSelectBoxOption_SUPPORT_LANGUAGE():void----------" );

	var i = 0, iLen = d.length;
	var io;
	for( i=0; i<iLen; ++i)
	{
		io = d[ i ];
		var option = document.createElement("option");
		option.text = io.nm;
		option.value = io.CD$COUNTRY;
		_ELS.SELECT__COUNTRY.options.add( option );
	}

	window.RayLog.timeStamp( " [ E ] - _createOptions.createSelectBoxOption_SUPPORT_LANGUAGE():void----------" );
};

/**
 * @function
 */
var _dispose = function()
{
	//dispose를 위한 각종 로직 삽입;
	_removeEvent();
	//국가 선택 옵션 제거;
	var i = 0, iLen = _ELS.SELECT__COUNTRY.length;
	for( i=0; i<iLen; ++i)
	{
		_ELS.SELECT__COUNTRY.options[ i ] = null;
	}

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
		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options EChart의 options
 */
var _draw = function( data, options )
{
	//data Parameter 처리 - _DATA를 정의한 방식에 따라 로직이 달라져야 한다;
	if( data ) _setData({ data : data });
	else data = _DATA;

	//options Parameter 처리;
	if( options ) _setOptions( options );
	else
	{
		options = _OPTIONS;

		//data 기반으로 Options 생성하기;
		_createOptions( data );
	}

	//그리기 위한 로직 추가;
};

/**
 * 다시 그리기
 * @function
 * @param {Array|Object} data
 * <code>
	{
		, width : ( d.width || 200 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options EChart의 options
 */
var _redraw = function( data, options )
{
	//redraw를 위한 전처리 로직 추가;

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
/*/
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
//*/

var _reqData = function( url, cbComplete )
{
	window.RayLog.timeStamp( " [ S ] - _reqData():void----------" );

	//----------URI PARAMETERS;
	var _keyword = _ELS.INPUT__DENYKEYWORD.value;

	//TODO:SELECT BOX 를 통해 얻어 와야 함;
	var cd$BRAND = "00000";

	var _cd$COUNTRY_k = _ELS.SELECT__COUNTRY.value;
	//----------URI PARAMETERS;

	var url = _URLS.addDenyKeyword.replace( "<!=KEYWORD=!>", _keyword )
		.replace( "<!=CD$COUNTRY_k=!>", _cd$COUNTRY_k )
		.replace( "<!=CD$BRAND=!>", cd$BRAND );

	window.b2link_service.common._fn_req( url, _reqData.complete );
	window.RayLog.timeStamp( " [ E ] - _reqData():void----------" );
};

/**
 * @function
 * @param {Object} responseData
 * <code>
	{
		//{Number};
		r : 0
		//{String};
		, m : ""
		//{Object};
		, data : {
			{Int64}
			_id : 12312312313123
		}
	}
 * </code>
 */
_reqData.complete = function( responseData )
{
	if ( !window.b2link.response.getResultStatus( responseData ) )
	{
		if( responseData.m )
		{
			window.b2link_ui.message.error( responseData.m );
		}
	}

	//ERROR;
	if( !responseData )
	{
		window.TtwLog.error( "[ ERROR ] - _reqData - responseData : " + responseData );
		return;
	}
	
	
	//입력이 성공하면 inputbox 를 삭제 한다.;
	_ELS.INPUT__DENYKEYWORD.value = "";

	//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
	//_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( responseData );

	//DISPATCH RESPONSE EVENT;
	window.b2link.event.dispatchCE__RESPONSE_DATA( _ELS.ROOT, responseData );
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

/**
 * set Chart(EChart) Options
 * @function
 * @param {Object} d
 * <code>
	{
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
	}
	else
	{
	}
};

//--------------------------------------------------GET & SET;

var _getHeight = function(){ return _THIS.super.getHeight(); };
var _setHeight = function( s ){

	if( null == s ) var s = _ELS.ROOT.parentElement.clientHeight || ( window.screen.availHeight + _setHeight.TERM_HEIGHT );

	_THIS.super.setHeight( s );
};
//_setHeight.TERM_HEIGHT = 0;//ETC;
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
 * FancyGrid
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