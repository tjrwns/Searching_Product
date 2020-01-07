//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/session/check_session.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * Session 체크 하기
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.session + "check_session.dbjs" );
var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.session + "check_session.dbjs" );

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
	http://localhost:49320/member/session/check_session
	http://localhost:49320/member/session/check_session?sid=aslkahjslkdj
 * </code>
 */
(function( req, res ){
	global.TtwLog.timeStamp( "- [ S ] - member/session/check_session():void----------" );

	var t = global.server;//HTTP Server;

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		q.db = "member";

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	global.b2link.debug._check_mongodb_queryParameter( q );

	//Get Session or Create Session;
	var qp = global.b2link.session.get_or_create__Session( req, res, q );//Query Parameter;

	/*/
	q.q = "member_session$check_session__Expired__sid(" + JSON.stringify( qp.sid ) + ")";
	/*/
	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - Session 체크 하기;
	//var _query = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.session + "check_session.dbjs" );
	//var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.session + "check_session.dbjs" );
	q.q = _query.replace( "<!=sid=!>", q.sid );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.session + "check_session.query", q.q );
	//*/

	q.sid ? qp.sid = q.sid : null;

	//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
	t.req_DB( req, res, q, function( error, result ){
		global.TtwLog.timeStamp( "-- [ S ] - member/session/check_session::res():void----------" );

		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			global.TtwLog.timeStamp( "-- [ E ] - member/session/check_session::res():void----------if( error ) return;" );
			return;
		}

		//MongoDB Query 실행 후 결과를 Client에 전송하기;
		if( 0 == result ) global.b2link.response.send_301_DestroySession( req, res );
		else if( 1 == result ) global.b2link.response.send_200_True( req, res );
		//else if( 1 == result ) global.b2link.response.send_200_JSON( req, res, result );

		global.TtwLog.timeStamp( "-- [ E ] - member/session/check_session::res():void----------" );
	});

	global.TtwLog.timeStamp( "- [ E ] - member/session/check_session():void----------" );
});