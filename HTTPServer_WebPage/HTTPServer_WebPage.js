//require( "../../Development-NodeJS_Modules/Common-WebServer-000-0.js" );
require( "../../Development-NodeJS_Modules/Common-WebServer-000-1.js" );
//require( "../../Development-NodeJS_Modules/Common-WebServer-001-0.js" );
//require( "../../Development-NodeJS_Modules/Common-WebServer-001-1.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "HTTPServer_WebPage.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
//require( "../../Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - LOCAL AREA;
//	- Application 종속적인 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST.js" );
require( "./_$TATIC_NODE_MODULES.js" );

//require( global.process.cwd() + "/libs/mongodb/mongodb_schema_validator.js" );

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Define - CONST;

//----------------------------------------------------------------------------------------------------;

/**
 * HTTPService를 할 대상 root Path
 * @property {String}
 */
global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH = global.process.cwd() + "/../WebPage/root/";
global._$TATIC_CONST_SERVER_HTTP_HOST = null;
global._$TATIC_CONST_SERVER_HTTP_PORT = 49781;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
	bmp : "image/bmp"
	, css : "text/css"
	//, dbjs : "application/javascript"//오픈 금지;
	, gif : "image/gif"
	, html : "text/html"
	//, less : "text/css"//오픈 금지;
	, list : "text/plain"
	, jpeg : "image/jpeg"
	, jpg : "image/jpeg"
	, js : "application/javascript"
	, json : "text/json"
	, png : "image/png"

	, "server-120-ip" : "application/javascript"
	, "server-122-ip" : "application/javascript"
	, "server-123-ip" : "application/javascript"

	//, tjs : "application/javascript"//오픈 금지;
	, thtml : "text/html"//오픈 금지;
	, txt : "text/plain"
	, xml : "text/xml"
	//, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

	//Font;
	, ttf : "application/x-font-ttf"
	, woff : "application/x-font-woff"
	, woff2 : "application/x-font-woff"
};

global.b2link.fs.autoLoad_JSs([ [ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ] ]);

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Router;

//----------------------------------------------------------------------------------------------------;

/*/
//Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능;
//화면소스 개발모드에서만 사용한다.;
//Release 모드에서는 필요없음;
global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath();
/*/
(function(){
	var _CWD = global.process.cwd() + "/";
	var _CWD_ROOT = _CWD + "../WebPage/root";

	var _0 = SUtilHttpServer.__evt_request__APIAndFilePath = SUtilHttpServer.evt_request__APIAndFilePath;
	var _1 = global.process.cwd() + "/../../Development-Browser-Libraries/WebPage/root/";
	//var _2 = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	SUtilHttpServer.evt_request__APIAndFilePath = function( req, res ){
		//var uri = SUtilHttpServer.getURIFromURL( req.url );
		var uri = global.decodeURIComponent( SUtilHttpServer.getURIFromURL( req.url ) );

		global.console.log( Date.now() + " - " + uri );
		if( ( uri.length - 5 ) == uri.lastIndexOf( ".html" ) )
		{
			var PATH = _CWD_ROOT + uri;
			global.REQUIRE.fs.exists( PATH, function( b ){
				if( b )
				{
					var fStr = SUtilFsReadStream.getFile( PATH ).toString();

					if( -1 != fStr.indexOf( "<!=SYS0310." ) ) fStr = fStrreplace( /\<\!\=SYS0310\.HOST\=\!\>/gi, global.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" ) );

					global.b2link.response.send_200_HTML( req, res, fStr );
					return;
				}
				else
				{
					global.b2link.response.send_404( req, res );
					return;
				}
			});

			return;
		}

		else if( -1 != uri.lastIndexOf( ".js" ) && ( uri.length - 3 ) == uri.lastIndexOf( ".js" ) )
		{
			var PATH = _CWD_ROOT + uri;
			global.REQUIRE.fs.exists( PATH, function( b ){
				if( b )
				{
					var fStr = SUtilFsReadStream.getFile( PATH ).toString();

					//if( -1 != fStr.indexOf( "<!=SYS0310." ) ) fStr = fStrreplace( /\<\!\=SYS0310\.HOST\=\!\>/gi, global.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" ) );

					global.b2link.response.send_200_HTML( req, res, fStr );
					return;
				}
				else
				{
					global.b2link.response.send_404( req, res );
					return;
				}
			});

			return;
		}

		//else if( _2[ uri ] ) _0( req, res );

		else if( 0 == uri.indexOf( "/js/" ) )
		{
			//공통 모듈 파일을 가져와서 내려주기;
			//global.b2link.response.sendStream_200_File_NCallback( req, res, _1 );
			global.b2link.response.sendStream_200_File_URI_NCallback( req, res, _1, uri );
			return;
		}

		_0( req, res );
	};
})();
//*/

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	//Custom URI Example - http://localhost:port/a;
	_[ "/a" ] = function( req, res ){

		console.log( 1 );
		var r = "";
		req.on( "data", function( chunk ){
			r += chunk;
			console.log( "chunk : " + chunk );
		});
		req.on( "end", function( chunk ){
			r;
			//debugger;
		});
		SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
	};

	/*/
	_[ "/js/index.js" ]
		= _[ "/js/index_dev_mongodb.js" ]
		= function( req, res ){ global.b2link.response.sendStream_200_File_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH ); };
	//*/

	//B2LiNK-B2Labs IP 이외 차단 파일 목록;
	require( "../../Development-NodeJS_Modules/NotAvailableServiceFiles__IP.js" );
})();
//*/

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Initialize;

//----------------------------------------------------------------------------------------------------;

//WebServer용 HTTPServer를 생성한다.;
global.server = global.b2link.server_http.newServer__WebServer();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	JavaScript Import;
// - ./js/ : 공통모듈, Development-NodeJS_Modules에 존재한다.;
// - ./js__b2link__***/ : 각 개별 레파지토리에 존재한다. API 파일 목록은 필요 요소에 따라 다를수 있다.;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	global.b2link.fs.autoLoad_JSs([
		//  [ "JavaScript Import - B2LiNK-B2Ker-Dev"                  , "./js__b2link__b2ker/"                  , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-BrandPortal-Dev"            , "./js__b2link__brandPortal/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"            , "./js__b2link__excelServer/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"            , "./js__b2link__excelServer__webServer/" , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-FileServer-Dev"             , "./js__b2link__fileServer/"             , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-SessionServer-Dev"          , "./js__b2link__sessionServer/"          , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-WebHookServer-Dev"          , "./js__b2link__webHookServer/"          , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-WebSocket-MessageServer-Dev", "./js__b2link__webSocketMessageServer/" , { b2link_router : 1 } ]

		//, [ "JavaScript Import - B2LiNK-SessionServer-Dev", "./js__b2link__SYS0010/", { router : 1, router_external : 1, router_internal : 1 } ]
	]);
})();
//*/

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;