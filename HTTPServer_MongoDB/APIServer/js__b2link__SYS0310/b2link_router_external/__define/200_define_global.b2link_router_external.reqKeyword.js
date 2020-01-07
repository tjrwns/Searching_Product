//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0310/b2link_router_external/__define/200_define_global.b2link_router_external.reqKeyword.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_router_external.reqKeyword;

global.b2link_router_external.reqKeyword = global.b2link_router_external.reqKeyword || {};

/**
 * global.b2link_router_external.reqKeyword.PATH 초기화 및 Getter 생성
 * @function
 */
(function(){
	var _s0 = "./js__b2link__SYS0310/b2link_router_external/reqKeyword/";
	var _a0 = [
		"crud"
	];

	var _PATH = {};

	var io;
	var i=0, iLen=_a0.length;
	for( ; i<iLen; ++i )
	{
		io = _a0[ i ];
		_PATH[ io ] = _s0 + io + "/";
	}

	global.b2link_router_external.reqKeyword.PATH = {};
	_a0.forEach( function( path ){
		global.b2link_router_external.reqKeyword.PATH.__defineGetter__( path, function(){ return _PATH[ path ]; });
	});
})();

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_router_external.reqKeyword;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;