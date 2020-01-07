/*/
http://localhost:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html
http://dnsproxy.shop:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html

//사이즈 설정;
http://localhost:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?width=500&height=500
http://dnsproxy.shop:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?width=500&height=500

//사이즈를 %로 적용;
http://localhost:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?width=100%25&height=500
http://localhost:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?width=100%25&height=800
http://dnsproxy.shop:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?width=100%25&height=500
http://dnsproxy.shop:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?width=100%25&height=800

//사이즈를 %로 적용 - Height는 적용 안됨;
http://localhost:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?width=100%25&height=100%25&
http://dnsproxy.shop:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?width=100%25&height=100%25&


http://localhost:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?url=http://localhost:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.json
http://dnsproxy.shop:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.html?url=http://dnsproxy.shop:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.json
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/_Component/Chart/Sparkline/Bar/index.js";
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

	//CSS;
	var f = SUtilTemplateHTML.addCSS__URLToHead;

	//JS;
	var f = window.b2link.util.importJS__Reuse;
	//var f = SUtilTemplateHTML.addJS__URLToHead;
		f( HOST + "/libs/jQuery/3.2.1/jquery-3.2.1.min.js" );
		f( HOST + "/libs/jQuery_Plugin/Sparklines/import-js.js" );
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
		ROOT : "ui/Page/_Component/Chart/Sparkline/Bar/index"
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
 * 접속 URL에서 URI PARAMETERS를 추출 하여 초기값을 반영한다.
 * _setData, setWidth, setHeight등 각종 Setter또는 set Method에서 필요한 데이터를 설정하는 대상 객체
 *
 * @property {Array|Object} 필요에 따라 원하는 자료구조로 선언 가능, 기왕이면 Object로
 * <code>
 	//데이터 모델 형태 작성;
	//필요한 상태에 따라 프로퍼티 가감이 자유롭게 가능하다.;
	{
		, data : {Object}
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
			if( d.width  ){ if( !_getWidth()  ) _setWidth(  d.width ); } else _setWidth( "100%" );
			if( d.height ){ if( !_getHeight() ) _setHeight( d.height ); } else _setHeight( null );

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
		data : [ 1, 2, 3, 4, 5 ]
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
 * @property {Array|Object}
 */
