//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__sessionServer/b2link_router/member/member_public/getSearchList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * 회원 정보 검색 - 노출 가능한 데이터만 모여있는 member_public를 검색한다.
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.member_public + "getSearchList.dbjs" );

/**
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
 * @example
 * <code>
	http://localhost:49320/member/member_public/getSearchList
	http://localhost:49320/member/member_public/getSearchList?&l=kr&skip=0&limit=50&find={"_id$brand_basic":"파파레서피","_nm":"품명2","barcode":"33334444","_id$member_public":"송선"}&sid=6457356b5a575a70626d566b4f6a6f305a445a684e4445334f44526c4d7a457a4f4463354e546733595451314d7a4d314f4464684e446b334f4455344e3245304f544d304e546733595451314d7a49305a6a5a684e7a41325a44526c4e3245314e6a5a6b&d_ex=Fri, 17 Feb 2017 15:14:56 GMT&nCached=Fri Feb 17 2017 21:28:07 GMT 0900 (KST)
 * </code>
 */
(function( req, res ){
	global.KaiLog.log( "- [ S ] - member/member_public/getSearchList():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	global.b2link.debug._check_mongodb_queryParameter( q );

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - SIGN IN 전에 Session 체크 하기;
	var _query = global.b2link.fs.getDBJS__require( global.b2link_router.member.PATH.member_public + "getSearchList.dbjs" );
	var query = _query.replace( "<!=locale=!>", q.l ? q.l : "" )
		.replace( "<!=db_nm=!>", q.db_nm )
		.replace( "<!=col_nm=!>", q.col_nm )
		.replace( "<!=skip=!>", q.skip )
		.replace( "<!=limit=!>", q.limit )
		//.replace( "<!=find=!>", q.find ? q.find.replace(/"/gi,"&quot;") : "{}" )
		//.replace( "<!=sort=!>", q.sort ? q.sort.replace(/"/gi,"&quot;") : "{}" )
		//.replace( "<!=find=!>", q.find ? JSON.stringify( q.find ) : {} )
		//.replace( "<!=sort=!>", q.sort ? JSON.stringify( q.sort ) : {} )
		.replace( "<!=find=!>", q.find ? q.find : {} )
		.replace( "<!=sort=!>", q.sort ? q.sort : {} )
		.replace( "<!=del=!>", q._d ? q._d : 1 );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( global.b2link_router.member.PATH.member_public + "getSearchList.query", query );

	//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
		, function( req, res, error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.KaiLog.log( "- [ E ] - member/member_public/getSearchList():void----------" );
});