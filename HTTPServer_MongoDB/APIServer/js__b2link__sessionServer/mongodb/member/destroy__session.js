//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/mongodb/member/destroy__session.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Collection} _col$member_session
 * @param {Object} oFind { _id : 0 }
 */
global.mongodb.member.destroy__session = function( _col$member_session, oFind )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.member.destroy__session():{Array}----------" );

	TtwLog.log( "Session 파괴" );
	_col$member_session.update(
		oFind
		, { $set : { d_ex : null, sid : null } }
		, { upsert : false }
	);

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.member.destroy__session():{Array}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;