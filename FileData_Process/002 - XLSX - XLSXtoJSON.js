require( "D:/GitHub_B2LiNK/Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "002 - XLSX - XLSXtoJSON";
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

//----------------------------------------------------------------------------------------------------;

var _ROOT_PATH_ = global.process.cwd();
var ARGV = global.process.argv;

var PATH_XLSX = ARGV[ 2 ].replace( /\\/gi, "/" ); global.console.log( "PATH_XLSX : " + PATH_XLSX );
var FILE_XLSX = PATH_XLSX.split("/").reverse()[0]; global.console.log( "FILE_XLSX : " + FILE_XLSX );
var NM_FILE_XLSX = FILE_XLSX.split(".")[0]; global.console.log( "FILE_XLSX : " + FILE_XLSX );

//----------------------------------------------------------------------------------------------------;

var workbook = global.REQUIRES.xlsx.readFile( _ROOT_PATH_ + '/' + FILE_XLSX );
var a_sheet = workbook.SheetNames;

//*/
a_sheet.forEach(function( sheet ){
	var worksheet = workbook.Sheets[ sheet ];
	var headers = {};
	var data = [];

	for( s in worksheet ){

		if(s[0] === '!') continue;
		var i = 0,iLen = s.length,tt = 0;
		for (;i<iLen;i++){
			if (!isNaN(s[i]))
			{
				tt = i;
				break;
			}
		};

		var col = s.substring(0,tt);
		var row = Number(s.substring(tt));
		var value = worksheet[s].v;

		//store header names
		if( row == 1 && value ) headers[col] = value;
		if(!data[row])
		{
			data[row] = {};
			var s,so
			for( s in headers ){
				so = headers[ s ];
				data[ row ][ so ] = ""
			}
		}
	}

	for( s in worksheet ){
		if(s[0] === '!') continue;
		var i = 0,iLen = s.length,tt = 0;
		for (;i<iLen;i++){
			if (!isNaN(s[i]))
			{
				tt = i;
				break;
			}
		};

		var col = s.substring(0,tt);
		var row = Number(s.substring(tt));
		var value = worksheet[s].v;

		if( row == 1 && value ) headers[col] = value;
		if(!data[row]) data[row]={};

		data[row][ headers[col] ] = value;
	}

	data.shift();
	data.shift();

	SUtilFsWriteStream.writeFile( _ROOT_PATH_ + "/" + NM_FILE_XLSX + "." + sheet + ".json",JSON.stringify(data,null,4))
	//SUtilFsWriteStream.writeFile( "brand_info.json",JSON.stringify( data )
});
/*/
var data = global.REQUIRES.xlsx.utils.sheet_to_json( workbook.Sheets[a_sheet[ 0 ]] )
console.log( JSON.stringify( data, null, 4) )
//*/
global.process.exit();
