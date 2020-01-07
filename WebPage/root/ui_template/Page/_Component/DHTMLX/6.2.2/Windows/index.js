/*/
http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/Windows/index.html
http://dnsproxy.shop:49781/ui/Page/_Component/DHTMLX/6.2.2/Windows/index.html

http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/Windows/index.html?url=http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/Windows/index.json
http://dnsproxy.shop:49781/ui/Page/_Component/DHTMLX/6.2.2/Windows/index.html?url=http://dnsproxy.shop:49781/ui/Page/_Component/DHTMLX/6.2.2/Windows/index.json
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/_Component/DHTMLX/6.2.2/Windows/index.js";
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
		f( HOST + "/libs/dhtmlx/6.2.2/suite.css" );
	//JS;
	var f = window.b2link.util.importJS__Reuse;
	//var f = SUtilTemplateHTML.addJS__URLToHead;
		f( HOST + "/libs/dhtmlx/6.2.2/suite.js" );
		//f( HOST + "/libs/dhtmlx/6.2.2/component/Window.js" );
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
		ROOT : "ui/Page/_Component/DHTMLX/6.2.2/Windows/index"
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
	//window.b2link.element.mouseEnable( o.ROOT );
	window.b2link.element.mouseDisable( o.ROOT );
	window.b2link.element.hide( o.ROOT );

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
	_THIS.super.addEvent__INITIALIZED( _ELS.ROOT, function( event ){
		_THIS.draw( null, null );

		//초기화 직후 데이터가 존재하는 경우 ( 샘플 ) 실행;
		try{ _addWindow( null, null ); }catch( er ){ debugger; }
	});

	return {
		DHTMLX : {
			contents : {
				a : {
					title : "a"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.sparkline.addArea();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
					, resizable : true
				}
				, b : {
					title : "b"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.echart.addBar();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
					, resizable : true
				}
				, c : {
					title : "c"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.echart.addLine();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
				}
				, d : "<div>HELLO</div>"
				, e : "<div>ABCDEABCDE</div>"
				, f : {
					title : "f"
					, text : "<div>CONTENTS TEST</div>"
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
				}
			}
			//contents : { a : "<div>HELLO - A</div>", b : "<div>HELLO - B</div>" }
		}
	};
	////[ SAMPLE ] - [ E ] - 자동 삭제;
})();

/**
 * @const
 * @property
 */
