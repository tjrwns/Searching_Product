//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;


var _ELS = {
	BTN__FILTER : null
	, DIV__FILTER : null
	, INPUT__FILTER : null
	, SELECT__FILTER : null
};

var _PARAM;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Event}
 */
var _evt_mClick__btn__filter = function( event )
{
	if( _DHTMLX.list && _OPTIONS && _OPTIONS.useFilter )
	{
		var field = _ELS.SELECT__FILTER.value;
		_DHTMLX.list.data.filter( function( item ){ if( new RegExp( _ELS.INPUT__FILTER.value, "gi" ).test( item[ field ] ) ) return item; });
	}
};

/**
 * @function
 * @param {Event}
 */
var _evt_keypu__input__filter = function( event )
{
	if( event.type != "keyup" || event.keyCode != 13 ) return;

	if( _DHTMLX.list && _OPTIONS && _OPTIONS.useFilter )
	{
		var field = _ELS.SELECT__FILTER.value;
		_DHTMLX.list.data.filter( function( item ){ if( new RegExp( _ELS.INPUT__FILTER.value, "gi" ).test( item[ field ] ) ) return item; });
	}
};

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

var _setPARAM = function( PARAM )
{
	_PARAM = PARAM;

	var f0 = window.b2link.element.getElementByClassName;

	_ELS.DIV__FILTER = f0( PARAM._THIS.els.ROOT, "div__filter" );
	_ELS.BTN__FILTER = f0( _ELS.DIV__FILTER, "btn__filter" );
	_ELS.INPUT__FILTER = f0( _ELS.DIV__FILTER, "input__filter" );
	_ELS.SELECT__FILTER = f0( _ELS.DIV__FILTER, "select__filter" );
};

//----------------------------------------------------------------------------------------------------;

(function( url, ARGUMENTS ){

	var PARAM = ARGUMENTS[ 1 ];

	if( PARAM._OPTIONS.useFilter )
	{
		_setPARAM( PARAM );

		//select option removeAll;
		window.b2link.element.removeAllChildren( _ELS.SELECT__FILTER );

		var keys = _THIS.getComponentDataPropertyNames();
		var i = 0, iLen = keys.length;
		var io;
		for( ; i<iLen; ++i )
		{
			if( keys[ i ] == "id" ) continue;

			var o = window.document.createElement( "option" );
				o.value = keys[ i ];
				o.innerText = keys[ i ];

			_ELS.SELECT__FILTER.appendChild( o );
		}

		_ELS.DIV__FILTER.style.display = "";
		_ELS.BTN__FILTER.value = "Search";

		// click Event;
		_ELS.BTN__FILTER.removeEventListener( "click", _evt_mClick__btn__filter, false );
		_ELS.BTN__FILTER.addEventListener( "click", _evt_mClick__btn__filter, false, 0, true );

		// keyup Event;
		_ELS.INPUT__FILTER.removeEventListener( "keyup", _evt_keypu__input__filter, false );
		_ELS.INPUT__FILTER.addEventListener( "keyup", _evt_keypu__input__filter, false, 0, true );
	}
	else
	{
		_ELS.DIV__FILTER.style.display = "none";
	}
});