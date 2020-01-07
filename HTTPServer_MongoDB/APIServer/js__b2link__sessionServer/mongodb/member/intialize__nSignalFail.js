//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/mongodb/member/intialize__nSignalFail.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Collection} _col$member_basic
 * @param {Object} oFind { _id : 0 }
 * @return {Object}
 * <code>
 	{
	}
 * </code>
 */
global.mongodb.member.intialize__nSignalFail = function( _col$member_basic, oFind )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.member.intialize__nSignalFail():{Object}----------" );

	RayLog.log( "nSignFailed 초기화" );

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.member.intialize__nSignalFail():{Object}----------" );
	return _col$member_basic.update( oFind, { $set : { nSignInFail : NumberInt( 0 ) } }, { upsert : false }  );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;