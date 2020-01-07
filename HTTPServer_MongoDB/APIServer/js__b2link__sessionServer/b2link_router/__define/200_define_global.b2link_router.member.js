//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/__define/200_define_global.b2link_router.member.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_router.member;

global.b2link_router.member = global.b2link_router.member || {};

//----------------------------------------------------------------------------------------------------;

/**
 * global.b2link_router.member.PATH 초기화 및 Getter 생성
 * @function
 */
(function(){
	var _s0 = "./js__b2link__sessionServer/b2link_router/member/";
	var _a0 = [
		"admin"
		, "common"
		, "public"
		, "session"
		, "update"

		//, "member_basic"
		, "member_public"
		, "member_session"
		//, "member_session_log"
	];

	var _PATH = {};

	var io;
	var i=0, iLen=_a0.length;
	for( ; i<iLen; ++i )
	{
		io = _a0[ i ];
		_PATH[ io ] = _s0 + io + "/";
	}

	var _ = global.b2link_router.member.PATH = {};
		_.__defineGetter__( "admin", function(){ return _PATH.admin; });
		_.__defineGetter__( "common", function(){ return _PATH.common; });
		_.__defineGetter__( "public", function(){ return _PATH.public; });
		_.__defineGetter__( "session", function(){ return _PATH.session; });
		_.__defineGetter__( "update", function(){ return _PATH.update; });

		//_.__defineGetter__( "member_basic", function(){ return _PATH.member_basic; });
		_.__defineGetter__( "member_public", function(){ return _PATH.member_public; });
		_.__defineGetter__( "member_session", function(){ return _PATH.member_session; });
		//_.__defineGetter__( "member_session_log", function(){ return _PATH.member_session_log; });
})();

//----------------------------------------------------------------------------------------------------;

/**
 * member 정보 동기화
 * @function
 * @param {Object} q Query
 */
global.b2link_router.member._mongodbSync = function( q )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link_router.member._mongodbSync():void----------" );

	if( global.mongodb_sync )
	{
		if( !global.mongodb_sync.direct )
		{
			global.TtwLog.error( "global.mongodb_sync.direct 패키지가 없음 - DB 동기화 하지 않음" );
			return;
		}

		try{ global.mongodb_sync.direct.sync__DB__member( q.q ); }
		catch( e )
		{
			global.TtwLog.error( "이 메세지가 보이면 ./js/mongodb_sync/ 폴더를 삭제하시고 ./bin_***/_Commit 하기 전 실행 을 구동." );
			global.TtwLog.error( "SessionServer의 기능입니다. 추후 SessionServer로 연동하면 발생 안하는 에러" );
		}
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link_router.member._mongodbSync():void----------" );
};

//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * 실행하기 위한 Procedure 및 Parameters 를 문자열로 보냄( ex: 'country$getAllList();' )
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fn MongoDB Procedure를 구동 시키기 위한 문자열( 함수명과 파라메터까지 문자열로 전송 )
 */
global.b2link_router.member.req__fn = function( req, res, q, fn )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__fn():void----------" );

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "member", fn );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__fn():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * 실행하기 위한 Procedure 및 Parameters 를 문자열로 보냄( ex: 'country$getAllList();' )
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 Complate Callback로 전달한다.
 * Complete Callback에서는 ClientReponse에 send()를 구동시켜 필수로 통신을 종료 하여야한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fn MongoDB Procedure를 구동 시키기 위한 문자열( 함수명과 파라메터까지 문자열로 전송 )
 * @param {Function} cb_complete 함수의 형태는 무조건 ( req, res, error, result ) 형태로 작성된다.
 *	DB로부터 전달 받은 데이터를 가지고 ClientResponse의 send()를 통해 Client Browser로 전달후 통신을 종료 시켜야한다.
 *	function( req, res, error, result ){ global.b2link.response.send_200_False( req, res ); or global.b2link.response.send_200_False__ErrorLog( req, res, q, error ); }
 */
global.b2link_router.member.req__fn__cb = function( req, res, q, fn, cb_complete )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__fn__cb():void----------" );

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "member", fn, cb_complete );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__fn__cb():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * 실행하기 위한 Procedure 이름만을 문자열로 보냄( ex: 'country$getAllList' ) - Parameter가 없는 Procedure를 호출하기 위한 용도
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm 실행하기 위한 Procedure 이름만을 문자열로 보냄( ex: 'country$getAllList' ) - Parameter가 없는 Procedure를 호출하기 위한 용도
 */
