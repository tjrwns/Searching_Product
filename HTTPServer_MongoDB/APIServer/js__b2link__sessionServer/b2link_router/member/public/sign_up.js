//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/public/sign_up.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * SIGN UP
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.public + "sign_up.dbjs" );

/**
 * @property {Object}
 */
var __referenceObj = { server : null, timeout0 : -1 };

/**
 * SIGN UP - 회원가입
 *
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
	http://localhost:port/member/public/sign_up?
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/public/sign_up():void----------" );

	var t = __referenceObj.server = global.server;//HTTP Server;

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		q.db = "member";

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	global.b2link.debug._check_mongodb_queryParameter( q );

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - SIGN UP;
	var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.public + "sign_up.dbjs" );
	q.q = _query.replace( "<!=data=!>", q.data );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.public + "sign_up.query", q.q );

	//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
	t.req_DB( req, res, q, function( error, result ){
		global.TtwLog.timeStamp( "-- [ S ] - member/public/sign_up::res():void----------" );

		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			global.TtwLog.timeStamp( "-- [ E ] - member/public/sign_up::res():void----------if( error ) return;" );
			return;
		}

		//MongoDB Query 실행 후 결과를 Client에 전송하기;
		if( 0 == result )
		{
			global.b2link.response.send_301_DestroySession( req, res );
		}
		else if( 1 == result )
		{
			global.b2link.response.send_200_JSON( req, res, result );

			//디비동기화 진행;
			global.b2link_router.member._mongodbSync( q.q );
		}

		//*///----------[ S ] - WebHookServer에서 사용하는 WebHook URL JSON을 생성한다;
		if( global.b2link_b2ker.member.createJSON__WebHook_JANDI )
		{
			global.b2link.common.clearTimeout( __referenceObj.timeout0 );
			__referenceObj.timeout0 = global.b2link.common.setTimeout( global.b2link_b2ker.member.createJSON__WebHook_JANDI( t ), 500 );
		}
		//*///----------[ E ] - WebHookServer에서 사용하는 WebHook URL JSON을 생성한다;

		global.TtwLog.timeStamp( "-- [ E ] - member/public/sign_up::res():void----------" );
	});

	global.TtwLog.log( "- [ E ] - member/public/sign_up():void----------" );
});