//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/mongodb/member/update__session__signin.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Collection} _col$member_session
 * @param {Object} oFind { _id : 0 }
 * @param {Date} d_ex date_expired
 * @param {String} sid session id
 */
global.mongodb.member.update__session__signin = function( _col$member_session, oFind, d_ex, sid )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.member.update__session__signin():{Object}----------" );

	TtwLog.log( "새로운 Session ID 생성" );

	_col$member_session.update( oFind, { $set : { d_ex : d_ex, sid : sid } }, { upsert : false } );

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.member.update__session__signin():{Object}----------return d_l_si;" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;