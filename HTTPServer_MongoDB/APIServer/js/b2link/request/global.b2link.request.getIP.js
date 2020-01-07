//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.getIP.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 인수 req 에서 remoteIP 를 가져온다.
 * @function
 * @param {http.ClientRequest} req
 * @return {String} RemoteIP
 */
global.b2link.request.getIP = function( req )
{
	//global.RayLog.timeStamp( "- [ S ] - " + "global.b2link.request.getIP():String----------" );

	var ip = "";
	if( req.connection && req.connection.remoteAddress )
	{
		ip = req.connection.remoteAddress;
	}
	else
	{
		ip = req.ip;
	}

	//global.RayLog.timeStamp( "- [ E ] - " + "global.b2link.request.getIP():String----------" );

	return ip;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;