//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/mongodb/member/update__date__lastSignIn.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Collection} _col$member_date
 * @param {Object} oFind { _id : 0 }
 * @param {Date} date
 * @return {Object} d_l_si date_list_signin
 */
global.mongodb.member.update__date__lastSignIn = function( _col$member_date, oFind, date )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.member.update__date__lastSignIn():{Object}----------" );

	TtwLog.log( "Sign In 시간 업데이트" );

	var d = date ? date : new Date();
	var d_l_si = {
		y : NumberInt( d.getFullYear() )
		, m : NumberInt( d.getMonth() + 1 )
		, d : NumberInt( d.getDate() )
		, ho : NumberInt( d.getHours() )
		, mi : NumberInt( d.getMinutes() )
		, se : NumberInt( d.getSeconds() )//, mil : NumberLong( d.getMilliseconds() )
	};

	_col$member_date.update( oFind, { $set : { d_l_si : d_l_si } }, { upsert : false });

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.member.update__date__lastSignIn():{Object}----------return d_l_si;" );
	return d_l_si;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;