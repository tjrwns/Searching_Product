require( "D:/GitHub_B2LiNK/Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "000 - make - brandInfo__dbjs";
if( console ) console.log( "[ S ] - " + fileNm + ".js" + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};
global.REQUIRES.os = global.REQUIRES.os || require( "os" );
global.REQUIRES.fs = global.REQUIRES.fs || require( "fs" );
global.REQUIRES.path = global.REQUIRES.path || require( "path" );

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
var _WRITE_FILE_PATH = "D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/DataBase_Query/";
var ARGV = global.process.argv;

var ARGV02 = ARGV[ 2 ].replace( /\\/gi, "/" ); global.console.log( "ARGV02 : " + ARGV02 );

var FILE_PATH_INFO = global.REQUIRES.path.parse( ARGV02 );

var FILE = FILE_PATH_INFO.base; global.console.log( "FILE : " + FILE );
var NM_FILE = FILE_PATH_INFO.name; global.console.log( "NM_FILE : " + NM_FILE );

var TARGET_DATE = global.SYS0037.QUERY_AUTO.UTIL.DATE.dateToFormat["YYYYMMDD"]();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
var txt = SUtilFsReadStream.getFile( ARGV02 ).toString();
var o_data = JSON.parse( txt );

var r = [];
var i = 0,iLen = o_data.length,io;
for(;i<iLen;++i){
	io = o_data[ i ];
	if( io.nm_us == "" ) continue;
	if( io.nm$COUNTRY == "" || io.nm$COUNTRY == "" ) continue;

	r.push( io )
}

var _TDBJS = SUtilFsReadStream.getFile( _ROOT_PATH_ + "/001 - insert - brandInfo.tdbjs" ).toString();
var TBDJS = _TDBJS.replace("<!=data=!>", JSON.stringify(r,null,4) ).replace("<!=date=!>", TARGET_DATE );

SUtilFsWriteStream.writeFile( _WRITE_FILE_PATH + "CATEGORY.BRAND--import--" + TARGET_DATE +".dbjs", TBDJS )
//SUtilFsWriteStream.writeFile( "brand_info.json",JSON.stringify( r )

global.process.exit();
