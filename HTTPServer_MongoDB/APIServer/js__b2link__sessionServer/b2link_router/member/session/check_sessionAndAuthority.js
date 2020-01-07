//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/session/check_sessionAndAuthority.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * Session 체크 하기
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.session + "check_sessionAndAuthority.dbjs" );
var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.session + "check_sessionAndAuthority.dbjs" );

/**
 * @function
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
	http://localhost:33333/member/session/check_sessionAndAuthority
	http://localhost:33333/member/session/check_sessionAndAuthority?sid=aslkahjslkdj
 * </code>
 */
(function( req, res ){
	global.HykLog.timeStamp( "- [ S ] - member/session/check_sessionAndAuthority():void----------" );

	var t = global.server;//HTTP Server;

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		q.db = "member";

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	global.b2link.debug._check_mongodb_queryParameter( q );

	//Get Session or Create Session;
	var qp = global.b2link.session.get_or_create__Session( req, res, q );//Query Parameter;

	/*/
	q.q = "member_session$check_sessionAndAuthority__Expired__sid(" + JSON.stringify( qp.sid ) + ")";
	/*/
	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - Session 체크 하기;
	//var _query = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.session + "check_sessionAndAuthority.dbjs" );
	//var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.session + "check_sessionAndAuthority.dbjs" );

	q.q = _query.replace( "<!=sid=!>", q.sid )//Session ID;
		.replace( "<!=SCODE=!>", q.SCODE )//System Code;
		.replace( "<!=queryCRUDStatus=!>", q.queryCRUDStatus )//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값 - queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
		.replace( "<!=nm_db=!>", q.nm_db )//권한 체크를 할 대상 DataBase Name;
		.replace( "<!=nm_col=!>", q.nm_col );//권한 체크를 할 대상 Collection Name;

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.session + "check_sessionAndAuthority.query", q.q );
	//*/

	q.sid ? qp.sid = q.sid : null;

	//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
	t.req_DB( req, res, q, function( error, result ){
		global.HykLog.timeStamp( "-- [ S ] - member/session/check_sessionAndAuthority::res():void----------" );

		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			debugger;
			global.HykLog.timeStamp( "-- [ E ] - member/session/check_sessionAndAuthority::res():void----------if( error ) return;" );
			return;
		}

		/*///MongoDB Query 실행 후 결과를 Client에 전송하기;
		if( 0 == result ) global.b2link.response.send_301_DestroySession( req, res );
		else if( 1 == result ) global.b2link.response.send_200_True( req, res );
		/*/
		global.b2link.response.send_200_String( req, res, result.toString() );
		//*/

		global.HykLog.timeStamp( "-- [ E ] - member/session/check_sessionAndAuthority::res():void----------" );
	});

	global.HykLog.timeStamp( "- [ E ] - member/session/check_sessionAndAuthority():void----------" );
});