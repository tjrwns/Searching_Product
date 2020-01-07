//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/window.b2link.request.getIp__SYS0310.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 인수 req 에서 remoteIP 를 가져온다.
 * @function
 * @param {http.ClientRequest} req
 * @return {String} RemoteIP
 */
window.b2link.request.getIp__SYS0310 = function( req )
{
	window.RayLog.timeStamp( "- [ S ] - " + "window.b2link.request.getIp__SYS0310():String----------" );

	var ip = "";
	if( req.connection && req.connection.remoteAddress )
	{
		ip = req.connection.remoteAddress;
	}
	else
	{
		ip = req.ip;
	}

	window.RayLog.timeStamp( "- [ E ] - " + "window.b2link.request.getIp__SYS0310():String----------" );

	return ip;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;