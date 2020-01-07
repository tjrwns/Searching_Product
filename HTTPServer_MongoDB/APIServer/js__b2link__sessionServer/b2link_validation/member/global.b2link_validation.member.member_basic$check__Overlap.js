//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_validation/member/global.b2link_validation.member.member_basic$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.member.member_basic$check__Overlap = function( t, d )
{
	global.cparkLog.log( "---- [ S ] - global.b2link_validation.member.member_basic$check__Overlap():void----------" );

	//console.logObjectInformation( d, "d" );

	if(d.email) t.email = d.email;

	global.cparkLog.log( "---- [ E ] - global.b2link_validation.member.member_basic$check__Overlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;