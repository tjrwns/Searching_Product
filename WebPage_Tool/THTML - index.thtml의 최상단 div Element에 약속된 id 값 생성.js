var PATH000 = "D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/";
var PATH001 = "D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage_Tool/";

//----------------------------------------------------------------------------------------------------;

var FNS = {
	getHTMLIDFromPath : function( path ){
		var HTMLElementID = "ui/" + path.replace( PATH000, "" ).replace( ".thtml", "" );
		return HTMLElementID;
	}
};

//----------------------------------------------------------------------------------------------------;

var FN0 = function( htmlFilePath ){
	var fStr = SUtilFsReadStream.getFile( htmlFilePath ).toString();

	//빈 파일인지 체크;
	//if( 0 == fStr.length )
	{
		var HTMLElementID = FNS.getHTMLIDFromPath( htmlFilePath );
			global.console.log( HTMLElementID );

		//ui_template/Page/의 thtml인지 체크
		if( -1 != htmlFilePath.indexOf( "/ui_template/Page/" ) )
		{
			var html = FN0.TEMPLATE_DIV_PAGE;
			var a_nm = HTMLElementID.split( "/" );

			html = html.replace( /\{\{id\}\}/gi, HTMLElementID )
				.replace( "{{nm}}", a_nm[ a_nm.length - 2 ] );

			/*///전체 강제 재작성;
			SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			/*/
			if( -1 == fStr.indexOf( HTMLElementID ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//ui/Page/Main/index/index 두번 들어간 실수 수정;
			else if( -1 != fStr.indexOf( HTMLElementID + "/index" ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//*/
		}
		//ui_template/Popup/의 thtml인지 체크;
		else if( -1 != htmlFilePath.indexOf( "/ui_template/Popup/" ) )
		{
			var html = FN0.TEMPLATE_DIV_POPUP;
			var a_nm = HTMLElementID.split( "/" );

			html = html.replace( /\{\{id\}\}/gi, HTMLElementID )
				.replace( "{{nm}}", a_nm[ a_nm.length - 2 ] );

			/*///전체 강제 재작성;
			SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			/*/
			if( -1 == fStr.indexOf( HTMLElementID ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//ui/Popup/Main/index/index 두번 들어간 실수 수정;
			else if( -1 != fStr.indexOf( HTMLElementID + "/index" ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//*/
		}
		else
		{
			var html = FN0.TEMPLATE_DIV;
			var a_nm = HTMLElementID.split( "/" );

			html = html.replace( /\{\{id\}\}/gi, HTMLElementID )
				.replace( "{{nm}}", a_nm[ a_nm.length - 2 ] );

			/*///전체 강제 재작성;
			SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			/*/
			if( -1 == fStr.indexOf( HTMLElementID ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//ui/Page/???/index/index 두번 들어간 실수 수정;
			else if( -1 != fStr.indexOf( HTMLElementID + "/index" ) )
			{
				SUtilFsWriteStream.writeFile_UTF8( htmlFilePath, html );
			}
			//*/
		}
	}

	//JS;
	var path = htmlFilePath.replace( ".thtml", ".js" );
	var fStr = SUtilFsReadStream.getFile( path ).toString();
	//빈 파일인지 체크;
	if( 0 == fStr.length )
	{
		var HTMLElementID = FNS.getHTMLIDFromPath( htmlFilePath );
		var js = FN0.TEMPLATE_JS.replace( /<!=PATH_ID=!>/gi, HTMLElementID );
		SUtilFsWriteStream.writeFile_UTF8( path, js );
	}
};
FN0.TEMPLATE_DIV = `<div id="{{id}}">
{{nm}}
</div>`;

FN0.TEMPLATE_DIV_PAGE = `<include-html>./ui_include/SYS0310/Page/000-----index-----First.html</include-html>
<div id="{{id}}">
{{nm}}
</div>
<SCRIPT type="text/javascript">
	window.initialized = function(){
		var HOST = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" );

		//JS;
		var f = SUtilTemplateHTML.addJS__URLToHead;
			f( HOST + "/{{id}}.js" );
	};
</SCRIPT>
<include-html>./ui_include/SYS0310/Page/000-----index-----Last.html</include-html>`;

FN0.TEMPLATE_DIV_POPUP = `<include-html>./ui_include/SYS0310/Popup/000-----index-----First.html</include-html>
<div id="{{id}}">
{{nm}}
</div>
<SCRIPT type="text/javascript">
	window.initialized = function(){
		var HOST = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" );

		//JS;
		var f = SUtilTemplateHTML.addJS__URLToHead;
			f( HOST + "/{{id}}.js" );
	};
</SCRIPT>
<include-html>./ui_include/SYS0310/Popup/000-----index-----Last.html</include-html>`;

FN0.TEMPLATE_JS = SUtilFsReadStream.getFile( PATH001 + "THTML - index.thtml의 최상단 div Element에 약속된 id 값 생성 - index.tjs" ).toString();

//----------------------------------------------------------------------------------------------------;

var a =
[
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/index.thtml",

	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/Calendar/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/ColorPicker/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/Map/Leaflet/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/Scheduler/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Application/SiteMap/index.thtml",





	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/Counter/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/Counter+자동이동/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/Marker--DIV-Label/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/Map/Leaflet/_CATEGORY-COUNTRY_PANNING/index.thtml",





	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Calendar/index.thtml",

	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/Area/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/Bar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/Donut/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/Gauge/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/HBar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/Line/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/MultiBar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/Pie/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/Scatter/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Chartist/StackedBar/index.thtml",


	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Bar/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Bar-H/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Bar-V/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Bubble/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Calendar/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Calendar-Heatmap-H/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Calendar-Heatmap-V/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Candlestick/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Dataset/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Doughnut/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Funnel/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Gauge/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Graph/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Heatmap/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Heatmap-Polar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Line/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Map-Lines/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Parallel/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Pie/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Pie-Calendar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Radar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Sankey/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Scatter/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Scatter-SingleAxis/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Sunburst/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/ThemeRiver/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Tree/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/EChart/Treemap/index.thtml",


	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Sparkline/Area/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Sparkline/Bar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Sparkline/Boxplot/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Sparkline/Bullet/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Sparkline/Discrete/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Sparkline/Line/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Sparkline/Pie/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Chart/Sparkline/Tristate/index.thtml",


	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/ColorPicker/index.thtml",


	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/Calendar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/ColorPicker/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/DatePicker/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/Layout/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/List/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/Message/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/Popup/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/Ribbon/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/Tree/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/5.1.0/Windows/index.thtml",


	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/Calendar/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/ColorPicker/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/DatePicker/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/Layout/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/List/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/Message/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/Popup/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/Ribbon/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/Tree/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/DHTMLX/6.2.2/Windows/index.thtml",


	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/FancyGrid/Basic/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/FancyGrid/Search/index.thtml",


	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Map/Leaflet/index.thtml",


	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/Scheduler/index.thtml",

	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/SearchBox/index.thtml",


	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/_Complex/EChart+FancyGrid/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/_Complex/EChart+FancyGrid/Bar+Grid/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/_Complex/EChart+FancyGrid/Line+Grid/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/_Component/_Complex/EChart+FancyGrid/Pie+Grid/index.thtml",



	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/검색목록--카드/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/검색목록--카드--통계차트/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/검색-패널--브랜드/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/검색-패널--상품/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/점유율--국가/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/점유율--브랜드/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/점유율--사이트/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/현황판--국가/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/현황판--브랜드/index.thtml",
	"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/Page/현황판--사이트/index.thtml",





	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/_TEMPLATE는 무시 한다;
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/_TEMPLATE/Application/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/_TEMPLATE/Page/index.thtml",
	//"D:/GitHub_B2LiNK/B2LiNK-OnSight-Dev/WebPage/root/ui_template/_TEMPLATE/Popup/index.thtml"
]
;

a.forEach( function( item ){
	FN0( item );
	global.console.log( item );
});