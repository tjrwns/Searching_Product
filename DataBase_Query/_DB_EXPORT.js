//-----------------------------------------------------------------------------------------------------------------------------;

// DEFINE;

//-----------------------------------------------------------------------------------------------------------------------------;

//var _TARGET_DB_ = "Kaola_2018";
//var _TARGET_SITE_ = "KAOLA"


//222.239.10.123:55320 --> 테스트서버;
var _TARGET_DB_PORT_ = {
	  SELF           : { "HOST" : "127.0.0.1", "PORT" : 55522, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_DEV  : { "HOST" : "192.168.0.230", "PORT" : 58781, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
};

var _COMMAND_TEMPLATE_ = 'D:\\GitHub_B2LiNK\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoexport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB=!>" --collection "<!=COL=!>" --out "D:\\GitHub_B2LiNK\\B2LiNK-OnSight-Dev\\HTTPServer_MongoDB\\APIServer\\temp\\<!=FILE_NAME=!>.json" --jsonArray'
//D:\GitHub_B2LiNK\B2LiNK-OnSight-Dev\HTTPServer_MongoDB\APIServer\temp\
//-----------------------------------------------------------------------------------------------------------------------------;

// FUNCTION;

//-----------------------------------------------------------------------------------------------------------------------------;

var FN = function( _TARGET_DB_, _TARGET_SITE_ ){

	var db0 = db.getSiblingDB( _TARGET_DB_ );
	var cols = db0.getCollectionNames();

	var i = 0,iLen = cols.length,io;
    var cnt = 0;
	for(;i<iLen;++i){
		var _t = _COMMAND_TEMPLATE_;
		var r = _t.replace("<!=COL=!>",cols[ i ])
			.replace("<!=FILE_NAME=!>", _TARGET_DB_ + "." + cols[ i ])
			.replace("<!=PORT=!>", _TARGET_DB_PORT_[ _TARGET_SITE_ ].PORT )
			.replace("<!=HOST=!>", _TARGET_DB_PORT_[ _TARGET_SITE_ ].HOST )
			.replace("<!=DB=!>", _TARGET_DB_ );


		print( r );
		if( cnt == 20 )
		{
			print( "\n" );
			cnt = 0
		}
		else
		{
			++cnt;
		}
	}

};

//-----------------------------------------------------------------------------------------------------------------------------;

// LOGIC;

//-----------------------------------------------------------------------------------------------------------------------------;

FN("_CATEGORY","ONSIGHT_DEV");
//FN("_CATEGORY--통계","SELF");