var _DHTMLX = (function(){
	var o = {
		_currentWindow : null
		, dhx$Windows : null
		, windows : null
	};

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

/**
 * 이 컨트롤러에서 사용하는 컴포넌트 또는 메인 객체에 필요한 설정과 관련된 Option 값들을 정의 한다.
 * @property {Object}
 * <code>
	{

	}
 * </code>
 */
var _OPTIONS = {
	DHTMLX : {
		//[ 샘플 ] - 옵션 추가;
		  width : 500
		, height : 500
		, x : 0
		, y : 0
		, resizable : true
		, movable : true
		, closable : true
		, viewportOverflow : false
	}
};

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT - DISPATCH EVENTS;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

/**
 * windowObject에 event를 설정한다.
 * @function
 * @param {dhx.Window} windowObject
 */
var _addEvent__windowObject = function( windowObject )
{
	_removeEvent__windowObject( windowObject );

	windowObject.events.on( "Resize", _evt_Resize__dhx$Windows );//window Resize;

	var el = windowObject._popup;
		el.addEventListener( "click", _evt_mClick__dhx$Windows, false, 0, true );
};

/**
 * windowObject에 event를 해제한다.
 * @function
 * @param {dhx.Window} windowObject
 */
var _removeEvent__windowObject = function( windowObject )
{
	windowObject.events.detach( "Resize", _evt_Resize__dhx$Windows );//window Resize;

	var el = windowObject._popup;
		el.removeEventListener( "click", _evt_mClick__dhx$Windows, false );
};

//--------------------------------------------------;

/**
 * dhx.Window 클릭 시
 * @function
 * @param {dhx.Window}
 */
var _evt_mClick__dhx$Windows = function( event )
{
	var t = event.target;
	var ct = event.currentTarget;
	var windowObject = null;
	var s;

	//windowObject 찾기;
	for( s in _DHTMLX.windows )
	{
		if( _DHTMLX.windows[ s ]._popup == ct )
		{
			windowObject = _DHTMLX.windows[ s ];
			break;
		}
	}

	//닫기 버튼 클릭 시;
	if( t.getAttribute( "dhx_id" ) == "close" )
	{
		delete _DHTMLX.windows[ s ];
		return;
	}

	//현재 활성화 윈도우로 설정;
	_THIS.currentWindow = windowObject;
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
_evt_resize.resize = function(){ _setWidth( 0 ); _setHeight( 0 ); };

//_DHTMLX.windows의 resize 이벤트 발생 시키기;
_evt_resize.resize.dhxWindows = function(){
	var io;
	for( var s in _DHTMLX.windows )
	{
		io = _DHTMLX.windows[ s ];

		//var el = io.cell;
		var el = _getContentElementFromWindow( io );
		window.b2link.event.dispatchCE__RESIZED_EL( el, io );
	}
};

/**
 * dhx.Window resize 시
 * @function
 * @param {object} size
 * @param {object} oldsize
 * @param {object} direction
 */
var _evt_Resize__dhx$Windows = function( size, oldsize, direction )
{
	var el = _getContentElementFromWindow( this );
	window.b2link.event.dispatchCE__RESIZED_EL( el, this );
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
		if( _DATA.width  ){ if( !_getWidth()  ) _setWidth(  _DATA.width ); } else _setWidth( 0 );
		if( _DATA.height ){ if( !_getHeight() ) _setHeight( _DATA.height ); } else _setHeight( 0 );

		//RESIZE;
		//브라우저 사이즈에 영향을 받지 않음;
		//window.addEventListener( "resize", _evt_resize, false, 0, true );

		//window.b2link.event.DATA_LOAD_COMPLETE Event Listener 추가;
		_THIS.super.addEvent__DATA_LOAD_COMPLETE( function( event ){
			var EVENT_DATA = event.detail;

			//Event Dispatch 시키는 곳에서 이벤트 객체의 구조는 필요에 따라 변경 될 수 있다.;
			//_redraw( EVENT_DATA.data, null );

			_addWindow( EVENT_DATA.data );
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
 * 윈도우를 추가한다
 * @function
 * @param {Object} data
 * <code>
	{
		DHTMLX : {
			contents : {
				a : {
					title : "a"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.sparkline.addArea();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
					, resizable : true
				}
				, b : {
					title : "b"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.echart.addBar();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
					, resizable : true
				}
				, c : {
					title : "c"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.echart.addLine();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
				}
				, d : "<div>HELLO</div>"
				, e : "<div>ABCDEABCDE</div>"
				, f : {
					title : "f"
					, text : "<div>CONTENTS TEST</div>"
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
				}
			}
			//contents : { a : "<div>HELLO - A</div>", b : "<div>HELLO - B</div>" }
		}
	}
 * </code>
 * @param {Object} options
 * <code>
 	{
		DHTMLX : {
			  width : 500
			, height : 500
			, x : 0
			, y : 0
			, resizable : true
			, movable : true
			, closable : true
			, viewportOverflow : false
		}
	}
 * </code>
 */
var _addWindow = function( data, options )
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

	//Windows 다중 생성;
	if( data.DHTMLX && data.DHTMLX.contents )
	{
		_addWindow._fn0( data, options );
		return;
	}
	//Window 1개 생성;
	else
	{
		var id = "_dhx$Window--" + SUtilMath.getUnique();
		var windowObject = _addWindow._fn1( id, data, options );
		return windowObject;
	}
};
//Windows 다중 생성 및 콘텐츠 설정;
_addWindow._fn0 = function( data, options ){
	//CUSTOM PROPERTY;
	if( data.DHTMLX )
	{
		if( data.DHTMLX.contents )
		{
			var T = data.DHTMLX.contents;
			var param;

			var windowObject;
			var io;
			for( var s in T )
			{
				io = T[ s ];

				if( "string" == typeof( io ) )//콘텐츠 내용이 HTML String인 경우;
				{
					try
					{
						windowObject = _addWindow._fn1( s, io, options );
						windowObject.attachHTML( io );
						_DHTMLX.windows[ s ] = windowObject;
					}
					catch( er )
					{
						window.TtwLog.error( "[ ERROR ] - data.DHTMLX.contents." + s + " 가 정상 HTML이 아니다. - " + er );
					}
				}
				else if( "function" == typeof( io.renderer ) )//콘텐츠 내용이 HTML String인 경우;
				{
					windowObject = _addWindow._fn1( s, io, options );

					io.renderer( windowObject );

					windowObject.show();

					_DHTMLX.windows[ s ] = windowObject;
				}
				else if( "string" == typeof( io.text ) )//콘텐츠 내용이 HTML String이고 이외의 조건이 존재하는 경우;
				{
					try
					{
						windowObject = _addWindow._fn1( s, io, options );
						windowObject.attachHTML( io.text );
						_DHTMLX.windows[ s ] = windowObject;
					}
					catch( er )
					{
						window.TtwLog.error( "[ ERROR ] - data.DHTMLX.contents." + s + " 가 정상 HTML이 아니다. - " + er );
					}
				}
			}

			//마지막 생성 Window를 currentWindow로 설정;
			_THIS.currentWindow = windowObject;

			//_DHTMLX.layout.cells의 resize 이벤트 발생 시키기;
			_evt_resize.resize.dhxWindows();
		}
		else window.TtwLog.error( "[ ERROR ] - data.DHTMLX.contents Property를 {Function}, {String} 만 주입 가능." );

		return;
	}
};
//콘텐츠 설정을 위한 조건 생성 후 반환;
//데이터에 조건이 존재 시 데이터 조건 적용, 존재하지 않으면 옵션 조건 적용;
_addWindow._fn1 = function( id, data, options ){
	var o_param = _addWindow._fn1.param;
		o_param.x = data.x || options.DHTMLX.x;
		o_param.y = data.y || options.DHTMLX.y;
		o_param.width = data.width || options.DHTMLX.width;
		o_param.height = data.height || options.DHTMLX.height;
		o_param.title = data.title || options.DHTMLX.title;
		o_param.title = o_param.title || "";
		o_param.resizable = data.resizable || options.DHTMLX.resizable;
		o_param.movable = data.movable || options.DHTMLX.movable;
		o_param.closable = data.closable || options.DHTMLX.closable;
		o_param.viewportOverflow = data.viewportOverflow || options.DHTMLX.viewportOverflow;

	var windowObject = new _DHTMLX._dhx$Windows( o_param );
		windowObject.setSize( o_param.width, o_param.height );
		windowObject.setPosition( o_param.x, o_param.y );
		_addEvent__windowObject( windowObject );
		windowObject.show();
	return windowObject;
};
_addWindow._fn1.param = {};


/**
 * @function
 * @param{Object} d
 * <code>
	{
		DHTMLX : {
			contents : {
				a : {
					title : "a"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.sparkline.addArea();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
					, resizable : true
				}
				, b : {
					title : "b"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.echart.addBar();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
					, resizable : true
				}
				, c : {
					title : "c"
					, renderer : function( win ){
						var els = window.SYS0310_UI_API.echart.addLine();
						var el = els[ 0 ];
						var elc = els[ 1 ];

						//win.attachHTML( el.outerHTML );
						var contentElement = _getContentElementFromWindow( win );
						contentElement.appendChild( el );
						elc.setParentElement( contentElement );
					}
				}
				, d : "<div>HELLO</div>"
				, e : "<div>ABCDEABCDE</div>"
				, f : {
					title : "f"
					, text : "<div>CONTENTS TEST</div>"
					, width : SUtilMath.random( 500, 700 )
					, height : SUtilMath.random( 500, 700 )
					, x : SUtilMath.random( 0, 700 )
					, y : SUtilMath.random( 0, 700 )
				}
			}
			//contents : { a : "<div>HELLO - A</div>", b : "<div>HELLO - B</div>" }
		}
	}
 * </code>
 * @return{Object} option
 */
var _createOptions = function( d )
{
	if( !d.DHTMLX )
	//if( !d.DHTMLX || !d.DHTMLX.contents )
	{
		window.TtwLog.error( "[ ERROR ] - _createOptions : d 가 불충분함" );
		return;
	}

	//_OPTIONS 데이터 생성 또는 가감 로직 추가;
	_setOptions( d );
};

/**
 * 모든 윈도우를 close ( 삭제 )
 * @function
 */
var _destructorAll = function()
{
	for( var key in _DHTMLX.windows )
	{
		_DHTMLX.windows[ key ].destructor();
		_DHTMLX.windows[ key ] = null;
		delete _DHTMLX.windows[ key ];
	}
	_THIS.currentWindow = null;
};

/**
 * @function
 */
var _dispose = function()
{
	//dispose를 위한 각종 로직 삽입;
	if( _DHTMLX._dhx$Windows != null )
	{
		for( var p in _DHTMLX.windows )
		{
			_DHTMLX.windows[ p ].destructor();
			delete _DHTMLX.windows[ p ];
		}

		_DHTMLX._dhx$Windows = null;
		_DHTMLX.windows = null;
		_THIS.currentWindow = null;
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
		DHTMLX : {
			contents : { a : "<div>HELLO - A</div>", b : "<div>HELLO - B</div>" }
		}
	}
 * </code>
 * @param {null|Object} options dtx.Window의 options
 * <code>
	{
		DHTMLX : {
			  width : 500
			, height : 500
			, x : 0
			, y : 0
			, resizable : true
			, movable : true
			, closable : true
			, viewportOverflow : false
		}
	}
 * </code>
 */
var _draw = function( data, options )
{
	//ViewContainer 특성상 Draw를 처음 1회만 수행한다;
	if( !_draw._isDrawed && !_DHTMLX._dhx$Windows )
	{
		//그리기 위한 로직 추가;
		_DHTMLX._dhx$Windows = window.dhx.Window;
		/*/
		_DHTMLX._dhx$Windows.attachViewportTo( window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_PANEL );
		_DHTMLX._dhx$Windows.attachEvent( "onFocus", _evt_onFocus__dhx$Windows );//window onFocus;
		//*/

		_DHTMLX.windows = _DHTMLX.windows || {};

		//ViewContainer 특성상 Draw를 처음 1회만 수행한다;
		_draw._isDrawed = true;
	}
};
//ViewContainerManager 특성상 Draw를 처음 1회만 수행한다;
_draw._isDrawed = false;

/**
 * 모든 윈도우를 hide
 * @function
 */
var _hideAll = function()
{
	for( var key in _DHTMLX.windows ) _DHTMLX.windows[ key ].hide();
};

/**
 * 다시 그리기
 * @function
 * @param {Array|Object} data
 * <code>
	{
		target : {String|HTMLElement|dhx.Window}
		, DHTMLX : {
			contents : "<div>ABCDE</div>"
			, width : 300
			, height : 200
		}
	}
 * </code>
 * @param {null|Object} options dtx.Window의 options
 */
var _redraw = function( data, options )
{
	/*/
	//redraw를 위한 전처리 로직 추가;

	_draw( data, options );
	//*/
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
	/*/
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
	//*/
};

/**
 * 모든 윈도우를 show
 * @function
 */
var _showAll = function()
{
	for( var key in _DHTMLX.windows ) _DHTMLX.windows[ key ].show();
};

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

/**
 * window 내부의 본문 영역을 반환한다.
 * @function
 * @param {dhx.Window} win
 * @return {HTMLElement} el
 */
var _getContentElementFromWindow = function( win )
{
	var el = win._popup;
	//if( el.getElementsByClassName( _getContentElementFromWindow.className__content_innerHTML )[ 0 ] ) el = el.getElementsByClassName( _getContentElementFromWindow.className__content_innerHTML )[ 0 ];
	if( el.getElementsByClassName( _getContentElementFromWindow.className__content )[ 0 ] ) el = el.getElementsByClassName( _getContentElementFromWindow.className__content )[ 0 ];
	else if( el.getElementsByClassName( _getContentElementFromWindow.className__content_headless )[ 0 ] ) el = el.getElementsByClassName( _getContentElementFromWindow.className__content_headless )[ 0 ];
	return el;
};
_getContentElementFromWindow.className__content = "dhx_window-content";
_getContentElementFromWindow.className__content_innerHTML = "dhx_window__inner-html-content";
_getContentElementFromWindow.className__content_headless = "dhx_window-content-without-header";

//--------------------------------------------------SET;

/**
 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
 * @function
 * @param {Object} d url과 data는 병행 사용 불가능하다.
 * <code>
	{
		"url" : {String}
		, "data" : {Object}
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
 * set Windows Options
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

var _getHeight = function(){
	return window.screen.availHeight;
};
var _setHeight = function( s ){
	_ELS.ROOT.style.height = "0px";

	if( null == s ) var s = _ELS.ROOT.parentElement.clientHeight || ( window.screen.availHeight + _setHeight.TERM_HEIGHT );

	//if( _dhx$Windows ) _dhx$Windows.vp.height = s;
};
_setHeight.TERM_HEIGHT = 0;//ETC;
//_setHeight.TERM_HEIGHT = -150;//EChart;
//_setHeight.TERM_HEIGHT = -120;//Sparkline;

var _getWidth = function(){
	return window.screen.availWidth;
};
var _setWidth = function( s ){
 	_ELS.ROOT.style.width = "0px";
	//if( _dhx$Windows ) _dhx$Windows.vp.width = s;
};

//--------------------------------------------------GETTER & SETTER;

/**
 * 최상위(활성화 상태) 윈도우를 반환한다.
 * @function
 * @return {dhx.Window}
 */
_THIS.__defineGetter__( "currentWindow", function(){
	return _DHTMLX._currentWindow;
});

/**
 * 현재 활성화 된 윈도우를 currentWindow 프로퍼티로 지정한다.
 * @function
 * @return {dhx.Window}
 */
_THIS.__defineSetter__( "currentWindow", function( win ){
	_DHTMLX._currentWindow = win;
});

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

/**
 * DHTMLX 6.2.2 - Windows
 * @example
 * <code>
 * </code>
 */
(function(){
	var _ = _THIS;
		_.els = _ELS;

		_.destructorAll = _destructorAll;

		_.dispose = _dispose;

		_.draw = _draw;

		_.hideAll = _hideAll;
		//_.redraw = _redraw;

		//_.reqData = _reqData;

		_.showAll = _showAll;

		_.setData = _setData;
		//_.setParentElement = _setParentElement;

		//_.getHeight = _getHeight;
		//_.setHeight = _setHeight;

		//_.getWidth = _getWidth;
		//_.setWidth = _setWidth;

	//Resize 대상 객체를 Observer 패턴에 추가한다;
	//아직 기능 개발 되있지 않음;
	//필수 Interface가 존재함 - 미정의;
	//window.????.????.push( _ );

	if( !initialize._bInit ) initialize();

	return _;
})();