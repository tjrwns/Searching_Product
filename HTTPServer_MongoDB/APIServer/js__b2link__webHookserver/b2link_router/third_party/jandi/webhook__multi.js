//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__webHookServer/b2link_router/third_party/jandi/webhook__multi.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 잔디 WebHook으로 받아온 다중 메세지(배열)를 그대로 전달 하는 기능
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		data : [
			{
				"jandiWebhookMsg" : {
					"connectColor" : "#FF0000",
					"connectInfo" : [
						{
							"title" : "발주번호:BL00000001",
							"imageUrl" : "",
							"description" : "발주담당자:홍길동\r\n발주금액:240,000원\r\n[http://b2ker.b2link.co.kr/test/BL00000001](http://b2ker.b2link.co.kr/test/BL00000001)"
						},
						{
							"title" : "발주번호:BL00000002",
							"imageUrl" : "",
							"description" : "발주담당자:홍길동\r\n발주금액:340,000원\r\n[http://b2ker.b2link.co.kr/test/BL00000001](http://b2ker.b2link.co.kr/test/BL00000002)"
						},
						{
							"title" : "발주번호:BL00000003",
							"imageUrl" : "",
							"description" : "발주담당자:홍길동\r\n발주금액:440,000원\r\n[http://b2ker.b2link.co.kr/test/BL00000001](http://b2ker.b2link.co.kr/test/BL00000003)"
						}
					],
					"body" : "[[견적번호:20170220001]](http://b2ker.b2link.co.kr/test/20170220001) 테스트 VIP B2B 발주 승인 요청"
				},
				"jandiWebhookUrl" : "https://wh.jandi.com/connect-api/webhook/11320800/a9e7cace9fe309afe9fc5759ea212e29"
			}
			, {
				"jandiWebhookMsg" : {
					"connectColor" : "#FF0000",
					"connectInfo" : [
						{
							"title" : "발주번호:BL00000001",
							"imageUrl" : "",
							"description" : "발주담당자:홍길동\r\n발주금액:240,000원\r\n[http://b2ker.b2link.co.kr/test/BL00000001](http://b2ker.b2link.co.kr/test/BL00000001)"
						},
						{
							"title" : "발주번호:BL00000002",
							"imageUrl" : "",
							"description" : "발주담당자:홍길동\r\n발주금액:340,000원\r\n[http://b2ker.b2link.co.kr/test/BL00000001](http://b2ker.b2link.co.kr/test/BL00000002)"
						},
						{
							"title" : "발주번호:BL00000003",
							"imageUrl" : "",
							"description" : "발주담당자:홍길동\r\n발주금액:440,000원\r\n[http://b2ker.b2link.co.kr/test/BL00000001](http://b2ker.b2link.co.kr/test/BL00000003)"
						}
					],
					"body" : "[[견적번호:20170220001]](http://b2ker.b2link.co.kr/test/20170220001) 테스트 VIP B2B 발주 승인 요청"
				},
				"jandiWebhookUrl" : "https://wh.jandi.com/connect-api/webhook/11320800/a9e7cace9fe309afe9fc5759ea212e29"
			}
		]
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
	http://localhost:47320/third_party/jandi/webhook__multi?data=
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - third_party/jandi/webhook__multi():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	var data = JSON.parse( q.data );

	if( 0 == global.b2link_api.jandi.webhook__multi( req, res, data ) )
	{
		debugger;
		global.b2link.response.send_200_JSON( req, res, { r : 96, m : "OperationFailed" } );
	}

	global.TtwLog.log( "전달 메세지 키워드 : " + data.info.templete_file_nm );

	global.TtwLog.log( "- [ E ] - third_party/jandi/webhook__multi():void----------" );
});