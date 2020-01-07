//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/member_public/getProp_NameFromsid.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		sid : ""
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
	http://localhost:port/member/member_public/getProp_NameFromsid
	http://localhost:port/member/member_public/getProp_NameFromsid?
 * </code>
 */
(function( req, res ){
	//global.TtwLog.log( "- [ S ] - member/member_public/getProp_NameFromsid():void----------" );

	global.b2link.request.get__member_session$checkSessionAndReqNameFromsid( req, res, global.b2link.url.getQueryFromURL( req.url ) );

	//global.TtwLog.log( "- [ E ] - member/member_public/getProp_NameFromsid():void----------" );
});