/*/
http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/List/index.html?width=500&height=500

//사이즈를 %로 적용;
http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/List/index.html?width=100%25&height=500
http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/List/index.html?width=100%25&height=800

//사이즈를 %로 적용 - Height는 적용 안됨;
http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/List/index.html?width=100%25&height=100%25

http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/List/index.html?url=http://localhost:49781/ui/Page/_Component/DHTMLX/6.2.2/List/index.json
http://dnsproxy.shop:49781/ui/Page/_Component/DHTMLX/6.2.2/List/index.html?url=http://dnsproxy.shop:49781/ui/Page/_Component/DHTMLX/6.2.2/List/index.json
//*/
//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/Page/_Component/DHTMLX/6.2.2/List/index.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 이 Private Scope 영역의 메인 객체
 * this 키워드는 사용하지 않는 다.(JS 버전 별 문제 타파)
 * Public Instance 들의 Reference를 담아 마지막에 반환 한다.
 * UI 호출 API를 통해 사용할시 이 _THIS가 els[ 1 ](JavaScript Contriller Object)가 된다.
 * @const
 * @property
 */
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Application({});
var _THIS = window.SYS0310_UI_INTERFACE.interface.Component({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Module({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Page({});
//var _THIS = window.SYS0310_UI_INTERFACE.interface.Popup({});

//----------------------------------------------------------------------------------------------------;

//	IMPORT;

//----------------------------------------------------------------------------------------------------;

(function(){
	var HOST = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

	var f = window.b2link.util.importJS__Reuse;
		//f( HOST + "/libs/FancyGrid/import-js.js" );

	//CSS;
	var f = SUtilTemplateHTML.addCSS__URLToHead;
		f( HOST + "/libs/dhtmlx/6.2.2/suite.css" );
	//JS;
	var f = window.b2link.util.importJS__Reuse;
	//var f = SUtilTemplateHTML.addJS__URLToHead;
		f( HOST + "/libs/dhtmlx/6.2.2/suite.js" );
		//f( HOST + "/libs/dhtmlx/6.2.2/component/List.js" );
})();

//----------------------------------------------------------------------------------------------------;

//	PACKAGE;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

/**
 * @const
 * @property
 */
var _CLASS = (function(){
	return {
	};
})();

/**
 * _IDS.ROOT는 약속된 명명
 * 이 컨트롤러 객체의 대상이 되는 최상위 HTMLElement는 ROOT로 지칭한다
 * @const
 * @property
 */
var _IDS = (function(){
	return {
		ROOT : "ui/Page/_Component/DHTMLX/6.2.2/List/index"
	};
})();

/**
 * _ELS.ROOT는 약속된 명명
 * 이 컨트롤러 객체의 대상이 되는 최상위 HTMLElement는 ROOT로 지칭한다
 * @const
 * @property
 */
var _ELS = (function(){
	var o = {
		ROOT : window.document.getElementById( _IDS.ROOT )
	};

	//window.b2link.STATIC.CONST.ROOT_DIV.EL_APPLICATION.appendChild( o.ROOT );
	//window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED.appendChild( o.ROOT );
	window.b2link.element.mouseEnable( o.ROOT );
	//window.b2link.element.mouseDisable( o.ROOT );

	var f0 = window.b2link.element.getElementByClassName;

	o.INSTALL_UI = f0( o.ROOT, "ui/Page/_Component/DHTMLX/6.2.2/List/index--INSTALL_UI" );
	o.DIV__LIST = f0( o.ROOT, "ui/Page/_Component/DHTMLX/6.2.2/List/index--list" );
	o.DIV__LIST.id += o.DIV__LIST.className + "--" + SUtilMath.getUnique();
	o.DIV__PAGGING = f0( o.ROOT, "ui/Page/_Component/DHTMLX/6.2.2/List/index--pagger" );

	return o;
})();

/**
 * @const
 * @property
 */
var _DHTMLX = (function(){
	var o = {};
		o.list = null;

	return o;
})();

/**
 * 접속 URL에서 URI PARAMETERS를 추출 하여 초기값을 반영한다.
 * _setData, setWidth, setHeight등 각종 Setter또는 set Method에서 필요한 데이터를 설정하는 대상 객체
 *
 * @property {Array|Object} 필요에 따라 원하는 자료구조로 선언 가능, 기왕이면 Object로
 * <code>
 	//데이터 모델 형태 작성;
	//필요한 상태에 따라 프로퍼티 가감이 자유롭게 가능하다.;
	{
		, data : ""
		, height : {Number}
		, width : {Number}
		, url : ""
	}
 * </code>
 */
var _DATA = (function(){

	//Origin에서 URI Parameter를 추출한다.;
	var d = SUtilLocation.getObjectFromParamters();

	//초기 값으로 데이터를 불러올수 있는 url을 넘겨 받을 수 있다.;
	if( d.url )
	{
		//URI Parameter중 url은 decoding 한다.;
		d.url = window.b2link.uri.decodeURIComponent( d.url );

		//비동기 필요 데이터 요청;
		window.b2link.xhr.req_String( d.url, function( responseData ){

			//ERROR - 데이터가 없음;
			if( !responseData )
			{
				window.TtwLog.error( "[ ERROR ] - _DATA 생성 오류 : " + responseData );
				return;
			}

			var data = JSON.parse( responseData );

			//d.data;
			d.data = data;

			//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
			_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( d );
		});

		return {};
	}

	////[ SAMPLE ] - [ S ] - 자동 삭제;
	//아무 데이터 없이 호출시 샘플로 들어가는 데이터;
	//window.b2link.event.INITIALIZED 이벤트 리스너;
	_THIS.super.addEvent__INITIALIZED( _ELS.ROOT, function( event ){ _THIS.draw( null, null ); });

	return {
		DHTMLX : {
			//*/
			data : [
				{"value": "Learning DHTMLX Suite UI","isbn": "184969933X","pageCount": 132,"publishedDate": {"$date": "2013-10-25T00:00:00.000-0700"},"thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/I/61ot4vfL9HL.jpg","shortDescription": "Create your first single-page JavaScript application using multiple DHTMLX components and a touch of HTML5","longDescription": "Learning DHTMLX Suite UI is for web designers who have a basic knowledge of JavaScript and who are looking for powerful tools that will give them an extra edge in their own application development. This book is also useful for experienced developers who wish to get started with DHTMLX without going through the trouble of learning its quirks through trial and error. Readers are expected to have some knowledge of JavaScript, HTML, Document Object Model, and the ability to install a local web server.","status": "PUBLISH","authors": ["Eli Geske"],"categories": ["Web Development","JavaScript"]}
				,{"value": "Unlocking Android","isbn": "1933988673","pageCount": 416,"publishedDate": {"$date": "2009-04-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg","shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.","longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.WHAT'S INSIDE:* Android's place in the market* Using the Eclipse environment for Android development* The Intents - how and why they are used* Application classes:o Activityo Serviceo IntentReceiver * User interface design* Using the ContentProvider to manage data* Persisting data with the SQLite database* Networking examples* Telephony applications* Notification methods* OpenGL, animation & multimedia* Sample Applications","status": "PUBLISH","authors": ["W. Frank Ableson","Charlie Collins","Robi Sen"],"categories": ["Open Source","Mobile"]}
				,{"value": "Android in Action, Second Edition","isbn": "1935182722","pageCount": 592,"publishedDate": {"$date": "2011-01-14T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg","shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ","longDescription": "When it comes to mobile apps, Android can do almost anything and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ","status": "PUBLISH","authors": ["W. Frank Ableson","Robi Sen"],"categories": ["Java"]}
				,{"value": "Specification by Example","isbn": "1617290084","pageCount": 0,"publishedDate": {"$date": "2011-06-03T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg","status": "PUBLISH","authors": ["Gojko Adzic"],"categories": ["Software Engineering"]}
				,{"value": "Flex 3 in Action","isbn": "1933988746","pageCount": 576,"publishedDate": {"$date": "2009-02-02T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg","longDescription": "New web applications require engaging user-friendly interfaces and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.Interesting themes, styles, and skinsIt's in there.Working with databasesYou got it.Interactive forms and validationYou bet.Charting techniques to help you visualize dataBam!The expert authors of Flex 3 in Action have one goal to help you get down to business with Flex 3. Fast.Many Flex books are overwhelming to new users focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.","status": "PUBLISH","authors": ["Tariq Ahmed with Jon Hirschi","Faisal Abid"],"categories": ["Internet"]}
				,{"value": "Collective Intelligence in Action","isbn": "1933988312","pageCount": 425,"publishedDate": {"$date": "2008-10-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg","longDescription": "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at onceIdentifying the wants, needs, and knowledge of internet users can be like listening to a mob.In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles the collective intelligence locked in the data people leave behind as they surf websites, post blogs, and interact with other users.Collective Intelligence in Action is a hands-on guidebook for implementing collective-intelligence concepts using Java. It is the first Java-based book to emphasize the underlying algorithms and technical implementation of vital data gathering and mining techniques like analyzing trends, discovering relationships, and making predictions. It provides a pragmatic approach to personalization by combining content-based analysis with collaborative approaches.This book is for Java developers implementing collective intelligence in real, high-use applications. Following a running example in which you harvest and use information from blogs, you learn to develop software that you can embed in your own applications. The code examples are immediately reusable and give the Java developer a working collective intelligence toolkit.Along the way, you work with, a number of APIs and open-source toolkits including text analysis and search using Lucene, web-crawling using Nutch, and applying machine learning algorithms using WEKA and the Java Data Mining (JDM) standard.","status": "PUBLISH","authors": ["Satnam Alag"],"categories": ["Internet"]}
				,{"value": "Zend Framework in Action","isbn": "1933988320","pageCount": 432,"publishedDate": {"$date": "2008-12-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg","shortDescription": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.","longDescription": "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result. For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.","status": "PUBLISH","authors": ["Rob Allen","Nick Lo","Steven Brown"],"categories": ["Web Development"]}
				,{"value": "Flex on Java","isbn": "1933988797","pageCount": 265,"publishedDate": {"$date": "2010-10-15T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg","shortDescription": " A beautifully written book that is a must have for every Java Developer. Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.","longDescription": "In the demo, a hip designer, a sharply-dressed marketer, and a smiling, relaxed developer sip lattes and calmly discuss how Flex is going to make customers happy and shorten the workday all while boosting the bottom line. The software systems they're using have been carefully selected and built from the ground up to work together seamlessly. There are no legacy systems, data, or competing business concerns to manage.Cut to reality.You're a Java developer. The marketing guy tells you that \"corporate\" wants a Flex-based site and you have to deliver it on top of what you already have. Your budgetDon't even ask. \"Make it look like the Discovery channel or something.\"Flex on Java assumes you live in the real world not the demo. This unique book shows you how to refactor an existing web application using the server-side you already know. You'll learn to use Flex 3 in concert with Spring, EJB 3, POJOs, JMS, and other standard technologies. Wherever possible, the examples use free or open source software.The authors start with a typical Java web app and show you how to add a rich Flex interface. You also learn how to integrate Flex into your server-side Java via the BlazeDS framework, Adobe's open-source remoting and web messaging technology for Flex.The book shows you how to deploy to not only the web but also to the desktop using the Adobe Integrated Runtime (AIR). You will learn how to integrate Flex into your existing applications in order to build a next generation application that will delight users.Flex on Java is approachable for anyone beginning Java and Flex development.","status": "PUBLISH","authors": ["Bernerd Allmon","Jeremy Anderson"],"categories": ["Internet"]}
				,{"value": "Griffon in Action","isbn": "1935182234","pageCount": 375,"publishedDate": {"$date": "2012-06-04T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg","shortDescription": "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.","longDescription": "Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development","status": "PUBLISH","authors": ["Andres Almiray","Danno Ferrin","","James Shingler"],"categories": ["Java"]}
				,{"value": "OSGi in Depth","isbn": "193518217X","pageCount": 325,"publishedDate": {"$date": "2011-12-12T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg","shortDescription": "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.","longDescription": "A good application framework greatly simplifies a developer's task by providing reusable code modules that solve common, tedious, or complex tasks. Writing a great framework requires an extraordinary set of skills-ranging from deep knowledge of a programming language and target platform to a crystal-clear view of the problem space where the applications to be developed using the framework will be used.OSGi Application Frameworks shows a Java developer how to build frameworks based on the OSGi service platform. OSGi, an emerging Java-based technology for developing modular applications, is a great tool for framework building. A framework itself, OSGi allows the developer to create a more intuitive, modular framework by isolating many of the key challenges the framework developer faces.This book begins by describing the process, principles, and tools you must master to build a custom application framework. It introduces the fundamental concepts of OSGi, and then shows you how to put OSGi to work building various types of frameworks that solve specific development problems.OSGi is particularly useful for building frameworks that can be easily extended by developers to create domain-specific applications. This book teaches the developer to break down a problem domain into its abstractions and then use OSGi to create a modular framework solution. Along the way, the developer learns software engineering practices intrinsic to framework building that result in systems with better software qualities, such as flexibility, extensibility, and maintainability.Author Alexandre Alves guides you through major concepts, such as the definition of programming models and modularization techniques, and complements them with samples that have real applicability using industry-proved technologies, such as Spring-DM and Equinox.","status": "PUBLISH","authors": ["Alexandre de Castro Alves"],"categories": ["Java"]}
				,{"value": "Flexible Rails","isbn": "1933988509","pageCount": 592,"publishedDate": {"$date": "2008-01-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg","shortDescription": "\"Flexible Rails created a standard to which I hold other technical books. You definitely get your money's worth.\"","longDescription": "Rails is a fantastic tool for web application development, but its Ajax-driven interfaces stop short of the richness you gain with a tool like Adobe Flex. Simply put, Flex is the most productive way to build the UI of rich Internet applications, and Rails is the most productive way to rapidly build a database-backed CRUD application. Together, they're an amazing combination.Flexible Rails is a book about how to use Ruby on Rails and Adobe Flex to build next-generation rich Internet applications (RIAs). The book takes you to the leading edge of RIA development, presenting examples in Flex 3 and Rails 2.This book is not an exhaustive Ruby on Rails tutorial, nor a Flex reference manual. (Adobe ships over 3000 pages of PDF reference documentation with Flex.) Instead, it's an extensive tutorial, developed iteratively, how to build an RIA using Flex and Rails together. You learn both the specific techniques you need to use Flex and Rails together as well as the development practices that make the combination especially powerful.The example application built in the book is MIT-licensed, so readers can use it as the basis for their own applications. In fact, one reader has already built an agile project management tool based on the book example!With this book, you learn Flex by osmosis. You can read the book and follow along even if you have never used Flex before. Consider it \"Flex Immersion.\" You absorb the key concepts of Flex as you go through the process of building the application.You will also learn how Flex and Rails integrate with HTTPService and XML, and see how RESTful Rails controller design gracefully supports using the same controller actions for Flex and HTML clients. The author will show you how Cairngorm can be used to architect larger Flex applications, including tips to use Cairngorm in a less verbose way with HTTPService to talk to Rails.Flexible Rails is for both Rails developers who are interested in Flex, and Flex developers who are interested in Rails. For a Rails developer, Flex allows for more dynamic and engaging user interfaces than are possible with Ajax. For a Flex developer, Rails provides a way to rapidly build the ORM and services layer of the application.","status": "PUBLISH","authors": ["Peter Armstrong"],"categories": ["Web Development"]}
				,{"value": "Hello! Flex 4","isbn": "1933988762","pageCount": 258,"publishedDate": {"$date": "2009-11-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg","shortDescription": "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr a mashup that lets you follow your friends by showing their tweets on a Yahoo map.","longDescription": "With Flex 4 you can easily add color and life to your web applications by introducing dynamic user features, slick transitions, and eye-catching animations. Flex also provides powerful data handling capabilities so you can build industrial-strength applications. And it's open source, so you can get started without forking over a lot of your hard-earned cash.We think it should be just as much fun to learn Flex as it is to use Flex. Hello! Flex 4 shows you everything you need to know to get started with Flex 4 without bogging you down in obscure detail or academic edge cases. In this entertaining, hands-on book, you'll quickly move from Hello World into the techniques you'll need to use Flex effectively.You'll start by progressing through 26 self-contained workshop items, which include everything from small one-page examples, to a 3D rotating haiku, to building a Connect Four game. Finally, in the last chapter you'll build a full Flex application called 'SocialStalkr': an interesting mashup of Twitter and Yahoo Maps that lets you 'stalk' your friends by showing specially formatted Twitter tweets on a Yahoo map.","status": "PUBLISH","authors": ["Peter Armstrong"],"categories": ["Internet"]}
				,{"value": "Coffeehouse","isbn": "1884777384","pageCount": 316,"publishedDate": {"$date": "1997-07-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg","shortDescription": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.","longDescription": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web. The purpose is to capture the zeitgeist of the web's creative community, and to give readers a chance to enjoy some of the best and most notable original works that have appeared in this form. It showcases over forty individual web writers, among them Joseph Squier, Martha Conway, Jason Snell, David Alexander, Carl Steadman and Walter Miller. The intent is to show the variety and vitality of the web's blossoming literary \"scene,\" and to capture the unique and highly iconoclastic \"personality\" of the web community.","status": "PUBLISH","authors": ["Levi Asher","Christian Crumlish"],"categories": ["Miscellaneous"]}
				,{"value": "Team Foundation Server 2008 in Action","isbn": "1933988592","pageCount": 344,"publishedDate": {"$date": "2008-12-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg","longDescription": "In complex software projects, managing the development process can be as critical to success as writing the code itself. A project may involve dozens of developers, managers, architects, testers, and customers, hundreds of builds, and thousands of opportunities to get off-track. To keep tabs on the people, tasks, and components of a medium- to large-scale project, most teams use a development system that allows for easy monitoring, follow-up, and accountability.Microsoft Team Foundation Server 2008 (TFS), the server component of Microsoft's Visual Studio Team System (VSTS), provides a powerful collaborative platform for software-development teams. The product offers an integrated toolset for tracking work items, creating test cases, managing source code, generating builds, constructing database schemas, and so on. Because in software development one size does not fit all, TFS provides process customization, project management, and reporting capabilities to build solutions around your requirements.Team Foundation Server 2008 in Action is a hands-on guide to Team Foundation Server 2008. Written for developers with a good handle on TFS basics, this book shows you how to solve real-life problems. It's not a repetition of Microsoft's product documentation. Team Foundation Server 2008 in Action is a practitioner's handbook for how to work with TFS under common constraints. This book walks you through real-life software engineering problems based on hundreds of hours of TFS experience.You'll benefit from expert author Jamil Azher's extensive interactions with members of Microsoft's TFS team and MVPs, survey feedback from the author's blog, and interviews with organizations and user groups using TFS. Instead of just offering a high-level overview, the book provides detailed solutions for solving common and not-so-common problems using TFS. It discusses the strengths as well as weaknesses of TFS, and suggests appropriate problem resolution steps, workarounds, or custom solutions.","status": "PUBLISH","authors": ["Jamil Azher"],"categories": ["Microsoft .NET"]}
				,{"value": "Brownfield Application Development in .NET","isbn": "1933988711","pageCount": 550,"publishedDate": {"$date": "2010-04-16T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg","shortDescription": "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.","longDescription": "It's easy to get excited about building a new software project from scratch. So-called \"greenfield\" projects often involve learning new technology and the opportunity for experimentation. Working on established software projects may seem less glamorous.Most software developers have inherited a monolithic application where the day-to-day tasks involve maintenance, incremental improvements, or even cleaning up the mess another programmer left behind. These legacy or brownfield projects often have tightly coupled components, low cohesion, and poor separation of concerns, making them fragile and resistant to change.Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.Starting with the build process and the introduction of unit tests, the authors show you how to set up the application so that in later chapters, you can make incremental changes aimed at decoupling components from each other. Each practice introduced will increase your confidence and ability to make subsequent changes to your code.As the book proceeds, the authors introduce frameworks and tools commonly used today while still approaching the subject from a conceptual level so that you can substitute alternate tools as appropriate. This book examines the reasons why a tool is necessary, not the tool itself. Because the book is based on the authors' experiences, Brownfield Application Development in .Net moves beyond the theories and shows you the techniques you need to be successful.","status": "PUBLISH","authors": ["Kyle Baley","Donald Belcham"],"categories": ["Microsoft"]}
				,{"value": "MongoDB in Action","isbn": "1935182870","pageCount": 0,"publishedDate": {"$date": "2011-12-12T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg","shortDescription": "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.","longDescription": "MongoDB is a document-oriented database that's highly scalable and delivers very high-performance, especially with massive data sets that need to be spread across multiple servers. It blends the things you expect with any database like indexing, querying, and high availability with powerful new features like easy horizontal scaling (\"auto-sharding\"), map/reduce aggregation, and a flexible document data model to support dynamic schemas.MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.Along the way, all of MongoDB's major features are covered, including:* Indexes and explain plans for efficient queries* Atomic operations for managing simple data structures and manipulating complex, rich documents* GridFS for storing and managing large binary objects (images, videos, etc.) in MongoDB* Map-reduce for custom aggregations and reporting* Master-slave replication and replica sets for automated failover* Auto-sharding for automated horizontal scalingThe handy reference section on schema design patterns will help ease the transition from the relational data model of SQL to MongoDB's document-based data model. The numerous, detailed examples are implemented in Ruby and include comprehensive explanations.MongoDB has been gaining traction in the developer community for its speed, flexibility, scalability, and ease of use. With production deployments that include SourceForge, Foursquare, and Shutterfly, MongoDB is proving to be a robust and reliable database system that keeps developers happy. Covering everything from installation to application design to deployment, MongoDB In Action is written for the application developer who wants to take advantage of MongoDB and get up and running quickly.","status": "PUBLISH","authors": ["Kyle Banker"],"categories": ["Next Generation Databases"]}
				,{"value": "Jaguar Development with PowerBuilder 7","isbn": "1884777864","pageCount": 550,"publishedDate": {"$date": "1999-08-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta2.jpg","shortDescription": "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.","longDescription": "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.Jaguar Development with PowerBuilder 7 focuses on getting you up to speed on Jaguar and PowerBuilder, and it is packed with code samples to guide you every step of the way. It covers each step involved in application development, from setting up the development environment to deploying a production application.Even a PowerBuilder developer with no experience in distributed technologies or Jaguar CTS will learn what it takes to build an application. Jaguar Development with PowerBuilder 7 covers:Developing Component-centric ApplicationsBuilding Jaguar CTS Components/ClientsCORBAAdaptive SQL AnywhereAdaptive Server Enterpriseand lots more!","status": "PUBLISH","authors": ["Michael Barlotta"],"categories": ["PowerBuilder","Client-Server"]}
				,{"value": "Taming Jaguar","isbn": "1884777686","pageCount": 362,"publishedDate": {"$date": "2000-07-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg","longDescription": "Taming Jaguar is part of the PowerBuilder Developer's series, which includes Distributed Application Development with PowerBuilder 6 and Jaguar Development with PowerBuilder 7.An application server is the heart of your enterprise computing architecture, centralizing your web content, business logic, and access to your data and legacy applications. Sybase's application server, Jaguar CTS, delivers performance, scalability, and flexibility running CORBA , COM, Java/EJB, C++, and PowerBuilder components.If you are looking to adopt Jaguar in your enterprise, look no further. Taming Jaguar shows you how to solve the real-world problems of installing, trouble-shooting, designing, developing, and maintaining a Jaguar application. Topical chapters are organized in a Q & A format making it easy for you to quickly find the solution to your problem. They also provide foundational and background information as well as detailed technical how-tos.Although designed so you can find your problems easily, this book is meant to be read cover-to-cover with each chapter discussing its topic exhaustively.What's inside:J2EE developmentJava ServletsJaguar administration & code balancingEJBsWeb development with PowerDynamoAdvanced component design ","status": "PUBLISH","authors": ["Michael J. Barlotta","Jason R. Weiss"],"categories": ["PowerBuilder"]}
				,{"value": "3D User Interfaces with Java 3D","isbn": "1884777902","pageCount": 520,"publishedDate": {"$date": "2000-08-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg","longDescription": "3D User Interfaces with Java 3D is a practical guide for providing next-generation applications with 3D user interfaces for manipulation of in-scene objects. Emphasis is on standalone and web-based business applications, such as for online sales and mass customization, but much of what this book offers has broad applicability to 3D user interfaces in other pursuits such as scientific visualization and gaming.This book provides an extensive conceptual framework for 3D user interface techniques, and an in-depth introduction to user interface support in the Java 3D API, including such topics as picking, collision, and drag-and-drop. Many of the techniques are demonstrated in a Java 3D software framework included with the book, which also provides developers with many general-purpose building blocks for constructing their own user interfaces.Applications and their use of 3D are approached realistically. The book is geared towards sophisticated user interfaces for the \"everyday user\" who doesn't have a lot of time to learn another application--much less a complicated one--and an everyday computer system without exotic devices like head mounted displays and data gloves. Perhaps the best description of this book is: \"A roadmap from Java 3D to 'Swing 3D'.\"","status": "PUBLISH","authors": ["Jon Barrilleaux"],"categories": ["Java","Computer Graphics"]}
				,{"value": "Hibernate in Action (Chinese Edition)","pageCount": 400,"publishedDate": {"$date": "1999-06-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg","status": "PUBLISH","authors": ["Christian Bauer","Gavin King"],"categories": ["Java"]}
				,{"value": "Java Persistence with Hibernate","isbn": "1932394885","pageCount": 880,"publishedDate": {"$date": "2006-11-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg","shortDescription": "\"...this book is the ultimate solution. If you are going to use Hibernate in your application, you have no other choice, go rush to the store and get this book.\" --JavaLobby","longDescription": "Persistence -- the ability of data to outlive an instance of a program -- is central to modern applications. Hibernate, the most popular Java persistence tool, provides automatic and transparent object/relational mapping so it's a snap to work with SQL databases in Java applications. Hibernate conforms to the new EJB 3.0 and Java Persistence 1.0 standards.Java Persistence with Hibernate explores Hibernate by developing an application that ties together hundreds of individual examples. You'll immediately dig into the rich programming model of Hibernate 3.2 and Java Persistence, working through queries, fetching strategies, caching, transactions, conversations, and more. You'll also appreciate the well-illustrated discussion of best practices in database design, object/relational mapping, and optimization techniques.In this revised edition of Manning's bestselling Hibernate in Action, authors Christian Bauer and Gavin King -- the founder of the Hibernate project -- cover Hibernate 3.2 in detail along with the EJB 3.0 and Java Persistence 1.0 standards.","status": "PUBLISH","authors": ["Christian Bauer","Gavin King"],"categories": ["Java"]}
				,{"value": "JSTL in Action","isbn": "1930110529","pageCount": 480,"publishedDate": {"$date": "2002-07-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bayern.jpg","longDescription": "JSTL is an important simplification of the Java web platform. With JSTL, page authors can now write dynamic pages using standard HTML-like tags and an easy-to-learn expression language. JSTL is a standard from the Java Community Process, and its expression language will become part of JSP 2.0.JSTL in Action shows you how to write rich, dynamic web pages without programming. From simple loops to tricky XML processing, every feature of JSTL is covered and exercised in numerous useful examples. Whether you are a novice page author or an experienced Java programmer, this book shows you easy ways to create powerful web sites.To help readers who don't already have a JSP container run the examples in the book, there's a free companion download here. This bundle contains a ready-to-run JSP container, a JSTL implementation, and all the book's examples.","status": "PUBLISH","authors": ["Shawn Bayern"],"categories": ["Internet"]}
				,{"value": "iBATIS in Action","isbn": "1932394826","pageCount": 384,"publishedDate": {"$date": "2007-01-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg","shortDescription": " Gets new users going and gives experienced users in-depth coverage of advanced features. Jeff Cunningham, The Weather Channel Interactive","longDescription": "Unlike some complex and invasive persistence solutions, iBATIS keeps O/RM clean and simple. It is an elegant persistence framework that maps classes to SQL statements and keeps the learning curve flat. The iBATIS approach makes apps easy to code, test, and deploy. You write regular SQL and iBATIS gives you standard objects for persistence and retrieval. There s no need to change existing database schemas iBATIS is tolerant of legacy databases (even badly designed ones).iBATIS in Action is a comprehensive tutorial on the framework and an introduction to the iBATIS philosophy. Clinton Begin and coauthors lead you through the core features, including configuration, statements, and transactions. Because you ll need more than the basics, it explores sophisticated topics like Dynamic SQL and data layer abstraction. You ll also learn a useful skill: how to extend iBATIS itself. A complete, detailed example shows you how to put iBATIS to work. Topics are clearly organized and easily accessible for reference.","status": "PUBLISH","authors": ["Clinton Begin","Brandon Goodin","Larry Meadors"],"categories": ["Web Development"]}
				,{"value": "Designing Hard Software","isbn": "133046192","pageCount": 350,"publishedDate": {"$date": "1997-02-01T00:00:00.000-0800"},"shortDescription": "\"This book is well written ... The author does not fear to be controversial. In doing so, he writes a coherent book.\" --Dr. Frank J. van der Linden, Phillips Research Laboratories","longDescription": "Have you ever heard, \"I can't define a good design but I know one when I see it\"Designing Hard Software discusses ways to develop software system designs that have the same tangibility and visibility as designs for hard objects like buildings or computer hardware. It emphasizes steps called \"essential tasks\" which result in software specifications that show how each requirement, including robustness and extensibility, will be satisfied. All software developers and managers seeking to develop \"hard\" software will benefit from these ideas.There are six essential tasks necessary for a good design:User (run-time) requirementsDevelopment sponsor (build-time) requirementsDomain informationBehavior identification and allocationBehavior descriptionSoftware system architectureDesigning Hard Software goes beyond the standard software development methodologies such as those by Booch, Rumbaugh, Yourdon, and others, by providing techniques for a complete system architecture as well as explicit measures of the goodness of design. So, \"you define a good design.\"","status": "PUBLISH","authors": ["Douglas W. Bennett"],"categories": ["Object-Oriented Programming","S"]}
				,{"value": "Hibernate Search in Action","isbn": "1933988649","pageCount": 488,"publishedDate": {"$date": "2008-12-21T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg","shortDescription": "\"A great resource for true database independent full text search.\" --Aaron Walker, base2Services","longDescription": "Good search capability is one of the primary demands of a business application. Engines like Lucene provide a great starting point, but with complex applications it can be tricky to implement. It's tough to keep the index up to date, deal with the mismatch between the index structure and the domain model, handle querying conflicts, and so on.Hibernate Search is an enterprise search tool based on Hibernate Core and Apache Lucene. It provides full text search capabilities for Hibernate-based applications without the infrastructural code required by other search engines. With this free, open-source technology, you can quickly add high-powered search features in an intelligent, maintainable way.Hibernate Search in Action is a practical, example-oriented guide for Java developers with some background in Hibernate Core. As the first book to cover Hibernate Search, it guides you through every step to set up full text search functionality in your Java applications. The book also introduces core search techniques and reviews the relevant parts of Lucene, in particular the query capabilities.Hibernate Search in Action also provides a pragmatic, how-to exploration of more advanced topics such as Search clustering. For anyone using Hibernate or JBoss Seam, this book is the definitive guide on how to add or enhance search features in their applications.","status": "PUBLISH","authors": ["Emmanuel Bernard","John Griffin"],"categories": ["Java"]}
				,{"value": "jQuery in Action","isbn": "1933988355","pageCount": 376,"publishedDate": {"$date": "2008-01-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault.jpg","shortDescription": "\"The best-thought-out and researched piece of literature on the jQuery library.\" --From the forward by John Resig, Creator of jQuery","longDescription": "A really good web development framework anticipates your needs. jQuery does more it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its uniquechainingmodel lets you perform multiple operations on a page element in succession, as in( div.elements ).addClass( myClass ).load( ajax_url ).fadeIn()jQuery in Action is a fast-paced introduction and guide. It shows you how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's uniquelab pagesanchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.","status": "PUBLISH","authors": ["Bear Bibeault","Yehuda Katz"],"categories": ["Web Development"]}
				,{"value": "jQuery in Action, Second Edition","isbn": "1935182323","pageCount": 488,"publishedDate": {"$date": "2010-06-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault2.jpg","shortDescription": "jQuery in Action, Second Edition is a fast-paced introduction to jQuery that will take your JavaScript programming to the next level. An in-depth rewrite of the bestselling first edition, this edition provides deep and practical coverage of the latest jQuery and jQuery UI releases. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. This comprehensive guide also teaches you how jQuery interacts with other tools and frameworks and how to build jQuery plugins. ","longDescription": "A really good web development framework anticipates your needs. jQuery does more it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique \"chaining\" model lets you perform multiple operations on a page element in succession. And with version 1.4, there's even more to love about jQuery, including new effects and events, usability improvements, and more testing options.jQuery in Action, Second Edition is a fast-paced introduction and guide. Building on the bestselling first edition, it adds new examples, more labs, and deeper explanations of important features. You ll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.","status": "PUBLISH","authors": ["Bear Bibeault","Yehuda Katz"],"categories": ["Java"]}
				,{"value": "Ruby for Rails","isbn": "1932394699","pageCount": 532,"publishedDate": {"$date": "2006-05-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg","shortDescription": "The word is out: with Ruby on Rails you can build powerful Web applications easily and quickly! And just like the Rails framework itself, Rails applications are Ruby programs. That means you can t tap into the full power of Rails unless you master the Ruby language.","longDescription": "Ruby for Rails helps Rails developers achieve Ruby mastery. Each chapter deepens your Ruby knowledge and shows you how it connects to Rails. You ll gain confidence working with objects and classes and learn how to leverage Ruby s elegant, expressive syntax for Rails application power. And you'll become a better Rails developer through a deep understanding of the design of Rails itself and how to take advantage of it.Newcomers to Ruby will find a Rails-oriented Ruby introduction that s easy to read and that includes dynamic programming techniques, an exploration of Ruby objects, classes, and data structures, and many neat examples of Ruby and Rails code in action.Ruby for Rails: the Ruby guide for Rails developers!","status": "PUBLISH","authors": ["David A. Black"],"categories": ["Web Development"]}
				,{"value": "The Well-Grounded Rubyist","isbn": "1933988657","pageCount": 520,"publishedDate": {"$date": "2009-04-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black2.jpg","shortDescription": "What would appear to be the most complex topic of the book is in fact surprisingly easy to assimilate, and one realizes that the efforts of the author to gradually lead us to a sufficient knowledge of Ruby in order to tackle without pain the most difficult subjects, bears its fruit. Eric Grimois, Developpez.com","longDescription": "Interest in Ruby has exploded. Developers discovering this elegant, dynamic language quickly learn that Ruby is a powerful alternative to traditional static languages like Java or C++. It runs in most operating environments and can handle virtually any programming task you throw at it. Ruby code is clean and elegant. Best of all, Ruby is dynamic, which means that it's designed to react at runtime to changes in an application's environment or requirements.The Well-Grounded Rubyist takes you from interested novice to proficient practitioner. It's a beautifully written tutorial that begins with the basic steps to get your first Ruby program up and running and goes on to explore sophisticated topics like callable objects, reflection, and threading The book concentrates on the language, preparing you for any way you may choose to use Ruby. Whether the topic is simple or tough, the book's easy-to-follow examples and explanations give you immediate confidence as you build your Ruby programming skills.The Well-Grounded Rubyist is a thoroughly revised and updated edition of the best-selling Ruby for Rails. In this new book, expert author David A. Black moves beyond Rails and presents a broader view of Ruby. It covers Ruby 1.9, and keeps the same sharp focus and clear writing that made Ruby for Rails stand out.It's no wonder one reader commented: \"The technical depth is just right to not distract beginners, yet detailed enough for more advanced readers.\"","status": "PUBLISH","authors": ["David A. Black"],"categories": ["Programming"]}
				,{"value": "Website Owner's Manual","isbn": "1933988452","pageCount": 296,"publishedDate": {"$date": "2009-10-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/boag.jpg","shortDescription": "Website Owner's Manual helps you form a vision for your site, guides you through the process of selecting a web design agency, and gives you enough background information to make intelligent decisions throughout the development process. This book provides a jargon-free overview of web design, including accessibility, usability, online marketing, and web development techniques. You'll gain a practical understanding of the technologies, processes, and ideas that drive a successful website.","longDescription": "Just because you're responsible for your organization's web presence doesn't mean you know how to build a website. The job of planning, launching, and managing a site often falls to people who have little or no experience in web design or development. Website Owner's Manual is a book for the thousands of marketers, IT managers, project leaders, and business owners who need to put a website in place and keep it running with a minimum of trouble.Website Owner's Manual helps you form a vision for your site, guides you through the process of selecting a web design agency, and gives you enough background information to make intelligent decisions throughout the development process. This book provides a jargon-free overview of web design, including accessibility, usability, online marketing, and web development techniques. You'll gain a practical understanding of the technologies, processes, and ideas that drive a successful website.","status": "PUBLISH","authors": ["Paul A. Boag"],"categories": ["Internet"]}
				,{"value": "ASP.NET 4.0 in Practice","isbn": "1935182463","pageCount": 504,"publishedDate": {"$date": "2011-05-15T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bochicchio.jpg","shortDescription": "ASP.NET 4.0 in Practice contains real world techniques from well-known professionals who have been using ASP.NET since the first previews.","longDescription": "ASP.NET is an established technology to build web applications using Microsoft products. It drives a number of enterprise-level web sites around the world, but it can be scaled for projects of any size. The new version 4.0 is an evolutionary step: you will find a lot of new features that you will be able to leverage to build better web applications with minimal effort.ASP.NET 4.0 in Practice contains real world techniques from well-known professionals who have been using ASP.NET since the first previews. Using a practical Problem-Solution-Discussion format, it will guide you through the most common scenarios you will face in a typical ASP.NET application, and provide solutions and suggestions to take your applications to another level.","status": "PUBLISH","authors": ["Daniele Bochicchio","Stefano Mostarda","","Marco De Sanctis"],"categories": ["Microsoft .NET"]}
				,{"value": "Hello! Python","isbn": "1935182080","pageCount": 350,"publishedDate": {"$date": "2012-02-13T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/briggs.jpg","shortDescription": "Hello! Python fully covers the building blocks of Python programming and gives you a gentle introduction to more advanced topics such as object oriented programming, functional programming, network programming, and program design. New (or nearly new) programmers will learn most of what they need to know to start using Python immediately.","longDescription": "Learn Python the fast and fun way! Hello! Python is a fully-illustrated, project-driven tutorial designed to get you up and running with Python, no experience required. It's full of projects that help you learn the way most programmers do one step at a time, starting with the basics, and then applying your new skills in useful programs.Hello! Python fully covers the building blocks of Python programming and gives you a gentle introduction to more advanced topics such as object oriented programming, functional programming, network programming, and program design. New (or nearly new) programmers will learn most of what they need to know to start using Python immediately.The book presents several practical projects, including games, business, and graphical applications. Each example provides a solid base for you to develop your own programs. As you dig into Python, you'll see how programs are created, and the reasons behind the technical decisions.The book covers Python's large standard library gradually and in the context of sample apps, so the reader isn't overwhelmed with a large number of library functions to absorb all at once. Upon completing the book, the reader will have a good grasp of Python, know several technologies and libraries related to Python and be able to identify many resources for future growth as a programmer.","status": "PUBLISH","authors": ["Anthony Briggs"],"categories": ["Python"]}
				,{"value": "PFC Programmer's Reference Manual","isbn": "1884777554","pageCount": 368,"publishedDate": {"$date": "1998-06-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brooks.jpg","longDescription": "PFC Programmers' Reference Manual provides information that should prove indispensible for the PowerBuilder programmer trying to learn the PowerBuilder Foundation Classes. It lists all of the objects and functions that they might use for a project with notes from the author on each function. Service-based architecture and appropriate object-oriented techniques are stressed throughout.The more difficult objects and services are given special attention; these are the ones that are sure to enhance your image as an expert in this emerging technology. The text is written with the same easy-to-understand prose that has marked the PowerBuilder Dojo as one of the premier PowerBuilder sites worldwide.At first, the programmer will find this book a comprehensive guide to the wide scope of these libraries. Later it will serve as a handy memory tool for finding exactly what is needed at implementation time.The manager will find this book an invaluable source for understanding which tools are available for immediate implementation.PFC Programmers' Reference Manual covers PowerBuilder version 6 as well as version 5","status": "PUBLISH","authors": ["Richard Brooks"],"categories": ["PowerBuilder"]}
				,{"value": "Graphics File Formats","isbn": "133034054","pageCount": 484,"publishedDate": {"$date": "1995-06-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brown.jpg","longDescription": "Graphics File Formats is a comprehensive guide to the file formats used in computer graphics and related areas. It discusses implementation and design of file formats in a readable style focusing on the basic issues important for the evaluation or development of file formats, includingdata typesdesign goalscolordata organizationdata encodingdata compressionclassificationand conversionThe second part of the book provides summaries of over 50 graphics file formats in commercial use, such as CGM, DDES, FITS, MPEG, PICT, PostScript, TIFF, QuickTime, RIB, SunRaster, and X bitmap. Following a uniform organization, these summaries are handy reference sources for those needing basic information on these formats.Written by two computer experts, this book is intended for graphics professionals, programmers and all those in commercial, engineering and scientific applications areas who need to make decisions related to file formats from graphical data.","status": "PUBLISH","authors": ["C. Wayne Brown","Barry J. Shepherd"],"categories": ["Computer Graphics"]}
				,{"value": "Visual Object Oriented Programming","isbn": "131723979","pageCount": 280,"publishedDate": {"$date": "1995-02-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/burnett.jpg","longDescription": "This first book on the union of two rapidly growing approaches to programming--visual programming and object technology--provides a window on a subject of increasing commercial importance. It is an introduction and reference for cutting-edge developers, and for researchers, students, and enthusiasts interested in the design of visual OOP languages and environments.Visual Object-Oriented Programming includes chapters on both emerging research and on a few classic systems, that together can help those who design visual object-oriented programming systems avoid some known pitfalls. The book contains an experience report on the use of available visual programming languages in a commercial setting, and chapters, by some of the leaders of this cutting-edge subject, covering systems such as Prograph, VIPR, PURSUIT, ThingLab II, Vampire, Forms/3, Self's environment, Vista, SPE, and Cerno.","status": "PUBLISH","authors": ["Margaret M. Burnett","Adele Goldberg","","Ted G. Lewis"],"categories": ["Programming"]}
				,{"value": "iOS in Practice","isbn": "1617291269","pageCount": 325,"publishedDate": {"$date": "2013-11-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cahill.jpg","status": "PUBLISH","authors": ["Bear P. Cahill"],"categories": ["Mobile Technology"]}
				,{"value": "iPhone in Action","isbn": "193398886X","pageCount": 472,"publishedDate": {"$date": "2008-12-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/callen.jpg","shortDescription": " There is not another iPhone value that does such a great coverage of both Web and SDK topics under one roof, thus providing a well-rounded developer education. Vladimir Pasman, Cocoacast.com","longDescription": "The iPhone explodes old ideas of a cell phone. Its native SDK offers a remarkable range of features including easy-to-build graphical objects, a unique navigation system, and a built-in database, all on a location-knowledgeable device. Websites and web apps can now behave like native iPhone apps, with great network integration.iPhone in Action is an in-depth introduction to both native and web programming for the iPhone. You'll learn how to turn your web pages into compelling iPhone web apps using WebKit, iUI, and Canvas. The authors also take you step by step into more complex Objective-C programming. They help you master the iPhone SDK including its UI and features like accelerometers, GPS, the Address Book, SQLite, and many more. Using Apple's standard tools like Dashcode, Xcode, and Interface Builder, you'll learn how to best use both approaches: iPhone web and SDK programming.This book is intended as an introduction to its topics. Proficiency with C, Cocoa, or Objective-C is helpful but not required.","status": "PUBLISH","authors": ["Christopher Allen","Shannon Appelcline"],"categories": ["Web Development"]}
				,{"value": "Silverlight 2 in Action","isbn": "1933988428","pageCount": 400,"publishedDate": {"$date": "2008-10-31T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/campbell.jpg","shortDescription": " Silverlight 2 in Action gives you a solid, well-thought out and coherent foundation for building RIA web applications, and provides you with lots of technical details without ever becoming cloudy. Golo Roden, author, trainer and speaker for .NET technologies","longDescription": "Microsoft describes Silverlight as a \"cross-browser, cross-platform plug-in for delivering the next generation of .NET based media experiences and rich interactive applications for the Web.\" That's a really boring description for a really exciting new technology. Anyone who has looked at the demos and gotten a taste of what Silverlight can do knows that Silverlight represents an entirely new level of rich web interface technology for Microsoft developers. With Silverlight 2, developers can use JavaScript, VB, C#, Python, and Ruby to build user-friendly, interactive, and visually-dazzling web applications that work in most major browsers.Silverlight 2 in Action is the first book to cover Silverlight 2, a far more robust implementation of Silverlight than the current 1 release that supports only JavaScript. The much-anticipated 2 release adds powerful new features along with the ability to code in multiple languages and integrate your work with Visual Studio and the new Expression suite of tools. This book delivers real-world examples and in-depth walkthroughs to help you confidently enhance your web applications using Silverlight 2.Silverlight 2 in Action devotes extensive coverage to flexible layout components, the extensible control model, the communication framework, and the data-binding features all cornerstones of software development. Author and Microsoft MVP Chad Campbell also describes rich media and vivid graphical and animation features. The final chapters include a variety of Silverlight deployment scenarios.In addition to the fundamentals of Silverlight, you'll be introduced to architectural components such as the Silverlight object model. The book addresses the developer/designer collaboration model Silverlight enables, showing the developer how to include the designer effectively in the project workflow. This model is illustrated throughout the examples.For ongoing reader support, the author will maintain a dedicated book-support website providing up-to-the-minute working examples, complete with source code, all in Silverlight.","status": "PUBLISH","authors": ["Chad A. Campbell","John Stockton"],"categories": ["Microsoft .NET"]}
				,{"value": "The Quick Python Book, Second Edition","isbn": "193518220X","pageCount": 360,"publishedDate": {"$date": "2010-01-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ceder.jpg","shortDescription": "This revision of Manning's popular The Quick Python Book offers a clear, crisp introduction to the elegant Python programming language and its famously easy-to-read syntax. Written for programmers new to Python, this updated edition covers features common to other languages concisely, while introducing Python's comprehensive standard functions library and unique features in detail.","longDescription": "This revision of Manning's popular The Quick Python Book offers a clear, crisp introduction to the elegant Python programming language and its famously easy-to-read syntax. Written for programmers new to Python, this updated edition covers features common to other languages concisely, while introducing Python's comprehensive standard functions library and unique features in detail.After exploring Python's syntax, control flow, and basic data structures, the book shows how to create, test, and deploy full applications and larger code libraries. It addresses established Python features as well as the advanced object-oriented options available in Python 3. Along the way, you'll survey the current Python development landscape, including GUI programming, testing, database access, and web frameworks.WHAT'S INSIDE:* Concepts and Python 3 features* Regular expressions and testing* Python tools* All the Python you need nothing you don't","status": "PUBLISH","authors": ["Naomi R. Ceder"],"categories": ["Python"]}
				,{"value": "Internet and Intranet Applications with PowerBuilder 6","isbn": "1884777600","pageCount": 390,"publishedDate": {"$date": "2000-12-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cervenka.jpg","longDescription": "If you're a PowerBuilder programmer, Internet and Intranet Applications with PowerBuilder 6 is your ticket to learning Web.PB and related technologies. The book covers everything you need to know to build web browser and server programs with the PowerBuilder 6 Internet Toolkit. Also covered is how to write winsock programs with PB, and Distributed PB is covered to the extent necessary to learn Web.PB.","status": "PUBLISH","authors": ["Tom Cervenka"],"categories": ["PowerBuilder"]}
				,{"value": "Practical Methods for Your Year 2000 Problem","isbn": "188477752X","pageCount": 236,"publishedDate": {"$date": "1998-01-01T00:00:00.000-0800"},"shortDescription": "Practical Methods for Your Year 2000 Problem gives the Year 2000 project team a step-by-step methodology for addressing the Year 2000 problem.","longDescription": "Practical Methods for Your Year 2000 Problem gives the Year 2000 project team a step-by-step methodology for addressing the Year 2000 problem. By seeking to minimize the amount of work to be performed, and thus maximize the probability of having a successful Year 2000 project, the book is geared towards (a) helping the inhouse personnel understand, scope and, execute their project while (b) removing the need to spend large amounts of money on professional consulting firms. The VisualAge 2000 toolset by IBM is used for examples.Practical Methods for Your Year 2000 Problem identifies what you need to look for, how you need to look at it, and what to do with what you see. No other book or company in the market today provides a solution as comprehensive and cost-effective as this. Starting with the clear, concise, and unambiguous definitions of what dates are and how programs and files relate to them, the book goes on to describe how to change them to be useful forever, not just up to the next century.Finally, Practical Methods for Your Year 2000 Problem gives practical and comprehensive advice on all aspects of the Year 2000 problem, from inventorying software and hardware through to implementing large numbers of interrelated programs, files, and tables.","status": "PUBLISH","authors": ["Robert Chapman"],"categories": ["Business"]}
				,{"value": "Mobile Agents","isbn": "1884777368","pageCount": 320,"publishedDate": {"$date": "1997-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cockayne.jpg","shortDescription": "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet.","longDescription": "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet. The book presents the reality of today's agent technologies and the future that this technology promises. It teaches how to create and deploy the major mobile agent systems (Telescript, Agent Tcl, Ara, Aglets Workbench) and how to solve a variety of problems on the Internet. Each of the chapters was written in collaboration with the original developers of the agent systems.","status": "PUBLISH","authors": ["William R. Cockayne and Michael Zyda","editors"],"categories": ["Internet"]}
				,{"value": "Spring Dynamic Modules in Action","isbn": "1935182307","pageCount": 450,"publishedDate": {"$date": "2010-09-04T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cogoluegnes.jpg","shortDescription": "Spring Dynamic Modules in Action introduces Spring DM and OSGi to Java EE developers and architects. It presents the fundamental concepts of OSGi-based apps and maps them to the familiar ideas of the Spring framework. Then, it engages you with the techniques and concepts you'll need to develop stable, flexible enterprise apps. You'll learn how to embed a Spring container inside an OSGi bundle, and how Spring DM lets you blend Spring strengths like dependency injection with OSGi-based services. Along the way, you'll see how Spring DM handles data access and web-based components, and you'll explore topics like unit testing and configuration in an OSGi-based environment.","longDescription": "OSGi is increasingly familiar to Java coders working in distributed environments, but the tools required to implement OSGi-based systems have been slow to develop. Spring Dynamic Modules (Spring DM) is a framework designed to make it easy to build Spring apps that take advantage of the OSGi approach to modular Java development. It simplifies the task of creating true component and service oriented architectures in an OSGi environment using all the powerful features of the Spring framework.Spring Dynamic Modules in Action introduces Spring DM and OSGi to Java EE developers and architects. It presents the fundamental concepts of OSGi-based apps and maps them to the familiar ideas of the Spring framework. Then, it engages you with the techniques and concepts you'll need to develop stable, flexible enterprise apps. You'll learn how to embed a Spring container inside an OSGi bundle, and how Spring DM lets you blend Spring strengths like dependency injection with OSGi-based services. Along the way, you'll see how Spring DM handles data access and web-based components, and you'll explore topics like unit testing and configuration in an OSGi-based environment.","status": "PUBLISH","authors": ["Arnaud Cogoluegnes","Thierry Templier","","Andy Piper"],"categories": ["Java"]}
				,{"value": "SQL Server 2008 Administration in Action","isbn": "193398872X","pageCount": 468,"publishedDate": {"$date": "2009-08-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/colledge.jpg","longDescription": "The integrity and security of your database is crucial to your business. SQL Server 2008 is a massive and mature product with a very large feature set. As a SQL Server administrator, you must be equipped to handle myriad day-to-day tasks to keep your database healthy, and you must also be prepared to act quickly when something unexpected happens.SQL Server 2008 Administration in Action offers over 100 DBA-tested, high-value, best practices that will help you tame the beast and keep it under control. Unlike the many comprehensive SQL Server reference tomes out there that attempt to cover the whole SQL Server feature set, this book drills down on the techniques, procedures, and practices that help you keep your database running like clockwork.SQL Server 2008 Administration in Action focuses the production DBA, digging deep into the various tasks specific to that role. Expert author Rod Colledge--check him out at sqlCrunch.com--teaches you best practices that cover the lifecycle of a SQL Server system, including infrastructure design, installation, and operational maintenance. And while many of these techniques will work in any recent version of SQL Server, you'll find full coverage of emerging SQL Server 2008 best practices.Each technique is presented in a task-driven style, and in the order of the typical life cycle of a SQL Server system. This allows you to easily open the book at the appropriate page and focus on what you need to know for each specific situation.","status": "PUBLISH","authors": ["Rod Colledge"],"categories": ["Microsoft"]}
				,{"value": "Android in Practice","isbn": "1935182927","pageCount": 500,"publishedDate": {"$date": "2011-09-30T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/collins.jpg","shortDescription": "Android in Practice is treasure trove of Android goodness, with over 100 tested, ready-to-use techniques including complete end-to-end example applications and practical tips for real world mobile application developers. Written by real world Android developers, this book addresses the trickiest questions raised in forums and mailing lists. Using an easy-to-follow problem/solution/discussion format, it dives into important topics not covered in other Android books, like advanced drawing and graphics, testing and instrumentation, building and deploying applications, using alternative languages, and native development.","longDescription": "Android, Google's platform for mobile application development, provides powerful features, a robust SDK, and almost limitless possibilities. It's not hard to find the information you need to build your first Android app, but then whatIf you want to build real apps for real users, you have real questions and you need real answers.Android in Practice is treasure trove of Android goodness, with over 100 tested, ready-to-use techniques including complete end-to-end example applications and practical tips for real world mobile application developers. Written by real world Android developers, this book addresses the trickiest questions raised in forums and mailing lists. Using an easy-to-follow problem/solution/discussion format, it dives into important topics not covered in other Android books, like advanced drawing and graphics, testing and instrumentation, building and deploying applications, using alternative languages, and native development.If you're new to Android, or even if you have a few cycles under your belt, you'll love the quick \"pre-flight check,\" where you'll review key platform details and tools and the building blocks of all Android applications. Then, you'll delve into Android use cases from visual elements and style, to saving and sharing data, networking, background tasks, concurrency, and more.","status": "PUBLISH","authors": ["Charlie Collins","Michael D. Galpin","","Matthias Kaeppler"],"categories": ["Mobile Technology"]}
				,{"value": "Object Oriented Perl","isbn": "1884777791","pageCount": 512,"publishedDate": {"$date": "1999-08-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/conway.jpg","longDescription": "Object Oriented Perl is designed to provide anyone who is familiar with the basics of regular Perl programming with a complete introduction to the object-oriented features of Perl. The book moves from the very simplest applications through advanced applications such as generic programming, multiple dispatch, and object-oriented persistence. Thus, it offers a much-needed resource for persons new to Perl, as well as new and valuable insights and techniques for even the most accomplished Perl programmers.Beyond explaining the syntax and semantics of Perl's inbuilt object-oriented features, Object Oriented Perl explains how to apply those features in a wide range of programming techniques. Each technique is illustrated with complete examples.Object Oriented Perl also discusses the latest relevant Perl modules, which are freely available and can greatly simplify object-oriented development in Perl. In particular, it examines the new standard \"fields\" module and the associated pseudo-hash construct.No other book covers the topic of object-oriented software development in Perl in such breadth, to such depth, or in such a readable manner. Complete source code for Object Oriented Perl is available online to owners of the book.","status": "PUBLISH","authors": ["Damian Conway"],"categories": ["Object-Oriented Programming","P"]}
				,{"value": "GWT in Practice","isbn": "1933988290","pageCount": 376,"publishedDate": {"$date": "2008-04-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cooper.jpg","longDescription": "If you re a web developer, you already know that you can use Ajax to add rich, user-friendly, dynamic features to your applications. With the Google Web Toolkit (GWT), a new Ajax tool from Google that automatically converts Java to JavaScript, you can build Ajax applications using the Java language. GWT lets you focus on application design and functionality, rather than on browser differences, and allows you to re-use code throughout the layers of your applications.GWT in Practice is an example-driven, code-rich book designed for web developers who have already learned the basics of GWT. After a quick review of GWT fundamentals, GWT in Practice presents scores of handy, reusable solutions to the problems you face when you need to move beyondHello Worldandproof of conceptapplications. This book skips the theory and looks at the way things really work when you re building projects in GWT.You ll learnHow to create and customize widgetsThe ins and outs of RPCPackaging and building with Maven and AntUsing the Java Persistence API with GWTEffective internationalizationGWT in Practice shows you where GWT fits into the Enterprise Java developer's toolset. Written by expert authors Robert Cooper and Charlie Collins, this book combines sharp insight with hard-won experience. Readers will find thorough coverage of all aspects of GWT development from the basic GWT concepts and essentials to in-depth and complete real world example applications. If you know the basics and are ready to get your hands dirty, then you need this book.","status": "PUBLISH","authors": ["Robert Cooper","Charles Collins"],"categories": ["Web Development"]}
				,{"value": "Ajax in Action","isbn": "1932394613","pageCount": 680,"publishedDate": {"$date": "2005-10-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane.jpg","longDescription": "Web users are getting tired of the traditional web experience. They get frustrated losing their scroll position; they get annoyed waiting for refresh; they struggle to reorient themselves on every new page. And the list goes on. With asynchronous JavaScript and XML, known as \"Ajax,\" you can give them a better experience. Once users have experienced an Ajax interface, they hate to go back. Ajax is new way of thinking that can result in a flowing and intuitive interaction with the user.\n<br>\n<i>Ajax in Action</i> helps you implement that thinking--it explains how to distribute the application between the client and the server (hint: use a \"nested MVC\" design) while retaining the integrity of the system. You will learn how to ensure your app is flexible and maintainable, and how good, structured design can help avoid problems like browser incompatibilities. Along the way it helps you unlearn many old coding habits. Above all, it opens your mind to the many advantages gained by placing much of the processing in the browser. If you are a web developer who has prior experience with web technologies, this book is for you.","status": "PUBLISH","authors": ["Dave Crane","Eric Pascarello with Darren James"],"categories": ["XML","Internet"]}
				,{"value": "Ajax in Practice","isbn": "1932394990","pageCount": 536,"publishedDate": {"$date": "2007-06-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane2.jpg","longDescription": "Ajax gives web developers the potential to create rich user-centered Internet applications. But Ajax also adds a new level of complexity and sophistication to those applications. Ajax in Practice tackles Ajax head-on, providing countless hands-on techniques and tons of reusable code to address the specific issues developers face when building Ajax-driven solutions.After a brief overview of Ajax, this book takes the reader through dozens of working examples, presented in an easy-to-use cookbook format. Readers will learn how to implement drag-and-drop interfaces and discover how to create effective navigation strategies for their applications. Unlike a traditional cookbook, Ajax in Practice provides a thorough discussion of each technique presented and shows how the individual components can be connected to create powerful solutions. A fun \"mash-up\" chapter concludes the book. Throughout the book, the examples chosen are interesting, entertaining, and practical.With this book you will:Go beyond what Ajax is and learn how to put Ajax to work.Master numerous techniques for user interface design and site navigation.Work hands-on with professional-grade reusable Ajax code designed to solve real problems.","status": "PUBLISH","authors": ["Dave Crane","Jord Sonneveld and Bear Bibeault with Ted Goddard","Chris Gray","Ram Venkataraman","Joe Walker"],"categories": ["Web Development"]}
				,{"value": "Prototype and Scriptaculous in Action","isbn": "1933988037","pageCount": 544,"publishedDate": {"$date": "2007-04-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane3.jpg","longDescription": "Common Ajax tasks should be easy, and with Prototype and Scriptaculous they are. Prototype and Scriptaculous are libraries of reusable JavaScript code that simplify Ajax development. Prototype provides helpful methods and objects that extend JavaScript in a safe, consistent way. Its clever Ajax request model simplifies cross-browser development. Scriptaculous, which is based on Prototype, offers handy pre-fabricated widgets for rich UI development.Prototype and Scriptaculous in Action is a comprehensive, practical guide that walks you feature-by-feature through the two libraries. First, you ll use Scriptaculous to make easy but powerful UI improvements. Then you ll dig into Prototype s elegant and sparse syntax. See how a few characters of Prototype code can save a dozen lines of JavaScript. By applying these techniques, you can concentrate on the function and flow of your application instead of the coding details. This book is written for web developers with a working knowledge of JavaScript.","status": "PUBLISH","authors": ["Dave Crane","Bear Bibeault with Tom Locke"],"categories": ["Web Development"]}
				,{"value": "POJOs in Action","isbn": "1932394583","pageCount": 592,"publishedDate": {"$date": "2006-01-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crichardson.jpg","shortDescription": "\"POJOs in Action is required reading for battle-weary EJB developers and for new developers who want to avoid the sins of the fathers by using lightweight frameworks.-- C# Online.NET","longDescription": "There is agreement in the Java community that EJBs often introduce more problems than they solve. Now there is a major trend toward lightweight technologies such as Hibernate, Spring, JDO, iBATIS, and others, all of which allow the developer to work directly with the simpler Plain Old Java Objects, or POJOs. Bowing to the new consensus, EJB 3 now also works with POJOs.POJOs in Action describes these new, simpler, and faster ways to develop enterprise Java applications. It shows you how to go about making key design decisions, including how to organize and encapsulate the domain logic, access the database, manage transactions, and handle database concurrency.Written for developers and designers, this is a new-generation Java applications guide. It helps you build lightweight applications that are easier to build, test, and maintain. The book is uniquely practical with design alternatives illustrated through numerous code example","status": "PUBLISH","authors": ["Chris Richardson"],"categories": ["Java"]}
				,{"value": "Data Munging with Perl","isbn": "1930110006","pageCount": 304,"publishedDate": {"$date": "2001-01-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cross.jpg","longDescription": "Your desktop dictionary may not include it, but 'munging' is a common term in the programmer's world. Many computing tasks require taking data from one computer system, manipulating it in some way, and passing it to another. Munging can mean manipulating raw data to achieve a final form. It can mean parsing or filtering data, or the many steps required for data recognition. Or it can be something as simple as converting hours worked plus pay rates into a salary cheque.This book shows you how to process data productively with Perl. It discusses general munging techniques and how to think about data munging problems. You will learn how to decouple the various stages of munging programs, how to design data structures, how to emulate the Unix filter model, etc. If you need to work with complex data formats it will teach you how to do that and also how to build your own tools to process these formats. The book includes detailed techniques for processing HTML and XML. And, it shows you how to build your own parsers to process data of arbitrary complexity.If you are a programmer who munges data, this book will save you time. It will teach you systematic and powerful techniques using Perl. If you are not a Perl programmer, this book may just convince you to add Perl to your repertoire.","status": "PUBLISH","authors": ["David Cross"],"categories": ["Perl"]}
				,{"value": "Hello! HTML5 & CSS3","isbn": "1935182897","pageCount": 325,"publishedDate": {"$date": "2012-10-17T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg","shortDescription": "Quick and Easy HTML5 and CSS3 is written for the web designer or developer who wants a fast, example-oriented introduction to the new HTML and CSS features. After a quick review of the basics, you'll turn to what's new. Start by learning to apply important new elements and attributes by building your first real HTML5 pages. You'll then take a quick tour through the new APIs: Form Validation, Canvas, Drag & Drop, Geolocation and Offline Applications. You'll also discover how to include video and audio on your pages without plug-ins, and how to draw interactive vector graphics with SVG.","longDescription": "HTML and CSS are the foundation of the web, and HTML5 and CSS3 are the latest standards. If you build web pages, mobile apps, or do any type of development at all, you'll have to learn HTML5 and CSS3, so why not start nowQuick and Easy HTML5 and CSS3 will give you a smart, snappy, and fun introduction to building web sites with these really cool new tools.Quick and Easy HTML5 and CSS3 is written for the web designer or developer who wants a fast, example-oriented introduction to the new HTML and CSS features. After a quick review of the basics, you'll turn to what's new. Start by learning to apply important new elements and attributes by building your first real HTML5 pages. You'll then take a quick tour through the new APIs: Form Validation, Canvas, Drag & Drop, Geolocation and Offline Applications. You'll also discover how to include video and audio on your pages without plug-ins, and how to draw interactive vector graphics with SVG.Once you've explored the fundamentals of HTML5, it's time to add some style to your pages with CSS3. New CSS features include drop shadows, borders, colors, gradients and backgrounds. In addition, you'll learn to layout your pages with the new flexible box and layout modules, and add the finishing touches with custom fonts. You'll also see how to target specific devices with media queries, and do all of it with less code thanks to the new selectors and pseudo classes.Finally you will walk through several large examples where you see all the features of HTML5 and CSS3 working together to produce responsive and lightweight applications which you can interact with just like native desktop apps.","status": "PUBLISH","authors": ["Rob Crowther"],"categories": ["Internet"]}
				,{"value": "Seam in Action","isbn": "1933988401","pageCount": 624,"publishedDate": {"$date": "2008-08-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dallen.jpg","shortDescription": "Seam in Action goes into great detail on the ways in which Seam helps reduce the burden of integration with different technologies such as Hibernate and JSF, allowing the developer to focus on the core business objective at hand. Shobana Jayaraman, Digital Infrastructure Analyst, University of Texas Southwestern Medical Center Library, The Tech Static","longDescription": "Seam is an exciting new application framework based on the Java EE platform that you can use to build rich, web-based business applications. Seam is rapidly capturing the interest of Java enterprise developers because of its focus on simplicity, ease of use, transparent integration, scalability, and developer choice.Seam in Action offers a practical and in-depth look at Seam from outside the walls of RedHat/JBoss. The book puts Seam head-to-head with the complexities in the Java EE architecture. It discusses the shortcomings of JSF, the challenges of using Java persistence in the web environment, and other common development roadblocks, then shows how Seam makes these problems just melt away. In covering Seam, the author doesn't just ask you to sprinkle annotations on your code and expect that you understand how it works. Instead, the author lays down the facts, shows you the steps, reveals the logic, and diagrams the flow, so that by the end of the book, you will not only have gained a deep understanding of Seam, but will also come away ready to teach the material to others.All too often, developers spend a majority of their time integrating disparate technologies, manually tracking state, struggling to understand JSF, wrestling with Hibernate exceptions, and constantly redeploying applications, rather than on the logic pertaining to the business at hand. Seam in Action dives deep into thorough explanations of how Seam eliminates these non-core tasks by leveraging configuration by exception, Java 5 annotations, and aspect-oriented programming.To start off, you will see a working Java EE-compliant application come together by the end of the second chapter. As you progress through the book, you will discover how Seam eliminates unnecessary layers and configurations and uses an inversion of control technical known as bijection supplemented by a liberal use of the Unified Expression Language (EL) to establish the missing link between JSF, EJB 3 and JavaBean components. You also witness how Seam opens doors for you to incorporate technologies you previously have not had time to learn, such as business processes and stateful page flows (jBPM), rule-based security, Ajax remoting, PDF generation, Spring integration, and more.","status": "PUBLISH","authors": ["Dan Allen"],"categories": ["Java"]}
				,{"value": "Wicket in Action","isbn": "1932394982","pageCount": 392,"publishedDate": {"$date": "2008-08-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dashorst.jpg","longDescription": "Wicket bridges the mismatch between the web's stateless protocol and Java's OO model. The component-based Wicket framework shields you from the HTTP under a web app so you can concentrate on business problems instead of the plumbing code. In Wicket, you use logic-free HTML templates for layout and standard Java for an application's behavior. The resultCoding a web app with Wicket feels more like regular Java programming.Wicket in Action is a comprehensive guide for Java developers building Wicket-based web applications. It introduces Wicket's structure and components, and moves quickly into examples of Wicket at work. Written by core committers, this book shows you the \"how-to\" and the \"why\" of Wicket. You'll learn to use and customize Wicket components, to interact with Spring and Hibernate, and to implement rich Ajax-driven features.","status": "PUBLISH","authors": ["Martijn Dashorst","Eelco Hillenius"],"categories": ["Web Development"]}
				,{"value": "Open Source SOA","isbn": "1933988541","pageCount": 448,"publishedDate": {"$date": "2009-05-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/davis.jpg","longDescription": "Service Oriented Architecture, or SOA, has become embraced by many organizations as a means of improving reusability of software assets; providing better alignment between business and IT; and, increasing agility for responding to demands in the marketplace. This is accomplished by breaking individual units of functionality into services that can then be exposed through open protocols and standards.Until recently, many of the software technologies used for developing SOA-based solutions were limited to expensive, commercial offerings. However, that has now changed, and a compelling open source SOA platform can be implemented exclusively with open source products. This book identifies a suite of open source products that can be used for a building SOA environment, and describes how they can be integrated by practitioners. It includes a hands-on introduction to the products selected; a multitude of source code examples; and implementation through real-life case studies.","status": "PUBLISH","authors": ["Jeff Davis"],"categories": ["Java"]}
				,{"value": "Struts 2 in Action","isbn": "193398807X","pageCount": 432,"publishedDate": {"$date": "2008-05-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dbrown.jpg","longDescription": "The original Struts project revolutionized Java web development and its rapid adoption resulted in the thousands of Struts-based applications deployed worldwide. Keeping pace with new ideas and trends, Apache Struts 2 has emerged as the product of a merger between the Apache Struts and OpenSymphony WebWork projects, united in their goal to develop an easy-to-use yet feature-rich framework. Struts 2 represents a revolution in design and ease of use when compared to classic Struts. It adds exciting and powerful features such as a plugin framework, JavaServer Faces integration, and XML-free configuration.Struts 2 In Action introduces the Apache Struts 2 web application framework and shows you how to quickly develop professional, production-ready modern web applications. Written by Don Brown, one of the leading developers of Struts 2, Chad Davis, a passionate Struts 2 developer, along with Scott Stanlick, this book gently walks you through the key features of Struts 2 in example-driven, easy-to-digest sections.Struts 2 in Action delivers accurate, seasoned information that can immediately be put to work. This book is designed for working Java web developers especially those with some background in Struts 1 or WebWork. The core content, covering key framework components such as Actions, Results, and Interceptors, includes new features like the annotation-based configuration options. You'll find chapters on Struts 2 plugins, FreeMarker, and migration from Struts 1 and WebWork 2. Finally, new topics such as the Ajax tags, Spring Framework integration, and configuration by convention give familiar subjects new depth.","status": "PUBLISH","authors": ["Donald Brown","Chad Michael Davis","","Scott Stanlick"],"categories": ["Java"]}
				,{"value": "Essential Guide to Peoplesoft Development and Customization","isbn": "1884777929","pageCount": 1101,"publishedDate": {"$date": "2000-08-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/delia.jpg","longDescription": "The Essential Guide to PeopleSoft Development and Customization is an exhaustive, as well as practical, guide that covers PeopleSoft 7.5 and many new features in release 8.0. Both novice and experienced programmers will benefit from the detailed coverage of topics ranging from the basics of Application Designer to the proper use of PeopleCode within the Application Processor.The book serves as both a reference and a tutorial and covers advanced topics that other books avoid. The reader can gain valuable expertise by following the exercises and building sample applications and utilities.Extensive coverage of PeopleCode including scroll and function library examples can be found as well as methodology behind customization and upgrades. Discover how to effectively utilize SQR and Process Scheduler. Master various levels of PeopleSoft security.Most developers won t touch PeopleSoft COBOL programs with a ten foot pole. Expand your horizons by uncovering the secrets of PeopleSoft COBOL and the PTPSQLRT module and even walk through a sample customization. Application Engine is a powerful PeopleTool - but one of the least understood. Through a series of simple but effective exercises the reader will learn Application Engine concepts such as dynamic SQL, decision logic and dynamic sections. A useful Application Engine utility is produced that will enhance the delivered Process Scheduler panels. This book takes a soup-to-nuts approach leading the reader through the full cycle of application development.The four authors are truly experts in the field and provide the reader with the skills necessary to compete in the PeopleSoft marketplace for years to come. Special sections are included which provide detailed information on new features in PeopleSoft release 8. The reader will gain valuable insight into the next generation of PeopleTools.Exciting new features such as the new PeopleCode Debugger and PeopleCode dot notation using a new series of object classes are revealed. Also covered are Application Designer enhancements and improved Process Scheduler design and SQR support.See firsthand how Application Engine has been turbo-charged with a new line of meta-constructs, PeopleCode actions, file handling capability and a new integrated design. The authors primary goal was not to be the first book on the market... it was to be the best.","status": "PUBLISH","authors": ["Tony DeLia","Galina Landres","Isidor Rivera","Prakash Sankaran"],"categories": ["Client-Server"]}
				,{"value": ".NET Multithreading","isbn": "1930110545","pageCount": 360,"publishedDate": {"$date": "2002-11-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dennis.jpg","longDescription": "If you need high performance, or a rich user experience, you should consider multithreading. With .NET you can develop stable and robust multithreaded applications with minimal effort. .NET Multithreading teaches the basics in an understandable and practical way. It then focuses on .NET's mechanisms for multithreading and shows how easy it can be to develop applications with them. The book covers several design approaches such as one-thread-one-class, the asynchronous design pattern, and using queues as buffers between threads. It explains best practices and how to avoid common multithreading pitfalls such as deadlock and race conditions.This book is written for intermediate .NET developers who know C# or VB .NET, but are not assumed to have a background in multithreading. It is rich in examples that will help you understand the subject and produce multithreaded applications that have the power of C++ while keeping the ease and reliability of .NET.","status": "PUBLISH","authors": ["Alan Dennis"],"categories": ["Microsoft .NET","Internet"]}
				,{"value": "SCWCD Exam Study Kit Second Edition","isbn": "1932394389","pageCount": 560,"publishedDate": {"$date": "2005-05-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/deshmukh2.jpg","longDescription": "With the tremendous penetration of J2EE in the enterprise, passing the Sun Certified Web Component Developer exam has become an important qualification for Java and J2EE developers. To pass the SCWCD exam (Number: 310-081) you need to answer 69 questions in 135 minutes and get 62% of them right. You also need150 and this (completely updated and newly revised) book.In its first edition, the SCWCD Exam Study Kit was the most popular book used to pass this most desirable web development certification exam. The new edition will help you learn the conceptslarge and smallthat you need to know. It covers the newest version of the exam and not a single topic is missed.The SCWCD exam is for Sun Certified Java Programmers who have a certain amount of experience with Servlets and JSPs, but for those who do not, the book starts with three introductory chapters on these topics. Although the SCWCD Exam Study Kit has one purpose, to help you get certified, you will find yourself returning to it as a reference after passing the exam.","status": "PUBLISH","authors": ["Hanumant Deshmukh","Jignesh Malavia","","Matthew Scarpino"],"categories": ["Internet"]}
				,{"value": "Spring Roo in Action","isbn": "193518296X","pageCount": 500,"publishedDate": {"$date": "2012-04-13T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rimple.jpg","status": "PUBLISH","authors": ["Ken Rimple","Srini Penchikala"],"categories": ["Java"]}
				,{"value": "SOA Governance in Action","isbn": "1617290270","pageCount": 0,"publishedDate": {"$date": "2012-07-27T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dirksen.jpg","status": "PUBLISH","authors": ["Jos Dirksen"],"categories": ["java"]}
				,{"value": "RSS and Atom in Action","isbn": "1932394494","pageCount": 400,"publishedDate": {"$date": "2006-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dmjohnson.jpg","longDescription": "RSS and Atom in Action is organized into two parts. The first part introduces the blog technologies of newsfeed formats and publishing protocols the building blocks. The second part shows how to put to those blocks together to assemble interesting and useful blog applications.In keeping with the principle behind Manning sIn Actionseries, this book shows the reader, through numerous examples in Java and C#, how to parse Atom and RSS format newsfeeds, how to generate valid newsfeeds and serve them efficiently, and howto automate blogging via web services based on the new Atom protocol and the older MetaWeblog API. The book also shows how to develop a complete blog client library that readers can use in their own applications. The second half of the book is devoted to a dozen blog apps small but immediately useful example applications such as a community aggregator, a file distribution newsfeed, a blog cross-poster, an email-to-blog gateway, Ant tasks for blogging software builds, and more.","status": "PUBLISH","authors": ["Dave Johnson"],"categories": ["Internet"]}
				,{"value": "LDAP Programming, Management and Integration","isbn": "1930110405","pageCount": 352,"publishedDate": {"$date": "2002-11-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/donley.jpg","longDescription": "LDAP is the leading Internet protocol for directory-like information: user identities, preferences, security privileges. etc. Because it is popular, most programming languages have handy extensions for searching and updating LDAP directories. But most information today is still locked away in application-specific repositories that lack LDAP access.LDAP Programming, Management and Integration explains how to link non-LDAP data with LDAP directories. It starts with a concise introduction to the LDAP standard and discusses how to work with it in Java and Perl. It gives you practical code and advice for migrating and integrating data into an LDAP environment. And it explains how to increase your application's security using identity and profile information from LDAP repositories.Written for programmers and system administrators, this book teaches clearly and honestly the LDAP practicedin the trenches.It is concise yet rich in practical examples that make a sometimes complex subject easy to understand.","status": "PUBLISH","authors": ["Clayton Donley"],"categories": ["Internet"]}
				,{"value": "Mule in Action","isbn": "1933988967","pageCount": 432,"publishedDate": {"$date": "2009-07-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dossot.jpg","longDescription": "Mule is a widely used open source enterprise service bus. It is standards based, provides easy integration with Spring and JBoss, and fully supports the enterprise messaging patterns collected by Hohpe and Woolf. You can readily customize Mule without writing a lot of new code.Mule in Action covers Mule fundamentals and best practices. It is a comprehensive tutorial that starts with a quick ESB overview and then gets Mule to work. It dives into core concepts like sending, receiving, routing, and transforming data. Next, it gives you a close look at Mule's standard components and how to roll out custom ones. You'll pick up techniques for testing, performance tuning, BPM orchestration, and even a touch of Groovy scripting.Written for developers, architects, and IT managers, the book requires familiarity with Java but no previous exposure to Mule or other ESBs.","status": "PUBLISH","authors": ["David Dossot","John D'Emic"],"categories": ["Java","Software Engineering"]}
				,{"value": "Java Foundation Classes","isbn": "1884777678","pageCount": 1088,"publishedDate": {"$date": "2001-10-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drye.jpg","longDescription": "Java Foundation Classes: Swing Reference is the comprehensive guide to Swing 1.1 and Java 2's Swing package. Written by the programmers that maintain the Internet's Swing FAQ, this book is based on the much enhanced, most recent release of Swing. All documentation in this book is based on the authors' experience with the Swing source code and their digging under the surface to make sure what they are saying is correct. This book offers solid reference material, extensive examples and an introductory tutorial provide programmers with a quick start and ongoing support as their daily Swing reference. The authors have not trusted a single description of the Swing JavaDoc--this book is verified, correct documentation for the Swing library. For programmers wondering which methods are unimplemented or empty, which are synchronized, which throw runtime exceptions, the JavaDoc won't tell them, but this book will.","status": "PUBLISH","authors": ["Stephen C. Drye","William C. Wake"],"categories": ["Java"]}
				,{"value": "Managing Components with Modeler","isbn": "1932394524k-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal11.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Command-line Processing with CLI","isbn": "1932394524l-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal12.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Understanding and Using Chain","isbn": "1932394524m-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal13.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Working with the Logging and Discovery Components","isbn": "1932394524n-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal14.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Uploading files with FileUpload","isbn": "1932394524b-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal2.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Handling Protocols with the Net Component","isbn": "1932394524c-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal3.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "XML Parsing with Digester","isbn": "1932394524d-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal4.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "JXPath and Betwixt: Working with XML","isbn": "1932394524e-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal5.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Validating Data with Validator","isbn": "1932394524f-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal6.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Enhancing Java Core Libraries with Collections","isbn": "1932394524g-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal7.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Enhancing Java Core Libraries with BeanUtils and Lang","isbn": "1932394524h-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal8.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Pool and DBCP: Creating and Using Object Pools","isbn": "1932394524i-e","pageCount": 0,"publishedDate": {"$date": "2005-03-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal9.jpg","status": "PUBLISH","authors": ["Vikram Goyal"],"categories": ["Java"]}
				,{"value": "Python and Tkinter Programming","isbn": "1884777813","pageCount": 688,"publishedDate": {"$date": "2000-01-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grayson.jpg","longDescription": "If you are interested in Python and Tkinter, you have probably noticed that although there is some good contributed documentation on the Web, there is not enough to get Tkinter applications up and running. Python and Tkinter Programming is the answer. It is designed for readers who are familiar with Python and who need to develop applications with Graphical User Interfaces (GUIs).Python and Tkinter Programming presents the elements of typical Python and Tkinter applications in a straight-forward fashion. Sample code illustrates each element. Complete applications that go far beyond the fill-the-form class of graphical user interfaces are presented; here you will find examples of complex controls, drawn interfaces and photorealistic panels. The code can readily be used as templates for new applications. Extensions to Python (such as ODBC) are examined as well. Complete source code for all examples, along with the latest releases of required software, will be available from Manning's web site.Tkinter is fully documented. To date, this level of documentation has not been available to Tkinter programmers, who have been required to read the code or interpret Tcl/Tk man pages to fully understand component usage.Python and Tkinter Programming will be useful in both Windows and Unix environments, and the example code is portable between the two environments.","status": "PUBLISH","authors": ["John E. Grayson"],"categories": ["Python"]}
				,{"value": "Microsoft.NET for Programmers","isbn": "1930110197","pageCount": 386,"publishedDate": {"$date": "2002-12-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grimes.jpg","longDescription": "Written for intermediate and advanced programmers, this book builds on your existing knowledge to teach you exactly what you need to know to develop .NET applications.Packed full of practical examples, the book presents a case study which takes you through the design of an application \"engine\" and its implementation as a .NET assembly. You'll reuse the engine to create different versions of the application using Windows Forms, Remoting, Web Services, Windows Services, COM, MSMQ, ASP.NET, ADO.NET, and the Mobile Internet Toolkit. You'll also learn about fundamental .NET concepts such as types and assemblies and develop a simple language compiler which can emit a .NET executable.Also included is an appendix containing a comprehensive introduction to the C# programming language.","status": "PUBLISH","authors": ["Fergal Grimes"],"categories": ["Microsoft .NET"]}
				,{"value": "Grails in Action","isbn": "1933988932","pageCount": 520,"publishedDate": {"$date": "2009-05-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gsmith.jpg","shortDescription": "Grails in Action is a comprehensive guide to the Grails framework. First, the basics: the domain model, controllers, views, and services. Then, the fun! Dive into a Twitter-style app with features like AJAX/JSON, animation, search, wizards even messaging and Jabber integration. Along the way, you'll discover loads of great plugins that'll make your app shine. Learn to integrate with existing Java systems using Spring and Hibernate. You'll need basic familiarity with Java and the web.","longDescription": "Web apps shouldn't be hard to build, rightThe developers of Grails agree. This hyper-productive open-source web framework lets you \"code by convention\", leaving you to focus on what makes your app special. Through its use of Groovy, it gives you a powerful, Java-like language and full access to all Java libraries. And you can adapt your app's behavior at runtime without a server restart.Grails in Action is a comprehensive guide to the Grails framework. First, the basics: the domain model, controllers, views, and services. Then, the fun! Dive into a Twitter-style app with features like AJAX/JSON, animation, search, wizards even messaging and Jabber integration. Along the way, you'll discover loads of great plugins that'll make your app shine. Learn to integrate with existing Java systems using Spring and Hibernate. You'll need basic familiarity with Java and the web. Prior experience with Groovy is not necessary.","status": "PUBLISH","authors": ["Glen Smith","Peter Ledbrook"],"categories": ["Java"]}
				,{"value": "Up to Speed with Swing, Second Edition","isbn": "1884777759","pageCount": 560,"publishedDate": {"$date": "1999-10-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gutz2.jpg","shortDescription": "Now in its Second Edition, Up to Speed with Swing is for you if you want to get on the fast track to Java Swing. The second edition has been extensively updated to cover Java 1.2 with additional code examples and illustrations.","longDescription": "Now in its Second Edition, Up to Speed with Swing is for you if you want to get on the fast track to Java Swing. The second edition has been extensively updated to cover Java 1.2 with additional code examples and illustrations.Guided by a master programmer who writes Java for a living, you'll learn Swing from the insider's point of view. Up to Speeed with Swing has one purpose: to save you time mastering Swing. From the basics of Swing to creating a custom look and feel, or from the Model View Controller (MVC) architecture to optimizing your Swing code, this tutorial gives you an understanding of the big picture as well as the experience of working through detailed examples.","status": "PUBLISH","authors": ["Steven Gutz"],"categories": ["Java"]}
				,{"value": "OSGi in Action","isbn": "1933988916","pageCount": 576,"publishedDate": {"$date": "2011-04-06T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hall.jpg","shortDescription": "OSGi in Action is a comprehensive guide to OSGi with two primary goals. First, it provides a clear introduction to OSGi concepts with examples that are relevant both for architects and developers. The central idea of OSGi is modularity, so you start by learning about OSGi bundles. You'll then see how OSGi handles module lifecycles and follow up with how it promotes service-oriented interaction among application components.","longDescription": "If you're a Java developer, you've almost certainly heard of OSGi and also heard that it's becoming quite a big deal. But you may still be wondering exactly \"What is OSGi \"Simply put, OSGi is a technology that allows you to create highly modular Java applications. It introduces a logical and physical module format, called a bundle, for explicitly structuring your application as a set of interconnected modules. OSGi lets you install, start, stop, update, or uninstall modules at execution time without taking down your entire system. In addition, OSGi defines a local service-oriented approach for creating applications out of loosely coupled components.With the prevalence of modern component and service-based architectures, OSGi is becoming increasingly important. It meshes well with such approaches and greatly simplifies their creation and management. It's the backbone of Eclipse's plugin system as well as many recent JavaEE containers, such as GlassFish v3, WebSphere v6.1, and WebLogic Event Server. Even the SpringSource Application Platform is built on top of it.OSGi in Action is a comprehensive guide to OSGi with two primary goals.First, it provides a clear introduction to OSGi concepts with examples that are relevant both for architects and developers. The central idea of OSGi is modularity, so you start by learning about OSGi bundles.You'll then see how OSGi handles module lifecycles and follow up with how it promotes service-oriented interaction among application components.With the core concepts well in hand, you'll explore numerous application scenarios and techniques. How much of OSGi do you actually needHow do you embed OSGi inside other containersWhat are the best practices for migrating legacy systems to OSGiHow can you embrace and make the most of system dynamism Expert authors Richard S. Hall, Karl Pauls, and Stuart McCulloch have years of experience both in building OSGi-based systems and in contributing to OSGi implementations such as Apache Felix.","status": "PUBLISH","authors": ["Richard S. Hall","Karl Pauls","Stuart McCulloch","","David Savage"],"categories": ["Internet"]}
				,{"value": "GWT in Action","isbn": "1933988231","pageCount": 632,"publishedDate": {"$date": "2007-06-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hanson.jpg","longDescription": "The Google Web Toolkit (GWT) is a new technology from Google that automatically translates Java into JavaScript, making Ajax applications easier to code and deploy. GWT in Action is a comprehensive tutorial for Java developers interested in building the next generation of rich, web-based applications. This book was written by Robert Hanson, creator of the popular GWT Widget Library, and Adam Tacy, a major contributor to the GWT Widget Library.The Web is experiencing a new growth with an emphasis on rich, web-based applications. These applications can be difficult to build because they rely on JavaScript, which lacks the sophisticated object-oriented structures and static typing of Java, they are tricky to debug, and they require you to manage numerous browser inconsistencies.In May of 2006 Google released the Google Web Toolkit. GWT enables developers to create Ajax applications in Java. With GWT, you can build your applications using a real object-oriented language and take advantage of Java tools like Eclipse that are already available. Instead of trying to bring tool support to Ajax, Google brought Ajax to a place where the tools already existed.GWT in Action shows you how to take advantage of these exciting new tools. This clearly-written book is packed with hands-on GWT examples. You ll absorb the GWT philosophy as you build your first working GWT application.The book begins by exploring the main features of GWT, includingCompiling Java to JavaScript, the magic that really defines GWTBuilding client-side componentsConvenient JUnit integration and testingInteracting with JavaScript and existing JavaScript librariesInternationalizationYou ll also see how GWT compares to other toolkits.GWT in Action shows you how to set up your development environment, use and create widgets, communicate with the server, and much more. Readers will follow an example running throughout the book and quickly master the basics of GWT: widgets, panels, and event handling. The book covers the full development cycle, from setting up your development environment, to building the application, then deploying it to the web server. The entire core GWT library is discussed, with details and examples on how it can be extended.You ll cover:Testing, debugging, and deploying GWT ApplicationsCommunicating with GWT-RPCExamining client-side RPC architectureAlternative RPC tools: HTTPRequest, RequestBuilder, and FormPanelAchieving interoperability in GWT with JavaScript Object Notation (JSON)Making your GWT application flexible and supportableGWT helps you make the most of Ajax in your web applications and GWT in Action helps you get more out of GWT.","status": "PUBLISH","authors": ["Robert Hanson","Adam Tacy"],"categories": ["Internet","Java"]}
				,{"value": "The Quick Python Book","isbn": "1884777740","pageCount": 444,"publishedDate": {"$date": "1999-10-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harms.jpg","longDescription": "The Quick Python Book is a clear, concise introduction to Python, one of the most elegant programming languages in existence. The book is aimed at readers who know programming but for whom the Python language is new.This book is designed so that you can use it to quickly become proficient in Python. However, it provides more than just a beginners tutorial. Even once you've become more experienced, it should continue to be quite valuable to you as an indexed cache of information on the bulk of the Python concepts and constructs of which you will find yourself wanting to refresh or augment your knowledge.It first covers the core features of Python (syntax, control flow, basic data structures, etc.) and provides the knowledge to write basic but useful scripts. Features in Python common to other languages are covered very concisely, while features unique to Python are explained in detail.It next discusses Python features which would be useful to anyone using Python in larger applications, including facilities for managing large collections of code, object-oriented programming, advanced string handling, etc.The last section of the book discusses advanced topics: Windows/COM programming with Python, integrating Python and Java (Python is one of the few languages other than Java which can be compiled into Java bytecode), extending the Python language with C, and an introduction to some of the advanced web site building tools that are available for Python.","status": "PUBLISH","authors": ["Daryl Harms","Kenneth McDonald"],"categories": ["Python"]}
				,{"value": "SharePoint 2010 Site Owner's Manual","isbn": "1933988754","pageCount": 300,"publishedDate": {"$date": "2012-02-13T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harryman.jpg","shortDescription": "SharePoint 2010 Site Owner's Manual starts by assuming you already have SharePoint installed on your system and are looking for ways to solve the problems you face every day in your organization. You'll learn to determine what type of SharePoint installation you have Microsoft Office SharePoint Server (MOSS), Windows SharePoint Services (WSS), the \"Fabulous 40\" templates and what features are at your disposal. Once you know the lay of the land, you'll discover what you can do yourself, when you need to call in some help, and when you should leave it to the developers.","longDescription": "For every SharePoint 2010 developer who spends the day buried in Visual Studio cranking out code, there are dozens of other SharePoint site owners who want to share information, create content portals, and add features to existing SharePoint sites. If you're one of these SharePoint administrators, this is the book for you. Chock-full of great ideas and scenarios you'll relate to immediately, this book will teach you the amazing things you can do with SharePoint 2010 without writing any code or calling in the developers.SharePoint 2010 Site Owner's Manual starts by assuming you already have SharePoint installed on your system and are looking for ways to solve the problems you face every day in your organization. You'll learn to determine what type of SharePoint installation you have Microsoft Office SharePoint Server (MOSS), Windows SharePoint Services (WSS), the \"Fabulous 40\" templates and what features are at your disposal. Once you know the lay of the land, you'll discover what you can do yourself, when you need to call in some help, and when you should leave it to the developers.This book teaches you by putting your hands on working SharePoint examples. You'll see seven common SharePoint-driven sites that lay out the features and approaches you'll need for most typical applications. The examples range from a simple document-sharing portal, to a SharePoint-hosted blog, to a project management site complete with a calendar, discussion forums, and an interactive task list.","status": "PUBLISH","authors": ["Yvonne M. Harryman"],"categories": ["Microsoft .NET"]}
				,{"value": "Java Development with Ant","isbn": "1930110588","pageCount": 672,"publishedDate": {"$date": "2002-08-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher.jpg","shortDescription": "The most widely used build tool for Java projects, Ant is cross-platform, extensible, simple, and fast. It scales from small personal projects to large, multi-team J2EE projects. And, most important, it's easy to learn.","longDescription": "Java Development with Ant systematically explores what Ant can do, and how to apply it to your project. Whether you are new to Ant, or an experienced user, this book will show you powerful and creative uses for Ant. The book emphasizes basic concepts you need to know to effectively use Ant starting with Ant's XML-driven build process. It leads you step-by-step through everything you need to know to compile, test, package and deploy an application. It then guides you through the maze of more complex situations common in larger projects such as enterprise Java applications and Web Services. With this book you will gain access to a powerful tool to automatically build, test and deploy your Java software, no matter how simple or complex it might be.","status": "PUBLISH","authors": ["Erik Hatcher","Steve Loughran"],"categories": ["Java","Internet"]}
				,{"value": "Lucene in Action","isbn": "1932394281","pageCount": 456,"publishedDate": {"$date": "2004-12-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher2.jpg","longDescription": "Lucene is a gem in the open-source world--a highly scalable, fast search engine. It delivers performance and is disarmingly easy to use. Lucene in Action is the authoritative guide to Lucene. It describes how to index your data, including types you definitely need to know such as MS Word, PDF, HTML, and XML. It introduces you to searching, sorting, filtering, and highlighting search results.Lucene powers search in surprising places--in discussion groups at Fortune 100 companies, in commercial issue trackers, in email search from Microsoft, in the Nutch web search engine (that scales to billions of pages). It is used by diverse companies including Akamai, Overture, Technorati, HotJobs, Epiphany, FedEx, Mayo Clinic, MIT, New Scientist Magazine, and many others.Adding search to your application can be easy. With many reusable examples and good advice on best practices, Lucene in Action shows you how. And if you would like to search through Lucene in Action over the Web, you can do so using Lucene itself as the search engine--take a look at the authors' awesome Search Inside solution. Its results page resembles Google's and provides a novel yet familiar interface to the entire book and book blog.","status": "PUBLISH","authors": ["Erik Hatcher","Otis Gospodnetic"],"categories": ["Java"]}
				,{"value": "Lucene in Action, Second Edition","isbn": "1933988177","pageCount": 532,"publishedDate": {"$date": "2010-07-09T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher3.jpg","shortDescription": "With clear writing, reusable examples, and unmatched advice on best practices, Lucene in Action is still the definitive guide to developing with Lucene.","longDescription": "When Lucene first hit the scene five years ago, it was nothing short of amazing. By using this open-source, highly scalable, super-fast search engine, developers could integrate search into applications quickly and efficiently. A lot has changed since then search has grown from a \"nice-to-have\" feature into an indispensable part of most enterprise applications. Lucene now powers search in diverse companies including Akamai, Netflix, LinkedIn, Technorati, HotJobs, Epiphany, FedEx, Mayo Clinic, MIT, New Scientist Magazine, and many others.Some things remain the same, though. Lucene still delivers high-performance search features in a disarmingly easy-to-use API. It's still a single compact JAR file (less than 1 MB!). Due to its vibrant and diverse open-source community of developers and users, Lucene is relentlessly improving, with evolutions to APIs, significant new features such as payloads, and a huge (as much as 8x) increase in indexing speed with Lucene 3.0.And with clear writing, reusable examples, and unmatched advice on best practices, Lucene in Action is still the definitive guide to developing with Lucene.","status": "PUBLISH","authors": ["Erik Hatcher","Otis Gospodnetic","","Michael McCandless"],"categories": ["Java","Open Source"]}
			]
			/*/
			data : [
				{ nm$brand : "Brand 1", cd$country : "KR", product_count : 200 }
				, { nm$brand : "Brand 2", cd$country : "KR", product_count : 590 }
				, { nm$brand : "Brand 3", cd$country : "KR", product_count : 134 }
				, { nm$brand : "Brand 4", cd$country : "KR", product_count : 234 }
				, { nm$brand : "Brand 5", cd$country : "KR", product_count : 54 }
				, { nm$brand : "Brand 6", cd$country : "KR", product_count : 2435 }
				, { nm$brand : "Brand 7", cd$country : "KR", product_count : 346 }
				, { nm$brand : "Brand 8", cd$country : "KR", product_count : 875 }
				, { nm$brand : "Brand 9", cd$country : "KR", product_count : 23 }
				, { nm$brand : "Brand 10", cd$country : "KR", product_count : 5 }
			]
			, template : function( item ){
				var template = "<div class='list_item'>";
					template += "<span class='item_name'>" + item.nm$brand + "</span>";
					template += "&nbsp;&nbsp;&nbsp;";
					template += "<span class='item_country'>" + item.cd$country + "</span>";
					template += "&nbsp;&nbsp;&nbsp;";
					template += "<span class='item_product_count'>" + item.product_count + "</span>";
					template += "</div>";
				return template;
			}
			//*/
			, itemHeight : 30
			, dragMode : "both"
			, css : "dhx_widget--bordered"
			, multiselection : true
			, select : true
			, useFilter : true
		}

		, width : ( d.width || 320 )
		, height : ( d.height || 200 )
	};
	////[ SAMPLE ] - [ E ] - 자동 삭제;
})();

/**
 * 이 화면 객체에서 필요에 의해 사용 하게 되는 URL을 사전에 정의 하기
 * 로직이나 기타 함수에서는 이 객체를 사용하여 URL을 활용 한다.
 * @const
 * @property
 */
var _URLS = (function(){
	var o = {};

	return o;
})();

/**
 * 이 컨트롤러에서 사용하는 컴포넌트 또는 메인 객체에 필요한 설정과 관련된 Option 값들을 정의 한다.
 * @property {Object}
 * <code>
	{

	}
 * </code>
 */
var _OPTIONS = {

	//[ 샘플 ] - 옵션 추가;
	itemHeight : 30
	, dragMode : "both"
	, css : "dhx_widget--bordered"
	, multiselection : true
	, select : true
	, useFilter : true
	, useSort : false
	, pagger : {
		size : 5
		, group : 5
		, template : `
					<div class='div__pagger' style='display: inline-flex; padding: 10px 0px 30px 20px;'>
						<div class='btn__prev' style='cursor: pointer;'>&lt;</div>
						<div class='paging_text'>Page <span class='span__page'>page</span> from <span class='span__limit'>limit</span></div>
						<div class='btn__next' style='cursor: pointer;'>&gt;</div>
					</div>
		`
		// , template : "{common.prev()}<div class='paging_text'>Page {common.page()} from #limit#</div>{common.next()}"
		// , template : "{common.first()}{common.pages()}{common.last()}"
		// , template : "{common.pages()}"
	}
};

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT - DISPATCH EVENTS;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

/**
 * @function
 * @param {Event}
 */
var _evt_resize = function( event )
{
	window.clearTimeout( _evt_resize._TIMEOUT );
	_evt_resize._TIMEOUT = window.setTimeout( _evt_resize.resize, 1000 );
};
_evt_resize._TIMEOUT = -1;
_evt_resize.resize = function(){ _setWidth( "100%" ); _setHeight( "100%" ); _redraw( null, null ); };

/**
 * List Item click
 * @function
 * @param {String|Number} id
 * @param {Event} e
 */
var _evt_mClick__item = function( id, e )
{
	//event : rowID;
	if( _DATA && _DATA.hasOwnProperty( "DHTMLX" ) && _DATA.DHTMLX.hasOwnProperty( "data" ) )
	{
		var idx = _DHTMLX.list.getFocusIndex( event );

		window.b2link.event.dispatchCE__LIST_SELECTED_ITEM( _ELS.DIV__LIST, {
			selected_item : _DATA.DHTMLX.data[ idx ]
		});
	}
};

/**
 * 이 파일 내의 모든 전처리 Logic 및 Flow가 완료 된 후 필요한 객체를 생성 및 화면 표출 로직을 집어 넣는 함수
 * @function
 */
function initialize()
{
	try
	{
		//공통 Interface 규약 체크, Change UniqueId;
		_THIS.super.initialize();

		//Set Width, Height;
		if( _DATA.width  ){ if( !_getWidth()  ) _setWidth(  _DATA.width ); } else _setWidth( "100%");
		if( _DATA.height ){ if( !_getHeight() ) _setHeight( _DATA.height ); } else _setHeight( null );

		//RESIZE;
		window.addEventListener( "resize", _evt_resize, false, 0, true );

		//window.b2link.event.DATA_LOAD_COMPLETE Event Listener 추가;
		_THIS.super.addEvent__DATA_LOAD_COMPLETE( function( event ){
			var EVENT_DATA = event.detail;

			//Event Dispatch 시키는 곳에서 이벤트 객체의 구조는 필요에 따라 변경 될 수 있다.;
			_redraw( EVENT_DATA.data, null );
		});

		//_약속된 HTMLElement인 this.T.els.ROOT를 통해 window.b2link.event.INITIALIZED 이벤트를 Dispatch 시킨다.;
		_THIS.super.dispatchCE__INITIALIZED( _THIS );

		initialize._bInit = 1;
	}
	catch( er )
	{
		window.TtwLog.log( "[ ERROR ] - initialize - " + er );
		return;
	}
};
initialize._bInit = 0;

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * 아이템 추가
 * @function
 * @param{Object} d
 * <code>
	{ "value": "Learning DHTMLX Suite UI","isbn": "184969933X","pageCount": 132,"publishedDate": {"$date": "2013-10-25T00:00:00.000-0700"},"thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/I/61ot4vfL9HL.jpg","shortDescription": "Create your first single-page JavaScript application using multiple DHTMLX components and a touch of HTML5","longDescription": "Learning DHTMLX Suite UI is for web designers who have a basic knowledge of JavaScript and who are looking for powerful tools that will give them an extra edge in their own application development. This book is also useful for experienced developers who wish to get started with DHTMLX without going through the trouble of learning its quirks through trial and error. Readers are expected to have some knowledge of JavaScript, HTML, Document Object Model, and the ability to install a local web server.","status": "PUBLISH","authors": ["Eli Geske"],"categories": ["Web Development","JavaScript"] }
 * </code>
 */
var _addItem = function( d )
{
	_DHTMLX.list.data.add( d );
};

/**
 * @function
 * @param{Object} d
 * <code>
	{
		DHTMLX : {
			data : [
				{"id":"1","name":"Sigmund Steuber","address":"866 Kris Drive","city":"North Rosettabury","state":"NH","zip":"69167"}
				, {"id":"2","name":"Darion Considine","address":"8318 Kristy Skyway","city":"Vernerside","state":"WA","zip":"01338"}
				, {"id":"3","name":"Reid Raynor","address":"63041 Parisian Run","city":"Nolanberg","state":"MN","zip":"08625-2763"}
				, {"id":"4","name":"Angus Conroy","address":"528 Considine Viaduct","city":"Nelschester","state":"ME","zip":"42589-0752"}
				, {"id":"5","name":"Grace Friesen","address":"212 Adelle Plaza","city":"New Stephany","state":"OR","zip":"70658-1454"}
				, {"id":"6","name":"Lonny DuBuque","address":"353 Lorenz Fords","city":"West Easton","state":"OK","zip":"49704-5220"}
				, {"id":"7","name":"Dock Ward","address":"28354 Predovic Corner","city":"New Napoleon","state":"AZ","zip":"35039-5934"}
				, {"id":"8","name":"Kaya Wiza","address":"73313 Gregory Port","city":"Maggiobury","state":"IL","zip":"51553"}
				, {"id":"9","name":"Gideon Olson","address":"7423 Wiza Station","city":"Botsfordberg","state":"OH","zip":"61022"}
				, {"id":"10","name":"Imelda Dicki","address":"198 Koby Junctions","city":"Daronport","state":"CA","zip":"77571"}
			]
		}
	}
 * </code>
 * @return{Object} option
 */
var _createOptions = function( d )
{
	var option = null;
	if( !d.DHTMLX )
	{
		window.TtwLog.error( "[ ERROR ] - _createOptions : d 가 불충분함" );
		return;
	}
	return option;
};

/**
 * @function
 */
var _dispose = function()
{
	//dispose를 위한 각종 로직 삽입;
	//dispose를 위한 각종 로직 삽입;
	if( _DHTMLX.list != null )
	{
		_DHTMLX.list.destructor();
		_DHTMLX.list = null;
	}

	//감지가 필요하면 삽입;
	//window.b2link.event.dispatchCE__DISPOSED_JS( _ELS.ROOT, _THIS );

	//----------마지막 라인에 필수 삽입;
	//이 객체에서 조작하는 대상 HTMLElement에 종속된 HTML을 제거한다;
	//이 객체에서 조작하는 대상 HTMLElement를 삭제한다;
	//_ELS.ROOT 를 제거했다는 dispatchCE__DISPOSED_EL 발생;
	_THIS.super.dispose();
	//----------마지막라인 에 필수 삽입;
};

/**
 * 그리기
 * @function
 * @param {Array|Object} data
 * <code>
	{
		DHTMLX : {
			//[ 필수 ] - title에 존재하는 프로퍼티와 동일한 키값으로 데이터가 존재 해야한다. - abcde순서
			data : [
				{"value": "Learning DHTMLX Suite UI","isbn": "184969933X","pageCount": 132,"publishedDate": {"$date": "2013-10-25T00:00:00.000-0700"},"thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/I/61ot4vfL9HL.jpg","shortDescription": "Create your first single-page JavaScript application using multiple DHTMLX components and a touch of HTML5","longDescription": "Learning DHTMLX Suite UI is for web designers who have a basic knowledge of JavaScript and who are looking for powerful tools that will give them an extra edge in their own application development. This book is also useful for experienced developers who wish to get started with DHTMLX without going through the trouble of learning its quirks through trial and error. Readers are expected to have some knowledge of JavaScript, HTML, Document Object Model, and the ability to install a local web server.","status": "PUBLISH","authors": ["Eli Geske"],"categories": ["Web Development","JavaScript"]}
				,{"value": "Unlocking Android","isbn": "1933988673","pageCount": 416,"publishedDate": {"$date": "2009-04-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg","shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.","longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.WHAT'S INSIDE:* Android's place in the market* Using the Eclipse environment for Android development* The Intents - how and why they are used* Application classes:o Activityo Serviceo IntentReceiver * User interface design* Using the ContentProvider to manage data* Persisting data with the SQLite database* Networking examples* Telephony applications* Notification methods* OpenGL, animation & multimedia* Sample Applications","status": "PUBLISH","authors": ["W. Frank Ableson","Charlie Collins","Robi Sen"],"categories": ["Open Source","Mobile"]}
				,{"value": "Android in Action, Second Edition","isbn": "1935182722","pageCount": 592,"publishedDate": {"$date": "2011-01-14T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg","shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ","longDescription": "When it comes to mobile apps, Android can do almost anything and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ","status": "PUBLISH","authors": ["W. Frank Ableson","Robi Sen"],"categories": ["Java"]}
				,{"value": "Specification by Example","isbn": "1617290084","pageCount": 0,"publishedDate": {"$date": "2011-06-03T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg","status": "PUBLISH","authors": ["Gojko Adzic"],"categories": ["Software Engineering"]}
				,{"value": "Flex 3 in Action","isbn": "1933988746","pageCount": 576,"publishedDate": {"$date": "2009-02-02T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg","longDescription": "New web applications require engaging user-friendly interfaces and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.Interesting themes, styles, and skinsIt's in there.Working with databasesYou got it.Interactive forms and validationYou bet.Charting techniques to help you visualize dataBam!The expert authors of Flex 3 in Action have one goal to help you get down to business with Flex 3. Fast.Many Flex books are overwhelming to new users focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.","status": "PUBLISH","authors": ["Tariq Ahmed with Jon Hirschi","Faisal Abid"],"categories": ["Internet"]}
				,{"value": "Collective Intelligence in Action","isbn": "1933988312","pageCount": 425,"publishedDate": {"$date": "2008-10-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg","longDescription": "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at onceIdentifying the wants, needs, and knowledge of internet users can be like listening to a mob.In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles the collective intelligence locked in the data people leave behind as they surf websites, post blogs, and interact with other users.Collective Intelligence in Action is a hands-on guidebook for implementing collective-intelligence concepts using Java. It is the first Java-based book to emphasize the underlying algorithms and technical implementation of vital data gathering and mining techniques like analyzing trends, discovering relationships, and making predictions. It provides a pragmatic approach to personalization by combining content-based analysis with collaborative approaches.This book is for Java developers implementing collective intelligence in real, high-use applications. Following a running example in which you harvest and use information from blogs, you learn to develop software that you can embed in your own applications. The code examples are immediately reusable and give the Java developer a working collective intelligence toolkit.Along the way, you work with, a number of APIs and open-source toolkits including text analysis and search using Lucene, web-crawling using Nutch, and applying machine learning algorithms using WEKA and the Java Data Mining (JDM) standard.","status": "PUBLISH","authors": ["Satnam Alag"],"categories": ["Internet"]}
				,{"value": "Zend Framework in Action","isbn": "1933988320","pageCount": 432,"publishedDate": {"$date": "2008-12-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg","shortDescription": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.","longDescription": "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result. For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.","status": "PUBLISH","authors": ["Rob Allen","Nick Lo","Steven Brown"],"categories": ["Web Development"]}
			]
		}
		, itemHeight : 30
		, useSort : true

		, width : ( d.width || 320 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options dtx.List의 options
 * <code>
	{
		itemHeight : 30
		, useFilter : true
		, useSort : true
	}
 * </code>
 */
var _draw = function( data, options )
{
	//data Parameter 처리 - _DATA를 정의한 방식에 따라 로직이 달라져야 한다;
	if( data ) _setData({ data : data });
	else data = _DATA;

	//options Parameter 처리;
	if( options ) _setOptions( options );
	else
	{
		options = _OPTIONS;

		//data 기반으로 Options 생성하기;
		_createOptions( data );
	}

	//그리기 위한 로직 추가;
	_DHTMLX.list = new window.dhx.List( _ELS.DIV__LIST.id, data.DHTMLX );
	_DHTMLX.list.events.on( "click", _evt_mClick__item );

	//DHTMLX List Component에 JSON 데이터 삽임;
	_DHTMLX.list.data.parse( data.DHTMLX.data, "json" );
};

/**
 * 다시 그리기
 * @function
 * @param {Array|Object} data
 * <code>
	{
		DHTMLX : {
			//[ 필수 ] - title에 존재하는 프로퍼티와 동일한 키값으로 데이터가 존재 해야한다. - abcde순서
			data : [
				{"value": "Learning DHTMLX Suite UI","isbn": "184969933X","pageCount": 132,"publishedDate": {"$date": "2013-10-25T00:00:00.000-0700"},"thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/I/61ot4vfL9HL.jpg","shortDescription": "Create your first single-page JavaScript application using multiple DHTMLX components and a touch of HTML5","longDescription": "Learning DHTMLX Suite UI is for web designers who have a basic knowledge of JavaScript and who are looking for powerful tools that will give them an extra edge in their own application development. This book is also useful for experienced developers who wish to get started with DHTMLX without going through the trouble of learning its quirks through trial and error. Readers are expected to have some knowledge of JavaScript, HTML, Document Object Model, and the ability to install a local web server.","status": "PUBLISH","authors": ["Eli Geske"],"categories": ["Web Development","JavaScript"]}
				,{"value": "Unlocking Android","isbn": "1933988673","pageCount": 416,"publishedDate": {"$date": "2009-04-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg","shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.","longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.WHAT'S INSIDE:* Android's place in the market* Using the Eclipse environment for Android development* The Intents - how and why they are used* Application classes:o Activityo Serviceo IntentReceiver * User interface design* Using the ContentProvider to manage data* Persisting data with the SQLite database* Networking examples* Telephony applications* Notification methods* OpenGL, animation & multimedia* Sample Applications","status": "PUBLISH","authors": ["W. Frank Ableson","Charlie Collins","Robi Sen"],"categories": ["Open Source","Mobile"]}
				,{"value": "Android in Action, Second Edition","isbn": "1935182722","pageCount": 592,"publishedDate": {"$date": "2011-01-14T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg","shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ","longDescription": "When it comes to mobile apps, Android can do almost anything and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ","status": "PUBLISH","authors": ["W. Frank Ableson","Robi Sen"],"categories": ["Java"]}
				,{"value": "Specification by Example","isbn": "1617290084","pageCount": 0,"publishedDate": {"$date": "2011-06-03T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg","status": "PUBLISH","authors": ["Gojko Adzic"],"categories": ["Software Engineering"]}
				,{"value": "Flex 3 in Action","isbn": "1933988746","pageCount": 576,"publishedDate": {"$date": "2009-02-02T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg","longDescription": "New web applications require engaging user-friendly interfaces and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.Interesting themes, styles, and skinsIt's in there.Working with databasesYou got it.Interactive forms and validationYou bet.Charting techniques to help you visualize dataBam!The expert authors of Flex 3 in Action have one goal to help you get down to business with Flex 3. Fast.Many Flex books are overwhelming to new users focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.","status": "PUBLISH","authors": ["Tariq Ahmed with Jon Hirschi","Faisal Abid"],"categories": ["Internet"]}
				,{"value": "Collective Intelligence in Action","isbn": "1933988312","pageCount": 425,"publishedDate": {"$date": "2008-10-01T00:00:00.000-0700"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg","longDescription": "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at onceIdentifying the wants, needs, and knowledge of internet users can be like listening to a mob.In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles the collective intelligence locked in the data people leave behind as they surf websites, post blogs, and interact with other users.Collective Intelligence in Action is a hands-on guidebook for implementing collective-intelligence concepts using Java. It is the first Java-based book to emphasize the underlying algorithms and technical implementation of vital data gathering and mining techniques like analyzing trends, discovering relationships, and making predictions. It provides a pragmatic approach to personalization by combining content-based analysis with collaborative approaches.This book is for Java developers implementing collective intelligence in real, high-use applications. Following a running example in which you harvest and use information from blogs, you learn to develop software that you can embed in your own applications. The code examples are immediately reusable and give the Java developer a working collective intelligence toolkit.Along the way, you work with, a number of APIs and open-source toolkits including text analysis and search using Lucene, web-crawling using Nutch, and applying machine learning algorithms using WEKA and the Java Data Mining (JDM) standard.","status": "PUBLISH","authors": ["Satnam Alag"],"categories": ["Internet"]}
				,{"value": "Zend Framework in Action","isbn": "1933988320","pageCount": 432,"publishedDate": {"$date": "2008-12-01T00:00:00.000-0800"},"thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg","shortDescription": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.","longDescription": "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result. For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.","status": "PUBLISH","authors": ["Rob Allen","Nick Lo","Steven Brown"],"categories": ["Web Development"]}
			]
		}
		, itemHeight : 30
		, useSort : true

		, width : ( d.width || 320 )
		, height : ( d.height || 200 )
	}
 * </code>
 * @param {null|Object} options dtx.List의 options
 * <code>
	{

		itemHeight : 30
		, useFilter : true
		, useSort : true
	}
 * </code>
 */
var _redraw = function( data, options )
{
	//redraw를 위한 전처리 로직 추가;
	if( _DHTMLX.list != null )
	{
		_DHTMLX.list.destructor();
		_DHTMLX.list = null;
	}

	_draw( data, options );
};

/**
 * 리스트 아이템 전체 삭제
 * @function
 */
var _removeAllItems = function()
{
	_DHTMLX.list.data.removeAll();
};


/**
 * 리스트 아이템 삭제
 * @function
 * @param {String} item
 */
var _removeItem = function( item )
{
	//var item = _DHTMLX.list.getFocusItem( id );
	_DHTMLX.list.data.remove();
};

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * <code>
 	function( event ){
		var t = event.target//XHR;
		//...;
	}
 * </code>
 */
var _reqData = function( url, cbComplete )
{
	var FN = function( responseData ){
		//ERROR;
		if( !responseData )
		{
			window.TtwLog.error( "[ ERROR ] - _reqData - responseData : " + responseData );
			return;
		}

		var json = JSON.parse( responseData );

		_setData({ data : json });

		if( cbComplete ) cbComplete( json );

		//데이터 로딩이 완료 된 후 로딩완료 이벤트를 dispatch 시킨다.;
		_THIS.super.dispatchCE__DATA_LOAD_COMPLETE( json );
	};

	window.b2link.xhr.req_String( url, FN );
};

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

/**
 * 데이터 키값을 가져온다
 * @function
 * @return {Array} [ "key0", "key1", ... ]
 */
var _getComponentDataPropertyNames = function()
{
	var a;
	if( _DHTMLX.list.data._order && _DHTMLX.list.data._order.length > 0 ) a = Object.keys( _DHTMLX.list.data._order[ 0 ] );
	return a;
};

//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;

/**
 * [ 수정하기 ] - 송선우 - 상위 클래스로 이동 시키기
 * _IDS.ROOT의 id를 기반으로 URI Path를 가져온다.
 * @function
 * @return {String}
 */
var _getURIFromROOT = function(){ return _IDS.ROOT.replace( "\-\-.*", "" ); };


/**
 * [ 수정하기 ] - 송선우 - 상위 클래스로 이동 시키기
 * _IDS.ROOT의 id를 기반으로 URL을 가져온다.
 * @function
 * @return {String}
 */
var _getURLFromROOT = function(){ return window.b2link.url.getServerURL_WebServer_SCODE( "SYS0310" ) + "/" + _getURIFromROOT(); };

//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;
//------------------------------;

//--------------------------------------------------SET;

/**
 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
 * @function
 * @param {Object} d url과 data는 병행 사용 불가능하다.
 * <code>
	{
		"url" : {String}
		, "data" : {Array}
		, "options" : {Object}
	}
 * </code>
 */
var _setData = function( d )
{
	if( !d )
	{
		//window.TtwLog.error( "[ ERROR ] - _setData : d가 존재하지 않음" );
		return;
	}

	if( d )
	{
		if( d.options )
		{
			_setOptions( d.options );
		}

		if( d.data )
		{
			_DATA.data = d.data;
		}
		else
		{
			if( d.url )
			{
				_reqData( d.url, null );
			}
		}
	}
};

/**
 * set Chart(EChart) Options
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
var _setOptions = function( d )
{
	if( !d )
	{
		//window.TtwLog.error( "[ ERROR ] - _setOptions : d가 존재하지 않음" );
		return;
	}

	if( d )
	{
		//_OPTIONS 덮어쓰기 로직 작성;
		if( d.DHTMLX.itemHeight ) _OPTIONS.itemHeight = d.DHTMLX.itemHeight;
		if( d.DHTMLX.dragMode ) _OPTIONS.dragMode = d.DHTMLX.dragMode;
		if( d.DHTMLX.css ) _OPTIONS.css = d.DHTMLX.css;
		if( d.DHTMLX.multiselection ) _OPTIONS.multiselection = d.DHTMLX.multiselection;
		if( d.DHTMLX.select ) _OPTIONS.select = d.DHTMLX.select;
		if( d.DHTMLX.useFilter ) _OPTIONS.useFilter = d.DHTMLX.useFilter;
		if( d.DHTMLX.useSort ) _OPTIONS.useSort = d.DHTMLX.useSort;
		if( d.DHTMLX.pagger ) _OPTIONS.useSort = d.DHTMLX.pagger;
	}
	else
	{
	}
};

//--------------------------------------------------GET & SET;

var _getHeight = function(){ return _THIS.super.getHeight(); };
var _setHeight = function( s ){

	if( null == s ) var s = _ELS.ROOT.parentElement.clientHeight || ( window.screen.availHeight + _setHeight.TERM_HEIGHT );

	_THIS.super.setHeight( s );
};
//_setHeight.TERM_HEIGHT = 0;//ETC;
//_setHeight.TERM_HEIGHT = -150;//EChart;
//_setHeight.TERM_HEIGHT = -120;//Sparkline;

var _getWidth = function(){ return _THIS.super.getWidth(); };
var _setWidth = function( s ){ _THIS.super.setWidth( s ); };

//--------------------------------------------------GETTER & SETTER;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	INSTALL_UI;

//----------------------------------------------------------------------------------------------------;

/**
 * _DHTMLX.list 에 존재하는 데이터를 기반으로 UI를 생성한다.
 * @function
 */
var _INSTALL_UI = {
	getPARAM : function(){
		return {
			_THIS : _THIS
			, _DATA : _DATA
			, _OPTIONS : _OPTIONS

			, uiTargetComponent : _DHTMLX
		};
	}
};
	//UI - 페이징 처리;
	_INSTALL_UI.pagger = function( PARAM ){
		//CUSTOM PROPERTY;
		if( _DHTMLX.list )
		{
			var PARAM = _INSTALL_UI.getPARAM();

			if( _OPTIONS.pagger )
			{
				//display: "";
				_ELS.DIV__PAGGING.innerHTML = _OPTIONS.pagger.template;
				window.b2link.element.show( _ELS.DIV__PAGGING );

				//List Element 위에 배치한다.;
				_ELS.DIV__LIST.insertAdjacentElement( "afterend", _ELS.DIV__PAGGING );

				var url = _getURLFromROOT();

				window.b2link.util.importJS__Reuse( url + ".install.ui.pagger.js", PARAM );
			}
			else
			{
				//display: none;
				window.b2link.element.hide( _ELS.DIV__PAGGING );
			}
		}
	};
	//UI - 검색 필터 처리;
	_INSTALL_UI.search = function( PARAM ){
		//CUSTOM PROPERTY;
		if( _DHTMLX.list )
		{
			var PARAM = _INSTALL_UI.getPARAM();

			if( _OPTIONS.useFilter )
			{
				//display: "";
				window.b2link.element.show( _ELS.INSTALL_UI );

				//List Element 위에 배치한다.;
				_ELS.DIV__LIST.insertAdjacentElement( "beforebegin", _ELS.INSTALL_UI );

				var url = _getURLFromROOT();

				window.b2link.util.importJS__Reuse( url + ".install.ui.search.js", PARAM );
			}
			else
			{
				//display: none;
				window.b2link.element.hide( _ELS.DIV__FILTER );
			}
		}
	};
	//UI - 정렬 처리;
	_INSTALL_UI.sort = function( PARAM ){
		//CUSTOM PROPERTY;
		if( _DHTMLX.list )
		{
			var PARAM = _INSTALL_UI.getPARAM();

			if( _OPTIONS.useSort )
			{
				//display: "";
				window.b2link.element.show( _ELS.INSTALL_UI );

				//List Element 위에 배치한다.;
				_ELS.DIV__LIST.insertAdjacentElement( "beforebegin", _ELS.INSTALL_UI );

				var url = _getURLFromROOT();

				window.b2link.util.importJS__Reuse( url + ".install.ui.sort.js", PARAM );
			}
			else
			{
				//display: none;
				window.b2link.element.hide( _ELS.DIV__SORT );
			}
		}
	};

/**
 * DHTMLX 6.2.2 - List
 * @example
 * <code>
 * </code>
 */
(function(){
	var _ = _THIS;
		_.els = _ELS;

		_.addItem = _addItem;

		_.dispose = _dispose;

		_.draw = _draw;
		_.redraw = _redraw;

		_.removeAllItems = _removeAllItems;
		_.removetem = _removeItem;

		_.reqData = _reqData;

		_.getComponentDataPropertyNames = _getComponentDataPropertyNames;

		_.setData = _setData;

		_.getHeight = _getHeight;
		_.setHeight = _setHeight;

		_.getWidth = _getWidth;
		_.setWidth = _setWidth;

		_.INSTALL_UI = _INSTALL_UI;

	//Resize 대상 객체를 Observer 패턴에 추가한다;
	//아직 기능 개발 되있지 않음;
	//필수 Interface가 존재함 - 미정의;
	//window.????.????.push( _ );

	if( !initialize._bInit ) initialize();

	return _;
})();