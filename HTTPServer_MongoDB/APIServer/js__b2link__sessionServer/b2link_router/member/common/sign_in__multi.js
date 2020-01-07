//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/common/sign_in__multi.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * SIGN IN 전에 Session 체크 하고 문제있으면 세션 파괴하기
 * @property {String}
 */
//var _query__expire_session = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.common + "sign_in__multi__expired_mid.dbjs" );
var _query__expire_session = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.common + "sign_in__multi__expired_mid.dbjs" );

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * SIGN IN
 * @property {String}
 */
//var _query__sign_in = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.common + "sign_in__multi.dbjs" );
var _query__sign_in = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.common + "sign_in__multi.dbjs" );

/**
 * @property {Object}
 */
var __referenceObj = { server : null };

//--------------------------------------------------;

/**
 * Session ID 체크 후 결과를 클라이언트에 전송
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 * @param {Object} qp QueryParameter
 * @param {uint|String|Object} result
 */
__referenceObj._checkSessionResultSend = function( req, res, qp, result )
{
	if( 0 == result )//Sign In 실패;
	{
		/*///수정 - 20170817_2030 - 송선우 - 몰러 오류때문에;
		//MongoDB Query 실행 후 결과를 Client에 전송하기 - Sign In 실패;
		global.b2link.response.send_301_DestroySession( req, res );
		/*/
		//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
		global.b2link.response.send_200_False( req, res );
		//return;
		//*/
	}
	else if( 1 == result )//Sign In 성공;
	{
		//MongoDB Query 실행 후 결과를 Client에 전송하기 - Sign In 성공;
		global.b2link.response.send_200_JSON( req, res, { sid : qp.sid, Expires : qp.d_ex, mid : qp.mid } );
		//return;
	}
};

/**
 * Session ID 체크 후 결과를 클라이언트에 전송
 * SYS0030(BrandPortal) 용도
 *
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 * @param {Object} qp QueryParameter
 * @param {uint|String|Object} result
 */
__referenceObj._checkSessionResultSend__MultiSignIn = function( req, res, qp, result )
{
	//수정하기 - 20170929 - 송선우 - 소스 좀 정리 해놓기;
	if( result.hasOwnProperty( "r" ) )
		{
			if( "B21001601" == result.r )//mid가 존재하지 않음;
			{
				//메세지 전송 소스 정의하기;
				global.b2link.response.send_200_JSON( req, res, { r : result.r, m : "mid가 존재하지 않음" } );
			}
			else if( "B21001602" == result.r )//비밀번호 인증 5회 이상 틀림;
			{
				//메세지 전송 소스 정의하기;
				global.b2link.response.send_200_JSON( req, res, { r : result.r, m : "비밀번호 인증 5회 이상 틀림" } );
			}
			else if( "B21001603" == result.r )//password가 맞지 않음;
			{
				//메세지 전송 소스 정의하기;
				global.b2link.response.send_200_JSON( req, res, { r : result.r, m : "password가 맞지 않음" } );
			}
			else if( "B21001604" == result.r )//승인되지 않은 Authority Code;
			{
				//메세지 전송 소스 정의하기;
				global.b2link.response.send_200_JSON( req, res, { r : result.r, m : "승인되지 않은 Authority Code" } );
			}
			else
			{
				global.TtwLog.error( "__referenceObj._checkSessionResultSend__MultiSignIn Error : 결과 코드에 맞는 후처리 로직이 정의 되지 않았다." );
				global.b2link.response.send_404( req, res );
			}
		}
		else
		{
			if( 0 == result )//Sign In 실패;
			{
				/*///수정 - 20170817_2030 - 송선우 - 몰러 오류때문에;
				//MongoDB Query 실행 후 결과를 Client에 전송하기 - Sign In 실패;
				global.b2link.response.send_301_DestroySession( req, res );
				/*/
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False( req, res );
				//return;
				//*/
			}
			else if( 1 == result )//Sign In 성공;
			{
				//MongoDB Query 실행 후 결과를 Client에 전송하기 - Sign In 성공;
				global.b2link.response.send_200_JSON( req, res, { sid : qp.sid, Expires : qp.d_ex, mid : qp.mid } );
				//return;
			}
			//*/
			else//동일 세션으로 요청 들어옴;
			{
				//동일 세션 중복 접속 허용;
				global.b2link.response.send_200_JSON( req, res, { sid : result, Expires : qp.d_ex, mid : qp.mid } );
			}
			//*/
		}
};

//--------------------------------------------------;

/**
 * first Session
 * checkSession and SignIn
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{

	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @param {Object} q {}
 * @param {Object} qp {}
 */
