//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validate/window.b2link.validate.requestKeyword__SYS0310.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//TODO:특수문자 제거 정규식 추가( 언어 판별을 위한 효율)
/**
 * string 의 언어를 체크하기 위한 정규표현식(중국어, 일본어, 영어, 한글 )
 * U+3040 - U+30FF: hiragana and katakana (Japanese only)
 * U+3400 - U+4DBF: CJK unified ideographs extension A (Chinese, Japanese, and Korean)
 * U+4E00 - U+9FFF: CJK unified ideographs (Chinese, Japanese, and Korean)
 * U+F900 - U+FAFF: CJK compatibility ideographs (Chinese, Japanese, and Korean)
 * U+FF66 - U+FF9F: half-width katakana (Japanese only)
 * U+3131 - U+314E U+314F - 3163 U+AC00 - U+D7A3 : Korean
 * U+0000 - U+007E : CONTROLS AND BASIC ( only number and alphabet )
 * U+00A0 - U+00BE : °¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼¼¼½¾¿
 * @const
 * @property {Regexp}
 */
var _ACCEPT_STRING_REGEXP = /[\u3040-\u30ff|\u3400-\u4dbf|\u4e00-\u9fff|\uf900-\ufaff|\uff66-\uff9f|\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3|\u0000-\u007e| |\u00a0-\u00be]/u;

/**
 * 인수 string 에 대해 검색 허용 문자를 판별하는 함수
 * @function
 * @param {String} string  "한글", "alphabet", "漢字" , "ディアボリックラヴァーズ", " русский язык"
 * @return {Boolean} 검색 허용 문자일경우 true, 아닐경우 false 리턴
 */
window.b2link.validate.requestKeyword__SYS0310 = function( str )
{
	window.RayLog.timeStamp( "--- [ S ] - " + "window.b2link.validate.requestKeyword__SYS0310():Boolean----------" );
	if( str.length > 20 || str.length <= 1) return false;

	var i=0, iLen=str.length;
	for( ; i<iLen; ++i )
	{
		if( !_ACCEPT_STRING_REGEXP.test( str[ i ] ) )
		{
			return false;
		}
	}
	window.RayLog.timeStamp( "--- [ E ] - " + "window.b2link.validate.requestKeyword__SYS0310():Boolean----------" );
	return true;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;