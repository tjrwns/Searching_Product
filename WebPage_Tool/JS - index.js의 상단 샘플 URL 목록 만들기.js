var PATH000 = "D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/";

//----------------------------------------------------------------------------------------------------;

var FNS = {

};

//----------------------------------------------------------------------------------------------------;

var R = [];
var R0 = [];

//----------------------------------------------------------------------------------------------------;

var FN0 = function( path ){
	var fStr = SUtilFsReadStream.getFile( path ).toString();

	var idx0 = fStr.indexOf( "/*/" );
	var idx1 = fStr.indexOf( "//*/" );

	var s0 = fStr.slice( idx0 + 3, idx1 );
	//console.log( s0 );

	R.push( s0 );
	R0.push( { p : path, s : s0 } );
};

//----------------------------------------------------------------------------------------------------;

var a = [
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/Calendar/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/Map/Leaflet/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/Scheduler/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/SiteMap/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Bar/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Calendar/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Candlestick/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Dataset/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Funnel/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Gauge/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Graph/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Heatmap/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Line/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Map-Lines/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Parallel/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Pie/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Radar/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Sankey/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Scatter/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Sunburst/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/ThemeRiver/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Tree/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/EChart/Treemap/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/Sparkline/Bar/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/Sparkline/Boxplot/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/Sparkline/Bullet/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/Sparkline/Discrete/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/Sparkline/Line/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/Sparkline/Pie/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart/Sparkline/Tristate/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Bar/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Boxplot/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Calendar/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Candlestick/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Column/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Dataset/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Funnel/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Gauge/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Graph/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Heatmap/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Line/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Map-Lines/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Parallel/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Pie/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Radar/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Sankey/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Sunburst/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/ThemeRiver/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Tree/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/EChart/Treemap/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/Sparkline/Bar/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/Sparkline/Boxplot/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/Sparkline/Candlestick/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/Sparkline/Column/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/Sparkline/Line/index.js",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Chart+FancyGrid/Sparkline/Pie/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/ColorPicker/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/FancyGrid/Basic/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/FancyGrid/Search/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Main/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-BRAND/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-BRAND/Counter/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-BRAND/Counter+자동이동/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-BRAND/Marker/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-BRAND/Sparkline/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-BRAND/VectorCircle/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-BRAND/VectorPoint/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-COUNTRY/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-COUNTRY_PANNING/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/SearchPanel/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/SignIn/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/SignOut/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/SignUp/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Popup/SignIn/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Popup/SignOut/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Popup/SignUp/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/_TEMPLATE/Application/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/_TEMPLATE/Page/index.js",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/_TEMPLATE/Popup/index.js"
];

a.forEach( function( item ){
	FN0( item );
	global.console.log( item );
});

//R;
R0;

/*/
var result = "";
R.forEach( function( item ){

	if( "" != item  )
	{
		item = item.replace( /\t/gi, "" ).replace( "\r\n", "" )
			//.replace( /\n\n/gi, "" ).replace( /\n\n/gi, "" ).replace( /\n\n/gi, "" ).replace( /\n\n/gi, "" ).replace( /\n\n/gi, "" )
			.replace( /\r\n\r\n/gi, "" ).replace( /\r\n\r\n/gi, "" ).replace( /\r\n\r\n/gi, "" ).replace( /\r\n\r\n/gi, "" ).replace( /\r\n\r\n/gi, "" );

		if( "//" == ( "" + item[ 0 ] + item[ 1 ] ) )
		{
			result += "\n" + item;
		}

		if( "http" == ( "" + item[ 0 ] + item[ 1 ] + item[ 2 ] + item[ 3 ] ) )
		{
			result += "\n" + item;
		}
	}
});
console.log( "----------result" );
console.log( result );
//*/

//*/
var result0 = "";
R0.forEach( function( item ){
	if( "" != item.s  )
	{
		result0 += "\n" + item.p;

		item.s = item.s.replace( /\t/gi, "" ).replace( "\r\n", "" ).replace( /\r\n/gi, "\n" )
			//.replace( /\n\n/gi, "" ).replace( /\n\n/gi, "" ).replace( /\n\n/gi, "" ).replace( /\n\n/gi, "" ).replace( /\n\n/gi, "" )
			.replace( /\r\n\r\n\r\n/gi, "" ).replace( /\r\n\r\n\r\n/gi, "" ).replace( /\r\n\r\n\r\n/gi, "" ).replace( /\r\n\r\n\r\n/gi, "" ).replace( /\r\n\r\n\r\n/gi, "" )

		//console.log( item );
		if( "//" == ( "" + item.s[ 0 ] + item.s[ 1 ] ) )
		{
			result0 += "\n\n" + item.s;
		}

		if( "http" == ( "" + item.s[ 0 ] + item.s[ 1 ] + item.s[ 2 ] + item.s[ 3 ] ) )
		{
			result0 += "\n" + item.s;
		}
	}
	else
	{
		//console.log( item );
	}
});
console.log( result0 );
//*/