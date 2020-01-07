//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/mongodb/member/add__session_log.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Collection} _col$member_session_log
 * @param {String} mid
 * @param {String} sid
 * @param {Object} d_ex date expire
 * @param {Object} d_l_si date list sign in
 */
global.mongodb.member.add__session_log = function( _col$member_session_log, mid, sid, d_ex, d_l_si )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.member.add__session_log():{Array}----------" );

	TtwLog.log( "Session log 추가" );

	var _id = _col$member_session_log.find({}, { _id : 1 }).sort({ $natural : -1 }).limit( 1 ).toArray()[ 0 ]._id + 1;

	_col$member_session_log.insert({
		_id : NumberInt( _id )
		, mid : mid
		, sid : sid
		, d_ex : d_ex
		, date : d_l_si
	});

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.member.add__session_log():{Array}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;