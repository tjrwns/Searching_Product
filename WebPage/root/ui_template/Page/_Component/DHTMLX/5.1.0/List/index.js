/*/
http://localhost:49781/ui/Page/_Component/DHTMLX/5.1.0/List/index.html?width=500&height=500

//사이즈를 %로 적용;
http://localhost:49781/ui/Page/_Component/DHTMLX/5.1.0/List/index.html?width=100%25&height=500
http://localhost:49781/ui/Page/_Component/DHTMLX/5.1.0/List/index.html?width=100%25&height=800

//사이즈를 %로 적용 - Height는 적용 안됨;
http://localhost:49781/ui/Page/_Component/DHTMLX/5.1.0/List/index.html?width=100%25&height=100%25

//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/_Component/DHTMLX/5.1.0/List/index.js";
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

	window.b2link.util.importCSSsToHead( HOST + "/libs/dhtmlx/5.1.0/fonts/font_roboto/roboto.css"
		//, HOST + "/libs/dhtmlx/5.1.0/dhtmlxdataview_dhx_skyblue.css"
		, HOST + "/libs/dhtmlx/5.1.0/dhtmlxdataview_dhx_terrace.css"
		//, HOST + "/libs/dhtmlx/5.1.0/dhtmlxdataview_dhx_web.css"
		//, HOST + "/libs/dhtmlx/5.1.0/dhtmlxdataview_material.css"

		//, HOST + "/libs/dhtmlx/5.1.0/dhtmlxlist_dhx_skyblue.css"
		, HOST + "/libs/dhtmlx/5.1.0/dhtmlxlist_dhx_terrace.css"
		//, HOST + "/libs/dhtmlx/5.1.0/dhtmlxlist_dhx_web.css"
		//, HOST + "/libs/dhtmlx/5.1.0/dhtmlxlist_material.css"
	);

	//dhtmlx.RenderStack, dhtmlx.SelectionModel, dhtmlx.EditAbility, dhtmlx.DataMove, dhtmlx.DragItem, dhtmlx.DataProcessor 필요;
	window.b2link.util.importJSsToHead(  HOST + "/libs/dhtmlx/5.1.0/dhtmlxCommon/dhtmlxcommon-all.js"
		, HOST + "/libs/dhtmlx/5.1.0/dhtmlxdataview.js"
		, HOST + "/libs/dhtmlx/5.1.0/dhtmlxlist.js"
		, initialize
	);
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
		ROOT : "ui/Page/_Component/DHTMLX/5.1.0/List/index"
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
	// window.b2link.element.mouseDisable( o.ROOT );


	var f0 = window.b2link.element.getElementByClassName;

	o.INSTALL_UI = f0( o.ROOT, "ui/Page/_Component/DHTMLX/5.1.0/List/index--INSTALL_UI" );
	o.DIV__LIST = f0( o.ROOT, "ui/Page/_Component/DHTMLX/5.1.0/List/index--list" );
	o.DIV__PAGGING = f0( o.ROOT, "ui/Page/_Component/DHTMLX/5.1.0/List/index--pagger" );

	return o;
})();

/**
 * @const
 * @property
 */