var _OPTIONS = {
	//COMMON OPTIONS ----------;
	//One of 'line' (default), 'bar', 'tristate', 'discrete', 'bullet', 'pie' or 'box';
	//'line'(기본값), 'bar', 'tristate', 'discrete', 'bullet', 'pie'또는 'box'중 하나;
	type : "bar"
	//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
	//차트 너비-기본값은 'auto'-유효한 CSS 너비-1.5em, 20px 등일 수 있습니다 (단위 지정자가없는 숫자를 사용하면 원하는대로 수행되지 않음)-이 옵션은 막대 및 삼 상태 문자에 대해서는 아무 것도 수행하지 않습니다. (barWidth 참조);
	, width	: "100%"
	//Height of the chart - Defaults to 'auto' (line height of the containing tag);
	//차트 높이-기본값은 '자동'(포함 태그의 줄 높이)입니다.;
	, height : "100%"
	//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string;
	//선 및 이산 차트에서 CSS 값 문자열로 그려진 선의 색상을 지정하는 데 사용;
	, lineColor : null
	//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill;
	//그래프 아래 영역을 채우는 데 사용되는 색상을 CSS 값으로 지정하십시오. 채우기를 비활성화하려면 false로 설정하십시오.;
	, fillColor : null
	//Specify the minimum value to use for the range of Y values of the chart - Defaults to the minimum value supplied;
	//차트의 Y 값 범위에 사용할 최소값을 지정하십시오. 기본값은 제공된 최소값입니다.;
	, chartRangeMin : null
	//Specify the maximum value to use for the range of Y values of the chart - Defaults to the maximum value supplied;
	//차트의 Y 값 범위에 사용할 최대 값을 지정하십시오. 기본값은 제공된 최대 값입니다.;
	, chartRangeMax : null
	//If true then don't erase any existing chart attached to the tag, but draw another chart over the top - Note that width and height are ignored if an existing chart is detected.;
	//Note: You'll usually want to lock the axis on both charts using chartRangeMin and chartRangeMax if you want the same value on each chart to occupy the same point.
	//true 인 경우 태그에 연결된 기존 차트를 지우지 않고 상단에 다른 차트를 그립니다. 기존 차트가 감지되면 너비와 높이가 무시됩니다.;
	//참고 : 각 차트에서 동일한 값을 동일한 지점에 두려면 일반적으로 chartRangeMin 및 chartRangeMax를 사용하여 두 차트에서 축을 잠그는 것이 좋습니다.;
	, composite : null
	//If true then options can be specified as attributes on each tag to be transformed into a sparkline, as well as passed to the sparkline() function. See also tagOptionPrefix;
	//true 인 경우 옵션을 sparkline () 함수에 전달할뿐만 아니라 sparkline으로 변환 할 각 태그의 속성으로 지정할 수 있습니다. tagOptionPrefix도 참조하십시오;
	, enableTagOptions : null
	//String that each option passed as an attribute on a tag must begin with. Defaults to 'spark';
	//태그에서 속성으로 전달 된 각 옵션은 시작해야합니다. 기본적으로 '스파크';
	, tagOptionPrefix : null
	//The name of the tag attribute to fetch values from, if present - Defaults to 'values';
	//존재하는 경우 값을 가져올 태그 속성의 이름-기본값은 'values';
	, tagValuesAttribute : null
	//Set to true to disable checking for hidden sparklines. This can be beneficial if you know you'll never attempt to draw a sparkline into a hidden parent element as it avoids a browser reflow for the test, increasing rendering performance.;
	//Defaults to false - New in 2.0;
	//숨겨진 스파크 라인 검사를 비활성화하려면 true로 설정하십시오. 이것은 테스트를위한 브라우저 리플 로우를 피하여 렌더링 성능을 높이기 때문에 숨겨진 부모 요소에 스파크 라인을 그리려고하지 않을 경우 유용합니다.;
	//기본값은 false- 2.0의 새로운 기능;
	, disableHiddenCheck : null

	//BAR OPTIONS ----------;
	//CSS colour used for postive values;
	//Postive 값에 사용되는 CSS 색상;
	, barColor : "#0000FF"
	//CSS colour used for negative values;
	//음수 값에 사용되는 CSS 색상;
	, negBarColor : "#FF0000"
	//CSS colour used for values equal to zero;
	//0과 같은 값에 사용되는 CSS 색상;
	, zeroColor : "#000000"
	//CSS colour used for values equal to null - By default null values are omitted entirely, but setting this adds a thin marker for the entry - This can be useful if your chart is pretty sparse; perhaps try setting it to a light grey or something equally unobtrusive;
	//null과 같은 값에 사용되는 CSS 색상-기본적으로 null 값은 완전히 생략되지만이를 설정하면 항목에 얇은 마커가 추가됩니다.-차트가 매우 희소 한 경우 유용합니다. 아마도 밝은 회색 또는 똑같이 눈에 띄지 않는 것으로 설정하십시오;
	, nullColor : "#EEEEEE"
	//Width of each bar, in pixels (integer);
	//각 막대의 너비 (픽셀) (정수);
	, barWidth : 100
	//Space between each bar, in pixels (integer);
	//각 막대 사이의 간격 (픽셀) (정수);
	, barSpacing : 50
	//Centers the y-axis at zero if true (default);
	//true 인 경우 y 축을 0으로 중심에 둡니다 (기본값);
	, zeroAxis : true
	//A range map to map specific values to selected colours. For example if you want all values of -2 to appear yellow, use colorMap: { '-2': '#ff0' };
	//As of version 1.5 you may also pass an array of values here instead of a mapping to specifiy a color for each individual bar. For example if your chart has three values 1,3,1 you can set colorMap=["red", "green", "blue"];
	//As of version 2.0, objects will be automatically be converted to range maps so you can specify colours for a range of values;
	//특정 값을 선택된 색상으로 매핑 하는 범위 맵 입니다. 예를 들어, -2의 모든 값을 노란색으로 표시하려면 colorMap : { '-2': '# ff0'}을 사용하십시오;
	//버전 1.5부터는 각 개별 막대의 색상을 지정하기위한 매핑 대신 값 배열을 전달할 수도 있습니다. 예를 들어 차트에 1,3,1의 세 값이있는 경우 colorMap = [ "red", "green", "blue"] 를 설정할 수 있습니다;
	//버전 2.0부터 객체가 자동으로 범위 맵 으로 변환되어 색상을 지정할 수 있습니다;
	, colorMap : null
	//An array of colours to use for stacked bar charts. The first series will use the first value in the array, the second series will use the second, etc. New in 2.0;
	//누적 막 대형 차트에 사용할 색상 배열입니다. 첫 번째 시리즈는 배열의 첫 번째 값을 사용하고 두 번째 시리즈는 두 번째 등을 사용합니다. 2.0의 새로운 기능;
	, stackedBarColor : null
};

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

		//RESIZE;
		window.addEventListener( "resize", _evt_resize, false, 0, true );

		//window.b2link.event.DATA_LOAD_COMPLETE Event Listener 추가;
		_THIS.super.addEvent__DATA_LOAD_COMPLETE( function( event ){
			var EVENT_DATA = event.detail;

			//Event Dispatch 시키는 곳에서 이벤트 객체의 구조는 필요에 따라 변경 될 수 있다.;
			_redraw( EVENT_DATA );
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
 * @param {Array|Object} data
 * <code>
 	{
		data : [ 5, 4, 3, 2, 1 ]
		, width : 300
		, height : 300
	}
 * </code>
 * @param {null|Object} options sparkline의 options
 * <code>
	{
		type : "bar"
		, width	: "100%"
		, height : "100%"
		, barColor : "#FF0000"
		, barWidth : 80
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
	else options = _OPTIONS;

	//Sparkline 그리기;
	$( _ELS.ROOT ).sparkline( data.data, options );
};

/**
 * 다시 그리기
 * @function
 * @param {Array|Object} data
 * <code>
 	{
		data : [ 5, 4, 3, 2, 1 ]
		, width : 300
		, height : 300
	}
 * </code>
 * @param {null|Object} options sparkline의 options
 * <code>
	{
		type : "bar"
		, width	: "100%"
		, height : "100%"
		, barColor : "#FF0000"
		, barWidth : 80
	}
 * </code>

 * @example
 * <code>
	var data = {
		data : [ 5, 4, 3, 2, 1 ]
		, width : 300
		, height : 300
	};
	var options = {
		type : "bar"
		, width	: "100%"
		, height : "100%"
		, barColor : "#FF0000"
		, barWidth : 80
	};
	_redraw( data, options );
 * </code>
 */
var _redraw = function( data, options )
{
	//redraw를 위한 필요 로직 추가;

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
 * set Chart(Sparkline) Options
 * @function
 * @param {Object} d options
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
		//COMMON OPTIONS ----------;
		if( d.type ) _OPTIONS.type = d.type;
		if( d.width ) _OPTIONS.width = d.width;
		if( d.height ) _OPTIONS.height = d.height;
		if( d.lineColor ) _OPTIONS.lineColor = d.lineColor;
		if( d.fillColor ) _OPTIONS.fillColor = d.fillColor;
		if( d.chartRangeMin ) _OPTIONS.chartRangeMin = d.chartRangeMin;
		if( d.chartRangeMax ) _OPTIONS.chartRangeMax = d.chartRangeMax;
		if( d.composite ) _OPTIONS.composite = d.composite;
		if( d.enableTagOptions ) _OPTIONS.enableTagOptions = d.enableTagOptions;
		if( d.tagOptionPrefix ) _OPTIONS.tagOptionPrefix = d.tagOptionPrefix;
		if( d.tagValuesAttribute ) _OPTIONS.tagValuesAttribute = d.tagValuesAttribute;
		if( d.disableHiddenCheck ) _OPTIONS.disableHiddenCheck = d.disableHiddenCheck;

		//BAR OPTIONS ----------;
		if( d.barColor ) _OPTIONS.barColor = d.barColor;
		if( d.negBarColor ) _OPTIONS.negBarColor = d.negBarColor;
		if( d.zeroColor ) _OPTIONS.zeroColor = d.zeroColor;
		if( d.nullColor ) _OPTIONS.nullColor = d.nullColor;
		if( d.barWidth ) _OPTIONS.barWidth = d.barWidth;
		if( d.barSpacing ) _OPTIONS.barSpacing = d.barSpacing;
		if( d.zeroAxis ) _OPTIONS.zeroAxis = d.zeroAxis;
		if( d.colorMap ) _OPTIONS.colorMap = d.colorMap;
		if( d.stackedBarColor ) _OPTIONS.stackedBarColor = d.stackedBarColor;
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

	if( null == s ) var s = _ELS.ROOT.parentElement.clientHeight || ( window.screen.availHeight + _setHeight.TERM_HEIGHT );

	_THIS.super.setHeight( s );
};
//_setHeight.TERM_HEIGHT = 0;//ETC;
//_setHeight.TERM_HEIGHT = -150;//EChart;
_setHeight.TERM_HEIGHT = -120;//Sparkline;

var _getWidth = function(){ return _THIS.super.getWidth(); };
var _setWidth = function( s ){ _THIS.super.setWidth( s ); };

//--------------------------------------------------GETTER & SETTER;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

/**
 * Chart - Sparkline Bar
 * @example
 * <code>
 	var els = window.SYS0310_UI_API.sparkline.addBar();
		els[ 1 ].setData({ url : "http://localhost:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.json" });
		//els[ 1 ].setData({ url : "http://dnsproxy.shop:49781/ui/Page/_Component/Chart/Sparkline/Bar/index.json" });
		//els[ 1 ].setData({ options : { height: 200 } });
		els[ 1 ].redraw();
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