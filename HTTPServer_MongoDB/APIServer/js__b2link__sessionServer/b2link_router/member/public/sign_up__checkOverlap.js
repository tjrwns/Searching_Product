//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/public/sign_up__checkOverlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * SIGN UP 요청전에 중복된 회원 정보가 있는지 체크
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.public + "sign_up__checkOverlap.dbjs" );
var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.public + "sign_up__checkOverlap.dbjs" );

/**
 * @property {Object}
 */
var __referenceObj = { server : null };

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
	http://localhost:49320/member/public/sign_up__checkOverlap
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/public/sign_up__checkOverlap():void----------" );

	var t = __referenceObj.server = global.server;//HTTP Server;

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		q.db = "member";

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	global.b2link.debug._check_mongodb_queryParameter( q );

	/*/
	q.q = "member_basic$sign_up__checkOverlap(" + JSON.stringify( q ) + ")";
	/*/
	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - SIGN UP 요청전에 중복된 회원 정보가 있는지 체크
	//var _query = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.public + "sign_up__checkOverlap.dbjs" );
	//var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.public + "sign_up__checkOverlap.dbjs" );
	q.q = _query.replace( "<!=data=!>", q.data );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.public + "sign_up__checkOverlap.query", q.q );
	//*/

	//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
	t.req_DB( req, res, q, function( error, result ){
		global.TtwLog.timeStamp( "-- [ S ] - member/public/sign_up__checkOverlap::res():void----------" );

		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			global.TtwLog.timeStamp( "-- [ E ] - member/public/sign_up__checkOverlap::res():void----------if( error ) return;" );
			return;
		}

		//MongoDB Query 실행 후 결과를 Client에 전송하기;
		//if( 0 == result ) global.b2link.response.send_301_DestroySession( req, res );
		if( 0 == result ) global.b2link.response.send_200_JSON( req, res, result );
		else if( 1 == result ) global.b2link.response.send_200_JSON( req, res, result );

		global.TtwLog.timeStamp( "-- [ E ] - member/public/sign_up__checkOverlap::res():void----------" );
	});

	global.TtwLog.log( "- [ E ] - member/public/sign_up__checkOverlap():void----------" );
});