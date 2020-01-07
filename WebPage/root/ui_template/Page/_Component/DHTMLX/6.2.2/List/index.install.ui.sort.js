//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _ELS = {
	BTN__SORT_ASC : null
	, BTN__SORT_DESC : null
	, DIV__SORT : null
	, SELECT__SORT : null
};

//----------------------------------------------------------------------------------------------------;

var _PARAM;

var _PARAM_SORT = {
	by : ""
	, dir : ""
	//, as : function(item){ item.toUpperCase();}
};

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Event}
 */
var _evt_mClick__btn__sort_asc = function( event )
{
	if( _DHTMLX.list && _OPTIONS && _OPTIONS.useSort )
	{
		var field = _ELS.SELECT__SORT.value;

		_PARAM_SORT.by = field;
		_PARAM_SORT.dir = "asc";

		_DHTMLX.list.data.sort( _PARAM_SORT );
	}
};

/**
 * @function
 * @param {Event}
 */
var _evt_mClick__btn__sort_desc = function( event )
{
	if( _DHTMLX.list && _OPTIONS && _OPTIONS.useSort )
	{
		var field = _ELS.SELECT__SORT.value;

		_PARAM_SORT.by = field;
		_PARAM_SORT.dir = "desc";

		_DHTMLX.list.data.sort( _PARAM_SORT );
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

	_ELS.DIV__SORT = f0( PARAM._THIS.els.ROOT, "div__sort" );
	_ELS.BTN__SORT_ASC = f0( _ELS.DIV__SORT, "btn__sort_asc" );
	_ELS.BTN__SORT_DESC = f0( _ELS.DIV__SORT, "btn__sort_desc" );
	_ELS.SELECT__SORT = f0( _ELS.DIV__SORT, "select__sort" );
};

//----------------------------------------------------------------------------------------------------;

(function( url, ARGUMENTS ){

	var PARAM = ARGUMENTS[ 1 ];

	if( PARAM._OPTIONS.useSort )
	{
		_setPARAM( PARAM );

		//select option removeAll;
		window.b2link.element.removeAllChildren( _ELS.SELECT__SORT );

		var keys = _THIS.getComponentDataPropertyNames();
		var i = 0, iLen = keys.length;
		var io;
		for( ; i<iLen; ++i )
		{
			if( keys[ i ] == "id" ) continue;

			var o = window.document.createElement( "option" );
				o.value = keys[ i ];
				o.innerText = keys[ i ];

			_ELS.SELECT__SORT.appendChild( o );
		}

		_ELS.DIV__SORT.style.display = "";
		_ELS.BTN__SORT_ASC.value = "ASC";
		_ELS.BTN__SORT_DESC.value = "DESC";

		// click Event;
		_ELS.BTN__SORT_ASC.removeEventListener( "click", _evt_mClick__btn__sort_asc, false );
		_ELS.BTN__SORT_ASC.addEventListener( "click", _evt_mClick__btn__sort_asc, false, 0, true );
		// click Event;
		_ELS.BTN__SORT_DESC.removeEventListener( "click", _evt_mClick__btn__sort_desc, false );
		_ELS.BTN__SORT_DESC.addEventListener( "click", _evt_mClick__btn__sort_desc, false, 0, true );
	}
	else
	{
		_ELS.DIV__SORT.style.display = "none";
	}
});