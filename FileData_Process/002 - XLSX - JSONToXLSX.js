require( "D:/GitHub_B2LiNK/Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "002 - XLSX - JSONToXLSX";
if( console ) console.log( "[ S ] - " + fileNm + ".js" + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};
global.REQUIRES.os = global.REQUIRES.os || require( "os" );
global.REQUIRES.fs = global.REQUIRES.fs || require( "fs" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "D:/GitHub_B2LiNK/Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
require( "D:/GitHub_B2LiNK/Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

SUtilMongoDB.mongodb = SUtilMongoDBMongoClient.mongodb = global.REQUIRES.mongodb;

require( "D:/GitHub_B2LiNK/Development-NodeJS_Modules/js/mongodb/__define/000_define_global.mongodb.js" );

require( "D:/GitHub_B2LiNK/Development-NodeJS_Modules/global.REQUIRES.xlsx.js" );

require( "./000 - Util.date.js" );

//----------------------------------------------------------------------------------------------------;

var _ROOT_PATH_ = global.process.cwd();
var ARGV = global.process.argv;

var PATH_JSON = ARGV[ 2 ].replace( /\\/gi, "/" ); global.console.log( "PATH_JSON : " + PATH_JSON );
var FILE_JSON = PATH_JSON.split("/").reverse()[0]; global.console.log( "FILE_JSON : " + FILE_JSON );
var NM_FILE_JSON = FILE_JSON.split(".")[0]; global.console.log( "NM_FILE_JSON : " + NM_FILE_JSON );

//----------------------------------------------------------------------------------------------------;

/*
 * 오브젝트를 flat한 형태로 변환하는 함수;
 * @function
 * @param {Object} d
<code>
{
	a : {
		b : {
			c : {
				d : 1
			}
			, e : 1
		}
	}
}
</code>
 * @return {Object} r
<code>
{
	  a.b.c.d: 1
	, a.b.e: 1
}
</code>
 */
var flattenObject = function( d ){

	var r = {};

	var s,so;
	for( s in d) {
		if( !d.hasOwnProperty( s ) ) continue;

		so = d[ s ];
		if( typeof so == 'object' )
		{
			var flatObject = flattenObject( so );
			var x,xo;
			for( x in flatObject ){
				if( !flatObject.hasOwnProperty( x ) ) continue;
				r[ s + '.' + x ] = flatObject[ x ];
			}
		}
		else
		{
			r[ s ] = d[ s ];
		}
	}
	return r;
};

//----------------------------------------------------------------------------------------------------;


var data = JSON.parse( SUtilFsReadStream.getFile( PATH_JSON ).toString() );
var _data = [];
(function(){

	var i = 0,iLen = data.length,io;
	for(;i<iLen;++i){
		io = data[ i ];

		var _to = flattenObject( io );
		_data.push( _to );

	}
})()


var ws = global.REQUIRES.xlsx.utils.json_to_sheet( _data);
var wb = global.REQUIRES.xlsx.utils.book_new();
global.REQUIRES.xlsx.utils.book_append_sheet(wb, ws, NM_FILE_JSON);
//*/
global.REQUIRES.xlsx.writeFile(wb, _ROOT_PATH_ + "/" + NM_FILE_JSON + "--" + global.SYS0037.QUERY_AUTO.UTIL.DATE.dateToFormat["YYYYMMDD"]() + ".xlsx" );
/*/
//*/
global.process.exit();
