//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/window.b2link.date.getDateObjectFromNow__SYS0310__Keyword.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 현재 시간의 데이터 정보 객체를 생성한다.
 * SYS0310의 _KEYWORD DB와 관련된 스키마 일부를 생성한다.
 * @function
 * @return {Object}
 * <code>
 	//값은 전부 Number;
	{

		d_d : -1//날짜;
		, d_m : -1//월;
		, d_y : -1//년(yyyy);
		, d_ym : -1//년월(yyyymm);
		, d_ymd : -1//년월일(yyyymmdd);

		, t : -1//TimeStamp;
	}
 * </code>
 */
window.b2link.date.getDateObjectFromNow__SYS0310__Keyword = function()
{
	window.RayLog.timeStamp( "- [ S ] - " + "window.b2link.date.getDateObjectFromNow__SYS0310__Keyword():Object----------" );

	var r = {
		  d_d : -1
		, d_m : -1
		, d_y : -1
		, d_ym : -1
		, d_ymd : -1

		, t : -1
	};

	var date = new Date();
	var t = date.getTime();

	var d_y = date.getFullYear();
	var d_m = date.getMonth() + 1;
	var d_d = date.getDate();

	var d_ym = d_y * 100 + d_m;
	var d_ymd = d_y * 10000 + d_m * 100 + d_d ;

	r.d_d = d_d;
	r.d_m = d_m;
	r.d_y = d_y;
	r.d_ym = d_ym;
	r.d_ymd = d_ymd

	r.t = t;

	window.RayLog.timeStamp( "- [ S ] - " + "window.b2link.date.getDateObjectFromNow__SYS0310__Keyword():Object----------return r;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;