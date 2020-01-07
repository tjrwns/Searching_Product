//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0310/b2link_router_external/reqKeyword/crud/addKeyword__allow.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _MAP = (function(){
	var o = {};

	return o;
})();

var PATH_NAME = "addKeyword__allow";
var PATH_DBJS = global.b2link_router_external.reqKeyword.PATH.crud + PATH_NAME + ".dbjs";
var PATH_URI = global.b2link_router_external.reqKeyword.PATH.crud;
var PATH_CACHE= PATH_URI.replace( /\//gi, "-" );

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( PATH_DBJS );
//var _query = global.b2link.fs.getDBJS__require( PATH_DBJS );

/**
 * 사용자가 요청한 검색 키워드를 수집 디비에 저장한다.
 * 이때 검색 허용된 언어( 일어, 중국어, 한국어, 영어 ) 및 문자수 ( 2 이상 ) 에 대해서만 저장 한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		//{String} 입력 키워드;
		"keyword" : ""
		//{undefined|String} 해당 검색어에 해당하는 브랜드;
		, cd$BRAND : ""
		//{undefined|String} 해당 검색어에 언어 _ALL일경우 언어 체크를 진행한다. 허용값 : "KR", "US", "JP", "CN";
		, cd$COUNTRY_k : "'"
	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @example
 * <code>
	http://localhost:49780/reqKeyword/crud/addKeyword__allow?keyword=drjart&cd$brand="0000"&cd$COUNTRY_k=undefined
 * </code>
 */
(function( req, res ){
	//global.RayLog.timeStamp( "- [ S ] - " + "global.reqKeyword.crud." + PATH_NAME + "():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//query property check;
	//keyword 에 검색 금지 언어가 존재하는지 여부 확인.

	//use q;
	//...Custom parameter process;
	var ip = global.b2link.request.getIP( req );

	if( !_MAP[ ip ] )
	{
		_MAP[ ip ] = q.keyword;
		global.setTimeout( function(){ delete _MAP[ ip ]; }, 3000 );
	}
	else if( _MAP[ ip ] == q.keyword )
	{
		//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
		global.b2link.response.send_200_False( req, res, q );
		return;
	}

	//사용자의 국가선택;
	var cd$COUNTRY = req.headers[ "accept-language" ].split( "," )[ 0 ].split( "-" )[ 1 ];//ko-KR;

	//사용자의 user-agent;
	var user_agent = req.headers[ "user-agent" ];

	//언어 체크;
	var cd$COUNTRY_k = q.cd$COUNTRY_k;
	if( cd$COUNTRY_k == "_ALL" || cd$COUNTRY_k == undefined )
		cd$COUNTRY_k = global.b2link.validate.getCountryCDFromRequestKeyword__SYS0310( q.keyword );

	//공백 문자 여부확인;
	var wh = q.keyword.indexOf( " " ) < 0 ? 0 : 1;

	//검색시간 데이터 생성;
	var o_date = global.b2link.date.getDateObjectFromNow__SYS0310__Keyword();

	//파라미터 생성;
	var p = {
		bt : user_agent

		//ip의 좌표 값;
		, c : null

		//키워드의 브랜드 - 사용자가 선택시;
		, cd$BRAND : q.cd$BRAND

		//사용자 국가코드 - 영문 2자;
		, cd$COUNTRY : cd$COUNTRY

		//키워드 언어의 국가코드 - 영문 2자;
		, cd$COUNTRY_k : cd$COUNTRY_k

		, d_d : o_date.d_d
		, d_m : o_date.d_m
		, d_ymd : o_date.d_ymd
		, d_ym : o_date.d_ym
		, d_y : o_date.d_y
		, k : q.keyword
		, k0 : q.keyword[ 0 ]
		, ip : ip
		, l : q.keyword.length
		//, t : o_date.t
		, wh : wh
	};

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//global.b2link.debug._check_mongodb_queryParameter( q );

	//[ DEBUG ] - MongoDB Template Query를 dbjs 파일로부터 가져오기 - 요청시 마다 쿼리 갱신;
	var _query = global.b2link.fs.getDBJS( PATH_DBJS );
	//var _query = global.b2link.fs.getDBJS__require( PATH_DBJS );

	//_query에서 사용할 파라메터를 replace( "<!==!>", "" ); 약속된 치환자로 치환한다.;
	var query = _query.replace( "<!=DATA=!>", JSON.stringify( p ) );

	//----------[ S ] - Query Cache - Cache 파일 체크;
	//var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, global.SYS0310.ROUTER.CONST.CD, PATH_CACHE, q );
	//if( true == resultCheckCache ) return;
	//----------[ E ] - Query Cache - Cache 파일 체크;

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	//global.b2link.fs.writeQuery( global.b2link_router_external.reqKeyword.PATH.crud + PATH_NAME + ".query", query );

	//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query, function( req, res, error, result ){
		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			return;
		}

		//MongoDB Query 실행 후 결과를 Client에 전송하기;
		if( global.b2link.response.getResultStatus( result ) )
		{
			//----------[ S ] - Query Cache - Cache 파일 생성;
			//global.b2link.fs.writeQueryResultCache( global.SYS0310.ROUTER.CONST.CD, resultCheckCache, result );
			//----------[ E ] - Query Cache - Cache 파일 생성;

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.b2link.response.send_200_JSON( req, res, result );
			//global.b2link.response.send_200_True( req, res );

			try
			{
				SUtilCP.asExec( 'D: & cd D:\\GitHub_B2LiNK\\B2LiNK-OnSight-Dev\\DataBase_Query & "__global.mongo.exec-192.168.0.230ː58781.bat" "D:\\GitHub_B2LiNK\\B2LiNK-OnSight-Dev\\DataBase_Query\\_SITE_COLLECT_URL.list 생성.dbjs"'
					, function( error, stdout, stderr ){
						if( error )
						{
							global.TtwLog.error( "[ ERROR ] - " + error );
						}
					}
				);
			}
			catch( er )
			{
			}

			return;
		}

		//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
		global.b2link.response.send_200_False( req, res );
	});

	//global.RayLog.timeStamp( "- [ E ] - " + "global.reqKeyword.crud." + PATH_NAME + "():void----------" );
});