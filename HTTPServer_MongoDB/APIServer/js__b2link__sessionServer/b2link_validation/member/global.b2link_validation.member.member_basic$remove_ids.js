//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_validation/member/global.b2link_validation.member.member_basic$remove_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.member.member_basic$remove_ids = function( d )
{
	global.TtwLog.log( "---- [ S ] - global.b2link_validation.member.member_basic$remove_ids():void----------" );

	try
	{
		var a = d.ids;
		var i=0, iLen;
		for( ; i<iLen; ++i ) a[ i ] = parseInt( a[ i ] );
	}
	catch( e ){ global.TtwLog.error( "Error : " + e ); throw e; }

	global.TtwLog.log( "---- [ E ] - global.b2link_validation.member.member_basic$remove_ids():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;