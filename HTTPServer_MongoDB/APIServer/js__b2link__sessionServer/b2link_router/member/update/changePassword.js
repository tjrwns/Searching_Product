//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/update/changePassword.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * 회원정보 업데이트
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.update + "changePassword.dbjs" );

/**
 * @property {Object}
 */
var __referenceObj = { timeout0 : -1 };

/**
 * 회원 정보 업데이트
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		mid : ""
		, mpw : ""
		, mpw$new : ""
		, mpw$newConfirm : ""
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
	http://localhost:49320/member/update/changePassword?data="
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/update/changePassword():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - 회원정보 업데이트;
	var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.update + "changePassword.dbjs" );
	var query = _query.replace( "<!=data=!>", q.data );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.update + "changePassword.query", query );

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

			//Member 정보 업데이트 후 DB 동기화;
			q.q = query;
			global.b2link_router.member._mongodbSync( q );

			/*///----------[ S ] - WebHookServer에서 사용하는 WebHook URL JSON을 생성한다;
			if( global.b2link_b2ker.member.createJSON__WebHook_JANDI )
			{
				global.b2link.common.clearTimeout( __referenceObj.timeout0 );
				__referenceObj.timeout0 = global.b2link.common.setTimeout( global.b2link_b2ker.member.createJSON__WebHook_JANDI( t ), 500 );
			}
			//*///----------[ E ] - WebHookServer에서 사용하는 WebHook URL JSON을 생성한다;
		}
	);

	global.TtwLog.log( "- [ E ] - member/update/changePassword():void----------" );
});