__referenceObj.checkSession__0 = function( req, res, q, qp )
{
	global.TtwLog.timeStamp( "- [ S ] - member/common/sign_in__multi::__checkSession__0():void----------" );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//global.b2link.debug._check_mongodb_queryParameter( q );
	//global.b2link.debug._check_mongodb_queryParameter( qp );

	var t = __referenceObj.server;//HTTP Server;

	/*/
	q.q = "common$sign_in(" + JSON.stringify( qp ) + ")";//Query;
	/*/
	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - SIGN IN;
	//var _query__sign_in = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.common + "sign_in__multi.dbjs" );
	//var _query__sign_in = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.common + "sign_in__multi.dbjs" );
	q.q = _query__sign_in.replace( "<!=data=!>", JSON.stringify( qp ) );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.common + "sign_in__multi.query", q.q );
	//*/

	//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
	t.req_DB( req, res, q, function( error, result ){
		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			return;
		}

		//Session 정보 Cookie에 추가;
		global.b2link.response.setHeader__setcookie( req, res, qp );

		//Session ID 체크 후 결과를 클라이언트에 전송;
		//__referenceObj._checkSessionResultSend( req, res, qp, result );
		__referenceObj._checkSessionResultSend__MultiSignIn( req, res, qp, result );

		//Sign In 후 변경되는 member_session 정보 동기화;
		global.b2link_router.member._mongodbSync( q );
	});

	global.TtwLog.timeStamp( "- [ E ] - member/common/sign_in__multi::__checkSession__0():void----------" );
};

/**
 * not first session
 * checkSession
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{

	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @param {Object} q
 * @param {Object} qp
 *
 * @example
 * <code>
	http://localhost:49320/member/public/sign_up__checkOverlap
 * </code>
 */
__referenceObj.checkSession__1 = function( req, res, q, qp )
{
	global.TtwLog.timeStamp( "- [ S ] - member/common/sign_in__multi::__checkSession__1():void----------" );

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//global.b2link.debug._check_mongodb_queryParameter( q );
	//global.b2link.debug._check_mongodb_queryParameter( qp );

	var t = __referenceObj.server;//HTTP Server;

	/*/
	q.q = "common$checkSession__Expired__mid(" + JSON.stringify( qp ) + ")";
	/*/
	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - SIGN IN 전에 Session 체크 하고 문제있으면 세션 파괴하기;
	//var _query__expire_session = global.b2link.fs.getDBJS( global.b2link_router.member.PATH.common + "sign_in__multi__expired_mid.dbjs" );
	//var _query__expire_session = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.common + "sign_in__multi__expired_mid.dbjs" );
	q.q = _query__expire_session.replace( "<!=data=!>", JSON.stringify( qp ) );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.common + "sign_in__multi__expired_mid.query", q.q );
	//*/

	//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
	t.req_DB( req, res, q, function( error, result ){
		global.TtwLog.timeStamp( "-- [ S ] - member/common/sign_in__multi::__checkSession__1::res():void----------" );

		if( error )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			global.TtwLog.timeStamp( "-- [ E ] - member/common/sign_in__multi::__checkSession__1::res():void----------if( error ) return;" );
			return;
		}

		//Session ID 체크 후 결과를 클라이언트에 전송;
		//__referenceObj._checkSessionResultSend( req, res, qp, result );
		__referenceObj._checkSessionResultSend__MultiSignIn( req, res, qp, result );

		//Sign In 후 변경되는 member_session 정보 동기화;
		global.b2link_router.member._mongodbSync( q );

		global.TtwLog.timeStamp( "-- [ E ] - member/common/sign_in__multi::__checkSession__1::res():void----------" );
	});

	global.TtwLog.timeStamp( "- [ E ] - member/common/sign_in__multi::__checkSession__1():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//	Return Object(Function);

//----------------------------------------------------------------------------------------------------;

/**
 * SIGN IN
 *
 * @function
 * @param {http.ClientRequest} req 요청들어온 Client Request 연결 객체
 * <code>
	{

	}
 * </code>
 *
 * @param {http.ClientResponse} res 들어온 요청을 처리후 결과를 돌려줄 Response 객체
 * <code>
	{

	}
 * </code>
 *
 * @example
 * <code>
	http://localhost:49320/member/common/sign_in__multi
	http://localhost:49320/member/common/sign_in__multi?mid=thdtjsdn@gmail.com&upw=123qweasd
 * </code>
 */
(function( req, res ){
	global.TtwLog.timeStamp( "- [ S ] - member/common/sign_in__multi():void----------" );

	var t = __referenceObj.server = global.server;//HTTP Server;

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//global.b2link.debug._check_mongodb_queryParameter( q );

	//VALIDATION;
	var a0 = q.mid.split( "@" );
	if( 2 != a0.length ) global.b2link.response.send_301_DestroySession( req, res );

	//Get Session or Create Session;
	var qp = global.b2link.session.get_or_create__Session( req, res, q );//Query Parameter;
		qp.mid = q.mid;
		qp.mpw = q.mpw;

	q.sid ? qp.sid = q.sid : null;
	q.db = "member";

	console.log( "qp.bFirstSession : " + qp.bFirstSession );

	//Request Database;
	__referenceObj[ "checkSession__" + qp.bFirstSession ]( req, res, q, qp );

	global.TtwLog.timeStamp( "- [ E ] - member/common/sign_in__multi():void----------" );
});