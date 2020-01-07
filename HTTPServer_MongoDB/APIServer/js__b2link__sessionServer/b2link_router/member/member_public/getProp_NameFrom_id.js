//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/member_public/getProp_NameFrom_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		_id : {uint}
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
	http://localhost:port/member/member_public/getProp_NameFrom_id
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_public/getProp_NameFrom_id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	global.b2link_router.member.req__fn( req, res, q, "member_public$getProp_NameFrom_id(" + q._id + ")" );

	global.TtwLog.log( "- [ E ] - member/member_public/getProp_NameFrom_id():void----------" );
});