global.b2link_router.member.req__fNm = function( req, res, q, fNm )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__fNm():void----------" );

	global.b2link_router.member.req__fn( req, res, q, fNm + "()" );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__fNm():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * 실행하기 위한 Procedure 이름만을 문자열로 보냄( ex: 'country$getAllList' ) - Parameter가 없는 Procedure를 호출하기 위한 용도
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm 실행하기 위한 Procedure 이름만을 문자열로 보냄( ex: 'country$getAllList' ) - Parameter가 없는 Procedure를 호출하기 위한 용도
 * @param {Function} cb_complete 함수의 형태는 무조건 ( req, res, error, result ) 형태로 작성된다.
 *	DB로부터 전달 받은 데이터를 가지고 ClientResponse의 send()를 통해 Client Browser로 전달후 통신을 종료 시켜야한다.
 *	function( req, res, error, result ){ global.b2link.response.send_200_False( req, res ); or global.b2link.response.send_200_False__ErrorLog( req, res, q, error ); }
 */
global.b2link_router.member.req__fNm__cb = function( req, res, q, fNm, cb_complete )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__fNm__cb():void----------" );

	global.b2link_router.member.req__fn__cb( req, res, q, fNm + "()", cb_complete );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__fNm__cb():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 * Object로 Procedure에 필요한 Paramers를 전달하면 JSON으로 변경하여 DB로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm fNm 실행하기 위한 Procedure 이름을 문자열로 보냄( ex: 'country$getAllList' )
 * @param {Object} d Procedure에 들어가게 될 Parameters Object. JSON으로 변경되어 DB로 전달된다.
 */
global.b2link_router.member.req__json = function( req, res, q, fNm, d )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__json():void----------" );

	 if( !global._$TATIC_CONST_DATABASE.VALIDATOR.DOC_props({ nm_db : "member", nm_col : fNm.split( "$" )[ 0 ], doc : d }) )
	{
		global.b2link.response.send_200_False__ErrorLog( req, res, q, "Schama 기반 Validation Error. Schema가 에러일수도 있고, b2link_validation의 소스들이 에러일 수 있음." );
		global.TtwLog.error( "Request Parameter이 Schema와 일치하지 않음" );
		global.TtwLog.error( "또는 Schema 정의가 되어있지 않음" );
		global.TtwLog.error( "Schema 기반의 Validation이 필요없는 서비스인 경우 global.b2link_router.partner.req__json_NValid를 사용함" );
		return;
	}

	global.b2link_router.member.req__fn( req, res, q, fNm + "(" + JSON.stringify( d ) + ")" );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__json():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 * Object로 Procedure에 필요한 Paramers를 전달하면 JSON으로 변경하여 DB로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm fNm 실행하기 위한 Procedure 이름을 문자열로 보냄( ex: 'country$getAllList' )
 * @param {Object} d Procedure에 들어가게 될 Parameters Object. JSON으로 변경되어 DB로 전달된다.
 * @param {Function} cb_complete 함수의 형태는 무조건 ( req, res, error, result ) 형태로 작성된다.
 *	DB로부터 전달 받은 데이터를 가지고 ClientResponse의 send()를 통해 Client Browser로 전달후 통신을 종료 시켜야한다.
 *	function( req, res, error, result ){ global.b2link.response.send_200_False( req, res ); or global.b2link.response.send_200_False__ErrorLog( req, res, q, error ); }
 */
global.b2link_router.member.req__json__cb = function( req, res, q, fNm, d, cb_complete )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__json__cb():void----------" );

	 if( !global._$TATIC_CONST_DATABASE.VALIDATOR.DOC_props({ nm_db : "member", nm_col : fNm.split( "$" )[ 0 ], doc : d }) )
	{
		global.b2link.response.send_200_False__ErrorLog( req, res, q, "Schama 기반 Validation Error. Schema가 에러일수도 있고, b2link_validation의 소스들이 에러일 수 있음." );
		global.TtwLog.error( "Request Parameter이 Schema와 일치하지 않음" );
		global.TtwLog.error( "또는 Schema 정의가 되어있지 않음" );
		global.TtwLog.error( "Schema 기반의 Validation이 필요없는 서비스인 경우 global.b2link_router.partner.req__json_NValid를 사용함" );
		return;
	}

	global.b2link_router.member.req__fn__cb( req, res, q, fNm + "(" + JSON.stringify( d ) + ")", cb_complete );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__json__cb():void----------" );
};

/**
 * req__json에 포함된 Schema기반 Validation 테스트 코드때문에 정상 작동이 되지 않을 시 임시적으로 사용하기 위한 함수.
 * 공통 Validation이 정상적으로 구동되게 되는 시점에 사라지게 될 함수.
 *
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 * Object로 Procedure에 필요한 Paramers를 전달하면 JSON으로 변경하여 DB로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm fNm 실행하기 위한 Procedure 이름을 문자열로 보냄( ex: 'country$getAllList' )
 * @param {Object} d Procedure에 들어가게 될 Parameters Object. JSON으로 변경되어 DB로 전달된다.
 */
global.b2link_router.member.req__json_NValid = function( req, res, q, fNm, d )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__json_NValid():void----------" );

	global.b2link_router.member.req__fn( req, res, q, fNm + "(" + JSON.stringify( d ) + ")" );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__json_NValid():void----------" );
};