var _DHTMLX = (function(){
	var o = {};
		o.list = null;

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
	_THIS.super.addEvent__INITIALIZED( _ELS.ROOT, function( event ){ _THIS.draw( null, null ); });


	var o = {
		DHTMLX : {
			//[ 필수 ] - title에 존재하는 프로퍼티와 동일한 키값으로 데이터가 존재 해야한다. - abcde순서
			data : [
				{"id":"1","name":"Sigmund Steuber","address":"866 Kris Drive","city":"North Rosettabury","state":"NH","zip":"69167"}
				, {"id":"2","name":"Darion Considine","address":"8318 Kristy Skyway","city":"Vernerside","state":"WA","zip":"01338"}
				, {"id":"3","name":"Reid Raynor","address":"63041 Parisian Run","city":"Nolanberg","state":"MN","zip":"08625-2763"}
				, {"id":"4","name":"Angus Conroy","address":"528 Considine Viaduct","city":"Nelschester","state":"ME","zip":"42589-0752"}
				, {"id":"5","name":"Grace Friesen","address":"212 Adelle Plaza","city":"New Stephany","state":"OR","zip":"70658-1454"}
				, {"id":"6","name":"Lonny DuBuque","address":"353 Lorenz Fords","city":"West Easton","state":"OK","zip":"49704-5220"}
				, {"id":"7","name":"Dock Ward","address":"28354 Predovic Corner","city":"New Napoleon","state":"AZ","zip":"35039-5934"}
				, {"id":"8","name":"Kaya Wiza","address":"73313 Gregory Port","city":"Maggiobury","state":"IL","zip":"51553"}
				, {"id":"9","name":"Gideon Olson","address":"7423 Wiza Station","city":"Botsfordberg","state":"OH","zip":"61022"}
				, {"id":"10","name":"Imelda Dicki","address":"198 Koby Junctions","city":"Daronport","state":"CA","zip":"77571"}
				, {"id":"11","name":"Keven Kemmer","address":"192 Spencer Spring","city":"Dooleyfurt","state":"DE","zip":"49592"}
				, {"id":"12","name":"Haleigh Moen","address":"573 Ryley Lights","city":"Arnoside","state":"WA","zip":"11359-5517"}
				, {"id":"13","name":"Pierce Herman","address":"97428 Sanford Lodge","city":"Harveyside","state":"VA","zip":"93177-1650"}
				, {"id":"14","name":"Ali D'Amore","address":"67058 Witting Mountain","city":"Valentineton","state":"MI","zip":"43966"}
				, {"id":"15","name":"Bridget Wuckert","address":"3502 Swift Cliffs","city":"Bayerview","state":"VA","zip":"15606-4888"}
				, {"id":"16","name":"Gianni Pfannerstill","address":"799 Patricia Junction","city":"Jodietown","state":"TX","zip":"70168"}
				, {"id":"17","name":"Georgianna Stiedemann","address":"6617 Jermaine Plains","city":"South Karley","state":"VT","zip":"52537"}
				, {"id":"18","name":"Keara Legros","address":"1314 Hartmann Lakes","city":"Huelberg","state":"CO","zip":"08223"}
				, {"id":"19","name":"Dwight Hauck","address":"499 Adams Street","city":"North Lewis","state":"NH","zip":"94729-4304"}
				, {"id":"20","name":"Friedrich Treutel","address":"496 Edison Plain","city":"West Yadiraland","state":"RI","zip":"38678-2438"}
				, {"id":"21","name":"Eryn Cummings","address":"952 Huel Wall","city":"Harberberg","state":"MN","zip":"29349-4782"}
				, {"id":"22","name":"Jaleel Hackett","address":"916 Graham Spur","city":"East Eloise","state":"TX","zip":"74820-4075"}
				, {"id":"23","name":"Jackson Reichel","address":"62127 Russel Alley","city":"Kaylafort","state":"OK","zip":"01599-1607"}
				, {"id":"24","name":"Louie Borer","address":"385 Tracey Estates","city":"New Laurelport","state":"NC","zip":"86437-9887"}
				, {"id":"25","name":"Danyka Leffler","address":"496 Nitzsche Estate","city":"Alaniston","state":"NV","zip":"19382-8400"}
				, {"id":"26","name":"Maud Bode","address":"13618 Delilah Fort","city":"Kihnview","state":"SC","zip":"09809-4445"}
				, {"id":"27","name":"Hailee Jaskolski","address":"745 Beahan Square","city":"West Malika","state":"CT","zip":"30111-0112"}
				, {"id":"28","name":"Tamia Herman","address":"50360 VonRueden Islands","city":"New Aylinville","state":"SD","zip":"14416"}
				, {"id":"29","name":"Jedidiah Franecki","address":"8300 Robb Trafficway","city":"South Wyatt","state":"MS","zip":"13002"}
				, {"id":"30","name":"Sanford Cassin","address":"8463 Thompson Port","city":"Heaneyshire","state":"NJ","zip":"32633-1827"}
				, {"id":"31","name":"Domenico Beier","address":"29485 Kertzmann Lights","city":"Lake Dolores","state":"NC","zip":"60075"}
				, {"id":"32","name":"Lon Barrows","address":"6677 Ima Walks","city":"North Brett","state":"OH","zip":"99052"}
				, {"id":"33","name":"Wilford Williamson","address":"782 Lindgren Fields","city":"Lake Josianne","state":"CO","zip":"96457"}
				, {"id":"34","name":"Mohammed Gibson","address":"210 Orn Estates","city":"Alysonside","state":"HI","zip":"43659"}
				, {"id":"35","name":"Bryon Dibbert","address":"72083 Spinka Ranch","city":"Port Rodrigo","state":"CO","zip":"50072-4075"}
				, {"id":"36","name":"Marjolaine Emard","address":"2866 Carrie Circle","city":"Kentonshire","state":"CO","zip":"89103-0209"}
				, {"id":"37","name":"Baron Gerlach","address":"99601 Lehner Fall","city":"New Hortensestad","state":"DE","zip":"30180"}
				, {"id":"38","name":"Lennie Bauch","address":"7944 Domingo Cove","city":"Lake Kacichester","state":"OH","zip":"37392"}
				, {"id":"39","name":"Krystal Stehr","address":"79084 Roman Burgs","city":"Bartolettimouth","state":"ID","zip":"58119"}
				, {"id":"40","name":"Imelda Cartwright","address":"85509 Jaylin Branch","city":"North Darrick","state":"NH","zip":"77902-8240"}
				, {"id":"41","name":"Mabelle Cremin","address":"773 Kohler Gateway","city":"East Kari","state":"MI","zip":"81800-7691"}
				, {"id":"42","name":"Alford Langosh","address":"0967 Boyer Brook","city":"Schusterport","state":"CA","zip":"11380"}
				, {"id":"43","name":"Dominic Mann","address":"928 Doyle Radial","city":"Port Waltermouth","state":"GA","zip":"23808"}
				, {"id":"44","name":"Adah Nader","address":"14903 Block Mountains","city":"Jakubowskiport","state":"OR","zip":"15136"}
				, {"id":"45","name":"Garry Okuneva","address":"3231 Eloy Crossing","city":"South Dougborough","state":"KS","zip":"55481-8929"}
				, {"id":"46","name":"Noemie Shields","address":"6450 Kerluke Rapid","city":"East Sheldonton","state":"GA","zip":"43758"}
				, {"id":"47","name":"Lea Torp","address":"2894 Kassulke Courts","city":"Schmittport","state":"AL","zip":"90547-2288"}
				, {"id":"48","name":"Korey Kihn","address":"23276 Langworth Fall","city":"East Joel","state":"NM","zip":"60038-2185"}
				, {"id":"49","name":"Seamus Schumm","address":"9207 Kaela Extension","city":"Hermannberg","state":"AL","zip":"86263-1856"}
				, {"id":"50","name":"Wilhelm Barton","address":"487 Champlin Pines","city":"Maceymouth","state":"WI","zip":"29009"}
			]
		}

		, width : ( d.width || 320 )
		, height : ( d.height || 200 )
	};

	return o;
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

	}
 * </code>
 */
var _OPTIONS = {
	//정렬 주의사항 : 페이징이랑 함께 사용 안됨;
	type : {

		//방식 1;
		template : "#name# : #city#<br/>#state#"

		//방식 2;
		//template : function( obj ){ return obj.name + "<br/>" + obj.state; }

		//방식 4 - Semantic UI 섞어 사용;
//		template : `<div class='ui segment'>
//		  <div class='ui relaxed divided list'>
//			<div class='item'>
//			  <div class='content'>
//				<div class='header'>name</div>
//					#name#
//			  </div>
//			</div>
//			<div class='item'>
//			  <div class='content'>
//				<div class='header'>city</div>
//				#city#
//			  </div>
//			</div>
//			<div class='item'>
//			  <div class='content'>
//				<div class='header'>state</div>
//				#state#
//			  </div>
//			</div>
//		  </div>
//		</div>`

		, width : ""
		, height : ""
		, margin : 0
		, padding : 10
		, border  : 1
	}
	//, tooltip : { template : "Details: #address#" }
	//, height : "auto"
	//, height : ""
	//, drag : true
	// select : true/false/"multiselect"
	, select : true

	, useFilter : true
	, useSort : true
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
	_evt_resize._TIMEOUT = window.setTimeout( _evt_resize.resize, 1000 );
};
_evt_resize._TIMEOUT = -1;
_evt_resize.resize = function(){};
_evt_resize.resize_default = function(){ _setWidth( "100%" ); _setHeight( "100%" ); _redraw( null, null ); };

/**
 * @function
 * @param {Event}
 */
var _evt_mClick__item = function( event )
{
	//event : rowID;
	if( _DATA && _DATA.hasOwnProperty( "DHTMLX" ) && _DATA.DHTMLX.hasOwnProperty( "data" ) )
	{
		var idx = _DHTMLX.list.indexById( event );

		window.b2link.event.dispatchCE__LIST_SELECTED_ITEM( _ELS.ROOT, {
			selected_item : _DATA.DHTMLX.data[ idx ]
		});
	}
};

/**
 * 이 파일 내의 모든 전처리 Logic 및 Flow가 완료 된 후 필요한 객체를 생성 및 화면 표출 로직을 집어 넣는 함수
 * @function
 */
function initialize()
{
	try
	{
		window.clearTimeout( initialize._TIMEOUT );
		if( !window.dhtmlXList )
		{
			initialize._TIMEOUT = window.setTimeout( initialize, 300 );
			return;
		}
		else if( !initialize._bInit && window.dhtmlXList )
		{
			//공통 Interface 규약 체크, Change UniqueId;
			_THIS.super.initialize();

			//Set Width, Height;
			if( _DATA.width  ){ if( !_getWidth()  ) _setWidth(  _DATA.width ); } else _setWidth( "100%");
			if( _DATA.height ){ if( !_getHeight() ) _setHeight( _DATA.height ); } else _setHeight( null );

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
	}
	catch( er )
	{
		window.TtwLog.log( "[ ERROR ] - initialize - " + er );
		return;
	}
};
initialize._bInit = 0;
initialize._TIMEOUT = -1;


//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * 아이템 추가
 * @function
 * @param{Object} d
 * <code>
	{
		{"id":"1","name":"Sigmund Steuber","address":"866 Kris Drive","city":"North Rosettabury","state":"NH","zip":"69167"}
	}
 * </code>
 */
var _addItem = function( d )
{
	_DHTMLX.list.add( d );
};

/**
 * @function
 * @param{Object} d
 * <code>
	{
		DHTMLX : {
			data : [
				{"id":"1","name":"Sigmund Steuber","address":"866 Kris Drive","city":"North Rosettabury","state":"NH","zip":"69167"}
				, {"id":"2","name":"Darion Considine","address":"8318 Kristy Skyway","city":"Vernerside","state":"WA","zip":"01338"}
				, {"id":"3","name":"Reid Raynor","address":"63041 Parisian Run","city":"Nolanberg","state":"MN","zip":"08625-2763"}
				, {"id":"4","name":"Angus Conroy","address":"528 Considine Viaduct","city":"Nelschester","state":"ME","zip":"42589-0752"}
				, {"id":"5","name":"Grace Friesen","address":"212 Adelle Plaza","city":"New Stephany","state":"OR","zip":"70658-1454"}
				, {"id":"6","name":"Lonny DuBuque","address":"353 Lorenz Fords","city":"West Easton","state":"OK","zip":"49704-5220"}
				, {"id":"7","name":"Dock Ward","address":"28354 Predovic Corner","city":"New Napoleon","state":"AZ","zip":"35039-5934"}
				, {"id":"8","name":"Kaya Wiza","address":"73313 Gregory Port","city":"Maggiobury","state":"IL","zip":"51553"}
				, {"id":"9","name":"Gideon Olson","address":"7423 Wiza Station","city":"Botsfordberg","state":"OH","zip":"61022"}
				, {"id":"10","name":"Imelda Dicki","address":"198 Koby Junctions","city":"Daronport","state":"CA","zip":"77571"}
			]
		}
	}
 * </code>
 * @return{Object} option
 */
var _createOptions = function( d )
{
	var option = null;
	if( !d.DHTMLX )
	{
		window.TtwLog.error( "[ ERROR ] - _createOptions : d 가 불충분함" );
		return;
	}
	return option;
};

/**
 * @function
 */
var _destory = function()
{
	debugger;
	if( _DHTMLX.list != null )
	{
		_DHTMLX.list.destructor();
		_DHTMLX.list = null;
	}
};

/**
 * @function
 */
var _dispose = function()
{
	//dispose를 위한 각종 로직 삽입;
	if( _DHTMLX.list != null && _DHTMLX.list.unload != null )
	{
		_DHTMLX.list.destructor();
		_DHTMLX.list = null;
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
			//[ 필수 ] - title에 존재하는 프로퍼티와 동일한 키값으로 데이터가 존재 해야한다. - abcde순서
			data : [
				{"id":"1","name":"Sigmund Steuber","address":"866 Kris Drive","city":"North Rosettabury","state":"NH","zip":"69167"}
				, {"id":"2","name":"Darion Considine","address":"8318 Kristy Skyway","city":"Vernerside","state":"WA","zip":"01338"}
				, {"id":"3","name":"Reid Raynor","address":"63041 Parisian Run","city":"Nolanberg","state":"MN","zip":"08625-2763"}
				, {"id":"4","name":"Angus Conroy","address":"528 Considine Viaduct","city":"Nelschester","state":"ME","zip":"42589-0752"}
				, {"id":"5","name":"Grace Friesen","address":"212 Adelle Plaza","city":"New Stephany","state":"OR","zip":"70658-1454"}
				, {"id":"6","name":"Lonny DuBuque","address":"353 Lorenz Fords","city":"West Easton","state":"OK","zip":"49704-5220"}
				, {"id":"7","name":"Dock Ward","address":"28354 Predovic Corner","city":"New Napoleon","state":"AZ","zip":"35039-5934"}
				, {"id":"8","name":"Kaya Wiza","address":"73313 Gregory Port","city":"Maggiobury","state":"IL","zip":"51553"}
				, {"id":"9","name":"Gideon Olson","address":"7423 Wiza Station","city":"Botsfordberg","state":"OH","zip":"61022"}
				, {"id":"10","name":"Imelda Dicki","address":"198 Koby Junctions","city":"Daronport","state":"CA","zip":"77571"}
				, {"id":"11","name":"Keven Kemmer","address":"192 Spencer Spring","city":"Dooleyfurt","state":"DE","zip":"49592"}
				, {"id":"12","name":"Haleigh Moen","address":"573 Ryley Lights","city":"Arnoside","state":"WA","zip":"11359-5517"}
				, {"id":"13","name":"Pierce Herman","address":"97428 Sanford Lodge","city":"Harveyside","state":"VA","zip":"93177-1650"}
				, {"id":"14","name":"Ali D'Amore","address":"67058 Witting Mountain","city":"Valentineton","state":"MI","zip":"43966"}
				, {"id":"15","name":"Bridget Wuckert","address":"3502 Swift Cliffs","city":"Bayerview","state":"VA","zip":"15606-4888"}
				, {"id":"16","name":"Gianni Pfannerstill","address":"799 Patricia Junction","city":"Jodietown","state":"TX","zip":"70168"}
				, {"id":"17","name":"Georgianna Stiedemann","address":"6617 Jermaine Plains","city":"South Karley","state":"VT","zip":"52537"}
				, {"id":"18","name":"Keara Legros","address":"1314 Hartmann Lakes","city":"Huelberg","state":"CO","zip":"08223"}
				, {"id":"19","name":"Dwight Hauck","address":"499 Adams Street","city":"North Lewis","state":"NH","zip":"94729-4304"}
				, {"id":"20","name":"Friedrich Treutel","address":"496 Edison Plain","city":"West Yadiraland","state":"RI","zip":"38678-2438"}
				, {"id":"21","name":"Eryn Cummings","address":"952 Huel Wall","city":"Harberberg","state":"MN","zip":"29349-4782"}
				, {"id":"22","name":"Jaleel Hackett","address":"916 Graham Spur","city":"East Eloise","state":"TX","zip":"74820-4075"}
				, {"id":"23","name":"Jackson Reichel","address":"62127 Russel Alley","city":"Kaylafort","state":"OK","zip":"01599-1607"}
				, {"id":"24","name":"Louie Borer","address":"385 Tracey Estates","city":"New Laurelport","state":"NC","zip":"86437-9887"}
				, {"id":"25","name":"Danyka Leffler","address":"496 Nitzsche Estate","city":"Alaniston","state":"NV","zip":"19382-8400"}
				, {"id":"26","name":"Maud Bode","address":"13618 Delilah Fort","city":"Kihnview","state":"SC","zip":"09809-4445"}
				, {"id":"27","name":"Hailee Jaskolski","address":"745 Beahan Square","city":"West Malika","state":"CT","zip":"30111-0112"}
				, {"id":"28","name":"Tamia Herman","address":"50360 VonRueden Islands","city":"New Aylinville","state":"SD","zip":"14416"}
				, {"id":"29","name":"Jedidiah Franecki","address":"8300 Robb Trafficway","city":"South Wyatt","state":"MS","zip":"13002"}
				, {"id":"30","name":"Sanford Cassin","address":"8463 Thompson Port","city":"Heaneyshire","state":"NJ","zip":"32633-1827"}
				, {"id":"31","name":"Domenico Beier","address":"29485 Kertzmann Lights","city":"Lake Dolores","state":"NC","zip":"60075"}
				, {"id":"32","name":"Lon Barrows","address":"6677 Ima Walks","city":"North Brett","state":"OH","zip":"99052"}
				, {"id":"33","name":"Wilford Williamson","address":"782 Lindgren Fields","city":"Lake Josianne","state":"CO","zip":"96457"}
				, {"id":"34","name":"Mohammed Gibson","address":"210 Orn Estates","city":"Alysonside","state":"HI","zip":"43659"}
				, {"id":"35","name":"Bryon Dibbert","address":"72083 Spinka Ranch","city":"Port Rodrigo","state":"CO","zip":"50072-4075"}
				, {"id":"36","name":"Marjolaine Emard","address":"2866 Carrie Circle","city":"Kentonshire","state":"CO","zip":"89103-0209"}
				, {"id":"37","name":"Baron Gerlach","address":"99601 Lehner Fall","city":"New Hortensestad","state":"DE","zip":"30180"}
				, {"id":"38","name":"Lennie Bauch","address":"7944 Domingo Cove","city":"Lake Kacichester","state":"OH","zip":"37392"}
				, {"id":"39","name":"Krystal Stehr","address":"79084 Roman Burgs","city":"Bartolettimouth","state":"ID","zip":"58119"}
				, {"id":"40","name":"Imelda Cartwright","address":"85509 Jaylin Branch","city":"North Darrick","state":"NH","zip":"77902-8240"}
				, {"id":"41","name":"Mabelle Cremin","address":"773 Kohler Gateway","city":"East Kari","state":"MI","zip":"81800-7691"}
				, {"id":"42","name":"Alford Langosh","address":"0967 Boyer Brook","city":"Schusterport","state":"CA","zip":"11380"}
				, {"id":"43","name":"Dominic Mann","address":"928 Doyle Radial","city":"Port Waltermouth","state":"GA","zip":"23808"}
				, {"id":"44","name":"Adah Nader","address":"14903 Block Mountains","city":"Jakubowskiport","state":"OR","zip":"15136"}
				, {"id":"45","name":"Garry Okuneva","address":"3231 Eloy Crossing","city":"South Dougborough","state":"KS","zip":"55481-8929"}
				, {"id":"46","name":"Noemie Shields","address":"6450 Kerluke Rapid","city":"East Sheldonton","state":"GA","zip":"43758"}
				, {"id":"47","name":"Lea Torp","address":"2894 Kassulke Courts","city":"Schmittport","state":"AL","zip":"90547-2288"}
				, {"id":"48","name":"Korey Kihn","address":"23276 Langworth Fall","city":"East Joel","state":"NM","zip":"60038-2185"}
				, {"id":"49","name":"Seamus Schumm","address":"9207 Kaela Extension","city":"Hermannberg","state":"AL","zip":"86263-1856"}
				, {"id":"50","name":"Wilhelm Barton","address":"487 Champlin Pines","city":"Maceymouth","state":"WI","zip":"29009"}
			]
		}

		, width : ( d.width || 320 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options EChart의 options
 * <code>
 	{
		//정렬 주의사항 : 페이징이랑 함께 사용 안됨;
		type : {

			//방식 1;
			template : "#name# : #city#<br/>#state#"

			//방식 2;
			//template : function( obj ){ return obj.name + "<br/>" + obj.state; }

			//방식 4 - Semantic UI 섞어 사용;
	//		template : `<div class='ui segment'>
	//		  <div class='ui relaxed divided list'>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>name</div>
	//					#name#
	//			  </div>
	//			</div>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>city</div>
	//				#city#
	//			  </div>
	//			</div>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>state</div>
	//				#state#
	//			  </div>
	//			</div>
	//		  </div>
	//		</div>`

			, width : ""
			, height : ""
			, margin : 0
			, padding : 10
			, border  : 1
		}
		//, tooltip : { template : "Details: #address#" }
		//, height : "auto"
		//, height : ""
		, drag : true
		// select : true/false/"multiselect"
		, select : true
		, pager : {
			size : 5
			, group : 5
			, template : `
						<div class='' style='padding: 10px 0px 30px 20px;'>
							<div class='' style='cursor: pointer;'>{common.prev()}</div>
							<div class='paging_text'>Page {common.page()} from #limit#</div>
							<div class='' style='cursor: pointer;'>{common.next()}</div>
						</div>
			`
			// , template : "{common.prev()}<div class='paging_text'>Page {common.page()} from #limit#</div>{common.next()}"
			// , template : "{common.first()}{common.pages()}{common.last()}"
			// , template : "{common.pages()}"
		}

		, useFilter : true
		, useSort : false
	}
 * </code>
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

	if( !_DHTMLX.list )
	{
		//그리기 위한 로직 추가;
		options.container = _ELS.DIV__LIST;
		if( options.pager )	options.pager.container = _ELS.DIV__PAGGING;

		_DHTMLX.list = new window.dhtmlXList( options );
		_DHTMLX.list.attachEvent( "onItemClick", _evt_mClick__item );

		//DHTMLX List Component에 JSON 데이터 삽임;
		_DHTMLX.list.parse( data.DHTMLX.data, "json" );

		//샘플 UI 생성;
		//_draw._fn0( data, options );
	}
};

/**
 * @function
 * @param{string} field
 * @param{string} value
 */
var _list_filter = function( field, value )
{
	if( !field )
	{
		window.HykLog.error( "[ ERROR ] - undefind - field : " + field );
		return;
	}
	if( !value )
	{
		window.HykLog.error( "[ ERROR ] - undefind - value : " + value );
		return;
	}
	if( typeof field != "string" )
	{
		window.HykLog.error( "[ ERROR ] - is not string - field : " + field );
		return;
	}
	if( typeof value != "string" )
	{
		window.HykLog.error( "[ ERROR ] - is not string - value : " + value );
		return;
	}

	_DHTMLX.list.filter( "#" + field + "#", value );
};

/**
 * @function
 * @param{string} field
 * @param{string} dir [ asc | desc ]
 */
var _list_sort = function( field, dir )
{
	if( !field )
	{
		window.HykLog.error( "[ ERROR ] - Undefind - field : " + field );
		return;
	}
	if( !dir )
	{
		window.HykLog.error( "[ ERROR ] - Undefind - dir : " + dir );
		return;
	}
	if( typeof field != "string" )
	{
		window.HykLog.error( "[ ERROR ] - Is not string - field : " + field );
		return;
	}
	if( typeof dir != "string" )
	{
		window.HykLog.error( "[ ERROR ] - Is not string - dir : " + dir );
		return;
	}
	if( dir.indexOf( "asc" ) == -1 || dir.indexOf( "desc" ) == -1 )
	{
		window.HykLog.error( "[ ERROR ] - An invalid argument encountered - { asc | desc } - dir : " + dir );
		return;
	}

	_DHTMLX.list.sort({ by: "#" + field + "#", dir: dir });
};

/**
 * 다시 그리기
 * @function
 * @param {Array|Object} data
 * <code>
	{
		DHTMLX : {
			data : [
				{"id":"1","name":"Sigmund Steuber","address":"866 Kris Drive","city":"North Rosettabury","state":"NH","zip":"69167"}
				, {"id":"2","name":"Darion Considine","address":"8318 Kristy Skyway","city":"Vernerside","state":"WA","zip":"01338"}
				, {"id":"3","name":"Reid Raynor","address":"63041 Parisian Run","city":"Nolanberg","state":"MN","zip":"08625-2763"}
				, {"id":"4","name":"Angus Conroy","address":"528 Considine Viaduct","city":"Nelschester","state":"ME","zip":"42589-0752"}
				, {"id":"5","name":"Grace Friesen","address":"212 Adelle Plaza","city":"New Stephany","state":"OR","zip":"70658-1454"}
				, {"id":"6","name":"Lonny DuBuque","address":"353 Lorenz Fords","city":"West Easton","state":"OK","zip":"49704-5220"}
				, {"id":"7","name":"Dock Ward","address":"28354 Predovic Corner","city":"New Napoleon","state":"AZ","zip":"35039-5934"}
				, {"id":"8","name":"Kaya Wiza","address":"73313 Gregory Port","city":"Maggiobury","state":"IL","zip":"51553"}
				, {"id":"9","name":"Gideon Olson","address":"7423 Wiza Station","city":"Botsfordberg","state":"OH","zip":"61022"}
				, {"id":"10","name":"Imelda Dicki","address":"198 Koby Junctions","city":"Daronport","state":"CA","zip":"77571"}
			]
		}
	}
 * </code>
 * @param {null|Object} options EChart의 options
 * <code>
	{
		//정렬 주의사항 : 페이징이랑 함께 사용 안됨;
		type : {

			//방식 1;
			template : "#name# : #city#<br/>#state#"

			//방식 2;
			//template : function( obj ){ return obj.name + "<br/>" + obj.state; }

			//방식 4 - Semantic UI 섞어 사용;
	//		template : `<div class='ui segment'>
	//		  <div class='ui relaxed divided list'>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>name</div>
	//					#name#
	//			  </div>
	//			</div>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>city</div>
	//				#city#
	//			  </div>
	//			</div>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>state</div>
	//				#state#
	//			  </div>
	//			</div>
	//		  </div>
	//		</div>`

			, width : ""
			, height : ""
			, margin : 0
			, padding : 10
			, border  : 1
		}
		//, tooltip : { template : "Details: #address#" }
		//, height : "auto"
		//, height : ""
		, drag : true
		// select : true/false/"multiselect"
		, select : true
		, pager : {
			size : 5
			, group : 5
			, template : `
						<div class='' style='padding: 10px 0px 30px 20px;'>
							<div class='' style='cursor: pointer;'>{common.prev()}</div>
							<div class='paging_text'>Page {common.page()} from #limit#</div>
							<div class='' style='cursor: pointer;'>{common.next()}</div>
						</div>
			`
			// , template : "{common.prev()}<div class='paging_text'>Page {common.page()} from #limit#</div>{common.next()}"
			// , template : "{common.first()}{common.pages()}{common.last()}"
			// , template : "{common.pages()}"
		}

		, useFilter : true
		, useSort : false
	}
 * </code>
 */
var _redraw = function( data, options )
{
	//redraw를 위한 전처리 로직 추가;
	_destory();

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

/**
 * 리스트 아이템 전체 삭제
 * @function
 */
 var _removeAllItem = function()
{
	_DHTMLX.list.clearAll();
};

/**
 * 리스트 아이템 id 삭제
 * @function
 * @param{string|number|object} id
 */
var _removeItem = function( id )
{
	if( typeof id == "string" || typeof id == "number" || typeof id == "object" ) _DHTMLX.list.remove( id );

	// _DHTMLX.list.remove("item1");
	// _DHTMLX.list.remove(["item1","item2", "item3"]);
};

/**
 * @function
 */
var _resizeOff = function( resizer )
{
	window.removeEventListener( "resize", _evt_resize, false, 0 );
	if( resizer ) window.removeListener( "resize", resizer, false, 0 );

	_evt_resize.resize = function(){};
};

/**
 * @function
 */
var _resizeOn = function( resizer )
{
	if( resizer ) window.addEventListener( "resize", resizer, false, 0, true );
	else window.addEventListener( "resize", _evt_resize, false, 0, true );

	_evt_resize.resize = _evt_resize.resize_default;
};

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

/**
 * @function
 * @return {Array} [ "key0", "key1", ... ]
 */
var _getComponentDataPropertyNames = function()
{
	var a;
	_DHTMLX.list.data.each( function( item ){
		a = Object.keys( item );
		return;
	});

	return a;
};

//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;

/**
 * [ 수정하기 ] - 송선우 - 상위 클래스로 이동 시키기
 * _IDS.ROOT의 id를 기반으로 URI Path를 가져온다.
 * @function
 * @return {String}
 */
var _getURIFromROOT = function(){ return _IDS.ROOT.replace( "\-\-.*", "" ); };


/**
 * [ 수정하기 ] - 송선우 - 상위 클래스로 이동 시키기
 * _IDS.ROOT의 id를 기반으로 URL을 가져온다.
 * @function
 * @return {String}
 */
var _getURLFromROOT = function(){ return window.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" ) + "/" + _getURIFromROOT(); };

//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;

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
		//정렬 주의사항 : 페이징이랑 함께 사용 안됨;
		type : {

			//방식 1;
			template : "#name# : #city#<br/>#state#"

			//방식 2;
			//template : function( obj ){ return obj.name + "<br/>" + obj.state; }

			//방식 4 - Semantic UI 섞어 사용;
	//		template : `<div class='ui segment'>
	//		  <div class='ui relaxed divided list'>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>name</div>
	//					#name#
	//			  </div>
	//			</div>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>city</div>
	//				#city#
	//			  </div>
	//			</div>
	//			<div class='item'>
	//			  <div class='content'>
	//				<div class='header'>state</div>
	//				#state#
	//			  </div>
	//			</div>
	//		  </div>
	//		</div>`

			, width : ""
			, height : ""
			, margin : 0
			, padding : 10
			, border  : 1
		}
		//, tooltip : { template : "Details: #address#" }
		//, height : "auto"
		//, height : ""
		, drag : true
		// select : true/false/"multiselect"
		, select : true
		, pager : {
			size : 5
			, group : 5
			, template : `
						<div class='' style='padding: 10px 0px 30px 20px;'>
							<div class='' style='cursor: pointer;'>{common.prev()}</div>
							<div class='paging_text'>Page {common.page()} from #limit#</div>
							<div class='' style='cursor: pointer;'>{common.next()}</div>
						</div>
			`
			// , template : "{common.prev()}<div class='paging_text'>Page {common.page()} from #limit#</div>{common.next()}"
			// , template : "{common.first()}{common.pages()}{common.last()}"
			// , template : "{common.pages()}"
		}

		, useFilter : true
		, useSort : false
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

	if( null == s ) var s = _ELS.ROOT.parentElement.clientHeight || ( window.screen.availHeight + _setHeight.TERM_HEIGHT );

	_THIS.super.setHeight( s );
};
_setHeight.TERM_HEIGHT = 0;//ETC;
//_setHeight.TERM_HEIGHT = -150;//EChart;
//_setHeight.TERM_HEIGHT = -120;//Sparkline;

var _getWidth = function(){ return _THIS.super.getWidth(); };
var _setWidth = function( s ){ _THIS.super.setWidth( s ); };

//--------------------------------------------------GETTER & SETTER;

/**
 * @function
 * @return {Boolean}
 */
_THIS.__defineGetter__( "isData", function(){

	if( null == _DHTMLX.list ) return false;
	else
	{
		if( _DHTMLX.list.dataCount() > 0 ) return true;

		return false;
	}
});

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	INSTALL_UI;

//----------------------------------------------------------------------------------------------------;

/**
 * _DHTMLX.list 에 존재하는 데이터를 기반으로 UI를 생성한다.
 * @function
 */
var _INSTALL_UI = {
	getPARAM : function(){
		return {
			_THIS : _THIS
			, _DATA : _DATA
			, _OPTIONS : _OPTIONS

			, uiTargetComponent : _DHTMLX
		};
	}
};
	//UI - 검색 필터 처리;
	_INSTALL_UI.search = function( PARAM ){
		//CUSTOM PROPERTY;
		if( _DHTMLX.list )
		{
			var PARAM = _INSTALL_UI.getPARAM();

			if( _OPTIONS.useFilter )
			{
				//display: "";
				window.b2link.element.show( _ELS.INSTALL_UI );

				//List Element 위에 배치한다.;
				_ELS.DIV__LIST.insertAdjacentElement( "beforebegin", _ELS.INSTALL_UI );

				var url = _getURLFromROOT();

				window.b2link.util.importJS__Reuse( url + ".install.ui.search.js", PARAM );
			}
			else
			{
				//display: none;
				window.b2link.element.hide( _ELS.DIV__FILTER );
			}
		}
	};
	//UI - 정렬 처리;
	_INSTALL_UI.sort = function( PARAM ){
		//CUSTOM PROPERTY;
		if( _DHTMLX.list )
		{
			var PARAM = _INSTALL_UI.getPARAM();

			if( _OPTIONS.useSort )
			{
				//display: "";
				window.b2link.element.show( _ELS.INSTALL_UI );

				//List Element 위에 배치한다.;
				_ELS.DIV__LIST.insertAdjacentElement( "beforebegin", _ELS.INSTALL_UI );

				var url = _getURLFromROOT();

				window.b2link.util.importJS__Reuse( url + ".install.ui.sort.js", PARAM );
			}
			else
			{
				//display: none;
				window.b2link.element.hide( _ELS.DIV__SORT );
			}
		}
	};

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


		_.addItem = _addItem;

		_.destory = _destory;
		_.dispose = _dispose;

		_.draw = _draw;

		_.list_filter = _list_filter;
		_.list_sort = _list_sort;

		_.redraw = _redraw;

		_.removeAllItem = _removeAllItem;
		_.removeItem = _removeItem;

		_.reqData = _reqData;

		_.resizeOff = _resizeOff;
		_.resizeOn = _resizeOn;

		_.getComponentDataPropertyNames = _getComponentDataPropertyNames;

		_.setData = _setData;
		_.setOptions = _setOptions
		_.setParentElement = _setParentElement;

		_.getHeight = _getHeight;
		_.setHeight = _setHeight;

		_.getWidth = _getWidth;
		_.setWidth = _setWidth;

		_.INSTALL_UI = _INSTALL_UI;

	//Resize 대상 객체를 Observer 패턴에 추가한다;
	//아직 기능 개발 되있지 않음;
	//필수 Interface가 존재함 - 미정의;
	//window.????.????.push( _ );

	if( !initialize._bInit ) initialize();

	return _;
})();