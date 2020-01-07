 //----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _ELS = {
	DIV__PAGGER : null
	, BTN__PREV : null
	, BTN__NEXT : null
	, SPAN__PAGE : null
	, SPAN__LIMIT : null
};

//----------------------------------------------------------------------------------------------------;

var _DATA_PAGGER = null;

var _PARAM;

var _PARAM_PAGGER = {
	page : 0
	, page_last : 0
	, data_first : 0
	, data_last : 0
};

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Event}
 */
var _evt_mClick__btn__prev = function( event )
{
	if( _DHTMLX.list && _OPTIONS && _OPTIONS.pagger )
	{
		if( _PARAM_PAGGER.page <= 1 ) return;
		else
		{
			_PARAM_PAGGER.data_first = _PARAM_PAGGER.data_first - _OPTIONS.pagger.size;
			_PARAM_PAGGER.data_first = _PARAM_PAGGER.data_first < 0 ? 1 : _PARAM_PAGGER.data_first;
			_PARAM_PAGGER.data_last = _PARAM_PAGGER.data_first + _OPTIONS.pagger.size;

			_PARAM_PAGGER.page = Math.ceil( _PARAM_PAGGER.data_first / _OPTIONS.pagger.size );

			_setPage();
		}
	}
};

/**
 * @function
 * @param {Event}
 */
var _evt_mClick__btn__next = function( event )
{
	if( _DHTMLX.list && _OPTIONS && _OPTIONS.pagger )
	{
		if( _PARAM_PAGGER.page >= _PARAM_PAGGER.page_last ) return;
		else
		{
			_PARAM_PAGGER.data_first = _PARAM_PAGGER.data_last;
			_PARAM_PAGGER.data_last = _PARAM_PAGGER.data_first + _OPTIONS.pagger.size;

			_PARAM_PAGGER.page = Math.ceil( _PARAM_PAGGER.data_first / _OPTIONS.pagger.size );

			_setPage();
		}
	}
};

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

var _setPage = function()
{
	_DHTMLX.list.data.parse( _DATA_PAGGER.slice( _PARAM_PAGGER.data_first, _PARAM_PAGGER.data_last ), "json" );
	_ELS.SPAN__PAGE.innerHTML = _PARAM_PAGGER.page;
};

var _setPARAM = function( PARAM )
{
	_PARAM = PARAM;

	var f0 = window.b2link.element.getElementByClassName;

	_ELS.DIV__PAGGER = f0( PARAM._THIS.els.ROOT, "div__pagger" );
	_ELS.BTN__PREV = f0( _ELS.DIV__PAGGER, "btn__prev" );
	_ELS.BTN__NEXT = f0( _ELS.DIV__PAGGER, "btn__next" );
	_ELS.SPAN__PAGE = f0( _ELS.DIV__PAGGER, "span__page" );
	_ELS.SPAN__LIMIT = f0( _ELS.DIV__PAGGER, "span__limit" );
};

//----------------------------------------------------------------------------------------------------;

(function( url, ARGUMENTS ){

	var PARAM = ARGUMENTS[ 1 ];

	if( PARAM._OPTIONS.pagger )
	{
		_setPARAM( PARAM );

		_DATA_PAGGER = _DHTMLX.list.data._order;

		_PARAM_PAGGER.page = 1;
		//_PARAM_PAGGER.page_last = Math.ceil( _DHTMLX.list.data.getLength() / _OPTIONS.pagger.size );
		_PARAM_PAGGER.page_last = Math.ceil( _DATA_PAGGER.length / _OPTIONS.pagger.size );

		_ELS.SPAN__LIMIT.innerHTML = _PARAM_PAGGER.page_last;

		_PARAM_PAGGER.data_first = 0;
		_PARAM_PAGGER.data_last = _PARAM_PAGGER.data_first + _OPTIONS.pagger.size;
		_setPage();


		// click Event;
		_ELS.BTN__PREV.removeEventListener( "click", _evt_mClick__btn__prev, false );
		_ELS.BTN__PREV.addEventListener( "click", _evt_mClick__btn__prev, false, 0, true );
		// click Event;
		_ELS.BTN__NEXT.removeEventListener( "click", _evt_mClick__btn__next, false );
		_ELS.BTN__NEXT.addEventListener( "click", _evt_mClick__btn__next, false, 0, true );
	}
	else
	{
		_ELS.DIV__PAGGER.style.display = "none";
	}
});