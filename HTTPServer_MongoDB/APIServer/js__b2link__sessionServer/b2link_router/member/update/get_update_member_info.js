//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/update/get_update_member_info.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * 회원정보 수정을 위한 기존 회원 정보 가져오기
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.update + "get_update_member_info.dbjs" );

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
	http://localhost:49320/member/update/get_update_member_info?data=
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/update/get_update_member_info():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//global.b2link.debug._check_mongodb_queryParameter( q );

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - 회원정보 수정을 위한 기존 회원 정보 가져오기;
	var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.update + "get_update_member_info.dbjs" );
	var query = _query.replace( "<!=data=!>", q.data ).replace( "<!=sid=!>", q.sid );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.update + "get_update_member_info.query", query );

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
			global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] - member/update/get_update_member_info():void----------" );
});