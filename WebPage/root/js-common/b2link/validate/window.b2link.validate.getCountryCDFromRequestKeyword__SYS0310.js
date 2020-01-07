//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validate/window.b2link.validate.getCountryCDFromRequestKeyword__SYS0310.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

/**
 * @const
 * @property {Object}
 * <code>
	{
		2글자 국가코드 : {
			REGEXP : string 의 언어를 체크하기 위한 정규표현식
		}
	}
 * </code>
 */
var _DATA = {

	//중국의 국가 코드 ( _CATEGORY.COUNTRY.cd_n );
	CN : {
		//string 의 언어를 체크하기 위한 정규표현식(중국어)
		//U+3400 - U+4DBF: CJK unified ideographs extension A (Chinese, Japanese, and Korean)
		//U+4E00 - U+9FFF: CJK unified ideographs (Chinese, Japanese, and Korean)
		//U+F900 - U+FAFF: CJK compatibility ideographs (Chinese, Japanese, and Korean)
		REGEXP : /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/
	}

	//한국의 국가 코드 ( _CATEGORY.COUNTRY.cd_n );
	, KR : {
		//string 의 언어를 체크하기 위한 정규표현식(한글);
		//U+3131 - U+314E U+314F - 3163 U+AC00 - U+D7A3 : Korean;
		REGEXP : /[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/
	}

	//일본의 국가 코드 ( _CATEGORY.COUNTRY.cd_n );
	, JP : {
		//string 의 언어를 체크하기 위한 정규표현식(일본어);
		//U+3040 - U+30FF: hiragana and katakana (Japanese only);
		//U+3400 - U+4DBF: CJK unified ideographs extension A (Chinese, Japanese, and Korean);
		//U+4E00 - U+9FFF: CJK unified ideographs (Chinese, Japanese, and Korean);
		//U+F900 - U+FAFF: CJK compatibility ideographs (Chinese, Japanese, and Korean);
		//U+FF66 - U+FF9F: half-width katakana (Japanese only);

		// REGEXP : /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/
		REGEXP : /[\u3040-\u30ff\uff66-\uff9f]/

	}

	//미국의 국가 코드 ( _CATEGORY.COUNTRY.cd_n );
	, US : {
		//string 의 언어를 체크하기 위한 정규표현식(영어);
		//U+0000 - U+007E : CONTROLS AND BASIC ( only number and alphabet );
		REGEXP : /[\u0000-\u007e]/
	}
};

//----------------------------------------------------------------------------------------------------;

/**
 * 인수 string 에 대해 중국어 여부를 판단하는 함수
 * @function
 * @param {String} string  "한글", "alphabet", "漢字" , "ディアボリックラヴァーズ", " русский язык"
 * @param {uint} 국가 코드
 * @return {null|uint}  COUNTRY DB상의 중국의 cd_n 코드 값을 리턴한다. 156 : CN, 아닐경우 null
 */
var _FN0 = function( str, CD )
{
	//window.RayLog.timeStamp( "- [ S ] - " + "_FN0():{null|uint}----------" );

	//문자열 1씩 체크;
	var i=0, iLen=str.length;
	for( ; i<iLen; ++i )
	{
		if( _DATA[ CD ].REGEXP.test( str[ i ] ) )
		{
			return CD;
		}
	}

	//window.RayLog.timeStamp( "- [ E ] - " + "_FN0():{null|uint}----------return null;" );
	return null;
};

//----------------------------------------------------------------------------------------------------;

/**
 * 인수 string 에 대해 언어 종류를 판별하는 함수
 * @function
 * @param {String} string  "한글", "alphabet", "漢字" , "ディアボリックラヴァーズ", " русский язык"
 * @return {null|uint}  COUNTRY DB 의 cd_n 코드 값을 리턴한다. 156 : CN, 840 : US, 410 : KR, 392 : JP
 */
window.b2link.validate.getCountryCDFromRequestKeyword__SYS0310 = function( str )
{
	window.RayLog.timeStamp( "---- [ S ] - " + "window.b2link.validate.getCountryCDFromRequestKeyword__SYS0310():{null|uint}----------" );

	//효율성 여부 판단 필요;
	var f = _FN0;

	var CD;
	var r;

	//언어체크의 우선순위 설정 ( 일본어, 중국어, 한국어, 영어 순);
	CD = "JP"; r = f( str, CD ); if( null != r ) return r;
	CD = "CN"; r = f( str, CD ); if( null != r ) return r;
	CD = "KR"; r = f( str, CD ); if( null != r ) return r;
	CD = "US"; r = f( str, CD ); if( null != r ) return r;

	window.RayLog.timeStamp( "---- [ E ] - " + "window.b2link.validate.getCountryCDFromRequestKeyword__SYS0310():{null|uint}----------return 0;" );

	return 0;//_FN0의 결과가 null이면 0 반환;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;