"use-strict";
// Pre-loading Screen Overlay?
 let UsrMetrix = [];
 let MenuItems = [];
 let PageActions = [];
 let ScrollAmnt = undefined;
 let IframeConn = undefined;

// ::>> Example Only
 var text = '{ "employees" : [' +
            '{ "firstName":"John" , "lastName":"Doe" },' +
            '{ "firstName":"Anna" , "lastName":"Smith" },' +
            '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

	// ::>> Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
        var obj = JSON.parse(text);
    // ::>> UsrMetrix - - Device width, Device Height, User Agent : browser,
                       // Os, Ios etc, First Conn Time, Js-Disabled, Sensors,
                       // CountryLocation, Cookies? Refferer?

  //let e = e || evt || event;
	console.log("Js File Loaded Successfully");

	document.addEventListener("DOMContentLoaded",(function(){
		    let tick_one = performance.now();
		    console.log(tick_one)

        /* Wait 180ms after page load and use gsap to fade items it, draw in from sides etc..
           Consider using parallax aswell... */
        let h1Anime = gsap.to();
        let h2Anime = gsap.to();

        let navMenu = gsap.to();


		//if(!document.worker()){
		//	console.log("::>> err somewhere");
		//}
		console.log("DomC Ran Successfully");



/* ::>> Three.js Set-up <<:: */
        function ThreeActive(){
             // Move three Code inside here for modularity...
        }ThreeActive();
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
/* ::>> Three.js Set-up <<:: */








		let docu = document;
		  let bodi = docu.querySelector("body");
		  let header = docu.querySelector("header");
		  let xhr_video = docu.getElementsByClassName("xhr_video_request")[0];

		  xhr_video.addEventListener("mousedown",(e) => {
                  e.preventDefault();
                  console.log("Testing ::>> no err"); // move around for testing errors.
                  var vid_xhttp = new XMLHttpRequest();
                  //fetch();
		    // fetch extra videos, bump others out of view..
		  });
	})) /* ::>> Closing Tag for the MAIN body DOMC loaded event */


/* ::>> Use PreventDefault on all top Nav a links then use Ajax/xhr to load in other content .... */
		//document.querySelector("#id-checkbox").addEventListener("click", function(event) {
		//         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
		//         event.preventDefault();
		//}, false);