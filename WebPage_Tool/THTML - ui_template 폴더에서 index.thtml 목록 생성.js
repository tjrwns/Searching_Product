(function(){var _CWD_=global.process.cwd()+"/";var s0="Development-NodeJS_Modules/Common-ConsoleBuild-000.js";try{require( _CWD_+s0 );}catch(er){}try{require( _CWD_+"../"+s0 );}catch(er){}try{require( _CWD_+"../../"+s0 );}catch(er){}try{require( _CWD_+"../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../../"+s0 );}catch(er){}})();

//----------------------------------------------------------------------------------------------------;

var PATH000 = "D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/";

//----------------------------------------------------------------------------------------------------;

var FNS = {
	getHTMLIDFromPath : function( path ){
		var HTMLElementID = "ui/" + path.replace( PATH000, "" ).replace( ".thtml", "" );
		return HTMLElementID;
	}
};

//----------------------------------------------------------------------------------------------------;

//전체 목록;
var R_A = [];

//규약 틀린 목록;
var R_N = [];

//규약 맞는 목록;
var R_Y = [];

//----------------------------------------------------------------------------------------------------;

var FN_CHECK__FILE = function( path ){
	var a = SUtilFsReadStream.getList_File_Extension( path, ".thtml" );
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ 0 ];
		if( io == "index.thtml" )
		{
			var htmlFilePath = path + io;

			//전체 목록;
			R_A.push( htmlFilePath );

			var fStr = SUtilFsReadStream.getFile( htmlFilePath ).toString();
			var HTMLElementID = FNS.getHTMLIDFromPath( htmlFilePath );
				global.console.log( "HTMLElementID : " + HTMLElementID );

			if( -1 != fStr.indexOf( HTMLElementID ) )
			{
				global.console.log( "HTMLElementID : " + HTMLElementID + " - Y" );
				//규약 맞는 목록;
				R_Y.push( htmlFilePath );
			}
			else
			{
				global.console.log( "HTMLElementID : " + HTMLElementID + " - N" );

				//규약 틀린 목록;
				R_N.push( htmlFilePath );
			}
		}
	}
};
FN_CHECK__FILE.TEMPLATE = `<div id="{{id}}">
{{nm}}
</div>`;

var FN_CHECK__FOLDER = function( path ){

	FN_CHECK__FILE( path );

	var a = SUtilFsReadStream.getList_Directory( path );
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];

		var path0 = path + io + "/";
			global.console.log( path0 );

		FN_CHECK__FOLDER( path0 );
		//R_A.push( "" );
		//R_N.push( "" );
		//R_Y.push( "" );
	}
};

//----------------------------------------------------------------------------------------------------;

FN_CHECK__FOLDER( PATH000 );

//----------------------------------------------------------------------------------------------------;

var PATH000 = "D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage_Tool/THTML - ui_template 폴더에서 index.thtml 목록 생성";

SUtilFsWriteStream.writeFile_JSON_Tab1_UTF8( PATH000 + "-----R_A.result", R_A );
SUtilFsWriteStream.writeFile_JSON_Tab1_UTF8( PATH000 + "-----R_N.result", R_N );
SUtilFsWriteStream.writeFile_JSON_Tab1_UTF8( PATH000 + "-----R_Y.result", R_Y );

global.process.exit();