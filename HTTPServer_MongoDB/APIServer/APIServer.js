//require( "../../../Development-NodeJS_Modules/Common-APIServer-000-0.js" );
require( "../../../Development-NodeJS_Modules/Common-APIServer-000-1.js" );
//require( "../../../Development-NodeJS_Modules/Common-APIServer-000-1-express.js" );
//require( "../../../Development-NodeJS_Modules/Common-APIServer-001-0.js" );
//require( "../../../Development-NodeJS_Modules/Common-APIServer-001-1.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "APIServer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
require( "../../../Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - LOCAL AREA;
//	- Application 종속적인 소스 조각 및 라이브러리;

//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST.js" );
//require( "./_$TATIC_NODE_MODULES.js" );

require( global.process.cwd() + "/libs/mongodb/mongodb_schema_validator.js" );

//----------------------------------------------------------------------------------------------------;

SUtilMongoDB.mongodb = SUtilMongoDBMongoClient.mongodb = global.REQUIRES.mongodb;
if( global.REQUIRES ){ if( !global.REQUIRES.mongodb ){ global.TtwLog.error( "알수없는 이유로 global.REQUIRES.mongodb가 존재하지 않는다" ); debugger; } }else{ global.TtwLog.error( "알수없는 이유로 global.REQUIRES가 존재하지 않는다" ); debugger; }

//----------------------------------------------------------------------------------------------------;

//*/
global._$TATIC_CONST_DEBUG = true;
/*/
global._$TATIC_CONST_DEBUG = false;
//*/

/**
 * Session Time
 * 2000000 : 37분 정도
 * 10000000 : 3시간 정도
 * @static
 * @property {Number}
 */
global._$TATIC_CONST_SESSION_TIME = 10000000;

//----------------------------------------------------------------------------------------------------;

/*///--------------------------------------------------URI 접근 및 사용 정보를 기록한다.;
//서버 생성 전에 모든 Router를 구동하기전 공통 Interface Overriding;

//SUtilHttpServer.evt_request__API_Only Overriding 한다. - URI, IP, PORT, SCODE, Session ID등을 File에 축적한다.;
//global.b2link.server_api.overrideInterface_collectURILog_File();

//SUtilHttpServer.evt_request__API_Only Overriding 한다. - URI, IP, PORT, SCODE, Session ID등을 DataBase에 축적한다.;
global.b2link.server_api.overrideInterface_collectURILog_MongoDB();
//*///--------------------------------------------------URI 접근 및 사용 정보를 기록한다.;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){

	//----------Initlaize Server;
	var server_port = process.argv[ 2 ] ? process.argv[ 2 ] : 49780;
	if( "NaN" == parseFloat( server_port ).toString() ) server_port = 49780;

	var _server = new global.Lib.Ttw.CLASS.HTTPAPIServer.MongoDB({
		instanceKey : "global.Lib.Ttw.httpAPIServer_MongoDB"
		//, mongodb : { host : "localhost", port : 58781 }
		//, mongodb : { host : "192.168.0.230", port : 58781 }
		//, mongodb : { host : "192.168.0.230", port : 58782 }
		, mongodb : { host : "dnsproxy.shop", port : 58781 }
		//, mongodb : { host : "dnsproxy.shop", port : 58782 }
		, server : { host : null, port : server_port }
	});
	global.server = _server;


	var f = _server.addRouter;

	//http://localhost:port/member_basic/getAllList__email?a=1&b=1
	f( "/member_basic/getAllList__email", function( req, res ){
		var _server = global.server;
		var q = _server.getQueryFromURL( req.url );

		//use q;
		//...Custom parameter process;

		q.db = "member";
		q.q = "member_basic$getAllList__email()";

		_server.req_DB( req, res, q, function( error, result ){
			if( error )
			{
				console.error( q.q + " Error : " + error );
				_server.sendResponse_200_False( req, res );
				return;
			}

			//...;

			_server.sendResponse_200_String( req, res, JSON.stringify( result ) );
		});
	});

	//--------------------------------------------------;
})();
//*/

//----------------------------------------------------------------------------------------------------;

