//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/session/destroy_session.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * Session 파괴
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.session + "destroy_session.dbjs" );
var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.session + "destroy_session.dbjs" );

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
	http://localhost:49320/member/session/destroy_session
	http://localhost:49320/member/session/destroy_session?sid=asdasfafasfasfas
 * </code>
 */
(function( req, res ){
	global.TtwLog.timeStamp( "- [ S ] - member/session/destroy_session():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	global.b2link.debug._check_mongodb_queryParameter( q );

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - Session 파괴;
	//var _query = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.session + "destroy_session.dbjs" );
	//var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.session + "destroy_session.dbjs" );
	var query = _query.replace( "<!=sid=!>", q.sid );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	//global.b2link.fs.writeQuery( global.b2link_router.member.PATH.session + "destroy_session.query", q.q );

	//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
		, function( req, res, error, result ){
			if( error )
			{
				//debugger;
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			//global.b2link.response.send_200_JSON( req, res, result );
			global.b2link.response.send_200_True( req, res );

			//Destroy Session 후 변경되는 member_session 정보 동기화;
			q.q = query;
			global.b2link_router.member._mongodbSync( q );
		}
	);

	global.TtwLog.timeStamp( "- [ E ] - member/session/destroy_session():void----------" );
});