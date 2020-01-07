//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_INTERFACE/interface/window.SYS0310_UI_INTERFACE.interface.Page.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * 공통 Interface 규약 체크
	 * @function
	 */
	var _checkInterface = function(){

		var io;
		for( var s in this )
		{
			io = this[ s ];
			if( "function" == typeof( io ) )
			{
				if( !_checkInterface.interfaces[ s ] ) continue;

				var sf = io.toString();
				if( -1 != sf.indexOf( _checkInterface.interfaces[ s ] ) )
				{
				}
				else
				{
					window.TtwLog.error( "[ ERROR ] - Interface - " + s );
					window.TtwLog.error( "\tCurrent : " + sf );
					window.TtwLog.error( "\tInterface : " + s + _checkInterface.interfaces[ s ] );
				}
			}
		}

		//*/
		for( var s in _checkInterface.interfaces )
		{
			if( !this[ s ] )
			{
				window.TtwLog.warn( "[ WARN ] - Interface 미구현 - " + this.els.ROOT.id + " - '" + s + "'" );
				continue;
			}
		}
		//*/
	};
	_checkInterface.interfaces = {
		dispose : "()"
		, draw : "( data, options )"
		, redraw : "( data, options )"
		, reqData : "( url, cbComplete )"

		, setData : "( d )"
		, setParentElement : "( parentElement )"

		, getHeight : "()"
		, setHeight : "( s )"
		, getWidth : "()"
		, setWidth : "( s )"
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {Object} T this 객체와 동일한 의미를 지닌 실제 구현체가 될 Object
	 * @return {Object}
	 */
	window.SYS0310_UI_INTERFACE.interface.Page = function( T )
	{
		var t = window.SYS0310_UI_INTERFACE.interface._COMMON_( T );

			//[ DEBUG ] - Release Mode시 삭제;
			t.checkInterface = _checkInterface;


			//----------Instance;
			t.els;


			//----------Function;
			t.dispose;

			t.draw;

			t.redraw;

			t.reqData;

			t.setData;
			t.setParentElement;

			t.getHidth;
			t.setHidth;

			t.getWidth;
			t.setWidth;

		return t;
	};
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;