/**
 * req__json__cb에 포함된 Schema기반 Validation 테스트 코드때문에 정상 작동이 되지 않을 시 임시적으로 사용하기 위한 함수.
 * 공통 Validation이 정상적으로 구동되게 되는 시점에 사라지게 될 함수.
 *
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 * Object로 Procedure에 필요한 Paramers를 전달하면 JSON으로 변경하여 DB로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm fNm 실행하기 위한 Procedure 이름을 문자열로 보냄( ex: 'country$getAllList' )
 * @param {Object} d Procedure에 들어가게 될 Parameters Object. JSON으로 변경되어 DB로 전달된다.
 * @param {Function} cb_complete 함수의 형태는 무조건 ( req, res, error, result ) 형태로 작성된다.
 *	DB로부터 전달 받은 데이터를 가지고 ClientResponse의 send()를 통해 Client Browser로 전달후 통신을 종료 시켜야한다.
 *	function( req, res, error, result ){ global.b2link.response.send_200_False( req, res ); or global.b2link.response.send_200_False__ErrorLog( req, res, q, error ); }
 */
global.b2link_router.member.req__json_NValid__cb = function( req, res, q, fNm, d, cb_complete )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__json_NValid__cb():void----------" );

	global.b2link_router.member.req__fn__cb( req, res, q, fNm + "(" + JSON.stringify( d ) + ")", cb_complete );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__json_NValid__cb():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 * 문자열(string) Parameter만 존재하는 경우 사용하기 위한 함수
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm fNm 실행하기 위한 Procedure 이름을 문자열로 보냄( ex: 'country$getAllList' )
 * @param {String} d 문자열로 된 Procedure의 Parameter
 */
global.b2link_router.member.req__string = function( req, res, q, fNm, d )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__string():void----------" );

	global.b2link_router.member.req__fn( req, res, q, fNm + '("' + d + '")' );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__string():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 * 문자열(string) Parameter만 존재하는 경우 사용하기 위한 함수
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm fNm 실행하기 위한 Procedure 이름을 문자열로 보냄( ex: 'country$getAllList' )
 * @param {String} d 문자열로 된 Procedure의 Parameter
 * @param {Function} cb_complete 함수의 형태는 무조건 ( req, res, error, result ) 형태로 작성된다.
 *	DB로부터 전달 받은 데이터를 가지고 ClientResponse의 send()를 통해 Client Browser로 전달후 통신을 종료 시켜야한다.
 *	function( req, res, error, result ){ global.b2link.response.send_200_False( req, res ); or global.b2link.response.send_200_False__ErrorLog( req, res, q, error ); }
 */
global.b2link_router.member.req__string__cb = function( req, res, q, fNm, d, cb_complete )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__string__cb():void----------" );

	global.b2link_router.member.req__fn( req, res, q, fNm + '("' + d + '")', cb_complete );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__string__cb():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 * 문자열(string) 이외의 기본 자료타입 Parameter만 존재하는 경우 사용하기 위한 함수
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm fNm 실행하기 위한 Procedure 이름을 문자열로 보냄( ex: 'country$getAllList' )
 * @param {*|!String} d 문자열(string) 이외의 기본 자료타입 Parameter( boolean, int, uint, number, undefine, null, ... ) / array, object, string는 사용 불가
 */
global.b2link_router.member.req__value = function( req, res, q, fNm, d )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__value():void----------" );

	global.b2link_router.member.req__fn( req, res, q, fNm + "(" + d + ")" );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__value():void----------" );
};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * $는 Procedure 생성 약속 - CollectionName '$' ProcedureName
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 * 문자열(string) 이외의 기본 자료타입 Parameter만 존재하는 경우 사용하기 위한 함수
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q Session 정보가 들어있음. CheckSession 후엔 'q' 객체를 재사용하여 MongoDB Request를 위한 Object를 내부적으로 만들어서 다시한번 Query Request를 함
 * @param {String} fNm fNm 실행하기 위한 Procedure 이름을 문자열로 보냄( ex: 'country$getAllList' )
 * @param {*} d 문자열(string) 이외의 기본 자료타입 Parameter( boolean, int, uint, number, undefine, null, ... ) / array, object, string는 사용 불가
 * @param {Function} cb_complete 함수의 형태는 무조건 ( req, res, error, result ) 형태로 작성된다.
 *	DB로부터 전달 받은 데이터를 가지고 ClientResponse의 send()를 통해 Client Browser로 전달후 통신을 종료 시켜야한다.
 *	function( req, res, error, result ){ global.b2link.response.send_200_False( req, res ); or global.b2link.response.send_200_False__ErrorLog( req, res, q, error ); }
 */
global.b2link_router.member.req__value__cb = function( req, res, q, fNm, d, cb_complete )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__value__cb():void----------" );

	global.b2link_router.member.req__fn( req, res, q, fNm + "(" + d + ")", cb_complete );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__value__cb():void----------" );
};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_router.member;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;