//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/mongodb/member/validate__add__member_public.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * member.member_public에 추가 할 데이터를 검증하고 기본 값을 설정한다.
 * @function
 * @param {Object} d
 * <code>
	{
		phone_cell : {}
		, phone_tel : {}

		, messenger : {}

		, nm : {}
		, nm_cn : {}
		, nm_kr : {}
		, nm_us : {}
	}
 * </code>
 */
global.mongodb.member.validate__add__member_public = function( d )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.member.validate__add__member_public():void----------" );

	/*/
	var phone_cell_info = {};
	if( d.hasOwnProperty( "phone_cell" ) &&  d.phone_cell.hasOwnProperty( "a" ) )
	{
		phone_cell_info = { f : d.phone_cell.f, c : d.phone_cell.c, a : d.phone_cell.a, n0 : d.phone_cell.n0, n1 : d.phone_cell.n1, n2 : d.phone_cell.n2 };
	}

	var phone_tel_info = {};
	if( d.hasOwnProperty( "phone_tel" ) && d.phone_tel.hasOwnProperty( "f" ) )
	{
		phone_tel_info = { f : d.phone_tel.f, c : d.phone_tel.c, a : d.phone_tel.a, n0 : d.phone_tel.n0, n1 : d.phone_tel.n1, n2 : d.phone_tel.n2 };
	}

	var message_info = {};
	if( d.hasOwnProperty( "messenger" ) && d.messenger.hasOwnProperty( "cd$messenger" ) && d.messenger.hasOwnProperty( "id" ) )
	{
		message_info = { cd$messenger : d.messenger.cd$messenger, id : d.messenger.id };
	}

	var nm_info = {};
	if( d.hasOwnProperty( "nm" ) && d.nm.hasOwnProperty( "a" ) )
	{
		nm_info = { a : d.nm.a , f : d.nm.f , l : d.nm.l };
	}

	var nm_cn_info = {};
	if( d.hasOwnProperty( "nm_cn" ) && d.nm_cn.hasOwnProperty( "a" ) )
	{
		nm_cn_info = { a : d.nm_cn.a , f : d.nm_cn.f , l : d.nm_cn.l };
	}

	var nm_kr_info = {};
	if( d.hasOwnProperty( "nm_kr" ) && d.nm_kr.hasOwnProperty( "a" ) )
	{
		nm_kr_info = { a : d.nm_kr.a , f : d.nm_kr.f , l : d.nm_kr.l };
	}

	var nm_us_info = {};
	if( d.hasOwnProperty( "nm_us" ) && d.nm_us.hasOwnProperty( "a" ) )
	{
		nm_us_info = { a : d.nm_us.a , f : d.nm_us.f , l : d.nm_us.l };
	}
	/*/
	d.phone_cell = d.phone_cell || {};
	d.phone_tel = d.phone_tel || {};

	d.messenger = d.messenger || {};
	d.nm = d.nm || {};
	d.nm_cn = d.nm_cn || {};
	d.nm_kr = d.nm_kr || {};
	d.nm_us = d.nm_us || {};
	//*/

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.member.validate__add__member_public():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;