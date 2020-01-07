//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0310/b2link_router_external/_SITE_COLLECT_URL/crud/completeURL.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	ROUTER;

//----------------------------------------------------------------------------------------------------;

var PATH_NAME = "completeURL";
var PATH_DBJS = global.b2link_router_external._SITE_COLLECT_URL.PATH.crud + PATH_NAME + ".dbjs";
var PATH_URI = global.b2link_router_external._SITE_COLLECT_URL.PATH.crud;
var PATH_CACHE= PATH_URI.replace( /\//gi, "-" );

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * @property {String}
 */
var _query = global.b2link.fs.getDBJS( PATH_DBJS );
//var _query = global.b2link.fs.getDBJS__require( PATH_DBJS );

/**
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		"keyword" : ""
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
	http://localhost:49780/_SITE_COLLECT_URL/crud/completeURL
 * </code>
 */
(function( req, res ){
	//global.TtwLog.timeStamp( "- [ S ] - " + "global._SITE_COLLECT_URL.crud." + PATH_NAME + "():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//use q;
	//...Custom parameter process;

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//global.b2link.debug._check_mongodb_queryParameter( q );

	//[ DEBUG ] - MongoDB Template Query를 dbjs 파일로부터 가져오기 - 요청시 마다 쿼리 갱신;
	//var _query = global.b2link.fs.getDBJS( PATH_DBJS );
	//var _query = global.b2link.fs.getDBJS__require( PATH_DBJS );

	//_query에서 사용할 파라메터를 replace( "<!==!>", "" ); 약속된 치환자로 치환한다.;
	var query = _query.replace( "<!=_id=!>", q._id );

	//----------[ S ] - Query Cache - Cache 파일 체크;
	//var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, global.SYS0310.ROUTER.CONST.CD, PATH_CACHE, q );
	//if( true == resultCheckCache ) return;
	//----------[ E ] - Query Cache - Cache 파일 체크;

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	//global.b2link.fs.writeQuery( global.b2link_router_external._SITE_COLLECT_URL.PATH.crud + PATH_NAME + ".query", query );

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

			return;
		}

		//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
		global.b2link.response.send_200_False( req, res );
	});

	//global.TtwLog.timeStamp( "- [ E ] - " + "global._SITE_COLLECT_URL.crud." + PATH_NAME + "():void----------" );
});