//	JavaScript Import;
// - ./js/ : 공통모듈, Development-NodeJS_Modules에 존재한다.;
// - ./js__b2link__***/ : 각 개별 레파지토리에 존재한다. API 파일 목록은 필요 요소에 따라 다를수 있다.;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	global.b2link.fs.autoLoad_JSs([
		//  [ "JavaScript Import - B2LiNK-FileServer-Dev"             , "./js-express__b2link__fileServer/"     , { b2link_router : 1 } ]

		//, [ "JavaScript Import - B2LiNK-B2Ker-Dev"                  , "./js__b2link__b2ker/"                  , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-B2Ker-Dev"                  , "./js__b2link__b2ker-excel/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-BrandPortal-Dev"            , "./js__b2link__brandPortal/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"            , "./js__b2link__excelServer/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"            , "./js__b2link__excelServer__webServer/" , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-FileServer-Dev"             , "./js__b2link__fileServer/"             , { b2link_router : 1 } ]
		    [ "JavaScript Import - B2LiNK-SessionServer-Dev"          , "./js__b2link__sessionServer/"          , { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
		  , [ "JavaScript Import - B2LiNK-WebHookServer-Dev"          , "./js__b2link__webHookServer/"          , { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
		//, [ "JavaScript Import - B2LiNK-WebSocket-MessageServer-Dev", "./js__b2link__webSocketMessageServer/" , { b2link_router : 1 } ]

		//, [ "JavaScript Import - B2LiNK-SessionServer-Dev"          , "./js__b2link__SYS0010/"                , { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
		  , [ "JavaScript Import - B2LiNK-OnSight-Dev"                , "./js__b2link__SYS0310/"                , { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
	]);

	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	//수정하기 - 예시 일 뿐임 목적과 비지니스에 맡게 파일 명명 정해서 작성 하면 됨;
	(function(){
		global.SYS0310 = global.SYS0310 || {};
		global.SYS0310.ROUTER = global.SYS0310.ROUTER || {};
		global.SYS0310.ROUTER.CONST = global.SYS0310.ROUTER.CONST || {};
		global.SYS0310.ROUTER.CONST.CD = "SYS0310_APIServer";
		global.SYS0310.ROUTER.CONST.PATH_COMMON_DBJS = "./dbjs/";
		global.SYS0310.ROUTER.CONST.SERVER = global.server;
		global.SYS0310.ROUTER.add = global.SYS0310.ROUTER.CONST.SERVER.addRouter;

		require( "./js__b2link__SYS0310--CombineRouters/_CATEGORY.BRAND.js" );
		require( "./js__b2link__SYS0310--CombineRouters/_CATEGORY.COUNTRY.js" );
		require( "./js__b2link__SYS0310--CombineRouters/_CATEGORY.SITE.js" );

		require( "./js__b2link__SYS0310--CombineRouters/_SITE_COLLECT_DATA.list.js" );
		require( "./js__b2link__SYS0310--CombineRouters/_SITE_COLLECT_DATA--SITE.statistics.js" );
		/*/
		require( "./js__b2link__SYS0310--CombineRouters/_CATEGORY--통계.BRAND-SITE.js" );
		require( "./js__b2link__SYS0310--CombineRouters/_CATEGORY--통계.COUNTRY-BRAND.js" );
		require( "./js__b2link__SYS0310--CombineRouters/_CATEGORY--통계.COUNTRY-SITE.js" );
		require( "./js__b2link__SYS0310--CombineRouters/_CATEGORY--통계.SITE-BRAND.js" );
		//*/
	})();
})();
//*/

//확인하기 - 20170911_1944 - 제대로 된 인증 절처 및 디테일한 내용이 픽스 되기 전까진 주석 처리;
//global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack = global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack;


//--------------------------------------------------[ S ] - TEMP_SESSION;
//추후 삭제 예정 - 개발용 세션 강제 적용;
//추후 삭제 예정 - 개발용 세션 강제 적용;
//추후 삭제 예정 - 개발용 세션 강제 적용;
//추후 삭제 예정 - 개발용 세션 강제 적용;
(function(){
	var FN = global.b2link.url.getQueryFromURL;
	global.b2link.url.getQueryFromURL = function( url ){
		var q = FN( url );
			q.mid = "devTemp@b2link.co.kr";
			q.sid = "6457356b5a575a70626d566b4f6a6f305a445a684e4445334f44526d4e54597a4f4463344e4751314e6a4d344e7a67305a5455324d7a67334f44526b4e54597a4f444d774e475532597a4d344e7a67305a4455304e6d597a4e6a526c4e6d453159545a694e4751304d544e6b4d32513d";
			q.d_ex = "Fri, 15 Nov 2119 05:32:51 GMT";

		return q;
	};
})();
//--------------------------------------------------[ E ] - TEMP_SESSION;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;