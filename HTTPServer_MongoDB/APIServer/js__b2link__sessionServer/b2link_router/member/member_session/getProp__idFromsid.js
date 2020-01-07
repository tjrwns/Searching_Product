//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/member_session/getProp__idFromsid.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Session id로 member의 _id를 가져온다.
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
	http://localhost:49320/member_session/getProp__idFromsid
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_session/getProp__idFromsid():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//global.b2link.debug._check_mongodb_queryParameter( q );

	global.b2link_router.member.req__string( req, res, q, "member_session$getProp__idFromsid", q.sid );

	global.TtwLog.log( "- [ E ] - member/member_session/getProp__idFromsid():void----------" );
});