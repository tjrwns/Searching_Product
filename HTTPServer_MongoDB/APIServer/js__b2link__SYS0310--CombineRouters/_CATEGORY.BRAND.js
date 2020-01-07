/*/
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "/js__b2link__SYS0310/_CATEGODY.BRAND.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

/*///수정 금지;
var FN000 = global.SYS0310.ROUTER.add;

var FN100 = global.b2link.url.getQueryFromURL;
var FN101 = global.b2link.url.getQueryFromURL_Decode;

var FN200 = global.b2link.debug._check_mongodb_queryParameter;

var FN300 = global.b2link.fs.getDBJS;
var FN301 = global.b2link.fs.getDBJS__require;

var FN400 = global.b2link.router.checkQueryCacheFile;

var FN500 = global.b2link.fs.writeQuery;
var FN501 = global.b2link.fs.writeQueryResultCache;

var FN600 = global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack;

var FN700 = global.b2link.response.send_200_False__ErrorLog;
var FN701 = global.b2link.response.send_200_False;
var FN702 = global.b2link.response.send_200_JSON;
var FN703 = global.b2link.response.send_200_True;

var FN710 = global.b2link.response.getResultStatus;
//*/

//----------------------------------------------------------------------------------------------------;

//	ROUTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

//브랜드 전체 목록;
(function(){

	var PATH_KEY  = "/_CATEGORY.BRAND/allList";
	var PATH_URI  = PATH_KEY + "/";
	var PATH_DBJS = global.SYS0310.ROUTER.CONST.PATH_COMMON_DBJS + PATH_KEY + ".dbjs";
	var PATH_CACHE= PATH_URI.replace( /\//gi, "-" );

	/**
	 * MongoDB Template Query를 dbjs 파일로부터 가져오기
	 * @property {String}
	 */
	//var _query = global.b2link.fs.getDBJS( PATH_DBJS );
	var _query = global.b2link.fs.getDBJS__require( PATH_DBJS );

	/**
	 * 브랜드 전체 목록 반환
	 * @router
	 * @param {http.ClientRequest} req
	 * <code>
		{

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
		http://localhost:49780/_CATEGORY.BRAND/allList/
		http://localhost:49780/_CATEGORY.BRAND/allList/?
	 * </code>
	 */
	global.SYS0310.ROUTER.add( PATH_URI, function( req, res ){
		global.TtwLog.timeStamp( "- [ S ] - " + PATH_URI + "():void----------" );

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
		var query = _query;

		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, global.SYS0310.ROUTER.CONST.CD, PATH_CACHE, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( PATH_DBJS, query );

		//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
		global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
			, function( req, res, error, result ){
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
					global.b2link.fs.writeQueryResultCache( global.SYS0310.ROUTER.CONST.CD, resultCheckCache, result );
					//----------[ E ] - Query Cache - Cache 파일 생성;


					//MongoDB Query 실행 후 결과를 Client에 전송하기;
					global.b2link.response.send_200_JSON( req, res, result );
					//global.b2link.response.send_200_True( req, res );

					return;
				}

				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False( req, res );
			}
		);

		global.TtwLog.timeStamp( "- [ E ] - " + PATH_URI + "():void----------" );
	});
})();

//--------------------------------------------------;

//나라별 브랜드 개수 및 목록;
(function(){

	var PATH_KEY  = "/_CATEGORY.BRAND/allList__byCountry";
	var PATH_URI  = PATH_KEY + "/";
	var PATH_DBJS = global.SYS0310.ROUTER.CONST.PATH_COMMON_DBJS + PATH_KEY + ".dbjs";
	var PATH_CACHE= PATH_URI.replace( /\//gi, "-" );

	/**
	 * MongoDB Template Query를 dbjs 파일로부터 가져오기
	 * @property {String}
	 */
	//var _query = global.b2link.fs.getDBJS( PATH_DBJS );
	var _query = global.b2link.fs.getDBJS__require( PATH_DBJS );

	/**
	 * 나라별 브랜드 개수 및 목록 반환
	 * @router
	 * @param {http.ClientRequest} req
	 * <code>
		{

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
		http://localhost:49780/_CATEGORY.BRAND/allList__byCountry/
		http://localhost:49780/_CATEGORY.BRAND/allList__byCountry/?
	 * </code>
	 */
	global.SYS0310.ROUTER.add( PATH_URI, function( req, res ){
		global.TtwLog.timeStamp( "- [ S ] - " + PATH_URI + "():void----------" );

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
		var query = _query;

		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, global.SYS0310.ROUTER.CONST.CD, PATH_CACHE, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( PATH_DBJS, query );

		//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
		global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
			, function( req, res, error, result ){
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
					global.b2link.fs.writeQueryResultCache( global.SYS0310.ROUTER.CONST.CD, resultCheckCache, result );
					//----------[ E ] - Query Cache - Cache 파일 생성;


					//MongoDB Query 실행 후 결과를 Client에 전송하기;
					global.b2link.response.send_200_JSON( req, res, result );
					//global.b2link.response.send_200_True( req, res );

					return;
				}

				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False( req, res );
			}
		);

		global.TtwLog.timeStamp( "- [ E ] - " + PATH_URI + "():void----------" );
	});
})();

//--------------------------------------------------;
//--------------------------------------------------;


//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;