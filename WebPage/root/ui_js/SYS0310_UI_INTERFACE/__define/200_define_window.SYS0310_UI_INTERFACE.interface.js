//----------------------------------------------------------------------------------------------------;
var fileNm = "ui_js/SYS0310_UI_INTERFACE/__define/200_define_window.SYS0310_UI_INTERFACE.interface.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0310_UI_INTERFACE.interface;

window.SYS0310_UI_INTERFACE.interface = window.SYS0310_UI_INTERFACE.interface || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0310_UI_INTERFACE.interface;

(function(){

	//----------------------------------------------------------------------------------------------------;

	//	EVENT - DISPATCH EVENTS;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * _약속된 HTMLElement인 this.T.els.ROOT 통해 window.b2link.event.DATA_LOAD_COMPLETE 이벤트를 Dispatch 시킨다.
	 * @function
	 * @param {Array|Object} eventDetail event.detail에 들어갈 Data
	 */
	var _dispatchCE__DATA_LOAD_COMPLETE = function( eventDetail ){ window.b2link.event.dispatchCE__DATA_LOAD_COMPLETE( this.T.els.ROOT, eventDetail ); };

	/**
	 * _약속된 HTMLElement인 this.T.els.ROOT를 통해 window.b2link.event.dispatchCE__DISPOSED_EL 이벤트를 Dispatch 시킨다.
	 * @function
	 * @param {Array|Object} eventDetail event.detail에 들어갈 Data
	 */
	//var _dispatchCE__DISPOSED_EL = function( eventDetail ){ window.b2link.event.dispatchCE__DISPOSED_EL( this.T.els.ROOT, eventDetail ); };

	/**
	 * _약속된 HTMLElement인 this.T.els.ROOT를 통해 window.b2link.event.dispatchCE__DISPOSED_JS 이벤트를 Dispatch 시킨다.
	 * @function
	 * @param {Array|Object} eventDetail event.detail에 들어갈 Data
	 */
	var _dispatchCE__DISPOSED_JS = function( eventDetail ){ window.b2link.event.dispatchCE__DISPOSED_JS( this.T.els.ROOT, eventDetail ); };

	/**
	 * _약속된 HTMLElement인 this.T.els.ROOT를 통해 window.b2link.event.INITIALIZED 이벤트를 Dispatch 시킨다.
	 * @function
	 * @param {Array|Object} eventDetail event.detail에 들어갈 Data
	 */
	var _dispatchCE__INITIALIZED = function( eventDetail ){ window.b2link.event.dispatchCE__INITIALIZED( this.T.els.ROOT, eventDetail ); };

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * window.b2link.event.DATA_LOAD_COMPLETE 이벤트 타입의 이벤트 리스너를 this.T.els.ROOT에 1회 제거 후 추가한다;
	 * 동일한 Reference를 가지고 있는 eventListener은 중복 추가 되지 않게 처리 되어있다.
	 * @function
	 * @param {Function} function( event ){}
	 */
	var _addEvent__DATA_LOAD_COMPLETE = function( eventListener )
	{
		if( !eventListener ) return;

		this.removeEvent__DATA_LOAD_COMPLETE( eventListener );
		this.T.els.ROOT.addEventListener( window.b2link.event.DATA_LOAD_COMPLETE, eventListener, false, 0, true );
	};

	/**
	 * window.b2link.event.DATA_LOAD_COMPLETE 이벤트 타입의 이벤트 리스너를 this.T.els.ROOT에 제거한다;
	 * @function
	 * @param {Function} function( event ){}
	 */
	var _removeEvent__DATA_LOAD_COMPLETE = function( eventListener )
	{
		if( !eventListener ) return;

		this.T.els.ROOT.removeEventListener( window.b2link.event.DATA_LOAD_COMPLETE, eventListener, false, 0 );
	};

	/**
	 * window.b2link.event.INITIALIZED 이벤트 타입의 이벤트 리스너를 this.T.els.ROOT에 1회 제거 후 추가한다;
	 * 동일한 Reference를 가지고 있는 eventListener은 중복 추가 되지 않게 처리 되어있다.
	 * @function
	 * @param {Function} function( event ){}
	 */
	var _addEvent__INITIALIZED = function( T, eventListener )
	{
		if( !eventListener ) return;

		var T = T || this.T.els.ROOT;

		this.removeEvent__INITIALIZED( T, eventListener );
		T.addEventListener( window.b2link.event.INITIALIZED, eventListener, false, 0, true );
	};

	/**
	 * window.b2link.event.INITIALIZED 이벤트 타입의 이벤트 리스너를 this.T.els.ROOT에 제거한다;
	 * @function
	 * @param {Function} function( event ){}
	 */
	var _removeEvent__INITIALIZED = function( T, eventListener )
	{
		if( !eventListener ) return;

		var T = T || this.T.els.ROOT;

		T.removeEventListener( window.b2link.event.INITIALIZED, eventListener, false, 0 );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _initialize = function()
	{
		//공통 Interface 규약 체크;
		this.T.checkInterface();

		//this.T.els( _ELS )에 있는 HTMLElement들의 id에 유니크 키값을 추가한다.;
		this.changeUniqueRootID();
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * this.T.els( _ELS )에 있는 HTMLElement들의 id에 유니크 키값을 추가한다.
	 * @function
	 */
	var _changeUniqueRootID = function()
	{
		var o = this.T.els;
		for( var s in o ) if( o[ s ].id ) o[ s ].id += "--" + SUtilMath.getUnique();
	};

	/**
	 * @function
	 */
	var _dispose = function()
	{
		//dispose를 위한 각종 로직 삽입;

		//----------마지막 라인에 필수 삽입;
		//이 객체에서 조작하는 대상 HTMLElement에 종속된 HTML을 제거한다;
		try{ this.T.els.ROOT.innerHTML = ""; }catch( er ){}
		//이 객체에서 조작하는 대상 HTMLElement를 삭제한다;
		try{ this.T.els.remove(); }catch( er ){}

		window.b2link.event.dispatchCE__DISPOSED_EL( this.T.els.ROOT, this.T.els.ROOT );
		//----------마지막라인 에 필수 삽입;
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	var _getHeight = function(){ return this.T.els.ROOT.style.height; };

	var _setHeight = function( s ){
		var t = this.T.els.ROOT;

		var n = Number( s );

		if( !isNaN( n ) ) t.style.height = s + "px";
		else if( -1 != s.indexOf( "%" ) || -1 != s.indexOf( "px" ) ) t.style.height = s;
		else if( "number" == typeof( n ) ) t.style.height = s + "px";
	};

	var _getWidth = function(){ return this.T.els.ROOT.style.width; };
	var _setWidth = function( s ){
		var t = this.T.els.ROOT;

		var n = Number( s );

		if( !isNaN( n ) ) t.style.width = s + "px";
		else if( -1 != s.indexOf( "%" ) || -1 != s.indexOf( "px" ) ) t.style.width = s;
		else if( "number" == typeof( n ) ) t.style.width = s + "px";
	};

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} T this 객체와 동일한 의미를 지닌 실제 구현체가 될 Object
	 * @return {Object}
	 */
	window.SYS0310_UI_INTERFACE.interface._COMMON_ = function( T )
	{
		var t = { T : T };

		//----------------------------------------------------------------------------------------------------;

		//	EVENT - DISPATCH EVENTS;

		//----------------------------------------------------------------------------------------------------;

		t.dispatchCE__DATA_LOAD_COMPLETE = _dispatchCE__DATA_LOAD_COMPLETE;

		t.dispatchCE__DISPOSED_JS = _dispatchCE__DISPOSED_JS;

		t.dispatchCE__INITIALIZED = _dispatchCE__INITIALIZED;

		//----------------------------------------------------------------------------------------------------;

		//	EVENT;

		//----------------------------------------------------------------------------------------------------;

		t.addEvent__DATA_LOAD_COMPLETE = _addEvent__DATA_LOAD_COMPLETE;
		t.removeEvent__DATA_LOAD_COMPLETE = _removeEvent__DATA_LOAD_COMPLETE;

		t.addEvent__INITIALIZED = _addEvent__INITIALIZED;
		t.removeEvent__INITIALIZED = _removeEvent__INITIALIZED;

		t.initialize = _initialize;

		//----------------------------------------------------------------------------------------------------;

		//	FUNCTION;

		//----------------------------------------------------------------------------------------------------;

		t.changeUniqueRootID = _changeUniqueRootID;

		t.dispose = _dispose;

		//----------------------------------------------------------------------------------------------------;

		//	GETTER / SETTER;

		//----------------------------------------------------------------------------------------------------;

		t.getHeight = _getHeight;
		t.setHeight = _setHeight;

		t.getWidth = _getWidth;
		t.setWidth = _setWidth;

		T.super = t;

		return T;
	};

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;